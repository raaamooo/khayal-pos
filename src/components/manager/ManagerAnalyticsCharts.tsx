"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendUp, 
  Clock, 
  ChartBar, 
  Coffee, 
  Sparkle,
  Fire,
  CalendarBlank
} from "@phosphor-icons/react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import styles from "./ManagerAnalyticsCharts.module.css";

interface ManagerAnalyticsChartsProps {
  orders: any[];
  categories: any[];
}

export default function ManagerAnalyticsCharts({
  orders,
  categories,
}: ManagerAnalyticsChartsProps) {
  const [activeChartTab, setActiveChartTab] = useState<"daily" | "hourly" | "products">("daily");

  // ── 7-Day Daily Revenue Calculation ──
  const dailyData = React.useMemo(() => {
    const days: Record<string, { label: string; revenue: number; ordersCount: number }> = {};
    const now = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const dateKey = d.toISOString().split("T")[0];
      const dayLabel = d.toLocaleDateString("en-US", { weekday: "short" });
      days[dateKey] = { label: dayLabel, revenue: 0, ordersCount: 0 };
    }

    for (const order of orders) {
      if (order.status === "CLOSED" || order.status === "SERVED" || order.status === "PENDING" || order.status === "BARISTA_DONE") {
        const orderDate = new Date(order.createdAt).toISOString().split("T")[0];
        if (days[orderDate]) {
          days[orderDate].revenue += Number(order.totalAmount || 0);
          days[orderDate].ordersCount += 1;
        }
      }
    }

    const list = Object.values(days);
    const maxRevenue = Math.max(...list.map((d) => d.revenue), 100);
    return { list, maxRevenue };
  }, [orders]);

  // ── Hourly Rush Traffic Curve ──
  const hourlyData = React.useMemo(() => {
    const hours: number[] = new Array(24).fill(0);
    for (const order of orders) {
      const h = new Date(order.createdAt).getHours();
      hours[h] += 1;
    }
    // Filter to typical cafe business hours (7 AM to 11 PM)
    const businessHours = [];
    for (let i = 7; i <= 23; i++) {
      const formatted = i > 12 ? `${i - 12}PM` : i === 12 ? "12PM" : `${i}AM`;
      businessHours.push({ hour: formatted, count: hours[i] });
    }
    const maxCount = Math.max(...businessHours.map((b) => b.count), 1);
    return { businessHours, maxCount };
  }, [orders]);

  // ── Top 5 Best Selling Items ──
  const topProducts = React.useMemo(() => {
    const itemMap: Record<string, { name: string; count: number; revenue: number }> = {};
    let totalMenuRevenue = 0;

    for (const order of orders) {
      for (const it of order.items || []) {
        const name = it.menuItem?.name || "Item";
        const linePrice = Number(it.menuItem?.price || 0) * it.quantity;
        totalMenuRevenue += linePrice;

        if (!itemMap[name]) {
          itemMap[name] = { name, count: 0, revenue: 0 };
        }
        itemMap[name].count += it.quantity;
        itemMap[name].revenue += linePrice;
      }
    }

    const sorted = Object.values(itemMap)
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 5);

    return { sorted, totalMenuRevenue };
  }, [orders]);

  return (
    <div className={styles.chartsContainer}>
      {/* ── Chart Navigation Tabs ── */}
      <div className={styles.chartNavRow}>
        <div className={styles.chartNavTabs}>
          <button
            type="button"
            className={`${styles.chartNavBtn} ${activeChartTab === "daily" ? styles.active : ""}`}
            onClick={() => setActiveChartTab("daily")}
          >
            <CalendarBlank size={16} weight="bold" />
            <span>7-Day Revenue</span>
          </button>
          <button
            type="button"
            className={`${styles.chartNavBtn} ${activeChartTab === "hourly" ? styles.active : ""}`}
            onClick={() => setActiveChartTab("hourly")}
          >
            <Clock size={16} weight="bold" />
            <span>Hourly Rush Curve</span>
          </button>
          <button
            type="button"
            className={`${styles.chartNavBtn} ${activeChartTab === "products" ? styles.active : ""}`}
            onClick={() => setActiveChartTab("products")}
          >
            <TrendUp size={16} weight="bold" />
            <span>Top Products</span>
          </button>
        </div>
      </div>

      {/* ── 1. 7-Day Revenue Bar Chart ── */}
      {activeChartTab === "daily" && (
        <Card className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h3 className={styles.chartTitle}>Daily Revenue Trend (Past 7 Days)</h3>
              <p className={styles.chartSubtitle}>Gross earnings across all settled orders</p>
            </div>
            <Badge variant="primary" size="md">Live POS Data</Badge>
          </div>

          <div className={styles.barChartWrapper}>
            <div className={styles.barsContainer}>
              {dailyData.list.map((day, idx) => {
                const heightPercent = Math.max(8, (day.revenue / dailyData.maxRevenue) * 100);
                const isToday = idx === dailyData.list.length - 1;

                return (
                  <div key={idx} className={styles.barColumn}>
                    <div className={styles.barTooltip}>
                      <span>{day.revenue} EGP</span>
                      <small>{day.ordersCount} orders</small>
                    </div>

                    <div className={styles.barTrack}>
                      <motion.div
                        className={`${styles.barFill} ${isToday ? styles.todayBar : ""}`}
                        initial={{ height: 0 }}
                        animate={{ height: `${heightPercent}%` }}
                        transition={{ type: "spring", stiffness: 120, damping: 15, delay: idx * 0.05 }}
                      />
                    </div>

                    <span className={`${styles.barLabel} ${isToday ? styles.todayLabel : ""}`}>
                      {day.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      )}

      {/* ── 2. Hourly Peak Rush Curve ── */}
      {activeChartTab === "hourly" && (
        <Card className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h3 className={styles.chartTitle}>Hourly Traffic & Rush Intensity</h3>
              <p className={styles.chartSubtitle}>Order frequency distribution from 7:00 AM to 11:00 PM</p>
            </div>
            <Badge variant="warning" size="md">
              <Fire size={14} weight="fill" /> Rush Analysis
            </Badge>
          </div>

          <div className={styles.barChartWrapper}>
            <div className={styles.barsContainer}>
              {hourlyData.businessHours.map((h, idx) => {
                const heightPercent = Math.max(6, (h.count / hourlyData.maxCount) * 100);
                const isHighRush = heightPercent > 65;

                return (
                  <div key={idx} className={styles.barColumn}>
                    <div className={styles.barTooltip}>
                      <span>{h.count} Orders</span>
                      <small>{h.hour}</small>
                    </div>

                    <div className={styles.barTrack}>
                      <motion.div
                        className={`${styles.barFill} ${isHighRush ? styles.rushHourBar : styles.regularHourBar}`}
                        initial={{ height: 0 }}
                        animate={{ height: `${heightPercent}%` }}
                        transition={{ type: "spring", stiffness: 140, damping: 18, delay: idx * 0.03 }}
                      />
                    </div>

                    <span className={styles.barLabel} style={{ fontSize: "10px" }}>
                      {h.hour}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      )}

      {/* ── 3. Top Products Ranking ── */}
      {activeChartTab === "products" && (
        <Card className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h3 className={styles.chartTitle}>Top 5 Best-Selling Items</h3>
              <p className={styles.chartSubtitle}>Ranked by cumulative revenue contribution</p>
            </div>
            <Badge variant="success" size="md">
              <Sparkle size={14} weight="fill" /> Top Performers
            </Badge>
          </div>

          <div className={styles.topProductsList}>
            {topProducts.sorted.map((prod, idx) => {
              const sharePercent = topProducts.totalMenuRevenue > 0 
                ? Math.round((prod.revenue / topProducts.totalMenuRevenue) * 100) 
                : 0;

              return (
                <div key={prod.name} className={styles.topProductRow}>
                  <div className={styles.prodRankBadge}>#{idx + 1}</div>

                  <div className={styles.prodInfoCol}>
                    <div className={styles.prodNameRow}>
                      <span className={styles.prodName}>{prod.name}</span>
                      <span className={styles.prodRevenue}>{prod.revenue} EGP</span>
                    </div>

                    <div className={styles.prodProgressBarTrack}>
                      <motion.div
                        className={styles.prodProgressBarFill}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.max(5, sharePercent)}%` }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.08 }}
                      />
                    </div>

                    <div className={styles.prodMetaRow}>
                      <span>{prod.count} units sold</span>
                      <span>{sharePercent}% of total drink revenue</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
}
