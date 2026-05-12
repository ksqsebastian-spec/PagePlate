import Image from "next/image";
import type { Metadata } from "next";
import PartnerLogos from "@/components/PartnerLogos";
import ServiceSection from "@/components/ServiceSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Profile | Seehafer Elemente",
  description:
    "Meet the Seehafer Elemente team — stone and tile artisans with over two decades of experience in precision craftsmanship.",
};

const profileImg = `https://picsum.photos/seed/profile-portrait/430/900`;

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
            src={profileImg}
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
              fontFamily: "var(--font-body), Barlow, sans-serif",
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
            src={`https://picsum.photos/seed/profile-delivery/600/900`}
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
              fontFamily: "var(--font-body), Barlow, sans-serif",
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
      <section
        style={{
          padding: "72px 32px",
          maxWidth: "760px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display), 'Barlow Condensed', sans-serif",
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
          ––– Originally from Hamburg, founder Klaus Seehafer honed his craft on
          prestigious residential and landmark commercial projects across Germany and
          Austria. With over two decades of experience and establishing Seehafer
          Elemente in 2016, we have become renowned master craftsmen, celebrated for
          our exceptional technique, artistry, and unwavering quality.
        </p>
        <p
          style={{
            fontSize: "clamp(15px, 1.3vw, 20px)",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          ––– Our six-member team — four master tradesmen and two apprentices — pairs
          exceptional skill with precision and efficiency. Approachable yet meticulous,
          we deliver projects swiftly while maintaining the highest standards,
          consistently exceeding expectations for architects, builders, and designers.
        </p>
      </section>

      {/* Team photo carousel (static grid) */}
      <section
        style={{
          padding: "0 32px 72px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}
        >
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden" }}
            >
              <Image
                src={`https://picsum.photos/seed/team-${n}/375/300`}
                alt={`Team photo ${n}`}
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
            fontFamily: "var(--font-body), Barlow, sans-serif",
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
            marginBottom: "0",
          }}
        >
          We partner with you, your architect, designer, or builder to oversee every
          detail with precision, offering our own expertise along the way to elevate
          and shape your project vision.
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
            fontFamily: "var(--font-body), Barlow, sans-serif",
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
            style={{ position: "relative", width: "56px", height: "56px", flexShrink: 0 }}
          >
            <Image
              src={featuredProject.heroImages[0]}
              alt={featuredProject.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="56px"
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display), 'Barlow Condensed', sans-serif",
                fontSize: "clamp(24px, 4vw, 48px)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              {featuredProject.title}
            </div>
            <div style={{ fontSize: "13px", opacity: 0.5, marginTop: "4px" }}>
              {featuredProject.tagline}
            </div>
          </div>
        </a>
      </section>
    </main>
  );
}
