import HeroSlideshow from "@/components/HeroSlideshow";
import NextProjectLink from "@/components/NextProjectLink";
import ProjectMosaic from "@/components/ProjectMosaic";
import ProjectHeroText from "@/components/ProjectHeroText";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
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

  // Build hero images array: hero + first 2 gallery images for slideshow
  const heroImages = [
    project.heroImage,
    ...project.galleryImages.slice(0, 2),
  ];

  return (
    <main>
      {/* Hero slideshow */}
      <HeroSlideshow images={heroImages} height="100dvh" />

      {/* Title + Meta — animated */}
      <ProjectHeroText
        title={project.title}
        tagline={project.tagline}
        metadata={project.metadata}
      />

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
          &mdash;&mdash;&mdash; {project.overview}
        </p>
      </section>

      {/* Image Mosaic */}
      <section style={{ padding: "0 0 2px" }}>
        <ProjectMosaic images={project.galleryImages} />
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
      <Footer />
    </main>
  );
}
