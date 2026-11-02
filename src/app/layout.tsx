import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "iINFYNITE — Full-Service Digital Agency | Web, Mobile, AI & Custom Software",
    template: "%s | iINFYNITE",
  },
  description:
    "iINFYNITE is a premium full-service digital agency. We design and engineer high-performance websites, mobile applications, custom SaaS platforms, AI automation systems, and brand identities that scale businesses.",
  keywords: [
    "digital agency",
    "web development agency",
    "mobile app development",
    "UI/UX design agency",
    "graphic design",
    "branding and identity",
    "custom software development",
    "SaaS development",
    "e-commerce development",
    "AI automation",
    "startup acceleration",
    "Pune digital agency",
    "iINFYNITE",
  ],
  authors: [{ name: "iINFYNITE" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "iINFYNITE",
    title: "iINFYNITE — Full-Service Digital Agency",
    description:
      "We build high-performance websites, mobile apps, enterprise SaaS, AI automation, and bespoke software solutions that drive measurable business growth.",
  },
};

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
