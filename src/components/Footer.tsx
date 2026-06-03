"use client";

import Link from "next/link";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Account Deletion", href: "/account-deletion" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Support", href: "/support" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--suki-surface)",
        borderTop: "1px solid var(--suki-border-2)",
        padding: "3rem 1.5rem 2rem",
        marginTop: "auto",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "space-between",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "320px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.875rem" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "7px",
                  background: "linear-gradient(135deg, #1DDC8F, #F5C542)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8125rem",
                  fontWeight: 800,
                  color: "#0B1F16",
                }}
              >
                S
              </div>
              <span style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#F2F6F4" }}>
                Suki Platform
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--suki-text-muted)", lineHeight: 1.7 }}>
              Empowering local businesses and their loyal customers across the Philippines.
            </p>
          </div>

          {/* Apps */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--suki-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Our Apps
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1DDC8F", flexShrink: 0 }} />
                <span style={{ fontSize: "0.875rem", color: "var(--suki-text-muted)", fontWeight: 500 }}>Suki Perks — Customer Loyalty</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F5C542", flexShrink: 0 }} />
                <span style={{ fontSize: "0.875rem", color: "var(--suki-text-muted)", fontWeight: 500 }}>Suki Merchant — POS & Reports</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--suki-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Legal & Support
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ fontSize: "0.875rem", color: "var(--suki-text-muted)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#1DDC8F")}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--suki-text-muted)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Bottom */}
        <div
          style={{
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "var(--suki-text-muted)" }}>
            &copy; {year} Suki Platform. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8125rem", color: "var(--suki-text-muted)" }}>
            Philippines 🇵🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
