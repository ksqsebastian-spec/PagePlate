"use client";

import { gridItems } from "@/lib/data/gridItems";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function ProjectGrid() {
  return (
    <section style={{ padding: 0, backgroundColor: "#E9E4DF" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridAutoRows: "150px",
          gap: "2px",
        }}
      >
        {gridItems.map((item, i) => (
          <motion.div
            key={`${item.slug}-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: 0.5,
              delay: (i % 6) * 0.04,
              ease: "easeOut",
            }}
            style={{
              gridColumn: `span ${item.colSpan}`,
              gridRow: `span ${item.rowSpan}`,
            }}
          >
            <ProjectCard
              slug={item.slug}
              title={item.title}
              tagline=""
              image={item.image}
              alt={item.alt}
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
