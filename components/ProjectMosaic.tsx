"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  images: string[];
};

export default function ProjectMosaic({ images }: Props) {
  // Arrange images in rows: first row 3 images, second row 3 images, etc.
  const rows: string[][] = [];
  for (let i = 0; i < images.length; i += 3) {
    rows.push(images.slice(i, i + 3));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {rows.map((row, ri) => (
        <div
          key={ri}
          className="mosaic-row"
          style={{
            display: "flex",
            gap: "2px",
          }}
        >
          {row.map((src, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: ci * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                position: "relative",
                flex: ci === 0 ? 2 : 1,
                overflow: "hidden",
                aspectRatio: ci === 0 ? "16/9" : "4/5",
              }}
            >
              <Image
                src={src + "?tr=w-800,q-75"}
                alt={`Project image ${ri + 1}-${ci + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
