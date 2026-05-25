"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Premium support, travel consultation & partnership inquiries"
        backgroundImage="https://images.unsplash.com/photo-1561361513-0999b1d0b6f9?w=1920&q=80"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <h2 className="font-display text-2xl font-bold">Send a Message</h2>
              <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input placeholder="Your Name" className="input-field" />
                <input type="email" placeholder="Email Address" className="input-field" />
                <input placeholder="Subject" className="input-field" />
                <textarea
                  placeholder="How can we help with your India journey?"
                  rows={5}
                  className="input-field resize-none"
                />
                <button type="submit" className="btn-primary w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
              <button className="btn-outline mt-4 w-full">
                <MessageCircle className="h-4 w-4" />
                Book Travel Consultation
              </button>
            </motion.div>

            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-semibold text-yv-gold">Office Locations</h3>
                <ul className="mt-4 space-y-4 text-white/70">
                  <li className="flex gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-yv-gold" />
                    <div>
                      <p className="font-medium text-white">Headquarters — New Delhi</p>
                      <p className="text-sm">Connaught Place, New Delhi 110001</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-yv-gold" />
                    <div>
                      <p className="font-medium text-white">Mumbai Hub</p>
                      <p className="text-sm">Bandra Kurla Complex, Mumbai 400051</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-yv-gold" />
                    <div>
                      <p className="font-medium text-white">Bangalore Tech Center</p>
                      <p className="text-sm">Koramangala, Bengaluru 560034</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-yv-gold">Support Center</h3>
                <div className="mt-4 space-y-3">
                  <p className="flex items-center gap-2 text-white/70">
                    <Phone className="h-4 w-4 text-yv-gold" /> +91 1800-YATRA (24/7)
                  </p>
                  <p className="flex items-center gap-2 text-white/70">
                    <Mail className="h-4 w-4 text-yv-gold" /> hello@yatraverse.com
                  </p>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-yv-gold">Follow Us</h3>
                <p className="mt-2 text-sm text-white/50">
                  @yatraverse on Instagram, Twitter, YouTube & LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
