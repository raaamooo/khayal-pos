"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { playTick } from "@/lib/sound";
import styles from "./LanguageToggle.module.css";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`${styles.toggleContainer} ${className || ""}`}>
      <button
        type="button"
        className={`${styles.toggleBtn} ${lang === "en" ? styles.active : ""}`}
        onClick={() => {
          playTick();
          setLang("en");
        }}
        aria-label="Switch to English"
      >
        <span className={styles.flagEmoji}>🇬🇧</span>
        <span>EN</span>
      </button>

      <button
        type="button"
        className={`${styles.toggleBtn} ${lang === "ar" ? styles.active : ""}`}
        onClick={() => {
          playTick();
          setLang("ar");
        }}
        aria-label="التبديل إلى العربية"
      >
        <span className={styles.flagEmoji}>🇪🇬</span>
        <span>عربي</span>
      </button>
    </div>
  );
}
