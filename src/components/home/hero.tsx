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
      <WarpShaderHero className="min-h-[min(100dvh,calc(100vh-var(--nav-offset)-1rem))] sm:min-h-[calc(100vh-var(--nav-offset)-3rem)]">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:flex-row lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-w-0 flex-1 flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-5 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-coffee/20 bg-white/80 px-3 py-1.5 text-center text-xs text-coffee backdrop-blur-sm shadow-sm sm:mb-6 sm:px-4 sm:text-sm"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-dark" />
            </span>
            <span className="text-balance">
              Aspiring Software Engineering Intern · Open to opportunities
            </span>
          </motion.div>

          <h1 className="text-3xl font-light tracking-tight text-coffee text-balance sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I&apos;m{" "}
            <span className="font-semibold gradient-text">
              {siteConfig.name}
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-coffee/80 text-balance sm:mt-6 sm:text-lg md:text-xl lg:mx-0">
            {siteConfig.professionalSummary.split(".").slice(0, 2).join(".")}.
          </p>

          <p className="mt-3 max-w-xl text-xs text-muted text-balance sm:mt-4 sm:text-sm">
            {siteConfig.role} · {siteConfig.college}
          </p>

          <div className="mt-6 flex w-full max-w-md flex-col gap-2.5 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 lg:justify-start">
            <Button variant="gradient" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/projects">View Work</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                View Resume
              </Link>
            </Button>
            <Button variant="glow" size="lg" className="w-full sm:w-auto" asChild>
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
          className="relative mt-8 flex w-full min-w-0 flex-1 justify-center lg:mt-0"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[260px] sm:max-w-xs md:max-w-sm lg:max-w-md">
            <div className="absolute -inset-3 rounded-3xl bg-sky/20 blur-2xl animate-pulse-glow sm:-inset-4" />
            <div className="relative overflow-hidden rounded-2xl border border-coffee/20 shadow-xl shadow-coffee/10 sm:rounded-3xl">
              <Image
                src="/hero.jpg"
                alt={siteConfig.name}
                width={400}
                height={400}
                className="aspect-square w-full object-cover object-top"
                priority
              />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-1 top-6 rounded-lg border border-border bg-white/90 px-3 py-2 text-xs text-coffee backdrop-blur-md shadow-lg sm:-right-4 sm:top-8 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
            >
              <span className="text-sky-dark font-mono">Founder</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -left-1 bottom-10 rounded-lg border border-border bg-white/90 px-3 py-2 text-xs text-coffee backdrop-blur-md shadow-lg sm:-left-4 sm:bottom-12 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
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
