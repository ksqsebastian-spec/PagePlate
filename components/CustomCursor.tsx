"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isTouchDevice = useRef(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 800, mass: 0.15 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    isTouchDevice.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Use event delegation on document instead of attaching to every element
    const interactiveSelector =
      "a, button, [role='button'], input, textarea, select, [data-cursor-hover]";

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        setHovered(true);
      }
    };

    const onOut = (e: Event) => {
      const target = e.target as HTMLElement;
      const related = (e as MouseEvent).relatedTarget as HTMLElement | null;
      if (
        target.closest(interactiveSelector) &&
        (!related || !related.closest(interactiveSelector))
      ) {
        setHovered(false);
      }
    };

    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [cursorX, cursorY, visible]);

  if (!mounted) return null;
  if (isTouchDevice.current) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x,
        y,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
        translateX: "-50%",
        translateY: "-50%",
        willChange: "transform",
      }}
      animate={{
        width: hovered ? 3 : 24,
        height: hovered ? 32 : 24,
        borderRadius: hovered ? "1px" : "50%",
        opacity: visible ? 1 : 0,
      }}
      transition={{
        width: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
        height: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
        borderRadius: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
        opacity: { duration: 0.15 },
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "inherit",
        }}
      />
    </motion.div>
  );
}
