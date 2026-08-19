"use server";

import { prisma } from "@/lib/db";

import { eventBus } from "@/lib/events";

export async function submitOrder(data: {
  venueId: string;
  tableSessionId: string;
  tableId: string;
  customerName: string;
  notes: string;
  paymentMethod: string;
  tipAmount: number;
  totalAmount: number;
  items: Array<{
    menuItemId: string;
    quantity: number;
    addOns: Array<{ id: string; name: string; price: number }>;
  }>;
}) {
  const { venueId, tableSessionId, tableId, customerName, notes, paymentMethod, tipAmount, totalAmount, items } = data;

  // Ensure session is still active
  const session = await prisma.tableSession.findUnique({
    where: { id: tableSessionId },
  });

  if (!session || session.endedAt || session.tableId !== tableId) {
    throw new Error("Table session is no longer active");
  }

  // Create order
  const order = await prisma.order.create({
    data: {
      venueId,
      tableSessionId,
      customerName,
      notes,
      paymentMethod,
      tipAmount,
      totalAmount,
      status: "PENDING",
      items: {
        create: items.map((item) => ({
          venueId,
          menuItemId: item.menuItemId,
          quantity: item.quantity,
          addOns: item.addOns,
        })),
      },
    },
  });

  // Handle Inventory Decrement
  const outOfStockItemIds: string[] = [];

  for (const item of items) {
    const menuItem = await prisma.menuItem.findUnique({
      where: { id: item.menuItemId },
      include: { recipeItems: { include: { ingredient: true } } },
    });

    if (!menuItem) continue;

    for (const recipeItem of menuItem.recipeItems) {
      const quantityToDeduct = Number(recipeItem.quantityUsed) * item.quantity;
      
      const updatedIngredient = await prisma.ingredient.update({
        where: { id: recipeItem.ingredientId },
        data: { stock: { decrement: quantityToDeduct } },
      });

      // If stock hit zero or less, find all menu items that depend on it
      if (Number(updatedIngredient.stock) <= 0) {
        const dependentRecipes = await prisma.recipeItem.findMany({
          where: { ingredientId: updatedIngredient.id },
        });
        
        for (const dep of dependentRecipes) {
          // Mark out of stock in DB
          await prisma.menuItem.update({
            where: { id: dep.menuItemId },
            data: { outOfStock: true },
          });
          outOfStockItemIds.push(dep.menuItemId);
        }
      }
    }
  }

  // If any items went out of stock, broadcast to all connected customers
  if (outOfStockItemIds.length > 0) {
    eventBus.emit(`menu-update:${venueId}`, {
      type: "out-of-stock",
      itemIds: [...new Set(outOfStockItemIds)],
    });
  }

  // Broadcast new order to barista/waiter clients
  eventBus.emit(`order-update:${venueId}`, {
    type: "new-order",
    orderId: order.id,
  });

  return { success: true, orderId: order.id };
}

export async function callWaiter(venueId: string, tableId: string) {
  await prisma.table.update({
    where: { id: tableId },
    data: {
      waiterCalled: true,
      waiterCalledAt: new Date(),
    },
  });

  // Broadcast waiter call
  eventBus.emit(`waiter-call:${venueId}`, {
    type: "waiter-call",
    tableId,
  });

  return { success: true };
}
