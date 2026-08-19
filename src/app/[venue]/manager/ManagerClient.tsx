"use client";

import { useState, useEffect } from "react";
import styles from "./manager.module.css";
import { QRCodeSVG } from "qrcode.react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  ChartLineUp, 
  CurrencyDollar, 
  Receipt, 
  Users, 
  QrCode, 
  Printer, 
  Plus, 
  Sparkle,
  TrendUp,
  Package,
  ArrowsClockwise,
  Coins
} from "@phosphor-icons/react";
import ManagerAnalyticsCharts from "@/components/manager/ManagerAnalyticsCharts";
import LowStockAlerts, { IngredientItem } from "@/components/manager/LowStockAlerts";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { getManagerData } from "../admin-actions";
import { playTick } from "@/lib/sound";

export default function ManagerClient({
  venue,
  initialOrders,
  initialStaff,
  initialTables,
  initialIngredients = [],
  initialCategories = [],
  revenue,
  totalClosedOrdersCount = 0,
}: {
  venue: any;
  initialOrders: any[];
  initialStaff: any[];
  initialTables: any[];
  initialIngredients?: any[];
  initialCategories?: any[];
  revenue: any;
  totalClosedOrdersCount?: number;
}) {
  const [activeTab, setActiveTab] = useState<
    "analytics" | "inventory" | "orders" | "workers" | "qr"
  >("analytics");

  const [orders, setOrders] = useState(initialOrders);
  const [staff, setStaff] = useState(initialStaff);
  const [tables, setTables] = useState(initialTables);
  const [ingredients, setIngredients] = useState<IngredientItem[]>(initialIngredients);
  const [categories, setCategories] = useState(initialCategories);
  const [revenueData, setRevenueData] = useState(revenue);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshData = async (silent = false) => {
    if (!silent) setIsRefreshing(true);
    try {
      const data = await getManagerData(venue.id);
      setOrders(data.orders);
      setStaff(data.staff);
      setTables(data.tables);
      setIngredients(data.ingredients || []);
      setCategories(data.categories || []);
      setRevenueData(data.revenue);
    } finally {
      if (!silent) setIsRefreshing(false);
    }
  };

  // Real-time SSE synchronization
  useEffect(() => {
    const eventSource = new EventSource(`/api/venues/${venue.slug}/stream`);
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "new-order" || data.type === "order-status-change" || data.type === "out-of-stock") {
          refreshData(true);
        }
      } catch (e) {
        console.error("Failed to parse SSE event", e);
      }
    };
    return () => eventSource.close();
  }, [venue.slug]);

  // Basic Accounting Aggregations
  const totalRevenue = revenueData?.totalAmount || 0;
  const totalTips = revenueData?.tipAmount || 0;
  const closedCount = orders.filter((o) => o.status === "CLOSED" || o.status === "SERVED").length;
  const avgOrderValue = closedCount > 0 ? Math.round(totalRevenue / closedCount) : 0;

  const cashOrders = orders.filter(
    (o) => (o.status === "CLOSED" || o.status === "SERVED") && o.paymentMethod === "CASH"
  );
  const visaOrders = orders.filter(
    (o) => (o.status === "CLOSED" || o.status === "SERVED") && o.paymentMethod === "VISA"
  );
  const cashRevenue = cashOrders.reduce((sum, o) => sum + Number(o.totalAmount || 0), 0);
  const visaRevenue = visaOrders.reduce((sum, o) => sum + Number(o.totalAmount || 0), 0);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Badge variant="warning">With Barista</Badge>;
      case "PREPARING":
        return <Badge variant="primary">Brewing</Badge>;
      case "BARISTA_DONE":
        return <Badge variant="info">With Waiter</Badge>;
      case "SERVED":
        return <Badge variant="primary">Delivered (Pending Pay)</Badge>;
      case "CLOSED":
        return <Badge variant="success">Paid & Settled</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.managerIconBadge}>
            <ChartLineUp size={24} weight="fill" />
          </div>
          <div>
            <h1 className={styles.title}>Manager Hub</h1>
            <p className={styles.subtitle}>
              {venue.name} • Real-time Operations, Revenue & Intelligence
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <LanguageToggle />
          <Button 
            variant="secondary" 
            size="md" 
            onClick={() => refreshData(false)}
            isLoading={isRefreshing}
            leftIcon={<ArrowsClockwise size={18} weight="bold" />}
          >
            Refresh Data
          </Button>

          {activeTab === "qr" && (
            <Button 
              variant="primary" 
              size="md" 
              onClick={() => window.print()}
              leftIcon={<Printer size={18} weight="bold" />}
            >
              Print Stickers
            </Button>
          )}
        </div>
      </header>

      {/* ── Navigation Tabs ── */}
      <nav className={styles.sectionTabs} aria-label="Manager Navigation">
        <button
          className={`${styles.sectionTab} ${activeTab === "analytics" ? styles.active : ""}`}
          onClick={() => {
            playTick();
            setActiveTab("analytics");
          }}
        >
          <CurrencyDollar size={18} weight="bold" />
          <span>Analytics</span>
        </button>
        <button
          className={`${styles.sectionTab} ${activeTab === "inventory" ? styles.active : ""}`}
          onClick={() => {
            playTick();
            setActiveTab("inventory");
          }}
        >
          <Package size={18} weight="bold" />
          <span>Stock Control ({ingredients.length})</span>
        </button>
        <button
          className={`${styles.sectionTab} ${activeTab === "orders" ? styles.active : ""}`}
          onClick={() => {
            playTick();
            setActiveTab("orders");
          }}
        >
          <Receipt size={18} weight="bold" />
          <span>Orders ({orders.length})</span>
        </button>
        <button
          className={`${styles.sectionTab} ${activeTab === "workers" ? styles.active : ""}`}
          onClick={() => {
            playTick();
            setActiveTab("workers");
          }}
        >
          <Users size={18} weight="bold" />
          <span>Staff & Tips ({staff.length})</span>
        </button>
        <button
          className={`${styles.sectionTab} ${activeTab === "qr" ? styles.active : ""}`}
          onClick={() => {
            playTick();
            setActiveTab("qr");
          }}
        >
          <QrCode size={18} weight="bold" />
          <span>QR Generator</span>
        </button>
      </nav>

      <div className={styles.content}>
        {/* ── 1. Analytics Tab ── */}
        {activeTab === "analytics" && (
          <div className={styles.accountingSection}>
            {/* KPI Metrics Grid */}
            <div className={styles.metricGrid}>
              <Card className={styles.metricCardPrimary}>
                <div className={styles.metricHeader}>
                  <span className={styles.metricLabel}>Total Revenue</span>
                  <TrendUp size={20} weight="bold" color="var(--primary-color)" />
                </div>
                <span className={styles.metricValue}>{totalRevenue} <small>EGP</small></span>
              </Card>

              <Card className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <span className={styles.metricLabel}>Average Order (AOV)</span>
                  <Coins size={20} weight="bold" color="var(--accent-color)" />
                </div>
                <span className={styles.metricValue}>{avgOrderValue} <small>EGP</small></span>
              </Card>

              <Card className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <span className={styles.metricLabel}>Settled Orders</span>
                  <Receipt size={20} weight="bold" color="var(--color-primary-light)" />
                </div>
                <span className={styles.metricValue}>{closedCount} <small>orders</small></span>
              </Card>

              <Card className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <span className={styles.metricLabel}>Tips Collected</span>
                  <Sparkle size={18} weight="fill" color="var(--accent-color)" />
                </div>
                <span className={styles.metricValue}>{totalTips} <small>EGP</small></span>
              </Card>
            </div>

            {/* Interactive 7-Day & Hourly Charts */}
            <ManagerAnalyticsCharts orders={orders} categories={categories} />

            {/* Payment Method Distribution */}
            <Card className={styles.chartPanel}>
              <h3 className={styles.panelHeading}>Payment Method Distribution</h3>
              <div className={styles.mockChart}>
                <div
                  className={styles.mockChartBarCash}
                  style={{ width: `${Math.max(10, (cashRevenue / (totalRevenue || 1)) * 100)}%` }}
                >
                  Cash ({(cashRevenue / (totalRevenue || 1) * 100).toFixed(0)}%)
                </div>
                <div
                  className={styles.mockChartBarVisa}
                  style={{ width: `${Math.max(10, (visaRevenue / (totalRevenue || 1)) * 100)}%` }}
                >
                  Card POS ({(visaRevenue / (totalRevenue || 1) * 100).toFixed(0)}%)
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* ── 2. Live Stock Controller Tab ── */}
        {activeTab === "inventory" && (
          <LowStockAlerts
            venueId={venue.id}
            ingredients={ingredients}
            onRestockComplete={() => refreshData(true)}
          />
        )}

        {/* ── 3. Orders Tab ── */}
        {activeTab === "orders" && (
          <Card className={styles.tablePanel}>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Order #</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>
                        <code className={styles.shortCode}>
                          #{order.id.slice(-5).toUpperCase()}
                        </code>
                      </td>
                      <td>
                        <strong>{order.customerName || "Table Guest"}</strong>
                      </td>
                      <td className={styles.orderTotalCell}>
                        {Number(order.totalAmount)} EGP
                      </td>
                      <td>{getStatusBadge(order.status)}</td>
                      <td className={styles.orderTimeCell}>
                        {new Date(order.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* ── 4. Workers Tab ── */}
        {activeTab === "workers" && (
          <div className={styles.workersSection}>
            <Card className={styles.tablePanel}>
              <div className={styles.panelHeader}>
                <h3 className={styles.panelHeading}>Active Staff Roster</h3>
              </div>
              
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staff.map((s) => (
                      <tr key={s.id}>
                        <td>
                          <strong>{s.name}</strong>
                        </td>
                        <td>
                          <Badge variant="primary" size="sm">{s.role}</Badge>
                        </td>
                        <td className={styles.emailCell}>{s.email}</td>
                        <td>
                          <Badge variant={s.active ? "success" : "default"} size="sm">
                            {s.active ? "Active Duty" : "Off Duty"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.tipSplitPanel}>
                <div className={styles.tipSplitHeader}>
                  <Sparkle size={20} weight="fill" color="var(--accent-color)" />
                  <h4>Automated Team Tip Pool Distribution</h4>
                </div>
                <div className={styles.tipSplitMetrics}>
                  <div>
                    <span>Total Shift Tips</span>
                    <strong>{totalTips} EGP</strong>
                  </div>
                  <div>
                    <span>Active Team Members</span>
                    <strong>{staff.length}</strong>
                  </div>
                  <div className={styles.tipSplitPerPerson}>
                    <span>Fair Share Split</span>
                    <strong>{(totalTips / (staff.length || 1)).toFixed(2)} EGP <small>/ person</small></strong>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* ── 5. QR Generator Tab ── */}
        {activeTab === "qr" && (
          <div>
            <div className={styles.qrHeaderInfo}>
              <p>
                Display these high-density QR stickers at physical tables. 
                Customers scan to open the digital menu and submit orders.
              </p>
            </div>

            <div className={styles.qrGrid}>
              {tables.map((table) => {
                const origin = typeof window !== "undefined" ? window.location.origin : "https://khayal.co";
                const url = `${origin}/${venue.slug}/t/${table.qrToken}`;

                return (
                  <Card key={table.id} className={styles.qrCard}>
                    <div className={styles.qrVenueName}>{venue.name}</div>
                    <h2 className={styles.qrTableLabel}>{table.label}</h2>
                    
                    <div className={styles.qrCodeWrapper}>
                      <QRCodeSVG 
                        value={url} 
                        size={160} 
                        level="H" 
                        fgColor="#000000"
                        bgColor="#FFFFFF"
                      />
                    </div>
                    
                    <span className={styles.qrInstruction}>Scan for Menu & Ordering</span>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
