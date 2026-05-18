"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  style?: React.CSSProperties;
};

export default function ProjectCard({
  slug,
  title,
  tagline,
  image,
  style,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      style={{
        display: "block",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: "100%", height: "100%" }}
      >
        <Image
          src={image + "?tr=w-800,q-75"}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 40%, transparent 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "24px",
        }}
      >
        <span
          style={{
            fontSize: "15px",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.7)",
            marginTop: "4px",
            letterSpacing: "0.02em",
          }}
        >
          {tagline}
        </span>
      </motion.div>
    </Link>
  );
}
