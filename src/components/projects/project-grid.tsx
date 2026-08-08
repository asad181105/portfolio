"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/effects/tilt-card";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { ProjectThumbnail } from "@/components/projects/project-thumbnail";
import { cn } from "@/lib/utils";

export function ProjectGrid({
  embedded = false,
  compact = false,
}: {
  embedded?: boolean;
  compact?: boolean;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory = category === "All" || p.category === category;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));
      const matchCompact = compact ? !p.featured : true;
      return matchCategory && matchSearch && matchCompact;
    });
  }, [search, category, compact]);

  const featured = projects.filter((p) => p.featured);

  return (
    <div className={embedded ? "" : "pb-12"}>
      {!compact && (
      <section className={embedded ? "mb-8" : "mb-10"}>
        {!embedded && (
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-8 text-coffee">Featured Projects</h2>
        </ScrollReveal>
        )}
        {embedded && (
        <ScrollReveal>
          <h3 className="text-lg font-semibold mb-6 text-coffee">Featured</h3>
        </ScrollReveal>
        )}
        <div className="grid gap-8 lg:grid-cols-2">
          {featured.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <TiltCard>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2"
                >
                  <div className="relative aspect-video lg:aspect-auto lg:min-h-[240px]">
                    <ProjectThumbnail
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="accent" className="w-fit mb-4">
                      Featured · {project.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-sky-dark transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="text-xs text-muted border border-border rounded px-2 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>
      )}

      {compact && (
        <p className="section-eyebrow mb-4 text-sm uppercase tracking-widest text-sky-dark">
          More Projects
        </p>
      )}

      <div className={cn("flex flex-col gap-4 md:flex-row md:items-center md:justify-between", compact ? "mb-5" : "mb-8 gap-6")}>
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <Input
            placeholder="Search projects, technologies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("All")}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm transition",
              category === "All"
                ? "bg-sky text-white"
                : "border border-border text-muted hover:text-coffee"
            )}
          >
            All
          </button>
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm transition",
                category === cat
                  ? "bg-sky text-white"
                  : "border border-border text-muted hover:text-coffee"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className={cn("grid gap-4 sm:grid-cols-2", compact ? "lg:grid-cols-3" : "gap-6 lg:grid-cols-3")}>
        {filtered.map((project, i) => (
          <ScrollReveal key={project.slug} delay={(i % 6) * 0.05}>
            <ProjectCard project={project} compact={compact} />
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted py-16">No projects match your search.</p>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  compact = false,
}: {
  project: (typeof projects)[0];
  compact?: boolean;
}) {
  return (
    <TiltCard>
      <article className="group overflow-hidden rounded-2xl border border-border bg-card h-full flex flex-col">
        <Link href={`/projects/${project.slug}`} className="relative aspect-video block overflow-hidden">
          <ProjectThumbnail
            src={project.thumbnail}
            alt={project.title}
            fill
            className="transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
        </Link>
        <div className={cn("flex flex-col flex-1", compact ? "p-4" : "p-6")}>
          <Badge variant="accent" className="w-fit mb-2 text-[10px]">
            {project.category}
          </Badge>
          <Link href={`/projects/${project.slug}`}>
            <h3 className={cn("font-semibold mb-1 group-hover:text-sky-dark transition", compact && "text-sm")}>
              {project.title}
            </h3>
          </Link>
          <p className={cn("text-muted line-clamp-2 flex-1", compact ? "text-xs mb-3" : "text-sm mb-4")}>
            {project.description}
          </p>
          {!compact && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-[10px] text-muted border border-border rounded px-1.5 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
          )}
          <div className="flex gap-3 mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-coffee"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-coffee"
                aria-label="Live demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="ml-auto text-sm text-sky-dark hover:underline"
            >
              Details →
            </Link>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
