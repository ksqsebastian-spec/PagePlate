import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Seehafer Elemente",
  description: "Get in touch with Seehafer Elemente — stone and tile artisans.",
};

const ik = (path: string) =>
  `https://ik.imagekit.io/isclzlt7q/marvell-production/images/${path}`;

const contactHero = ik(
  "bad8fdd3786e6b872fb2a83eaf79b1d8a018a6d5_LbzsasWfc.jpg"
);

export default function ContactPage() {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "100dvh",
      }}
    >
      {/* Left: image */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src={contactHero + "?tr=w-1000,q-80"}
          alt="Seehafer Elemente craftsmanship"
          fill
          style={{ objectFit: "cover" }}
          sizes="50vw"
          priority
        />
      </div>

      {/* Right: contact info */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 56px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "clamp(40px, 6vw, 96px)",
            fontWeight: 500,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 1.4vw, 22px)",
            fontWeight: 300,
            lineHeight: 1.5,
            marginBottom: "48px",
            opacity: 0.7,
          }}
        >
          Meticulous Craft.
          <br />
          Unrivalled Quality.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.35,
                marginBottom: "4px",
              }}
            >
              Phone
            </div>
            <a
              href="tel:+4989123456"
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
            >
              +49 89 123 456
            </a>
          </div>

          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.35,
                marginBottom: "4px",
              }}
            >
              Email
            </div>
            <a
              href="mailto:hello@seehafer-elemente.de"
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
            >
              hello@seehafer-elemente.de
            </a>
          </div>

          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.35,
                marginBottom: "4px",
              }}
            >
              Instagram
            </div>
            <a
              href="https://instagram.com/seehafer.elemente"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
            >
              @seehafer.elemente
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(0,0,0,0.1)",
            fontSize: "12px",
            letterSpacing: "0.06em",
            opacity: 0.35,
          }}
        >
          &copy; {new Date().getFullYear()} Seehafer Elemente
        </div>
      </div>
    </main>
  );
}
