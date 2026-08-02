"use client";

import { skills } from "@/data/portfolio";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { useState } from "react";

// Categorize skills for the interactive constellation node filter
const skillCategories = {
  mobile: ["React Native / Expo", "Mobile App Development", "TypeScript", "Full Stack Development"],
  web: ["React / Next.js", "TypeScript", "UI/UX Implementation", "Full Stack Development"],
  backend: ["Node.js", "Custom REST APIs", "PostgreSQL", "Git & GitHub", "Full Stack Development"],
  ai: ["Prompt Engineering", "AI-Assisted Development", "Full Stack Development"],
} as const;

type Category = "all" | keyof typeof skillCategories;

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const marqueeSkills = [...skills, ...skills];

  return (
    <section className="section-pad overflow-hidden px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="skills"
          index="05"
          label="Behind The Code"
          title="Technical stack & practice"
          description="Full stack delivery across mobile, web, and APIs—with structured AI workflows in the engineering process."
        />

        {/* Constellation Category Filter Board */}
        <Reveal className="mt-12 flex justify-center">
          <div className="flex flex-wrap gap-2 rounded-xl border border-white/[0.04] bg-[#09090b]/40 glass p-1.5">
            {(["all", "web", "mobile", "backend", "ai"] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* SVG Network Visualizer */}
        <Reveal className="mt-10 flex justify-center">
          <div className="relative w-full max-w-[500px] h-[140px] flex items-center justify-center select-none">
            <svg className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true">
              {/* Draw connected routes mapping categories to active states */}
              <line x1="250" y1="70" x2="100" y2="30" stroke="rgba(255,255,255,0.02)" strokeWidth="1.5" />
              <line x1="250" y1="70" x2="400" y2="30" stroke="rgba(255,255,255,0.02)" strokeWidth="1.5" />
              <line x1="250" y1="70" x2="150" y2="110" stroke="rgba(255,255,255,0.02)" strokeWidth="1.5" />
              <line x1="250" y1="70" x2="350" y2="110" stroke="rgba(255,255,255,0.02)" strokeWidth="1.5" />

              {/* Glowing active constellation links */}
              {activeCategory === "web" && (
                <line x1="250" y1="70" x2="100" y2="30" stroke="#7c3aed" strokeWidth="2" className="animate-pulse" />
              )}
              {activeCategory === "mobile" && (
                <line x1="250" y1="70" x2="400" y2="30" stroke="#6366f1" strokeWidth="2" className="animate-pulse" />
              )}
              {activeCategory === "backend" && (
                <line x1="250" y1="70" x2="150" y2="110" stroke="#06b6d4" strokeWidth="2" className="animate-pulse" />
              )}
              {activeCategory === "ai" && (
                <line x1="250" y1="70" x2="350" y2="110" stroke="#c084fc" strokeWidth="2" className="animate-pulse" />
              )}
            </svg>

            {/* Core Node */}
            <div className="absolute h-10 w-10 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center font-mono text-[10px] font-bold text-purple-400 glow-ring z-10">
              CORE
            </div>

            {/* Orbiting Category Nodes */}
            <div className={`absolute top-4 left-[64px] rounded-lg border px-3 py-1 text-[10px] font-mono transition-all ${
              activeCategory === "web" ? "border-purple-500 bg-purple-500/15 text-white" : "border-white/[0.04] bg-[#09090b]/40 text-zinc-500"
            }`}>
              WEB
            </div>
            <div className={`absolute top-4 right-[64px] rounded-lg border px-3 py-1 text-[10px] font-mono transition-all ${
              activeCategory === "mobile" ? "border-indigo-500 bg-indigo-500/15 text-white" : "border-white/[0.04] bg-[#09090b]/40 text-zinc-500"
            }`}>
              MOBILE
            </div>
            <div className={`absolute bottom-4 left-[104px] rounded-lg border px-3 py-1 text-[10px] font-mono transition-all ${
              activeCategory === "backend" ? "border-cyan-500 bg-cyan-500/15 text-white" : "border-white/[0.04] bg-[#09090b]/40 text-zinc-500"
            }`}>
              BACKEND
            </div>
            <div className={`absolute bottom-4 right-[104px] rounded-lg border px-3 py-1 text-[10px] font-mono transition-all ${
              activeCategory === "ai" ? "border-purple-400 bg-purple-400/15 text-white" : "border-white/[0.04] bg-[#09090b]/40 text-zinc-500"
            }`}>
              AI_STACK
            </div>
          </div>
        </Reveal>

        {/* Marquee Skills strip */}
        <Reveal className="mt-8">
          <div className="relative -mx-6 overflow-hidden py-3 md:-mx-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#020204] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#020204] to-transparent" />
            <div className="flex w-max animate-marquee gap-3">
              {marqueeSkills.map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="shrink-0 rounded-full border border-white/[0.04] bg-white/[0.01] px-4 py-2 text-[13px] font-medium text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Highlighted Skills Grid depending on Category filter */}
        <Reveal className="mt-10">
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              const isHighlighted =
                activeCategory === "all" ||
                (skillCategories[activeCategory] as readonly string[]).includes(skill);

              return (
                <li
                  key={skill}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-all duration-300 ${
                    isHighlighted
                      ? "border-purple-500/20 bg-purple-500/5 text-white"
                      : "border-white/[0.03] bg-white/[0.005] text-zinc-600 opacity-40"
                  }`}
                >
                  <span className={`h-1 w-1 shrink-0 rounded-full transition-all ${
                    isHighlighted ? "bg-purple-500" : "bg-zinc-800"
                  }`} />
                  {skill}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
