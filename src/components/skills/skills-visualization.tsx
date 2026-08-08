"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { skillCategories, radarData, floatingTech } from "@/data/skills";
import { Progress } from "@/components/ui/progress";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setValue(level), 100);
      return () => clearTimeout(t);
    }
  }, [isInView, level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
}

function CircularSkill({ name, level }: { name: string; level: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      className="flex flex-col items-center"
    >
      <div className="relative h-24 w-24">
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(111,78,55,0.15)"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              isInView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }
            }
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#6f4e37" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
          {level}%
        </span>
      </div>
      <p className="mt-2 text-xs text-muted text-center">{name}</p>
    </motion.div>
  );
}

export function SkillsVisualization({ embedded = false }: { embedded?: boolean }) {
  const Heading = embedded ? "h3" : "h2";
  const headingClass = embedded
    ? "text-lg font-semibold text-coffee"
    : "text-2xl font-bold text-coffee";

  return (
    <div className={embedded ? "space-y-10" : "pb-12 space-y-12"}>
      <section>
        {!embedded && (
        <ScrollReveal className="mb-12">
          <h2 className="text-2xl font-bold text-coffee">Skill Proficiency</h2>
          <p className="text-muted mt-2">Animated bars across domains</p>
        </ScrollReveal>
        )}
        <div className="grid gap-8 lg:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 0.05}>
              <div className="rounded-2xl border border-border p-8 bg-card">
                <h3 className="text-lg font-semibold mb-6 text-coffee">{cat.title}</h3>
                <div className="space-y-5">
                  {cat.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2 items-center">
        <ScrollReveal>
          <Heading className={`${headingClass} mb-4`}>Competency Radar</Heading>
          {!embedded && (
          <p className="text-muted mb-8">
            A holistic view of my technical strengths across engineering disciplines.
          </p>
          )}
          {embedded && <p className="text-muted mb-6 text-sm">Technical strengths at a glance.</p>}
          <div className="h-80 min-h-[320px] w-full min-w-0 rounded-2xl border border-border bg-card p-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(111,78,55,0.15)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "#7a6558", fontSize: 12 }}
                />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#38bdf8"
                  fill="#38bdf8"
                  fillOpacity={0.35}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Heading className={`${headingClass} mb-6`}>Top Technologies</Heading>
          <div className="grid grid-cols-3 gap-6">
            {skillCategories[0].skills.slice(0, 3).map((s) => (
              <CircularSkill key={s.name} {...s} />
            ))}
            {skillCategories[2].skills.slice(0, 3).map((s) => (
              <CircularSkill key={s.name} {...s} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-border bg-cream/30 py-10">
        <Heading className={`${headingClass} text-center mb-10`}>Tech Stack</Heading>
        <div className="relative h-32 overflow-hidden">
          <motion.div
            className="flex gap-8 absolute whitespace-nowrap"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...floatingTech, ...floatingTech].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-coffee"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
