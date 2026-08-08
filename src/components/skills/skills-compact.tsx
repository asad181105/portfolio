"use client";

import { skillCategories, floatingTech } from "@/data/skills";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function SkillsCompact() {
  return (
    <div className="space-y-6">
      <div className="grid gap-3">
        {skillCategories.map((category, i) => (
          <ScrollReveal key={category.id} delay={i * 0.04}>
            <div className="rounded-xl border border-border bg-white/80 p-4">
              <h3 className="mb-2 text-sm font-semibold text-coffee">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.slice(0, 5).map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-border bg-cream/50 px-2.5 py-1 text-xs text-coffee"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {floatingTech.slice(0, 8).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-cream/50 px-2.5 py-1 text-xs text-coffee"
            >
              {tech}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
