"use client";

import { useState } from "react";
import styles from "./inventory.module.css";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Package, Plus, CookingPot, ListBullets, WarningOctagon, WarningCircle, CheckCircle } from "@phosphor-icons/react";

export default function InventoryClient({
  venueId,
  initialIngredients,
  initialMenuItems,
  initialCategories,
}: {
  venueId: string;
  initialIngredients: any[];
  initialMenuItems: any[];
  initialCategories: any[];
}) {
  const [activeTab, setActiveTab] = useState<"ingredients" | "menu">("ingredients");
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  const lowStockCount = ingredients.filter(
    (ing) => Number(ing.stock) <= Number(ing.lowThreshold)
  ).length;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.inventoryIconBadge}>
            <Package size={24} weight="fill" />
          </div>
          <div>
            <h1 className={styles.title}>Inventory & Recipes</h1>
            <p className={styles.subtitle}>
              {ingredients.length} ingredients tracked • {menuItems.length} active menu items
            </p>
          </div>
        </div>

        {lowStockCount > 0 && (
          <div className={styles.lowStockWarningBanner}>
            <WarningOctagon size={20} weight="fill" color="var(--color-warning)" />
            <span>{lowStockCount} item{lowStockCount > 1 ? "s" : ""} low in stock</span>
          </div>
        )}
      </header>

      {/* ── Navigation ── */}
      <nav className={styles.sectionTabs} aria-label="Inventory Sections">
        <button
          className={`${styles.sectionTab} ${activeTab === "ingredients" ? styles.active : ""}`}
          onClick={() => setActiveTab("ingredients")}
        >
          <Package size={18} weight="bold" />
          <span>Raw Ingredients ({ingredients.length})</span>
        </button>
        <button
          className={`${styles.sectionTab} ${activeTab === "menu" ? styles.active : ""}`}
          onClick={() => setActiveTab("menu")}
        >
          <CookingPot size={18} weight="bold" />
          <span>Menu & Recipes ({menuItems.length})</span>
        </button>
      </nav>

      {/* ── Raw Ingredients Grid ── */}
      {activeTab === "ingredients" && (
        <div className={styles.grid}>
          {ingredients.map((ing) => {
            const stockNum = Number(ing.stock);
            const thresholdNum = Number(ing.lowThreshold) || 10;
            
            let badgeVariant: "success" | "warning" | "danger" = "success";
            let statusText = "In Stock";
            let isLow = false;
            let isOut = false;
            
            if (stockNum <= 0) {
              badgeVariant = "danger";
              statusText = "Out of Stock";
              isOut = true;
            } else if (stockNum <= thresholdNum) {
              badgeVariant = "warning";
              statusText = "Low Stock";
              isLow = true;
            }

            // Gauge fill percentage calculation (healthy when >= 2x threshold)
            const targetBase = thresholdNum * 2.5;
            const gaugePercent = Math.min(100, Math.max(4, Math.round((stockNum / targetBase) * 100)));

            return (
              <Card 
                key={ing.id} 
                className={`${styles.card} ${isOut ? styles.cardOutOfStock : isLow ? styles.cardLowStock : ""}`}
              >
                <div className={styles.cardHeader}>
                  <h3 className={styles.itemName}>{ing.name}</h3>
                  <Badge variant={badgeVariant}>{statusText}</Badge>
                </div>
                
                <div className={styles.cardBody}>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Current Stock</span>
                    <span className={`${styles.statValue} ${isOut ? styles.textDanger : isLow ? styles.textWarning : ""}`}>
                      {stockNum} <small>{ing.unit}</small>
                    </span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Alert Threshold</span>
                    <span className={styles.statValueMuted}>
                      {thresholdNum} {ing.unit}
                    </span>
                  </div>

                  {/* Visual Stock Health Gauge */}
                  <div className={styles.gaugeWrapper}>
                    <div className={styles.gaugeHeader}>
                      <span className={styles.gaugeLabel}>Supply Health</span>
                      <span className={styles.gaugePercent}>{gaugePercent}%</span>
                    </div>
                    <div className={styles.gaugeTrack}>
                      <div
                        className={`${styles.gaugeFill} ${
                          isOut ? styles.gaugeCritical : isLow ? styles.gaugeCaution : styles.gaugeHealthy
                        }`}
                        style={{ width: `${gaugePercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
          
          <Button
            variant="outline"
            size="lg"
            className={styles.addDashedBtn}
            leftIcon={<Plus size={20} weight="bold" />}
          >
            Add New Ingredient
          </Button>
        </div>
      )}

      {/* ── Menu Items & Recipe Breakdown ── */}
      {activeTab === "menu" && (
        <div className={styles.grid}>
          {menuItems.map((item) => (
            <Card key={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <span className={styles.itemCategory}>{item.category?.name || "General"}</span>
                </div>
                <div className={styles.itemPriceBadge}>
                  {Number(item.price)} EGP
                </div>
              </div>
              
              <div className={styles.cardBody}>
                {item.description && (
                  <p className={styles.desc}>{item.description}</p>
                )}
                
                <div className={styles.recipeList}>
                  <div className={styles.recipeHeader}>
                    <ListBullets size={16} weight="bold" />
                    <span>Ingredient Consumption</span>
                  </div>
                  
                  {item.recipeItems?.length === 0 ? (
                    <p className={styles.noRecipeText}>No ingredients mapped yet</p>
                  ) : (
                    <ul className={styles.recipeItemsUl}>
                      {item.recipeItems.map((ri: any) => (
                        <li key={ri.id}>
                          <strong>{Number(ri.quantityUsed)} {ri.ingredient?.unit}</strong>
                          <span>{ri.ingredient?.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Card>
          ))}

          <Button
            variant="outline"
            size="lg"
            className={styles.addDashedBtn}
            leftIcon={<Plus size={20} weight="bold" />}
          >
            Add Menu Recipe
          </Button>
        </div>
      )}
    </div>
  );
}
