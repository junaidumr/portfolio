"use client";

import { experience, site, projects, skills } from "@/data/portfolio";
import { GlowCard, Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { useEffect, useRef, useState, type ReactNode } from "react";

type LogEntry = {
  command: string;
  output: ReactNode;
};

export function Experience() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    {
      command: "",
      output: (
        <div className="text-zinc-500 font-mono text-xs leading-relaxed">
          <p className="text-purple-400 font-semibold">Aetherius OS v2.06.8 (Terminal Workspace)</p>
          <p>Logged in as guest@junaidaziz.dev</p>
          <p className="mt-1">Type <span className="text-cyan-400 font-bold">'help'</span> to explore available system commands.</p>
        </div>
      )
    }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-zinc-400 font-mono text-xs">
            <p className="text-zinc-500">Available commands:</p>
            <p><span className="text-purple-400 font-bold">help</span> - List all system utilities.</p>
            <p><span className="text-purple-400 font-bold">projects</span> - View shipped products & code specs.</p>
            <p><span className="text-purple-400 font-bold">skills</span> - Inspect the active technical stack.</p>
            <p><span className="text-purple-400 font-bold">experience</span> - Fetch Junaid's consulting background.</p>
            <p><span className="text-purple-400 font-bold">resume</span> - Get a link to download the PDF CV.</p>
            <p><span className="text-purple-400 font-bold">contact</span> - Retrieve contact and office channels.</p>
            <p><span className="text-purple-400 font-bold">clear</span> - Flush terminal screen buffers.</p>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "projects":
        output = (
          <div className="space-y-1 text-zinc-400 font-mono text-xs">
            <p className="text-zinc-500">Shipped production assets:</p>
            {projects.map((p) => (
              <p key={p.title}>
                - <span className="text-white font-bold">{p.title}</span> ({p.category}, {p.year})
              </p>
            ))}
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="text-zinc-400 font-mono text-xs flex flex-wrap gap-x-4 gap-y-1">
            {skills.map((s) => (
              <span key={s} className="text-purple-300">- {s}</span>
            ))}
          </div>
        );
        break;
      case "experience":
        output = (
          <div className="space-y-2 text-zinc-400 font-mono text-xs">
            {experience.map((job) => (
              <div key={job.company} className="border-l border-purple-500/20 pl-3">
                <p className="font-bold text-white">{job.role} @ {job.company}</p>
                <p className="text-zinc-500">{job.period} | {job.location}</p>
                <ul className="mt-1 space-y-0.5 text-zinc-400">
                  {job.highlights.map((h, index) => (
                    <li key={index}>* {h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
        break;
      case "resume":
        output = (
          <p className="text-zinc-400 font-mono text-xs">
            Download active resume PDF:{" "}
            <a
              href={site.cvUrl}
              download
              className="text-cyan-400 hover:underline font-bold"
            >
              Junaid_Aziz_CV.pdf
            </a>
          </p>
        );
        break;
      case "contact":
        output = (
          <div className="space-y-1 text-zinc-400 font-mono text-xs">
            <p>Email: <a href={`mailto:${site.email}`} className="text-purple-400 hover:underline">{site.email}</a></p>
            <p>Phone: <a href={site.phoneHref} className="text-purple-400 hover:underline">{site.phone}</a></p>
            <p>Location: {site.location}</p>
          </div>
        );
        break;
      default:
        output = (
          <p className="text-red-400 font-mono text-xs">
            Command not found: '{cmd}'. Type 'help' for options.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <section className="section-pad px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience"
          index="03"
          label="Engineering Philosophy"
          title="Professional background"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <ol className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-white/[0.04] md:before:left-[9px]">
              {experience.map((job, i) => (
                <Reveal key={`${job.company}-${job.period}`} delay={i * 0.08}>
                  <li className="relative pl-8 md:pl-10">
                    <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-[#020204] bg-purple-900 ring-4 ring-purple-950/40 md:left-[2px]" />

                    <GlowCard className="overflow-hidden rounded-2xl border border-white/[0.04] bg-[#09090b]/40 glass">
                      <div className="border-b border-white/[0.04] px-7 py-5 md:px-8 md:py-6">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h3 className="font-display text-xl font-semibold text-white">
                              {job.role}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-purple-400">
                              {job.company}
                            </p>
                          </div>
                          <div className="text-right">
                            <time className="font-mono text-xs text-zinc-500">
                              {job.period}
                            </time>
                            <p className="mt-1 text-xs text-zinc-500">{job.location}</p>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3 px-7 py-6 md:px-8">
                        {job.highlights.map((point) => (
                          <li
                            key={point.slice(0, 36)}
                            className="flex gap-3 text-sm leading-relaxed text-zinc-400 md:text-[15px]"
                          >
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-purple-500" />
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

          <Reveal delay={0.12}>
            <div className="flex h-[420px] flex-col rounded-2xl border border-white/[0.04] bg-[#09090b]/60 glass-strong overflow-hidden font-mono shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.04] bg-white/[0.01] px-4 py-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                  aetherius_cli
                </span>
                <span className="w-12" />
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {history.map((entry, index) => (
                  <div key={index} className="space-y-1.5">
                    {entry.command && (
                      <div className="flex items-center gap-2 font-mono text-xs text-white">
                        <span className="text-purple-400 font-bold">$</span>
                        <span>{entry.command}</span>
                      </div>
                    )}
                    <div>{entry.output}</div>
                  </div>
                ))}
                <div ref={endRef} />
              </div>

              <form onSubmit={handleCommand} className="flex border-t border-white/[0.04] bg-white/[0.01] px-4 py-3">
                <span className="text-purple-400 font-mono text-xs font-bold mr-2 self-center">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="type command..."
                  className="flex-1 bg-transparent font-mono text-xs text-white outline-none placeholder:text-zinc-600"
                  aria-label="Terminal command prompt"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
