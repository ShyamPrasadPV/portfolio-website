"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const coarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (coarse || reduceMotion) {
      el.style.display = "none";
      return;
    }

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (raf.current == null) {
        raf.current = requestAnimationFrame(tick);
      }
    };

    const tick = () => {
      raf.current = null;
      const { x: tx, y: ty } = mouse.current;
      const { x, y } = pos.current;
      const dx = tx - x;
      const dy = ty - y;
      pos.current.x += dx * 0.1;
      pos.current.y += dy * 0.1;
      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        raf.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--primary) 12%, transparent) 0%, transparent 70%)",
      }}
      aria-hidden
    />
  );
}
