import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import FloatingParticles from "@/components/ui/FloatingParticles";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// TODO: Replace with your actual deployed domain
const SITE_URL = "https://debanjandas.com";

export const metadata: Metadata = {
  title: {
    default: "Debanjan Das | FinTech Builder & Software Engineer",
    template: "%s | Debanjan Das",
  },
  description:
    "Building Systems. Thinking in Products. Future FinTech Founder. Software engineer focused on scalable architecture, fintech, and high-performance systems.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Debanjan Das | FinTech Builder & Software Engineer",
    description:
      "Software engineer focused on scalable architecture, fintech, and high-performance systems.",
    url: SITE_URL,
    siteName: "Debanjan Das",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debanjan Das | FinTech Builder & Software Engineer",
    description:
      "Building Systems. Thinking in Products. Future FinTech Founder.",
    creator: "@debanjan_das", // TODO: Replace with actual Twitter handle
  },
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Debanjan Das",
  url: SITE_URL,
  jobTitle: "Software Engineer",
  description:
    "FinTech builder and software engineer focused on scalable architecture and high-performance systems.",
  sameAs: [
    "https://github.com/debanjan-das", // TODO: Replace with actual URLs
    "https://linkedin.com/in/debanjan-das",
    "https://x.com/debanjan_das",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${syne.variable} antialiased bg-background text-foreground`}>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <FloatingParticles count={50} />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
