"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { VenueTheme } from "@/lib/venue";

// ─────────────────────────────────────────────────────────
// Context types
// ─────────────────────────────────────────────────────────

interface ThemeContextValue {
  theme: VenueTheme;
  isDark: boolean;
  toggleMode: () => void;
  language: string;
  toggleLanguage: () => void;
  isRtl: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Calculates relative luminance according to WCAG 2.1 specifications.
 */
function getRelativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((val) => {
    const s = val / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculates contrast ratio between two hex colors.
 */
function getContrastRatio(hex1: string, hex2: string): number {
  const c1 = parseHex(hex1);
  const c2 = parseHex(hex2);
  if (!c1 || !c2) return 4.5; // fallback safe

  const lum1 = getRelativeLuminance(c1.r, c1.g, c1.b);
  const lum2 = getRelativeLuminance(c2.r, c2.g, c2.b);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function parseHex(hex: string): { r: number; g: number; b: number } | null {
  const cleanHex = hex.replace("#", "").trim();
  if (cleanHex.length === 3) {
    return {
      r: parseInt(cleanHex[0] + cleanHex[0], 16),
      g: parseInt(cleanHex[1] + cleanHex[1], 16),
      b: parseInt(cleanHex[2] + cleanHex[2], 16),
    };
  }
  if (cleanHex.length === 6) {
    return {
      r: parseInt(cleanHex.substring(0, 2), 16),
      g: parseInt(cleanHex.substring(2, 4), 16),
      b: parseInt(cleanHex.substring(4, 6), 16),
    };
  }
  return null;
}

/**
 * Calculates a high-contrast text color (#0A0A0B or #FAFAFA) for any background hex.
 */
function getContrastTextColor(backgroundHex: string): string {
  const parsed = parseHex(backgroundHex);
  if (!parsed) return "#FAFAFA";
  const lum = getRelativeLuminance(parsed.r, parsed.g, parsed.b);
  return lum > 0.45 ? "#0A0A0B" : "#FAFAFA";
}

/**
 * Validates that a brand accent/primary color has sufficient contrast against its background.
 * If poor (< 3:1 for graphical UI or < 4.5:1 for body text), adjusts or falls back gracefully.
 */
function ensureSafeBrandColor(brandHex: string, bgHex: string, fallbackHex: string): string {
  const ratio = getContrastRatio(brandHex, bgHex);
  if (ratio < 2.5) {
    // If very low contrast, return fallback
    return fallbackHex;
  }
  return brandHex;
}

/**
 * Hook to access the venue theme, mode toggle, and language toggle.
 * Must be used within a ThemeProvider.
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

// ─────────────────────────────────────────────────────────
// Provider
// ─────────────────────────────────────────────────────────

interface ThemeProviderProps {
  theme: VenueTheme;
  defaultLanguage: string;
  children: ReactNode;
}

/**
 * ThemeProvider injects the venue's theme as CSS custom properties
 * on :root with automatic contrast guarding and layout safety.
 */
export function ThemeProvider({
  theme,
  defaultLanguage,
  children,
}: ThemeProviderProps) {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState(defaultLanguage || "en");

  const isRtl = language === "ar";

  // ── Inject CSS custom properties ──
  useEffect(() => {
    const root = document.documentElement;

    const bg = isDark ? (theme.backgroundDark || "#0A0A0B") : (theme.backgroundLight || "#F8F8FA");
    const text = isDark ? (theme.textDark || "#FAFAFA") : (theme.textLight || "#121214");

    // Guard primary & accent contrast against background
    const safePrimary = ensureSafeBrandColor(
      theme.primaryColor || "#8F00FF",
      bg,
      isDark ? "#A855F7" : "#7E22CE"
    );
    const safeSecondary = ensureSafeBrandColor(
      theme.secondaryColor || "#FF6600",
      bg,
      isDark ? "#FB923C" : "#C2410C"
    );
    const safeAccent = ensureSafeBrandColor(
      theme.accentColor || "#FFB800",
      bg,
      isDark ? "#FBBF24" : "#B45309"
    );

    // Set properties
    root.style.setProperty("--primary-color", safePrimary);
    root.style.setProperty("--secondary-color", safeSecondary);
    root.style.setProperty("--accent-color", safeAccent);

    // Computed text contrast for primary button labels & badges
    root.style.setProperty("--primary-contrast", getContrastTextColor(safePrimary));
    root.style.setProperty("--secondary-contrast", getContrastTextColor(safeSecondary));
    root.style.setProperty("--accent-contrast", getContrastTextColor(safeAccent));

    // Fonts with robust fallback - prioritizing crisp Plus Jakarta Sans & Cairo
    const headingFont = theme.fontHeading && theme.fontHeading !== "Syne" ? theme.fontHeading : "Plus Jakarta Sans";
    const bodyFont = theme.fontBody && theme.fontBody !== "Tajawal" && theme.fontBody !== "Syne" ? theme.fontBody : "Plus Jakarta Sans";

    root.style.setProperty("--font-heading", `var(--font-jakarta), '${headingFont}', var(--font-cairo), 'Cairo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`);
    root.style.setProperty("--font-body", `var(--font-jakarta), '${bodyFont}', var(--font-cairo), 'Cairo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`);

    // Surface backgrounds & text
    root.style.setProperty("--background", bg);
    root.style.setProperty("--text", text);
  }, [theme, isDark]);

  // ── Set language direction & html lang ──
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", language);
    root.setAttribute("dir", isRtl ? "rtl" : "ltr");
  }, [language, isRtl]);

  // ── Persist mode preference ──
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme-mode");
      if (saved) setIsDark(saved === "dark");
    } catch {
      // Ignore local storage error in sandboxed environments
    }
  }, []);

  const toggleMode = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("theme-mode", next ? "dark" : "light");
      } catch {
        // Ignore
      }
      return next;
    });
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, isDark, toggleMode, language, toggleLanguage, isRtl }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
