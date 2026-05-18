"use client";

import { useEffect, useState, useRef, useCallback } from "react";
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

  const onOverInteractive = useCallback(() => setHovered(true), []);
  const onOutInteractive = useCallback(() => setHovered(false), []);

  useEffect(() => {
    setMounted(true);

    // Detect touch devices — no custom cursor on mobile
    isTouchDevice.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Observe interactive elements for hover state
    const interactiveSelector =
      "a, button, [role='button'], input, textarea, select, [data-cursor-hover]";

    const attachListeners = () => {
      const els = document.querySelectorAll(interactiveSelector);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onOverInteractive);
        el.removeEventListener("mouseleave", onOutInteractive);
        el.addEventListener("mouseenter", onOverInteractive);
        el.addEventListener("mouseleave", onOutInteractive);
      });
    };

    // Initial attach + MutationObserver for dynamic elements
    attachListeners();

    const observer = new MutationObserver(() => {
      attachListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      observer.disconnect();

      const els = document.querySelectorAll(interactiveSelector);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onOverInteractive);
        el.removeEventListener("mouseleave", onOutInteractive);
      });
    };
  }, [cursorX, cursorY, onOverInteractive, onOutInteractive]);

  // Don't render on server or on touch devices
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
