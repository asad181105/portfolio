import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectLiveEmbed } from "@/components/projects/project-live-embed";

const liveProjects = projects.filter((project) => project.embedUrl);

export function ProjectLiveShowcase() {
  if (liveProjects.length === 0) return null;

  return (
    <div className="mb-16 space-y-14">
      {liveProjects.map((project) => (
        <div key={project.slug}>
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-coffee">{project.title}</h3>
              <p className="mt-1 max-w-2xl text-sm text-muted">
                {project.description}
              </p>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex shrink-0 items-center gap-1 text-sm text-sky-dark hover:underline"
            >
              View details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ProjectLiveEmbed
            url={project.embedUrl!}
            title={project.title}
          />
        </div>
      ))}
    </div>
  );
}
