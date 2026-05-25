"use client";

import { motion } from "framer-motion";
import { Target, Eye, Sparkles, Leaf, Users, Rocket } from "lucide-react";
import PageHero from "@/components/PageHero";

const roadmap = [
  { year: "2024", title: "Platform Launch", desc: "AI discovery engine & expert network" },
  { year: "2025", title: "YatraGo Nationwide", desc: "Premium mobility across 50 cities" },
  { year: "2026", title: "Global Expansion", desc: "India tourism hub for world travelers" },
  { year: "2027", title: "Metaverse Experiences", desc: "Virtual previews before you travel" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About YatraVerse"
        subtitle="Reimagining Indian tourism through AI, human expertise & immersive technology"
        backgroundImage="https://images.unsplash.com/photo-1524492412937-280b9d999ca8?w=1920&q=80"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <Target className="h-10 w-10 text-yv-gold" />
              <h2 className="mt-4 font-display text-2xl font-bold">Our Vision</h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                To make India the world&apos;s most discoverable, accessible, and emotionally
                immersive travel destination — powered by technology that respects culture and
                celebrates diversity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <Eye className="h-10 w-10 text-yv-saffron" />
              <h2 className="mt-4 font-display text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Connect every traveler with the soul of India through AI-powered discovery,
                human-curated experiences, and seamless end-to-end travel services.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 glass-card p-8 text-center">
            <Sparkles className="mx-auto h-12 w-12 text-yv-gold" />
            <h2 className="mt-4 font-display text-3xl font-bold">AI + Human Integration</h2>
            <p className="mx-auto mt-4 max-w-3xl text-white/60">
              YatraVerse uses AI for smart recommendations, route optimization, and personalization
              internally — while certified human travel experts deliver the final touch: cultural
              nuance, emotional connection, and booking support in 10 languages.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-center">Founder&apos;s Vision</h2>
            <p className="mx-auto mt-6 max-w-3xl text-center text-white/60 leading-relaxed">
              &quot;India deserves a tourism platform as magnificent as its heritage. YatraVerse
              isn&apos;t just a booking site — it&apos;s an ecosystem that tells India&apos;s story
              to the world with cinematic beauty and intelligent technology.&quot;
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="glass-card p-8">
              <Users className="h-10 w-10 text-yv-emerald" />
              <h3 className="mt-4 font-display text-xl font-bold">Tourism Impact</h3>
              <p className="mt-2 text-white/60">
                Empowering local communities, promoting lesser-known destinations, and creating
                sustainable livelihoods across rural India.
              </p>
            </div>
            <div className="glass-card p-8">
              <Leaf className="h-10 w-10 text-yv-emerald" />
              <h3 className="mt-4 font-display text-xl font-bold">Sustainability Goals</h3>
              <p className="mt-2 text-white/60">
                Carbon-neutral tours by 2028, plastic-free journeys, and partnerships with
                eco-certified accommodations nationwide.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold flex items-center gap-2">
              <Rocket className="h-8 w-8 text-yv-gold" />
              Roadmap
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {roadmap.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card border-l-2 border-yv-gold p-6"
                >
                  <span className="text-2xl font-bold text-yv-gold">{item.year}</span>
                  <h3 className="mt-2 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
