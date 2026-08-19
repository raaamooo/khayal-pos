"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { updateOrderStatus, getBaristaOrders } from "../admin-actions";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";
import { Coffee, ArrowsClockwise, Check, Clock, Sparkle } from "@phosphor-icons/react";
import styles from "./barista.module.css";

export default function BaristaClient({
  venueId,
  venueSlug,
  initialOrders,
}: {
  venueId: string;
  venueSlug: string;
  initialOrders: any[];
}) {
  const [orders, setOrders] = useState(initialOrders);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [newArrivalId, setNewArrivalId] = useState<string | null>(null);
  const prevOrdersCountRef = useRef(initialOrders.length);

  const refreshOrders = async () => {
    setIsRefreshing(true);
    try {
      const fresh = await getBaristaOrders(venueId);
      if (fresh.length > prevOrdersCountRef.current) {
        // Highlight latest order
        const newest = fresh[fresh.length - 1];
        if (newest) {
          setNewArrivalId(newest.id);
          setTimeout(() => setNewArrivalId(null), 4000);
        }
      }
      prevOrdersCountRef.current = fresh.length;
      setOrders(fresh);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    const eventSource = new EventSource(`/api/venues/${venueSlug}/stream`);
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "new-order") {
          refreshOrders();
        }
      } catch (e) {
        console.error("Failed to parse SSE event", e);
      }
    };
    return () => eventSource.close();
  }, [venueSlug]);

  const handleSendToWaiter = async (orderId: string) => {
    setProcessingId(orderId);
    try {
      await updateOrderStatus(venueId, orderId, "BARISTA_DONE", ["BARISTA"]);
      await refreshOrders();
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.queueIconBadge}>
            <Coffee size={24} weight="fill" />
          </div>
          <div>
            <h1 className={styles.title}>Barista Queue</h1>
            <p className={styles.subtitle}>
              {orders.length === 0 
                ? "Ready for rush" 
                : `${orders.length} active order${orders.length > 1 ? "s" : ""} to craft`}
            </p>
          </div>
        </div>

        <Button 
          variant="secondary" 
          size="md"
          onClick={refreshOrders} 
          isLoading={isRefreshing}
          leftIcon={<ArrowsClockwise weight="bold" size={18} />}
        >
          Refresh Queue
        </Button>
      </header>

      {orders.length === 0 ? (
        <EmptyState
          icon={<Coffee size={36} weight="duotone" />}
          title="All caught up!"
          description="New orders placed by customers or staff will arrive here with live notifications."
        />
      ) : (
        <motion.div className={styles.orderGrid} layout>
          <AnimatePresence mode="popLayout">
            {orders.map((order: any) => {
              const isNewArrival = newArrivalId === order.id;

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
                    className={`${styles.orderCard} ${isNewArrival ? styles.newArrivalHighlight : ""}`}
                  >
                    {isNewArrival && (
                      <div className={styles.newArrivalBanner}>
                        <Sparkle size={14} weight="fill" />
                        <span>JUST ARRIVED</span>
                      </div>
                    )}

                    {/* Table Header */}
                    <div className={styles.cardHeader}>
                      <div className={styles.tableBadge}>
                        {order.tableSession?.table?.label || "Quick Order"}
                      </div>
                      <div className={styles.orderTime}>
                        <Clock size={14} weight="bold" />
                        <span>
                          {new Date(order.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
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

                    {/* Prominent Action Button */}
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      isLoading={processingId === order.id}
                      onClick={() => handleSendToWaiter(order.id)}
                      className={styles.sendToWaiterBtn}
                      leftIcon={<Check size={20} weight="bold" />}
                    >
                      {processingId === order.id ? "Notifying Waiter..." : "Ready • Send to Waiter"}
                    </Button>
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
