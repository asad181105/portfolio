"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const mainNavLinks = navLinks.filter((link) => link.href !== "/");

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed left-0 right-0 z-50 px-[100px] pointer-events-none"
      style={{ top: "var(--nav-top)" }}
    >
      <nav
        className={cn(
          "pointer-events-auto flex h-14 w-full items-center justify-between rounded-[2rem] border border-white/70 px-3 md:px-5 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-coffee/10"
            : "bg-white/80 backdrop-blur-md shadow-md shadow-coffee/5"
        )}
      >
        <Link
          href="/"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
            pathname === "/"
              ? "bg-sky-light/60 text-sky-dark"
              : "text-coffee hover:bg-cream hover:text-sky-dark"
          )}
          aria-label="Home"
        >
          <Home className="h-5 w-5" />
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                pathname === link.href
                  ? "text-coffee"
                  : "text-muted hover:text-coffee"
              )}
            >
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-sky-light/60"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <Link href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </Button>
          <Button variant="gradient" size="sm" asChild>
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-coffee hover:bg-cream lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="pointer-events-auto mt-2 w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/95 backdrop-blur-xl shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              <Link
                href="/"
                className={cn(
                  "rounded-xl px-3 py-2 text-sm",
                  pathname === "/"
                    ? "bg-sky-light/50 text-coffee"
                    : "text-muted"
                )}
              >
                Home
              </Link>
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm",
                    pathname === link.href
                      ? "bg-sky-light/50 text-coffee"
                      : "text-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
                <Button variant="outline" asChild>
                  <Link href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </Link>
                </Button>
                <Button variant="gradient" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
