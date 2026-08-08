"use client";

import { AnimatedCounter } from "@/components/effects/animated-counter";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { achievementStats } from "@/data/experience";

export function AchievementStats() {
  return (
    <ScrollReveal>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 rounded-2xl border border-border bg-card p-4 md:p-5 shadow-sm">
        {achievementStats.map((stat) => (
          <AnimatedCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </ScrollReveal>
  );
}
