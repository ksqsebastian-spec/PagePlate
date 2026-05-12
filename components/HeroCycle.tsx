"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = ["Artisan", "Seehafer", "Elemente", "Stone & Tile"];
const INTERVAL = 2200;

export default function HeroCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        height: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0 32px",
        backgroundColor: "#E9E4DF",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-display), 'Barlow Condensed', sans-serif",
            fontSize: "clamp(60px, 20vw, 340px)",
            fontWeight: 600,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "#000",
            margin: 0,
            textAlign: "center",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          {WORDS[index]}
        </motion.h1>
      </AnimatePresence>
    </section>
  );
}
