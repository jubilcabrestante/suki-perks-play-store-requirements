"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Account Deletion", href: "/account-deletion" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Support", href: "/support" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(16,34,22,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #1DDC8F, #F5C542)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.875rem",
              fontWeight: 800,
              color: "#0B1F16",
              flexShrink: 0,
            }}
          >
            S
          </div>
          <span
            style={{
              fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#F2F6F4",
              letterSpacing: "-0.02em",
            }}
          >
            Suki Platform
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}
          className="hidden-mobile"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.4rem 0.875rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#9BB0A8",
                textDecoration: "none",
                transition: "color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#1DDC8F";
                (e.target as HTMLAnchorElement).style.background = "rgba(29,220,143,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#9BB0A8";
                (e.target as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#9BB0A8",
            cursor: "pointer",
            padding: "0.5rem",
          }}
          className="show-mobile"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(24,52,34,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "0.75rem 0.875rem",
                borderRadius: "0.5rem",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "#9BB0A8",
                textDecoration: "none",
                display: "block",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
