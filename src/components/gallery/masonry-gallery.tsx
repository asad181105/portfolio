"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

const categories = ["all", "events", "projects", "hackathons", "college"] as const;

export function MasonryGallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === filter);

  const activeItem = galleryItems.find((i) => i.id === lightbox);

  return (
    <div className="pb-12">
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm capitalize transition",
              filter === cat
                ? "bg-sky text-white"
                : "border border-border text-muted hover:text-coffee"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            onClick={() => setLightbox(item.id)}
            className="group relative w-full break-inside-avoid overflow-hidden rounded-2xl border border-border shadow-sm focus:outline-none focus:ring-2 focus:ring-sky"
          >
            <div
              className={cn(
                "relative w-full",
                item.aspect === "tall" && "aspect-[3/4]",
                item.aspect === "wide" && "aspect-video",
                (!item.aspect || item.aspect === "square") && "aspect-square"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-coffee/80 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute top-6 right-6 rounded-full border border-white/40 bg-white/20 p-2 hover:bg-white/40 text-white"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[85vh] max-w-4xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
              />
              <p className="absolute -bottom-10 left-0 text-white">{activeItem.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
