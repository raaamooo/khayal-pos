"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BellRinging, 
  Clock, 
  Check, 
  X, 
  Tray, 
  QrCode, 
  Sparkle, 
  Coffee,
  Receipt,
  User,
  ArrowSquareOut
} from "@phosphor-icons/react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { playTick, playPop, playSuccess } from "@/lib/sound";
import styles from "./FloorPlanView.module.css";

export interface FloorTable {
  id: string;
  label: string;
  qrToken: string;
  venueId: string;
  activeSessionId: string | null;
  waiterCalled: boolean;
  waiterCalledAt: string | null;
  sessions?: Array<{
    id: string;
    startedAt: string;
    orders?: Array<{
      id: string;
      status: string;
      totalAmount: number;
      customerName?: string | null;
      notes?: string | null;
      items: Array<{
        id: string;
        quantity: number;
        menuItem: { name: string; price: number };
        modifiers?: any;
        addOns?: any;
      }>;
    }>;
  }>;
}

interface DeliveryOrder {
  id: string;
  status: string;
  tableSession?: {
    tableId: string;
    table?: { id: string; label: string };
  };
  items: any[];
}

interface FloorPlanViewProps {
  tables: FloorTable[];
  deliveryOrders: DeliveryOrder[];
  venueSlug: string;
  onOpenTable: (tableId: string) => Promise<void>;
  onCloseTable: (tableId: string) => Promise<void>;
  onDismissCall: (tableId: string) => Promise<void>;
  processingTableId: string | null;
}

// Group tables by realistic cafe zones
function getZoneForTable(label: string): string {
  if (label.includes("Terrace")) return "Outdoor Terrace";
  if (label.includes("VIP") || label.includes("Lounge")) return "Private VIP Lounge";
  if (label.includes("5") || label.includes("6") || label.includes("Bar")) return "Window Bar";
  return "Main Dining Hall";
}

function formatElapsedMinutes(startedAt: string): string {
  try {
    const diffMs = Date.now() - new Date(startedAt).getTime();
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return "Just seated";
    return `${mins}m seated`;
  } catch {
    return "";
  }
}

export default function FloorPlanView({
  tables,
  deliveryOrders,
  venueSlug,
  onOpenTable,
  onCloseTable,
  onDismissCall,
  processingTableId,
}: FloorPlanViewProps) {
  const [selectedTable, setSelectedTable] = useState<FloorTable | null>(null);

  // Map ready deliveries by table ID
  const deliveriesByTableId = React.useMemo(() => {
    const map: Record<string, DeliveryOrder[]> = {};
    for (const order of deliveryOrders) {
      const tId = order.tableSession?.tableId;
      if (tId) {
        map[tId] = map[tId] || [];
        map[tId].push(order);
      }
    }
    return map;
  }, [deliveryOrders]);

  // Group tables by zones
  const tablesByZone = React.useMemo(() => {
    const zones: Record<string, FloorTable[]> = {
      "Main Dining Hall": [],
      "Window Bar": [],
      "Outdoor Terrace": [],
      "Private VIP Lounge": [],
    };
    for (const t of tables) {
      const zone = getZoneForTable(t.label);
      zones[zone] = zones[zone] || [];
      zones[zone].push(t);
    }
    return zones;
  }, [tables]);

  return (
    <div className={styles.floorPlanContainer}>
      {Object.entries(tablesByZone).map(([zoneName, zoneTables]) => {
        if (zoneTables.length === 0) return null;
        const occupiedCount = zoneTables.filter((t) => t.activeSessionId).length;

        return (
          <section key={zoneName} className={styles.zoneSection}>
            <div className={styles.zoneHeader}>
              <h2 className={styles.zoneTitle}>
                <span>{zoneName}</span>
              </h2>
              <span className={styles.zoneStats}>
                {occupiedCount} / {zoneTables.length} occupied
              </span>
            </div>

            <div className={styles.tablesGrid}>
              {zoneTables.map((table) => {
                const isActive = !!table.activeSessionId;
                const isCalling = table.waiterCalled;
                const activeDeliveries = deliveriesByTableId[table.id] || [];
                const hasDelivery = activeDeliveries.length > 0;
                const activeSession = table.sessions?.[0];
                const activeOrders = activeSession?.orders || [];
                
                // Calculate table total
                const tableTotal = activeOrders.reduce(
                  (sum, o) => sum + Number(o.totalAmount || 0),
                  0
                );

                return (
                  <motion.div
                    key={table.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Card
                      className={`${styles.tableCard} ${
                        isCalling
                          ? styles.calling
                          : hasDelivery
                          ? styles.hasDelivery
                          : isActive
                          ? styles.occupied
                          : styles.available
                      }`}
                      onClick={() => setSelectedTable(table)}
                    >
                      {/* Top Row: Label + Status Badge */}
                      <div className={styles.cardTopRow}>
                        <div className={styles.tableLabelGroup}>
                          <span className={styles.tableNumber}>{table.label}</span>
                        </div>

                        {isCalling ? (
                          <div className={styles.callingAlertTag}>
                            <BellRinging size={13} weight="fill" />
                            <span>CALLING</span>
                          </div>
                        ) : hasDelivery ? (
                          <Badge variant="primary" size="sm">
                            <Tray size={12} weight="bold" /> {activeDeliveries.length} Ready
                          </Badge>
                        ) : (
                          <Badge variant={isActive ? "success" : "default"} size="sm">
                            {isActive ? "Occupied" : "Available"}
                          </Badge>
                        )}
                      </div>

                      {/* Middle: Active Session Details */}
                      {isActive && activeSession && (
                        <div className={styles.tableInfoRow}>
                          <span className={styles.tableSeatedTime}>
                            <Clock size={13} weight="bold" />
                            {formatElapsedMinutes(activeSession.startedAt)}
                          </span>
                          {tableTotal > 0 && (
                            <span className={styles.tableBillSubtotal}>
                              {tableTotal} EGP
                            </span>
                          )}
                        </div>
                      )}

                      {/* Ready Drinks Banner */}
                      {hasDelivery && (
                        <div className={styles.deliveryAlertPill}>
                          <Tray size={13} weight="fill" />
                          <span>Drinks Ready for Delivery!</span>
                        </div>
                      )}

                      {/* Bottom Action Row */}
                      <div className={styles.cardActionRow} onClick={(e) => e.stopPropagation()}>
                        {isCalling ? (
                          <Button
                            variant="danger"
                            size="sm"
                            fullWidth
                            isLoading={processingTableId === table.id}
                            onClick={() => {
                              playTick();
                              onDismissCall(table.id);
                            }}
                            leftIcon={<Check size={16} weight="bold" />}
                          >
                            Acknowledge Call
                          </Button>
                        ) : isActive ? (
                          <Button
                            variant="secondary"
                            size="sm"
                            fullWidth
                            onClick={() => setSelectedTable(table)}
                          >
                            Inspect Table
                          </Button>
                        ) : (
                          <Button
                            variant="primary"
                            size="sm"
                            fullWidth
                            isLoading={processingTableId === table.id}
                            onClick={() => {
                              playPop();
                              onOpenTable(table.id);
                            }}
                          >
                            Open Session
                          </Button>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* ── Table Inspection Detail Modal ── */}
      <AnimatePresence>
        {selectedTable && (
          <>
            <motion.div
              className={styles.modalBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTable(null)}
            />

            <motion.div
              className={styles.detailModal}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className={styles.modalHeader}>
                <div className={styles.modalTitleGroup}>
                  <span className={styles.modalTableBigLabel}>
                    {selectedTable.label}
                  </span>
                  <Badge variant={selectedTable.activeSessionId ? "success" : "default"}>
                    {selectedTable.activeSessionId ? "Occupied Table" : "Empty Table"}
                  </Badge>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedTable(null)}
                  style={{ background: "transparent", border: "none", color: "var(--color-text-muted)", cursor: "pointer" }}
                >
                  <X size={20} weight="bold" />
                </button>
              </div>

              <div className={styles.modalBody}>
                {/* QR Code Quick Link */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--color-surface-hover)", padding: "12px", borderRadius: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <QrCode size={20} weight="bold" color="var(--primary-color)" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "14px" }}>Customer Table URL</div>
                      <div style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>Token: {selectedTable.qrToken}</div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`/${venueSlug}/t/${selectedTable.qrToken}`, "_blank")}
                    leftIcon={<ArrowSquareOut size={14} weight="bold" />}
                  >
                    Open View
                  </Button>
                </div>

                {/* Active Orders List */}
                {selectedTable.sessions?.[0]?.orders && selectedTable.sessions[0].orders.length > 0 ? (
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "15px", marginBottom: "12px" }}>
                      Active Table Orders
                    </h3>
                    <div className={styles.modalOrdersList}>
                      {selectedTable.sessions[0].orders.map((ord) => (
                        <Card key={ord.id} style={{ padding: "12px", background: "var(--color-surface)" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                            <span style={{ fontWeight: 700, fontSize: "13px" }}>Order #{ord.id.slice(-4)}</span>
                            <Badge variant="primary" size="sm">{ord.status}</Badge>
                          </div>
                          {ord.items.map((it) => (
                            <div key={it.id} className={styles.modalOrderItem}>
                              <span>{it.quantity}× {it.menuItem.name}</span>
                              <span style={{ fontWeight: 700 }}>{Number(it.menuItem.price) * it.quantity} EGP</span>
                            </div>
                          ))}
                        </Card>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p style={{ color: "var(--color-text-muted)", fontSize: "14px", textAlign: "center", padding: "20px 0" }}>
                    {selectedTable.activeSessionId 
                      ? "No food or drink orders placed yet on this session." 
                      : "Table is currently empty. Tap 'Activate Table' to open for a new guest."}
                  </p>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className={styles.modalFooter}>
                {selectedTable.waiterCalled && (
                  <Button
                    variant="danger"
                    size="lg"
                    fullWidth
                    isLoading={processingTableId === selectedTable.id}
                    onClick={async () => {
                      await onDismissCall(selectedTable.id);
                      setSelectedTable(null);
                    }}
                  >
                    Dismiss Call
                  </Button>
                )}

                {selectedTable.activeSessionId ? (
                  <Button
                    variant="danger"
                    size="lg"
                    fullWidth
                    isLoading={processingTableId === selectedTable.id}
                    onClick={async () => {
                      await onCloseTable(selectedTable.id);
                      setSelectedTable(null);
                    }}
                  >
                    Close Session
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    isLoading={processingTableId === selectedTable.id}
                    onClick={async () => {
                      await onOpenTable(selectedTable.id);
                      setSelectedTable(null);
                    }}
                  >
                    Activate Table
                  </Button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
