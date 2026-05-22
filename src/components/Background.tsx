"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Background() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#08090d]" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(13,148,136,0.12),transparent)]" />

      {!reduceMotion && (
        <motion.div
          className="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-teal-900/20 blur-[140px]"
          animate={{ opacity: [0.4, 0.55, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="absolute inset-0 bg-noise opacity-[0.025]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  );
}
