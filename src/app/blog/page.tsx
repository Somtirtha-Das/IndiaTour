"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, User, Play, BookOpen } from "lucide-react";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <PageHero
        title="Travel Stories"
        subtitle="National Geographic meets luxury travel magazine — cinematic stories & hidden gems"
        backgroundImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-yv-gold">Featured Stories</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {featured.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-80">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yv-black via-yv-black/30 to-transparent" />
                  <div className="absolute bottom-0 p-8">
                    <span className="rounded-full bg-yv-gold/90 px-3 py-1 text-xs font-bold text-yv-black">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold">{post.title}</h3>
                    <p className="mt-2 text-white/70">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold">Travel Reels</h2>
            <button className="flex items-center gap-2 text-yv-gold">
              <Play className="h-5 w-5" /> Watch All
            </button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {blogPosts
              .filter((p) => p.category === "Travel Reels")
              .concat(blogPosts.slice(0, 3))
              .slice(0, 4)
              .map((post) => (
                <div key={post.id} className="relative aspect-[9/16] overflow-hidden rounded-2xl">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-yv-gold" />
            All Stories
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card-hover overflow-hidden"
              >
                <div className="relative h-48">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-yv-gold">{post.category}</span>
                  <h3 className="mt-2 font-semibold">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-white/50">{post.excerpt}</p>
                  <p className="mt-3 text-xs text-white/40">
                    {post.author} · {post.readTime}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
