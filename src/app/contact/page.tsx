import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/social";
import { PageHeader } from "@/components/layout/page-header";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactForm } from "@/components/contact/contact-form";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} for software development internship opportunities.`,
  path: "/contact",
});

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    value: siteConfig.email,
  },
  {
    icon: Phone,
    label: "Phone",
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    value: siteConfig.phone,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    value: "linkedin.com/in/asad1811",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's connect"
        description="Open to software development internships. Reach out via email, phone, or LinkedIn — I'd love to hear from you."
      />

      <SectionShell>
        <div className="py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <ScrollReveal>
                <ContactForm />
              </ScrollReveal>

              <div className="space-y-8">
                <ScrollReveal delay={0.1}>
                  <div className="space-y-4">
                    {contactLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="flex items-center gap-4 rounded-xl border border-border bg-cream/30 p-4 transition hover:border-sky/40 group shadow-sm"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-light/50 text-sky-dark group-hover:bg-sky-light transition">
                          <link.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted">{link.label}</p>
                          <p className="text-sm font-medium">{link.value}</p>
                        </div>
                      </Link>
                    ))}
                    <div className="flex items-center gap-4 rounded-xl border border-border bg-cream/30 p-4 shadow-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-light/50 text-sky-dark">
                        <span className="text-lg">📍</span>
                      </div>
                      <div>
                        <p className="text-xs text-muted">Location</p>
                        <p className="text-sm font-medium">{siteConfig.location}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
