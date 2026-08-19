"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { updateOrderStatus, getBaristaOrders } from "../admin-actions";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";
import { 
  Coffee, 
  ArrowsClockwise, 
  Check, 
  Clock, 
  Sparkle, 
  Flame, 
  WarningCircle, 
  CheckCircle,
  Lightning,
  Funnel
} from "@phosphor-icons/react";
import { playBell, playTick, playSuccess } from "@/lib/sound";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./barista.module.css";

// Urgency calculation
function getUrgencyLevel(createdAt: string, now: number): {
  level: "fresh" | "warning" | "rush";
  elapsedFormatted: string;
  elapsedSec: number;
} {
  const elapsedSec = Math.max(0, Math.floor((now - new Date(createdAt).getTime()) / 1000));
  const mins = Math.floor(elapsedSec / 60);
  const secs = elapsedSec % 60;
  const elapsedFormatted = `${mins}:${secs.toString().padStart(2, "0")}`;

  if (mins < 3) {
    return { level: "fresh", elapsedFormatted, elapsedSec };
  } else if (mins < 7) {
    return { level: "warning", elapsedFormatted, elapsedSec };
  } else {
    return { level: "rush", elapsedFormatted, elapsedSec };
  }
}

export default function BaristaClient({
  venueId,
  venueSlug,
  initialOrders,
}: {
  venueId: string;
  venueSlug: string;
  initialOrders: any[];
}) {
  const { t } = useLanguage();
  const [orders, setOrders] = useState(initialOrders);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [newArrivalId, setNewArrivalId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "in_progress" | "pending" | "rush">("all");
  const [currentTime, setCurrentTime] = useState<number>(Date.now());
  const prevOrdersCountRef = useRef(initialOrders.length);

  // Live timer tick every second for accurate countdowns
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const refreshOrders = async (silent = false) => {
    if (!silent) setIsRefreshing(true);
    try {
      const fresh = await getBaristaOrders(venueId);
      if (fresh.length > prevOrdersCountRef.current) {
        // High-clarity kitchen bell chime on arrival!
        playBell();

        const newest = fresh[fresh.length - 1];
        if (newest) {
          setNewArrivalId(newest.id);
          setTimeout(() => setNewArrivalId(null), 4000);
        }
      }
      prevOrdersCountRef.current = fresh.length;
      setOrders(fresh);
    } finally {
      if (!silent) setIsRefreshing(false);
    }
  };

  useEffect(() => {
    const eventSource = new EventSource(`/api/venues/${venueSlug}/stream`);
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "new-order" || data.type === "order-status-change") {
          refreshOrders(true);
        }
      } catch (e) {
        console.error("Failed to parse SSE event", e);
      }
    };
    return () => eventSource.close();
  }, [venueSlug]);

  // Stage 1: Move from PENDING to PREPARING
  const handleStartBrewing = async (orderId: string) => {
    playTick();
    setProcessingId(orderId);
    try {
      await updateOrderStatus(venueId, orderId, "PREPARING", ["BARISTA"]);
      await refreshOrders(true);
    } finally {
      setProcessingId(null);
    }
  };

  // Stage 2: Move from PREPARING (or PENDING) to BARISTA_DONE
  const handleSendToWaiter = async (orderId: string) => {
    playSuccess();
    setProcessingId(orderId);
    try {
      await updateOrderStatus(venueId, orderId, "BARISTA_DONE", ["BARISTA"]);
      await refreshOrders(true);
    } finally {
      setProcessingId(null);
    }
  };

  // ── Demand Summary Calculation ──
  const demandSummary = useMemo(() => {
    let totalItems = 0;
    let totalShots = 0;
    let oatMilks = 0;
    let almondMilks = 0;
    const itemMap: Record<string, number> = {};

    for (const order of orders) {
      for (const item of order.items) {
        totalItems += item.quantity;
        const name = item.menuItem.name;
        itemMap[name] = (itemMap[name] || 0) + item.quantity;

        // Count espresso shots
        const itemNameLower = name.toLowerCase();
        if (itemNameLower.includes("flat white") || itemNameLower.includes("latte") || itemNameLower.includes("espresso") || itemNameLower.includes("v60")) {
          totalShots += 2 * item.quantity;
        }

        // Modifiers count
        const mods = (item.modifiers as any[]) || [];
        for (const m of mods) {
          const label = (m.optionLabel || m.label || "").toLowerCase();
          if (label.includes("oat")) oatMilks += item.quantity;
          if (label.includes("almond")) almondMilks += item.quantity;
          if (label.includes("shot") || label.includes("extra")) totalShots += item.quantity;
        }

        // AddOns count
        const addOns = (item.addOns as any[]) || [];
        for (const a of addOns) {
          const aName = (a.name || "").toLowerCase();
          if (aName.includes("oat")) oatMilks += item.quantity;
          if (aName.includes("almond")) almondMilks += item.quantity;
          if (aName.includes("shot")) totalShots += item.quantity;
        }
      }
    }

    return { totalItems, totalShots, oatMilks, almondMilks, itemMap };
  }, [orders]);

  // Filtered orders
  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      if (activeFilter === "in_progress") return o.status === "PREPARING";
      if (activeFilter === "pending") return o.status === "PENDING";
      if (activeFilter === "rush") {
        const urgency = getUrgencyLevel(o.createdAt, currentTime);
        return urgency.level === "rush";
      }
      return true;
    });
  }, [orders, activeFilter, currentTime]);

  return (
    <div className={styles.container}>
      {/* ── Top Bar ── */}
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.queueIconBadge}>
            <Coffee size={24} weight="fill" />
          </div>
          <div>
            <h1 className={styles.title}>Barista KDS Station</h1>
            <p className={styles.subtitle}>
              {orders.length === 0 
                ? "Ready for rush • No active tickets" 
                : `${orders.length} active ticket${orders.length > 1 ? "s" : ""} in queue`}
            </p>
          </div>
        </div>

        <div className={styles.headerActions}>
          <LanguageToggle />
          <Button 
            variant="secondary" 
            size="md"
            onClick={() => refreshOrders(false)} 
            isLoading={isRefreshing}
            leftIcon={<ArrowsClockwise weight="bold" size={18} />}
          >
            Refresh KDS
          </Button>
        </div>
      </header>

      {/* ── Live Batch Demand & Consumption Summary ── */}
      {orders.length > 0 && (
        <div className={styles.demandSummaryBar}>
          <div className={demandLeftStyle}>
            <Lightning size={18} weight="fill" />
            <span>Active Batch Demand:</span>
          </div>

          <div className={styles.demandChips}>
            <span className={`${styles.demandChip} ${styles.highlight}`}>
              ☕ {demandSummary.totalItems} Drink{demandSummary.totalItems !== 1 ? "s" : ""} Total
            </span>
            {demandSummary.totalShots > 0 && (
              <span className={styles.demandChip}>
                ⚡ {demandSummary.totalShots} Espresso Shots
              </span>
            )}
            {demandSummary.oatMilks > 0 && (
              <span className={styles.demandChip}>
                🥛 {demandSummary.oatMilks} Oat Milk
              </span>
            )}
            {demandSummary.almondMilks > 0 && (
              <span className={styles.demandChip}>
                🥜 {demandSummary.almondMilks} Almond Milk
              </span>
            )}
            {Object.entries(demandSummary.itemMap).map(([name, qty]) => (
              <span key={name} className={styles.demandChip}>
                {qty}× {name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Quick Filter Tabs ── */}
      {orders.length > 0 && (
        <div className={styles.filterTabs}>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeFilter === "all" ? styles.active : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Tickets ({orders.length})
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeFilter === "in_progress" ? styles.active : ""}`}
            onClick={() => setActiveFilter("in_progress")}
          >
            Brewing Now ({orders.filter((o) => o.status === "PREPARING").length})
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeFilter === "pending" ? styles.active : ""}`}
            onClick={() => setActiveFilter("pending")}
          >
            Unstarted ({orders.filter((o) => o.status === "PENDING").length})
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeFilter === "rush" ? styles.active : ""}`}
            onClick={() => setActiveFilter("rush")}
          >
            🚨 Rush (&gt;7m) ({orders.filter((o) => getUrgencyLevel(o.createdAt, currentTime).level === "rush").length})
          </button>
        </div>
      )}

      {/* ── Main Orders Grid ── */}
      {filteredOrders.length === 0 ? (
        <EmptyState
          icon={<Coffee size={36} weight="duotone" />}
          title={orders.length === 0 ? "All caught up!" : "No tickets matching filter"}
          description={orders.length === 0 
            ? "New orders placed by customers or staff will drop here with live audio alerts." 
            : "Switch filter tabs to view other active orders in queue."}
        />
      ) : (
        <motion.div className={styles.orderGrid} layout>
          <AnimatePresence mode="popLayout">
            {filteredOrders.map((order: any) => {
              const isNewArrival = newArrivalId === order.id;
              const urgency = getUrgencyLevel(order.createdAt, currentTime);
              const isPreparing = order.status === "PREPARING";

              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  layout
                  className={styles.orderMotionWrapper}
                >
                  <Card 
                    className={`${styles.orderCard} ${styles[urgency.level]} ${isPreparing ? styles.inProgress : ""} ${isNewArrival ? styles.newArrivalHighlight : ""}`}
                  >
                    {isNewArrival && (
                      <div className={styles.newArrivalBanner}>
                        <Sparkle size={14} weight="fill" />
                        <span>JUST DROPPED</span>
                      </div>
                    )}

                    {/* Table Header with Rush Timer */}
                    <div className={styles.cardHeader}>
                      <div className={styles.headerLeftInfo}>
                        <span className={styles.tableBadge}>
                          {order.tableSession?.table?.label || "Table Order"}
                        </span>
                        {isPreparing && (
                          <Badge variant="primary" size="sm">
                            <Flame size={12} weight="fill" /> BREWING
                          </Badge>
                        )}
                      </div>

                      {/* Urgency Timer Pill */}
                      <div className={`${styles.timerPill} ${styles[urgency.level]}`}>
                        {urgency.level === "rush" ? (
                          <WarningCircle size={14} weight="fill" />
                        ) : (
                          <Clock size={14} weight="bold" />
                        )}
                        <span>{urgency.elapsedFormatted}</span>
                      </div>
                    </div>

                    {order.customerName && (
                      <div className={styles.customerRow}>
                        <span className={styles.customerLabel}>Customer:</span>
                        <span className={styles.customerName}>{order.customerName}</span>
                      </div>
                    )}

                    {/* Items to prepare */}
                    <div className={styles.itemsList}>
                      {order.items.map((item: any) => (
                        <div key={item.id} className={styles.orderItem}>
                          <div className={styles.itemQuantityBadge}>
                            {item.quantity}x
                          </div>
                          <div className={styles.itemDetails}>
                            <span className={styles.itemName}>{item.menuItem.name}</span>
                            
                            {/* Selected Modifiers */}
                            {item.modifiers && (item.modifiers as any[]).length > 0 && (
                              <div className={styles.addOnsRow}>
                                {(item.modifiers as any[]).map((m: any, i: number) => (
                                  <Badge key={i} variant="primary" size="sm">
                                    {m.optionLabel || m.label}
                                  </Badge>
                                ))}
                              </div>
                            )}

                            {/* Add-ons */}
                            {item.addOns && (item.addOns as any[]).length > 0 && (
                              <div className={styles.addOnsRow}>
                                {(item.addOns as any[]).map((a: any, i: number) => (
                                  <Badge key={i} variant="default" size="sm">
                                    + {a.name}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Preparation Notes */}
                    {order.notes && (
                      <div className={styles.notesSection}>
                        <span className={styles.notesLabel}>Special Instructions</span>
                        <p className={styles.notesText}>{order.notes}</p>
                      </div>
                    )}

                    {/* 2-Stage Action Buttons */}
                    <div className={styles.actionButtonGroup}>
                      {!isPreparing && (
                        <Button
                          variant="secondary"
                          size="md"
                          fullWidth
                          isLoading={processingId === order.id}
                          onClick={() => handleStartBrewing(order.id)}
                          className={styles.startBrewingBtn}
                          leftIcon={<Flame size={16} weight="fill" />}
                        >
                          Start Brewing
                        </Button>
                      )}

                      <Button
                        variant="primary"
                        size="lg"
                        fullWidth
                        isLoading={processingId === order.id}
                        onClick={() => handleSendToWaiter(order.id)}
                        className={styles.sendToWaiterBtn}
                        leftIcon={<Check size={20} weight="bold" />}
                      >
                        {processingId === order.id 
                          ? "Notifying Waiter..." 
                          : isPreparing 
                            ? "Ready • Send to Waiter" 
                            : "Quick Complete • Send to Waiter"}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

const demandLeftStyle = styles.demandLeft;
