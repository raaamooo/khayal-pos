"use client";

import React, { useState, useEffect } from "react";
import { 
  CookingPot, 
  X, 
  Plus, 
  Trash, 
  Image as ImageIcon, 
  Eye, 
  Check, 
  Sparkle, 
  Tag,
  FolderPlus
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { createMenuItem, updateMenuItem } from "@/app/[venue]/admin-actions";
import { playTick, playSuccess, playPop } from "@/lib/sound";
import styles from "./inventory-modals.module.css";

const PRESET_QUIZ_TAGS = [
  "Hot",
  "Cold",
  "Sweet",
  "Bold",
  "Fruity",
  "Creamy",
  "Refreshing",
  "Spicy",
  "Decaf",
  "Vegan",
  "Signature"
];

interface MenuItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  venueId: string;
  itemToEdit: any | null;
  categories: any[];
  ingredients: any[];
  onSaveSuccess: (savedItem: any) => void;
  onOpenCategoryModal?: () => void;
}

export default function MenuItemModal({
  isOpen,
  onClose,
  venueId,
  itemToEdit,
  categories,
  ingredients,
  onSaveSuccess,
  onOpenCategoryModal,
}: MenuItemModalProps) {
  const isEditing = Boolean(itemToEdit);

  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [outOfStock, setOutOfStock] = useState(false);
  const [quizTags, setQuizTags] = useState<string[]>([]);
  const [customTagInput, setCustomTagInput] = useState("");
  
  // Recipe items: [{ ingredientId, quantityUsed }]
  const [recipeItems, setRecipeItems] = useState<Array<{ ingredientId: string; quantityUsed: string }>>([]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Populate form when opening in edit mode
  useEffect(() => {
    if (itemToEdit) {
      setName(itemToEdit.name || "");
      setCategoryId(itemToEdit.categoryId || (categories[0]?.id || ""));
      setPrice(itemToEdit.price ? String(Number(itemToEdit.price)) : "");
      setDescription(itemToEdit.description || "");
      setImageUrl(itemToEdit.imageUrl || "");
      setOutOfStock(Boolean(itemToEdit.outOfStock));
      setQuizTags(Array.isArray(itemToEdit.quizTags) ? itemToEdit.quizTags : []);
      
      if (itemToEdit.recipeItems && Array.isArray(itemToEdit.recipeItems)) {
        setRecipeItems(
          itemToEdit.recipeItems.map((r: any) => ({
            ingredientId: r.ingredientId,
            quantityUsed: String(Number(r.quantityUsed)),
          }))
        );
      } else {
        setRecipeItems([]);
      }
    } else {
      setName("");
      setCategoryId(categories[0]?.id || "");
      setPrice("");
      setDescription("");
      setImageUrl("");
      setOutOfStock(false);
      setQuizTags([]);
      setRecipeItems([]);
    }
    setErrorMsg("");
  }, [itemToEdit, categories, isOpen]);

  if (!isOpen) return null;

  const handleToggleTag = (tag: string) => {
    playTick();
    if (quizTags.includes(tag)) {
      setQuizTags(quizTags.filter((t) => t !== tag));
    } else {
      setQuizTags([...quizTags, tag]);
    }
  };

  const handleAddCustomTag = () => {
    if (!customTagInput.trim()) return;
    const cleanTag = customTagInput.trim();
    if (!quizTags.includes(cleanTag)) {
      setQuizTags([...quizTags, cleanTag]);
    }
    setCustomTagInput("");
    playTick();
  };

  const handleAddRecipeRow = () => {
    playPop();
    const availableIngredient = ingredients.find(
      (ing) => !recipeItems.some((r) => r.ingredientId === ing.id)
    ) || ingredients[0];

    if (availableIngredient) {
      setRecipeItems([
        ...recipeItems,
        { ingredientId: availableIngredient.id, quantityUsed: "1" },
      ]);
    }
  };

  const handleUpdateRecipeRow = (index: number, field: "ingredientId" | "quantityUsed", value: string) => {
    const updated = [...recipeItems];
    updated[index] = { ...updated[index], [field]: value };
    setRecipeItems(updated);
  };

  const handleRemoveRecipeRow = (index: number) => {
    playTick();
    setRecipeItems(recipeItems.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please enter an item name.");
      return;
    }
    if (!categoryId) {
      setErrorMsg("Please select or create a category.");
      return;
    }
    const numPrice = parseFloat(price);
    if (isNaN(numPrice) || numPrice < 0) {
      setErrorMsg("Please enter a valid price in EGP.");
      return;
    }

    // Clean recipe items
    const validRecipeItems = recipeItems
      .filter((r) => r.ingredientId && parseFloat(r.quantityUsed) > 0)
      .map((r) => ({
        ingredientId: r.ingredientId,
        quantityUsed: parseFloat(r.quantityUsed),
      }));

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      if (isEditing) {
        const res = await updateMenuItem(venueId, itemToEdit.id, {
          name: name.trim(),
          categoryId,
          price: numPrice,
          description: description.trim() || undefined,
          imageUrl: imageUrl.trim() || undefined,
          outOfStock,
          quizTags,
          recipeItems: validRecipeItems,
        });
        playSuccess();
        onSaveSuccess(res.item);
      } else {
        const res = await createMenuItem(venueId, {
          name: name.trim(),
          categoryId,
          price: numPrice,
          description: description.trim() || undefined,
          imageUrl: imageUrl.trim() || undefined,
          outOfStock,
          quizTags,
          recipeItems: validRecipeItems,
        });
        playSuccess();
        onSaveSuccess(res.item);
      }
      onClose();
    } catch (err: any) {
      console.error("Save menu item error", err);
      setErrorMsg(err.message || "Failed to save menu item.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCategoryName = categories.find((c) => c.id === categoryId)?.name || "General";

  return (
    <div className={styles.backdrop} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal} role="dialog" aria-modal="true">
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleGroup}>
            <div className={styles.headerIconBadge}>
              <CookingPot size={22} weight="fill" />
            </div>
            <div>
              <h2 className={styles.modalTitle}>
                {isEditing ? "Edit Menu Item" : "Create New Menu Item"}
              </h2>
              <p className={styles.modalSubtitle}>
                {isEditing ? "Update details, pricing, and recipe formula" : "Add a fresh item to your digital customer menu"}
              </p>
            </div>
          </div>

          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Body */}
        <form id="menu-item-form" onSubmit={handleSubmit} className={styles.modalBody}>
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

          <div className={styles.modalSplitLayout}>
            {/* Left Form Column */}
            <div className={styles.formColumn}>
              {/* Name */}
              <Input
                label="Item Name"
                placeholder="e.g. Spanish Iced Latte"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus
              />

              {/* Category & Price in row */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label className={styles.formLabel}>Category</label>
                    {onOpenCategoryModal && (
                      <button
                        type="button"
                        onClick={onOpenCategoryModal}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "var(--primary-color)",
                          fontSize: "11px",
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "2px"
                        }}
                      >
                        <FolderPlus size={13} weight="bold" /> Manage
                      </button>
                    )}
                  </div>
                  <select
                    className={styles.select}
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    required
                  >
                    {categories.length === 0 && <option value="">No categories yet</option>}
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <Input
                    label="Price (EGP)"
                    type="number"
                    step="0.5"
                    min="0"
                    placeholder="e.g. 75"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Description / Flavor Profile</label>
                <textarea
                  className={styles.textarea}
                  placeholder="e.g. Rich espresso with condensed milk and creamy cold foam over ice."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={2}
                />
              </div>

              {/* Image URL */}
              <Input
                label="Image URL"
                placeholder="https://images.unsplash.com/photo-..."
                leftIcon={<ImageIcon size={18} weight="bold" />}
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                helpText="Optional link to a high quality beverage or dish photo."
              />

              {/* Availability Toggle */}
              <div className={styles.toggleRow}>
                <div className={styles.toggleLabelGroup}>
                  <span className={styles.toggleTitle}>Mark Out of Stock / Sold Out</span>
                  <span className={styles.toggleDesc}>
                    {outOfStock ? "Item will appear disabled and un-orderable on customer menu" : "Item is active and available for orders"}
                  </span>
                </div>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={outOfStock}
                    onChange={(e) => {
                      playTick();
                      setOutOfStock(e.target.checked);
                    }}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>

              {/* Quiz / Discovery Tags */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Taste & Discovery Tags</label>
                <div className={styles.chipsWrapper}>
                  {PRESET_QUIZ_TAGS.map((tag) => {
                    const isSelected = quizTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        className={`${styles.chipBtn} ${isSelected ? styles.chipBtnActive : ""}`}
                        onClick={() => handleToggleTag(tag)}
                      >
                        {isSelected && <Check size={12} weight="bold" />}
                        {tag}
                      </button>
                    );
                  })}
                </div>

                <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
                  <input
                    type="text"
                    placeholder="Custom tag..."
                    value={customTagInput}
                    onChange={(e) => setCustomTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddCustomTag();
                      }
                    }}
                    style={{
                      flex: 1,
                      height: "34px",
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      padding: "0 10px",
                      fontSize: "var(--text-xs)",
                      color: "var(--text)"
                    }}
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={handleAddCustomTag}
                  >
                    Add Tag
                  </Button>
                </div>
              </div>

              {/* Recipe Formula Builder */}
              <div className={styles.recipeSection}>
                <div className={styles.recipeSectionHeader}>
                  <div className={styles.recipeSectionTitle}>
                    <Sparkle size={16} weight="fill" color="var(--primary-color)" />
                    <span>Raw Inventory Recipe Formula</span>
                  </div>

                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={handleAddRecipeRow}
                    leftIcon={<Plus size={14} weight="bold" />}
                    disabled={ingredients.length === 0}
                  >
                    Add Ingredient
                  </Button>
                </div>

                {ingredients.length === 0 ? (
                  <p className={styles.emptyRecipeHint}>
                    No raw ingredients registered yet. Create raw ingredients to link them to this recipe.
                  </p>
                ) : recipeItems.length === 0 ? (
                  <p className={styles.emptyRecipeHint}>
                    No raw ingredients mapped to this item yet. Click "+ Add Ingredient" to link inventory deductions.
                  </p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {recipeItems.map((rItem, idx) => {
                      const selectedIng = ingredients.find((i) => i.id === rItem.ingredientId);
                      return (
                        <div key={idx} className={styles.recipeRow}>
                          <select
                            className={styles.select}
                            style={{ height: "38px", fontSize: "13px" }}
                            value={rItem.ingredientId}
                            onChange={(e) => handleUpdateRecipeRow(idx, "ingredientId", e.target.value)}
                          >
                            {ingredients.map((ing) => (
                              <option key={ing.id} value={ing.id}>
                                {ing.name} (Stock: {Number(ing.stock)} {ing.unit})
                              </option>
                            ))}
                          </select>

                          <input
                            type="number"
                            step="any"
                            min="0.01"
                            placeholder="Qty"
                            className={styles.select}
                            style={{ height: "38px", fontSize: "13px" }}
                            value={rItem.quantityUsed}
                            onChange={(e) => handleUpdateRecipeRow(idx, "quantityUsed", e.target.value)}
                          />

                          <span className={styles.unitBadge}>
                            {selectedIng?.unit || "units"}
                          </span>

                          <button
                            type="button"
                            className={styles.deleteIconBtn}
                            onClick={() => handleRemoveRecipeRow(idx)}
                            aria-label="Remove ingredient from recipe"
                          >
                            <Trash size={16} weight="bold" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Right Live Card Preview Column */}
            <div className={styles.previewColumn}>
              <span className={styles.previewLabel}>
                <Eye size={14} weight="bold" /> Customer Menu Live Preview
              </span>

              <div className={styles.previewCardMock}>
                <div className={styles.previewImgWrap}>
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={name || "Item preview"} 
                      className={styles.previewImg} 
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <div className={styles.previewImgPlaceholder}>
                      <ImageIcon size={32} weight="duotone" />
                      <span>{name ? name.slice(0, 15) : "Item Photo"}</span>
                    </div>
                  )}
                  {outOfStock && (
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 800,
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em"
                    }}>
                      Sold Out
                    </div>
                  )}
                </div>

                <div className={styles.previewCardBody}>
                  <div className={styles.previewCardHeader}>
                    <div>
                      <h4 className={styles.previewCardName}>
                        {name || "Untitled Item"}
                      </h4>
                      <span className={styles.previewCardCategory}>
                        {selectedCategoryName}
                      </span>
                    </div>

                    <span className={styles.previewCardPrice}>
                      {price ? `${price} EGP` : "0.00 EGP"}
                    </span>
                  </div>

                  <p className={styles.previewCardDesc}>
                    {description || "Item flavor notes and preparation details will display here."}
                  </p>

                  {quizTags.length > 0 && (
                    <div className={styles.previewCardTags}>
                      {quizTags.map((tag) => (
                        <span key={tag} className={styles.previewTagPill}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Recipe portion stats summary */}
              {recipeItems.length > 0 && (
                <div style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px",
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}>
                  <strong style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}>
                    Portion Consumption Breakdown
                  </strong>
                  {recipeItems.map((r, i) => {
                    const ing = ingredients.find((item) => item.id === r.ingredientId);
                    if (!ing) return null;
                    return (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", color: "var(--color-text-muted)" }}>
                        <span>{ing.name}</span>
                        <strong style={{ color: "var(--primary-color)" }}>{r.quantityUsed} {ing.unit}</strong>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
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
            form="menu-item-form"
            variant="primary"
            size="md"
            isLoading={isSubmitting}
            leftIcon={<Check size={18} weight="bold" />}
          >
            {isEditing ? "Save Changes" : "Create Item"}
          </Button>
        </div>
      </div>
    </div>
  );
}
