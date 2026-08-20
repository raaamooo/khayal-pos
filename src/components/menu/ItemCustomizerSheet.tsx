"use client";

import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Heart, Leaf, GrainsSlash, Nut } from "@phosphor-icons/react";
import styles from "./ItemCustomizerSheet.module.css";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { playTick, playPop } from "@/lib/sound";

// ── Types ──
export interface ModifierOption {
  id: string;
  label: string;
  priceAdjustment: number;
  isDefault: boolean;
  orderIndex: number;
}

export interface ModifierGroup {
  id: string;
  name: string;
  required: boolean;
  maxSelections: number;
  orderIndex: number;
  options: ModifierOption[];
}

export interface SelectedModifier {
  groupId: string;
  groupName: string;
  optionId: string;
  optionLabel: string;
  priceAdjustment: number;
}

interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  outOfStock: boolean;
  quizTags?: string[];
  modifierGroups?: ModifierGroup[];
}

interface PairingItem {
  id: string;
  name: string;
  price: number;
}

interface ItemCustomizerSheetProps {
  item: MenuItem;
  pairings: PairingItem[];
  language: "en" | "ar";
  onAddToCart: (item: MenuItem, quantity: number, modifiers: SelectedModifier[]) => void;
  onAddPairing: (pairing: PairingItem) => void;
  onClose: () => void;
}

// ── Animations ──
const backdropVariants: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const sheetVariants: any = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    y: "100%",
    transition: { type: "spring", stiffness: 400, damping: 35 },
  },
};

// ── Dietary tag extraction ──
function getDietaryTags(quizTags: string[]): string[] {
  const dietary: string[] = [];
  for (const tag of quizTags) {
    if (tag === "vegan" || tag === "vegan-friendly") dietary.push("vegan");
    if (tag === "gluten-free") dietary.push("gluten-free");
    if (tag === "nut-free") dietary.push("nut-free");
  }
  return [...new Set(dietary)];
}

const dietaryLabels: Record<string, Record<string, string>> = {
  vegan: { en: "Vegan", ar: "نباتي" },
  "gluten-free": { en: "Gluten-Free", ar: "خالي من الغلوتين" },
  "nut-free": { en: "Nut-Free", ar: "خالي من المكسرات" },
};

const dietaryIcons: Record<string, React.ReactNode> = {
  vegan: <Leaf size={13} weight="bold" />,
  "gluten-free": <GrainsSlash size={13} weight="bold" />,
  "nut-free": <Nut size={13} weight="bold" />,
};

const dietaryClassMap: Record<string, string> = {
  vegan: styles.vegan,
  "gluten-free": styles.glutenFree,
  "nut-free": styles.nutFree,
};

export default function ItemCustomizerSheet({
  item,
  pairings,
  language,
  onAddToCart,
  onAddPairing,
  onClose,
}: ItemCustomizerSheetProps) {
  const [quantity, setQuantity] = useState(1);

  // Initialize modifier selections with defaults
  const [selections, setSelections] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    if (item.modifierGroups) {
      for (const group of item.modifierGroups) {
        const defaultOpt = group.options.find((o) => o.isDefault);
        if (defaultOpt) {
          defaults[group.id] = defaultOpt.id;
        }
      }
    }
    return defaults;
  });

  const handleSelectOption = useCallback(
    (groupId: string, optionId: string) => {
      playTick();
      setSelections((prev) => ({ ...prev, [groupId]: optionId }));
    },
    []
  );

  // Calculate total price with modifier adjustments
  const modifierTotal = useMemo(() => {
    let total = 0;
    if (item.modifierGroups) {
      for (const group of item.modifierGroups) {
        const selectedId = selections[group.id];
        if (selectedId) {
          const opt = group.options.find((o) => o.id === selectedId);
          if (opt) total += Number(opt.priceAdjustment);
        }
      }
    }
    return total;
  }, [selections, item.modifierGroups]);

  const unitPrice = Number(item.price) + modifierTotal;
  const totalPrice = unitPrice * quantity;

  // Build modifier data for cart
  const handleAddToCart = useCallback(() => {
    playPop();
    const selectedModifiers: SelectedModifier[] = [];
    if (item.modifierGroups) {
      for (const group of item.modifierGroups) {
        const selectedId = selections[group.id];
        if (selectedId) {
          const opt = group.options.find((o) => o.id === selectedId);
          if (opt) {
            selectedModifiers.push({
              groupId: group.id,
              groupName: group.name,
              optionId: opt.id,
              optionLabel: opt.label,
              priceAdjustment: Number(opt.priceAdjustment),
            });
          }
        }
      }
    }
    onAddToCart(item, quantity, selectedModifiers);
  }, [item, quantity, selections, onAddToCart]);

  const dietaryTags = getDietaryTags((item.quizTags as string[]) || []);
  const sortedGroups = [...(item.modifierGroups || [])].sort(
    (a, b) => a.orderIndex - b.orderIndex
  );

  const currencyLabel = language === "ar" ? "ج.م" : "EGP";

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className={styles.sheetBackdrop}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      />

      {/* Sheet */}
      <motion.div
        className={styles.sheet}
        variants={sheetVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        role="dialog"
        aria-label={`Customize ${item.name}`}
      >
        <div className={styles.sheetHandle} />

        <div className={styles.sheetScrollArea}>
          {/* ── Item Hero ── */}
          <div className={styles.itemHero}>
            <div className={styles.heroImage}>
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                />
              ) : (
                item.name.charAt(0)
              )}
            </div>
            <div className={styles.heroInfo}>
              <h2 className={styles.heroName}>{item.name}</h2>
              {item.description && (
                <p className={styles.heroDesc}>{item.description}</p>
              )}
              <div className={styles.heroPrice}>
                <span className={styles.heroPriceCurrency}>{currencyLabel}</span>
                <span className={styles.heroPriceAmount}>
                  {Number(item.price).toFixed(0)}
                </span>
              </div>
            </div>
          </div>

          {/* ── Dietary Tags ── */}
          {dietaryTags.length > 0 && (
            <div className={styles.dietaryTags}>
              {dietaryTags.map((tag) => (
                <span
                  key={tag}
                  className={`${styles.dietaryBadge} ${dietaryClassMap[tag] || ""}`}
                >
                  {dietaryIcons[tag]}
                  {dietaryLabels[tag]?.[language] || tag}
                </span>
              ))}
            </div>
          )}

          {/* ── Modifier Groups ── */}
          {sortedGroups.map((group) => {
            const sortedOptions = [...group.options].sort(
              (a, b) => a.orderIndex - b.orderIndex
            );
            return (
              <div key={group.id} className={styles.modifierGroup}>
                <div className={styles.modGroupHeader}>
                  <span className={styles.modGroupName}>{group.name}</span>
                  {group.required && (
                    <span className={styles.modGroupRequired}>
                      {language === "ar" ? "مطلوب" : "Required"}
                    </span>
                  )}
                </div>

                <div className={styles.segmentedControl}>
                  {sortedOptions.map((opt) => {
                    const isSelected = selections[group.id] === opt.id;
                    return (
                      <motion.button
                        key={opt.id}
                        className={`${styles.segmentOption} ${isSelected ? styles.selected : ""}`}
                        onClick={() => handleSelectOption(group.id, opt.id)}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        type="button"
                      >
                        <span className={styles.segmentLabel}>{opt.label}</span>
                        {Number(opt.priceAdjustment) > 0 && (
                          <span className={styles.segmentPrice}>
                            +{Number(opt.priceAdjustment)} {currencyLabel}
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* ── Pairings Carousel ── */}
          {pairings.length > 0 && (
            <div className={styles.pairingSection}>
              <div className={styles.pairingSectionTitle}>
                <Heart size={16} weight="fill" color="var(--secondary-color)" />
                {language === "ar"
                  ? "يتناسب تمامًا مع"
                  : "Pairs perfectly with"}
              </div>
              <div className={styles.pairingScroll}>
                {pairings.map((p) => (
                  <Card
                    key={p.id}
                    className={styles.pairingCard}
                    onClick={() => {
                      playPop();
                      onAddPairing(p);
                    }}
                  >
                    <div className={styles.pairingImg}>{p.name.charAt(0)}</div>
                    <span className={styles.pairingName}>{p.name}</span>
                    <span className={styles.pairingPrice}>
                      {Number(p.price).toFixed(0)} {currencyLabel}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Sticky Footer CTA ── */}
        <div className={styles.sheetFooter}>
          <div className={styles.sheetFooterInner}>
            {/* Quantity Stepper */}
            <div className={styles.quantityControl}>
              <button
                type="button"
                className={styles.qtyBtn}
                onClick={() => {
                  playTick();
                  setQuantity((q) => Math.max(1, q - 1));
                }}
                aria-label="Decrease quantity"
              >
                <Minus size={16} weight="bold" />
              </button>
              <span className={styles.qtyValue}>{quantity}</span>
              <button
                type="button"
                className={styles.qtyBtn}
                onClick={() => {
                  playTick();
                  setQuantity((q) => Math.min(10, q + 1));
                }}
                aria-label="Increase quantity"
              >
                <Plus size={16} weight="bold" />
              </button>
            </div>

            {/* Add to Order Button */}
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleAddToCart}
            >
              {language === "ar"
                ? `إضافة للطلب • ${totalPrice} ${currencyLabel}`
                : `Add to Order • ${totalPrice} ${currencyLabel}`}
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
