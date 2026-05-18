"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState, type ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitioning, setTransitioning] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      // Route changed — trigger exit animation
      setTransitioning(true);
      prevPathname.current = pathname;

      // After exit animation completes, swap children and enter
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setTransitioning(false);
      }, 700);

      return () => clearTimeout(timer);
    } else {
      // Same route, just update children
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <>
      {/* Wipe overlay */}
      <AnimatePresence mode="wait">
        {transitioning && (
          <motion.div
            key="wipe"
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: [0, 1, 1, 0],
              transition: {
                duration: 1.4,
                ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
                times: [0, 0.35, 0.55, 1],
              },
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 60,
              backgroundColor: "#1a1a1a",
              transformOrigin: "bottom",
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>

      {/* Page content */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            delay: 0.3,
          },
        }}
      >
        {displayChildren}
      </motion.div>
    </>
  );
}
