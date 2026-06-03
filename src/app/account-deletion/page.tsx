import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Deletion",
  description:
    "How to permanently delete your Suki Perks or Suki Merchant account and all associated data.",
};

const perkSteps = [
  {
    n: 1,
    title: "Open Suki Perks",
    desc: "Launch the Suki Perks app on your mobile device.",
  },
  {
    n: 2,
    title: "Go to Profile",
    desc: 'Tap the Profile icon on the bottom navigation bar.',
  },
  {
    n: 3,
    title: "Open Settings",
    desc: 'Tap the settings or gear icon in the top-right corner of your profile.',
  },
  {
    n: 4,
    title: "Select Delete Account",
    desc: 'Scroll down and tap "Delete Account". Read the warning about data removal.',
  },
  {
    n: 5,
    title: "Confirm Deletion",
    desc: 'Enter your PIN or confirm via biometrics, then tap "Confirm Delete". Your account is deactivated immediately and permanently deleted after 30 days — sign back in within 30 days to cancel.',
  },
];

const merchantSteps = [
  {
    n: 1,
    title: "Open Suki Merchant",
    desc: "Launch the Suki Merchant app on your mobile device.",
  },
  {
    n: 2,
    title: "Go to Settings",
    desc: 'Tap the menu icon and navigate to "Account Settings".',
  },
  {
    n: 3,
    title: "Select Delete Account",
    desc: 'Scroll to the bottom and tap "Delete My Account".',
  },
  {
    n: 4,
    title: "Confirm with PIN",
    desc: "You will be prompted to enter your security PIN to verify your identity.",
  },
  {
    n: 5,
    title: "Final Confirmation",
    desc: 'Tap "Yes, Delete Permanently". Your merchant account is deactivated immediately and permanently deleted after 30 days unless you sign back in to cancel. Your products and sales records are retained as business records.',
  },
];

const dataHandling = [
  {
    label: "⭐ Suki Perks",
    color: "#1DDC8F",
    bg: "rgba(29,220,143,0.06)",
    border: "rgba(29,220,143,0.2)",
    removed: [
      "Account & sign-in access",
      "Name, phone & email",
      "Profile photo & date of birth",
      "Notification preferences",
    ],
    kept: ["Order & redemption history", "Loyalty points records"],
  },
  {
    label: "🏪 Suki Merchant",
    color: "#F5C542",
    bg: "rgba(245,197,66,0.06)",
    border: "rgba(245,197,66,0.2)",
    removed: ["Merchant account & sign-in access", "Owner name, phone & email", "Profile photo"],
    kept: ["Products & categories", "Sales & order records", "Customer loyalty & redemption data"],
  },
];

export default function AccountDeletionPage() {
  return (
    <article style={{ padding: "4rem 1.5rem 6rem" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="badge badge-green" style={{ marginBottom: "1rem", display: "inline-flex" }}>
            🗑️ Mandatory
          </span>
          <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", marginBottom: "0.875rem", color: "#F2F6F4" }}>
            Account Deletion
          </h1>
          <p style={{ color: "var(--suki-text-muted)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
            You can permanently delete your account from{" "}
            <strong style={{ color: "#1DDC8F" }}>Suki Perks</strong> or{" "}
            <strong style={{ color: "#F5C542" }}>Suki Merchant</strong> at any time.
          </p>
        </div>

        <div className="section-divider" style={{ marginBottom: "2.5rem" }} />

        {/* Warning box */}
        <div
          style={{
            background: "rgba(245,197,66,0.08)",
            border: "1px solid rgba(245,197,66,0.25)",
            borderRadius: "1rem",
            padding: "1.25rem 1.5rem",
            marginBottom: "2.5rem",
            display: "flex",
            gap: "0.875rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.25rem", flexShrink: 0, marginTop: "0.125rem" }}>⚠️</span>
          <div>
            <p style={{ fontWeight: 700, color: "#F5C542", marginBottom: "0.375rem", fontSize: "0.9375rem" }}>
              You have 30 days to change your mind
            </p>
            <p style={{ color: "var(--suki-text-muted)", fontSize: "0.875rem", lineHeight: 1.65 }}>
              Deleting your account takes effect immediately — it is deactivated and you are signed out on all
              devices. You then have a <strong style={{ color: "#F2F6F4" }}>30-day recovery period</strong>: sign
              back in within 30 days to restore your account. After 30 days, your account profile and personal
              details are permanently deleted and you can no longer sign in. Transaction and business records (order
              history, and for merchants your products and sales reports) are retained as operational and legal
              records, no longer linked to an active account. We never delete accounts automatically for inactivity
              — this only happens when you ask.
            </p>
          </div>
        </div>

        {/* What happens to your data */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F2F6F4", marginBottom: "0.5rem" }}>
            What Happens to Your Data
          </h2>
          <p style={{ color: "var(--suki-text-muted)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
            We permanently delete your account profile and personal details. Transaction and business records are
            kept as operational and legal records, no longer linked to an active account.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {dataHandling.map((app) => (
              <div
                key={app.label}
                style={{
                  background: app.bg,
                  border: `1px solid ${app.border}`,
                  borderRadius: "1rem",
                  padding: "1.25rem",
                }}
              >
                <p style={{ fontWeight: 700, color: app.color, marginBottom: "1rem", fontSize: "0.9375rem" }}>
                  {app.label}
                </p>

                <p style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: app.color, marginBottom: "0.5rem" }}>
                  Permanently removed
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.125rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {app.removed.map((item) => (
                    <li key={item} style={{ fontSize: "0.875rem", color: "var(--suki-text-muted)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: app.color, fontSize: "0.6875rem" }}>✕</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--suki-text-muted)", marginBottom: "0.5rem" }}>
                  Retained as records
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {app.kept.map((item) => (
                    <li key={item} style={{ fontSize: "0.875rem", color: "var(--suki-text-muted)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "var(--suki-text-muted)", fontSize: "0.8125rem" }}>↻</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Suki Perks Steps */}
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "rgba(29,220,143,0.15)",
                border: "1px solid rgba(29,220,143,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
              }}
            >
              ⭐
            </div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F2F6F4", margin: 0 }}>
              Delete Suki Perks Account
            </h2>
          </div>

          <div
            className="glass-card"
            style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {perkSteps.map((step) => (
              <div key={step.n} className="step-card">
                <div className="step-number">{step.n}</div>
                <div>
                  <p style={{ fontWeight: 600, color: "#F2F6F4", marginBottom: "0.25rem", fontSize: "0.9375rem" }}>
                    {step.title}
                  </p>
                  <p style={{ color: "var(--suki-text-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suki Merchant Steps */}
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "rgba(245,197,66,0.15)",
                border: "1px solid rgba(245,197,66,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
              }}
            >
              🏪
            </div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F2F6F4", margin: 0 }}>
              Delete Suki Merchant Account
            </h2>
          </div>

          <div
            className="glass-card"
            style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {merchantSteps.map((step) => (
              <div key={step.n} className="step-card">
                <div className="step-number" style={{ background: "linear-gradient(135deg, #F5C542, #1DDC8F)" }}>
                  {step.n}
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: "#F2F6F4", marginBottom: "0.25rem", fontSize: "0.9375rem" }}>
                    {step.title}
                  </p>
                  <p style={{ color: "var(--suki-text-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Can't access app? */}
        <div
          className="glass-card"
          style={{ padding: "1.5rem", marginBottom: "2rem" }}
        >
          <p style={{ fontWeight: 700, color: "#F2F6F4", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>
            🔑 Can&apos;t access your account?
          </p>
          <p style={{ color: "var(--suki-text-muted)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1rem" }}>
            If you cannot log in to the app to delete your account, you can request deletion by contacting our 
            support team. Please include your registered phone number or email address.
          </p>
          <a
            id="contact-support-deletion"
            href="/support"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1.25rem",
              borderRadius: "0.625rem",
              background: "linear-gradient(135deg, #1DDC8F, #F5C542)",
              color: "#0B1F16",
              fontWeight: 700,
              fontSize: "0.875rem",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            Contact Support →
          </a>
        </div>
      </div>
    </article>
  );
}
