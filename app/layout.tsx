import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/config";
import Footer from "@/components/Footer";

const titre = "Panier Perdu — Récupère tes paniers abandonnés";
const description =
  "Deux relances personnalisées pour les boutiques Shopify et WooCommerce. 29 € par mois, relances illimitées, sans engagement.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: titre,
  description,
  openGraph: {
    title: titre,
    description,
    url: "/",
    siteName: "Panier Perdu",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titre,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f1e7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
