"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 500);
  });

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed right-8 bottom-8 z-40"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <Button
            size="icon-lg"
            className="rounded-full border-0 bg-gradient-accent text-white shadow-[0_4px_20px_rgba(0,212,255,0.3)] hover:opacity-90"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <ChevronUp className="size-5" />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
