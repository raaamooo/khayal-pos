"use client";

import React, { useState, useMemo } from "react";
import styles from "./inventory.module.css";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { 
  Package, 
  Plus, 
  CookingPot, 
  ListBullets, 
  WarningOctagon, 
  WarningCircle, 
  CheckCircle,
  MagnifyingGlass,
  X,
  PencilSimple,
  Trash,
  ArrowsClockwise,
  FolderPlus,
  Sparkle,
  Eye,
  Siren,
  Check,
  ForkKnife
} from "@phosphor-icons/react";
import MenuItemModal from "@/components/inventory/MenuItemModal";
import IngredientModal from "@/components/inventory/IngredientModal";
import CategoryModal from "@/components/inventory/CategoryModal";
import DeleteConfirmModal from "@/components/inventory/DeleteConfirmModal";
import { 
  getInventoryData, 
  quickRestockIngredient, 
  toggleMenuItemStock, 
  deleteMenuItem, 
  deleteIngredient 
} from "../admin-actions";
import { playTick, playPop, playSuccess } from "@/lib/sound";

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
  const [activeTab, setActiveTab] = useState<"menu" | "ingredients">("menu");
  const [ingredients, setIngredients] = useState<any[]>(initialIngredients);
  const [menuItems, setMenuItems] = useState<any[]>(initialMenuItems);
  const [categories, setCategories] = useState<any[]>(initialCategories);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("ALL");
  const [stockFilter, setStockFilter] = useState<"ALL" | "IN_STOCK" | "LOW_OUT">("ALL");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [restockingId, setRestockingId] = useState<string | null>(null);

  // Modal States
  const [menuItemModalOpen, setMenuItemModalOpen] = useState(false);
  const [editingMenuItem, setEditingMenuItem] = useState<any | null>(null);

  const [ingredientModalOpen, setIngredientModalOpen] = useState(false);
  const [editingIngredient, setEditingIngredient] = useState<any | null>(null);

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [deleteTarget, setDeleteTarget] = useState<{
    type: "menuItem" | "ingredient";
    id: string;
    name: string;
  } | null>(null);

  // Synchronize latest data from DB
  const refreshData = async (silent = false) => {
    if (!silent) setIsRefreshing(true);
    try {
      const data = await getInventoryData(venueId);
      setIngredients(data.ingredients);
      setMenuItems(data.menuItems);
      setCategories(data.categories);
    } catch (e) {
      console.error("Failed to refresh inventory data", e);
    } finally {
      if (!silent) setIsRefreshing(false);
    }
  };

  // Helper: Calculate max portions / servings possible from raw ingredient stock
  const calculateServings = (item: any): { count: number | null; isCritical: boolean } => {
    if (!item.recipeItems || item.recipeItems.length === 0) {
      return { count: null, isCritical: false };
    }

    let minServings = Infinity;

    for (const recipeItem of item.recipeItems) {
      const ing = ingredients.find((i) => i.id === recipeItem.ingredientId);
      const qtyUsed = Number(recipeItem.quantityUsed);
      if (!ing || qtyUsed <= 0) {
        minServings = 0;
        break;
      }
      const stock = Number(ing.stock);
      const possible = Math.floor(stock / qtyUsed);
      if (possible < minServings) {
        minServings = possible;
      }
    }

    if (minServings === Infinity) {
      return { count: null, isCritical: false };
    }

    return {
      count: Math.max(0, minServings),
      isCritical: minServings <= 5,
    };
  };

  // Aggregated KPI Stats
  const outOfStockMenuCount = menuItems.filter((i) => i.outOfStock).length;
  const lowStockIngredientsCount = ingredients.filter(
    (ing) => Number(ing.stock) <= (Number(ing.lowThreshold) || 10)
  ).length;

  // Filtered Menu Items
  const filteredMenuItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (selectedCategoryId !== "ALL" && item.categoryId !== selectedCategoryId) {
        return false;
      }

      // Stock status filter
      if (stockFilter === "IN_STOCK" && item.outOfStock) {
        return false;
      }
      if (stockFilter === "LOW_OUT") {
        const servings = calculateServings(item);
        const isLow = servings.count !== null && servings.count <= 5;
        if (!item.outOfStock && !isLow) {
          return false;
        }
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query);
        const matchesCat = item.category?.name.toLowerCase().includes(query);
        const matchesTags = Array.isArray(item.quizTags) && item.quizTags.some((t: string) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesCat && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [menuItems, selectedCategoryId, stockFilter, searchQuery, ingredients]);

  // Filtered Raw Ingredients
  const filteredIngredients = useMemo(() => {
    return ingredients.filter((ing) => {
      const stockNum = Number(ing.stock);
      const thresholdNum = Number(ing.lowThreshold) || 10;
      const isLowOrOut = stockNum <= thresholdNum;

      if (stockFilter === "IN_STOCK" && isLowOrOut) return false;
      if (stockFilter === "LOW_OUT" && !isLowOrOut) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        if (!ing.name.toLowerCase().includes(query)) return false;
      }

      return true;
    });
  }, [ingredients, stockFilter, searchQuery]);

  // Quick Restock Action
  const handleQuickRestock = async (ing: any, addAmount: number) => {
    playPop();
    setRestockingId(ing.id);
    try {
      await quickRestockIngredient(venueId, ing.id, addAmount);
      playSuccess();
      // Optimistic update
      setIngredients((prev) =>
        prev.map((item) =>
          item.id === ing.id
            ? { ...item, stock: Number(item.stock) + addAmount }
            : item
        )
      );
      // Also refresh silently to update dependent menu item stock status
      refreshData(true);
    } catch (e) {
      console.error("Restock failed", e);
    } finally {
      setRestockingId(null);
    }
  };

  // Quick Toggle Menu Item Out of Stock
  const handleToggleOutOfStock = async (item: any) => {
    playTick();
    const newStatus = !item.outOfStock;
    // Optimistic update
    setMenuItems((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, outOfStock: newStatus } : i))
    );
    try {
      await toggleMenuItemStock(venueId, item.id, newStatus);
      playPop();
    } catch (e) {
      console.error("Toggle stock failed", e);
      refreshData(true);
    }
  };

  // Perform Deletion
  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;
    playTick();
    if (deleteTarget.type === "menuItem") {
      await deleteMenuItem(venueId, deleteTarget.id);
      setMenuItems((prev) => prev.filter((i) => i.id !== deleteTarget.id));
    } else {
      await deleteIngredient(venueId, deleteTarget.id);
      setIngredients((prev) => prev.filter((i) => i.id !== deleteTarget.id));
    }
    playSuccess();
    refreshData(true);
  };

  return (
    <div className={styles.container}>
      {/* ── Main Header ── */}
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.inventoryIconBadge}>
            <CookingPot size={26} weight="fill" />
          </div>
          <div>
            <h1 className={styles.title}>Menu & Inventory Suite</h1>
            <p className={styles.subtitle}>
              {menuItems.length} active menu items • {ingredients.length} raw ingredients tracked
            </p>
          </div>
        </div>

        <div className={styles.headerActions}>
          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              playTick();
              setCategoryModalOpen(true);
            }}
            leftIcon={<FolderPlus size={18} weight="bold" />}
          >
            Categories
          </Button>

          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              playPop();
              setEditingIngredient(null);
              setIngredientModalOpen(true);
            }}
            leftIcon={<Plus size={18} weight="bold" />}
          >
            New Ingredient
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={() => {
              playPop();
              setEditingMenuItem(null);
              setMenuItemModalOpen(true);
            }}
            leftIcon={<Plus size={18} weight="bold" />}
          >
            New Menu Item
          </Button>

          <Button
            variant="ghost"
            size="md"
            onClick={() => refreshData(false)}
            isLoading={isRefreshing}
            title="Refresh inventory and menu data"
          >
            <ArrowsClockwise size={18} weight="bold" />
          </Button>
        </div>
      </header>

      {/* ── KPI Stats Overview Bar ── */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={`${styles.statIconWrap} ${styles.statIconPrimary}`}>
            <CookingPot size={20} weight="fill" />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>{menuItems.length}</span>
            <span className={styles.statTitle}>Total Menu Items</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIconWrap} ${outOfStockMenuCount > 0 ? styles.statIconDanger : styles.statIconSuccess}`}>
            {outOfStockMenuCount > 0 ? <WarningOctagon size={20} weight="fill" /> : <CheckCircle size={20} weight="fill" />}
          </div>
          <div className={styles.statInfo}>
            <span className={`${styles.statNumber} ${outOfStockMenuCount > 0 ? styles.textDanger : ""}`}>
              {outOfStockMenuCount}
            </span>
            <span className={styles.statTitle}>Sold Out / 86&apos;d</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIconWrap} ${styles.statIconPrimary}`}>
            <Package size={20} weight="fill" />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>{ingredients.length}</span>
            <span className={styles.statTitle}>Raw Ingredients</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIconWrap} ${lowStockIngredientsCount > 0 ? styles.statIconWarning : styles.statIconSuccess}`}>
            {lowStockIngredientsCount > 0 ? <Siren size={20} weight="fill" /> : <CheckCircle size={20} weight="fill" />}
          </div>
          <div className={styles.statInfo}>
            <span className={`${styles.statNumber} ${lowStockIngredientsCount > 0 ? styles.textWarning : ""}`}>
              {lowStockIngredientsCount}
            </span>
            <span className={styles.statTitle}>Low Supply Alerts</span>
          </div>
        </div>
      </div>

      {/* ── Main Section Tabs ── */}
      <nav className={styles.sectionTabs} aria-label="Inventory Sections">
        <button
          className={`${styles.sectionTab} ${activeTab === "menu" ? styles.active : ""}`}
          onClick={() => {
            playTick();
            setActiveTab("menu");
          }}
        >
          <CookingPot size={18} weight="bold" />
          <span>Menu & Recipes ({menuItems.length})</span>
        </button>

        <button
          className={`${styles.sectionTab} ${activeTab === "ingredients" ? styles.active : ""}`}
          onClick={() => {
            playTick();
            setActiveTab("ingredients");
          }}
        >
          <Package size={18} weight="bold" />
          <span>Raw Stock Control ({ingredients.length})</span>
        </button>
      </nav>

      {/* ── Search & Filter Toolbar ── */}
      <div className={styles.toolbar}>
        <div className={styles.toolbarTopRow}>
          {/* Search Box */}
          <div className={styles.searchBoxWrap}>
            <MagnifyingGlass size={18} weight="bold" className={styles.searchIcon} />
            <input
              type="text"
              className={styles.searchInput}
              placeholder={activeTab === "menu" ? "Search dishes, drinks, tags, flavors..." : "Search raw ingredients..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className={styles.clearSearchBtn} 
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <X size={16} weight="bold" />
              </button>
            )}
          </div>

          {/* Stock Filter Pills */}
          <div className={styles.filterStatusGroup}>
            <button
              className={`${styles.statusFilterBtn} ${stockFilter === "ALL" ? styles.statusFilterBtnActive : ""}`}
              onClick={() => {
                playTick();
                setStockFilter("ALL");
              }}
            >
              All Items
            </button>
            <button
              className={`${styles.statusFilterBtn} ${stockFilter === "IN_STOCK" ? styles.statusFilterBtnActive : ""}`}
              onClick={() => {
                playTick();
                setStockFilter("IN_STOCK");
              }}
            >
              In Stock Only
            </button>
            <button
              className={`${styles.statusFilterBtn} ${stockFilter === "LOW_OUT" ? styles.statusFilterBtnActive : ""}`}
              onClick={() => {
                playTick();
                setStockFilter("LOW_OUT");
              }}
            >
              Low / Sold Out
            </button>
          </div>
        </div>

        {/* Category Horizontal Filter Chips (Visible for Menu Tab) */}
        {activeTab === "menu" && categories.length > 0 && (
          <div className={styles.categoryFilterRow}>
            <button
              className={`${styles.categoryChip} ${selectedCategoryId === "ALL" ? styles.categoryChipActive : ""}`}
              onClick={() => {
                playTick();
                setSelectedCategoryId("ALL");
              }}
            >
              All Categories ({menuItems.length})
            </button>

            {categories.map((cat) => {
              const count = menuItems.filter((i) => i.categoryId === cat.id).length;
              return (
                <button
                  key={cat.id}
                  className={`${styles.categoryChip} ${selectedCategoryId === cat.id ? styles.categoryChipActive : ""}`}
                  onClick={() => {
                    playTick();
                    setSelectedCategoryId(cat.id);
                  }}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════
          TAB 1: MENU ITEMS & RECIPES
          ═══════════════════════════════════════════════════ */}
      {activeTab === "menu" && (
        <>
          {filteredMenuItems.length === 0 ? (
            <EmptyState
              icon={<CookingPot size={48} weight="duotone" />}
              title="No Menu Items Found"
              description={
                searchQuery || selectedCategoryId !== "ALL" || stockFilter !== "ALL"
                  ? "No items match your active filters. Try clearing search or resetting category filters."
                  : "Start creating delicious coffee and food offerings for your menu."
              }
              action={
                searchQuery || selectedCategoryId !== "ALL" || stockFilter !== "ALL" ? (
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategoryId("ALL");
                      setStockFilter("ALL");
                    }}
                  >
                    Reset Filters
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                      setEditingMenuItem(null);
                      setMenuItemModalOpen(true);
                    }}
                    leftIcon={<Plus size={18} weight="bold" />}
                  >
                    Create First Menu Item
                  </Button>
                )
              }
            />
          ) : (
            <div className={styles.grid}>
              {filteredMenuItems.map((item) => {
                const servings = calculateServings(item);
                const isOut = item.outOfStock || (servings.count !== null && servings.count <= 0);
                const isLow = !isOut && servings.count !== null && servings.count <= 5;

                return (
                  <Card
                    key={item.id}
                    className={`${styles.card} ${
                      isOut ? styles.cardOutOfStock : isLow ? styles.cardLowStock : ""
                    }`}
                  >
                    {/* Header */}
                    <div className={styles.cardHeader}>
                      <div className={styles.itemInfoLeft}>
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className={styles.itemThumb}
                            onError={(e) => {
                              (e.currentTarget as HTMLElement).style.display = "none";
                            }}
                          />
                        ) : (
                          <div className={styles.itemThumbPlaceholder}>
                            <ForkKnife size={22} weight="bold" />
                          </div>
                        )}
                        <div>
                          <h3 className={styles.itemName}>{item.name}</h3>
                          <span className={styles.itemCategory}>
                            {item.category?.name || "General"}
                          </span>
                        </div>
                      </div>

                      <div className={styles.itemPriceBadge}>
                        {Number(item.price)} EGP
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className={styles.cardBody}>
                      {item.description && (
                        <p className={styles.desc}>{item.description}</p>
                      )}

                      {/* Stock Availability Quick Switch */}
                      <div className={styles.stockToggleRow}>
                        <div className={styles.stockToggleLabel}>
                          <span>Availability:</span>
                          <Badge variant={item.outOfStock ? "danger" : "success"}>
                            {item.outOfStock ? "Sold Out / 86'd" : "In Stock"}
                          </Badge>
                        </div>

                        {/* Serving Estimator Badge */}
                        {servings.count !== null && (
                          <span
                            className={`${styles.servingEstimatePill} ${
                              servings.count <= 0
                                ? styles.servingNone
                                : servings.count <= 5
                                ? styles.servingLow
                                : styles.servingHealthy
                            }`}
                            title="Portions possible based on raw inventory"
                          >
                            <Sparkle size={12} weight="fill" />
                            {servings.count <= 0
                              ? "0 Servings Left"
                              : `~${servings.count} Servings Left`}
                          </span>
                        )}
                      </div>

                      {/* Recipe Breakdown Box */}
                      <div className={styles.recipeList}>
                        <div className={styles.recipeHeader}>
                          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <ListBullets size={14} weight="bold" />
                            Ingredient Consumption
                          </span>
                          <span style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>
                            Per Order
                          </span>
                        </div>

                        {!item.recipeItems || item.recipeItems.length === 0 ? (
                          <p className={styles.noRecipeText}>No raw ingredients linked</p>
                        ) : (
                          <ul className={styles.recipeItemsUl}>
                            {item.recipeItems.map((ri: any) => {
                              const ing = ingredients.find((i) => i.id === ri.ingredientId);
                              const currStock = ing ? Number(ing.stock) : 0;
                              const isDepleted = currStock < Number(ri.quantityUsed);

                              return (
                                <li key={ri.id}>
                                  <span>{ri.ingredient?.name || ing?.name}</span>
                                  <div>
                                    <strong>
                                      {Number(ri.quantityUsed)} {ri.ingredient?.unit || ing?.unit}
                                    </strong>
                                    <small 
                                      style={{ 
                                        marginLeft: "6px", 
                                        color: isDepleted ? "var(--color-danger)" : "var(--color-text-muted)",
                                        fontWeight: isDepleted ? 800 : 500
                                      }}
                                    >
                                      (Avail: {currStock})
                                    </small>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className={styles.cardFooter}>
                      <Button
                        variant={item.outOfStock ? "primary" : "secondary"}
                        size="sm"
                        fullWidth
                        onClick={() => handleToggleOutOfStock(item)}
                      >
                        {item.outOfStock ? "Set Available ✓" : "Mark Sold Out"}
                      </Button>

                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          playTick();
                          setEditingMenuItem(item);
                          setMenuItemModalOpen(true);
                        }}
                        title="Edit details, price, recipe formula"
                      >
                        <PencilSimple size={16} weight="bold" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        style={{ color: "var(--color-danger)" }}
                        onClick={() => {
                          playTick();
                          setDeleteTarget({
                            type: "menuItem",
                            id: item.id,
                            name: item.name,
                          });
                        }}
                        title="Delete Menu Item"
                      >
                        <Trash size={16} weight="bold" />
                      </Button>
                    </div>
                  </Card>
                );
              })}

              {/* Dashed Add Card */}
              <button
                type="button"
                className={styles.addDashedBtn}
                onClick={() => {
                  playPop();
                  setEditingMenuItem(null);
                  setMenuItemModalOpen(true);
                }}
              >
                <Plus size={28} weight="bold" />
                <span>Add New Menu Item</span>
              </button>
            </div>
          )}
        </>
      )}

      {/* ═══════════════════════════════════════════════════
          TAB 2: RAW INGREDIENTS & STOCK CONTROL
          ═══════════════════════════════════════════════════ */}
      {activeTab === "ingredients" && (
        <>
          {filteredIngredients.length === 0 ? (
            <EmptyState
              icon={<Package size={48} weight="duotone" />}
              title="No Raw Ingredients Found"
              description="No ingredients matched your filter criteria."
              action={
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setEditingIngredient(null);
                    setIngredientModalOpen(true);
                  }}
                  leftIcon={<Plus size={18} weight="bold" />}
                >
                  Add Raw Ingredient
                </Button>
              }
            />
          ) : (
            <div className={styles.grid}>
              {filteredIngredients.map((ing) => {
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

                const targetBase = thresholdNum * 2.5;
                const gaugePercent = Math.min(
                  100,
                  Math.max(4, Math.round((stockNum / (targetBase || 1)) * 100))
                );

                const defaultRestockAmount = ing.unit === "g" ? 1000 : ing.unit === "ml" ? 1000 : 10;

                return (
                  <Card
                    key={ing.id}
                    className={`${styles.card} ${
                      isOut ? styles.cardOutOfStock : isLow ? styles.cardLowStock : ""
                    }`}
                  >
                    <div className={styles.cardHeader}>
                      <div>
                        <h3 className={styles.itemName}>{ing.name}</h3>
                        <span className={styles.itemCategory}>Raw Supply</span>
                      </div>
                      <Badge variant={badgeVariant}>{statusText}</Badge>
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.stat}>
                        <span className={styles.statLabel}>Current Stock</span>
                        <span
                          className={`${styles.statValue} ${
                            isOut ? styles.textDanger : isLow ? styles.textWarning : ""
                          }`}
                        >
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
                              isOut
                                ? styles.gaugeCritical
                                : isLow
                                ? styles.gaugeCaution
                                : styles.gaugeHealthy
                            }`}
                            style={{ width: `${gaugePercent}%` }}
                          />
                        </div>
                      </div>

                      {/* Quick Restock Action Buttons */}
                      <div className={styles.restockChipsRow}>
                        <button
                          type="button"
                          className={styles.restockChipBtn}
                          disabled={restockingId === ing.id}
                          onClick={() => handleQuickRestock(ing, defaultRestockAmount)}
                        >
                          <Plus size={13} weight="bold" /> +{defaultRestockAmount} {ing.unit}
                        </button>

                        <button
                          type="button"
                          className={styles.restockChipBtn}
                          disabled={restockingId === ing.id}
                          onClick={() => handleQuickRestock(ing, defaultRestockAmount * 2)}
                        >
                          <Plus size={13} weight="bold" /> +{defaultRestockAmount * 2} {ing.unit}
                        </button>
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className={styles.cardFooter}>
                      <Button
                        variant="secondary"
                        size="sm"
                        fullWidth
                        onClick={() => {
                          playTick();
                          setEditingIngredient(ing);
                          setIngredientModalOpen(true);
                        }}
                        leftIcon={<PencilSimple size={14} weight="bold" />}
                      >
                        Edit Supply
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        style={{ color: "var(--color-danger)" }}
                        onClick={() => {
                          playTick();
                          setDeleteTarget({
                            type: "ingredient",
                            id: ing.id,
                            name: ing.name,
                          });
                        }}
                        title="Delete Raw Ingredient"
                      >
                        <Trash size={16} weight="bold" />
                      </Button>
                    </div>
                  </Card>
                );
              })}

              {/* Dashed Add Ingredient Card */}
              <button
                type="button"
                className={styles.addDashedBtn}
                onClick={() => {
                  playPop();
                  setEditingIngredient(null);
                  setIngredientModalOpen(true);
                }}
              >
                <Plus size={28} weight="bold" />
                <span>Add Raw Ingredient</span>
              </button>
            </div>
          )}
        </>
      )}

      {/* ═══════════════════════════════════════════════════
          MODALS
          ═══════════════════════════════════════════════════ */}
      <MenuItemModal
        isOpen={menuItemModalOpen}
        onClose={() => setMenuItemModalOpen(false)}
        venueId={venueId}
        itemToEdit={editingMenuItem}
        categories={categories}
        ingredients={ingredients}
        onSaveSuccess={() => refreshData(true)}
        onOpenCategoryModal={() => setCategoryModalOpen(true)}
      />

      <IngredientModal
        isOpen={ingredientModalOpen}
        onClose={() => setIngredientModalOpen(false)}
        venueId={venueId}
        ingredientToEdit={editingIngredient}
        onSaveSuccess={() => refreshData(true)}
      />

      <CategoryModal
        isOpen={categoryModalOpen}
        onClose={() => setCategoryModalOpen(false)}
        venueId={venueId}
        categories={categories}
        onCategoriesUpdated={() => refreshData(true)}
      />

      <DeleteConfirmModal
        isOpen={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        title={deleteTarget?.type === "menuItem" ? "Delete Menu Item" : "Delete Raw Ingredient"}
        message={
          deleteTarget?.type === "menuItem"
            ? `Are you sure you want to delete "${deleteTarget?.name}"? It will be removed from your digital menu and orders.`
            : `Are you sure you want to delete "${deleteTarget?.name}"? Make sure it is not linked to any active recipes.`
        }
        confirmLabel="Delete"
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
