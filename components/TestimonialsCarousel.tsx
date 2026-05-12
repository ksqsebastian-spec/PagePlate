"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getProject, type Testimonial } from "@/lib/data/projects";

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialsCarousel({ testimonials }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  const prev = () => navigate((index - 1 + testimonials.length) % testimonials.length);
  const next = () => navigate((index + 1) % testimonials.length);

  const t = testimonials[index];
  const project = t.projectSlug ? getProject(t.projectSlug) : undefined;

  return (
    <section
      style={{
        padding: "80px 32px",
        borderTop: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Counter */}
        <div
          style={{
            fontFamily: "var(--font-body), Barlow, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.08em",
            marginBottom: "40px",
            opacity: 0.4,
          }}
        >
          {index + 1} / {testimonials.length}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Quote */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body), Barlow, sans-serif",
                  fontSize: "clamp(16px, 1.4vw, 22px)",
                  lineHeight: 1.55,
                  fontWeight: 300,
                  marginBottom: "28px",
                  fontStyle: "italic",
                }}
              >
                ––– {t.quote}
              </p>
              <div>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t.author}
                </div>
                {t.title && (
                  <div style={{ fontSize: "13px", opacity: 0.6, marginTop: "2px" }}>
                    {t.title}{t.company ? `, ${t.company}` : ""}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project thumbnail */}
          {project && (
            <Link
              href={`/projects/${project.slug}`}
              style={{
                display: "block",
                width: "180px",
                flexShrink: 0,
              }}
            >
              <div style={{ position: "relative", width: "180px", height: "120px" }}>
                <Image
                  src={project.heroImages[0]}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="180px"
                />
              </div>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                  marginTop: "8px",
                  textTransform: "uppercase",
                  opacity: 0.6,
                }}
              >
                {project.title}
              </div>
            </Link>
          )}
        </div>

        {/* Navigation */}
        {testimonials.length > 1 && (
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            <button
              onClick={prev}
              style={{
                fontFamily: "var(--font-body), Barlow, sans-serif",
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                opacity: 0.5,
              }}
            >
              ← Prev
            </button>
            <button
              onClick={next}
              style={{
                fontFamily: "var(--font-body), Barlow, sans-serif",
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                opacity: 0.5,
              }}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
