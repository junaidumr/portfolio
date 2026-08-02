"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Background() {
  const reduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // Max 10px translate
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reduceMotion]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Obsidian base background */}
      <div className="absolute inset-0 bg-[#020204]" />
      
      {/* Ambient Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Subtle Aurora light dome */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.06),rgba(99,102,241,0.02),transparent)]" />

      {/* Floating animated blobs */}
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute -left-20 top-1/4 h-[480px] w-[480px] rounded-full bg-purple-900/10 blur-[130px]"
            animate={{
              x: mousePos.x * 1.5,
              y: mousePos.y * 1.5,
              opacity: [0.35, 0.5, 0.35]
            }}
            transition={{
              opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              x: { type: "spring", stiffness: 60, damping: 20 },
              y: { type: "spring", stiffness: 60, damping: 20 }
            }}
          />
          <motion.div
            className="absolute -right-20 top-2/3 h-[520px] w-[520px] rounded-full bg-indigo-900/08 blur-[140px]"
            animate={{
              x: mousePos.x * -1.2,
              y: mousePos.y * -1.2,
              opacity: [0.25, 0.4, 0.25]
            }}
            transition={{
              opacity: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              x: { type: "spring", stiffness: 60, damping: 20 },
              y: { type: "spring", stiffness: 60, damping: 20 }
            }}
          />
        </>
      )}

      {/* Noise layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      
      {/* Top light separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
    </div>
  );
}
