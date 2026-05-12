"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/profile", label: "Profile" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
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
        mixBlendMode: "normal",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-body), Barlow, sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#000",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        Seehafer Elemente
      </Link>

      <nav style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "var(--font-body), Barlow, sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.06em",
              color: pathname.startsWith(link.href) ? "#0000FF" : "#000",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#0000FF")
            }
            onMouseLeave={(e) => {
              if (!pathname.startsWith(link.href)) {
                (e.currentTarget as HTMLAnchorElement).style.color = "#000";
              }
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
