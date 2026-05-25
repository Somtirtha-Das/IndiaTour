"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Package,
  Sparkles,
  Wallet,
  Car,
  Bell,
  BarChart3,
  Award,
  MapPin,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const stats = [
  { label: "Saved Destinations", value: "12", icon: Heart, color: "text-yv-gold" },
  { label: "Booked Tours", value: "3", icon: Package, color: "text-yv-saffron" },
  { label: "Loyalty Points", value: "2,450", icon: Award, color: "text-yv-emerald" },
  { label: "Travel Wallet", value: "₹8,200", icon: Wallet, color: "text-yv-gold-light" },
];

export default function DashboardPage() {
  return (
    <>
      <PageHero title="Your Dashboard" subtitle="Your India journey command center" />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6"
              >
                <s.icon className={`h-8 w-8 ${s.color}`} />
                <p className="mt-4 text-3xl font-bold">{s.value}</p>
                <p className="text-sm text-white/50">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card p-6">
                <h3 className="flex items-center gap-2 font-semibold">
                  <Sparkles className="h-5 w-5 text-yv-gold" />
                  AI Itineraries
                </h3>
                <div className="mt-4 space-y-3">
                  {["Golden Triangle — 7 Days", "Kerala Backwaters — 5 Days"].map((it) => (
                    <div
                      key={it}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4"
                    >
                      <span>{it}</span>
                      <Link href="/ai-planner" className="text-sm text-yv-gold hover:underline">
                        View
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="flex items-center gap-2 font-semibold">
                  <MapPin className="h-5 w-5 text-yv-emerald" />
                  Saved Destinations
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Ayodhya", "Kerala", "Ladakh", "Goa"].map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="flex items-center gap-2 font-semibold">
                  <Car className="h-5 w-5 text-yv-gold" />
                  YatraGo Bookings
                </h3>
                <p className="mt-4 text-sm text-white/50">Airport pickup — Jun 15, 10:00 AM</p>
                <span className="mt-2 inline-block text-xs text-yv-emerald">Confirmed</span>
              </div>

              <div className="glass-card p-6">
                <h3 className="flex items-center gap-2 font-semibold">
                  <Bell className="h-5 w-5 text-yv-saffron" />
                  Notifications
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>Expert callback scheduled for 3 PM</li>
                  <li>Monsoon deals on Kerala — 20% off</li>
                  <li>Your Taj Mahal tour is in 5 days</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="flex items-center gap-2 font-semibold">
                  <BarChart3 className="h-5 w-5 text-yv-emerald" />
                  Travel Analytics
                </h3>
                <div className="mt-4 h-24 flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-yv-gold/50 to-yv-gold"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs text-white/40">Trips per month</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
