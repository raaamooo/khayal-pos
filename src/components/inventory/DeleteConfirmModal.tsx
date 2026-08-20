"use client";

import React, { useState } from "react";
import { WarningOctagon, X, Trash } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import styles from "./inventory-modals.module.css";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  onConfirm: () => Promise<void>;
}

export default function DeleteConfirmModal({
  isOpen,
  onClose,
  title,
  message,
  confirmLabel = "Delete",
  onConfirm,
}: DeleteConfirmModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setIsDeleting(true);
    setErrorMsg("");
    try {
      await onConfirm();
      onClose();
    } catch (err: any) {
      console.error("Delete failed", err);
      setErrorMsg(err.message || "Failed to complete deletion.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={styles.backdrop} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`${styles.modal} ${styles.modalSm}`} role="dialog" aria-modal="true">
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleGroup}>
            <div 
              className={styles.headerIconBadge} 
              style={{ background: "var(--color-danger-surface)", color: "var(--color-danger)", borderColor: "color-mix(in srgb, var(--color-danger) 30%, transparent)" }}
            >
              <WarningOctagon size={22} weight="fill" />
            </div>
            <div>
              <h2 className={styles.modalTitle}>{title}</h2>
              <p className={styles.modalSubtitle}>This action cannot be undone</p>
            </div>
          </div>

          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <X size={20} weight="bold" />
          </button>
        </div>

        <div className={styles.modalBody}>
          {errorMsg && (
            <div style={{
              background: "var(--color-danger-surface)",
              color: "var(--color-danger)",
              padding: "10px 14px",
              borderRadius: "var(--radius-md)",
              border: "1px solid color-mix(in srgb, var(--color-danger) 30%, transparent)",
              fontSize: "var(--text-xs)",
              fontWeight: 700
            }}>
              {errorMsg}
            </div>
          )}

          <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text)", lineHeight: 1.5 }}>
            {message}
          </p>
        </div>

        <div className={styles.modalFooter}>
          <Button
            type="button"
            variant="ghost"
            size="md"
            onClick={onClose}
            disabled={isDeleting}
          >
            Cancel
          </Button>

          <Button
            type="button"
            variant="danger"
            size="md"
            isLoading={isDeleting}
            onClick={handleConfirm}
            leftIcon={<Trash size={18} weight="bold" />}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
