import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suki Platform — Official Legal & Support Hub",
  description:
    "Privacy policy, account deletion, terms of service, and support for Suki Perks (customer loyalty) and Suki Merchant (POS app).",
};

const legalCards = [
  {
    id: "privacy-policy",
    icon: "🔒",
    title: "Privacy Policy",
    description:
      "How we collect, use, and protect your data across Suki Perks and Suki Merchant, including Firebase, Google Sign-In, and third-party services.",
    href: "/privacy-policy",
    badge: "Mandatory",
    badgeClass: "badge-green",
  },
  {
    id: "account-deletion",
    icon: "🗑️",
    title: "Account Deletion",
    description:
      "Step-by-step guide to permanently delete your Suki Perks or Suki Merchant account and remove all associated data.",
    href: "/account-deletion",
    badge: "Mandatory",
    badgeClass: "badge-green",
  },
  {
    id: "terms",
    icon: "📋",
    title: "Terms of Service",
    description:
      "The End User License Agreement governing use of Suki Perks loyalty features and Suki Merchant POS & subscription services.",
    href: "/terms",
    badge: "Recommended",
    badgeClass: "badge-amber",
  },
  {
    id: "support",
    icon: "💬",
    title: "Support",
    description:
      "Get help with Suki Perks or Suki Merchant. Browse FAQs or contact our team directly for account, payment, and technical issues.",
    href: "/support",
    badge: "Mandatory",
    badgeClass: "badge-green",
  },
];

const apps = [
  {
    id: "suki-perks",
    color: "#1DDC8F",
    colorBg: "rgba(29,220,143,0.1)",
    colorBorder: "rgba(29,220,143,0.25)",
    label: "Suki Perks",
    version: "v1.0.0",
    description: "Customer Loyalty App",
    detail: "Earn points, redeem rewards, track orders, and discover partner merchants — all in one app.",
    icon: "⭐",
  },
  {
    id: "suki-merchant",
    color: "#F5C542",
    colorBg: "rgba(245,197,66,0.1)",
    colorBorder: "rgba(245,197,66,0.25)",
    label: "Suki Merchant",
    version: "v1.1.2",
    description: "POS & Merchant App",
    detail: "Manage your store, process orders, track sales reports, and engage your loyal suki customers.",
    icon: "🏪",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "6rem 1.5rem 5rem",
          textAlign: "center",
        }}
      >
        {/* Ambient blobs */}
        <div
          className="glow-blob animate-pulse-glow"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(29,220,143,0.18) 0%, transparent 70%)",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <div
          className="glow-blob animate-pulse-glow"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(245,197,66,0.12) 0%, transparent 70%)",
            bottom: "-100px",
            right: "10%",
            animationDelay: "2s",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "720px", margin: "0 auto" }}>
          {/* Logo mark */}
          <div
            className="animate-fade-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #1DDC8F, #F5C542)",
              fontSize: "2rem",
              marginBottom: "1.75rem",
              boxShadow: "0 0 48px rgba(29,220,143,0.35)",
            }}
          >
            🛒
          </div>

          <h1
            className="animate-fade-up-2"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", marginBottom: "1.25rem" }}
          >
            <span className="gradient-text">Suki Platform</span>
            <br />
            <span style={{ color: "#F2F6F4", fontWeight: 600, fontSize: "0.7em" }}>
              Legal & Support Hub
            </span>
          </h1>

          <p
            className="animate-fade-up-3"
            style={{
              fontSize: "1.0625rem",
              color: "var(--suki-text-muted)",
              lineHeight: 1.7,
              maxWidth: "540px",
              margin: "0 auto 2.5rem",
            }}
          >
            Official compliance pages for{" "}
            <strong style={{ color: "#1DDC8F" }}>Suki Perks</strong> and{" "}
            <strong style={{ color: "#F5C542" }}>Suki Merchant</strong> — 
            covering all Google Play Store requirements.
          </p>

          {/* Play Store badge */}
          <div
            className="animate-fade-up-3"
            style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}
          >
            <span className="badge badge-green">✓ Play Store Compliant</span>
            <span className="badge badge-amber">Philippines 🇵🇭</span>
          </div>
        </div>
      </section>

      {/* ── Legal Pages Grid ── */}
      <section style={{ padding: "0 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--suki-mint)",
                marginBottom: "0.75rem",
              }}
            >
              Compliance Pages
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F2F6F4" }}>
              Play Store Requirements
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {legalCards.map((card) => (
              <Link
                key={card.id}
                id={`card-${card.id}`}
                href={card.href}
                style={{ textDecoration: "none" }}
              >
                <article
                  className="glass-card"
                  style={{ padding: "1.75rem", height: "100%", cursor: "pointer" }}
                >
                  <div
                    style={{
                      fontSize: "1.75rem",
                      marginBottom: "1rem",
                      display: "block",
                    }}
                  >
                    {card.icon}
                  </div>
                  <div style={{ marginBottom: "0.625rem" }}>
                    <span className={`badge ${card.badgeClass}`} style={{ fontSize: "0.6875rem" }}>
                      {card.badge}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "#F2F6F4",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--suki-text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {card.description}
                  </p>
                  <div
                    style={{
                      marginTop: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      color: "var(--suki-mint)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                    }}
                  >
                    View page
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Apps Section ── */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--suki-mint)",
                marginBottom: "0.75rem",
              }}
            >
              Our Applications
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F2F6F4" }}>
              Two Apps, One Platform
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {apps.map((app) => (
              <div
                key={app.id}
                id={`app-${app.id}`}
                style={{
                  background: app.colorBg,
                  border: `1px solid ${app.colorBorder}`,
                  borderRadius: "1.5rem",
                  padding: "2rem",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "2rem" }}>{app.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "1.125rem", color: app.color, marginBottom: "0.125rem" }}>
                      {app.label}
                    </p>
                    <p style={{ fontSize: "0.8125rem", color: "var(--suki-text-muted)", fontWeight: 500 }}>
                      {app.description}
                    </p>
                  </div>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: app.color,
                      background: `rgba(255,255,255,0.06)`,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "999px",
                      border: `1px solid ${app.colorBorder}`,
                    }}
                  >
                    {app.version}
                  </span>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--suki-text-muted)", lineHeight: 1.65 }}>
                  {app.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
