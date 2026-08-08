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
      <div className="px-4 py-8 sm:px-6 sm:py-10 md:pt-12 md:pb-10">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            {label && (
              <p className="section-eyebrow mb-3 text-xs font-medium uppercase tracking-widest text-sky-dark sm:mb-4 sm:text-sm">
                {label}
              </p>
            )}
            <h1 className="text-3xl font-bold tracking-tight text-coffee text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="mt-3 text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">
                {description}
              </p>
            )}
          </ScrollReveal>
        </div>
      </div>
    </SectionShell>
  );
}
