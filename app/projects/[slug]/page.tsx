import HeroSlideshow from "@/components/HeroSlideshow";
import NextProjectLink from "@/components/NextProjectLink";
import ProjectMosaic from "@/components/ProjectMosaic";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { getProject, projects } from "@/lib/data/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Seehafer Elemente`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const metaItems = [
    project.builder && { label: "Builder", value: project.builder },
    project.architect && { label: "Architect", value: project.architect },
    project.stoneSupplier && { label: "Stone Supplier", value: project.stoneSupplier },
    project.photographer && { label: "Photographer", value: project.photographer },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <main>
      {/* Hero slideshow */}
      <HeroSlideshow images={project.heroImages} height="100dvh" />

      {/* Title + Meta */}
      <section
        style={{
          padding: "56px 32px 48px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "32px",
          alignItems: "start",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "var(--font-display), 'Barlow Condensed', sans-serif",
              fontSize: "clamp(48px, 10vw, 140px)",
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontSize: "15px",
              opacity: 0.5,
              fontWeight: 300,
              letterSpacing: "0.02em",
            }}
          >
            {project.tagline}
          </p>
        </div>

        {/* Meta info */}
        {metaItems.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              textAlign: "right",
            }}
          >
            {metaItems.map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.35,
                    marginBottom: "2px",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Overview */}
      <section
        style={{
          padding: "56px 32px",
          maxWidth: "720px",
        }}
      >
        <p
          style={{
            fontSize: "clamp(15px, 1.3vw, 19px)",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          ––– {project.overview}
        </p>
      </section>

      {/* Image Mosaic */}
      <section style={{ padding: "0 0 2px" }}>
        <ProjectMosaic rows={project.mosaicRows} />
      </section>

      {/* Testimonials */}
      {project.testimonials.length > 0 && (
        <TestimonialsCarousel testimonials={project.testimonials} />
      )}

      {/* Project Details */}
      <section
        style={{
          padding: "56px 32px",
          borderTop: "1px solid rgba(0,0,0,0.1)",
          maxWidth: "720px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-body), Barlow, sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.35,
            marginBottom: "24px",
          }}
        >
          Project Details
        </h2>
        <p
          style={{
            fontSize: "clamp(14px, 1.2vw, 17px)",
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          {project.details}
        </p>
      </section>

      {/* Next Project */}
      <NextProjectLink nextSlug={project.nextProject} />
    </main>
  );
}
