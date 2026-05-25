"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-yv-gold to-yv-saffron text-yv-black shadow-glow transition hover:scale-105"
        aria-label="AI Assistant"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-yv-navy/95 shadow-glass backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-yv-gold/20 to-transparent px-4 py-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-yv-gold" />
                <span className="font-semibold">Yatra AI Assistant</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-64 overflow-y-auto p-4">
              <div className="rounded-xl bg-white/5 p-3 text-sm text-white/80">
                Namaste! I&apos;m your AI travel companion. Ask me about destinations, itineraries, or the best time to visit India.
              </div>
            </div>
            <div className="flex gap-2 border-t border-white/10 p-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask anything about India..."
                className="input-field flex-1 text-sm"
              />
              <button className="rounded-xl bg-yv-gold p-3 text-yv-black">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
