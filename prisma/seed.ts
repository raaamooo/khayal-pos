import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { hash } from "bcryptjs";
import "dotenv/config";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

/**
 * Default theme skeleton for the khayal demo venue.
 * Step 2 will replace these values with the full brand config.
 */
const khayalTheme = {
  primaryColor: "#8F00FF", // Electric Violet
  secondaryColor: "#FF6600", // Ember Orange
  accentColor: "#FFB800",
  backgroundDark: "#0A0A0B",
  backgroundLight: "#F5F5F5",
  textDark: "#FAFAFA",
  textLight: "#111111",
  fontHeading: "Syne",
  fontBody: "Tajawal",
  logoUrl: "/logos/khayal.svg",
};

async function main() {
  console.log("Seeding database...");

  // ── Upsert the khayal demo venue ──
  const venue = await prisma.venue.upsert({
    where: { slug: "khayal" },
    update: {
      name: "Khayal",
      theme: khayalTheme,
    },
    create: {
      slug: "khayal",
      name: "Khayal",
      theme: khayalTheme,
      defaultLanguage: "en",
      planTier: "trial",
      active: true,
    },
  });

  console.log(`  Venue: ${venue.name} (${venue.slug}) — id: ${venue.id}`);

  // ── Upsert the staff accounts ──
  const passwordHash = await hash("password", 12);
  const roles = [
    { email: "manager@khayal.co", name: "Khayal Manager", role: "MANAGER" },
    { email: "barista@khayal.co", name: "Khayal Barista", role: "BARISTA" },
    { email: "waiter@khayal.co", name: "Khayal Waiter", role: "WAITER" },
    { email: "cashier@khayal.co", name: "Khayal Cashier", role: "CASHIER" },
    { email: "inventory@khayal.co", name: "Khayal Inventory", role: "INVENTORY" },
  ];

  for (const account of roles) {
    const user = await prisma.staffAccount.upsert({
      where: {
        venueId_email: { venueId: venue.id, email: account.email },
      },
      update: { passwordHash, name: account.name, role: account.role as any },
      create: {
        venueId: venue.id,
        email: account.email,
        passwordHash,
        name: account.name,
        role: account.role as any,
        active: true,
      },
    });
    console.log(`  Staff: ${user.name} (${user.email}) — role: ${user.role}`);
  }

  // ── Seed Categories ──
  const drinksCategory = await prisma.category.upsert({
    where: { id: "khayal-cat-drinks" },
    update: { venueId: venue.id, name: "Drinks", orderIndex: 0 },
    create: { id: "khayal-cat-drinks", venueId: venue.id, name: "Drinks", orderIndex: 0 },
  });
  
  const dessertsCategory = await prisma.category.upsert({
    where: { id: "khayal-cat-desserts" },
    update: { venueId: venue.id, name: "Desserts", orderIndex: 1 },
    create: { id: "khayal-cat-desserts", venueId: venue.id, name: "Desserts", orderIndex: 1 },
  });

  // ── Seed Menu Items ──
  const menuItems = [
    {
      id: "item-flat-white",
      categoryId: drinksCategory.id,
      name: "Flat White",
      description: "Double espresso with microfoam milk.",
      price: 65.0,
      quizTags: ["hot", "creamy", "caffeine", "milk"],
    },
    {
      id: "item-iced-latte",
      categoryId: drinksCategory.id,
      name: "Iced Latte",
      description: "Espresso with milk and ice.",
      price: 70.0,
      quizTags: ["cold", "creamy", "caffeine", "milk"],
    },
    {
      id: "item-v60",
      categoryId: drinksCategory.id,
      name: "V60 Pour Over",
      description: "Single origin specialty filter coffee.",
      price: 80.0,
      quizTags: ["hot", "black", "caffeine", "fruity"],
    },
    {
      id: "item-matcha",
      categoryId: drinksCategory.id,
      name: "Iced Matcha Latte",
      description: "Ceremonial grade matcha with milk.",
      price: 90.0,
      quizTags: ["cold", "creamy", "tea", "earthy"],
    },
    {
      id: "item-brownie",
      categoryId: dessertsCategory.id,
      name: "Fudge Brownie",
      description: "Rich chocolate brownie with a gooey center.",
      price: 50.0,
      quizTags: ["dessert", "chocolate", "heavy", "sweet"],
    },
    {
      id: "item-tiramisu",
      categoryId: dessertsCategory.id,
      name: "Classic Tiramisu",
      description: "Italian dessert with mascarpone and espresso.",
      price: 85.0,
      quizTags: ["dessert", "creamy", "coffee", "sweet"],
    },
  ];

  for (const item of menuItems) {
    await prisma.menuItem.upsert({
      where: { id: item.id },
      update: { ...item, venueId: venue.id },
      create: { ...item, venueId: venue.id },
    });
  }

  // ── Seed Add-ons ──
  await prisma.addOn.upsert({
    where: { id: "addon-oat-milk" },
    update: { venueId: venue.id, name: "Oat Milk", price: 20.0, applicableItemIds: ["item-flat-white", "item-iced-latte", "item-matcha"] },
    create: { id: "addon-oat-milk", venueId: venue.id, name: "Oat Milk", price: 20.0, applicableItemIds: ["item-flat-white", "item-iced-latte", "item-matcha"] },
  });

  await prisma.addOn.upsert({
    where: { id: "addon-extra-shot" },
    update: { venueId: venue.id, name: "Extra Shot", price: 15.0, applicableItemIds: ["item-flat-white", "item-iced-latte"] },
    create: { id: "addon-extra-shot", venueId: venue.id, name: "Extra Shot", price: 15.0, applicableItemIds: ["item-flat-white", "item-iced-latte"] },
  });

  // ── Seed Modifier Groups & Options ──
  // Helper to upsert a modifier group with its options
  async function seedModifierGroup(
    groupId: string,
    menuItemId: string,
    name: string,
    required: boolean,
    maxSelections: number,
    orderIdx: number,
    options: Array<{ id: string; label: string; priceAdjustment: number; isDefault: boolean; orderIndex: number }>
  ) {
    await prisma.modifierGroup.upsert({
      where: { id: groupId },
      update: { venueId: venue.id, menuItemId, name, required, maxSelections, orderIndex: orderIdx },
      create: { id: groupId, venueId: venue.id, menuItemId, name, required, maxSelections, orderIndex: orderIdx },
    });
    for (const opt of options) {
      await prisma.modifierOption.upsert({
        where: { id: opt.id },
        update: { modifierGroupId: groupId, label: opt.label, priceAdjustment: opt.priceAdjustment, isDefault: opt.isDefault, orderIndex: opt.orderIndex },
        create: { id: opt.id, modifierGroupId: groupId, label: opt.label, priceAdjustment: opt.priceAdjustment, isDefault: opt.isDefault, orderIndex: opt.orderIndex },
      });
    }
  }

  // -- Flat White modifiers --
  await seedModifierGroup("mod-fw-size", "item-flat-white", "Size", true, 1, 0, [
    { id: "opt-fw-size-regular", label: "Regular", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
    { id: "opt-fw-size-large", label: "Large", priceAdjustment: 15, isDefault: false, orderIndex: 1 },
  ]);
  await seedModifierGroup("mod-fw-milk", "item-flat-white", "Milk Type", false, 1, 1, [
    { id: "opt-fw-milk-whole", label: "Whole Milk", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
    { id: "opt-fw-milk-oat", label: "Oat Milk", priceAdjustment: 20, isDefault: false, orderIndex: 1 },
    { id: "opt-fw-milk-almond", label: "Almond Milk", priceAdjustment: 20, isDefault: false, orderIndex: 2 },
    { id: "opt-fw-milk-skim", label: "Skim Milk", priceAdjustment: 0, isDefault: false, orderIndex: 3 },
  ]);
  await seedModifierGroup("mod-fw-sweet", "item-flat-white", "Sweetness", false, 1, 2, [
    { id: "opt-fw-sweet-none", label: "No Sugar", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
    { id: "opt-fw-sweet-half", label: "50% Sugar", priceAdjustment: 0, isDefault: false, orderIndex: 1 },
    { id: "opt-fw-sweet-full", label: "100% Sugar", priceAdjustment: 0, isDefault: false, orderIndex: 2 },
  ]);

  // -- Iced Latte modifiers --
  await seedModifierGroup("mod-il-size", "item-iced-latte", "Size", true, 1, 0, [
    { id: "opt-il-size-regular", label: "Regular", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
    { id: "opt-il-size-large", label: "Large", priceAdjustment: 15, isDefault: false, orderIndex: 1 },
  ]);
  await seedModifierGroup("mod-il-milk", "item-iced-latte", "Milk Type", false, 1, 1, [
    { id: "opt-il-milk-whole", label: "Whole Milk", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
    { id: "opt-il-milk-oat", label: "Oat Milk", priceAdjustment: 20, isDefault: false, orderIndex: 1 },
    { id: "opt-il-milk-almond", label: "Almond Milk", priceAdjustment: 20, isDefault: false, orderIndex: 2 },
    { id: "opt-il-milk-skim", label: "Skim Milk", priceAdjustment: 0, isDefault: false, orderIndex: 3 },
  ]);
  await seedModifierGroup("mod-il-sweet", "item-iced-latte", "Sweetness", false, 1, 2, [
    { id: "opt-il-sweet-none", label: "No Sugar", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
    { id: "opt-il-sweet-half", label: "50% Sugar", priceAdjustment: 0, isDefault: false, orderIndex: 1 },
    { id: "opt-il-sweet-full", label: "100% Sugar", priceAdjustment: 0, isDefault: false, orderIndex: 2 },
  ]);
  await seedModifierGroup("mod-il-ice", "item-iced-latte", "Ice Level", false, 1, 3, [
    { id: "opt-il-ice-regular", label: "Regular Ice", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
    { id: "opt-il-ice-less", label: "Less Ice", priceAdjustment: 0, isDefault: false, orderIndex: 1 },
    { id: "opt-il-ice-none", label: "No Ice", priceAdjustment: 0, isDefault: false, orderIndex: 2 },
  ]);

  // -- Iced Matcha Latte modifiers --
  await seedModifierGroup("mod-ml-size", "item-matcha", "Size", true, 1, 0, [
    { id: "opt-ml-size-regular", label: "Regular", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
    { id: "opt-ml-size-large", label: "Large", priceAdjustment: 15, isDefault: false, orderIndex: 1 },
  ]);
  await seedModifierGroup("mod-ml-milk", "item-matcha", "Milk Type", false, 1, 1, [
    { id: "opt-ml-milk-whole", label: "Whole Milk", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
    { id: "opt-ml-milk-oat", label: "Oat Milk", priceAdjustment: 20, isDefault: false, orderIndex: 1 },
    { id: "opt-ml-milk-almond", label: "Almond Milk", priceAdjustment: 20, isDefault: false, orderIndex: 2 },
  ]);
  await seedModifierGroup("mod-ml-sweet", "item-matcha", "Sweetness", false, 1, 2, [
    { id: "opt-ml-sweet-none", label: "No Sugar", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
    { id: "opt-ml-sweet-half", label: "50% Sugar", priceAdjustment: 0, isDefault: false, orderIndex: 1 },
    { id: "opt-ml-sweet-full", label: "100% Sugar", priceAdjustment: 0, isDefault: false, orderIndex: 2 },
  ]);
  await seedModifierGroup("mod-ml-ice", "item-matcha", "Ice Level", false, 1, 3, [
    { id: "opt-ml-ice-regular", label: "Regular Ice", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
    { id: "opt-ml-ice-less", label: "Less Ice", priceAdjustment: 0, isDefault: false, orderIndex: 1 },
    { id: "opt-ml-ice-none", label: "No Ice", priceAdjustment: 0, isDefault: false, orderIndex: 2 },
  ]);

  // -- V60 modifiers (just size, black coffee has no milk/ice) --
  await seedModifierGroup("mod-v60-size", "item-v60", "Size", true, 1, 0, [
    { id: "opt-v60-size-regular", label: "Regular", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
    { id: "opt-v60-size-large", label: "Large", priceAdjustment: 20, isDefault: false, orderIndex: 1 },
  ]);

  console.log("  Modifier groups seeded for drinks.");

  // ── Update menu items with dietary tags and pairing suggestions ──
  await prisma.menuItem.update({
    where: { id: "item-flat-white" },
    data: { quizTags: ["hot", "creamy", "caffeine", "milk", "pairs:item-brownie"] },
  });
  await prisma.menuItem.update({
    where: { id: "item-iced-latte" },
    data: { quizTags: ["cold", "creamy", "caffeine", "milk", "pairs:item-brownie", "pairs:item-tiramisu"] },
  });
  await prisma.menuItem.update({
    where: { id: "item-matcha" },
    data: { quizTags: ["cold", "creamy", "tea", "earthy", "vegan-friendly", "pairs:item-brownie"] },
  });
  await prisma.menuItem.update({
    where: { id: "item-v60" },
    data: { quizTags: ["hot", "black", "caffeine", "fruity", "vegan", "gluten-free", "pairs:item-tiramisu"] },
  });
  await prisma.menuItem.update({
    where: { id: "item-brownie" },
    data: { quizTags: ["dessert", "chocolate", "heavy", "sweet", "gluten-free"] },
  });
  await prisma.menuItem.update({
    where: { id: "item-tiramisu" },
    data: { quizTags: ["dessert", "creamy", "coffee", "sweet"] },
  });

  console.log("  Dietary tags and pairings updated.");


  // ── Seed a test Table and Session ──
  const table = await prisma.table.upsert({
    where: { qrToken: "test-qr" },
    update: { venueId: venue.id, label: "Table 5" },
    create: { venueId: venue.id, label: "Table 5", qrToken: "test-qr" },
  });

  // Create an active session if one doesn't exist for this table
  if (!table.activeSessionId) {
    const session = await prisma.tableSession.create({
      data: { venueId: venue.id, tableId: table.id },
    });
    await prisma.table.update({
      where: { id: table.id },
      data: { activeSessionId: session.id },
    });
    console.log(`  Table 5 activated with session ${session.id}`);
  } else {
    console.log(`  Table 5 already active with session ${table.activeSessionId}`);
  }

  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
