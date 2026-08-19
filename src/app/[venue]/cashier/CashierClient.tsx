"use client";

import { useState } from "react";
import { closeSessionAndCheckout, getCashierSessions } from "../admin-actions";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";
import { Receipt, ArrowsClockwise, CaretDown, CaretUp, Printer, CheckCircle } from "@phosphor-icons/react";
import styles from "./cashier.module.css";

export default function CashierClient({
  venueId,
  initialSessions,
}: {
  venueId: string;
  initialSessions: any[];
}) {
  const [sessions, setSessions] = useState(initialSessions);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [printedSessionId, setPrintedSessionId] = useState<string | null>(null);

  const refreshSessions = async () => {
    setIsRefreshing(true);
    try {
      const fresh = await getCashierSessions(venueId);
      setSessions(fresh);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handlePrintAndClose = async (sessionId: string) => {
    setProcessingId(sessionId);
    try {
      // Trigger print
      window.print();
      setPrintedSessionId(sessionId);

      // Close session in DB
      await closeSessionAndCheckout(venueId, sessionId);
      await refreshSessions();
      setExpandedId(null);
    } finally {
      setProcessingId(null);
      setTimeout(() => setPrintedSessionId(null), 3000);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.cashierIconBadge}>
            <Receipt size={24} weight="fill" />
          </div>
          <div>
            <h1 className={styles.title}>Cashier Desk</h1>
            <p className={styles.subtitle}>
              {sessions.length === 0 
                ? "No open bills" 
                : `${sessions.length} active table session${sessions.length > 1 ? "s" : ""} pending checkout`}
            </p>
          </div>
        </div>

        <Button 
          variant="secondary" 
          size="md"
          onClick={refreshSessions}
          isLoading={isRefreshing}
          leftIcon={<ArrowsClockwise weight="bold" size={18} />}
        >
          Refresh Bills
        </Button>
      </header>

      {sessions.length === 0 ? (
        <EmptyState
          icon={<Receipt size={36} weight="duotone" />}
          title="All tables settled"
          description="Active customer orders will appear here automatically when waiters complete delivery."
        />
      ) : (
        <div className={styles.sessionGrid}>
          {sessions.map((session: any) => {
            const isExpanded = expandedId === session.id;
            const allOrders = session.orders || [];

            // Aggregate items
            const allItems: any[] = [];
            let totalTips = 0;
            let grandTotal = 0;

            allOrders.forEach((order: any) => {
              totalTips += order.tipAmount || 0;
              order.items.forEach((item: any) => {
                const addOns = (item.addOns as any[]) || [];
                const modifiers = (item.modifiers as any[]) || [];
                const modTotal = modifiers.reduce(
                  (sum: number, m: any) => sum + Number(m.priceAdjustment || 0),
                  0
                );
                const addOnTotal = addOns.reduce(
                  (sum: number, a: any) => sum + Number(a.price || 0),
                  0
                );
                const lineTotal = (Number(item.menuItem.price) + modTotal + addOnTotal) * item.quantity;
                grandTotal += lineTotal;

                allItems.push({
                  ...item,
                  lineTotal,
                  addOnsArr: addOns,
                  modifiersArr: modifiers,
                });
              });
            });

            grandTotal += totalTips;

            return (
              <Card key={session.id} className={styles.sessionCard}>
                <button
                  type="button"
                  className={styles.sessionHeader}
                  onClick={() => setExpandedId(isExpanded ? null : session.id)}
                  aria-expanded={isExpanded}
                >
                  <div className={styles.sessionHeaderLeft}>
                    <div className={styles.tableBadgeIcon}>
                      <Receipt size={20} weight="bold" />
                    </div>
                    <span className={styles.tableLabel}>{session.table.label}</span>
                    <Badge variant="primary" size="sm">
                      {allOrders.length} order{allOrders.length !== 1 ? "s" : ""}
                    </Badge>
                  </div>

                  <div className={styles.sessionHeaderRight}>
                    <div className={styles.sessionTotalGroup}>
                      <span className={styles.totalLabel}>Total Due</span>
                      <span className={styles.totalValue}>{grandTotal} EGP</span>
                    </div>
                    <div className={styles.caretBtn}>
                      {isExpanded ? <CaretUp size={20} weight="bold" /> : <CaretDown size={20} weight="bold" />}
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className={styles.receiptBody}>
                    <div className={styles.receiptHeader}>
                      <h3>Itemized Bill</h3>
                      <p>{session.table.label} • Active Session</p>
                    </div>

                    <table className={styles.receiptTable}>
                      <thead>
                        <tr>
                          <th>Item</th>
                          <th>Qty</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allItems.map((item: any, idx: number) => (
                          <tr key={idx}>
                            <td>
                              <span className={styles.receiptItemName}>{item.menuItem.name}</span>
                              {item.modifiersArr && item.modifiersArr.length > 0 && (
                                <div className={styles.receiptAddOns} style={{ color: "var(--primary-color)", fontWeight: 600 }}>
                                  {item.modifiersArr.map((m: any) => m.optionLabel || m.label).join(" • ")}
                                </div>
                              )}
                              {item.addOnsArr.length > 0 && (
                                <div className={styles.receiptAddOns}>
                                  {item.addOnsArr.map((a: any) => `+${a.name}`).join(", ")}
                                </div>
                              )}
                            </td>
                            <td className={styles.receiptQty}>{item.quantity}</td>
                            <td className={styles.receiptPrice}>{item.lineTotal} EGP</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {totalTips > 0 && (
                      <div className={styles.receiptRow}>
                        <span>Tip Amount</span>
                        <span>{totalTips} EGP</span>
                      </div>
                    )}

                    <div className={styles.receiptGrandTotal}>
                      <span>Grand Total</span>
                      <span>{grandTotal} EGP</span>
                    </div>

                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      className={styles.printBtn}
                      isLoading={processingId === session.id}
                      onClick={() => handlePrintAndClose(session.id)}
                      leftIcon={<Printer size={20} weight="bold" />}
                    >
                      {processingId === session.id 
                        ? "Printing Receipt & Closing Table..." 
                        : "Print Receipt & Close Table"}
                    </Button>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
