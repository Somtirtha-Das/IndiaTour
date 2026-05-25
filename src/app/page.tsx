"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import {
  Search,
  Sparkles,
  Compass,
  Map,
  Bot,
  Car,
  Package,
  Plane,
} from "lucide-react";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

/** Uniform overlay opacity for every hero slide (text readability) */
const HERO_OVERLAY_CLASS = "absolute inset-0 bg-black/55";

const heroSlides = [
  {
    id: "ram-mandir",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1920&q=85&auto=format&fit=crop",
    alt: "Ram Mandir temple architecture at Ayodhya",
    title: "Ram Mandir",
    tagline: "Witness divine grandeur reborn on the sacred Sarayu ghats",
    region: "Ayodhya, Uttar Pradesh",
  },
  {
    id: "goa-beach",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf10e773?w=1920&q=85&auto=format&fit=crop",
    alt: "Palm-lined golden beach in Goa at sunset",
    title: "Goa",
    tagline: "Sun-kissed shores, Portuguese charm, and endless coastal rhythm",
    region: "Goa",
  },
  {
    id: "taj-mahal",
    image:
      "https://images.unsplash.com/photo-1564507592333-d60657eea5ab?w=1920&q=85&auto=format&fit=crop",
    alt: "Taj Mahal marble mausoleum reflected at dawn",
    title: "Taj Mahal",
    tagline: "Marble poetry in moonlight — India's eternal monument of love",
    region: "Agra, Uttar Pradesh",
  },
  {
    id: "himalayas",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format&fit=crop",
    alt: "Snow-capped Himalayan mountain peaks above clouds",
    title: "Himalayas",
    tagline: "Summit silence, alpine air, and peaks that touch the heavens",
    region: "Himachal Pradesh & Uttarakhand",
  },
  {
    id: "dal-lake",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=85&auto=format&fit=crop",
    alt: "Houseboats and shikaras on Dal Lake in Srinagar",
    title: "Dal Lake",
    tagline: "Shikara glides through mirror waters beneath Zabarwan peaks",
    region: "Srinagar, Kashmir",
  },
  {
    id: "darjeeling",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&q=85&auto=format&fit=crop",
    alt: "Tea gardens and misty hills of Darjeeling",
    title: "Darjeeling",
    tagline: "Emerald tea terraces, toy trains, and mist in the Eastern Himalayas",
    region: "West Bengal",
  },
  {
    id: "kedarnath",
    image:
      "https://images.unsplash.com/photo-1605647546594-d7fd13f6062a?w=1920&q=85&auto=format&fit=crop",
    alt: "Kedarnath temple nestled in the Garhwal Himalayas",
    title: "Kedarnath",
    tagline: "Ancient Shiva shrine cradled among towering Garhwal peaks",
    region: "Uttarakhand",
  },
];

const moods = ["Adventure", "Spiritual", "Luxury", "Wildlife", "Beach", "Heritage"];

const features = [
  { icon: Bot, title: "AI Trip Planner", href: "/ai-planner", desc: "Smart itineraries in seconds" },
  { icon: Map, title: "Discover India", href: "/discover", desc: "Filter by vibe & region" },
  { icon: Car, title: "YatraGo", href: "/yatrago", desc: "Premium mobility services" },
  { icon: Package, title: "Tour Packages", href: "/packages", desc: "Curated luxury journeys" },
  { icon: Plane, title: "Booking Platform", href: "/booking", desc: "Flights, hotels & more" },
  { icon: Compass, title: "Destinations", href: "/destinations", desc: "Famous & hidden gems" },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];

  return (
    <>
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="hero-swiper h-full w-full"
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  quality={85}
                  className="object-cover object-center"
                  sizes="100vw"
                />
                <div className={HERO_OVERLAY_CLASS} aria-hidden />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute inset-x-0 bottom-28 z-10 px-4 md:bottom-32 md:px-8 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-xl text-left"
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-yv-gold md:text-sm">
                {currentSlide.region}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-5xl">
                {currentSlide.title}
              </h2>
              <p className="mt-2 text-sm text-white/80 md:text-lg">{currentSlide.tagline}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pt-16 text-center pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-yv-gold">
              YatraVerse
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
              <span className="gradient-text">Discover the Soul</span>
              <br />
              <span className="text-white">of India</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
              AI-Powered Tourism Discovery, Travel Planning & Experience Ecosystem
            </p>

            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Search destinations, experiences..."
                  className="input-field pl-12"
                />
              </div>
              <button className="btn-primary whitespace-nowrap">
                <Sparkles className="h-4 w-4" />
                AI Assistant
              </button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/discover" className="btn-primary">
                Explore Destinations
              </Link>
              <Link href="/ai-planner" className="btn-outline">
                Plan Your Journey
              </Link>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute right-8 top-1/3 hidden rounded-2xl glass-card p-4 lg:block"
          >
            <p className="text-xs text-white/50">AI Score</p>
            <p className="text-2xl font-bold text-yv-gold">98%</p>
            <p className="text-xs text-white/50">{currentSlide.title} Match</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
            className="absolute left-8 bottom-1/3 hidden rounded-2xl glass-card p-4 lg:block"
          >
            <p className="text-xs text-white/50">Live Experts</p>
            <p className="text-lg font-semibold text-yv-emerald">24/7</p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-yv-navy/30 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4">
          <span className="text-sm text-white/50">Travel Mood:</span>
          {moods.map((mood) => (
            <button
              key={mood}
              className="rounded-full border border-white/10 px-4 py-1.5 text-sm transition hover:border-yv-gold/50 hover:text-yv-gold"
            >
              {mood}
            </button>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">The Future of Indian Tourism</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Luxury travel platform meets AI startup — immersive discovery at global scale.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={f.href} className="glass-card-hover block p-8">
                  <f.icon className="h-10 w-10 text-yv-gold" />
                  <h3 className="mt-4 font-display text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{f.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-premium py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-end justify-between gap-4 md:flex-row">
            <div>
              <h2 className="section-title">Trending Destinations</h2>
              <p className="mt-2 text-white/60">AI-curated picks for your next journey</p>
            </div>
            <Link href="/discover" className="btn-outline">
              View All
            </Link>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.slice(0, 6).map((d, i) => (
              <DestinationCard key={d.id} destination={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="section-title">AI + Human Assisted Travel</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Our AI recommends internally while human experts deliver personalized planning,
            bookings, and on-ground support in your language.
          </p>
          <Link href="/ai-planner" className="btn-primary mt-8">
            <Sparkles className="h-4 w-4" />
            Start AI Planning
          </Link>
        </div>
      </section>
    </>
  );
}
