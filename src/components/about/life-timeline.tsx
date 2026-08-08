"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { lifeTimeline } from "@/data/timeline";
import { cn } from "@/lib/utils";

const typeColors: Record<string, string> = {
  education: "border-sky/50 bg-sky-light/40",
  milestone: "border-coffee/40 bg-cream",
  internship: "border-sky-dark/50 bg-sky-light/30",
  project: "border-coffee-light/50 bg-cream",
};

export function LifeTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px">
        <motion.div
          className="w-full bg-gradient-to-b from-sky to-coffee origin-top"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="space-y-12">
        {lifeTimeline.map((event, i) => (
          <motion.div
            key={event.year + event.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={cn(
              "relative flex flex-col md:flex-row gap-6 md:gap-12",
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            <div className="md:w-1/2 md:text-right md:pr-12 flex items-start gap-4 md:justify-end">
              <div
                className={cn(
                  "absolute left-4 md:left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 bg-background z-10 mt-1.5",
                  typeColors[event.type]?.split(" ")[0] ?? "border-border"
                )}
              />
              <div className={cn("md:hidden", i % 2 !== 0 && "order-2")}>
                <span className="text-sm font-mono text-sky-dark">{event.year}</span>
              </div>
              <div className={cn("pl-10 md:pl-0", i % 2 === 0 ? "md:pr-0" : "md:pl-12 md:text-left")}>
                <span className="hidden md:inline text-sm font-mono text-sky-dark">
                  {event.year}
                </span>
                <h3 className="text-lg font-semibold mt-1 text-coffee">{event.title}</h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
