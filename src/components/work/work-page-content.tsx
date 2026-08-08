"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionShell } from "@/components/layout/section-shell";
import { AchievementStats } from "@/components/experience/achievement-stats";
import { ExperienceHighlights } from "@/components/experience/experience-highlights";
import { SkillsCompact } from "@/components/skills/skills-compact";
import { CertificationsList } from "@/components/experience/certifications-list";
import { WorkLiveProjects } from "@/components/projects/work-live-projects";
import { ProjectGrid } from "@/components/projects/project-grid";

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "background", label: "Experience & Skills" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function WorkPageContent() {
  const [activeTab, setActiveTab] = useState<TabId>("projects");

  return (
    <SectionShell>
      <div className="py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-border bg-cream/30 p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition sm:flex-none sm:px-6",
                  activeTab === tab.id
                    ? "text-coffee"
                    : "text-muted hover:text-coffee"
                )}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="work-tab"
                    className="absolute inset-0 rounded-xl bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "projects" ? (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-6">
                  <p className="section-eyebrow text-sm uppercase tracking-widest text-sky-dark mb-2">
                    Live Work
                  </p>
                  <h2 className="text-xl font-bold text-coffee md:text-2xl">
                    Shipped products & platforms
                  </h2>
                </div>
                <WorkLiveProjects />
                <ProjectGrid embedded compact />
              </motion.div>
            ) : (
              <motion.div
                key="background"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <AchievementStats />

                <div className="grid gap-8 lg:grid-cols-3">
                  <div>
                    <p className="section-eyebrow text-sm uppercase tracking-widest text-sky-dark mb-2">
                      Experience
                    </p>
                    <h2 className="text-lg font-bold text-coffee mb-4">
                      Hackathons & competitions
                    </h2>
                    <ExperienceHighlights />
                  </div>

                  <div>
                    <p className="section-eyebrow text-sm uppercase tracking-widest text-sky-dark mb-2">
                      Skills
                    </p>
                    <h2 className="text-lg font-bold text-coffee mb-4">
                      Tools & technologies
                    </h2>
                    <SkillsCompact />
                  </div>

                  <div>
                    <p className="section-eyebrow text-sm uppercase tracking-widest text-sky-dark mb-2">
                      Certifications
                    </p>
                    <h2 className="text-lg font-bold text-coffee mb-4">
                      Credentials & courses
                    </h2>
                    <CertificationsList />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionShell>
  );
}
