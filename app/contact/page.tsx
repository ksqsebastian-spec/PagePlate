import Image from "next/image";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Seehafer Elemente",
  description: "Get in touch with Seehafer Elemente — stone and tile artisans.",
};

const ik = (path: string) =>
  `https://ik.imagekit.io/isclzlt7q/marvell-production/images/${path}`;

const contactHero = ik(
  "bad8fdd3786e6b872fb2a83eaf79b1d8a018a6d5_LbzsasWfc.jpg"
);

/* Gallery images shown below contact info */
const galleryImages = [
  { src: ik("Ainslie-hero-4_F1io4B-1M.jpg"), alt: "Bathroom with freestanding bath and stone floors", cols: 3, rows: 2 },
  { src: ik("project-hero-image-4x3-1_YbVT424zo.jpg"), alt: "Brick tiled ceiling wardrobe", cols: 3, rows: 3 },
  { src: ik("DSC_3568-cropped_YHAqn7tTJ.jpg"), alt: "Stonework on stairs", cols: 3, rows: 2 },
  { src: ik("Eco-hero1_tteDCH2kp.jpg"), alt: "Eco Outdoor showroom", cols: 3, rows: 2 },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero split: image + contact info */}
      <section
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

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
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
        </div>
      </section>

      {/* Gallery grid — matches the original contact page's image portfolio */}
      <section style={{ padding: 0 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "150px",
            gap: "2px",
          }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                gridColumn: `span ${img.cols}`,
                gridRow: `span ${img.rows}`,
                overflow: "hidden",
              }}
            >
              <Image
                src={img.src + "?tr=w-800,q-80"}
                alt={img.alt}
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
