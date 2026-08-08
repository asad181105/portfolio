"use client";

import { ExternalLink, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectThumbnail } from "@/components/projects/project-thumbnail";

export function ProjectLiveEmbed({
  url,
  title,
  thumbnail,
  mode = "iframe",
}: {
  url: string;
  title: string;
  thumbnail?: string;
  mode?: "iframe" | "preview";
}) {
  const hostname = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  if (mode === "preview") {
    return (
      <section className="mb-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-border bg-cream/40 px-4 py-2.5">
            <p className="truncate text-sm text-muted">{hostname}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 text-sm text-sky-dark hover:underline"
            >
              Open site
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="relative aspect-video min-h-[320px] w-full bg-cream/30 sm:min-h-[420px]">
            {thumbnail && (
              <ProjectThumbnail
                src={thumbnail}
                alt={title}
                fill
                className="opacity-90"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 via-coffee/40 to-coffee/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-sky-dark shadow-lg">
                <Monitor className="h-7 w-7" />
              </div>
              <div className="max-w-md">
                <p className="text-lg font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm text-white/85">
                  This site blocks in-page previews for security. Open it in a new
                  tab to explore the full experience.
                </p>
              </div>
              <Button variant="gradient" size="lg" asChild>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Visit {hostname}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-8">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <div className="flex items-center justify-between gap-3 border-b border-border bg-cream/40 px-4 py-2.5">
          <p className="truncate text-sm text-muted">{hostname}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 text-sm text-sky-dark hover:underline"
          >
            Open site
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <iframe
          src={url}
          title={`${title} live preview`}
          className="aspect-video w-full min-h-[420px] bg-white sm:min-h-[520px] md:min-h-[600px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-2 text-xs text-muted">
        Live preview embedded below. If it does not load, use &quot;Open site&quot;
        to view it directly.
      </p>
    </section>
  );
}
