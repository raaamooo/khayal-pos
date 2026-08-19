"use client";

import React, { useState } from "react";
import { 
  Package, 
  Check, 
  Plus, 
  WarningCircle, 
  CheckCircle,
  Siren
} from "@phosphor-icons/react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { quickRestockIngredient } from "@/app/[venue]/admin-actions";
import { playTick, playSuccess } from "@/lib/sound";
import styles from "./LowStockAlerts.module.css";

export interface IngredientItem {
  id: string;
  name: string;
  stock: number;
  unit: string;
  lowStockThreshold?: number | null;
}

interface LowStockAlertsProps {
  venueId: string;
  ingredients: IngredientItem[];
  onRestockComplete?: () => void;
}

export default function LowStockAlerts({
  venueId,
  ingredients,
  onRestockComplete,
}: LowStockAlertsProps) {
  const [restockingId, setRestockingId] = useState<string | null>(null);
  const [justRestockedId, setJustRestockedId] = useState<string | null>(null);

  // Group by stock status: critical (<= 5), warning (<= 15), healthy (> 15)
  const categorized = React.useMemo(() => {
    const critical: IngredientItem[] = [];
    const warning: IngredientItem[] = [];
    const healthy: IngredientItem[] = [];

    for (const ing of ingredients) {
      const stock = Number(ing.stock);
      const threshold = ing.lowStockThreshold ? Number(ing.lowStockThreshold) : 10;

      if (stock <= 5) {
        critical.push(ing);
      } else if (stock <= threshold) {
        warning.push(ing);
      } else {
        healthy.push(ing);
      }
    }

    return { critical, warning, healthy };
  }, [ingredients]);

  const handleRestock = async (ingId: string, amount: number) => {
    playPop();
    setRestockingId(ingId);
    try {
      await quickRestockIngredient(venueId, ingId, amount);
      playSuccess();
      setJustRestockedId(ingId);
      setTimeout(() => setJustRestockedId(null), 2500);
      if (onRestockComplete) {
        onRestockComplete();
      }
    } catch (e) {
      console.error("Restock failed", e);
    } finally {
      setRestockingId(null);
    }
  };

  const totalAlerts = categorized.critical.length + categorized.warning.length;

  return (
    <div className={styles.alertsContainer}>
      <Card className={styles.alertCard}>
        <div className={styles.alertHeader}>
          <div className={styles.alertTitleRow}>
            <Package size={22} weight="bold" color="var(--primary-color)" />
            <h3 className={styles.alertTitle}>Inventory Stock & Health Monitor</h3>
          </div>

          <Badge variant={categorized.critical.length > 0 ? "danger" : totalAlerts > 0 ? "warning" : "success"} size="md">
            {categorized.critical.length > 0 ? (
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <Siren size={14} weight="fill" /> {categorized.critical.length} Critical Items
              </span>
            ) : totalAlerts > 0 ? (
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <WarningCircle size={14} weight="fill" /> {totalAlerts} Low Stock Warnings
              </span>
            ) : (
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <CheckCircle size={14} weight="fill" /> All Ingredients Healthy
              </span>
            )}
          </Badge>
        </div>

        <div className={styles.stockGrid}>
          {ingredients.map((ing) => {
            const stock = Number(ing.stock);
            const threshold = ing.lowStockThreshold ? Number(ing.lowStockThreshold) : 10;
            const isCritical = stock <= 5;
            const isWarning = !isCritical && stock <= threshold;
            const isSuccess = justRestockedId === ing.id;

            const targetBase = threshold * 2.5;
            const gaugePercent = Math.min(100, Math.max(4, Math.round((stock / targetBase) * 100)));

            return (
              <div
                key={ing.id}
                className={`${styles.ingredientCard} ${
                  isCritical ? styles.critical : isWarning ? styles.warning : styles.healthy
                }`}
              >
                <div className={styles.ingNameRow}>
                  <span className={styles.ingName}>{ing.name}</span>
                  <Badge variant={isCritical ? "danger" : isWarning ? "warning" : "default"} size="sm">
                    {isCritical ? "Critical Low" : isWarning ? "Low Stock" : "In Stock"}
                  </Badge>
                </div>

                <div className={styles.ingStockInfo}>
                  <span>Current Supply:</span>
                  <span className={`${styles.ingStockNum} ${isCritical ? styles.criticalText : isWarning ? styles.warningText : ""}`}>
                    {stock} <small style={{ fontSize: "12px", opacity: 0.7 }}>{ing.unit}</small>
                  </span>
                </div>

                {/* Stock Gauge */}
                <div className={styles.gaugeTrack}>
                  <div
                    className={`${styles.gaugeFill} ${
                      isCritical ? styles.gaugeCritical : isWarning ? styles.gaugeCaution : styles.gaugeHealthy
                    }`}
                    style={{ width: `${gaugePercent}%` }}
                  />
                </div>

                <div className={styles.restockBtnRow}>
                  <Button
                    variant={isCritical ? "primary" : "secondary"}
                    size="sm"
                    fullWidth
                    isLoading={restockingId === ing.id}
                    onClick={() => handleRestock(ing.id, ing.unit === "g" ? 1000 : 10)}
                    leftIcon={isSuccess ? <Check size={14} weight="bold" /> : <Plus size={14} weight="bold" />}
                  >
                    {isSuccess 
                      ? "Restocked ✓" 
                      : `+${ing.unit === "g" ? "1000g" : "10"} Quick Restock`}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function playPop() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch {}
}
