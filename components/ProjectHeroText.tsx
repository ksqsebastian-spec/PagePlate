"use client";

import { motion } from "framer-motion";
import type { ProjectMeta } from "@/lib/data/projects";

type Props = {
  title: string;
  tagline: string;
  metadata: ProjectMeta[];
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function ProjectHeroText({ title, tagline, metadata }: Props) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        padding: "56px 32px 48px",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "32px",
        alignItems: "start",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div>
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "clamp(48px, 10vw, 140px)",
            fontWeight: 500,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "15px",
            opacity: 0.5,
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
          {tagline}
        </motion.p>
      </div>

      {metadata.length > 0 && (
        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            textAlign: "right",
          }}
        >
          {metadata.map((item) => (
            <div key={item.label}>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  opacity: 0.35,
                  marginBottom: "2px",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
}
