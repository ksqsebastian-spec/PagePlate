import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        fontSize: "12px",
        letterSpacing: "0.06em",
        opacity: 0.45,
      }}
    >
      <span>&copy; {new Date().getFullYear()} Seehafer Elemente</span>
      <div style={{ display: "flex", gap: "24px" }}>
        <Link href="/profile">Profile</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <span>Stone &amp; Tile Artisans</span>
    </footer>
  );
}
