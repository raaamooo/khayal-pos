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

  // ── Seed Ingredients ──
  const espressoBeans = await prisma.ingredient.upsert({
    where: { id: "ing-espresso" },
    update: { venueId: venue.id, name: "Espresso Beans", unit: "g", stock: 1000, lowThreshold: 200 },
    create: { id: "ing-espresso", venueId: venue.id, name: "Espresso Beans", unit: "g", stock: 1000, lowThreshold: 200 },
  });

  const milk = await prisma.ingredient.upsert({
    where: { id: "ing-milk" },
    update: { venueId: venue.id, name: "Whole Milk", unit: "ml", stock: 5000, lowThreshold: 1000 },
    create: { id: "ing-milk", venueId: venue.id, name: "Whole Milk", unit: "ml", stock: 5000, lowThreshold: 1000 },
  });

  // ── Seed Recipe Items ──
  // Flat White: 18g espresso, 150ml milk
  await prisma.recipeItem.upsert({
    where: { id: "recipe-flat-white-espresso" },
    update: { venueId: venue.id, menuItemId: "item-flat-white", ingredientId: espressoBeans.id, quantityUsed: 18 },
    create: { id: "recipe-flat-white-espresso", venueId: venue.id, menuItemId: "item-flat-white", ingredientId: espressoBeans.id, quantityUsed: 18 },
  });
  await prisma.recipeItem.upsert({
    where: { id: "recipe-flat-white-milk" },
    update: { venueId: venue.id, menuItemId: "item-flat-white", ingredientId: milk.id, quantityUsed: 150 },
    create: { id: "recipe-flat-white-milk", venueId: venue.id, menuItemId: "item-flat-white", ingredientId: milk.id, quantityUsed: 150 },
  });

  // Iced Latte: 18g espresso, 200ml milk (to test out-of-stock easily, let's set a low stock for espresso)
  await prisma.ingredient.update({
    where: { id: espressoBeans.id },
    data: { stock: 36 } // Only enough for 2 drinks!
  });

  await prisma.recipeItem.upsert({
    where: { id: "recipe-iced-latte-espresso" },
    update: { venueId: venue.id, menuItemId: "item-iced-latte", ingredientId: espressoBeans.id, quantityUsed: 18 },
    create: { id: "recipe-iced-latte-espresso", venueId: venue.id, menuItemId: "item-iced-latte", ingredientId: espressoBeans.id, quantityUsed: 18 },
  });
  await prisma.recipeItem.upsert({
    where: { id: "recipe-iced-latte-milk" },
    update: { venueId: venue.id, menuItemId: "item-iced-latte", ingredientId: milk.id, quantityUsed: 200 },
    create: { id: "recipe-iced-latte-milk", venueId: venue.id, menuItemId: "item-iced-latte", ingredientId: milk.id, quantityUsed: 200 },
  });

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
