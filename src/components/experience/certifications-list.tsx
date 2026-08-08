"use client";

import { ExternalLink, Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function CertificationsList() {
  return (
    <div className="space-y-3">
      {certifications.map((cert, i) => (
        <ScrollReveal key={cert.id} delay={i * 0.04}>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 rounded-xl border border-border bg-white/80 p-4 transition hover:border-sky/40 hover:shadow-sm"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-light/50 text-sky-dark">
              <Award className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-coffee leading-snug group-hover:text-sky-dark transition">
                {cert.title}
              </p>
              <p className="mt-0.5 text-xs text-muted">{cert.issuer}</p>
            </div>
            <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-muted group-hover:text-sky-dark" />
          </a>
        </ScrollReveal>
      ))}
    </div>
  );
}
