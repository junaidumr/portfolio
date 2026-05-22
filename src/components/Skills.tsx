"use client";

import { skills } from "@/data/portfolio";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

const marqueeSkills = [...skills, ...skills];

export function Skills() {
  return (
    <section className="section-pad overflow-hidden px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="skills"
          index="03"
          label="Expertise"
          title="Technical stack & practice"
          description="Full stack delivery across mobile, web, and APIs—with structured AI workflows in the engineering process."
        />

        <Reveal className="mt-12">
          <div className="relative -mx-6 overflow-hidden py-3 md:-mx-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#08090d] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#08090d] to-transparent" />
            <div className="flex w-max animate-marquee gap-3">
              {marqueeSkills.map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="shrink-0 rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2 text-[13px] font-medium text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-3 rounded-lg border border-white/[0.05] bg-white/[0.015] px-4 py-3 text-sm text-zinc-400 transition hover:border-teal-900/40 hover:text-zinc-200"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-teal-700" />
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
