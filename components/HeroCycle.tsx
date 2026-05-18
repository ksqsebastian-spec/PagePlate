"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/* Original cycles: Traditional / Marvell / Craftsmanship / Tile / & / Stone
 * We mirror the rhythm: Handwerk / Seehafer / Craftsmanship / Tile / & / Stone -> branded version */
const WORDS = ["Craftsmanship", "Seehafer", "Elemente"];
const INTERVAL = 2400;

export default function HeroCycle() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const id = setInterval(() => {
      setIndex((i) => {
        const next = i + 1;
        if (next >= WORDS.length) {
          setDone(true);
          clearInterval(id);
          return i;
        }
        return next;
      });
    }, INTERVAL);
    return () => clearInterval(id);
  }, [done]);

  return (
    <section
      style={{
        height: done ? "auto" : "100dvh",
        minHeight: done ? undefined : "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0 32px",
        backgroundColor: "#E9E4DF",
        transition: "height 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(48px, 12vw, 220px)",
              fontWeight: 500,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              margin: 0,
              textAlign: "center",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            {WORDS[index]}
          </motion.h1>
        ) : (
          <motion.h1
            key="final"
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(48px, 12vw, 220px)",
              fontWeight: 500,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              margin: 0,
              textAlign: "center",
              userSelect: "none",
              padding: "120px 0 80px",
            }}
          >
            Seehafer
            <br />
            Elemente
          </motion.h1>
        )}
      </AnimatePresence>
    </section>
  );
}
