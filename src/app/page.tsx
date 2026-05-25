"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    label: "Himalayas",
  },
  {
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1920&q=80",
    label: "Ram Mandir, Ayodhya",
  },
  {
    image: "https://images.unsplash.com/photo-1602216057658-fb9b03d31fbe?w=1920&q=80",
    label: "Kerala Backwaters",
  },
  {
    image: "https://images.unsplash.com/photo-1477587459743-5500bb8992c8?w=1920&q=80",
    label: "Rajasthan Deserts",
  },
  {
    image: "https://images.unsplash.com/photo-1512343879784-a960bf10e773?w=1920&q=80",
    label: "Goa Beaches",
  },
  {
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
    label: "Wildlife Safaris",
  },
  {
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1920&q=80",
    label: "Northeast Landscapes",
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
  return (
    <>
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full w-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.label}>
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.label}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-yv-black/60 via-yv-black/50 to-yv-black" />
                <span className="absolute bottom-32 left-8 rounded-full bg-black/40 px-4 py-1 text-sm backdrop-blur-sm">
                  {slide.label}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-16 text-center">
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
            <p className="text-xs text-white/50">Ayodhya Match</p>
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
