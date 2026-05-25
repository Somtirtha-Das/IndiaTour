"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Sparkles, Heart, ArrowRight } from "lucide-react";
import type { Destination } from "@/data/destinations";

type Props = {
  destination: Destination;
  index?: number;
};

export default function DestinationCard({ destination, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass-card-hover group overflow-hidden"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yv-black via-yv-black/20 to-transparent" />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-yv-black/60 px-2 py-1 text-xs backdrop-blur-sm">
          <Sparkles className="h-3 w-3 text-yv-gold" />
          <span className="text-yv-gold">{destination.aiScore}%</span>
        </div>
        {destination.hidden && (
          <span className="absolute left-3 top-3 rounded-full bg-yv-emerald/80 px-2 py-0.5 text-xs font-medium">
            Hidden Gem
          </span>
        )}
        {destination.unesco && (
          <span className="absolute left-3 top-10 rounded-full bg-yv-saffron/80 px-2 py-0.5 text-xs font-medium">
            UNESCO
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-semibold">{destination.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-white/50">
              <MapPin className="h-3 w-3" /> {destination.state}
            </p>
          </div>
          <button className="rounded-full p-2 text-white/40 transition hover:bg-white/5 hover:text-yv-gold">
            <Heart className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-white/60">{destination.description}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {destination.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-2 text-xs text-yv-emerald">Best: {destination.season}</p>
        <Link
          href={`/destinations/${destination.id}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-yv-gold transition hover:gap-2"
        >
          Explore <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
