"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Car,
  Plane,
  MapPin,
  Shield,
  Languages,
  Navigation,
  Crown,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const features = [
  { icon: Plane, title: "Airport Pickup", desc: "Seamless arrivals with meet & greet" },
  { icon: MapPin, title: "Local Sightseeing", desc: "Expert drivers who know every hidden corner" },
  { icon: Crown, title: "Chauffeur Services", desc: "Premium black & gold fleet experience" },
  { icon: Languages, title: "Multilingual Drivers", desc: "10+ languages for global travelers" },
  { icon: Users, title: "Guided Travel", desc: "Cultural insights on every journey" },
  { icon: Car, title: "Intercity Transport", desc: "Tourism routes across India" },
];

const vehicles = [
  { name: "Yatra Sedan", price: "₹18/km", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80", tier: "Standard" },
  { name: "Yatra Premium SUV", price: "₹32/km", image: "https://images.unsplash.com/photo-1519641471654-76ce0107a9bf?w=600&q=80", tier: "Premium" },
  { name: "Yatra Royal", price: "₹55/km", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80", tier: "Luxury" },
];

export default function YatraGoPage() {
  return (
    <div className="bg-yv-black">
      <PageHero
        title="YatraGo"
        subtitle="Premium mobility — airport pickups, chauffeur services & guided intercity travel"
        backgroundImage="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=80"
      />

      <section className="border-b border-yv-gold/20 bg-gradient-to-b from-yv-black via-[#1a1508] to-yv-black py-8 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-yv-gold">Luxury Transport</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-yv-gold">Black & Gold Experience</h2>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-yv-gold/20 bg-gradient-to-br from-yv-gold/5 to-transparent p-6"
              >
                <f.icon className="h-8 w-8 text-yv-gold" />
                <h3 className="mt-4 font-semibold text-yv-gold-light">{f.title}</h3>
                <p className="mt-2 text-sm text-white/60">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center gradient-text">Book Your Ride</h2>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-yv-gold/30 bg-yv-gold/5 p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Pickup location" className="input-field" />
              <input placeholder="Drop location" className="input-field" />
              <input type="date" className="input-field" />
              <select className="input-field">
                <option className="bg-yv-navy">Yatra Sedan</option>
                <option className="bg-yv-navy">Yatra Premium SUV</option>
                <option className="bg-yv-navy">Yatra Royal</option>
              </select>
            </div>
            <button className="btn-primary mt-6 w-full bg-gradient-to-r from-yv-gold to-yv-gold-light text-yv-black">
              Search Routes
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold">Premium Fleet</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {vehicles.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl border border-yv-gold/20"
              >
                <div className="relative h-48">
                  <Image src={v.image} alt={v.name} fill className="object-cover" />
                  <span className="absolute right-3 top-3 rounded-full bg-yv-gold px-3 py-1 text-xs font-bold text-yv-black">
                    {v.tier}
                  </span>
                </div>
                <div className="bg-yv-navy p-6">
                  <h3 className="font-semibold text-yv-gold">{v.name}</h3>
                  <p className="mt-1 text-sm text-white/60">From {v.price}</p>
                  <button className="btn-outline mt-4 w-full text-sm border-yv-gold text-yv-gold">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="glass-card p-8">
              <Shield className="h-10 w-10 text-yv-gold" />
              <h3 className="mt-4 font-display text-2xl font-bold">Driver Safety System</h3>
              <p className="mt-2 text-white/60">
                Verified drivers, GPS tracking, SOS alerts, and 24/7 support for every ride.
              </p>
            </div>
            <div className="glass-card relative overflow-hidden p-8">
              <Navigation className="h-10 w-10 text-yv-emerald" />
              <h3 className="mt-4 font-display text-2xl font-bold">Live Tracking</h3>
              <p className="mt-2 text-white/60">
                Real-time ride tracking with ETA updates and share-trip with family.
              </p>
              <div className="mt-6 h-32 rounded-xl bg-yv-emerald/10 border border-yv-emerald/30 flex items-center justify-center">
                <p className="text-sm text-yv-emerald animate-pulse">● Live — Driver en route (4 min)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
