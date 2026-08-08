import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/social";
import { SectionShell } from "@/components/layout/section-shell";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <SectionShell>
      <div className="py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky to-sky-dark text-xs font-bold text-white">
                MA
              </span>
              <span className="font-semibold text-coffee">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted leading-relaxed">
              {siteConfig.professionalSummary}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-white p-2.5 text-muted transition hover:border-sky hover:text-coffee"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-white p-2.5 text-muted transition hover:border-sky hover:text-coffee"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-full border border-border bg-white p-2.5 text-muted transition hover:border-sky hover:text-coffee"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="rounded-full border border-border bg-white p-2.5 text-muted transition hover:border-sky hover:text-coffee"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-coffee">Navigation</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-coffee"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition hover:text-coffee"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-coffee">Connect</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.location}</li>
              <li>{siteConfig.college}</li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-coffee transition"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted md:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Aspiring Software Engineering Intern · Hyderabad</p>
        </div>
        </div>
      </div>
    </SectionShell>
  );
}
