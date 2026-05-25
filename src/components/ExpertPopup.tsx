"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones, ChevronDown, Phone, CheckCircle } from "lucide-react";

const languages = [
  "English",
  "Hindi",
  "Bengali",
  "Tamil",
  "French",
  "Spanish",
  "German",
  "Japanese",
  "Mandarin",
  "Russian",
];

export default function ExpertPopup() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [notified, setNotified] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleCall = () => {
    setNotified(true);
    setTimeout(() => {
      setNotified(false);
      setOpen(false);
    }, 4000);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative hidden items-center gap-2 rounded-full border border-yv-gold/40 bg-gradient-to-r from-yv-gold/20 to-yv-saffron/10 px-4 py-2 text-sm font-semibold text-yv-gold shadow-glow transition hover:shadow-glow-lg sm:inline-flex"
      >
        <Headphones className="h-4 w-4" />
        Connect with Expert
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      <button
        onClick={() => setOpen(!open)}
        className="relative inline-flex items-center gap-1 rounded-full border border-yv-gold/40 bg-yv-gold/10 p-2 text-yv-gold shadow-glow sm:hidden"
        aria-label="Connect with Expert"
      >
        <Headphones className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full z-50 mt-2 w-72 rounded-2xl border border-white/10 bg-yv-navy/95 p-5 shadow-glass backdrop-blur-xl"
          >
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-yv-gold">
              AI + Human Assisted Travel
            </p>
            <p className="mb-4 text-sm text-white/60">
              Select your language — we&apos;ll assign the right expert for you.
            </p>

            <label className="mb-2 block text-xs text-white/50">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="input-field mb-4 cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="bg-yv-navy">
                  {lang}
                </option>
              ))}
            </select>

            <button onClick={handleCall} className="btn-primary w-full text-sm">
              <Phone className="h-4 w-4" />
              Call Expert
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {notified && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-4 top-24 z-[60] flex items-center gap-3 rounded-2xl border border-yv-emerald/30 bg-yv-navy/95 px-5 py-4 shadow-glow backdrop-blur-xl md:right-8"
          >
            <CheckCircle className="h-6 w-6 shrink-0 text-yv-emerald" />
            <div>
              <p className="font-semibold text-white">Request Received</p>
              <p className="text-sm text-white/60">
                Soon our expert will connect with you.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
