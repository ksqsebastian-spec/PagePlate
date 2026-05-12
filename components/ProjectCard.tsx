"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  slug: string;
  title: string;
  image: string;
  style?: React.CSSProperties;
};

export default function ProjectCard({ slug, title, image, style }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      style={{ display: "block", position: "relative", overflow: "hidden", ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: "100%", height: "100%" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Hover overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.28)",
          display: "flex",
          alignItems: "flex-end",
          padding: "20px 20px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body), Barlow, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.06em",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          {title}
        </span>
      </motion.div>
    </Link>
  );
}
