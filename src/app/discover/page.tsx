"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import PageHero from "@/components/PageHero";
import DestinationCard from "@/components/DestinationCard";
import IndiaMap from "@/components/IndiaMap";
import { destinations } from "@/data/destinations";

const experienceFilters = [
  "Heritage & Architecture",
  "Wildlife & Safari",
  "Spiritual & Wellness",
  "Adventure & Adrenaline",
  "Cultural & Culinary",
];
const geoFilters = ["Mountains", "Beaches", "Deserts", "Forests", "Rivers & Backwaters"];
const regionFilters = ["North", "South", "East", "West", "Central", "Northeast"];
const vibeFilters = ["Solo Backpacking", "Family Vacations", "Honeymoon Trips", "Friends & Group Tours"];
const seasonFilters = ["Summer Escapes", "Monsoon Magic", "Winter Getaways", "Weekend Trips"];

export default function DiscoverPage() {
  const [search, setSearch] = useState("");
  const [activeRegion, setActiveRegion] = useState<string | undefined>();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (f: string) => {
    setSelectedFilters((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  };

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchSearch =
        !search ||
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.state.toLowerCase().includes(search.toLowerCase());
      const matchRegion = !activeRegion || d.region === activeRegion;
      const matchFilters =
        selectedFilters.length === 0 ||
        selectedFilters.some(
          (f) =>
            d.category.includes(f) ||
            d.vibe.includes(f) ||
            d.region === f ||
            d.tags.some((t) => f.includes(t))
        );
      return matchSearch && matchRegion && matchFilters;
    });
  }, [search, activeRegion, selectedFilters]);

  const FilterGroup = ({ title, items }: { title: string; items: string[] }) => (
    <div className="mb-6">
      <h4 className="mb-3 text-sm font-semibold text-yv-gold">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => toggleFilter(item)}
            className={`rounded-full border px-3 py-1 text-xs transition ${
              selectedFilters.includes(item)
                ? "border-yv-gold bg-yv-gold/20 text-yv-gold"
                : "border-white/10 text-white/60 hover:border-white/30"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <PageHero
        title="Discover India"
        subtitle="Explore by experience, geography, vibe, and season — powered by AI recommendations"
        backgroundImage="https://images.unsplash.com/photo-1524492412937-280b9d999ca8?w=1920&q=80"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <div className="glass-card sticky top-24 p-6">
                <div className="mb-6 flex items-center gap-2">
                  <Filter className="h-5 w-5 text-yv-gold" />
                  <h3 className="font-semibold">Advanced Filters</h3>
                </div>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="input-field pl-10 text-sm"
                  />
                </div>
                <FilterGroup title="By Experience & Interest" items={experienceFilters} />
                <FilterGroup title="By Geography" items={geoFilters} />
                <FilterGroup title="By Region" items={regionFilters} />
                <FilterGroup title="By Travel Vibe" items={vibeFilters} />
                <FilterGroup title="By Season" items={seasonFilters} />
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="mb-12 flex justify-center">
                <IndiaMap activeRegion={activeRegion} />
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {regionFilters.map((r) => (
                  <button
                    key={r}
                    onClick={() => setActiveRegion(activeRegion === r ? undefined : r)}
                    className={`rounded-full px-4 py-1.5 text-sm ${
                      activeRegion === r
                        ? "bg-yv-gold text-yv-black"
                        : "border border-white/10 hover:border-yv-gold/50"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <motion.p
                key={filtered.length}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 text-sm text-white/50"
              >
                {filtered.length} destinations found
              </motion.p>
              <div className="grid gap-8 sm:grid-cols-2">
                {filtered.map((d, i) => (
                  <DestinationCard key={d.id} destination={d} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
