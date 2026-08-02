"use client";

import { site, socialLinks, stats } from "@/data/portfolio";
import { IconDownload } from "./icons";
import { HeroReveal } from "./motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-24 md:pt-40 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <HeroReveal delay={0.05}>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/10 bg-purple-500/5 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-xs font-medium tracking-wide text-zinc-300">
                    {site.availability}
                  </span>
                </span>
                <span className="rounded-full border border-white/[0.04] bg-white/[0.01] px-3 py-1.5 font-mono text-[11px] text-zinc-500">
                  {site.company}
                </span>
              </div>
            </HeroReveal>

            <HeroReveal delay={0.12}>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-purple-500">
                {site.subheadline}
              </p>
              <h1 className="mt-5 max-w-3xl font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white md:text-[3.25rem] lg:text-[3.75rem]">
                {site.headline}
                <span className="mt-1 block font-semibold text-gradient">
                  with AI velocity
                </span>
              </h1>
            </HeroReveal>

            <HeroReveal delay={0.22}>
              <p className="mt-6 max-w-xl text-base leading-relaxed prose-muted md:text-[17px]">
                {site.tagline}
              </p>
            </HeroReveal>

            <HeroReveal delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn-primary">
                  Launch workspace
                </a>
                <a href={site.cvUrl} download className="btn-secondary">
                  <IconDownload />
                  Resume
                </a>
                <a
                  href="#projects"
                  className="px-2 py-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-200"
                >
                  View selected work
                </a>
              </div>
            </HeroReveal>

            <HeroReveal delay={0.4}>
              <div className="mt-12 flex flex-wrap gap-6 border-t border-white/[0.04] pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-bold tracking-tight text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </HeroReveal>
          </div>

          <HeroReveal delay={0.18}>
            <aside className="relative lg:sticky lg:top-28">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent opacity-40" />
              <div className="relative rounded-2xl border border-white/[0.04] bg-[#09090b]/80 p-8 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-4 border-b border-white/[0.04] pb-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      Consultant profile
                    </p>
                    <p className="mt-2 font-display text-xl font-bold text-white">
                      {site.name}
                    </p>
                    <p className="mt-1 text-sm text-purple-400">{site.title}</p>
                  </div>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/5 font-display text-sm font-bold text-purple-400"
                    aria-hidden
                  >
                    JA
                  </div>
                </div>

                <dl className="mt-6 divide-y divide-white/[0.03] text-sm">
                  {[
                    ["Organization", site.company],
                    ["Experience", site.yearsExperience],
                    ["Based in", site.locationShort],
                    ["Email", site.email],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between gap-4 py-3 first:pt-0 last:pb-0"
                    >
                      <dt className="text-zinc-500">{label}</dt>
                      <dd
                        className={`max-w-[58%] text-right font-medium ${
                          label === "Email" ? "text-purple-400" : "text-zinc-200"
                        }`}
                      >
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 flex flex-wrap gap-2">
                  {socialLinks.slice(0, 3).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-500 transition hover:border-purple-500/20 hover:text-zinc-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}
