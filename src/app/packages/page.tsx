"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { tourPackages, packageCategories } from "@/data/packages";

export default function PackagesPage() {
  const [category, setCategory] = useState<string | null>(null);
  const filtered = category
    ? tourPackages.filter((p) => p.category === category)
    : tourPackages;

  return (
    <>
      <PageHero
        title="Tour Packages"
        subtitle="Immersive curated journeys — luxury, spiritual, wildlife, adventure & more"
        backgroundImage="https://images.unsplash.com/photo-1524492412937-280b9d999ca8?w=1920&q=80"
      />

      <section className="py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4">
          <button
            onClick={() => setCategory(null)}
            className={`rounded-full px-4 py-2 text-sm ${
              !category ? "bg-yv-gold text-yv-black" : "border border-white/10"
            }`}
          >
            All
          </button>
          {packageCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                category === cat
                  ? "bg-yv-gold text-yv-black"
                  : "border border-white/10 hover:border-yv-gold/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {filtered.map((pkg, i) => (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card-hover group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yv-black to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-yv-gold/90 px-3 py-1 text-xs font-bold text-yv-black">
                    {pkg.category}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold">{pkg.title}</h3>
                  <div className="mt-3 flex items-center gap-4 text-sm text-white/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-yv-gold" />
                      {pkg.duration}
                    </span>
                    <span className="text-xl font-bold text-yv-gold">{pkg.price}</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase text-yv-gold">Highlights</p>
                    <ul className="mt-2 space-y-1">
                      {pkg.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-white/60">
                          <Check className="h-3 w-3 text-yv-emerald" /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase text-white/40">Inclusions</p>
                    <p className="mt-1 text-sm text-white/50">{pkg.inclusions.join(" • ")}</p>
                  </div>
                  <button className="btn-primary mt-6 w-full">
                    Book Package <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
