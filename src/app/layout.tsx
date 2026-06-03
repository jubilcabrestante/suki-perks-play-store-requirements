import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Suki Platform — Legal & Support",
    template: "%s | Suki Platform",
  },
  description:
    "Official privacy policy, account deletion, terms of service, and support pages for Suki Perks (customer loyalty app) and Suki Merchant (POS & merchant app).",
  keywords: ["Suki Perks", "Suki Merchant", "privacy policy", "terms of service", "support", "account deletion"],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Suki Platform",
    title: "Suki Platform — Legal & Support",
    description:
      "Official privacy policy, account deletion, terms of service, and support pages for Suki Perks and Suki Merchant.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
