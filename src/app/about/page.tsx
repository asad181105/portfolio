import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { SectionShell } from "@/components/layout/section-shell";
import { LifeTimeline } from "@/components/about/life-timeline";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/scroll-reveal";
import { createMetadata } from "@/lib/metadata";
import { siteConfig, education, strengths } from "@/lib/site";

export const metadata = createMetadata({
  title: "About",
  description: siteConfig.professionalSummary,
  path: "/about",
});

const skillsPreview = [
  "Python & Java",
  "Data Science",
  "Data Analytics",
  "Machine Learning",
  "OpenCV & YOLOv8",
  "Flask & REST APIs",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Me"
        title="Aspiring software engineer & AI builder"
        description={siteConfig.professionalSummary}
      />

      <SectionShell>
        <div className="py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <ScrollReveal animation="slide-left">
                <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-3xl gradient-border">
                  <Image
                    src="/hero.jpg"
                    alt={siteConfig.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={0.1}>
                <div className="space-y-6 text-muted leading-relaxed">
                  <h2 className="text-2xl font-semibold text-coffee">
                    Professional Summary
                  </h2>
                  <p>{siteConfig.professionalSummary}</p>
                  <div className="rounded-2xl border border-border bg-cream/40 p-5 text-sm space-y-2">
                    <p><strong className="text-coffee">Email:</strong> {siteConfig.email}</p>
                    <p><strong className="text-coffee">Phone:</strong> {siteConfig.phone}</p>
                    <p><strong className="text-coffee">Location:</strong> {siteConfig.location}</p>
                  </div>
                  <p>
                    <strong className="text-coffee">Education:</strong> Currently pursuing
                    B.Tech in Computer Science at {siteConfig.college}, with prior
                    studies at MS Junior College (Intermediate) and MS Creative School (SSC).
                  </p>
                  <p>
                    <strong className="text-coffee">Entrepreneurship:</strong> Founder of{" "}
                    <a
                      href={siteConfig.links.startup}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-dark hover:underline"
                    >
                      The Origami AI
                    </a>
                    , an AI tech startup building intelligent products.
                  </p>
                  <p>
                    <strong className="text-coffee">Goal:</strong> Seeking a software
                    development internship to contribute to impactful, scalable engineering
                    projects while continuing to grow in ML, systems, and product building.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <ScrollReveal className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-coffee">Education</h2>
            </ScrollReveal>
            <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
              {education.map((item) => (
                <ScrollReveal key={item.degree}>
                  <div className="rounded-2xl border border-border bg-cream/30 p-6 h-full shadow-sm">
                    <p className="text-sm font-mono text-sky-dark mb-2">{item.period}</p>
                    <h3 className="font-semibold text-coffee mb-1">{item.degree}</h3>
                    <p className="text-sm text-muted">{item.institution}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <ScrollReveal className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-coffee">Journey Timeline</h2>
              <p className="mt-4 text-muted">From school to industry-ready engineer</p>
            </ScrollReveal>
            <LifeTimeline />
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <ScrollReveal>
                <h3 className="text-xl font-semibold mb-6 text-coffee">Strengths</h3>
                <ul className="space-y-4">
                  {strengths.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h3 className="text-xl font-semibold mb-6 text-coffee">Core Skills</h3>
                <StaggerContainer className="flex flex-wrap gap-2">
                  {skillsPreview.map((skill) => (
                    <StaggerItem key={skill}>
                      <span className="rounded-full border border-border bg-cream/50 px-4 py-2 text-sm text-coffee">
                        {skill}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <Link
                  href="/projects#skills"
                  className="inline-block mt-6 text-sm text-sky-dark hover:underline"
                >
                  View full skills breakdown →
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
