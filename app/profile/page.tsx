import Image from "next/image";
import type { Metadata } from "next";
import PartnerLogos from "@/components/PartnerLogos";
import ServiceSection from "@/components/ServiceSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Profile | Seehafer Elemente",
  description:
    "Meet the Seehafer Elemente team — stone and tile artisans with precision craftsmanship.",
};

const ik = (path: string) =>
  `https://ik.imagekit.io/isclzlt7q/marvell-production/images/${path}`;

const profileImg1 = ik(
  "b4031e1e341e73806e561f2ea502a146130f2118_sRiguEyzT.jpg"
);
const profileImg2 = ik(
  "d520252b236de3ddccd3d3fa453f0575480218bc_1wvBwAuVk.png"
);
const teamImages = [
  ik("MarvellTile_Stone-June-16.06.25-27_AwXge4fof.jpg"),
  ik("MarvellTile_Stone-June-16.06.25-5_DEPDvxGUs.jpg"),
  ik("MarvellTile_Stone-14.02.25-9_T1omG2rQ3.jpg"),
  ik("MarvellTile_Stone-14.02.25-16_M_I1_91W9.jpg"),
];

export default function ProfilePage() {
  const featuredProject = projects[0];

  return (
    <main style={{ paddingTop: "80px" }}>
      {/* Intro: Two portrait images with labels */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2px",
          height: "70dvh",
        }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src={profileImg1 + "?tr=w-800,q-80"}
            alt="Artisan Methods"
            fill
            style={{ objectFit: "cover" }}
            sizes="50vw"
            priority
          />
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              opacity: 0.85,
            }}
          >
            Artisan Methods
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src={profileImg2 + "?tr=w-800,q-80"}
            alt="Modern Delivery"
            fill
            style={{ objectFit: "cover" }}
            sizes="50vw"
            priority
          />
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              opacity: 0.85,
            }}
          >
            Modern Delivery
          </div>
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: "72px 32px", maxWidth: "760px" }}>
        <h2
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "clamp(32px, 5vw, 72px)",
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Overview
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 1.3vw, 20px)",
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: "28px",
          }}
        >
          &mdash;&mdash;&mdash; Originally from London, founder William Marvell
          honed his craft on prestigious residential and landmark commercial
          projects across the UK and Europe. After relocating to Perth in 2019
          and establishing Marvell Tile and Stone, he has become a renowned
          master craftsman, celebrated for exceptional technique, artistry, and
          unwavering quality.
        </p>
        <p
          style={{
            fontSize: "clamp(15px, 1.3vw, 20px)",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          &mdash;&mdash;&mdash; Our six-member team — four master tradesmen and
          two apprentices — pairs exceptional skill with precision and
          efficiency. Approachable yet meticulous, we deliver projects swiftly
          while maintaining the highest standards, consistently exceeding
          expectations for architects, builders, and designers.
        </p>
      </section>

      {/* Team photo grid */}
      <section style={{ padding: "0 32px 72px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}
        >
          {teamImages.map((src, n) => (
            <div
              key={n}
              style={{
                position: "relative",
                aspectRatio: "5/4",
                overflow: "hidden",
              }}
            >
              <Image
                src={src + "?tr=w-480,q-75"}
                alt={`Team photo ${n + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "0 32px" }}>
        <h2
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.35,
            marginBottom: "8px",
          }}
        >
          Meticulous Implementation
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 1.3vw, 19px)",
            fontWeight: 300,
            maxWidth: "540px",
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          We partner with you, your architect, designer, or builder to oversee
          every detail with precision, offering our own expertise along the way
          to elevate and shape your project vision.
        </p>
        {services.map((service) => (
          <ServiceSection key={service.id} service={service} />
        ))}
      </section>

      {/* Partner Logos */}
      <section style={{ padding: "0 32px" }}>
        <PartnerLogos />
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* Featured Project */}
      <section
        style={{
          padding: "48px 32px",
          borderTop: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.35,
            marginBottom: "20px",
          }}
        >
          Featured Project
        </div>
        <a
          href={`/projects/${featuredProject.slug}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "56px",
              height: "56px",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            <Image
              src={featuredProject.heroImage + "?tr=w-120,q-70"}
              alt={featuredProject.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="56px"
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(24px, 4vw, 48px)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              {featuredProject.title}
            </div>
            <div
              style={{ fontSize: "13px", opacity: 0.5, marginTop: "4px" }}
            >
              {featuredProject.tagline}
            </div>
          </div>
        </a>
      </section>

      <Footer />
    </main>
  );
}
