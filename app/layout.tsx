import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. Core SEO
  metadataBase: new URL("https://seshukumari.vercel.app"), // REPLACE WITH ACTUAL DOMAIN
  title: {
    default: "Seshu Kumari | Premium Professional Makeup Artist",
    template: "%s | Seshu Kumari", // Sub-pages will show as "Gallery | Seshu Kumari"
  },
  description:
    "With 22+ years of excellence, Seshu Kumari is a top-tier makeup artist specializing in bridal, fashion shows, party, and film makeup across Hyderabad, Guntur, and Narasaraopet.",
  keywords: [
    "Professional Makeup Artist",
    "Bridal Makeup Hyderabad",
    "Best Makeup Artist Guntur",
    "Fashion Show Makeup",
    "Film Shoot Makeup",
    "Seshu Kumari",
    "Narasaraopet Beauty Salon",
    "Luxury Bridal Makeup",
  ],
  authors: [{ name: "Seshu Kumari" }],
  creator: "Seshu Kumari",
  
  // 2. Open Graph (How it looks when shared on WhatsApp, Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://seshukumari.vercel.app", // REPLACE WITH ACTUAL DOMAIN
    title: "Seshu Kumari | Premium Professional Makeup Artist",
    description:
      "Award-winning makeup artistry with 22+ years of experience in Bridal, Fashion, and Film. Book your consultation today.",
    siteName: "Seshu Kumari Makeup Artistry",
    images: [
      {
        url: "/og-image.jpg", // Create a 1200x630 image and place in /public
        width: 1200,
        height: 630,
        alt: "Seshu Kumari - Professional Makeup Artist",
      },
    ],
  },

  // 3. Twitter Cards (How it looks on X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Seshu Kumari | Premium Professional Makeup Artist",
    description:
      "Award-winning makeup artistry with 22+ years of experience in Bridal, Fashion, and Film.",
    images: ["/og-image.jpg"], // Matches OG image
    creator: "@seshu388", // Instagram handle used as placeholder
  },

  // 4. Crawler & Search Engine Directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 5. Canonical URLs (Prevents duplicate content penalties)
  alternates: {
    canonical: "https://seshukumari.vercel.app", // REPLACE WITH ACTUAL DOMAIN
  },

  // 6. Verification (For Google Search Console - Add your code later)
  // verification: {
  //   google: "your-google-site-verification-code", 
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}