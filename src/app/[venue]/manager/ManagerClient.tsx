"use client";

import { useState } from "react";
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
  TrendUp
} from "@phosphor-icons/react";

export default function ManagerClient({
  venue,
  initialOrders,
  initialStaff,
  initialTables,
  revenue,
}: {
  venue: any;
  initialOrders: any[];
  initialStaff: any[];
  initialTables: any[];
  revenue: any;
}) {
  const [activeTab, setActiveTab] = useState<
    "accounting" | "orders" | "workers" | "qr"
  >("accounting");

  // Basic Accounting Aggregations
  const totalRevenue = revenue?.totalAmount || 0;
  const totalTips = revenue?.tipAmount || 0;

  const cashOrders = initialOrders.filter(
    (o) => o.status === "CLOSED" && o.paymentMethod === "CASH"
  );
  const visaOrders = initialOrders.filter(
    (o) => o.status === "CLOSED" && o.paymentMethod === "VISA"
  );
  const cashRevenue = cashOrders.reduce((sum, o) => sum + Number(o.totalAmount), 0);
  const visaRevenue = visaOrders.reduce((sum, o) => sum + Number(o.totalAmount), 0);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Badge variant="warning">With Barista</Badge>;
      case "BARISTA_DONE":
        return <Badge variant="info">With Waiter</Badge>;
      case "WAITER_DONE":
        return <Badge variant="primary">Delivered (Unpaid)</Badge>;
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
              {venue.name} • Real-time Operations & Insights
            </p>
          </div>
        </div>

        {activeTab === "qr" && (
          <Button 
            variant="primary" 
            size="md" 
            onClick={() => window.print()}
            leftIcon={<Printer size={18} weight="bold" />}
          >
            Print QR Stickers
          </Button>
        )}
      </header>

      {/* ── Navigation Tabs ── */}
      <nav className={styles.sectionTabs} aria-label="Manager Navigation">
        <button
          className={`${styles.sectionTab} ${
            activeTab === "accounting" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("accounting")}
        >
          <CurrencyDollar size={18} weight="bold" />
          <span>Accounting</span>
        </button>
        <button
          className={`${styles.sectionTab} ${
            activeTab === "orders" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("orders")}
        >
          <Receipt size={18} weight="bold" />
          <span>All Orders ({initialOrders.length})</span>
        </button>
        <button
          className={`${styles.sectionTab} ${
            activeTab === "workers" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("workers")}
        >
          <Users size={18} weight="bold" />
          <span>Staff & Tips ({initialStaff.length})</span>
        </button>
        <button
          className={`${styles.sectionTab} ${
            activeTab === "qr" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("qr")}
        >
          <QrCode size={18} weight="bold" />
          <span>QR Generator</span>
        </button>
      </nav>

      <div className={styles.content}>
        {/* ── Accounting Tab ── */}
        {activeTab === "accounting" && (
          <div className={styles.accountingSection}>
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
                  <span className={styles.metricLabel}>Cash Sales</span>
                </div>
                <span className={styles.metricValue}>{cashRevenue} <small>EGP</small></span>
              </Card>

              <Card className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <span className={styles.metricLabel}>Card / POS Sales</span>
                </div>
                <span className={styles.metricValue}>{visaRevenue} <small>EGP</small></span>
              </Card>

              <Card className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <span className={styles.metricLabel}>Tips Collected</span>
                  <Sparkle size={18} weight="fill" color="var(--accent-color)" />
                </div>
                <span className={styles.metricValue}>{totalTips} <small>EGP</small></span>
              </Card>
            </div>

            {/* Visual Breakdown Bar */}
            <Card className={styles.chartPanel}>
              <h3 className={styles.panelHeading}>Payment Method Distribution</h3>
              <div className={styles.mockChart}>
                <div
                  className={styles.mockChartBarCash}
                  style={{ width: `${Math.max(5, (cashRevenue / (totalRevenue || 1)) * 100)}%` }}
                >
                  Cash ({(cashRevenue / (totalRevenue || 1) * 100).toFixed(0)}%)
                </div>
                <div
                  className={styles.mockChartBarVisa}
                  style={{ width: `${Math.max(5, (visaRevenue / (totalRevenue || 1)) * 100)}%` }}
                >
                  Card ({(visaRevenue / (totalRevenue || 1) * 100).toFixed(0)}%)
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* ── Orders Tab ── */}
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
                  {initialOrders.map((order) => (
                    <tr key={order.id}>
                      <td>
                        <code className={styles.shortCode}>
                          #{order.id.slice(-5).toUpperCase()}
                        </code>
                      </td>
                      <td>
                        <strong>{order.customerName || "Walk-in Guest"}</strong>
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

        {/* ── Workers Tab ── */}
        {activeTab === "workers" && (
          <div className={styles.workersSection}>
            <Card className={styles.tablePanel}>
              <div className={styles.panelHeader}>
                <h3 className={styles.panelHeading}>Active Staff Roster</h3>
                <Button variant="primary" size="sm" leftIcon={<Plus size={16} weight="bold" />}>
                  Add Staff Member
                </Button>
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
                    {initialStaff.map((staff) => (
                      <tr key={staff.id}>
                        <td>
                          <strong>{staff.name}</strong>
                        </td>
                        <td>
                          <Badge variant="primary" size="sm">{staff.role}</Badge>
                        </td>
                        <td className={styles.emailCell}>{staff.email}</td>
                        <td>
                          <Badge variant={staff.active ? "success" : "default"} size="sm">
                            {staff.active ? "Active Duty" : "Off Duty"}
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
                  <h4>Automated Tip Split Distribution</h4>
                </div>
                <div className={styles.tipSplitMetrics}>
                  <div>
                    <span>Total Shift Tips</span>
                    <strong>{totalTips} EGP</strong>
                  </div>
                  <div>
                    <span>Active Team Members</span>
                    <strong>{initialStaff.length}</strong>
                  </div>
                  <div className={styles.tipSplitPerPerson}>
                    <span>Estimated Split</span>
                    <strong>{(totalTips / (initialStaff.length || 1)).toFixed(2)} EGP <small>/ person</small></strong>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* ── QR Generator Tab ── */}
        {activeTab === "qr" && (
          <div>
            <div className={styles.qrHeaderInfo}>
              <p>
                Display these high-density QR stickers at physical tables. 
                Customers scan to access the dynamic menu and submit orders.
              </p>
            </div>

            <div className={styles.qrGrid}>
              {initialTables.map((table) => {
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
                    
                    <span className={styles.qrInstruction}>Scan for Digital Menu</span>
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
