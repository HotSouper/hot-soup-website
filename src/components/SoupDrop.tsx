"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function SoupDrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const dropControls = useAnimation();
  const [hasDropped, setHasDropped] = useState(false);
  const [rippleKey, setRippleKey] = useState(0);

  useEffect(() => {
    if (isInView && !hasDropped) {
      const animate = async () => {
        // Drop animation
        await dropControls.start({
          y: [0, 300],
          scale: [1, 0.9, 1.1, 0],
          opacity: [1, 1, 1, 0],
          transition: {
            duration: 0.8,
            ease: [0.55, 0, 1, 0.45], // Accelerating ease for falling
            times: [0, 0.7, 0.9, 1],
          },
        });
        setHasDropped(true);
        setRippleKey((k) => k + 1);
      };
      animate();
    }
  }, [isInView, hasDropped, dropControls]);

  return (
    <div ref={containerRef} className="relative h-32 overflow-visible">
      {/* The falling soup drop */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 z-20"
        animate={dropControls}
        initial={{ y: 0, scale: 1, opacity: 1 }}
      >
        <div className="relative">
          {/* Main drop */}
          <div className="w-8 h-10 bg-gradient-to-b from-accent to-accent-dark rounded-full rounded-t-[40%]" />
          {/* Highlight */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>

      {/* Ripple effect on the "surface" */}
      {hasDropped && (
        <svg
          key={rippleKey}
          className="absolute bottom-0 left-0 w-full h-16 z-10"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,10 Q25,10 50,10 T100,10 L100,20 L0,20 Z"
            fill="var(--accent)"
            initial={{ d: "M0,10 Q25,10 50,10 T100,10 L100,20 L0,20 Z" }}
            animate={{
              d: [
                "M0,10 Q25,10 50,10 T100,10 L100,20 L0,20 Z",
                "M0,10 Q25,10 50,0 T100,10 L100,20 L0,20 Z",
                "M0,10 Q35,15 50,5 T100,10 L100,20 L0,20 Z",
                "M0,10 Q30,12 50,8 T100,10 L100,20 L0,20 Z",
                "M0,10 Q25,10 50,10 T100,10 L100,20 L0,20 Z",
              ],
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              times: [0, 0.15, 0.35, 0.6, 1],
            }}
          />
        </svg>
      )}

      {/* Splash particles */}
      {hasDropped && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`${rippleKey}-${i}`}
              className="absolute w-2 h-2 bg-accent rounded-full"
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: (i - 2.5) * 25 + (Math.random() - 0.5) * 20,
                y: -30 - Math.random() * 40,
                opacity: 0,
                scale: 0.5,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
