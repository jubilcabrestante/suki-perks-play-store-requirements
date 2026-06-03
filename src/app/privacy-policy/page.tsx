import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Suki Perks and Suki Merchant apps — how we collect, use, and protect your personal data.",
};

const lastUpdated = "June 3, 2026";

export default function PrivacyPolicyPage() {
  return (
    <article style={{ padding: "4rem 1.5rem 6rem" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="badge badge-green" style={{ marginBottom: "1rem", display: "inline-flex" }}>
            🔒 Mandatory
          </span>
          <h1
            style={{
              fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
              marginBottom: "0.875rem",
              color: "#F2F6F4",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: "var(--suki-text-muted)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
            This policy applies to <strong style={{ color: "#1DDC8F" }}>Suki Perks</strong> (customer loyalty app) and{" "}
            <strong style={{ color: "#F5C542" }}>Suki Merchant</strong> (POS & merchant app).
          </p>
          <p style={{ color: "var(--suki-text-muted)", fontSize: "0.8125rem", marginTop: "0.75rem" }}>
            Last updated: <strong style={{ color: "#F2F6F4" }}>{lastUpdated}</strong>
          </p>
        </div>

        <div className="section-divider" style={{ marginBottom: "2.5rem" }} />

        {/* Content */}
        <div className="legal-prose">

          <p>
            Welcome to Suki Platform. This Privacy Policy explains how we collect, use, disclose, and safeguard 
            your information when you use our mobile applications — <strong>Suki Perks</strong> and{" "}
            <strong>Suki Merchant</strong> (collectively referred to as the &quot;Apps&quot;). Please read this 
            Privacy Policy carefully.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>Account Information</h3>
          <p>When you register for an account, we collect:</p>
          <ul>
            <li>Full name</li>
            <li>Email address (via Google Sign-In or manual entry)</li>
            <li>Mobile phone number</li>
            <li>Profile photo (optional)</li>
            <li>Date of birth (optional, for Suki Perks)</li>
          </ul>

          <h3>Transaction & Usage Data</h3>
          <p>We collect information about your activity on the Apps, including:</p>
          <ul>
            <li><strong>Suki Perks:</strong> Orders placed, cart contents, product favorites, loyalty points balance, reward redemptions, partner merchant visits</li>
            <li><strong>Suki Merchant:</strong> Sales records, product inventory, category management, customer data, POS transactions, subscription status</li>
          </ul>

          <h3>Location Information</h3>
          <p>
            With your permission, we collect your device&apos;s location data to display nearby partner merchants, 
            provide delivery tracking, and compute distances. You may disable location access at any time through 
            your device settings.
          </p>

          <h3>Device Information</h3>
          <p>We automatically collect:</p>
          <ul>
            <li>Device model, operating system, and version</li>
            <li>App version and build number</li>
            <li>Crash reports and error logs (via Firebase Crashlytics)</li>
            <li>Push notification tokens (Suki Merchant)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Create and manage your account</li>
            <li>Process orders and transactions</li>
            <li>Calculate and credit loyalty points (Suki Perks)</li>
            <li>Provide POS, sales reporting, and inventory management (Suki Merchant)</li>
            <li>Send transactional notifications and promotional messages</li>
            <li>Improve app performance and fix bugs</li>
            <li>Enforce our Terms of Service and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Third-Party Services</h2>
          <p>We use the following third-party services that may collect data according to their own privacy policies:</p>
          <ul>
            <li><strong>Google Firebase</strong> — Authentication, Firestore database, Cloud Storage, Remote Config, Crashlytics, App Check</li>
            <li><strong>Google Sign-In</strong> — Optional OAuth sign-in</li>
            <li><strong>Google Maps</strong> — Location display and geocoding</li>
            <li><strong>Algolia</strong> — Product and merchant search (Suki Perks)</li>
            <li><strong>Firebase Cloud Messaging</strong> — Push notifications (Suki Merchant)</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>We do <strong>not</strong> sell your personal data. We may share data with:</p>
          <ul>
            <li><strong>Service providers</strong> listed in Section 3 above, for operational purposes</li>
            <li><strong>Partner merchants</strong> on Suki Perks, only data necessary to fulfill your order (name, delivery address)</li>
            <li><strong>Legal authorities</strong> when required by law or court order</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal data for as long as your account remains active. We do{" "}
            <strong>not delete accounts automatically</strong> based on time or inactivity — your information is kept
            unless and until you choose to delete your account. When you request deletion, your account is
            deactivated immediately and enters a <strong>30-day recovery period</strong>, during which you can
            restore it by signing back in. After 30 days, your account profile and personal details (name, phone,
            email, photo) are permanently deleted and you can no longer sign in.
          </p>
          <p>
            Transaction and business records — such as order and redemption history, and (for merchants) products
            and sales reports — are <strong>retained as operational and legal records</strong>, no longer linked to
            an active account, except where we are required to remove them by law.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard security measures including encrypted data transmission (TLS), Firebase 
            Security Rules, Firebase App Check for API protection, and PIN encryption using a security key from 
            Firebase Remote Config. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            Our Apps are not intended for users under the age of 13. We do not knowingly collect personal information 
            from children. If you believe a child has provided us with personal information, please contact us 
            immediately.
          </p>

          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal data within the App settings</li>
            <li>Request deletion of your account and all associated data</li>
            <li>Withdraw consent for location access via device settings</li>
            <li>Opt out of marketing notifications</li>
          </ul>
          <p>
            To request account deletion, visit our{" "}
            <a href="/account-deletion">Account Deletion page</a>.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any significant changes 
            through the app or by email. Your continued use of the Apps after changes take effect constitutes 
            your acceptance of the updated policy.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at our{" "}
            <a href="/support">Support page</a> or email us at{" "}
            <a href="mailto:support@sukiperks.com">support@sukiperks.com</a>.
          </p>

        </div>

        {/* Related links */}
        <div
          className="glass-card"
          style={{ padding: "1.5rem", marginTop: "3rem" }}
        >
          <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#F2F6F4", marginBottom: "0.875rem" }}>
            Related Pages
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              { label: "Account Deletion", href: "/account-deletion" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Support", href: "/support" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  padding: "0.4rem 1rem",
                  borderRadius: "0.5rem",
                  background: "rgba(29,220,143,0.1)",
                  border: "1px solid rgba(29,220,143,0.2)",
                  color: "#1DDC8F",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {l.label} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
