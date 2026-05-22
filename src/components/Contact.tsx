"use client";

import { site, socialLinks } from "@/data/portfolio";
import { IconDownload } from "./icons";
import { GlowCard, Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

const contactMethods = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    description: "Preferred for project scope and timelines",
  },
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    description: "Calls and WhatsApp",
  },
  {
    label: "Location",
    value: site.location,
    href: null,
    description: "Remote and international engagements",
  },
] as const;

export function Contact() {
  return (
    <section className="section-pad px-6 pb-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="contact"
          index="06"
          label="Contact"
          title="Start a conversation"
          description="Share your product goals, timeline, and constraints. I respond to serious inquiries within one business day."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {contactMethods.map((method, i) => (
            <Reveal key={method.label} delay={i * 0.06}>
              <GlowCard className="h-full rounded-xl border border-white/[0.07] bg-white/[0.02] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  {method.label}
                </p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="mt-3 block font-display text-lg font-semibold text-white transition hover:text-teal-500"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="mt-3 font-display text-lg font-semibold text-white">
                    {method.value}
                  </p>
                )}
                <p className="mt-2 text-sm text-zinc-600">{method.description}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="flex flex-col gap-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-teal-950/30 to-transparent p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">
                Ready to move forward?
              </h3>
              <p className="mt-2 max-w-md text-sm prose-muted">
                Download my resume or connect on LinkedIn and GitHub for additional context on recent work.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={site.cvUrl} download className="btn-primary">
                <IconDownload />
                Download resume
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/[0.07] px-3.5 py-2 text-[13px] text-zinc-500 transition hover:border-teal-900/50 hover:text-zinc-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
