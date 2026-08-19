"use server";

import { prisma } from "@/lib/db";
import { requireApiAuth } from "@/lib/access";
import type { Role } from "@/generated/prisma";

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

  await prisma.order.update({
    where: { id: orderId },
    data: { status: newStatus },
  });

  return { success: true };
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
    where: { venueId, status: "PENDING" },
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
  const [orders, staff, tables, totalRevenue] = await Promise.all([
    prisma.order.findMany({ where: { venueId }, orderBy: { createdAt: "desc" }, include: { items: { include: { menuItem: true } } } }),
    prisma.staffAccount.findMany({ where: { venueId }, orderBy: { name: "asc" } }),
    prisma.table.findMany({ where: { venueId }, orderBy: { label: "asc" } }),
    prisma.order.aggregate({
      where: { venueId, status: "CLOSED" },
      _sum: { totalAmount: true, tipAmount: true },
    })
  ]);
  return JSON.parse(JSON.stringify({ orders, staff, tables, revenue: totalRevenue._sum }));
}
