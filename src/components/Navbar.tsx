"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Globe,
  Moon,
  Sun,
  Mic,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ExpertPopup from "./ExpertPopup";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover India" },
  { href: "/destinations", label: "Destinations" },
  { href: "/ai-planner", label: "AI Trip Planner" },
  { href: "/yatrago", label: "YatraGo" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/booking", label: "Booking" },
  { href: "/blog", label: "Stories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [langOpen, setLangOpen] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-yv-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold gradient-text">
            YatraVerse
          </span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.slice(0, 7).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition hover:text-yv-gold",
                pathname === link.href ? "text-yv-gold" : "text-white/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="hidden rounded-lg p-2 text-white/70 transition hover:bg-white/5 hover:text-yv-gold md:block"
            aria-label="Language"
          >
            <Globe className="h-5 w-5" />
          </button>
          <button
            onClick={toggleDark}
            className="hidden rounded-lg p-2 text-white/70 transition hover:bg-white/5 hover:text-yv-gold md:block"
            aria-label="Toggle theme"
          >
            {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <button
            className="hidden rounded-lg p-2 text-white/70 transition hover:bg-white/5 hover:text-yv-gold md:block"
            aria-label="Voice search"
          >
            <Mic className="h-5 w-5" />
          </button>

          <ExpertPopup />

          <Link
            href="/login"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:border-yv-gold/50 hover:text-yv-gold sm:inline-flex"
          >
            Login
          </Link>
          <Link href="/dashboard" className="btn-primary hidden text-sm sm:inline-flex">
            <Sparkles className="h-4 w-4" />
            Dashboard
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white xl:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-yv-black/95 xl:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm",
                    pathname === link.href
                      ? "bg-yv-gold/10 text-yv-gold"
                      : "text-white/70"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/login" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm">
                Login / Signup
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
