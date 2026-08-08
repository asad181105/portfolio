import { siteConfig } from "@/lib/site";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Aspiring Software Engineering Intern",
    description: siteConfig.professionalSummary,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    birthDate: "2005-11-18",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.college,
    },
    sameAs: [siteConfig.links.linkedin, siteConfig.links.startup],
    knowsAbout: [
      "Python",
      "Java",
      "Machine Learning",
      "Computer Vision",
      "Data Structures",
      "Software Engineering",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
