"use client";

import { process } from "@/data/portfolio";
import { Reveal, Stagger, MotionItem } from "./motion";

export function Process() {
  return (
    <section className="px-6 pb-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] px-6 py-10 md:px-10">
            <p className="text-center font-mono text-[11px] uppercase tracking-[0.24em] text-teal-700">
              Engagement model
            </p>
            <h2 className="mt-3 text-center font-display text-2xl font-semibold text-white md:text-3xl">
              From discovery to production support
            </h2>

            <Stagger className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-4">
              {process.map((item) => (
                <MotionItem key={item.step}>
                  <div className="h-full bg-[#08090d] p-6 md:p-7">
                    <span className="font-mono text-sm font-medium text-teal-800">
                      {item.step}
                    </span>
                    <h3 className="mt-3 font-display text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                </MotionItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
