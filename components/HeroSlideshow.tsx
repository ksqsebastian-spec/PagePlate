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
  interval = 4000,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, images.length, interval]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={images[index]}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Previous image"
            style={{
              position: "absolute",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontSize: "24px",
              padding: "8px",
              opacity: 0.7,
            }}
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            style={{
              position: "absolute",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontSize: "24px",
              padding: "8px",
              opacity: 0.7,
            }}
          >
            →
          </button>

          {/* Dots */}
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
                  width: "6px",
                  height: "6px",
                  borderRadius: "0",
                  background: i === index ? "#fff" : "rgba(255,255,255,0.4)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "background 0.2s",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
