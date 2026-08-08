"use client";

import { motion } from "framer-motion";

export function WorldMap() {
  return (
    <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-border bg-sky-light/20">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full opacity-40"
        aria-hidden
      >
        <ellipse cx="400" cy="200" rx="380" ry="180" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-coffee/30" />
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1={0}
            y1={i * 33}
            x2={800}
            y2={i * 33}
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-coffee/15"
          />
        ))}
      </svg>
      <motion.div
        className="absolute left-[58%] top-[42%] h-4 w-4 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="absolute inset-0 rounded-full bg-sky/40 animate-ping" />
        <span className="relative block h-4 w-4 rounded-full bg-sky shadow-[0_0_20px_rgba(56,189,248,0.6)]" />
      </motion.div>
      <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-2 text-sm text-coffee backdrop-blur-sm shadow-sm">
        📍 Hyderabad, India
      </div>
    </div>
  );
}
