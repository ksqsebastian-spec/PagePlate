import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/lib/data/projects";

type Props = {
  nextSlug: string;
};

export default function NextProjectLink({ nextSlug }: Props) {
  const project = getProject(nextSlug);
  if (!project) return null;

  return (
    <section
      style={{
        borderTop: "1px solid rgba(0,0,0,0.1)",
        padding: "40px 32px",
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body), Barlow, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.4,
            flexShrink: 0,
          }}
        >
          Next project
        </span>

        <div style={{ position: "relative", width: "56px", height: "56px", flexShrink: 0 }}>
          <Image
            src={project.heroImages[0]}
            alt={project.title}
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
              lineHeight: 1,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontSize: "13px",
              opacity: 0.5,
              marginTop: "4px",
            }}
          >
            {project.tagline}
          </div>
        </div>

        <span
          style={{
            marginLeft: "auto",
            fontSize: "20px",
            opacity: 0.4,
          }}
        >
          →
        </span>
      </Link>
    </section>
  );
}
