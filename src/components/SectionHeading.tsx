"use client";

import { Reveal } from "./motion";

type SectionHeadingProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  index?: string;
};

export function SectionHeading({
  id,
  label,
  title,
  description,
  index,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div id={id} className="scroll-mt-24 max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          {index && (
            <span className="font-mono text-xs text-zinc-600">{index}</span>
          )}
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-teal-700">
            {label}
          </p>
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-[2.5rem] md:leading-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed prose-muted md:text-[17px]">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
