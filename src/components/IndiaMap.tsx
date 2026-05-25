"use client";

import { motion } from "framer-motion";

const regions = [
  { name: "North", color: "#d4af37", x: "42%", y: "18%" },
  { name: "South", color: "#10b981", x: "42%", y: "72%" },
  { name: "East", color: "#ff9933", x: "72%", y: "38%" },
  { name: "West", color: "#d4af37", x: "18%", y: "42%" },
  { name: "Central", color: "#6366f1", x: "42%", y: "42%" },
  { name: "Northeast", color: "#f472b6", x: "78%", y: "22%" },
];

export default function IndiaMap({ activeRegion }: { activeRegion?: string }) {
  return (
    <div className="glass-card relative mx-auto aspect-square max-w-md overflow-hidden p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-yv-navy/50 to-yv-black/50" />
      <svg viewBox="0 0 200 240" className="relative h-full w-full opacity-30">
        <path
          d="M100 20 C130 25 150 50 155 80 C160 110 150 140 140 170 C130 200 110 220 90 225 C70 220 50 200 40 170 C30 140 35 110 40 80 C45 50 70 25 100 20 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-yv-gold/40"
        />
      </svg>
      {regions.map((region, i) => (
        <motion.button
          key={region.name}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-1 text-xs font-semibold transition ${
            activeRegion === region.name
              ? "shadow-glow ring-2 ring-yv-gold"
              : "opacity-80 hover:opacity-100"
          }`}
          style={{
            left: region.x,
            top: region.y,
            backgroundColor: `${region.color}40`,
            borderColor: region.color,
          }}
        >
          {region.name}
        </motion.button>
      ))}
      <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-white/40">
        Interactive India Map — Click regions to explore
      </p>
    </div>
  );
}
