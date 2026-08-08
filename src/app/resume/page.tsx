import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PrintResumeButton } from "@/components/resume/print-button";
import { SectionShell } from "@/components/layout/section-shell";
import { createMetadata } from "@/lib/metadata";
import { siteConfig, education, strengths } from "@/lib/site";
import { experienceTimeline } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

export const metadata = createMetadata({
  title: "Resume",
  description: `Resume of ${siteConfig.name} — Aspiring Software Engineering Intern.`,
  path: "/resume",
});

export default function ResumePage() {
  const certifications = experienceTimeline.filter((e) => e.type === "certification");
  const hackathons = experienceTimeline.filter((e) => e.type === "competition");
  const cp = experienceTimeline.find((e) => e.id === "9");

  return (
    <SectionShell className="print:mt-0 print:border-0 print:shadow-none print:bg-white">
      <div className="pb-8 print:pb-0">
      <div className="mx-auto max-w-3xl px-4 md:px-6 pt-10 print:pt-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
          <div className="flex gap-2">
            <PrintResumeButton />
          </div>
        </div>

        <article className="rounded-3xl border border-border bg-white p-8 md:p-12 shadow-sm print:border-0 print:shadow-none print:rounded-none">
          <header className="border-b border-border pb-6 mb-6">
            <h1 className="text-3xl font-bold text-coffee">{siteConfig.name}</h1>
            <p className="text-lg text-sky-dark mt-1">Aspiring Software Engineering Intern</p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
              <span>{siteConfig.email}</span>
              <span>{siteConfig.phone}</span>
              <span>{siteConfig.location}</span>
              <span>DOB: {siteConfig.birthDate}</span>
              <a href={siteConfig.links.linkedin} className="text-sky-dark hover:underline">
                linkedin.com/in/asad1811
              </a>
            </div>
          </header>

          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-sky-dark mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-coffee/90 leading-relaxed">
              {siteConfig.professionalSummary}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-sky-dark mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((item) => (
                <div key={item.degree} className="flex justify-between gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-coffee">{item.degree}</p>
                    <p className="text-muted">{item.institution}</p>
                  </div>
                  <p className="text-muted shrink-0">{item.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-sky-dark mb-3">
              Skills
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              {skillCategories.map((cat) => (
                <div key={cat.id}>
                  <p className="font-semibold text-coffee mb-1">{cat.title}</p>
                  <p className="text-muted">{cat.skills.map((s) => s.name).join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-sky-dark mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.slice(0, 4).map((project) => (
                <div key={project.slug}>
                  <div className="flex flex-wrap justify-between gap-2">
                    <p className="font-semibold text-coffee text-sm">
                      {project.title}
                      {project.live && (
                        <span className="font-normal text-sky-dark ml-2">
                          — {project.live.replace("https://", "")}
                        </span>
                      )}
                    </p>
                    <span className="text-xs text-muted">{project.year}</span>
                  </div>
                  <ul className="mt-1 list-disc pl-5 text-sm text-muted space-y-0.5">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-sky-dark mb-3">
              Hackathon Participation
            </h2>
            <div className="space-y-3 text-sm">
              {hackathons.map((item) => (
                <div key={item.id}>
                  <p className="font-semibold text-coffee">
                    {item.title} <span className="font-normal text-muted">— {item.period}</span>
                  </p>
                  <p className="text-muted">{item.organization}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-sky-dark mb-3">
              Certifications
            </h2>
            <ul className="text-sm text-muted space-y-1">
              {certifications.map((c) => (
                <li key={c.id}>
                  <span className="text-coffee font-medium">{c.title}</span> — {c.organization}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-sky-dark mb-3">
              Competitive Programming
            </h2>
            <p className="text-sm text-muted">{cp?.description}</p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-sky-dark mb-3">
              Strengths
            </h2>
            <ul className="text-sm text-muted list-disc pl-5 space-y-1">
              {strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>
        </article>
      </div>
      </div>
    </SectionShell>
  );
}
