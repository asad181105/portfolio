"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <SectionShell>
      <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-sky-light/40 via-white to-cream p-8 md:p-10 text-center shadow-sm">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold md:text-4xl mb-4 text-coffee">
                Let&apos;s build something extraordinary
              </h2>
              <p className="text-muted max-w-xl mx-auto mb-8">
                Open to internships, full-time roles, and collaborations with
                teams pushing the boundaries of web and AI.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton>
                  <Button variant="gradient" size="lg" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="outline" size="lg" asChild>
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
