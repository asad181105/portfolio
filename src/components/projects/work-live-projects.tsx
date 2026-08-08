"use client";

import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { ProjectThumbnail } from "@/components/projects/project-thumbnail";

const liveProjects = projects.filter((project) => project.embedUrl);

export function WorkLiveProjects() {
  if (liveProjects.length === 0) return null;

  return (
    <ScrollReveal>
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {liveProjects.map((project) => (
          <article
            key={project.slug}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:border-sky/40 hover:shadow-md"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="relative block aspect-[16/10] overflow-hidden"
            >
              <ProjectThumbnail
                src={project.thumbnail}
                alt={project.title}
                fill
                className="transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/70 via-coffee/20 to-transparent" />
              <Badge
                variant="accent"
                className="absolute left-3 top-3 bg-white/90 text-coffee"
              >
                Live
              </Badge>
            </Link>
            <div className="p-4">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="font-semibold text-coffee group-hover:text-sky-dark transition line-clamp-1">
                  {project.title}
                </h3>
              </Link>
              <p className="mt-1 text-xs text-muted line-clamp-2">
                {project.description}
              </p>
              <div className="mt-3 flex items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-sky-dark hover:underline"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Open site
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted hover:text-coffee"
                    aria-label="GitHub"
                  >
                    <GitHubIcon />
                  </a>
                )}
                <Link
                  href={`/projects/${project.slug}`}
                  className="ml-auto inline-flex items-center gap-1 text-xs text-muted hover:text-coffee"
                >
                  Details
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
}
