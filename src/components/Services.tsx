"use client";

import { services } from "@/data/portfolio";
import { IconAI, IconMobile, IconServer, IconWeb } from "./icons";
import { GlowCard, Stagger, MotionItem } from "./motion";
import { SectionHeading } from "./SectionHeading";

const serviceIcons = {
  web: IconWeb,
  mobile: IconMobile,
  server: IconServer,
  ai: IconAI,
} as const;

export function Services() {
  return (
    <section className="section-pad px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="services"
          index="02"
          label="Capabilities"
          title="Services built for delivery"
          description="Structured engagements across web, mobile, backend, and AI—one engineer accountable from architecture through release."
        />

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <MotionItem key={service.title}>
                <GlowCard className="group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 transition hover:border-teal-900/50">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-teal-900/40 bg-teal-950/50 text-teal-500">
                    <Icon />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
                    {service.description}
                  </p>
                </GlowCard>
              </MotionItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
