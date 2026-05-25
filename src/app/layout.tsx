import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import { LoadingScreen } from "@/components/Providers";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "YatraVerse — Discover the Soul of India",
  description:
    "AI-Powered Tourism Discovery, Travel Planning & Experience Ecosystem for India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${display.variable} ${sans.variable} font-sans`}>
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
