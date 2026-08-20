"use client";

import React, { useState, useEffect } from "react";
import { Package, X, Check } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { createIngredient, updateIngredient } from "@/app/[venue]/admin-actions";
import { playTick, playSuccess } from "@/lib/sound";
import styles from "./inventory-modals.module.css";

const PRESET_UNITS = [
  { label: "Grams (g)", value: "g" },
  { label: "Milliliters (ml)", value: "ml" },
  { label: "Shots", value: "shot" },
  { label: "Count / Pcs", value: "count" },
  { label: "Liters (L)", value: "liter" },
  { label: "Kilograms (kg)", value: "kg" },
];

interface IngredientModalProps {
  isOpen: boolean;
  onClose: () => void;
  venueId: string;
  ingredientToEdit: any | null;
  onSaveSuccess: (savedIngredient: any) => void;
}

export default function IngredientModal({
  isOpen,
  onClose,
  venueId,
  ingredientToEdit,
  onSaveSuccess,
}: IngredientModalProps) {
  const isEditing = Boolean(ingredientToEdit);

  const [name, setName] = useState("");
  const [unit, setUnit] = useState("g");
  const [stock, setStock] = useState<string>("");
  const [lowThreshold, setLowThreshold] = useState<string>("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (ingredientToEdit) {
      setName(ingredientToEdit.name || "");
      setUnit(ingredientToEdit.unit || "g");
      setStock(ingredientToEdit.stock !== undefined ? String(Number(ingredientToEdit.stock)) : "0");
      setLowThreshold(ingredientToEdit.lowThreshold !== undefined ? String(Number(ingredientToEdit.lowThreshold)) : "10");
    } else {
      setName("");
      setUnit("g");
      setStock("100");
      setLowThreshold("20");
    }
    setErrorMsg("");
  }, [ingredientToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please enter an ingredient name.");
      return;
    }
    if (!unit.trim()) {
      setErrorMsg("Please choose or specify a measurement unit.");
      return;
    }
    const numStock = parseFloat(stock);
    const numThreshold = parseFloat(lowThreshold);

    if (isNaN(numStock) || numStock < 0) {
      setErrorMsg("Please enter a valid stock number.");
      return;
    }
    if (isNaN(numThreshold) || numThreshold < 0) {
      setErrorMsg("Please enter a valid low-stock alert threshold.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      if (isEditing) {
        const res = await updateIngredient(venueId, ingredientToEdit.id, {
          name: name.trim(),
          unit: unit.trim(),
          stock: numStock,
          lowThreshold: numThreshold,
        });
        playSuccess();
        onSaveSuccess(res.ingredient);
      } else {
        const res = await createIngredient(venueId, {
          name: name.trim(),
          unit: unit.trim(),
          stock: numStock,
          lowThreshold: numThreshold,
        });
        playSuccess();
        onSaveSuccess(res.ingredient);
      }
      onClose();
    } catch (err: any) {
      console.error("Save ingredient error", err);
      setErrorMsg(err.message || "Failed to save ingredient.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.backdrop} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`${styles.modal} ${styles.modalSm}`} role="dialog" aria-modal="true">
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleGroup}>
            <div className={styles.headerIconBadge}>
              <Package size={22} weight="fill" />
            </div>
            <div>
              <h2 className={styles.modalTitle}>
                {isEditing ? "Edit Raw Ingredient" : "Add Raw Ingredient"}
              </h2>
              <p className={styles.modalSubtitle}>
                {isEditing ? "Modify supply metric & alert threshold" : "Register inventory item for recipe auto-deductions"}
              </p>
            </div>
          </div>

          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Body */}
        <form id="ingredient-form" onSubmit={handleSubmit} className={styles.modalBody}>
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

          {/* Name */}
          <Input
            label="Ingredient Name"
            placeholder="e.g. Whole Milk, Espresso Beans, Oat Milk"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
          />

          {/* Measurement Unit */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Measurement Unit</label>
            <div className={styles.chipsWrapper}>
              {PRESET_UNITS.map((u) => (
                <button
                  key={u.value}
                  type="button"
                  className={`${styles.chipBtn} ${unit === u.value ? styles.chipBtnActive : ""}`}
                  onClick={() => {
                    playTick();
                    setUnit(u.value);
                  }}
                >
                  {unit === u.value && <Check size={12} weight="bold" />}
                  {u.label}
                </button>
              ))}
            </div>

            <div style={{ marginTop: "6px" }}>
              <input
                type="text"
                placeholder="Or custom unit (e.g. oz, pump, bag)..."
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                style={{
                  width: "100%",
                  height: "36px",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "0 10px",
                  fontSize: "var(--text-xs)",
                  color: "var(--text)"
                }}
              />
            </div>
          </div>

          {/* Current Stock & Low Threshold in row */}
          <div className={styles.formRow}>
            <Input
              label={`Current Stock (${unit || "units"})`}
              type="number"
              step="any"
              min="0"
              placeholder="e.g. 500"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />

            <Input
              label={`Low Alert Threshold (${unit || "units"})`}
              type="number"
              step="any"
              min="0"
              placeholder="e.g. 50"
              value={lowThreshold}
              onChange={(e) => setLowThreshold(e.target.value)}
              helpText="Triggers low-stock warning when reached."
              required
            />
          </div>
        </form>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <Button
            type="button"
            variant="ghost"
            size="md"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            form="ingredient-form"
            variant="primary"
            size="md"
            isLoading={isSubmitting}
            leftIcon={<Check size={18} weight="bold" />}
          >
            {isEditing ? "Save Ingredient" : "Add Ingredient"}
          </Button>
        </div>
      </div>
    </div>
  );
}
