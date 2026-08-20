"use server";

import { prisma } from "@/lib/db";
import { requireApiAuth } from "@/lib/access";
import { Prisma, type Role } from "@/generated/prisma";

import { eventBus } from "@/lib/events";

// ─────────────────────────────────────────────
// Order Status Transitions
// ─────────────────────────────────────────────

export async function updateOrderStatus(
  venueId: string,
  orderId: string,
  newStatus: string,
  allowedRoles: Role[]
) {
  await requireApiAuth(allowedRoles, venueId);

  const order = await prisma.order.update({
    where: { id: orderId },
    data: { status: newStatus },
    include: {
      tableSession: true,
    },
  });

  // Emit SSE order status update
  eventBus.emit(`order-update:${venueId}`, {
    type: "order-status-change",
    orderId: order.id,
    status: newStatus,
    tableSessionId: order.tableSessionId,
  });

  return { success: true };
}

export async function getSessionOrders(venueId: string, sessionId: string) {
  const orders = await prisma.order.findMany({
    where: {
      venueId,
      tableSessionId: sessionId,
      status: { not: "CANCELLED" },
    },
    include: {
      items: {
        include: {
          menuItem: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return JSON.parse(JSON.stringify(orders));
}

// ─────────────────────────────────────────────
// Table Session Lifecycle
// ─────────────────────────────────────────────

export async function openTableSession(venueId: string, tableId: string) {
  await requireApiAuth(["WAITER"], venueId);

  // Close any existing session first
  const table = await prisma.table.findUnique({ where: { id: tableId } });
  if (table?.activeSessionId) {
    await prisma.tableSession.update({
      where: { id: table.activeSessionId },
      data: { endedAt: new Date() },
    });
  }

  // Create new session
  const session = await prisma.tableSession.create({
    data: { venueId, tableId },
  });

  await prisma.table.update({
    where: { id: tableId },
    data: { activeSessionId: session.id },
  });

  return { success: true, sessionId: session.id };
}

export async function closeTableSession(venueId: string, tableId: string) {
  await requireApiAuth(["WAITER", "CASHIER"], venueId);

  const table = await prisma.table.findUnique({ where: { id: tableId } });
  if (!table?.activeSessionId) {
    return { success: true }; // Already closed
  }

  await prisma.tableSession.update({
    where: { id: table.activeSessionId },
    data: { endedAt: new Date() },
  });

  await prisma.table.update({
    where: { id: tableId },
    data: { activeSessionId: null },
  });

  return { success: true };
}

// ─────────────────────────────────────────────
// Call Waiter Dismiss
// ─────────────────────────────────────────────

export async function dismissWaiterCall(venueId: string, tableId: string) {
  await requireApiAuth(["WAITER"], venueId);

  await prisma.table.update({
    where: { id: tableId },
    data: { waiterCalled: false, waiterCalledAt: null },
  });

  return { success: true };
}

// ─────────────────────────────────────────────
// Cashier: Close Session & Checkout
// ─────────────────────────────────────────────

export async function closeSessionAndCheckout(venueId: string, sessionId: string) {
  await requireApiAuth(["CASHIER"], venueId);

  // Close all orders in this session
  await prisma.order.updateMany({
    where: { tableSessionId: sessionId, venueId },
    data: { status: "CLOSED" },
  });

  // Find the table for this session and close it
  const session = await prisma.tableSession.findUnique({
    where: { id: sessionId },
  });

  if (session) {
    await prisma.tableSession.update({
      where: { id: sessionId },
      data: { endedAt: new Date() },
    });

    await prisma.table.update({
      where: { id: session.tableId },
      data: { activeSessionId: null },
    });
  }

  return { success: true };
}

// ─────────────────────────────────────────────
// Data Fetchers (called by server components)
// ─────────────────────────────────────────────

export async function getBaristaOrders(venueId: string) {
  const orders = await prisma.order.findMany({
    where: { venueId, status: { in: ["PENDING", "PREPARING"] } },
    include: {
      items: { include: { menuItem: true } },
      tableSession: { include: { table: true } },
    },
    orderBy: { createdAt: "asc" },
  });
  return JSON.parse(JSON.stringify(orders));
}

export async function getWaiterOrders(venueId: string) {
  const orders = await prisma.order.findMany({
    where: { venueId, status: "BARISTA_DONE" },
    include: {
      items: { include: { menuItem: true } },
      tableSession: { include: { table: true } },
    },
    orderBy: { createdAt: "asc" },
  });
  return JSON.parse(JSON.stringify(orders));
}

export async function getVenueTables(venueId: string) {
  const tables = await prisma.table.findMany({
    where: { venueId },
    include: {
      sessions: {
        where: { endedAt: null },
        include: {
          orders: {
            where: { status: { not: "CANCELLED" } },
            include: {
              items: { include: { menuItem: true } },
            },
          },
        },
        take: 1,
      },
    },
    orderBy: { label: "asc" },
  });
  return JSON.parse(JSON.stringify(tables));
}

export async function getCashierSessions(venueId: string) {
  const sessions = await prisma.tableSession.findMany({
    where: { venueId, endedAt: null },
    include: {
      table: true,
      orders: {
        where: { status: { not: "CLOSED" } },
        include: { items: { include: { menuItem: true } } },
      },
    },
    orderBy: { startedAt: "asc" },
  });
  return JSON.parse(JSON.stringify(sessions));
}

export async function getInventoryData(venueId: string) {
  const [ingredients, menuItems, categories] = await Promise.all([
    prisma.ingredient.findMany({ where: { venueId }, orderBy: { name: "asc" } }),
    prisma.menuItem.findMany({ 
      where: { venueId }, 
      include: { recipeItems: { include: { ingredient: true } }, category: true },
      orderBy: { name: "asc" } 
    }),
    prisma.category.findMany({ where: { venueId }, orderBy: { orderIndex: "asc" } }),
  ]);
  return JSON.parse(JSON.stringify({ ingredients, menuItems, categories }));
}

export async function getManagerData(venueId: string) {
  const [orders, staff, tables, totalRevenue, ingredients, categories] = await Promise.all([
    prisma.order.findMany({ 
      where: { venueId }, 
      orderBy: { createdAt: "desc" }, 
      include: { items: { include: { menuItem: true } } } 
    }),
    prisma.staffAccount.findMany({ where: { venueId }, orderBy: { name: "asc" } }),
    prisma.table.findMany({ where: { venueId }, orderBy: { label: "asc" } }),
    prisma.order.aggregate({
      where: { venueId, status: { in: ["CLOSED", "SERVED"] } },
      _sum: { totalAmount: true, tipAmount: true },
      _count: { id: true },
    }),
    prisma.ingredient.findMany({ where: { venueId }, orderBy: { stock: "asc" } }),
    prisma.category.findMany({ where: { venueId }, orderBy: { orderIndex: "asc" } }),
  ]);

  return JSON.parse(JSON.stringify({ 
    orders, 
    staff, 
    tables, 
    revenue: totalRevenue._sum,
    totalClosedOrdersCount: totalRevenue._count.id,
    ingredients,
    categories
  }));
}

export async function quickRestockIngredient(venueId: string, ingredientId: string, addAmount: number) {
  await requireApiAuth(["MANAGER", "INVENTORY"], venueId);

  const updated = await prisma.ingredient.update({
    where: { id: ingredientId },
    data: { stock: { increment: addAmount } },
  });

  // If stock is now positive, mark dependent recipes in-stock
  if (Number(updated.stock) > 0) {
    const dependentRecipes = await prisma.recipeItem.findMany({
      where: { ingredientId: updated.id },
    });
    for (const dep of dependentRecipes) {
      await prisma.menuItem.update({
        where: { id: dep.menuItemId },
        data: { outOfStock: false },
      });
    }
  }

  return { success: true };
}

// ─────────────────────────────────────────────
// Menu Item CRUD & Stock Toggle Actions
// ─────────────────────────────────────────────

export async function createMenuItem(
  venueId: string,
  data: {
    name: string;
    description?: string;
    price: number;
    categoryId: string;
    imageUrl?: string;
    outOfStock?: boolean;
    quizTags?: string[];
    recipeItems?: Array<{ ingredientId: string; quantityUsed: number }>;
  }
) {
  await requireApiAuth(["MANAGER", "INVENTORY"], venueId);

  const { name, description, price, categoryId, imageUrl, outOfStock, quizTags, recipeItems } = data;

  const menuItem = await prisma.menuItem.create({
    data: {
      venueId,
      name,
      description: description || null,
      price: price,
      categoryId,
      imageUrl: imageUrl || null,
      outOfStock: outOfStock ?? false,
      quizTags: quizTags && quizTags.length > 0 ? quizTags : Prisma.DbNull,
      recipeItems: recipeItems && recipeItems.length > 0 ? {
        create: recipeItems.map((r) => ({
          venueId,
          ingredientId: r.ingredientId,
          quantityUsed: r.quantityUsed,
        })),
      } : undefined,
    },
    include: {
      category: true,
      recipeItems: { include: { ingredient: true } },
    },
  });

  // Emit SSE update for menu
  eventBus.emit(`menu-update:${venueId}`, {
    type: "menu-item-created",
    menuItemId: menuItem.id,
  });

  return { success: true, item: JSON.parse(JSON.stringify(menuItem)) };
}

export async function updateMenuItem(
  venueId: string,
  menuItemId: string,
  data: {
    name?: string;
    description?: string;
    price?: number;
    categoryId?: string;
    imageUrl?: string;
    outOfStock?: boolean;
    quizTags?: string[];
    recipeItems?: Array<{ ingredientId: string; quantityUsed: number }>;
  }
) {
  await requireApiAuth(["MANAGER", "INVENTORY"], venueId);

  const { name, description, price, categoryId, imageUrl, outOfStock, quizTags, recipeItems } = data;

  await prisma.$transaction(async (tx) => {
    await tx.menuItem.update({
      where: { id: menuItemId },
      data: {
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description: description || null }),
        ...(price !== undefined && { price }),
        ...(categoryId !== undefined && { category: { connect: { id: categoryId } } }),
        ...(imageUrl !== undefined && { imageUrl: imageUrl || null }),
        ...(outOfStock !== undefined && { outOfStock }),
        ...(quizTags !== undefined && { quizTags: quizTags.length > 0 ? quizTags : Prisma.DbNull }),
      },
    });

    if (recipeItems !== undefined) {
      await tx.recipeItem.deleteMany({
        where: { menuItemId },
      });
      if (recipeItems.length > 0) {
        await tx.recipeItem.createMany({
          data: recipeItems.map((r) => ({
            venueId,
            menuItemId,
            ingredientId: r.ingredientId,
            quantityUsed: r.quantityUsed,
          })),
        });
      }
    }
  });

  const updatedItem = await prisma.menuItem.findUnique({
    where: { id: menuItemId },
    include: {
      category: true,
      recipeItems: { include: { ingredient: true } },
    },
  });

  eventBus.emit(`menu-update:${venueId}`, {
    type: "menu-item-updated",
    menuItemId,
  });

  return { success: true, item: JSON.parse(JSON.stringify(updatedItem)) };
}

export async function deleteMenuItem(venueId: string, menuItemId: string) {
  await requireApiAuth(["MANAGER", "INVENTORY"], venueId);

  await prisma.$transaction(async (tx) => {
    await tx.recipeItem.deleteMany({ where: { menuItemId } });
    await tx.modifierOption.deleteMany({
      where: { modifierGroup: { menuItemId } },
    });
    await tx.modifierGroup.deleteMany({ where: { menuItemId } });
    await tx.orderItem.deleteMany({ where: { menuItemId } });
    await tx.menuItem.delete({ where: { id: menuItemId } });
  });

  eventBus.emit(`menu-update:${venueId}`, {
    type: "menu-item-deleted",
    menuItemId,
  });

  return { success: true };
}

export async function toggleMenuItemStock(venueId: string, menuItemId: string, outOfStock: boolean) {
  await requireApiAuth(["MANAGER", "INVENTORY"], venueId);

  const updated = await prisma.menuItem.update({
    where: { id: menuItemId },
    data: { outOfStock },
    include: {
      category: true,
      recipeItems: { include: { ingredient: true } },
    },
  });

  eventBus.emit(`menu-update:${venueId}`, {
    type: outOfStock ? "out-of-stock" : "in-stock",
    itemIds: [menuItemId],
  });

  return { success: true, item: JSON.parse(JSON.stringify(updated)) };
}

// ─────────────────────────────────────────────
// Category Management Actions
// ─────────────────────────────────────────────

export async function createCategory(venueId: string, data: { name: string; orderIndex?: number }) {
  await requireApiAuth(["MANAGER", "INVENTORY"], venueId);

  const maxOrder = await prisma.category.findFirst({
    where: { venueId },
    orderBy: { orderIndex: "desc" },
    select: { orderIndex: true },
  });

  const category = await prisma.category.create({
    data: {
      venueId,
      name: data.name,
      orderIndex: data.orderIndex ?? (maxOrder ? maxOrder.orderIndex + 1 : 0),
    },
  });

  eventBus.emit(`menu-update:${venueId}`, {
    type: "category-created",
    categoryId: category.id,
  });

  return { success: true, category: JSON.parse(JSON.stringify(category)) };
}

export async function updateCategory(
  venueId: string,
  categoryId: string,
  data: { name?: string; orderIndex?: number }
) {
  await requireApiAuth(["MANAGER", "INVENTORY"], venueId);

  const category = await prisma.category.update({
    where: { id: categoryId },
    data,
  });

  eventBus.emit(`menu-update:${venueId}`, {
    type: "category-updated",
    categoryId: category.id,
  });

  return { success: true, category: JSON.parse(JSON.stringify(category)) };
}

export async function deleteCategory(venueId: string, categoryId: string) {
  await requireApiAuth(["MANAGER", "INVENTORY"], venueId);

  const count = await prisma.menuItem.count({
    where: { categoryId },
  });

  if (count > 0) {
    throw new Error(`Cannot delete category with ${count} menu item(s). Please reassign or delete items first.`);
  }

  await prisma.category.delete({
    where: { id: categoryId },
  });

  eventBus.emit(`menu-update:${venueId}`, {
    type: "category-deleted",
    categoryId,
  });

  return { success: true };
}

// ─────────────────────────────────────────────
// Raw Ingredient Management Actions
// ─────────────────────────────────────────────

export async function createIngredient(
  venueId: string,
  data: {
    name: string;
    unit: string;
    stock: number;
    lowThreshold: number;
  }
) {
  await requireApiAuth(["MANAGER", "INVENTORY"], venueId);

  const ingredient = await prisma.ingredient.create({
    data: {
      venueId,
      name: data.name,
      unit: data.unit,
      stock: data.stock,
      lowThreshold: data.lowThreshold,
    },
  });

  return { success: true, ingredient: JSON.parse(JSON.stringify(ingredient)) };
}

export async function updateIngredient(
  venueId: string,
  ingredientId: string,
  data: {
    name?: string;
    unit?: string;
    stock?: number;
    lowThreshold?: number;
  }
) {
  await requireApiAuth(["MANAGER", "INVENTORY"], venueId);

  const ingredient = await prisma.ingredient.update({
    where: { id: ingredientId },
    data,
  });

  if (data.stock !== undefined && data.stock > 0) {
    const dependentRecipes = await prisma.recipeItem.findMany({
      where: { ingredientId },
    });
    for (const dep of dependentRecipes) {
      await prisma.menuItem.update({
        where: { id: dep.menuItemId },
        data: { outOfStock: false },
      });
    }
  }

  return { success: true, ingredient: JSON.parse(JSON.stringify(ingredient)) };
}

export async function deleteIngredient(venueId: string, ingredientId: string) {
  await requireApiAuth(["MANAGER", "INVENTORY"], venueId);

  const count = await prisma.recipeItem.count({
    where: { ingredientId },
  });

  if (count > 0) {
    throw new Error(`Cannot delete ingredient used in ${count} recipe(s). Please remove from recipes first.`);
  }

  await prisma.ingredient.delete({
    where: { id: ingredientId },
  });

  return { success: true };
}
