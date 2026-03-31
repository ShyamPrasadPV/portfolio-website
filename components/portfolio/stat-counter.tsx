"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function StatCounter({ value, suffix = "", label, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: easeOutCubic,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className={className}>
      <span className="block text-3xl font-extrabold leading-tight text-gradient sm:text-[1.8rem]">
        {display.toLocaleString()}

        {suffix}
      </span>

      <span className="text-muted-foreground text-xs font-medium tracking-wide">
        {label}
      </span>
    </div>
  );
}
