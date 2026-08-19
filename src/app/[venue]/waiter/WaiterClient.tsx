"use client";

import { useState, useEffect, useRef } from "react";
import {
  updateOrderStatus,
  getWaiterOrders,
  getVenueTables,
  openTableSession,
  closeTableSession,
  dismissWaiterCall,
} from "../admin-actions";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";
import { Tray, ArrowsClockwise, BellRinging, Check, CaretRight, Table as TableIcon } from "@phosphor-icons/react";
import styles from "./waiter.module.css";

export default function WaiterClient({
  venueId,
  venueSlug,
  initialOrders,
  initialTables,
}: {
  venueId: string;
  venueSlug: string;
  initialOrders: any[];
  initialTables: any[];
}) {
  const [orders, setOrders] = useState(initialOrders);
  const [tables, setTables] = useState(initialTables);
  const [activeSection, setActiveSection] = useState<"orders" | "tables">("orders");
  
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [processingOrderId, setProcessingOrderId] = useState<string | null>(null);
  const [processingTableId, setProcessingTableId] = useState<string | null>(null);
  
  const audioRef = useRef<AudioContext | null>(null);

  const calledTables = tables.filter((t: any) => t.waiterCalled);

  // Play alert sound for waiter calls
  useEffect(() => {
    if (calledTables.length > 0) {
      try {
        if (!audioRef.current) {
          audioRef.current = new AudioContext();
        }
        const ctx = audioRef.current;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        oscillator.frequency.value = 880;
        oscillator.type = "sine";
        gainNode.gain.value = 0.3;
        oscillator.start();
        oscillator.stop(ctx.currentTime + 0.3);
      } catch {
        // Audio fallback
      }
    }
  }, [calledTables.length]);

  const refreshData = async () => {
    setIsRefreshing(true);
    try {
      const [freshOrders, freshTables] = await Promise.all([
        getWaiterOrders(venueId),
        getVenueTables(venueId),
      ]);
      setOrders(freshOrders);
      setTables(freshTables);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    const eventSource = new EventSource(`/api/venues/${venueSlug}/stream`);
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "new-order" || data.type === "waiter-call") {
          refreshData();
        }
      } catch (e) {
        console.error("Failed to parse SSE event", e);
      }
    };
    return () => eventSource.close();
  }, [venueSlug]);

  const handleSendToCashier = async (orderId: string) => {
    setProcessingOrderId(orderId);
    try {
      await updateOrderStatus(venueId, orderId, "WAITER_DONE", ["WAITER"]);
      await refreshData();
    } finally {
      setProcessingOrderId(null);
    }
  };

  const handleOpenTable = async (tableId: string) => {
    setProcessingTableId(tableId);
    try {
      await openTableSession(venueId, tableId);
      await refreshData();
    } finally {
      setProcessingTableId(null);
    }
  };

  const handleCloseTable = async (tableId: string) => {
    setProcessingTableId(tableId);
    try {
      await closeTableSession(venueId, tableId);
      await refreshData();
    } finally {
      setProcessingTableId(null);
    }
  };

  const handleDismissCall = async (tableId: string) => {
    setProcessingTableId(tableId);
    try {
      await dismissWaiterCall(venueId, tableId);
      await refreshData();
    } finally {
      setProcessingTableId(null);
    }
  };

  return (
    <div className={styles.container}>
      {/* ── Waiter Call Alert Banner ── */}
      {calledTables.length > 0 && (
        <div className={styles.alertBanner} role="alert">
          {calledTables.map((t: any) => (
            <div key={t.id} className={styles.alertItem}>
              <div className={styles.alertItemLeft}>
                <span className={styles.alertPulse} />
                <BellRinging size={24} weight="fill" className={styles.alertIcon} />
                <div>
                  <span className={styles.alertText}>{t.label} IS CALLING</span>
                  <p className={styles.alertSubtext}>Customer requesting table service</p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="md"
                isLoading={processingTableId === t.id}
                onClick={() => handleDismissCall(t.id)}
                className={styles.alertDismissBtn}
              >
                Acknowledge & Dismiss
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* ── Header ── */}
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.waiterIconBadge}>
            <Tray size={24} weight="fill" />
          </div>
          <div>
            <h1 className={styles.title}>Waiter Station</h1>
            <p className={styles.subtitle}>
              {orders.length} ready delivery item{orders.length === 1 ? "" : "s"} • {tables.filter((t: any) => t.activeSessionId).length} active tables
            </p>
          </div>
        </div>

        <Button 
          variant="secondary" 
          size="md"
          onClick={refreshData}
          isLoading={isRefreshing}
          leftIcon={<ArrowsClockwise weight="bold" size={18} />}
        >
          Refresh Station
        </Button>
      </header>

      {/* ── Section Navigation ── */}
      <nav className={styles.sectionTabs} aria-label="Waiter view modes">
        <button
          className={`${styles.sectionTab} ${activeSection === "orders" ? styles.active : ""}`}
          onClick={() => setActiveSection("orders")}
        >
          <Tray size={20} weight="bold" />
          <span>Deliveries</span>
          <Badge variant={orders.length > 0 ? "primary" : "default"} size="sm">
            {orders.length}
          </Badge>
        </button>
        <button
          className={`${styles.sectionTab} ${activeSection === "tables" ? styles.active : ""}`}
          onClick={() => setActiveSection("tables")}
        >
          <TableIcon size={20} weight="bold" />
          <span>Tables & QR</span>
          <Badge variant="default" size="sm">
            {tables.length}
          </Badge>
        </button>
      </nav>

      {/* ── Orders Section ── */}
      {activeSection === "orders" && (
        <div>
          {orders.length === 0 ? (
            <EmptyState
              icon={<Tray size={36} weight="duotone" />}
              title="No pending deliveries"
              description="When the barista marks an order as ready, it will pop up here with table numbers for swift delivery."
            />
          ) : (
            <div className={styles.orderGrid}>
              {orders.map((order: any) => (
                <Card key={order.id} className={styles.orderCard}>
                  {/* Dominant Table Identifier */}
                  <div className={styles.tableBanner}>
                    <span className={styles.tablePreLabel}>DELIVER TO</span>
                    <span className={styles.bigTableLabel}>
                      {order.tableSession?.table?.label || "TABLE ?"}
                    </span>
                  </div>

                  {/* Item List */}
                  <div className={styles.itemsList}>
                    {order.items.map((item: any) => (
                      <div key={item.id} className={styles.orderItem}>
                        <div className={styles.itemQty}>{item.quantity}x</div>
                        <div className={styles.itemInfo}>
                          <span className={styles.itemName}>{item.menuItem.name}</span>
                          {item.modifiers && (item.modifiers as any[]).length > 0 && (
                            <span className={styles.addOnSummary} style={{ color: "var(--primary-color)", fontWeight: 600 }}>
                              {(item.modifiers as any[]).map((m: any) => m.optionLabel || m.label).join(" • ")}
                            </span>
                          )}
                          {item.addOns && (item.addOns as any[]).length > 0 && (
                            <span className={styles.addOnSummary}>
                              {(item.addOns as any[]).map((a: any) => `+${a.name}`).join(", ")}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {order.customerName && (
                    <div className={styles.customerNameRow}>
                      <span>Guest:</span>
                      <strong>{order.customerName}</strong>
                    </div>
                  )}

                  {/* Dominant CTA */}
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    isLoading={processingOrderId === order.id}
                    onClick={() => handleSendToCashier(order.id)}
                    className={styles.deliveredBtn}
                    leftIcon={<Check size={20} weight="bold" />}
                  >
                    {processingOrderId === order.id ? "Updating Cashier..." : "Delivered • Send to Cashier"}
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Tables Section ── */}
      {activeSection === "tables" && (
        <div className={styles.tablesGrid}>
          {tables.map((table: any) => {
            const isActive = !!table.activeSessionId;
            return (
              <Card
                key={table.id}
                className={`${styles.tableCard} ${isActive ? styles.tableActive : styles.tableInactive}`}
              >
                <div className={styles.tableCardHeader}>
                  <span className={styles.tableCardLabel}>{table.label}</span>
                  <Badge variant={isActive ? "success" : "default"} size="sm">
                    {isActive ? "Occupied" : "Available"}
                  </Badge>
                </div>

                <div className={styles.tableCardAction}>
                  {isActive ? (
                    <Button
                      variant="danger"
                      size="sm"
                      fullWidth
                      isLoading={processingTableId === table.id}
                      onClick={() => handleCloseTable(table.id)}
                    >
                      Close Session
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      fullWidth
                      isLoading={processingTableId === table.id}
                      onClick={() => handleOpenTable(table.id)}
                    >
                      Activate Table
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
