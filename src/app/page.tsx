import { Hero } from "@/components/home/hero";
import { Highlights } from "@/components/home/highlights";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedProjects />
      <CtaSection />
    </>
  );
}
