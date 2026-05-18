"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  height?: string;
  autoPlay?: boolean;
  interval?: number;
};

export default function HeroSlideshow({
  images,
  height = "100dvh",
  autoPlay = true,
  interval = 5000,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, images.length, interval]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={images[index] + "?tr=w-1680,q-80"}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
            zIndex: 10,
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === index ? "24px" : "6px",
                height: "2px",
                background: i === index ? "#fff" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
