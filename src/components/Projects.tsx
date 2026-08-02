"use client";

import Image from "next/image";
import { projects } from "@/data/portfolio";
import { IconArrowUpRight } from "./icons";
import { GlowCard, Reveal, Stagger, MotionItem } from "./motion";
import { SectionHeading } from "./SectionHeading";

function DeviceMockup({ project }: { project: any }) {
  const isMobile = project.tags.includes("Mobile") || project.title.toLowerCase().includes("todo") || project.title.toLowerCase().includes("budget");
  
  if (isMobile) {
    return (
      <div className="relative mx-auto my-2 w-[115px] aspect-[9/19] border-[5px] border-zinc-800 rounded-[20px] bg-zinc-950 overflow-hidden shadow-2xl ring-1 ring-white/10 select-none group-hover:scale-105 transition-transform duration-500 shrink-0">
        {/* Dynamic Island */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-full z-20" />
        {/* Screen Content */}
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="120px"
            className="object-cover object-top"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} flex flex-col items-center justify-center p-3 text-center`}>
            <span className="font-mono text-[7px] uppercase tracking-wider text-zinc-500">{project.year}</span>
            <h4 className="text-white font-bold font-display text-[9px] mt-1 leading-tight">{project.title}</h4>
            <span className="mt-2 text-[6px] text-zinc-600 font-mono">Simulator</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative mx-auto my-2 max-w-[220px] w-full select-none group-hover:scale-105 transition-transform duration-500 shrink-0">
      {/* Laptop Screen */}
      <div className="relative mx-auto border-[5px] border-zinc-800 rounded-t-xl bg-zinc-950 aspect-[16/10] overflow-hidden shadow-2xl ring-1 ring-white/10">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="240px"
            className="object-cover object-top"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} flex flex-col items-center justify-center p-3 text-center`}>
            <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-500">{project.year}</span>
            <h4 className="text-white font-bold font-display text-[10px] mt-1 leading-tight">{project.title}</h4>
            <span className="mt-2 text-[7px] text-zinc-600 font-mono">Workspace</span>
          </div>
        )}
      </div>
      {/* Laptop Base */}
      <div className="relative mx-auto w-[246px] h-[5px] bg-zinc-700 rounded-b-xl shadow-md border-t border-zinc-600" />
      <div className="relative mx-auto w-[36px] h-[1.5px] bg-zinc-800 rounded-b" />
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section className="section-pad px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects"
          index="04"
          label="Featured Products"
          title="Selected case studies"
          description="Production software shipped for Voultrex and independent releases—mobile-first products with full-stack ownership."
        />

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {featured.map((project, index) => (
            <MotionItem
              key={project.title}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <GlowCard className="card-shine group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.04] bg-[#09090b]/40 glass">
                <div
                  className={`relative flex h-52 items-center justify-between border-b border-white/[0.04] bg-gradient-to-br ${project.accent} px-6 py-4 md:h-56`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 self-start mt-2">
                    {project.category}
                  </span>
                  
                  <DeviceMockup project={project} />

                  <span className="rounded-md border border-white/[0.04] bg-black/40 px-2.5 py-1 font-mono text-[10px] text-zinc-400 self-start mt-2">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-white/[0.04] bg-white/[0.01] px-2 py-0.5 font-mono text-[10px] text-zinc-500"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 border-t border-white/[0.04] pt-5 text-sm font-medium text-purple-400 transition hover:text-purple-300"
                    >
                      View repository
                      <IconArrowUpRight />
                    </a>
                  )}
                </div>
              </GlowCard>
            </MotionItem>
          ))}
        </Stagger>

        {other.length > 0 && (
          <Reveal className="mt-5">
            <ul className="space-y-3">
              {other.map((project) => (
                <li key={project.title}>
                  <GlowCard className="flex flex-col gap-4 rounded-2xl border border-white/[0.04] bg-[#09090b]/40 glass p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-purple-400/80">
                          {project.category}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-500">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-zinc-400">
                        {project.description}
                      </p>
                    </div>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary shrink-0 !py-2.5 !text-[13px]"
                      >
                        Repository
                        <IconArrowUpRight />
                      </a>
                    )}
                  </GlowCard>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
