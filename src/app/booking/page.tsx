"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Train,
  Bus,
  Hotel,
  Ticket,
  Search,
  Calendar,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const tabs = [
  { id: "flights", label: "Flights", icon: Plane },
  { id: "trains", label: "Trains", icon: Train },
  { id: "buses", label: "Buses", icon: Bus },
  { id: "hotels", label: "Hotels", icon: Hotel },
  { id: "activities", label: "Activities", icon: Ticket },
];

const mockBookings = [
  { type: "Flight", route: "DEL → BOM", date: "Jun 15", status: "Confirmed", price: "₹4,200" },
  { type: "Hotel", route: "Taj Lake Palace, Udaipur", date: "Jun 16-18", status: "Pending", price: "₹28,000" },
];

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <>
      <PageHero
        title="Booking Platform"
        subtitle="Flights, trains, buses, hotels & activities — one futuristic travel dashboard"
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="glass-card overflow-hidden p-2">
            <div className="flex flex-wrap gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition min-w-[100px] ${
                    activeTab === tab.id
                      ? "bg-yv-gold text-yv-black"
                      : "text-white/60 hover:bg-white/5"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card mt-8 p-8"
          >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <input placeholder="From" className="input-field" />
              <input placeholder="To" className="input-field" />
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input type="date" className="input-field pl-10" />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input placeholder="Travelers" className="input-field pl-10" defaultValue="2 Adults" />
              </div>
            </div>
            <button className="btn-primary mt-6 w-full md:w-auto">
              <Search className="h-4 w-4" />
              Search {tabs.find((t) => t.id === activeTab)?.label}
            </button>
          </motion.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold">Search Results</h2>
              <div className="mt-6 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="glass-card-hover flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center"
                  >
                    <div>
                      <p className="font-semibold">
                        {activeTab === "flights" && `IndiGo · 6E-${200 + i}`}
                        {activeTab === "trains" && `Rajdhani Express · ${12001 + i}`}
                        {activeTab === "buses" && `Volvo AC Sleeper · Route ${i}`}
                        {activeTab === "hotels" && `Premium Heritage Hotel ${i}`}
                        {activeTab === "activities" && `Guided City Tour ${i}`}
                      </p>
                      <p className="text-sm text-white/50">Departure 08:30 · Duration 2h 15m</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-yv-gold">
                        ₹{(3000 + i * 1200).toLocaleString("en-IN")}
                      </span>
                      <button className="btn-primary text-sm">Book</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Your Dashboard</h2>
              <div className="mt-6 space-y-4">
                {mockBookings.map((b) => (
                  <div key={b.route} className="glass-card p-5">
                    <div className="flex justify-between">
                      <span className="text-xs text-yv-gold">{b.type}</span>
                      <span
                        className={`text-xs ${
                          b.status === "Confirmed" ? "text-yv-emerald" : "text-yv-saffron"
                        }`}
                      >
                        {b.status}
                      </span>
                    </div>
                    <p className="mt-2 font-medium">{b.route}</p>
                    <p className="text-sm text-white/50">{b.date}</p>
                    <p className="mt-2 font-bold text-yv-gold">{b.price}</p>
                  </div>
                ))}
              </div>
              <button className="btn-outline mt-6 w-full">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
