"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";

interface Blob {
  id: number;
  x: number;
  y: number;
  size: number;
  wobbleSpeed: number;
  driftSpeed: number;
  hue: number;
  delay: number; // ms before this blob starts falling
  depth: number; // 0-1, affects opacity and z-order (0 = far, 1 = close)
}

interface Splash {
  id: number;
  x: number;
  y: number;
}

const createBlob = (index: number = 0, isInitial: boolean = false): Blob => {
  const positions = [15, 30, 45, 60, 75, 90];
  const x = isInitial
    ? positions[index % positions.length] + (Math.random() - 0.5) * 10
    : 10 + Math.random() * 80;

  // Depth affects size, speed, and opacity (0 = far/small/fast, 1 = close/large/slow)
  const depth = Math.random();
  const baseSize = 18 + depth * 38; // 18-56px based on depth

  // Y position in document coordinates - spawn above current viewport
  const spawnY = (typeof window !== 'undefined' ? window.scrollY : 0) - 60 - Math.random() * 40;

  return {
    id: Date.now() + Math.random(),
    x,
    y: spawnY,
    size: baseSize + Math.random() * 15,
    wobbleSpeed: 2 + Math.random() * 2,
    driftSpeed: 0.5 + (1 - depth) * 0.8 + Math.random() * 0.3, // Far blobs fall faster
    hue: Math.random() * 30,
    delay: isInitial ? index * 800 + Math.random() * 400 : 0,
    depth,
  };
};

export function SoupBackground() {
  const [blobs, setBlobs] = useState<Blob[]>([]);
  const [splashes, setSplashes] = useState<Splash[]>([]);

  // Spawn initial blobs with staggered delays
  useEffect(() => {
    const initialBlobs = Array.from({ length: 6 }, (_, i) => createBlob(i, true));
    setBlobs(initialBlobs);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = e.clientY + window.scrollY;

    setBlobs((prev) => [
      ...prev,
      { ...createBlob(), x, y, delay: 0 },
    ]);
  }, []);

  const handleBlobClick = useCallback((blobId: number, x: number, y: number) => {
    // Spawn 2-3 child blobs with slight offset
    const numChildren = 2 + Math.floor(Math.random() * 2);
    const children = Array.from({ length: numChildren }, (_, i) => {
      const offset = (i - (numChildren - 1) / 2) * 12;
      return {
        ...createBlob(),
        x: x + offset,
        y,
        delay: 0,
      };
    });
    setBlobs((prev) => [...prev, ...children]);
  }, []);

  const handleBlobSplash = useCallback((blobId: number, xPercent: number, viewportY: number) => {
    setBlobs((prev) => prev.filter((b) => b.id !== blobId));

    const splashId = Date.now() + Math.random();
    setSplashes((prev) => [...prev, { id: splashId, x: xPercent, y: viewportY }]);

    // Spawn replacement
    setTimeout(() => {
      setBlobs((prev) => [...prev, createBlob()]);
    }, 2000);

    // Cleanup splash
    setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== splashId));
    }, 1000);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0" onClick={handleClick} />

      <div className="absolute inset-x-0 top-0 pointer-events-none z-[5] overflow-visible" style={{ height: '100vh', minHeight: '100%' }}>
        {blobs.map((blob) => (
          <FloatingBlob
            key={blob.id}
            blob={blob}
            onSplash={handleBlobSplash}
            onBlobClick={handleBlobClick}
          />
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {splashes.map((splash) => (
          <FooterSplash key={splash.id} x={splash.x} y={splash.y} />
        ))}
      </div>
    </>
  );
}

function FloatingBlob({
  blob,
  onSplash,
  onBlobClick,
}: {
  blob: Blob;
  onSplash: (id: number, x: number, y: number) => void;
  onBlobClick: (id: number, x: number, y: number) => void;
}) {
  const [position, setPosition] = useState({ x: blob.x, y: blob.y });
  const [isVisible, setIsVisible] = useState(false); // Start hidden
  const hasSplashed = useRef(false);
  const velocity = useRef({ x: (Math.random() - 0.5) * 0.3, y: 0 });
  const pos = useRef({ x: blob.x, y: blob.y });

  useEffect(() => {
    // Wait for delay before starting animation
    const delayTimer = setTimeout(() => {
      setIsVisible(true);

      let frameId: number;

      const animate = () => {
        if (hasSplashed.current) return;

        // Get footer position in DOCUMENT coordinates
        const footer = document.querySelector("footer");
        const footerDocTop = footer
          ? footer.getBoundingClientRect().top + window.scrollY
          : document.body.scrollHeight;

        // Gravity
        velocity.current.y += 0.06 * blob.driftSpeed;
        velocity.current.y = Math.min(velocity.current.y, 6);
        pos.current.y += velocity.current.y;

        // Horizontal drift
        pos.current.x += velocity.current.x;
        velocity.current.x *= 0.998;

        // Bounce off edges
        if (pos.current.x < 5 || pos.current.x > 95) {
          velocity.current.x *= -0.5;
          pos.current.x = Math.max(5, Math.min(95, pos.current.x));
        }

        // Check collision using DOCUMENT coordinates
        const blobBottom = pos.current.y + blob.size;

        if (blobBottom >= footerDocTop + 35) {
          hasSplashed.current = true;
          setIsVisible(false);
          // Pass viewport Y for splash positioning (splash uses fixed positioning)
          const splashViewportY = footerDocTop - window.scrollY + 50;
          onSplash(blob.id, pos.current.x, splashViewportY);
          return;
        }

        setPosition({ x: pos.current.x, y: pos.current.y });
        frameId = requestAnimationFrame(animate);
      };

      frameId = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(frameId);
    }, blob.delay);

    return () => clearTimeout(delayTimer);
  }, [blob, onSplash]);

  if (!isVisible) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBlobClick(blob.id, pos.current.x, pos.current.y);
  };

  return (
    <div
      className="absolute"
      style={{
        cursor: 'url(/cursor-ladle.svg) 6 4, pointer',
        left: `${position.x}%`,
        top: position.y,
        width: blob.size,
        height: blob.size,
        transform: "translateX(-50%)",
        overflow: "visible",
        opacity: 0.5 + blob.depth * 0.5, // 0.5-1.0 based on depth
        filter: `blur(${(1 - blob.depth) * 1.5}px)`, // Slight blur for distant blobs
        zIndex: Math.floor(blob.depth * 10),
        pointerEvents: "auto",
      }}
      onClick={handleClick}
    >
      {/* Liquid tail trailing above the blob */}
      <svg
        viewBox="0 0 100 100"
        className="absolute pointer-events-none"
        style={{
          width: '50%',
          height: '80%',
          left: '50%',
          bottom: '82%',
          transform: 'translateX(-50%)',
        }}
      >
        <defs>
          <linearGradient id={`tail-${blob.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={`hsl(${25 + blob.hue}, 92%, 62%)`} stopOpacity="0" />
            <stop offset="50%" stopColor={`hsl(${22 + blob.hue}, 90%, 58%)`} stopOpacity="0.5" />
            <stop offset="100%" stopColor={`hsl(${20 + blob.hue}, 90%, 55%)`} stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <motion.path
          fill={`url(#tail-${blob.id})`}
          animate={{
            d: [
              "M50,0 C45,25 35,55 25,100 L75,100 C65,55 55,25 50,0",
              "M50,0 C42,25 32,55 25,100 L75,100 C68,55 58,25 50,0",
              "M50,0 C48,25 38,55 25,100 L75,100 C62,55 52,25 50,0",
              "M50,0 C45,25 35,55 25,100 L75,100 C65,55 55,25 50,0",
            ],
          }}
          transition={{
            duration: blob.wobbleSpeed * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg pointer-events-none">
        <defs>
          <radialGradient id={`grad-${blob.id}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor={`hsl(${35 + blob.hue}, 95%, 70%)`} stopOpacity="0.9" />
            <stop offset="70%" stopColor={`hsl(${20 + blob.hue}, 90%, 55%)`} stopOpacity="0.8" />
            <stop offset="100%" stopColor={`hsl(${10 + blob.hue}, 85%, 45%)`} stopOpacity="0.7" />
          </radialGradient>
        </defs>
        <motion.path
          fill={`url(#grad-${blob.id})`}
          initial={{ d: "M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10" }}
          animate={{
            d: [
              "M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10",
              "M50,15 C75,12 88,35 85,55 C82,78 65,88 50,85 C35,82 12,75 15,50 C18,25 25,18 50,15",
              "M48,12 C72,15 85,28 88,52 C91,76 70,88 48,90 C26,92 12,72 10,48 C8,24 24,9 48,12",
              "M52,8 C74,14 92,32 88,54 C84,76 68,92 46,88 C24,84 8,68 12,46 C16,24 30,2 52,8",
              "M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10",
            ],
          }}
          transition={{
            duration: blob.wobbleSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.ellipse
          cx="35"
          cy="35"
          fill="white"
          opacity="0.4"
          initial={{ rx: 12, ry: 8 }}
          animate={{
            rx: [12, 10, 14, 12],
            ry: [8, 12, 6, 8],
          }}
          transition={{
            duration: blob.wobbleSpeed * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

function FooterSplash({ x, y }: { x: number; y: number }) {
  const [particles] = useState(() =>
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      angle: (i / 10) * Math.PI + (Math.random() - 0.5) * 0.5,
      distance: 35 + Math.random() * 60,
      size: 5 + Math.random() * 10,
      hue: Math.random() * 30,
    }))
  );

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        left: `${x}%`,
        top: y,
        transform: "translateX(-50%)",
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle at 30% 30%, hsl(${35 + p.hue}, 95%, 65%), hsl(${20 + p.hue}, 90%, 50%))`,
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: Math.cos(p.angle) * p.distance,
            y: -Math.sin(p.angle) * p.distance * 0.6,
            opacity: 0,
            scale: 0.2,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ))}

      {/* Ripple rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full border-2"
          style={{
            borderColor: `hsla(25, 85%, 55%, ${0.6 - i * 0.15})`,
            left: "50%",
            top: "50%",
          }}
          initial={{ width: 0, height: 0, opacity: 0.6, x: "-50%", y: "-50%" }}
          animate={{
            width: 80 + i * 40,
            height: 20 + i * 10,
            opacity: 0,
          }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
        />
      ))}

      {/* Subtle dark ripple rings */}
      {[0, 1].map((i) => (
        <motion.div
          key={`dark-ring-${i}`}
          className="absolute rounded-full border"
          style={{
            borderColor: `rgba(0, 0, 0, ${0.25 - i * 0.08})`,
            left: "50%",
            top: "50%",
          }}
          initial={{ width: 0, height: 0, opacity: 0.3, x: "-50%", y: "-50%" }}
          animate={{
            width: 100 + i * 50,
            height: 25 + i * 12,
            opacity: 0,
          }}
          transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
