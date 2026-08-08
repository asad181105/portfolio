"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <SectionShell>
      <div className="py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-sky-light/40 via-white to-cream p-6 text-center shadow-sm sm:rounded-3xl sm:p-8 md:p-10">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative z-10">
              <h2 className="mb-4 text-2xl font-bold text-coffee text-balance sm:text-3xl md:text-4xl">
                Let&apos;s build something extraordinary
              </h2>
              <p className="text-muted max-w-xl mx-auto mb-8">
                Open to internships, full-time roles, and collaborations with
                teams pushing the boundaries of web and AI.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <MagneticButton>
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                    <Link href="/about">Learn About Me</Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      </div>
    </SectionShell>
  );
}
