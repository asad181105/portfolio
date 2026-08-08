"use client";

import { SmoothScroll } from "@/components/effects/smooth-scroll";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
