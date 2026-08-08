"use client";

import Link from "next/link";
import { ArrowRight, Brain, Code2, Rocket } from "lucide-react";
import { Spotlight } from "@/components/effects/spotlight";
import { GsapParallax } from "@/components/effects/gsap-parallax";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/scroll-reveal";
import { SectionShell } from "@/components/layout/section-shell";

const highlights = [
  {
    icon: Rocket,
    title: "Entrepreneur & AI Startup Founder",
    description:
      "Building The Origami AI — an AI tech startup delivering intelligent products and real-world solutions at theorigamiai.com.",
    href: "https://theorigamiai.com",
    external: true,
  },
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description:
      "Production-ready apps with Next.js, React, Node.js, Flask, and modern databases — from backend APIs to polished user interfaces.",
    href: "/projects#projects",
    external: false,
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Computer vision, LLMs, speech recognition, and deep learning — building systems like OCR pipelines, call center AI, and YOLOv8 detection.",
    href: "/projects#skills",
    external: false,
  },
];

export function Highlights() {
  return (
    <SectionShell id="highlights">
      <div className="py-8 sm:py-12 md:py-16">
      <GsapParallax>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="text-center mb-10">
          <p className="section-eyebrow text-sm uppercase tracking-widest text-sky-dark mb-4">
            What I Do
          </p>
          <h2 className="text-3xl font-bold md:text-4xl text-coffee">
            Engineering for the{" "}
            <span className="gradient-text">next generation</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <Spotlight>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full rounded-2xl border border-border bg-card p-5 transition hover:border-sky/40 hover:shadow-md hover:shadow-sky/10 sm:p-8"
                  >
                    <HighlightCardContent item={item} />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="group block h-full rounded-2xl border border-border bg-card p-5 transition hover:border-sky/40 hover:shadow-md hover:shadow-sky/10 sm:p-8"
                  >
                    <HighlightCardContent item={item} />
                  </Link>
                )}
              </Spotlight>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
      </GsapParallax>
      </div>
    </SectionShell>
  );
}

function HighlightCardContent({
  item,
}: {
  item: (typeof highlights)[number];
}) {
  return (
    <>
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-light/50 text-sky-dark">
        <item.icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-coffee group-hover:text-sky-dark transition">
        {item.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-6">
        {item.description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm text-sky-dark">
        Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </>
  );
}
