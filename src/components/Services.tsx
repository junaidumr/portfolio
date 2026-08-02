"use client";

import { services } from "@/data/portfolio";
import { IconAI, IconMobile, IconServer, IconWeb } from "./icons";
import { GlowCard, Stagger, MotionItem, Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { useState } from "react";

const serviceIcons = {
  web: IconWeb,
  mobile: IconMobile,
  server: IconServer,
  ai: IconAI,
} as const;

export function Services() {
  const [promptInput, setPromptInput] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [isCompiling, setIsCompiling] = useState(false);

  const runSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim() || isCompiling) return;

    setIsCompiling(true);
    setLogs(["[SYSTEM] Initializing compilation engine..."]);

    const steps = [
      `[PARSER] Scoping request: "${promptInput}"`,
      "[PIPELINE] Assembling React Native navigation controllers...",
      "[AI_AGENT] Generating custom system instructions for background location loops...",
      "[COMPILER] Bundling deployment packages...",
      "[SUCCESS] Sandbox initialized! Uptime 100%, bundle size: 22MB, response latency: 54ms."
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        if (index === steps.length - 1) {
          setIsCompiling(false);
        }
      }, (index + 1) * 800);
    });
  };

  return (
    <section className="section-pad px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="services"
          index="06"
          label="AI Workspace"
          title="Services built for delivery"
          description="Structured engagements across web, mobile, backend, and AI—one engineer accountable from architecture through release."
        />

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <MotionItem key={service.title}>
                <GlowCard className="group flex h-full flex-col rounded-2xl border border-white/[0.04] bg-[#09090b]/40 glass p-7 transition hover:border-purple-500/20">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/5 text-purple-400">
                    <Icon />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                </GlowCard>
              </MotionItem>
            );
          })}
        </Stagger>

        {/* Dynamic AI Prompt Sandbox Widget */}
        <Reveal delay={0.15} className="mt-8">
          <div className="rounded-2xl border border-white/[0.04] bg-[#09090b]/40 glass p-6 md:p-8">
            <h3 className="font-display text-lg font-semibold text-white">
              Interactive AI Prompt Sandbox
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Input a product feature statement (e.g. "Build route planning logic for riders") to simulate Junaid's AI-accelerated code translation pipeline.
            </p>

            <form onSubmit={runSimulation} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="Describe your product workflow..."
                className="flex-1 rounded-xl border border-white/[0.04] bg-[#020204]/80 px-4 py-3 font-mono text-xs text-white outline-none focus:border-purple-500/20 placeholder:text-zinc-700"
                aria-label="Feature description prompt"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="submit"
                disabled={isCompiling || !promptInput.trim()}
                className="btn-primary shrink-0 !py-3 justify-center disabled:opacity-40 disabled:pointer-events-none"
              >
                {isCompiling ? "Compiling..." : "Run Simulator"}
              </button>
            </form>

            {logs.length > 0 && (
              <div className="mt-6 rounded-xl border border-white/[0.04] bg-[#020204]/60 p-4 font-mono text-[11px] text-zinc-400 space-y-2">
                {logs.map((log, index) => (
                  <p
                    key={index}
                    className={
                      log.startsWith("[SUCCESS]")
                        ? "text-green-400 font-semibold"
                        : log.startsWith("[SYSTEM]")
                        ? "text-purple-400"
                        : "text-zinc-400"
                    }
                  >
                    {log}
                  </p>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
