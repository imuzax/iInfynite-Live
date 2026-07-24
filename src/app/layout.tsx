import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "iInfynite — Freelance IT Agency | Web, App, Design & Growth",
    template: "%s | iInfynite",
  },
  description:
    "iInfynite is a premium freelance IT agency offering web development, app development, graphic design, startup acceleration, digital growth, and custom software solutions.",
  keywords: [
    "web development",
    "app development",
    "graphic design",
    "startup acceleration",
    "digital growth",
    "custom software",
    "freelance IT agency",
    "iInfynite",
  ],
  authors: [{ name: "iInfynite" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "iInfynite",
    title: "iInfynite — Freelance IT Agency",
    description:
      "Premium IT services: Web Dev, App Dev, Graphic Design, Startup Acceleration, Digital Growth & Custom Software.",
  },
};

import { GlobalPreloader } from "@/components/ui/preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen flex flex-col relative">
        <GlobalPreloader />
        {/* Noise texture overlay for premium feel */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Main content */}
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
