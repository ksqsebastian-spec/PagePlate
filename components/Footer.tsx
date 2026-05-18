import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "32px 32px",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        fontSize: "12px",
        letterSpacing: "0.06em",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Left: Copyright */}
        <span style={{ opacity: 0.4 }}>
          &copy; {new Date().getFullYear()} Seehafer Elemente
        </span>

        {/* Centre: Links */}
        <div style={{ display: "flex", gap: "24px", opacity: 0.4 }}>
          <Link href="/profile">Profile</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right: Social + credit */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            opacity: 0.4,
          }}
        >
          <a
            href="https://instagram.com/seehafer.elemente"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/seehafer.elemente"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
