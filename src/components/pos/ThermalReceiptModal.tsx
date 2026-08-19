"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Printer, 
  Copy, 
  Check, 
  X, 
  Users, 
  CreditCard, 
  Money, 
  Receipt,
  CheckCircle,
  QrCode
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { playTick, playSuccess } from "@/lib/sound";
import styles from "./ThermalReceiptModal.module.css";

export interface SessionItem {
  id: string;
  quantity: number;
  lineTotal: number;
  menuItem: {
    name: string;
    price: number;
  };
  modifiersArr?: any[];
  addOnsArr?: any[];
}

export interface CashierSessionData {
  id: string;
  table: {
    id: string;
    label: string;
    qrToken: string;
  };
  startedAt: string;
  orders: any[];
  allItems: SessionItem[];
  grandTotal: number;
  totalTips: number;
}

interface ThermalReceiptModalProps {
  session: CashierSessionData;
  venueName: string;
  cashierName?: string;
  onConfirmClose: (sessionId: string) => Promise<void>;
  onClose: () => void;
  isProcessing: boolean;
}

export default function ThermalReceiptModal({
  session,
  venueName,
  cashierName = "Staff Cashier",
  onConfirmClose,
  onClose,
  isProcessing,
}: ThermalReceiptModalProps) {
  const [splitMode, setSplitMode] = useState<"single" | "equal" | "custom">("single");
  const [guestCount, setGuestCount] = useState<number>(2);
  const [paidGuests, setPaidGuests] = useState<Record<number, boolean>>({});
  const [cashAmount, setCashAmount] = useState<string>("");
  const [copiedReceipt, setCopiedReceipt] = useState<boolean>(false);

  const grandTotal = session.grandTotal;
  const subtotalBeforeVat = Math.round((grandTotal / 1.14) * 100) / 100;
  const vatAmount = Math.round((grandTotal - subtotalBeforeVat) * 100) / 100;

  // Equal split calculation
  const perGuestAmount = useMemo(() => {
    return Math.round((grandTotal / guestCount) * 100) / 100;
  }, [grandTotal, guestCount]);

  // Handle printing
  const handlePrint = () => {
    playTick();
    window.print();
  };

  // Copy digital receipt text
  const handleCopyReceipt = () => {
    playSuccess();
    const dateStr = new Date().toLocaleString();
    const lines = [
      `================================`,
      `    ${venueName.toUpperCase()}`,
      `   SPECIALTY COFFEE & EATERY`,
      `================================`,
      `Table: ${session.table.label}`,
      `Date: ${dateStr}`,
      `Cashier: ${cashierName}`,
      `--------------------------------`,
      ...session.allItems.map(
        (it) => `${it.quantity}x ${it.menuItem.name.padEnd(18)} ${it.lineTotal} EGP`
      ),
      `--------------------------------`,
      `Subtotal (Excl. VAT): ${subtotalBeforeVat} EGP`,
      `VAT (14% Included):   ${vatAmount} EGP`,
      session.totalTips > 0 ? `Tip Amount:           ${session.totalTips} EGP` : "",
      `--------------------------------`,
      `GRAND TOTAL:          ${grandTotal} EGP`,
      splitMode === "equal" ? `Split (${guestCount} Guests):      ${perGuestAmount} EGP / person` : "",
      `================================`,
      `    THANK YOU FOR DINING!`,
      ` Wifi: Khayal_Guest | pass: 2026`,
      `================================`,
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(lines);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2500);
  };

  const toggleGuestPaid = (idx: number) => {
    playTick();
    setPaidGuests((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <>
      <motion.div
        className={styles.modalBackdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <div className={styles.modalWrapper}>
        <motion.div
          className={styles.modalCard}
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
        >
          {/* ── Header ── */}
          <div className={styles.modalHeader}>
            <div className={styles.headerTitleGroup}>
              <Receipt size={24} weight="bold" color="var(--primary-color)" />
              <h2 className={styles.headerTitle}>
                Checkout • {session.table.label} ({grandTotal} EGP)
              </h2>
            </div>

            <button type="button" className={styles.closeBtn} onClick={onClose}>
              <X size={20} weight="bold" />
            </button>
          </div>

          {/* ── Two-Column Body: Split Controls + Thermal Receipt Preview ── */}
          <div className={styles.modalBodyGrid}>
            {/* ── Left Column: Split-Billing Engine ── */}
            <div className={styles.splitControlsPane}>
              <div className={styles.splitModeTabs}>
                <button
                  type="button"
                  className={`${styles.splitModeBtn} ${splitMode === "single" ? styles.active : ""}`}
                  onClick={() => setSplitMode("single")}
                >
                  Single Bill
                </button>
                <button
                  type="button"
                  className={`${styles.splitModeBtn} ${splitMode === "equal" ? styles.active : ""}`}
                  onClick={() => setSplitMode("equal")}
                >
                  Split Equally
                </button>
                <button
                  type="button"
                  className={`${styles.splitModeBtn} ${splitMode === "custom" ? styles.active : ""}`}
                  onClick={() => setSplitMode("custom")}
                >
                  Cash + Card
                </button>
              </div>

              {/* ── Mode 1: Single Bill ── */}
              {splitMode === "single" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
                    Standard full payment settlement for {session.table.label}.
                  </p>
                  <div style={{ background: "var(--color-surface-hover)", padding: "14px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "4px" }}>
                      Total Bill Balance
                    </div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "28px", fontWeight: 800, color: "var(--primary-color)" }}>
                      {grandTotal} <small style={{ fontSize: "14px" }}>EGP</small>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Mode 2: Split Equally (N Guests) ── */}
              {splitMode === "equal" && (
                <div className={styles.equalSplitSection}>
                  <label style={{ fontSize: "12px", fontWeight: 700, fontFamily: "var(--font-heading)" }}>
                    Number of Guests Sharing:
                  </label>
                  <div className={styles.guestCountSelector}>
                    {[2, 3, 4, 5, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        className={`${styles.guestCountBtn} ${guestCount === num ? styles.active : ""}`}
                        onClick={() => {
                          playTick();
                          setGuestCount(num);
                        }}
                      >
                        {num} Guests
                      </button>
                    ))}
                  </div>

                  <div className={styles.guestBreakdownList}>
                    {Array.from({ length: guestCount }).map((_, i) => {
                      const isPaid = !!paidGuests[i];
                      return (
                        <div
                          key={i}
                          className={styles.guestRow}
                          onClick={() => toggleGuestPaid(i)}
                          style={{ cursor: "pointer", border: isPaid ? "1px solid var(--color-success)" : "1px solid transparent" }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span className={styles.guestLabel}>Guest #{i + 1}</span>
                            <Badge variant={isPaid ? "success" : "default"} size="sm">
                              {isPaid ? "Paid ✓" : "Pending"}
                            </Badge>
                          </div>
                          <span className={styles.guestAmount}>{perGuestAmount} EGP</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── Mode 3: Custom Partial (Cash + Card) ── */}
              {splitMode === "custom" && (
                <div className={styles.customSplitInputs}>
                  <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
                    Split between cash and card POS terminals.
                  </p>
                  <Input
                    label="Cash Payment Portion (EGP)"
                    placeholder="e.g. 200"
                    type="number"
                    value={cashAmount}
                    onChange={(e) => setCashAmount(e.target.value)}
                  />

                  {Number(cashAmount) > 0 && Number(cashAmount) <= grandTotal && (
                    <div style={{ background: "var(--color-surface-hover)", padding: "12px", borderRadius: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "13px" }}>
                        <span>💵 Cash Amount:</span>
                        <strong>{Number(cashAmount)} EGP</strong>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--primary-color)" }}>
                        <span>💳 Card Balance Remaining:</span>
                        <strong>{grandTotal - Number(cashAmount)} EGP</strong>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ── Right Column: 80mm Thermal Receipt Paper Preview ── */}
            <div className={styles.receiptPane}>
              <div className={styles.thermalPaper}>
                <div className={styles.thermalHeader}>
                  <span className={styles.thermalVenueName}>{venueName.toUpperCase()}</span>
                  <span className={styles.thermalSubtitle}>Specialty Coffee & Eatery</span>
                  <span className={styles.thermalSubtitle}>TRN: 824-912-301 • POS-01</span>
                </div>

                <div className={styles.thermalDashedLine} />

                <div className={styles.thermalMetaRow}>
                  <span>Table: <strong>{session.table.label}</strong></span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className={styles.thermalMetaRow}>
                  <span>Cashier: {cashierName}</span>
                  <span>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                </div>

                <div className={styles.thermalDashedLine} />

                {/* Items Table */}
                <table className={styles.thermalItemsTable}>
                  <thead>
                    <tr>
                      <th>ITEM</th>
                      <th style={{ textAlign: "center" }}>QTY</th>
                      <th style={{ textAlign: "right" }}>EGP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {session.allItems.map((it, idx) => (
                      <React.Fragment key={idx}>
                        <tr>
                          <td>{it.menuItem.name}</td>
                          <td style={{ textAlign: "center" }}>{it.quantity}</td>
                          <td style={{ textAlign: "right" }}>{it.lineTotal}</td>
                        </tr>
                        {it.modifiersArr && it.modifiersArr.length > 0 && (
                          <tr>
                            <td colSpan={3} className={styles.thermalModItem}>
                              * {it.modifiersArr.map((m: any) => m.optionLabel || m.label).join(", ")}
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>

                <div className={styles.thermalDashedLine} />

                {/* Totals */}
                <div className={styles.thermalTotals}>
                  <div className={styles.thermalTotalRow}>
                    <span>Subtotal (Excl. VAT)</span>
                    <span>{subtotalBeforeVat} EGP</span>
                  </div>
                  <div className={styles.thermalTotalRow}>
                    <span>VAT (14% Incl.)</span>
                    <span>{vatAmount} EGP</span>
                  </div>
                  {session.totalTips > 0 && (
                    <div className={styles.thermalTotalRow}>
                      <span>Staff Tip</span>
                      <span>{session.totalTips} EGP</span>
                    </div>
                  )}

                  <div className={styles.thermalGrandTotal}>
                    <span>TOTAL DUE</span>
                    <span>{grandTotal} EGP</span>
                  </div>

                  {splitMode === "equal" && (
                    <div style={{ fontSize: "11px", fontWeight: 700, textAlign: "center", marginTop: "4px" }}>
                      Split {guestCount} ways: {perGuestAmount} EGP / person
                    </div>
                  )}
                </div>

                <div className={styles.thermalDashedLine} />

                <div className={styles.thermalFooter}>
                  <span>*** THANK YOU FOR DINING ***</span>
                  <span>Wifi: Khayal_Guest | pass: 2026</span>
                  <span>Rate your experience at khayal.co</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Modal Footer Actions ── */}
          <div className={styles.modalFooterActions}>
            <Button
              variant="secondary"
              size="md"
              onClick={handleCopyReceipt}
              leftIcon={<Copy size={18} />}
            >
              {copiedReceipt ? "Copied ✓" : "Copy Digital Receipt"}
            </Button>

            <Button
              variant="outline"
              size="md"
              onClick={handlePrint}
              leftIcon={<Printer size={18} />}
            >
              Print Thermal (80mm)
            </Button>

            <Button
              variant="primary"
              size="md"
              isLoading={isProcessing}
              onClick={() => onConfirmClose(session.id)}
              leftIcon={<CheckCircle size={18} weight="bold" />}
            >
              Settle & Close Table
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
