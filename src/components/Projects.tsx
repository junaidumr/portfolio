"use client";

import { projects } from "@/data/portfolio";
import { IconArrowUpRight } from "./icons";
import { GlowCard, Reveal, Stagger, MotionItem } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section className="section-pad px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects"
          index="04"
          label="Work"
          title="Selected case studies"
          description="Production software shipped for Voultrex and independent releases—mobile-first products with full-stack ownership."
        />

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {featured.map((project, index) => (
            <MotionItem
              key={project.title}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <GlowCard className="card-shine group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <div
                  className={`relative flex h-36 items-end justify-between border-b border-white/[0.05] bg-gradient-to-br ${project.accent} px-6 py-5 md:h-40`}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    {project.category}
                  </span>
                  <span className="rounded-md border border-white/[0.08] bg-black/30 px-2.5 py-1 font-mono text-[10px] text-zinc-400">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-zinc-500"
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
                      className="mt-6 inline-flex items-center gap-1.5 border-t border-white/[0.06] pt-5 text-sm font-medium text-teal-600 transition hover:text-teal-500"
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
                  <GlowCard className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-teal-700">
                          {project.category}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-600">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-zinc-500">
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
