"use client";

import { projects } from "@/lib/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const GRID_ITEMS = projects.map((p) => ({
  slug: p.slug,
  title: p.title,
  tagline: p.tagline,
  image: p.heroImage,
}));

// Masonry-style grid pattern: [colSpan, rowSpan]
const PATTERNS: [number, number][] = [
  [3, 3],
  [3, 2],
  [2, 3],
  [4, 2],
  [2, 2],
  [3, 3],
  [3, 2],
  [2, 3],
  [4, 2],
  [2, 2],
];

export default function ProjectGrid() {
  return (
    <section style={{ padding: 0, backgroundColor: "#E9E4DF" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridAutoRows: "180px",
          gap: "2px",
        }}
      >
        {GRID_ITEMS.map((item, i) => {
          const [colSpan, rowSpan] = PATTERNS[i % PATTERNS.length];
          return (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: (i % 6) * 0.06,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                gridColumn: `span ${colSpan}`,
                gridRow: `span ${rowSpan}`,
              }}
            >
              <ProjectCard
                slug={item.slug}
                title={item.title}
                tagline={item.tagline}
                image={item.image}
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
