import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import { getProjectBySlug, projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/section-shell";
import { ProjectLiveEmbed } from "@/components/projects/project-live-embed";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <SectionShell>
      <article className="py-10 md:py-12">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </Button>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="accent">{project.category}</Badge>
          <Badge>{project.year}</Badge>
        </div>

        <h1 className="text-3xl font-bold md:text-4xl mb-4">{project.title}</h1>

        {project.embedUrl ? (
          <ProjectLiveEmbed
            url={project.embedUrl}
            title={project.title}
            thumbnail={project.thumbnail}
            mode={project.embedMode ?? "iframe"}
          />
        ) : (
          <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <p className="text-lg text-muted leading-relaxed mb-8">
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.github && (
            <Button variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                GitHub
              </a>
            </Button>
          )}
          {project.live && (
            <Button variant="gradient" asChild>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Key Highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-muted">
                <span className="text-sky-dark">→</span>
                {h}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-cream px-3 py-1 text-sm text-coffee"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {project.images.length > 1 && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Gallery</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.images.map((img) => (
                <div
                  key={img}
                  className="relative aspect-video overflow-hidden rounded-xl border border-border"
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      </article>
    </SectionShell>
  );
}
