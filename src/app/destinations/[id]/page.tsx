import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Utensils,
  Train,
  MapPin,
  Star,
  Sparkles,
  Compass,
} from "lucide-react";
import { destinations } from "@/data/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({ id: d.id }));
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const destination = destinations.find((d) => d.id === id);
  if (!destination) notFound();

  return (
    <>
      <section className="relative h-[70vh] min-h-[400px] pt-20">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yv-black via-yv-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="mx-auto max-w-7xl">
            <span className="rounded-full bg-yv-gold/20 px-3 py-1 text-sm text-yv-gold">
              AI Score {destination.aiScore}%
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">
              {destination.name}
            </h1>
            <p className="mt-2 flex items-center gap-2 text-white/70">
              <MapPin className="h-4 w-4" /> {destination.state}, India
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8">
              <h2 className="font-display text-2xl font-semibold">About</h2>
              <p className="mt-4 text-white/70 leading-relaxed">{destination.description}</p>
              <p className="mt-4 text-white/70 leading-relaxed">
                Experience the authentic beauty of {destination.state} with curated activities,
                local insights, and seamless travel planning powered by YatraVerse AI.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="font-display text-2xl font-semibold">Things to Do</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Guided heritage walks",
                  "Local cuisine tasting",
                  "Photography tours",
                  "Cultural performances",
                  "Sunrise/sunset viewpoints",
                  "Expert-led excursions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/70">
                    <Compass className="h-4 w-4 text-yv-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8">
              <h2 className="font-display text-2xl font-semibold">Reviews</h2>
              <div className="mt-4 flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-yv-gold text-yv-gold" />
                ))}
                <span className="text-white/60">4.9 (2,340 reviews)</span>
              </div>
              <p className="mt-4 text-white/60 italic">
                &quot;An absolutely transformative experience. YatraVerse planned every detail perfectly.&quot;
                — Traveler from Mumbai
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 text-yv-gold">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">Best Time to Visit</span>
              </div>
              <p className="mt-2 text-white/70">{destination.season}</p>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 text-yv-gold">
                <Utensils className="h-5 w-5" />
                <span className="font-semibold">Local Food</span>
              </div>
              <p className="mt-2 text-white/70">
                Regional specialties, street food markets, and fine-dining experiences.
              </p>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 text-yv-gold">
                <Train className="h-5 w-5" />
                <span className="font-semibold">Transport Access</span>
              </div>
              <p className="mt-2 text-white/70">
                Nearest airport, rail connectivity, and YatraGo chauffeur services available.
              </p>
            </div>
            <div className="glass-card border-yv-gold/30 p-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-yv-gold" />
                <span className="font-semibold">AI Recommendations</span>
              </div>
              <p className="mt-2 text-sm text-white/60">
                Pair with nearby attractions for a 5-day optimized route. Budget-friendly
                alternatives suggested based on your profile.
              </p>
              <Link href="/ai-planner" className="btn-primary mt-4 w-full text-center text-sm">
                Plan with AI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
