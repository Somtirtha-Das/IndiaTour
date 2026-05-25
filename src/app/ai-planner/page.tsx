"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Wallet,
  Users,
  Heart,
  Clock,
  Shield,
  Leaf,
  Accessibility,
  Route,
  Cloud,
  BarChart3,
} from "lucide-react";
import PageHero from "@/components/PageHero";

export default function AIPlannerPage() {
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState(false);
  const [form, setForm] = useState({
    budget: "50000",
    group: "Couple",
    vibe: "Adventure",
    interests: "Mountains, Culture",
    duration: "7",
    comfort: "Premium",
    diet: "Vegetarian",
    accessibility: "None",
  });

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setResult(true);
    }, 2500);
  };

  return (
    <>
      <PageHero
        title="AI Trip Planner"
        subtitle="Futuristic travel intelligence — smart itineraries, routes, budgets & weather in seconds"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="glass-card p-8">
              <div className="mb-6 flex items-center gap-2">
                <div className="h-3 w-3 animate-pulse-glow rounded-full bg-yv-emerald" />
                <span className="text-sm text-yv-emerald">AI Assistant Online</span>
              </div>
              <h2 className="font-display text-2xl font-bold">Plan Your Journey</h2>

              <div className="mt-8 space-y-5">
                {[
                  { key: "budget", label: "Budget (₹)", icon: Wallet, type: "number" },
                  { key: "group", label: "Group Type", icon: Users, type: "select", options: ["Solo", "Couple", "Family", "Friends"] },
                  { key: "vibe", label: "Travel Vibe", icon: Heart, type: "select", options: ["Adventure", "Spiritual", "Luxury", "Relaxation"] },
                  { key: "interests", label: "Interests", icon: Sparkles, type: "text" },
                  { key: "duration", label: "Duration (days)", icon: Clock, type: "number" },
                  { key: "comfort", label: "Comfort Level", icon: Shield, type: "select", options: ["Budget", "Standard", "Premium", "Luxury"] },
                  { key: "diet", label: "Dietary Preferences", icon: Leaf, type: "select", options: ["Any", "Vegetarian", "Vegan", "Halal", "Jain"] },
                  { key: "accessibility", label: "Accessibility Needs", icon: Accessibility, type: "text" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="mb-2 flex items-center gap-2 text-sm text-white/60">
                      <field.icon className="h-4 w-4 text-yv-gold" />
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) =>
                          setForm({ ...form, [field.key]: e.target.value })
                        }
                        className="input-field"
                      >
                        {field.options?.map((o) => (
                          <option key={o} value={o} className="bg-yv-navy">
                            {o}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) =>
                          setForm({ ...form, [field.key]: e.target.value })
                        }
                        className="input-field"
                      />
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={handleGenerate}
                disabled={generating}
                className="btn-primary mt-8 w-full disabled:opacity-50"
              >
                <Sparkles className="h-4 w-4" />
                {generating ? "Generating Intelligence..." : "Generate Smart Itinerary"}
              </button>
            </div>

            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {generating && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="glass-card flex h-64 flex-col items-center justify-center p-8"
                  >
                    <div className="h-16 w-16 rounded-full border-2 border-yv-gold border-t-transparent animate-spin" />
                    <p className="mt-4 text-yv-gold">Analyzing 10,000+ routes...</p>
                  </motion.div>
                )}
                {result && !generating && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {[
                      {
                        icon: Route,
                        title: "Smart Itinerary",
                        content:
                          "Day 1-2: Delhi → Day 3-4: Agra Taj Mahal → Day 5-7: Rajasthan Desert Camp. Optimized for minimal travel time.",
                      },
                      {
                        icon: Wallet,
                        title: "Travel Budget",
                        content: "Estimated ₹48,200 — within your ₹50,000 budget. Includes hotels, transport & activities.",
                      },
                      {
                        icon: Sparkles,
                        title: "Destination Suggestions",
                        content: "Jaipur (98% match), Udaipur (94%), Jodhpur (91%) based on your adventure + culture profile.",
                      },
                      {
                        icon: Cloud,
                        title: "Weather Recommendations",
                        content: "Ideal window: October–March. Pack layers for desert nights. Monsoon avoid for Rajasthan.",
                      },
                    ].map((card, i) => (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className="glass-card border-yv-gold/20 p-6 shadow-glow"
                      >
                        <card.icon className="h-6 w-6 text-yv-gold" />
                        <h3 className="mt-3 font-semibold">{card.title}</h3>
                        <p className="mt-2 text-sm text-white/60">{card.content}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                {!result && !generating && (
                  <div className="glass-card p-8 text-center">
                    <BarChart3 className="mx-auto h-16 w-16 text-yv-gold/50" />
                    <p className="mt-4 text-white/50">
                      Fill in your preferences and let AI craft your perfect India journey
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
