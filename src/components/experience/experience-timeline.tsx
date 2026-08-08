"use client";

import { motion } from "framer-motion";
import { experienceTimeline } from "@/data/experience";
import { cn } from "@/lib/utils";

const typeIcons: Record<string, string> = {
  internship: "💼",
  opensource: "🌐",
  competition: "🏆",
  certification: "📜",
  college: "🎓",
};

export function ExperienceTimeline() {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
      <div className="space-y-10">
        {experienceTimeline.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08 }}
            className="relative pl-16"
          >
            <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-card text-xs">
              {typeIcons[item.type] ?? "•"}
            </div>
            <div
              className={cn(
                "rounded-2xl border border-border bg-card p-6 shadow-sm",
                "hover:border-sky/30 transition"
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="font-semibold text-coffee">{item.title}</h3>
                <span className="text-xs text-sky-dark font-mono">{item.period}</span>
              </div>
              <p className="text-sm text-coffee-light mb-2">{item.organization}</p>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
