"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  Coffee, 
  Bicycle, 
  CheckCircle, 
  Sparkle, 
  CaretDown, 
  CaretUp,
  Receipt,
  CookingPot
} from "@phosphor-icons/react";
import styles from "./LiveOrderTracker.module.css";
import { playBell } from "@/lib/sound";

export interface TrackerOrder {
  id: string;
  status: string; // PENDING | PREPARING | BARISTA_DONE | SERVED | CLOSED
  totalAmount: number;
  tipAmount: number;
  customerName?: string | null;
  notes?: string | null;
  createdAt: string;
  items: Array<{
    id: string;
    quantity: number;
    menuItem: {
      id: string;
      name: string;
      price: number;
    };
    addOns?: any;
    modifiers?: any;
  }>;
}

interface LiveOrderTrackerProps {
  orders: TrackerOrder[];
  language: "en" | "ar";
  venueSlug: string;
  onRefreshOrders?: () => void;
}

const STAGES = [
  { key: "PENDING", step: 1 },
  { key: "PREPARING", step: 2 },
  { key: "BARISTA_DONE", step: 3 },
  { key: "SERVED", step: 4 },
];

function getStageIndex(status: string): number {
  switch (status) {
    case "PENDING":
      return 1;
    case "PREPARING":
      return 2;
    case "BARISTA_DONE":
      return 3;
    case "SERVED":
    case "CLOSED":
      return 4;
    default:
      return 1;
  }
}

const statusText = {
  PENDING: {
    en: { title: "Order Received", sub: "Queued at the counter" },
    ar: { title: "تم استلام طلبك", sub: "في انتظار بدء التحضير" },
  },
  PREPARING: {
    en: { title: "Brewing & Crafting", sub: "Barista is preparing your drinks" },
    ar: { title: "جاري التحضير", sub: "الباريستا يجهز طلبك الآن" },
  },
  BARISTA_DONE: {
    en: { title: "Out for Delivery", sub: "Staff is bringing your order to your table" },
    ar: { title: "في الطريق لطاولتك", sub: "طاقم الخدمة يحضر طلبك الآن" },
  },
  SERVED: {
    en: { title: "Delivered • Enjoy!", sub: "Your order has arrived at your table" },
    ar: { title: "تم التقديم • بالهناء والشفاء!", sub: "تم تسليم الطلب إلى طاولتك" },
  },
  CLOSED: {
    en: { title: "Bill Settled", sub: "Thank you for dining with us!" },
    ar: { title: "تمت المحاسبة", sub: "شكراً لزيارتك ونتطلع لرؤيتك مجدداً!" },
  },
};

const stepLabels = {
  1: { en: "Received", ar: "استلام" },
  2: { en: "Brewing", ar: "تحضير" },
  3: { en: "Delivery", ar: "توصيل" },
  4: { en: "Enjoy!", ar: "بالهناء" },
};

function formatElapsed(createdAt: string, language: "en" | "ar"): string {
  try {
    const diffMs = Date.now() - new Date(createdAt).getTime();
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return language === "ar" ? "الآن" : "Just now";
    return language === "ar" ? `منذ ${mins} دقيقة` : `${mins}m ago`;
  } catch {
    return "";
  }
}

export default function LiveOrderTracker({
  orders,
  language,
  venueSlug,
  onRefreshOrders,
}: LiveOrderTrackerProps) {
  const [selectedOrderIdx, setSelectedOrderIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const previousStatusMap = useRef<Record<string, string>>({});

  // Filter out CLOSED orders if they were served long ago, or show active orders
  const activeOrders = orders.filter((o) => o.status !== "CANCELLED");

  // Track status changes and play sound alert
  useEffect(() => {
    let hasChanged = false;
    for (const order of activeOrders) {
      const prev = previousStatusMap.current[order.id];
      if (prev && prev !== order.status) {
        hasChanged = true;
      }
      previousStatusMap.current[order.id] = order.status;
    }
    if (hasChanged) {
      playBell();
    }
  }, [activeOrders]);

  if (activeOrders.length === 0) {
    return null;
  }

  const currentOrder = activeOrders[selectedOrderIdx] || activeOrders[0];
  const stageIndex = getStageIndex(currentOrder.status);
  const statusInfo = (statusText as any)[currentOrder.status]?.[language] || statusText.PENDING[language];
  const isServed = currentOrder.status === "SERVED" || currentOrder.status === "CLOSED";

  return (
    <motion.div
      className={styles.trackerContainer}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      {/* If multiple active orders, show tabs */}
      {activeOrders.length > 1 && (
        <div className={styles.multiOrderTabs}>
          {activeOrders.map((ord, idx) => (
            <button
              key={ord.id}
              type="button"
              className={`${styles.multiOrderTabBtn} ${selectedOrderIdx === idx ? styles.active : ""}`}
              onClick={() => setSelectedOrderIdx(idx)}
            >
              {language === "ar" ? `طلب #${idx + 1}` : `Order #${idx + 1}`} • {(statusText as any)[ord.status]?.[language]?.title || ord.status}
            </button>
          ))}
        </div>
      )}

      <div className={`${styles.trackerCard} ${isServed ? styles.servedGlow : styles.activeGlow}`}>
        {/* Header summary row */}
        <div className={styles.headerRow} onClick={() => setIsExpanded(!isExpanded)}>
          <div className={styles.headerLeft}>
            <div className={`${styles.statusIconBadge} ${(styles as any)[currentOrder.status.toLowerCase()] || styles.pending}`}>
              {!isServed && <span className={styles.livePulseDot} />}
              {currentOrder.status === "PENDING" && <Clock size={20} weight="bold" />}
              {currentOrder.status === "PREPARING" && <Coffee size={20} weight="fill" />}
              {currentOrder.status === "BARISTA_DONE" && <Bicycle size={20} weight="bold" />}
              {isServed && <CheckCircle size={22} weight="fill" />}
            </div>

            <div className={styles.titleArea}>
              <span className={styles.statusTitle}>{statusInfo.title}</span>
              <span className={styles.statusSubtitle}>{statusInfo.sub}</span>
            </div>
          </div>

          <div className={styles.headerRight}>
            <span className={styles.orderTimeTag}>
              {formatElapsed(currentOrder.createdAt, language)}
            </span>
            <button
              type="button"
              className={styles.expandToggleBtn}
              aria-label="Toggle details"
            >
              {isExpanded ? <CaretUp size={18} weight="bold" /> : <CaretDown size={18} weight="bold" />}
            </button>
          </div>
        </div>

        {/* 4-Step Progress Stepper */}
        <div className={styles.stepperWrapper}>
          <div className={styles.stepperTrack}>
            {/* Progress line between dots */}
            <div
              className={styles.stepLine}
              style={{
                left: "14%",
                right: "14%",
              }}
            />
            <div
              className={`${styles.stepLine} ${styles.completed}`}
              style={{
                left: "14%",
                width: `${Math.min(100, Math.max(0, ((stageIndex - 1) / 3) * 72))}%`,
              }}
            />

            {/* Stepper Dots */}
            {[1, 2, 3, 4].map((stepNum) => {
              const isStepCompleted = stageIndex > stepNum;
              const isStepActive = stageIndex === stepNum;
              const isStepServed = isStepActive && stepNum === 4;

              return (
                <div key={stepNum} className={styles.stepItem}>
                  <div
                    className={`${styles.stepDot} ${
                      isStepServed
                        ? styles.servedDone
                        : isStepActive
                        ? styles.active
                        : isStepCompleted
                        ? styles.completed
                        : ""
                    }`}
                  >
                    {isStepCompleted ? (
                      <CheckCircle size={16} weight="fill" />
                    ) : stepNum === 1 ? (
                      <Clock size={13} weight="bold" />
                    ) : stepNum === 2 ? (
                      <Coffee size={13} weight="fill" />
                    ) : stepNum === 3 ? (
                      <Bicycle size={13} weight="bold" />
                    ) : (
                      <Sparkle size={13} weight="fill" />
                    )}
                  </div>
                  <span className={`${styles.stepLabel} ${isStepActive ? styles.active : ""}`}>
                    {(stepLabels as any)[stepNum]?.[language] || ""}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expandable Order Breakdown */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className={styles.orderDetailsBody}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.itemList}>
                {currentOrder.items.map((item) => {
                  const mods = (item.modifiers as any[]) || [];
                  const addOns = (item.addOns as any[]) || [];
                  const itemUnitPrice =
                    Number(item.menuItem.price) +
                    mods.reduce((s, m) => s + Number(m.priceAdjustment || 0), 0) +
                    addOns.reduce((s, a) => s + Number(a.price || 0), 0);

                  return (
                    <div key={item.id} className={styles.orderItemRow}>
                      <div className={styles.itemRowLeft}>
                        <span className={styles.itemNameBold}>
                          {item.quantity}× {item.menuItem.name}
                        </span>
                        
                        {mods.length > 0 && (
                          <div className={styles.itemModifiersRow}>
                            {mods.map((m: any, i: number) => (
                              <span key={i} className={styles.itemModBadge}>
                                {m.optionLabel || m.label}
                              </span>
                            ))}
                          </div>
                        )}

                        {addOns.length > 0 && (
                          <div className={styles.itemModifiersRow}>
                            {addOns.map((a: any, i: number) => (
                              <span key={i} className={styles.itemModBadge} style={{ color: "var(--color-text-muted)" }}>
                                + {a.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <span className={styles.itemPriceText}>
                        {itemUnitPrice * item.quantity} {language === "ar" ? "ج.م" : "EGP"}
                      </span>
                    </div>
                  );
                })}
              </div>

              {currentOrder.notes && (
                <div style={{ marginTop: "8px", fontSize: "12px", color: "var(--color-text-muted)" }}>
                  <strong>{language === "ar" ? "ملاحظات:" : "Notes:"}</strong> {currentOrder.notes}
                </div>
              )}

              <div className={styles.orderFooterTotal}>
                <span>{language === "ar" ? "إجمالي الطلب" : "Order Total"}</span>
                <span className={styles.totalAmountHighlight}>
                  {currentOrder.totalAmount} {language === "ar" ? "ج.م" : "EGP"}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
