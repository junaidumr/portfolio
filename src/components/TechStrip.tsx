"use client";

import { techStack } from "@/data/portfolio";

const items = [...techStack, ...techStack];

export function TechStrip() {
  return (
    <section
      aria-label="Technology stack"
      className="border-y border-white/[0.05] bg-white/[0.015]"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-5 lg:px-8">
        <p className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:block">
          Stack
        </p>
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0b0f] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0b0f] to-transparent" />
          <div className="flex w-max animate-marquee gap-8">
            {items.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-zinc-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
