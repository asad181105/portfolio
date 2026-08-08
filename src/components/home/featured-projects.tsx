"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/effects/tilt-card";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { ProjectThumbnail } from "@/components/projects/project-thumbnail";
import { Button } from "@/components/ui/button";

const featured = projects.filter((p) => p.featured).slice(0, 3);

export function FeaturedProjects() {
  return (
    <SectionShell>
      <div className="py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="section-eyebrow text-sm uppercase tracking-widest text-sky-dark mb-4">
              Featured Work
            </p>
            <h2 className="text-3xl font-bold md:text-4xl text-coffee">
              Projects that define my craft
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/projects">
              View all work <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <TiltCard>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ProjectThumbnail
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <Badge variant="accent" className="mb-3">
                      {project.category}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2 text-coffee group-hover:text-sky-dark transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-xs text-muted border border-border rounded-full px-2 py-0.5 bg-cream/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <span className="text-muted hover:text-coffee">
                          <GitHubIcon />
                        </span>
                      )}
                      {project.live && (
                        <span className="text-muted hover:text-coffee">
                          <ExternalLink className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
      </div>
    </SectionShell>
  );
}
