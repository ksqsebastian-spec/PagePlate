"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/profile", label: "Profile" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mixBlendMode: "difference",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link
            href="/"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1,
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            Seehafer Elemente
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={link.href}
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "0.06em",
                  color: "#fff",
                  opacity: pathname.startsWith(link.href) ? 1 : 0.7,
                  display: "inline-block",
                }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            color: "#fff",
            fontSize: "20px",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "#1a1a1a",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "24px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
