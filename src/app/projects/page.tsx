import { PageHeader } from "@/components/layout/page-header";
import { WorkPageContent } from "@/components/work/work-page-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Mohammed Asad's experience, skills, and projects — hackathons, certifications, AI/ML builds, and The Origami AI startup.",
  path: "/projects",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Work & projects"
        description="Live products, engineering builds, hackathons, and the skills behind them."
      />
      <WorkPageContent />
    </>
  );
}
