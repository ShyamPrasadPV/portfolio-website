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
    if (coarse) {
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
      pos.current.x += dx * 0.12;
      pos.current.y += dy * 0.12;
      el.style.left = `${pos.current.x}px`;
      el.style.top = `${pos.current.y}px`;

      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        raf.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
        transition: "left 0.08s, top 0.08s",
      }}
      aria-hidden
    />
  );
}
