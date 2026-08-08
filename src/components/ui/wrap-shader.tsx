"use client";

import { Warp } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

export function WarpShaderBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <Warp
        style={{ height: "100%", width: "100%" }}
        proportion={0.45}
        softness={1}
        distortion={0.25}
        swirl={0.8}
        swirlIterations={10}
        shape="checks"
        shapeScale={0.1}
        scale={1}
        rotation={0}
        speed={1}
        colors={[
          "hsl(0, 0%, 98%)",
          "hsl(199, 89%, 75%)",
          "hsl(30, 45%, 88%)",
          "hsl(199, 76%, 58%)",
        ]}
      />
      <div className="absolute inset-0 bg-white/25" aria-hidden />
    </div>
  );
}

export default function WarpShaderHero({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn("relative min-h-screen overflow-hidden", className)}
    >
      <WarpShaderBackground />
      <div className="relative z-10 min-h-full">{children}</div>
    </section>
  );
}
