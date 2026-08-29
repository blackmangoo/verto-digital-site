import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/smoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verto Digital — Websites & AI Automation for Local Businesses",
  description:
    "We build premium websites and pair them with practical AI — reception assistants, WhatsApp follow-ups, and lead-capture workflows — for businesses that take their craft seriously.",
  keywords: [
    "web development Pakistan",
    "AI automation",
    "WhatsApp business automation",
    "digital agency Pakistan",
    "business website",
    "lead generation",
  ],
  openGraph: {
    title: "Verto Digital — Websites & AI Automation for Local Businesses",
    description:
      "Premium websites paired with practical AI automation for local, owner-run businesses.",
    url: "https://vertodigital.tech",
    siteName: "Verto Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verto Digital",
    description:
      "Premium websites paired with practical AI automation for local businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
