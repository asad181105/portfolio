"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SectionShell } from "@/components/layout/section-shell";

export function PageHeader({
  label,
  title,
  description,
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <SectionShell className={className}>
      <div className="pt-10 pb-8 md:pt-12 md:pb-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ScrollReveal>
            {label && (
              <p className="section-eyebrow mb-4 text-sm font-medium uppercase tracking-widest text-sky-dark">
                {label}
              </p>
            )}
            <h1 className="text-4xl font-bold tracking-tight text-coffee md:text-5xl lg:text-6xl text-balance">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-lg text-muted leading-relaxed">
                {description}
              </p>
            )}
          </ScrollReveal>
        </div>
      </div>
    </SectionShell>
  );
}
