"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, User, Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1524492412937-280b9d999ca8?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-yv-black/85" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md px-4"
      >
        <div className="glass-card p-8">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold gradient-text">YatraVerse</h1>
            <p className="mt-2 text-sm text-white/50">Welcome back, traveler</p>
          </div>

          <div className="mt-8 flex rounded-xl bg-white/5 p-1">
            <button className="flex-1 rounded-lg bg-yv-gold py-2 text-sm font-semibold text-yv-black">
              Login
            </button>
            <button className="flex-1 rounded-lg py-2 text-sm text-white/60">Sign Up</button>
          </div>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input type="email" placeholder="Email" className="input-field pl-12" />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input type="password" placeholder="Password" className="input-field pl-12" />
            </div>
            <button type="submit" className="btn-primary w-full">
              <Sparkles className="h-4 w-4" />
              Sign In
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-yv-navy px-2 text-white/40">or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-xl border border-white/10 py-3 text-sm hover:bg-white/5">
              Google
            </button>
            <button className="rounded-xl border border-white/10 py-3 text-sm hover:bg-white/5">
              Apple
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-white/50">
            New to YatraVerse?{" "}
            <button className="text-yv-gold hover:underline">Create account</button>
          </p>
          <Link
            href="/dashboard"
            className="mt-4 block text-center text-sm text-white/40 hover:text-yv-gold"
          >
            Continue to Dashboard →
          </Link>
        </div>

        <div className="mt-6 glass-card p-6">
          <h3 className="flex items-center gap-2 font-semibold">
            <User className="h-5 w-5 text-yv-gold" />
            Sign Up Benefits
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/50">
            <li>• Save destinations & AI itineraries</li>
            <li>• Earn loyalty points on every booking</li>
            <li>• Priority expert connection</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
