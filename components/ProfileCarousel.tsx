"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ik = (path: string) =>
  `https://ik.imagekit.io/isclzlt7q/marvell-production/images/${path}`;

const carouselImages = [
  { src: ik("b4031e1e341e73806e561f2ea502a146130f2118_sRiguEyzT.jpg"), alt: "Artisan Methods" },
  { src: ik("Ainslie-hero-4_F1io4B-1M.jpg"), alt: "Bathroom with freestanding bath" },
  { src: ik("Ainslie-hero-1_Y69UuUFHo.jpg"), alt: "Stairs with stone flooring" },
  { src: ik("ainslie-hero-2_sGveNwFj2.jpg"), alt: "Freestanding bath front view" },
  { src: ik("Ainslie-hero-3_Zjw4a3awp.jpg"), alt: "Mirrored bathroom cabinets" },
  { src: ik("7BeachStCottesloe06-1_B2fHLj5HK.jpg"), alt: "Mid-century kitchen" },
  { src: ik("beach-hero2_YQu3Ez8dF.jpg"), alt: "Scullery with olive green tiling" },
  { src: ik("beach-hero3_cR8J5KV8i.jpg"), alt: "Mid-century modern bathroom" },
];

export default function ProfileCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  const prev = () =>
    navigate((index - 1 + carouselImages.length) % carouselImages.length);
  const next = () =>
    navigate((index + 1) % carouselImages.length);

  return (
    <section style={{ padding: "0 32px 72px" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "hidden",
          backgroundColor: "#1a1a1a",
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src={carouselImages[index].src + "?tr=w-1170,h-768,q-80"}
              alt={carouselImages[index].alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prev}
          aria-label="Previous Image"
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.3)",
            border: "none",
            color: "#fff",
            fontSize: "12px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "10px 16px",
            cursor: "pointer",
            zIndex: 10,
            backdropFilter: "blur(4px)",
          }}
        >
          &larr; Prev
        </button>
        <button
          onClick={next}
          aria-label="Next Image"
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.3)",
            border: "none",
            color: "#fff",
            fontSize: "12px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "10px 16px",
            cursor: "pointer",
            zIndex: 10,
            backdropFilter: "blur(4px)",
          }}
        >
          Next &rarr;
        </button>

        {/* Counter */}
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#fff",
            fontSize: "12px",
            letterSpacing: "0.06em",
            opacity: 0.6,
            zIndex: 10,
          }}
        >
          {index + 1} / {carouselImages.length}
        </div>
      </div>
    </section>
  );
}
