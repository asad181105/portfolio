"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import WarpShaderHero from "@/components/ui/wrap-shader";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <SectionShell flush className="overflow-hidden">
      <WarpShaderHero className="min-h-[calc(100vh-var(--nav-offset)-5rem)]">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative mx-auto flex min-h-full max-w-7xl flex-col items-center justify-center px-4 py-12 md:px-6 lg:flex-row lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-coffee/20 bg-white/80 px-4 py-1.5 text-sm text-coffee backdrop-blur-sm shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-dark" />
            </span>
            Aspiring Software Engineering Intern · Open to opportunities
          </motion.div>

          <h1 className="text-4xl font-light tracking-tight text-coffee sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Hi, I&apos;m{" "}
            <span className="font-semibold gradient-text">
              {siteConfig.name}
            </span>
          </h1>

          <p className="mt-6 text-lg text-coffee/80 md:text-xl max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            {siteConfig.professionalSummary.split(".").slice(0, 2).join(".")}.
          </p>

          <p className="mt-4 text-sm text-muted">
            {siteConfig.role} · {siteConfig.college}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/projects">View Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                View Resume
              </Link>
            </Button>
            <Button variant="glow" size="lg" asChild>
              <Link href="/contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mt-8 lg:mt-0 flex-1"
        >
          <div className="relative mx-auto aspect-square w-72 max-w-sm md:w-80 lg:w-96">
            <div className="absolute -inset-4 rounded-3xl bg-sky/20 blur-2xl animate-pulse-glow" />
            <div className="relative overflow-hidden rounded-3xl border border-coffee/20 shadow-xl shadow-coffee/10">
              <Image
                src="/hero.jpg"
                alt={siteConfig.name}
                width={400}
                height={400}
                className="aspect-square object-cover object-top"
                priority
              />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-4 top-8 rounded-xl border border-border bg-white/90 px-4 py-3 text-sm text-coffee backdrop-blur-md shadow-lg"
            >
              <span className="text-sky-dark font-mono">Founder</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -left-4 bottom-12 rounded-xl border border-border bg-white/90 px-4 py-3 text-sm text-coffee backdrop-blur-md shadow-lg"
            >
              <span className="text-sky-dark font-mono">Developer</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </WarpShaderHero>
    </SectionShell>
  );
}
