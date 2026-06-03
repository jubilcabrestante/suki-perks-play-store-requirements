"use client";

import { useState } from "react";

const perksQuestions = [
  {
    id: "perks-q1",
    q: "How do I earn loyalty points on Suki Perks?",
    a: "You earn points automatically whenever you complete a qualifying order from a partner merchant on Suki Perks. Points are credited to your account once the order is confirmed. The number of points per peso may vary per merchant.",
  },
  {
    id: "perks-q2",
    q: "Why can't I log in to my Suki Perks account?",
    a: "Make sure your phone number or Google account is correctly entered. If you use Google Sign-In, ensure you are signed in to the same Google account. If you still can't log in, try resetting your PIN or contact our support team.",
  },
  {
    id: "perks-q3",
    q: "How do I redeem my loyalty rewards?",
    a: "Go to the Rewards section on the app, choose a reward you want to redeem, and tap 'Redeem'. You'll need to have enough points and the merchant must be a participating partner. The reward QR code will be shown to the cashier.",
  },
  {
    id: "perks-q4",
    q: "My order shows as delivered but I didn't receive it.",
    a: "Please contact the partner merchant directly for delivery issues. If you need further assistance, contact Suki Perks support with your order ID and we will investigate.",
  },
  {
    id: "perks-q5",
    q: "How do I update my profile information?",
    a: "Go to Profile > Edit Profile. You can update your name, photo, and other account details. Phone number and email changes require re-verification.",
  },
  {
    id: "perks-q6",
    q: "Is my payment information stored in the app?",
    a: "Suki Perks does not store credit card or payment information directly. All payments are processed through secure third-party payment gateways.",
  },
];

const merchantQuestions = [
  {
    id: "merchant-q1",
    q: "How do I add my products to Suki Merchant?",
    a: "Go to Products > Add Product. Fill in the product name, price, category, and optionally a photo. Products will be live for customers immediately after saving.",
  },
  {
    id: "merchant-q2",
    q: "How do I manage my subscription?",
    a: "Go to Settings > Subscription. You can view your current plan, upgrade, or cancel through Google Play's subscription management. Cancellations take effect at the end of the billing period.",
  },
  {
    id: "merchant-q3",
    q: "The app keeps crashing / I'm experiencing technical issues.",
    a: "Try force-closing and reopening the app. If the issue persists, check for app updates on the Play Store. For persistent issues, contact our support with your device model and app version.",
  },
  {
    id: "merchant-q4",
    q: "How do I view my sales reports?",
    a: "Go to Reports in the bottom navigation. You can view daily, weekly, and monthly sales summaries. Export to PDF or Excel is available on premium plans.",
  },
  {
    id: "merchant-q5",
    q: "Can I use Suki Merchant on multiple devices?",
    a: "Yes, you can log in to the same merchant account on multiple devices. Data is synced in real-time via Firebase. We recommend using a PIN or biometric lock for security.",
  },
];

function AccordionItem({ id, q, a }: { id: string; q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button
        id={id}
        className="accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <svg className="chevron" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState<"perks" | "merchant">("perks");

  return (
    <article style={{ padding: "4rem 1.5rem 6rem" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="badge badge-green" style={{ marginBottom: "1rem", display: "inline-flex" }}>
            💬 Mandatory
          </span>
          <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", marginBottom: "0.875rem", color: "#F2F6F4" }}>
            Support
          </h1>
          <p style={{ color: "var(--suki-text-muted)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
            We&apos;re here to help. Browse FAQs for{" "}
            <strong style={{ color: "#1DDC8F" }}>Suki Perks</strong> and{" "}
            <strong style={{ color: "#F5C542" }}>Suki Merchant</strong>, or reach out directly.
          </p>
        </div>

        <div className="section-divider" style={{ marginBottom: "2.5rem" }} />

        {/* Contact Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {[
            {
              id: "contact-email",
              icon: "✉️",
              label: "Email Support",
              value: "support@sukiperks.com",
              href: "mailto:support@sukiperks.com",
              color: "#1DDC8F",
              colorBg: "rgba(29,220,143,0.08)",
              colorBorder: "rgba(29,220,143,0.2)",
            },
            {
              id: "contact-response",
              icon: "⏱️",
              label: "Response Time",
              value: "Within 24–48 hours",
              href: null,
              color: "#F5C542",
              colorBg: "rgba(245,197,66,0.08)",
              colorBorder: "rgba(245,197,66,0.2)",
            },
            {
              id: "contact-hours",
              icon: "🕐",
              label: "Support Hours",
              value: "Mon–Sat, 9AM–6PM PHT",
              href: null,
              color: "#53A7FF",
              colorBg: "rgba(83,167,255,0.08)",
              colorBorder: "rgba(83,167,255,0.2)",
            },
          ].map((card) => (
            <div
              key={card.id}
              id={card.id}
              style={{
                background: card.colorBg,
                border: `1px solid ${card.colorBorder}`,
                borderRadius: "1rem",
                padding: "1.25rem",
              }}
            >
              <span style={{ fontSize: "1.375rem", display: "block", marginBottom: "0.625rem" }}>
                {card.icon}
              </span>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--suki-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.375rem" }}>
                {card.label}
              </p>
              {card.href ? (
                <a href={card.href} style={{ fontSize: "0.875rem", fontWeight: 600, color: card.color, textDecoration: "none" }}>
                  {card.value}
                </a>
              ) : (
                <p style={{ fontSize: "0.875rem", fontWeight: 600, color: card.color }}>{card.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div>
          <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#F2F6F4", marginBottom: "1.25rem" }}>
            Frequently Asked Questions
          </h2>

          {/* Tab bar */}
          <div className="tab-bar" style={{ marginBottom: "1.75rem" }}>
            <button
              id="tab-perks"
              className={`tab-btn ${activeTab === "perks" ? "active" : ""}`}
              onClick={() => setActiveTab("perks")}
            >
              ⭐ Suki Perks
            </button>
            <button
              id="tab-merchant"
              className={`tab-btn ${activeTab === "merchant" ? "active" : ""}`}
              onClick={() => setActiveTab("merchant")}
            >
              🏪 Suki Merchant
            </button>
          </div>

          {/* FAQ items */}
          <div className="glass-card" style={{ padding: "0.5rem 1.5rem" }}>
            {activeTab === "perks"
              ? perksQuestions.map((faq) => (
                  <AccordionItem key={faq.id} id={faq.id} q={faq.q} a={faq.a} />
                ))
              : merchantQuestions.map((faq) => (
                  <AccordionItem key={faq.id} id={faq.id} q={faq.q} a={faq.a} />
                ))}
          </div>
        </div>

        {/* Still need help */}
        <div
          style={{
            marginTop: "2.5rem",
            background: "linear-gradient(135deg, rgba(29,220,143,0.12), rgba(245,197,66,0.08))",
            border: "1px solid rgba(29,220,143,0.2)",
            borderRadius: "1.25rem",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "1.125rem", fontWeight: 700, color: "#F2F6F4", marginBottom: "0.5rem" }}>
            Still need help?
          </p>
          <p style={{ color: "var(--suki-text-muted)", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.65 }}>
            Our support team is ready to assist you with any issues not covered in the FAQs above.
          </p>
          <a
            id="email-support-cta"
            href="mailto:support@sukiperks.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              borderRadius: "0.75rem",
              background: "linear-gradient(135deg, #1DDC8F, #F5C542)",
              color: "#0B1F16",
              fontWeight: 700,
              fontSize: "0.9375rem",
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
            }}
          >
            ✉️ Email Us
          </a>
        </div>
      </div>
    </article>
  );
}
