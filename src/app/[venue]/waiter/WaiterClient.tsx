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
import { 
  Tray, 
  ArrowsClockwise, 
  BellRinging, 
  Check, 
  Table as TableIcon,
  SquaresFour
} from "@phosphor-icons/react";
import FloorPlanView from "@/components/tables/FloorPlanView";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { playBell, playTick, playSuccess } from "@/lib/sound";
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
  const [activeSection, setActiveSection] = useState<"floor" | "orders">("floor");
  
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [processingOrderId, setProcessingOrderId] = useState<string | null>(null);
  const [processingTableId, setProcessingTableId] = useState<string | null>(null);
  const prevCalledCount = useRef(0);

  const calledTables = tables.filter((t: any) => t.waiterCalled);

  // Play alert sound for waiter calls
  useEffect(() => {
    if (calledTables.length > prevCalledCount.current) {
      playBell();
    }
    prevCalledCount.current = calledTables.length;
  }, [calledTables.length]);

  const refreshData = async (silent = false) => {
    if (!silent) setIsRefreshing(true);
    try {
      const [freshOrders, freshTables] = await Promise.all([
        getWaiterOrders(venueId),
        getVenueTables(venueId),
      ]);
      setOrders(freshOrders);
      setTables(freshTables);
    } finally {
      if (!silent) setIsRefreshing(false);
    }
  };

  useEffect(() => {
    const eventSource = new EventSource(`/api/venues/${venueSlug}/stream`);
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "new-order" || data.type === "waiter-call" || data.type === "order-status-change") {
          refreshData(true);
        }
      } catch (e) {
        console.error("Failed to parse SSE event", e);
      }
    };
    return () => eventSource.close();
  }, [venueSlug]);

  const handleSendToCashier = async (orderId: string) => {
    playSuccess();
    setProcessingOrderId(orderId);
    try {
      await updateOrderStatus(venueId, orderId, "SERVED", ["WAITER"]);
      await refreshData(true);
    } finally {
      setProcessingOrderId(null);
    }
  };

  const handleOpenTable = async (tableId: string) => {
    setProcessingTableId(tableId);
    try {
      await openTableSession(venueId, tableId);
      await refreshData(true);
    } finally {
      setProcessingTableId(null);
    }
  };

  const handleCloseTable = async (tableId: string) => {
    setProcessingTableId(tableId);
    try {
      await closeTableSession(venueId, tableId);
      await refreshData(true);
    } finally {
      setProcessingTableId(null);
    }
  };

  const handleDismissCall = async (tableId: string) => {
    playTick();
    setProcessingTableId(tableId);
    try {
      await dismissWaiterCall(venueId, tableId);
      await refreshData(true);
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
                  <p className={styles.alertSubtext}>Customer requesting service at table</p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="md"
                isLoading={processingTableId === t.id}
                onClick={() => handleDismissCall(t.id)}
                className={styles.alertDismissBtn}
                leftIcon={<Check size={18} weight="bold" />}
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
              {orders.length} ready delivery item{orders.length === 1 ? "" : "s"} • {tables.filter((t: any) => t.activeSessionId).length} occupied of {tables.length} tables
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <LanguageToggle />
          <Button 
            variant="secondary" 
            size="md"
            onClick={() => refreshData(false)}
            isLoading={isRefreshing}
            leftIcon={<ArrowsClockwise weight="bold" size={18} />}
          >
            Refresh Station
          </Button>
        </div>
      </header>

      {/* ── Section Navigation ── */}
      <nav className={styles.sectionTabs} aria-label="Waiter view modes">
        <button
          className={`${styles.sectionTab} ${activeSection === "floor" ? styles.active : ""}`}
          onClick={() => setActiveSection("floor")}
        >
          <SquaresFour size={20} weight="bold" />
          <span>Interactive Floor Plan</span>
          <Badge variant={calledTables.length > 0 ? "danger" : "default"} size="sm">
            {calledTables.length > 0 ? `🚨 ${calledTables.length}` : tables.length}
          </Badge>
        </button>
        <button
          className={`${styles.sectionTab} ${activeSection === "orders" ? styles.active : ""}`}
          onClick={() => setActiveSection("orders")}
        >
          <Tray size={20} weight="bold" />
          <span>Ready for Delivery</span>
          <Badge variant={orders.length > 0 ? "primary" : "default"} size="sm">
            {orders.length}
          </Badge>
        </button>
      </nav>

      {/* ── Interactive Floor Plan Section ── */}
      {activeSection === "floor" && (
        <FloorPlanView
          tables={tables}
          deliveryOrders={orders}
          venueSlug={venueSlug}
          onOpenTable={handleOpenTable}
          onCloseTable={handleCloseTable}
          onDismissCall={handleDismissCall}
          processingTableId={processingTableId}
        />
      )}

      {/* ── Ready Deliveries Section ── */}
      {activeSection === "orders" && (
        <div>
          {orders.length === 0 ? (
            <EmptyState
              icon={<Tray size={36} weight="duotone" />}
              title="No pending deliveries"
              description="When the barista finishes crafting an order, it will pop up here with large table badges for swift table delivery."
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
    </div>
  );
}
