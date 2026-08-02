"use client";

import { site, socialLinks } from "@/data/portfolio";
import { IconDownload } from "./icons";
import { GlowCard, Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { useState } from "react";

export function Contact() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const handleNext = () => setStep((s) => s + 1);
  const handlePrev = () => setStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStep(5); // Success step
  };

  const resetForm = () => {
    setStep(1);
    setProjectType("");
    setBudget("");
    setTimeline("");
    setEmail("");
    setDetails("");
  };

  return (
    <section className="section-pad px-6 pb-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="contact"
          index="09"
          label="Let's Build Together"
          title="Start a conversation"
          description="Share your product goals, timeline, and budget. Let's scope the architecture and timeline."
        />

        <div className="mt-14 max-w-2xl mx-auto">
          <Reveal>
            <GlowCard className="rounded-2xl border border-white/[0.04] bg-[#09090b]/40 glass p-8 md:p-10 min-h-[360px] flex flex-col justify-between">
              
              {/* Form Step 1: Project Type */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-purple-400">Step 01 / 04</span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">What are you looking to build?</h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["Startup Product", "Mobile App (React Native)", "AI System / Workflow", "Full Stack Web App", "Custom Backend / API"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        className={`rounded-xl border p-4 text-left text-sm font-medium transition-all ${
                          projectType === type
                            ? "border-purple-500 bg-purple-500/10 text-white"
                            : "border-white/[0.04] bg-[#020204]/40 text-zinc-400 hover:border-purple-500/20"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      disabled={!projectType}
                      onClick={handleNext}
                      className="btn-primary disabled:opacity-40 disabled:pointer-events-none"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Form Step 2: Budget */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-purple-400">Step 02 / 04</span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">What is your budgeted scope?</h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["< $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"].map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setBudget(tier)}
                        className={`rounded-xl border p-4 text-left text-sm font-medium transition-all ${
                          budget === tier
                            ? "border-purple-500 bg-purple-500/10 text-white"
                            : "border-white/[0.04] bg-[#020204]/40 text-zinc-400 hover:border-purple-500/20"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={handlePrev} className="btn-secondary">Back</button>
                    <button
                      type="button"
                      disabled={!budget}
                      onClick={handleNext}
                      className="btn-primary disabled:opacity-40 disabled:pointer-events-none"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Form Step 3: Timeline */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-purple-400">Step 03 / 04</span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">What is your targeted delivery timeline?</h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["< 1 Month", "1 - 3 Months", "3+ Months", "Undecided"].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setTimeline(time)}
                        className={`rounded-xl border p-4 text-left text-sm font-medium transition-all ${
                          timeline === time
                            ? "border-purple-500 bg-purple-500/10 text-white"
                            : "border-white/[0.04] bg-[#020204]/40 text-zinc-400 hover:border-purple-500/20"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={handlePrev} className="btn-secondary">Back</button>
                    <button
                      type="button"
                      disabled={!timeline}
                      onClick={handleNext}
                      className="btn-primary disabled:opacity-40 disabled:pointer-events-none"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Form Step 4: Submission */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-purple-400">Step 04 / 04</span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">Let's capture your context</h3>
                  </div>
                  <div className="space-y-4">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@company.com"
                      className="w-full rounded-xl border border-white/[0.04] bg-[#020204]/80 px-4 py-3 font-mono text-xs text-white outline-none focus:border-purple-500/20 placeholder:text-zinc-700"
                      aria-label="Email address"
                    />
                    <textarea
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Tell me briefly about what you are building..."
                      rows={3}
                      className="w-full rounded-xl border border-white/[0.04] bg-[#020204]/80 px-4 py-3 font-sans text-sm text-white outline-none focus:border-purple-500/20 placeholder:text-zinc-750"
                      aria-label="Project details context"
                    />
                  </div>
                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={handlePrev} className="btn-secondary">Back</button>
                    <button
                      type="submit"
                      disabled={!email.trim()}
                      className="btn-primary disabled:opacity-40 disabled:pointer-events-none"
                    >
                      Submit Scope
                    </button>
                  </div>
                </form>
              )}

              {/* Form Step 5: Success & Calendly Integration */}
              {step === 5 && (
                <div className="space-y-6 text-center py-6">
                  <div>
                    <span className="text-4xl">🚀</span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-white">Scope Submitted!</h3>
                    <p className="mt-2 text-sm text-zinc-400 max-w-md mx-auto">
                      Thank you! I have received your {projectType.toLowerCase()} scope. Let's align on a video call.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center sm:flex-row pt-4">
                    <a
                      href="https://calendly.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary justify-center"
                    >
                      Book call via Calendly
                    </a>
                    <button type="button" onClick={resetForm} className="btn-secondary">
                      Submit another scope
                    </button>
                  </div>
                </div>
              )}

            </GlowCard>
          </Reveal>

          {/* Social Links Badge cluster */}
          <Reveal className="mt-8">
            <div className="flex flex-wrap justify-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/[0.04] px-4 py-2 text-[13px] text-zinc-500 transition hover:border-purple-500/20 hover:text-zinc-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
