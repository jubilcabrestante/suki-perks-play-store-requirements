import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service and End User License Agreement for Suki Perks and Suki Merchant.",
};

const lastUpdated = "June 3, 2026";

export default function TermsPage() {
  return (
    <article style={{ padding: "4rem 1.5rem 6rem" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="badge badge-amber" style={{ marginBottom: "1rem", display: "inline-flex" }}>
            📋 Recommended
          </span>
          <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", marginBottom: "0.875rem", color: "#F2F6F4" }}>
            Terms of Service
          </h1>
          <p style={{ color: "var(--suki-text-muted)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
            End User License Agreement (EULA) for{" "}
            <strong style={{ color: "#1DDC8F" }}>Suki Perks</strong> and{" "}
            <strong style={{ color: "#F5C542" }}>Suki Merchant</strong>.
          </p>
          <p style={{ color: "var(--suki-text-muted)", fontSize: "0.8125rem", marginTop: "0.75rem" }}>
            Last updated: <strong style={{ color: "#F2F6F4" }}>{lastUpdated}</strong>
          </p>
        </div>

        <div className="section-divider" style={{ marginBottom: "2.5rem" }} />

        <div className="legal-prose">

          <p>
            Please read these Terms of Service (&quot;Terms&quot;) carefully before using our mobile applications.
            By downloading, installing, or using <strong>Suki Perks</strong> or <strong>Suki Merchant</strong>,
            you agree to be bound by these Terms. If you do not agree, do not use the Apps.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By creating an account or using any feature of the Apps, you confirm that you are at least 
            13 years of age and have the legal capacity to enter into these Terms.
          </p>

          <h2>2. License Grant</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable license to use the Apps 
            for their intended personal or commercial purposes, subject to these Terms. This license does 
            not include the right to:
          </p>
          <ul>
            <li>Sublicense, sell, or redistribute the Apps</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Use the Apps for any unlawful purpose</li>
            <li>Create derivative works based on the Apps</li>
          </ul>

          <h2>3. Suki Perks — Customer Loyalty Terms</h2>

          <h3>3.1 Loyalty Points</h3>
          <p>
            Loyalty points are earned through qualifying purchases at partner merchants. Points have no 
            cash value and cannot be transferred between accounts. Suki Platform reserves the right to 
            adjust point values, expiry periods, or redemption thresholds at any time with reasonable notice.
          </p>

          <h3>3.2 Rewards Redemption</h3>
          <p>
            Rewards redeemed through Suki Perks are subject to availability. Redeemed rewards are 
            non-refundable once processed. Fraudulent redemption attempts will result in account suspension.
          </p>

          <h3>3.3 Partner Merchants</h3>
          <p>
            Suki Platform is not responsible for the products, services, or conduct of partner merchants. 
            Disputes related to merchant transactions should be resolved directly with the merchant. 
            Suki Perks does not guarantee the availability of any specific merchant or product.
          </p>

          <h3>3.4 Orders & Delivery</h3>
          <p>
            When placing orders through Suki Perks, you agree to provide accurate delivery information. 
            Cancellation policies are determined by individual partner merchants.
          </p>

          <h2>4. Suki Merchant — POS & Merchant Terms</h2>

          <h3>4.1 Merchant Account</h3>
          <p>
            Merchant accounts are intended for registered business operators. By creating a merchant 
            account, you certify that you are authorized to represent the business listed on your account. 
            You are responsible for maintaining the security of your account credentials and PIN.
          </p>

          <h3>4.2 Subscription Services</h3>
          <p>
            Suki Merchant may offer subscription plans for premium features including advanced analytics, 
            multi-store management, and priority support. Subscriptions are billed periodically through 
            Google Play In-App Purchases. Cancellation takes effect at the end of the current billing period.
          </p>

          <h3>4.3 Customer Data</h3>
          <p>
            Merchants are responsible for compliance with data privacy laws with respect to their own 
            customers. Suki Platform processes customer data on behalf of merchants as a data processor. 
            Merchants must not misuse or share customer data obtained through the App with unauthorized parties.
          </p>

          <h3>4.4 POS & Financial Records</h3>
          <p>
            Sales data stored in Suki Merchant is for your business reporting purposes. Suki Platform is 
            not a licensed financial institution and does not provide financial advice. You are responsible 
            for your own tax compliance.
          </p>

          <h2>5. User Responsibilities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Provide false, inaccurate, or misleading information</li>
            <li>Attempt to gain unauthorized access to other accounts</li>
            <li>Use automated scripts or bots to interact with the Apps</li>
            <li>Engage in any activity that disrupts the Apps&apos; functionality</li>
            <li>Upload content that is harmful, offensive, or violates third-party rights</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and intellectual property in the Apps are owned by or licensed 
            to Suki Platform. You may not use our branding without prior written consent.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            The Apps are provided &quot;as is&quot; without warranties of any kind, express or implied. We do not 
            guarantee that the Apps will be error-free, uninterrupted, or free from security vulnerabilities.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Suki Platform shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages arising from your use of the Apps, 
            including but not limited to loss of data, revenue, or business opportunities.
          </p>

          <h2>9. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account at our discretion if you violate 
            these Terms. You may terminate your account at any time by following the{" "}
            <a href="/account-deletion">account deletion process</a>.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the 
            Republic of the Philippines. Any disputes shall be subject to the exclusive jurisdiction 
            of the courts of the Philippines.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. We will notify you of material changes through the App 
            or by email. Continued use of the Apps after changes take effect constitutes acceptance.
          </p>

          <h2>12. Contact</h2>
          <p>
            For questions about these Terms, visit our{" "}
            <a href="/support">Support page</a> or contact us at{" "}
            <a href="mailto:legal@sukiperks.com">legal@sukiperks.com</a>.
          </p>
        </div>

        {/* Related */}
        <div className="glass-card" style={{ padding: "1.5rem", marginTop: "3rem" }}>
          <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#F2F6F4", marginBottom: "0.875rem" }}>
            Related Pages
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Account Deletion", href: "/account-deletion" },
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
