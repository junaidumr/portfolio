"use client";

import { experience } from "@/data/portfolio";
import { GlowCard, Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section className="section-pad px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience"
          index="05"
          label="Experience"
          title="Professional background"
        />

        <ol className="relative mt-14 space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-white/[0.08] md:before:left-[9px]">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 0.08}>
              <li className="relative pl-8 md:pl-10">
                <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-[#08090d] bg-teal-800 ring-4 ring-teal-950 md:left-[2px]" />

                <GlowCard className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                  <div className="border-b border-white/[0.05] px-7 py-5 md:px-8 md:py-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-teal-600">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <time className="font-mono text-xs text-zinc-500">
                          {job.period}
                        </time>
                        <p className="mt-1 text-xs text-zinc-600">{job.location}</p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 px-7 py-6 md:px-8">
                    {job.highlights.map((point) => (
                      <li
                        key={point.slice(0, 36)}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-500 md:text-[15px]"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-teal-700" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
