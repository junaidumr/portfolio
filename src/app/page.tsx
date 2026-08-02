"use client";
import { About } from "@/components/About";
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { TechStrip } from "@/components/TechStrip";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Ensure the page starts at the very top (About section) on initial load
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Background />
      <Header />
      <main id="main" className="relative">
        <Hero />
        <TechStrip />
        <div className="section-divider mx-auto max-w-6xl" />
        <About />
        <div className="section-divider mx-auto max-w-6xl" />
        <Experience />
        <div className="section-divider mx-auto max-w-6xl" />
        <Projects />
        <div className="section-divider mx-auto max-w-6xl" />
        <Skills />
        <div className="section-divider mx-auto max-w-6xl" />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
