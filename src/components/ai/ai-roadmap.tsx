"use client";

import { motion } from "framer-motion";
import { aiRoadmap, aiLearningTimeline, modelsExplored, aiTools, aiExperiments, aiFutureGoals } from "@/data/ai-journey";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { cn } from "@/lib/utils";

const statusStyles = {
  completed: "bg-sky-light/60 border-sky/40 text-sky-dark",
  "in-progress": "bg-cream border-coffee/30 text-coffee",
  planned: "bg-white border-border text-muted",
};

export function AIRoadmap() {
  return (
    <div className="pb-12 space-y-12">
      <section>
        <ScrollReveal className="mb-10">
          <h2 className="text-2xl font-bold text-coffee">Learning Timeline</h2>
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aiLearningTimeline.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-border p-6 bg-card h-full shadow-sm">
                <span className="text-sm font-mono text-sky-dark">{item.year}</span>
                <h3 className="font-semibold mt-2 mb-2 text-coffee">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section>
        <ScrollReveal className="mb-10">
          <h2 className="text-2xl font-bold text-coffee">Interactive Roadmap</h2>
          <p className="text-muted mt-2">My path from ML foundations to production AI</p>
        </ScrollReveal>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
          <div className="grid gap-6 md:grid-cols-5">
            {aiRoadmap.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div
                  className={cn(
                    "rounded-2xl border p-5 text-center",
                    statusStyles[node.status]
                  )}
                >
                  <h3 className="font-semibold text-sm mb-1">{node.title}</h3>
                  <p className="text-xs opacity-80 mb-3">{node.description}</p>
                  {node.tools && (
                    <div className="flex flex-wrap justify-center gap-1">
                      {node.tools.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-white/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <ScrollReveal>
          <h2 className="text-xl font-semibold mb-4 text-coffee">Models Explored</h2>
          <div className="flex flex-wrap gap-2">
            {modelsExplored.map((m) => (
              <span
                key={m}
                className="rounded-full border border-sky/30 bg-sky-light/40 px-3 py-1 text-sm text-sky-dark"
              >
                {m}
              </span>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-xl font-semibold mb-4 text-coffee">Tools Used</h2>
          <div className="flex flex-wrap gap-2">
            {aiTools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-cream px-3 py-1 text-sm text-coffee"
              >
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section>
        <ScrollReveal className="mb-8">
          <h2 className="text-2xl font-bold text-coffee">Experiments</h2>
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-3">
          {aiExperiments.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-border p-6 bg-gradient-to-br from-sky-light/30 to-cream">
                <h3 className="font-semibold mb-2 text-coffee">{exp.title}</h3>
                <p className="text-sm text-muted">{exp.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section>
        <ScrollReveal>
          <div className="rounded-3xl border border-border bg-gradient-to-r from-sky-light/40 to-cream p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6 text-coffee">Future Goals</h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {aiFutureGoals.map((goal) => (
                <li key={goal} className="flex gap-3 text-muted">
                  <span className="text-sky-dark">✦</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
