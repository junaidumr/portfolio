"use client";

import { about, site } from "@/data/portfolio";
import { GlowCard, Reveal, Stagger, MotionItem } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="section-pad px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about"
          index="02"
          label="Who I Am"
          title="Engineering with accountability"
          description={`Full stack developer and prompt engineer at ${site.company}. Based in ${site.location}.`}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <div className="space-y-6 text-base prose-muted md:text-[17px]">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {about.highlights.map((item) => (
              <MotionItem key={item.label}>
                <GlowCard className="rounded-xl border border-white/[0.04] bg-[#09090b]/40 glass p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple-400/80">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-base font-semibold text-white">
                    {item.value}
                  </p>
                </GlowCard>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
