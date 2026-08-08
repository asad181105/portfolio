"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProjectThumbnail({
  src,
  alt,
  className,
  fill = false,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-sky-light/50 via-white to-cream p-6 text-center",
          fill && "absolute inset-0",
          className
        )}
      >
        <p className="text-sm font-semibold text-coffee line-clamp-3">{alt}</p>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        priority={priority}
        className={cn("object-cover", className)}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={500}
      unoptimized
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
