"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
};

export default function TextReveal({
  children,
  delay = 0,
  className,
  style,
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const Component = motion[as] || motion.div;

  return (
    <Component
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </Component>
  );
}
