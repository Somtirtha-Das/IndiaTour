"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, Eye, Church, TreePine, Gem } from "lucide-react";
import PageHero from "@/components/PageHero";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";

const sections = [
  { id: "famous", title: "Famous Destinations", icon: Crown, filter: (d: typeof destinations[0]) => !d.hidden },
  { id: "hidden", title: "Hidden Gems", icon: Gem, filter: (d: typeof destinations[0]) => d.hidden },
  { id: "unesco", title: "UNESCO Heritage", icon: Church, filter: (d: typeof destinations[0]) => d.unesco },
  { id: "spiritual", title: "Spiritual Circuits", icon: Eye, filter: (d: typeof destinations[0]) => d.category.includes("Spiritual & Wellness") },
  { id: "wildlife", title: "Wildlife Destinations", icon: TreePine, filter: (d: typeof destinations[0]) => d.category.includes("Wildlife & Safari") },
];

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title="Destinations"
        subtitle="Famous landmarks, hidden gems, UNESCO sites, spiritual circuits, wildlife & luxury escapes"
        backgroundImage="https://images.unsplash.com/photo-1561361513-0999b1d0b6f9?w=1920&q=80"
      />

      <section className="py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="glass-card flex items-center gap-2 px-4 py-2 text-sm transition hover:border-yv-gold/30"
            >
              <s.icon className="h-4 w-4 text-yv-gold" />
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {sections.map((section) => {
        const items = destinations.filter(section.filter);
        if (items.length === 0) return null;
        return (
          <section key={section.id} id={section.id} className="py-16">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="mb-10 flex items-center gap-3">
                <section.icon className="h-8 w-8 text-yv-gold" />
                <h2 className="font-display text-3xl font-bold">{section.title}</h2>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((d, i) => (
                  <DestinationCard key={d.id} destination={d} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-4 lg:px-8"
        >
          <div className="relative h-80 overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1524492412937-280b9d999ca8?w=1200&q=80"
              alt="Luxury escape"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-yv-black via-yv-black/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-12">
              <span className="text-sm uppercase tracking-wider text-yv-gold">Luxury Escapes</span>
              <h3 className="mt-2 font-display text-4xl font-bold">Palace & Private Journeys</h3>
              <p className="mt-2 max-w-md text-white/60">
                Exclusive heritage hotels, private jets, and bespoke royal experiences.
              </p>
              <Link href="/packages" className="btn-primary mt-6 w-fit">
                Explore Luxury Tours
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
