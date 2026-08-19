"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Translate, 
  Moon, 
  Sun, 
  CaretUp, 
  CaretDown, 
  Plus, 
  Trash, 
  BellRinging,
  Heart,
  Clock,
  ShoppingBag,
  CheckCircle,
  Sparkle
} from "@phosphor-icons/react";
import styles from "./customer.module.css";
import { useTheme } from "@/components/ThemeProvider";
import { submitOrder, callWaiter } from "./actions";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { EmptyState } from "@/components/ui/EmptyState";

// --- Motion Seeds ---
const silk: any = {
  entrance: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  exit: {
    initial: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.15 },
  }
};

const spring: any = {
  hover: {
    whileHover: { scale: 1.03, y: -2 },
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
  press: {
    whileTap: { scale: 0.94 },
    transition: { type: "spring", stiffness: 500, damping: 15 },
  }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  }
};

const staggerItem: any = {
  hidden: { opacity: 0, y: 16 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 20 }
  }
};

type Venue = any;
type Table = any;
type Category = any;
type MenuItem = any;
type AddOn = any;

interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  quantity: number;
  addOns: AddOn[];
}

export default function CustomerApp({
  venue,
  table,
  sessionId,
  categories,
  menuItems: initialMenuItems,
  addOns,
}: {
  venue: Venue;
  table: Table;
  sessionId: string;
  categories: Category[];
  menuItems: MenuItem[];
  addOns: AddOn[];
}) {
  const { toggleMode, toggleLanguage, language, isDark, isRtl } = useTheme();
  const [activeTab, setActiveTab] = useState<"menu" | "addons" | "quiz">("menu");
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id || "");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isCallingWaiter, setIsCallingWaiter] = useState(false);
  const [waiterCalledSuccess, setWaiterCalledSuccess] = useState(false);

  // SSE Listener for live out-of-stock updates
  useEffect(() => {
    const eventSource = new EventSource(`/api/venues/${venue.slug}/stream`);

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "out-of-stock") {
          setMenuItems((prev) =>
            prev.map((item) =>
              data.itemIds.includes(item.id) ? { ...item, outOfStock: true } : item
            )
          );
        }
      } catch (e) {
        console.error("Failed to parse SSE event", e);
      }
    };

    return () => eventSource.close();
  }, [venue.slug]);

  // Cart Management
  const addToCart = (menuItem: MenuItem) => {
    setCart((prev) => [
      ...prev,
      {
        cartItemId: Math.random().toString(36).substring(2, 11),
        menuItem,
        quantity: 1,
        addOns: [],
      },
    ]);
    const label = language === "ar" ? `تمت إضافة ${menuItem.name}` : `Added ${menuItem.name} to order`;
    setToastMessage(label);
    setTimeout(() => setToastMessage(null), 2200);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const toggleAddOnInCart = (addOn: AddOn) => {
    setCart((prev) =>
      prev.map((item) => {
        if (addOn.applicableItemIds.includes(item.menuItem.id)) {
          const hasAddOn = item.addOns.some((a) => a.id === addOn.id);
          if (hasAddOn) {
            return { ...item, addOns: item.addOns.filter((a) => a.id !== addOn.id) };
          } else {
            return { ...item, addOns: [...item.addOns, addOn] };
          }
        }
        return item;
      })
    );
  };

  const handleCallWaiter = async () => {
    setIsCallingWaiter(true);
    try {
      await callWaiter(venue.id, table.id);
      setWaiterCalledSuccess(true);
      setToastMessage(language === "ar" ? "تم استدعاء النادل إلى طاولتك" : "Waiter called to your table");
      setTimeout(() => {
        setWaiterCalledSuccess(false);
        setToastMessage(null);
      }, 3500);
    } catch {
      alert("Failed to call waiter. Please ask staff nearby.");
    } finally {
      setIsCallingWaiter(false);
    }
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={styles.container}>
      {/* ── Top Bar ── */}
      <header className={styles.topBar}>
        <div className={styles.topBarGroup}>
          <motion.button 
            {...spring.press}
            className={styles.iconButton} 
            onClick={toggleLanguage}
            aria-label="Toggle language between English and Arabic"
          >
            <Translate size={19} weight="bold" />
            <span className={styles.langLabel}>{language === "ar" ? "EN" : "ع"}</span>
          </motion.button>
          <motion.button 
            {...spring.press}
            className={styles.iconButton} 
            onClick={toggleMode}
            aria-label="Toggle dark/light theme"
          >
            {isDark ? <Sun size={19} weight="bold" /> : <Moon size={19} weight="bold" />}
          </motion.button>
        </div>

        <div className={styles.venueBrandHeader}>
          <span className={styles.tableBadge}>
            {table.label}
          </span>
        </div>

        <Button 
          variant={waiterCalledSuccess ? "secondary" : "secondary"} 
          size="sm"
          isLoading={isCallingWaiter}
          onClick={handleCallWaiter}
          className={styles.callWaiterBtn}
        >
          {waiterCalledSuccess ? (
            <><CheckCircle size={17} weight="fill" color="var(--color-success)" /> {language === "ar" ? "تم النداء" : "Called"}</>
          ) : (
            <><BellRinging size={17} weight="bold" /> {language === "ar" ? "طلب نادل" : "Call Staff"}</>
          )}
        </Button>
      </header>

      {/* ── Navigation Tabs ── */}
      <nav className={styles.mainTabs} aria-label="Menu sections">
        <button
          className={`${styles.mainTabBtn} ${activeTab === "menu" ? styles.active : ""}`}
          onClick={() => setActiveTab("menu")}
        >
          {language === "ar" ? "القائمة الرئيسية" : "Menu"}
        </button>
        <button
          className={`${styles.mainTabBtn} ${activeTab === "addons" ? styles.active : ""}`}
          onClick={() => setActiveTab("addons")}
        >
          {language === "ar" ? "الإضافات" : "Add-ons"}
        </button>
        <button
          className={`${styles.mainTabBtn} ${activeTab === "quiz" ? styles.active : ""}`}
          onClick={() => setActiveTab("quiz")}
        >
          <Sparkle size={15} weight="fill" style={{ verticalAlign: "-2px", marginInlineEnd: "4px" }} />
          {language === "ar" ? "اكتشف ذوقك" : "Taste Finder"}
        </button>
      </nav>

      {/* ── Main Content Area ── */}
      <main className={styles.content}>
        {activeTab === "menu" && (
          <MenuTab
            categories={categories}
            menuItems={menuItems}
            activeCategoryId={activeCategoryId}
            setActiveCategoryId={setActiveCategoryId}
            addToCart={addToCart}
            language={language}
          />
        )}
        {activeTab === "addons" && (
          <AddOnsTab
            addOns={addOns}
            menuItems={menuItems}
            cart={cart}
            toggleAddOnInCart={toggleAddOnInCart}
            language={language}
          />
        )}
        {activeTab === "quiz" && (
          <PlayWithUsTab 
            menuItems={menuItems} 
            addToCart={addToCart} 
            language={language} 
          />
        )}
      </main>

      {/* ── Bottom Cart Drawer ── */}
      <CartDrawer
        venueId={venue.id}
        table={table}
        sessionId={sessionId}
        cart={cart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        removeFromCart={removeFromCart}
        setCart={setCart}
        language={language}
        totalCartCount={totalCartCount}
      />

      {/* ── Floating Notification Toast ── */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className={styles.toast}
            role="status"
          >
            <CheckCircle size={20} weight="fill" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuTab({ categories, menuItems, activeCategoryId, setActiveCategoryId, addToCart, language }: any) {
  const visibleItems = menuItems.filter((i: any) => i.categoryId === activeCategoryId);

  return (
    <div>
      {/* Category Scroll Bar (Horizontal snap for thumb reach) */}
      <div className={styles.categoryTabs} role="tablist">
        {categories.map((cat: any) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategoryId === cat.id}
            className={`${styles.catBtn} ${activeCategoryId === cat.id ? styles.active : ""}`}
            onClick={() => setActiveCategoryId(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {visibleItems.length === 0 ? (
        <EmptyState
          title={language === "ar" ? "لا توجد عناصر حالياً" : "No items available"}
          description={language === "ar" ? "اختر تصنيفاً آخر لاستعراض المشروبات والمأكولات" : "Please check back soon or browse another category"}
        />
      ) : (
        <motion.div 
          className={styles.menuGrid}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          key={activeCategoryId}
        >
          {visibleItems.map((item: any) => (
            <motion.div key={item.id} variants={staggerItem}>
              <Card className={styles.menuItemCard}>
                <div className={styles.itemImagePlaceholder}>
                  {item.name.charAt(0)}
                </div>
                
                <div className={styles.itemInfo}>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <div className={styles.itemTime}>
                      <Clock size={13} weight="bold" /> 8-10m
                    </div>
                  </div>
                  
                  {item.description && (
                    <p className={styles.itemDesc}>{item.description}</p>
                  )}
                  
                  <div className={styles.itemFooter}>
                    <div className={styles.priceTag}>
                      <span className={styles.currency}>{language === "ar" ? "ج.م" : "EGP"}</span>
                      <span className={styles.itemPrice}>{Number(item.price).toFixed(0)}</span>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => addToCart(item)}
                      disabled={item.outOfStock}
                      className={styles.addToCartBtn}
                      leftIcon={<Plus size={16} weight="bold" />}
                    >
                      {item.outOfStock 
                        ? (language === "ar" ? "نفذ" : "Sold Out") 
                        : (language === "ar" ? "إضافة" : "Add")}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function AddOnsTab({ addOns, menuItems, cart, toggleAddOnInCart, language }: any) {
  if (!addOns || addOns.length === 0) {
    return (
      <EmptyState
        title={language === "ar" ? "لا توجد إضافات" : "No add-ons available"}
        description={language === "ar" ? "كل الأصناف تأتي بمواصفاتها القياسية اللذيذة" : "All standard recipes are ready to enjoy."}
      />
    );
  }

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className={styles.addOnsWrapper}>
      <p className={styles.addOnsNote}>
        {language === "ar" 
          ? "حدد الإضافات المفضلة ليتم تطبيقها على المشروبات المتوافقة في طلبك."
          : "Customize your beverages with complementary flavours and extra shots."}
      </p>
      
      <div className={styles.addOnsGrid}>
        {addOns.map((addOn: any) => {
          const applicableNames = menuItems
            .filter((i: any) => addOn.applicableItemIds?.includes(i.id))
            .map((i: any) => i.name)
            .join(" • ");

          const isActiveInCart = cart.some((c: any) => c.addOns.some((a: any) => a.id === addOn.id));

          return (
            <motion.div variants={staggerItem} key={addOn.id}>
              <Card className={styles.addOnCard}>
                <div className={styles.addOnInfo}>
                  <div className={styles.addOnTitleRow}>
                    <span className={styles.addOnName}>{addOn.name}</span>
                    <Badge variant="primary" size="sm">+{Number(addOn.price)} {language === "ar" ? "ج.م" : "EGP"}</Badge>
                  </div>
                  {applicableNames && (
                    <span className={styles.addOnApplies}>
                      {language === "ar" ? "متوافق مع: " : "Pairs with: "} {applicableNames}
                    </span>
                  )}
                </div>
                <Button
                  variant={isActiveInCart ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => toggleAddOnInCart(addOn)}
                  className={styles.addOnToggleBtn}
                >
                  {isActiveInCart 
                    ? (language === "ar" ? "مضاف ✓" : "Added ✓") 
                    : (language === "ar" ? "+ إضافة" : "+ Add")}
                </Button>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function PlayWithUsTab({ menuItems, addToCart, language }: any) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  
  const questionsEn = [
    { title: "What mood are you in?", options: [{ label: "Rich Coffee Drink", tag: "caffeine" }, { label: "Artisan Dessert", tag: "dessert" }] },
    { title: "Hot or Chilled?", options: [{ label: "Hot & Cozy", tag: "hot" }, { label: "Iced & Refreshing", tag: "cold" }] },
    { title: "Texture preference?", options: [{ label: "Velvety & Milky", tag: "creamy" }, { label: "Crisp & Clean", tag: "black" }] },
    { title: "Flavor Profile?", options: [{ label: "Decadent & Sweet", tag: "sweet" }, { label: "Aromatic & Fruity", tag: "fruity" }] },
  ];

  const questionsAr = [
    { title: "ماذا تشتهي اليوم؟", options: [{ label: "قهوة ومشروب مميز", tag: "caffeine" }, { label: "حلوى فاخرة", tag: "dessert" }] },
    { title: "ساخن أم مثلج؟", options: [{ label: "دافئ ومريح", tag: "hot" }, { label: "مثلج ومنعش", tag: "cold" }] },
    { title: "قوام المشروب المفضل؟", options: [{ label: "كريمي غني بالحليب", tag: "creamy" }, { label: "خفيف ونقي", tag: "black" }] },
    { title: "النكهة المفضلة؟", options: [{ label: "حلو مع لمسات شوكولاتة", tag: "sweet" }, { label: "فاكهي ونقي", tag: "fruity" }] },
  ];

  const questions = language === "ar" ? questionsAr : questionsEn;

  const handleAnswer = (tag: string) => {
    const newAnswers = [...answers, tag];
    if (step < questions.length - 1) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      setAnswers(newAnswers);
      setStep(questions.length);
    }
  };

  if (step < questions.length) {
    const q = questions[step];
    return (
      <AnimatePresence mode="wait">
        <motion.div 
          key={step} 
          {...silk.entrance} 
          exit={silk.exit.exit}
        >
          <Card className={styles.quizCard}>
            <div className={styles.quizStepIndicator}>
              {language === "ar" ? `السؤال ${step + 1} من ${questions.length}` : `Question ${step + 1} of ${questions.length}`}
            </div>
            <h2 className={styles.quizQuestion}>{q.title}</h2>
            <div className={styles.quizOptions}>
              {q.options.map((opt) => (
                <Button
                  key={opt.tag}
                  variant="outline"
                  size="lg"
                  className={styles.quizOptionBtn}
                  onClick={() => handleAnswer(opt.tag)}
                >
                  {opt.label}
                </Button>
              ))}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    );
  }

  // Results calculation
  const scoredItems = menuItems
    .filter((i: any) => !i.outOfStock)
    .map((item: any) => {
      let score = 0;
      const tags = (item.quizTags as string[]) || [];
      tags.forEach((t: string) => {
        if (answers.includes(t)) score++;
      });
      return { item, score };
    })
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, 3);

  return (
    <motion.div {...silk.entrance} className={styles.quizResults}>
      <div className={styles.quizResultsHeader}>
        <Sparkle size={24} weight="fill" color="var(--accent-color)" />
        <h2>{language === "ar" ? "اختيارات مصممة لذوقك" : "Handcrafted For You"}</h2>
      </div>

      <div className={styles.menuGrid}>
        {scoredItems.map(({ item }: any) => (
          <Card key={item.id} className={styles.menuItemCard}>
            <div className={styles.itemImagePlaceholder}>
              {item.name.charAt(0)}
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemHeader}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <Badge variant="primary" size="sm">{language === "ar" ? "تطابق عالي" : "Match"}</Badge>
              </div>
              <p className={styles.itemDesc}>{item.description}</p>
              <div className={styles.itemFooter}>
                <span className={styles.itemPrice}>{Number(item.price).toFixed(0)} {language === "ar" ? "ج.م" : "EGP"}</span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => addToCart(item)}
                  leftIcon={<Plus size={16} weight="bold" />}
                >
                  {language === "ar" ? "إضافة" : "Add"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button
        variant="secondary"
        size="md"
        className={styles.retakeBtn}
        onClick={() => { setStep(0); setAnswers([]); }}
      >
        {language === "ar" ? "إعادة التجربة" : "Retake Taste Finder"}
      </Button>
    </motion.div>
  );
}

function CartDrawer({ 
  venueId, 
  table, 
  sessionId, 
  cart, 
  isCartOpen, 
  setIsCartOpen, 
  removeFromCart, 
  setCart,
  language,
  totalCartCount
}: any) {
  const [tip, setTip] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("CASH");
  const [customerName, setCustomerName] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSubmittedSuccess, setOrderSubmittedSuccess] = useState(false);

  const subtotal = cart.reduce((acc: number, item: any) => {
    let itemTotal = Number(item.menuItem.price);
    item.addOns.forEach((a: any) => itemTotal += Number(a.price));
    return acc + (itemTotal * item.quantity);
  }, 0);

  const total = subtotal + tip;

  const handleSubmit = async () => {
    if (cart.length === 0) return;
    setIsSubmitting(true);
    try {
      await submitOrder({
        venueId,
        tableId: table.id,
        tableSessionId: sessionId,
        customerName,
        notes,
        paymentMethod,
        tipAmount: tip,
        totalAmount: total,
        items: cart.map((c: any) => ({
          menuItemId: c.menuItem.id,
          quantity: c.quantity,
          addOns: c.addOns.map((a: any) => ({ id: a.id, name: a.name, price: Number(a.price) })),
        })),
      });
      setOrderSubmittedSuccess(true);
      setCart([]);
      setTip(0);
      setCustomerName("");
      setNotes("");
      setTimeout(() => {
        setOrderSubmittedSuccess(false);
        setIsCartOpen(false);
      }, 2500);
    } catch (e: any) {
      alert((language === "ar" ? "فشل إرسال الطلب: " : "Failed to submit order: ") + e.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${styles.cartDrawerWrapper} ${isCartOpen ? styles.open : ""}`}>
      {/* Backdrop overlay */}
      {isCartOpen && (
        <div className={styles.cartBackdrop} onClick={() => setIsCartOpen(false)} />
      )}

      {/* Floating Bar / Expanded Drawer */}
      <motion.div 
        className={styles.cartDrawer}
        layout
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      >
        <button 
          className={styles.cartHeader} 
          onClick={() => setIsCartOpen(!isCartOpen)}
          aria-expanded={isCartOpen}
        >
          <div className={styles.cartTitleGroup}>
            <div className={styles.cartIconBadge}>
              <ShoppingBag size={20} weight="bold" />
              {totalCartCount > 0 && (
                <span className={styles.cartBadgeCount}>{totalCartCount}</span>
              )}
            </div>
            <div className={styles.cartHeaderTitles}>
              <span className={styles.cartTitle}>
                {language === "ar" ? "سلة الطلبات" : "Your Order"}
              </span>
              <span className={styles.cartItemCount}>
                {cart.length} {cart.length === 1 ? (language === "ar" ? "عنصر" : "item") : (language === "ar" ? "عناصر" : "items")}
              </span>
            </div>
          </div>

          <div className={styles.cartTotalGroup}>
            <span className={styles.cartTotal}>
              {total} <small>{language === "ar" ? "ج.م" : "EGP"}</small>
            </span>
            <div className={styles.caretIcon}>
              {isCartOpen ? <CaretDown size={20} weight="bold" /> : <CaretUp size={20} weight="bold" />}
            </div>
          </div>
        </button>

        {isCartOpen && (
          <div className={styles.cartBody}>
            {orderSubmittedSuccess ? (
              <div className={styles.orderSuccessState}>
                <CheckCircle size={56} weight="fill" color="var(--color-success)" />
                <h3>{language === "ar" ? "تم إرسال طلبك بنجاح!" : "Order Placed Successfully!"}</h3>
                <p>{language === "ar" ? "الباريستا يجهز طلبك الآن." : "Our barista is crafting your order right now."}</p>
              </div>
            ) : cart.length === 0 ? (
              <EmptyState
                icon={<ShoppingBag size={28} />}
                title={language === "ar" ? "السلة فارغة" : "Your cart is empty"}
                description={language === "ar" ? "اختر من القائمة لإضافة مشروباتك المفضلة" : "Explore our menu and add your favorite items"}
              />
            ) : (
              <div className={styles.cartItemList}>
                {cart.map((item: any) => (
                  <div key={item.cartItemId} className={styles.cartItem}>
                    <div className={styles.cartItemInfo}>
                      <h4>{item.menuItem.name}</h4>
                      {item.addOns.map((a: any) => (
                        <span key={a.id} className={styles.cartItemAddOnBadge}>
                          + {a.name} ({Number(a.price)} {language === "ar" ? "ج.م" : "EGP"})
                        </span>
                      ))}
                    </div>
                    <div className={styles.cartItemRight}>
                      <span className={styles.cartItemPrice}>
                        {(Number(item.menuItem.price) + item.addOns.reduce((sum: number, a: any) => sum + Number(a.price), 0)) * item.quantity} {language === "ar" ? "ج.م" : "EGP"}
                      </span>
                      <button
                        className={styles.removeBtn} 
                        onClick={() => removeFromCart(item.cartItemId)}
                        aria-label="Remove item"
                      >
                        <Trash size={16} />
                        <span>{language === "ar" ? "حذف" : "Remove"}</span>
                      </button>
                    </div>
                  </div>
                ))}

                <div className={styles.cartForm}>
                  {/* Tip Selection */}
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      {language === "ar" ? "إكرامية لطاقم الخدمة" : "Staff Tip (EGP)"}
                    </label>
                    <div className={styles.tipSelector}>
                      {[0, 10, 20, 30, 50].map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={`${styles.tipBtn} ${tip === t ? styles.active : ""}`}
                          onClick={() => setTip(t)}
                        >
                          {t === 0 ? (language === "ar" ? "بدون" : "None") : `+${t}`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      {language === "ar" ? "طريقة الدفع" : "Payment Method"}
                    </label>
                    <div className={styles.paymentMethodSelector}>
                      <button
                        type="button"
                        className={`${styles.payOptionBtn} ${paymentMethod === "CASH" ? styles.active : ""}`}
                        onClick={() => setPaymentMethod("CASH")}
                      >
                        {language === "ar" ? "💵 نقداً (كاش)" : "💵 Cash at Table"}
                      </button>
                      <button
                        type="button"
                        className={`${styles.payOptionBtn} ${paymentMethod === "VISA" ? styles.active : ""}`}
                        onClick={() => setPaymentMethod("VISA")}
                      >
                        {language === "ar" ? "💳 بطاقة بنكية" : "💳 Card / POS"}
                      </button>
                    </div>
                  </div>

                  {/* Name & Kitchen Notes using standard Input */}
                  <Input
                    label={language === "ar" ? "اسمك (اختياري)" : "Your Name (Optional)"}
                    placeholder={language === "ar" ? "مثال: أحمد" : "e.g. Alex"}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />

                  <Input
                    label={language === "ar" ? "ملاحظات للباريستا" : "Notes for Barista"}
                    placeholder={language === "ar" ? "سكر خفيف، ساخن جداً..." : "e.g. oat milk, extra hot, less ice"}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />

                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={handleSubmit}
                    isLoading={isSubmitting}
                    className={styles.submitOrderBtn}
                  >
                    {isSubmitting 
                      ? (language === "ar" ? "جاري الإرسال..." : "Sending to Kitchen...") 
                      : `${language === "ar" ? "تأكيد وإرسال الطلب" : "Place Order"} • ${total} ${language === "ar" ? "ج.م" : "EGP"}`}
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
