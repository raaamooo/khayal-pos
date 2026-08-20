"use client";

import React, { useState } from "react";
import { Folder, X, Plus, Trash, PencilSimple, Check } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { createCategory, updateCategory, deleteCategory } from "@/app/[venue]/admin-actions";
import { playTick, playSuccess, playPop } from "@/lib/sound";
import styles from "./inventory-modals.module.css";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  venueId: string;
  categories: any[];
  onCategoriesUpdated: () => void;
}

export default function CategoryModal({
  isOpen,
  onClose,
  venueId,
  categories,
  onCategoriesUpdated,
}: CategoryModalProps) {
  const [newCatName, setNewCatName] = useState("");
  const [editingCatId, setEditingCatId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editOrder, setEditOrder] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await createCategory(venueId, {
        name: newCatName.trim(),
        orderIndex: categories.length,
      });
      playSuccess();
      setNewCatName("");
      onCategoriesUpdated();
    } catch (err: any) {
      console.error("Create category error", err);
      setErrorMsg(err.message || "Failed to create category.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStartEdit = (cat: any) => {
    playTick();
    setEditingCatId(cat.id);
    setEditName(cat.name);
    setEditOrder(String(cat.orderIndex ?? 0));
  };

  const handleSaveEdit = async (catId: string) => {
    if (!editName.trim()) return;
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await updateCategory(venueId, catId, {
        name: editName.trim(),
        orderIndex: parseInt(editOrder, 10) || 0,
      });
      playSuccess();
      setEditingCatId(null);
      onCategoriesUpdated();
    } catch (err: any) {
      console.error("Update category error", err);
      setErrorMsg(err.message || "Failed to update category.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteCategory = async (catId: string) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await deleteCategory(venueId, catId);
      playSuccess();
      onCategoriesUpdated();
    } catch (err: any) {
      console.error("Delete category error", err);
      setErrorMsg(err.message || "Failed to delete category.");
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
              <Folder size={22} weight="fill" />
            </div>
            <div>
              <h2 className={styles.modalTitle}>Manage Menu Categories</h2>
              <p className={styles.modalSubtitle}>Organize sections on your digital customer menu</p>
            </div>
          </div>

          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Body */}
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

          {/* Create New Category Form */}
          <form onSubmit={handleCreateCategory} style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              placeholder="New category name (e.g. Specialty Matcha)..."
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              style={{
                flex: 1,
                height: "40px",
                background: "var(--color-surface)",
                border: "1.5px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "0 12px",
                fontSize: "var(--text-sm)",
                color: "var(--text)",
                outline: "none"
              }}
              required
            />
            <Button
              type="submit"
              variant="primary"
              size="sm"
              isLoading={isSubmitting && !editingCatId}
              leftIcon={<Plus size={16} weight="bold" />}
            >
              Add
            </Button>
          </form>

          {/* Category List */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Existing Categories ({categories.length})</label>
            <div className={styles.categoryList}>
              {categories.map((cat) => {
                const isThisEditing = editingCatId === cat.id;

                if (isThisEditing) {
                  return (
                    <div key={cat.id} className={styles.categoryItemRow}>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        style={{
                          flex: 1,
                          height: "32px",
                          background: "var(--color-surface)",
                          border: "1px solid var(--primary-color)",
                          borderRadius: "var(--radius-sm)",
                          padding: "0 8px",
                          fontSize: "var(--text-xs)",
                          color: "var(--text)"
                        }}
                        autoFocus
                      />
                      <input
                        type="number"
                        title="Order index"
                        value={editOrder}
                        onChange={(e) => setEditOrder(e.target.value)}
                        style={{
                          width: "50px",
                          height: "32px",
                          background: "var(--color-surface)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "var(--radius-sm)",
                          padding: "0 4px",
                          fontSize: "var(--text-xs)",
                          textAlign: "center",
                          color: "var(--text)"
                        }}
                      />
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleSaveEdit(cat.id)}
                        leftIcon={<Check size={14} weight="bold" />}
                      >
                        Save
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEditingCatId(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  );
                }

                return (
                  <div key={cat.id} className={styles.categoryItemRow}>
                    <span className={styles.categoryItemName}>{cat.name}</span>
                    <span className={styles.categoryOrderBadge}>#{cat.orderIndex ?? 0}</span>
                    
                    <button
                      type="button"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "var(--color-text-muted)",
                        cursor: "pointer",
                        padding: "4px"
                      }}
                      onClick={() => handleStartEdit(cat)}
                      title="Edit Category"
                    >
                      <PencilSimple size={16} weight="bold" />
                    </button>

                    <button
                      type="button"
                      className={styles.deleteIconBtn}
                      onClick={() => handleDeleteCategory(cat.id)}
                      title="Delete Category"
                    >
                      <Trash size={16} weight="bold" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={onClose}
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}
