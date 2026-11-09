"use client";

import { Button } from "@/components/ui/button";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 560);
  });

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed right-5 bottom-5 z-40 md:right-8 md:bottom-8"
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <Button
            size="icon-lg"
            className="rounded-full border border-border bg-card text-foreground shadow-lg hover:bg-muted"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
