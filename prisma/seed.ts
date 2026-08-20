import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { hash } from "bcryptjs";
import "dotenv/config";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

/**
 * Brand Theme Configuration for Khayal
 */
const khayalTheme = {
  primaryColor: "#8F00FF", // Electric Violet
  secondaryColor: "#FF6600", // Ember Orange
  accentColor: "#FFB800",
  backgroundDark: "#0A0A0B",
  backgroundLight: "#F8F8FA",
  textDark: "#FAFAFA",
  textLight: "#121214",
  fontHeading: "Plus Jakarta Sans",
  fontBody: "Plus Jakarta Sans",
  logoUrl: "/logos/khayal.svg",
};

async function main() {
  console.log("🚀 Starting database seeding for Khayal POS...");

  // ── 1. Upsert Venue ──
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
      planTier: "premium",
      active: true,
    },
  });

  console.log(`✓ Venue ready: ${venue.name} (${venue.slug}) — id: ${venue.id}`);

  // ── 2. Upsert Staff Accounts ──
  const passwordHash = await hash("password", 12);
  const roles = [
    { email: "manager@khayal.co", name: "Khayal Manager", role: "MANAGER" },
    { email: "barista@khayal.co", name: "Khayal Barista", role: "BARISTA" },
    { email: "waiter@khayal.co", name: "Khayal Waiter", role: "WAITER" },
    { email: "cashier@khayal.co", name: "Khayal Cashier", role: "CASHIER" },
    { email: "inventory@khayal.co", name: "Khayal Inventory", role: "INVENTORY" },
  ];

  for (const account of roles) {
    await prisma.staffAccount.upsert({
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
  }
  console.log("✓ Staff accounts seeded.");

  // ── 3. Seed Raw Ingredients & Stock ──
  const rawIngredients = [
    { id: "ing-espresso-beans", name: "Specialty Espresso Beans", unit: "g", stock: 25000, lowThreshold: 2000 },
    { id: "ing-single-origin", name: "Single Origin Filter Beans", unit: "g", stock: 15000, lowThreshold: 1000 },
    { id: "ing-whole-milk", name: "Fresh Whole Milk", unit: "ml", stock: 80000, lowThreshold: 8000 },
    { id: "ing-oat-milk", name: "Oatly Barista Edition", unit: "ml", stock: 35000, lowThreshold: 4000 },
    { id: "ing-almond-milk", name: "Organic Almond Milk", unit: "ml", stock: 25000, lowThreshold: 3000 },
    { id: "ing-condensed-milk", name: "Sweetened Condensed Milk", unit: "ml", stock: 20000, lowThreshold: 2000 },
    { id: "ing-matcha-powder", name: "Uji Ceremonial Matcha", unit: "g", stock: 6000, lowThreshold: 500 },
    { id: "ing-pistachio-paste", name: "Sicilian Pistachio Paste", unit: "g", stock: 10000, lowThreshold: 800 },
    { id: "ing-caramel-sauce", name: "Sea Salt Caramel Sauce", unit: "ml", stock: 12000, lowThreshold: 1000 },
    { id: "ing-vanilla-syrup", name: "Madagascar Vanilla Syrup", unit: "ml", stock: 12000, lowThreshold: 1000 },
    { id: "ing-hibiscus-flowers", name: "Sun-Dried Egyptian Hibiscus", unit: "g", stock: 8000, lowThreshold: 500 },
    { id: "ing-earl-grey-tea", name: "Organic Earl Grey Leaves", unit: "g", stock: 5000, lowThreshold: 300 },
    { id: "ing-mascarpone", name: "Italian Mascarpone Cream", unit: "g", stock: 15000, lowThreshold: 1000 },
    { id: "ing-cream-cheese", name: "Philadelphia Cream Cheese", unit: "g", stock: 15000, lowThreshold: 1200 },
    { id: "ing-dark-chocolate", name: "Valrhona 70% Dark Chocolate", unit: "g", stock: 15000, lowThreshold: 1500 },
    { id: "ing-french-butter", name: "Lesparre French Butter", unit: "g", stock: 20000, lowThreshold: 2000 },
    { id: "ing-eggs", name: "Organic Farm Eggs", unit: "count", stock: 800, lowThreshold: 80 },
    { id: "ing-brioche-bread", name: "Artisan Brioche Loaves", unit: "count", stock: 250, lowThreshold: 30 },
    { id: "ing-sourdough", name: "Rustic Sourdough Slices", unit: "count", stock: 300, lowThreshold: 40 },
    { id: "ing-hass-avocado", name: "Fresh Hass Avocados", unit: "count", stock: 200, lowThreshold: 25 },
    { id: "ing-smoked-turkey", name: "Smoked Turkey Breast", unit: "g", stock: 10000, lowThreshold: 1000 },
    { id: "ing-emmental", name: "Swiss Emmental Cheese", unit: "g", stock: 10000, lowThreshold: 1000 },
    { id: "ing-truffle-oil", name: "Italian Black Truffle Oil", unit: "ml", stock: 3000, lowThreshold: 200 },
  ];

  for (const ing of rawIngredients) {
    await prisma.ingredient.upsert({
      where: { id: ing.id },
      update: { ...ing, venueId: venue.id },
      create: { ...ing, venueId: venue.id },
    });
  }
  console.log(`✓ ${rawIngredients.length} Raw ingredients & stock levels seeded.`);

  // ── 4. Seed Categories ──
  const categories = [
    { id: "khayal-cat-espresso", name: "Espresso & Hot Coffee", orderIndex: 0 },
    { id: "khayal-cat-iced", name: "Signature Iced & Cold Brew", orderIndex: 1 },
    { id: "khayal-cat-manual", name: "Manual Brew & Filter", orderIndex: 2 },
    { id: "khayal-cat-matcha", name: "Matcha & Refreshers", orderIndex: 3 },
    { id: "khayal-cat-bakery", name: "Artisan Bakery & Desserts", orderIndex: 4 },
    { id: "khayal-cat-savory", name: "All-Day Toasties & Bites", orderIndex: 5 },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { id: cat.id },
      update: { ...cat, venueId: venue.id },
      create: { ...cat, venueId: venue.id },
    });
  }
  console.log(`✓ ${categories.length} Categories seeded.`);

  // ── 5. Seed Comprehensive Menu Items with Images ──
  const menuItemsData = [
    // ── Category: Espresso & Hot Coffee ──
    {
      id: "item-espresso-double",
      categoryId: "khayal-cat-espresso",
      name: "Double Espresso",
      description: "Rich, full-bodied double shot with tasting notes of dark cocoa, roasted hazelnut, and citrus zest.",
      price: 55.0,
      imageUrl: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=80",
      quizTags: ["hot", "black", "caffeine", "strong", "pairs:item-tiramisu"],
      recipes: [{ ingredientId: "ing-espresso-beans", quantityUsed: 18 }],
    },
    {
      id: "item-flat-white",
      categoryId: "khayal-cat-espresso",
      name: "Flat White",
      description: "Double ristretto of specialty espresso blended seamlessly with silky, velvety micro-foam milk.",
      price: 75.0,
      imageUrl: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=800&auto=format&fit=crop&q=80",
      quizTags: ["hot", "creamy", "caffeine", "milk", "pairs:item-brownie"],
      recipes: [
        { ingredientId: "ing-espresso-beans", quantityUsed: 18 },
        { ingredientId: "ing-whole-milk", quantityUsed: 160 },
      ],
    },
    {
      id: "item-cortado",
      categoryId: "khayal-cat-espresso",
      name: "Spanish Cortado",
      description: "Equal parts specialty espresso and warm steamed milk to soften acidity while keeping coffee forward.",
      price: 65.0,
      imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&auto=format&fit=crop&q=80",
      quizTags: ["hot", "caffeine", "strong", "milk", "pairs:item-croissant-butter"],
      recipes: [
        { ingredientId: "ing-espresso-beans", quantityUsed: 18 },
        { ingredientId: "ing-whole-milk", quantityUsed: 60 },
      ],
    },
    {
      id: "item-cappuccino",
      categoryId: "khayal-cat-espresso",
      name: "Classic Cappuccino",
      description: "Traditional Italian style with double espresso, textured foam crown, and a delicate dusting of cocoa.",
      price: 70.0,
      imageUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=80",
      quizTags: ["hot", "creamy", "caffeine", "milk", "pairs:item-croissant-almond"],
      recipes: [
        { ingredientId: "ing-espresso-beans", quantityUsed: 18 },
        { ingredientId: "ing-whole-milk", quantityUsed: 180 },
      ],
    },
    {
      id: "item-spanish-latte",
      categoryId: "khayal-cat-espresso",
      name: "Hot Spanish Latte",
      description: "Signature comforting recipe with double espresso, warm steamed milk, and sweet condensed milk.",
      price: 85.0,
      imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop&q=80",
      quizTags: ["hot", "sweet", "creamy", "caffeine", "pairs:item-brownie"],
      recipes: [
        { ingredientId: "ing-espresso-beans", quantityUsed: 18 },
        { ingredientId: "ing-whole-milk", quantityUsed: 180 },
        { ingredientId: "ing-condensed-milk", quantityUsed: 30 },
      ],
    },
    {
      id: "item-caramel-macchiato",
      categoryId: "khayal-cat-espresso",
      name: "Caramel Macchiato",
      description: "Steamed whole milk infused with Madagascar vanilla syrup, marked with espresso and sea salt caramel.",
      price: 90.0,
      imageUrl: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&auto=format&fit=crop&q=80",
      quizTags: ["hot", "sweet", "creamy", "caffeine", "pairs:item-cheesecake"],
      recipes: [
        { ingredientId: "ing-espresso-beans", quantityUsed: 18 },
        { ingredientId: "ing-whole-milk", quantityUsed: 200 },
        { ingredientId: "ing-vanilla-syrup", quantityUsed: 20 },
        { ingredientId: "ing-caramel-sauce", quantityUsed: 15 },
      ],
    },

    // ── Category: Signature Iced & Cold Brew ──
    {
      id: "item-iced-spanish-latte",
      categoryId: "khayal-cat-iced",
      name: "Iced Spanish Latte",
      description: "Our bestselling iced beverage! Cold espresso poured over sweet condensed milk, ice, and cold whole milk.",
      price: 95.0,
      imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&auto=format&fit=crop&q=80",
      quizTags: ["cold", "sweet", "creamy", "caffeine", "signature", "pairs:item-brownie"],
      recipes: [
        { ingredientId: "ing-espresso-beans", quantityUsed: 20 },
        { ingredientId: "ing-whole-milk", quantityUsed: 180 },
        { ingredientId: "ing-condensed-milk", quantityUsed: 35 },
      ],
    },
    {
      id: "item-iced-latte",
      categoryId: "khayal-cat-iced",
      name: "Classic Iced Latte",
      description: "Double shot of fresh espresso poured over chilled whole milk and crystal-clear ice.",
      price: 75.0,
      imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&auto=format&fit=crop&q=80",
      quizTags: ["cold", "creamy", "caffeine", "milk", "pairs:item-croissant-butter"],
      recipes: [
        { ingredientId: "ing-espresso-beans", quantityUsed: 18 },
        { ingredientId: "ing-whole-milk", quantityUsed: 200 },
      ],
    },
    {
      id: "item-iced-pistachio-latte",
      categoryId: "khayal-cat-iced",
      name: "Iced Pistachio Cream Latte",
      description: "Decadent Sicilian pistachio paste whipped with cold milk, topped with chilled espresso and crushed nuts.",
      price: 115.0,
      imageUrl: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?w=800&auto=format&fit=crop&q=80",
      quizTags: ["cold", "sweet", "creamy", "caffeine", "signature", "pairs:item-french-toast"],
      recipes: [
        { ingredientId: "ing-espresso-beans", quantityUsed: 18 },
        { ingredientId: "ing-whole-milk", quantityUsed: 180 },
        { ingredientId: "ing-pistachio-paste", quantityUsed: 25 },
      ],
    },
    {
      id: "item-nitro-cold-brew",
      categoryId: "khayal-cat-iced",
      name: "Nitro Cold Brew",
      description: "Single-origin beans slow-steeped for 18 hours, nitrogen-infused for a natural creamy cascading head.",
      price: 90.0,
      imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&auto=format&fit=crop&q=80",
      quizTags: ["cold", "black", "caffeine", "strong", "vegan", "pairs:item-tiramisu"],
      recipes: [{ ingredientId: "ing-single-origin", quantityUsed: 25 }],
    },
    {
      id: "item-iced-salted-caramel",
      categoryId: "khayal-cat-iced",
      name: "Iced Salted Caramel Latte",
      description: "Chilled espresso, sea salt caramel sauce, and cold milk with a cold foam float.",
      price: 100.0,
      imageUrl: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&auto=format&fit=crop&q=80",
      quizTags: ["cold", "sweet", "creamy", "caffeine", "pairs:item-brownie"],
      recipes: [
        { ingredientId: "ing-espresso-beans", quantityUsed: 18 },
        { ingredientId: "ing-whole-milk", quantityUsed: 180 },
        { ingredientId: "ing-caramel-sauce", quantityUsed: 25 },
      ],
    },
    {
      id: "item-iced-americano",
      categoryId: "khayal-cat-iced",
      name: "Iced Americano",
      description: "Double shot of espresso combined with cold filtered mineral water and ice for clean refreshment.",
      price: 65.0,
      imageUrl: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=80",
      quizTags: ["cold", "black", "caffeine", "refreshing", "vegan"],
      recipes: [{ ingredientId: "ing-espresso-beans", quantityUsed: 18 }],
    },

    // ── Category: Manual Brew & Filter ──
    {
      id: "item-v60-ethiopia",
      categoryId: "khayal-cat-manual",
      name: "V60 Ethiopia Yirgacheffe",
      description: "Hand-poured single origin filter with floral jasmine aroma, sweet blueberry, and bergamot finish.",
      price: 95.0,
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80",
      quizTags: ["hot", "black", "caffeine", "fruity", "vegan", "pairs:item-croissant-almond"],
      recipes: [{ ingredientId: "ing-single-origin", quantityUsed: 20 }],
    },
    {
      id: "item-v60-colombia",
      categoryId: "khayal-cat-manual",
      name: "V60 Colombia Geisha",
      description: "Exotic and rare microlot showcasing bright peach, orange blossom, and raw cane sugar sweetness.",
      price: 130.0,
      imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
      quizTags: ["hot", "black", "caffeine", "fruity", "vegan", "signature", "pairs:item-tiramisu"],
      recipes: [{ ingredientId: "ing-single-origin", quantityUsed: 20 }],
    },
    {
      id: "item-chemex-carafe",
      categoryId: "khayal-cat-manual",
      name: "Chemex Filter Carafe (For Two)",
      description: "Delicately extracted clean brew served in an elegant Chemex glass carafe. Perfect for sharing.",
      price: 150.0,
      imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80",
      quizTags: ["hot", "black", "caffeine", "fruity", "vegan", "pairs:item-cheesecake"],
      recipes: [{ ingredientId: "ing-single-origin", quantityUsed: 35 }],
    },

    // ── Category: Matcha & Refreshers ──
    {
      id: "item-matcha-latte",
      categoryId: "khayal-cat-matcha",
      name: "Iced Ceremonial Matcha Latte",
      description: "Authentic Kyoto Uji ceremonial grade matcha whisked fresh to order and poured over cold milk.",
      price: 110.0,
      imageUrl: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&auto=format&fit=crop&q=80",
      quizTags: ["cold", "creamy", "tea", "earthy", "pairs:item-croissant-almond"],
      recipes: [
        { ingredientId: "ing-matcha-powder", quantityUsed: 4 },
        { ingredientId: "ing-whole-milk", quantityUsed: 200 },
      ],
    },
    {
      id: "item-strawberry-matcha",
      categoryId: "khayal-cat-matcha",
      name: "Strawberry Cloud Matcha",
      description: "Stunning three-layer beverage: real strawberry compote, chilled milk, and a crown of whipped matcha.",
      price: 125.0,
      imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80",
      quizTags: ["cold", "sweet", "creamy", "tea", "fruity", "signature"],
      recipes: [
        { ingredientId: "ing-matcha-powder", quantityUsed: 4 },
        { ingredientId: "ing-whole-milk", quantityUsed: 160 },
      ],
    },
    {
      id: "item-hibiscus-cooler",
      categoryId: "khayal-cat-matcha",
      name: "Hibiscus Berry Cooler (Karkadeh)",
      description: "Sun-dried Aswan hibiscus flowers steeped with wild pomegranate and garden mint over crushed ice.",
      price: 70.0,
      imageUrl: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&auto=format&fit=crop&q=80",
      quizTags: ["cold", "fruity", "refreshing", "decaf", "vegan"],
      recipes: [{ ingredientId: "ing-hibiscus-flowers", quantityUsed: 15 }],
    },
    {
      id: "item-london-fog",
      categoryId: "khayal-cat-matcha",
      name: "London Fog Earl Grey Latte",
      description: "Steeped organic bergamot black tea combined with vanilla syrup and velvety steamed whole milk.",
      price: 80.0,
      imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80",
      quizTags: ["hot", "creamy", "tea", "sweet"],
      recipes: [
        { ingredientId: "ing-earl-grey-tea", quantityUsed: 6 },
        { ingredientId: "ing-whole-milk", quantityUsed: 180 },
        { ingredientId: "ing-vanilla-syrup", quantityUsed: 15 },
      ],
    },

    // ── Category: Artisan Bakery & Desserts ──
    {
      id: "item-tiramisu",
      categoryId: "khayal-cat-bakery",
      name: "Classic Italian Tiramisu",
      description: "Authentic Savoiardi ladyfingers steeped in espresso, layered with mascarpone cream & Dutch cocoa.",
      price: 110.0,
      imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=80",
      quizTags: ["dessert", "creamy", "coffee", "sweet", "pairs:item-flat-white"],
      recipes: [
        { ingredientId: "ing-mascarpone", quantityUsed: 80 },
        { ingredientId: "ing-espresso-beans", quantityUsed: 10 },
      ],
    },
    {
      id: "item-cheesecake",
      categoryId: "khayal-cat-bakery",
      name: "San Sebastian Burnt Cheesecake",
      description: "Basque cheesecake baked at high heat for a caramelized exterior and a rich melt-in-your-mouth custard core.",
      price: 120.0,
      imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&auto=format&fit=crop&q=80",
      quizTags: ["dessert", "creamy", "sweet", "pairs:item-v60-ethiopia"],
      recipes: [
        { ingredientId: "ing-cream-cheese", quantityUsed: 100 },
        { ingredientId: "ing-eggs", quantityUsed: 1 },
      ],
    },
    {
      id: "item-brownie",
      categoryId: "khayal-cat-bakery",
      name: "Valrhona Molten Fudge Brownie",
      description: "Intense 70% dark chocolate brownie with a molten fudge center, served warm with sea salt caramel.",
      price: 95.0,
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80",
      quizTags: ["dessert", "chocolate", "sweet", "pairs:item-iced-spanish-latte"],
      recipes: [
        { ingredientId: "ing-dark-chocolate", quantityUsed: 60 },
        { ingredientId: "ing-french-butter", quantityUsed: 30 },
      ],
    },
    {
      id: "item-french-toast",
      categoryId: "khayal-cat-bakery",
      name: "Pistachio Brioche French Toast",
      description: "Thick slice of French brioche caramelized in golden butter, topped with pistachio praline & fresh berries.",
      price: 140.0,
      imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=80",
      quizTags: ["dessert", "sweet", "signature", "pairs:item-iced-pistachio-latte"],
      recipes: [
        { ingredientId: "ing-brioche-bread", quantityUsed: 1 },
        { ingredientId: "ing-pistachio-paste", quantityUsed: 30 },
        { ingredientId: "ing-french-butter", quantityUsed: 25 },
        { ingredientId: "ing-eggs", quantityUsed: 1 },
      ],
    },
    {
      id: "item-croissant-butter",
      categoryId: "khayal-cat-bakery",
      name: "French Butter Croissant",
      description: "Classic honeycomb-layered croissant made with 100% Normandy butter, baked golden-crisp daily.",
      price: 60.0,
      imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80",
      quizTags: ["dessert", "bakery", "pairs:item-cappuccino"],
      recipes: [{ ingredientId: "ing-french-butter", quantityUsed: 40 }],
    },
    {
      id: "item-croissant-almond",
      categoryId: "khayal-cat-bakery",
      name: "Almond Frangipane Croissant",
      description: "Twice-baked croissant stuffed with sweet almond frangipane cream and encrusted with toasted almonds.",
      price: 85.0,
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
      quizTags: ["dessert", "sweet", "bakery", "pairs:item-flat-white"],
      recipes: [
        { ingredientId: "ing-french-butter", quantityUsed: 40 },
        { ingredientId: "ing-eggs", quantityUsed: 1 },
      ],
    },

    // ── Category: All-Day Toasties & Bites ──
    {
      id: "item-avocado-tartine",
      categoryId: "khayal-cat-savory",
      name: "Avocado Sourdough Tartine",
      description: "Toasted artisan sourdough with smashed Hass avocado, poached organic egg, chili flakes & microgreens.",
      price: 135.0,
      imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80",
      quizTags: ["savory", "breakfast", "pairs:item-v60-ethiopia"],
      recipes: [
        { ingredientId: "ing-sourdough", quantityUsed: 2 },
        { ingredientId: "ing-hass-avocado", quantityUsed: 1 },
        { ingredientId: "ing-eggs", quantityUsed: 1 },
      ],
    },
    {
      id: "item-truffle-eggs",
      categoryId: "khayal-cat-savory",
      name: "Truffle Scrambled Brioche",
      description: "Silky French scrambled eggs infused with black truffle oil and chives on a warm buttered brioche bun.",
      price: 125.0,
      imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80",
      quizTags: ["savory", "breakfast", "pairs:item-flat-white"],
      recipes: [
        { ingredientId: "ing-brioche-bread", quantityUsed: 1 },
        { ingredientId: "ing-eggs", quantityUsed: 2 },
        { ingredientId: "ing-truffle-oil", quantityUsed: 10 },
        { ingredientId: "ing-french-butter", quantityUsed: 15 },
      ],
    },
    {
      id: "item-turkey-toastie",
      categoryId: "khayal-cat-savory",
      name: "Smoked Turkey & Emmental Toastie",
      description: "Golden toasted sourdough pressed with Dijon mustard, shaved smoked turkey, and melted Swiss Emmental.",
      price: 120.0,
      imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=80",
      quizTags: ["savory", "sandwich", "pairs:item-iced-americano"],
      recipes: [
        { ingredientId: "ing-sourdough", quantityUsed: 2 },
        { ingredientId: "ing-smoked-turkey", quantityUsed: 70 },
        { ingredientId: "ing-emmental", quantityUsed: 50 },
      ],
    },
  ];

  for (const item of menuItemsData) {
    const { recipes, ...itemFields } = item;

    await prisma.menuItem.upsert({
      where: { id: item.id },
      update: {
        venueId: venue.id,
        categoryId: itemFields.categoryId,
        name: itemFields.name,
        description: itemFields.description,
        price: itemFields.price,
        imageUrl: itemFields.imageUrl,
        quizTags: itemFields.quizTags,
        outOfStock: false,
      },
      create: {
        id: item.id,
        venueId: venue.id,
        categoryId: itemFields.categoryId,
        name: itemFields.name,
        description: itemFields.description,
        price: itemFields.price,
        imageUrl: itemFields.imageUrl,
        quizTags: itemFields.quizTags,
        outOfStock: false,
      },
    });

    // Seed recipe items
    if (recipes && recipes.length > 0) {
      await prisma.recipeItem.deleteMany({ where: { menuItemId: item.id } });
      await prisma.recipeItem.createMany({
        data: recipes.map((r) => ({
          venueId: venue.id,
          menuItemId: item.id,
          ingredientId: r.ingredientId,
          quantityUsed: r.quantityUsed,
        })),
      });
    }
  }
  console.log(`✓ ${menuItemsData.length} Menu items with full image URLs & recipes seeded.`);

  // ── 6. Seed Add-ons ──
  const addOnsList = [
    { id: "addon-extra-shot", name: "Extra Espresso Shot", price: 15.0, applicableItemIds: ["item-flat-white", "item-cappuccino", "item-spanish-latte", "item-iced-latte", "item-iced-spanish-latte", "item-iced-pistachio-latte"] },
    { id: "addon-oat-milk", name: "Oatly Barista Upgrade", price: 20.0, applicableItemIds: ["item-flat-white", "item-cappuccino", "item-spanish-latte", "item-iced-latte", "item-iced-spanish-latte", "item-matcha-latte", "item-strawberry-matcha"] },
    { id: "addon-almond-milk", name: "Almond Milk Upgrade", price: 20.0, applicableItemIds: ["item-flat-white", "item-cappuccino", "item-iced-latte", "item-matcha-latte"] },
    { id: "addon-vanilla-syrup", name: "Vanilla Syrup Pump", price: 15.0, applicableItemIds: ["item-flat-white", "item-cappuccino", "item-iced-latte", "item-matcha-latte", "item-nitro-cold-brew"] },
    { id: "addon-caramel-drizzle", name: "Salted Caramel Drizzle", price: 15.0, applicableItemIds: ["item-cappuccino", "item-iced-latte", "item-brownie", "item-cheesecake", "item-french-toast"] },
    { id: "addon-gelato-scoop", name: "Madagascar Vanilla Gelato", price: 30.0, applicableItemIds: ["item-brownie", "item-cheesecake", "item-french-toast", "item-espresso-double"] },
  ];

  for (const addon of addOnsList) {
    await prisma.addOn.upsert({
      where: { id: addon.id },
      update: { venueId: venue.id, name: addon.name, price: addon.price, applicableItemIds: addon.applicableItemIds },
      create: { id: addon.id, venueId: venue.id, name: addon.name, price: addon.price, applicableItemIds: addon.applicableItemIds },
    });
  }
  console.log(`✓ ${addOnsList.length} Add-ons seeded.`);

  // ── 7. Seed Modifier Groups ──
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

  // Coffee beverage item IDs for modifier attachments
  const hotMilkyDrinks = ["item-flat-white", "item-cappuccino", "item-spanish-latte", "item-caramel-macchiato"];
  const icedMilkyDrinks = ["item-iced-spanish-latte", "item-iced-latte", "item-iced-pistachio-latte", "item-iced-salted-caramel", "item-matcha-latte", "item-strawberry-matcha"];

  for (const itemId of hotMilkyDrinks) {
    await seedModifierGroup(`mod-${itemId}-size`, itemId, "Size", true, 1, 0, [
      { id: `opt-${itemId}-size-reg`, label: "Regular (240ml)", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
      { id: `opt-${itemId}-size-lg`, label: "Large (360ml)", priceAdjustment: 18, isDefault: false, orderIndex: 1 },
    ]);
    await seedModifierGroup(`mod-${itemId}-milk`, itemId, "Milk Choice", false, 1, 1, [
      { id: `opt-${itemId}-milk-whole`, label: "Fresh Whole Milk", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
      { id: `opt-${itemId}-milk-oat`, label: "Oat Milk (Barista)", priceAdjustment: 20, isDefault: false, orderIndex: 1 },
      { id: `opt-${itemId}-milk-almond`, label: "Almond Milk", priceAdjustment: 20, isDefault: false, orderIndex: 2 },
      { id: `opt-${itemId}-milk-skim`, label: "Skim Milk (Light)", priceAdjustment: 0, isDefault: false, orderIndex: 3 },
    ]);
    await seedModifierGroup(`mod-${itemId}-sweet`, itemId, "Sweetness", false, 1, 2, [
      { id: `opt-${itemId}-sweet-none`, label: "No Sugar", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
      { id: `opt-${itemId}-sweet-half`, label: "50% Sugar", priceAdjustment: 0, isDefault: false, orderIndex: 1 },
      { id: `opt-${itemId}-sweet-full`, label: "100% Sugar", priceAdjustment: 0, isDefault: false, orderIndex: 2 },
    ]);
  }

  for (const itemId of icedMilkyDrinks) {
    await seedModifierGroup(`mod-${itemId}-size`, itemId, "Size", true, 1, 0, [
      { id: `opt-${itemId}-size-reg`, label: "Regular (360ml)", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
      { id: `opt-${itemId}-size-lg`, label: "Large (480ml)", priceAdjustment: 20, isDefault: false, orderIndex: 1 },
    ]);
    await seedModifierGroup(`mod-${itemId}-milk`, itemId, "Milk Choice", false, 1, 1, [
      { id: `opt-${itemId}-milk-whole`, label: "Fresh Whole Milk", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
      { id: `opt-${itemId}-milk-oat`, label: "Oat Milk (Barista)", priceAdjustment: 20, isDefault: false, orderIndex: 1 },
      { id: `opt-${itemId}-milk-almond`, label: "Almond Milk", priceAdjustment: 20, isDefault: false, orderIndex: 2 },
    ]);
    await seedModifierGroup(`mod-${itemId}-ice`, itemId, "Ice Level", false, 1, 2, [
      { id: `opt-${itemId}-ice-reg`, label: "Regular Ice", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
      { id: `opt-${itemId}-ice-less`, label: "Less Ice", priceAdjustment: 0, isDefault: false, orderIndex: 1 },
      { id: `opt-${itemId}-ice-none`, label: "No Ice", priceAdjustment: 0, isDefault: false, orderIndex: 2 },
    ]);
    await seedModifierGroup(`mod-${itemId}-sweet`, itemId, "Sweetness", false, 1, 3, [
      { id: `opt-${itemId}-sweet-none`, label: "Standard Recipe", priceAdjustment: 0, isDefault: true, orderIndex: 0 },
      { id: `opt-${itemId}-sweet-half`, label: "Less Sweet", priceAdjustment: 0, isDefault: false, orderIndex: 1 },
      { id: `opt-${itemId}-sweet-full`, label: "Extra Sweet", priceAdjustment: 0, isDefault: false, orderIndex: 2 },
    ]);
  }

  console.log("✓ Modifier groups seeded for all coffee & matcha drinks.");

  // ── 8. Seed Venue Tables & Active Sessions ──
  const venueTables = [
    { label: "Table 1", qrToken: "table-1" },
    { label: "Table 2", qrToken: "table-2" },
    { label: "Table 3", qrToken: "table-3" },
    { label: "Table 4", qrToken: "table-4" },
    { label: "Table 5", qrToken: "test-qr" },
    { label: "Table 6", qrToken: "table-6" },
    { label: "Terrace 1", qrToken: "terrace-1" },
    { label: "Terrace 2", qrToken: "terrace-2" },
    { label: "VIP Lounge", qrToken: "vip-lounge" },
  ];

  for (const t of venueTables) {
    const createdTable = await prisma.table.upsert({
      where: { qrToken: t.qrToken },
      update: { venueId: venue.id, label: t.label },
      create: { venueId: venue.id, label: t.label, qrToken: t.qrToken },
    });

    // Make Table 5 (test-qr) and Table 2 active with sessions
    if (t.qrToken === "test-qr" || t.qrToken === "table-2") {
      if (!createdTable.activeSessionId) {
        const session = await prisma.tableSession.create({
          data: { venueId: venue.id, tableId: createdTable.id },
        });
        await prisma.table.update({
          where: { id: createdTable.id },
          data: { activeSessionId: session.id },
        });
        console.log(`  ✓ ${t.label} activated with session ${session.id}`);
      }
    }
  }

  console.log("🎉 Seeding successfully completed!");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
