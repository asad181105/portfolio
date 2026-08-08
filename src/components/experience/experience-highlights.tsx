"use client";

import { motion } from "framer-motion";
import { experienceTimeline } from "@/data/experience";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

const typeIcons: Record<string, string> = {
  internship: "💼",
  opensource: "🌐",
  competition: "🏆",
  certification: "📜",
  college: "🎓",
};

const highlights = experienceTimeline.filter((item) => item.type === "competition").slice(0, 4);

export function ExperienceHighlights() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {highlights.map((item, i) => (
        <ScrollReveal key={item.id} delay={i * 0.05}>
          <motion.div
            whileHover={{ y: -2 }}
            className="rounded-xl border border-border bg-white/80 p-4 shadow-sm transition hover:border-sky/30"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <span className="text-lg">{typeIcons[item.type] ?? "•"}</span>
              <span className="text-[10px] font-mono uppercase tracking-wide text-sky-dark">
                {item.period}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-coffee leading-snug">
              {item.title}
            </h3>
            <p className="mt-1 text-xs text-muted line-clamp-2">
              {item.organization}
            </p>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  );
}
