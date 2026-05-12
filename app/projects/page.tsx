import type { Metadata } from "next";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects | Seehafer Elemente",
  description: "A selection of our recent stone and tile work.",
};

export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      <div style={{ padding: "48px 32px 32px" }}>
        <h1
          style={{
            fontFamily: "var(--font-display), 'Barlow Condensed', sans-serif",
            fontSize: "clamp(40px, 8vw, 120px)",
            fontWeight: 600,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Projects
        </h1>
        <p
          style={{
            fontSize: "13px",
            opacity: 0.4,
            letterSpacing: "0.04em",
            marginTop: "16px",
          }}
        >
          A selection of our recent work
        </p>
      </div>
      <ProjectGrid />
    </main>
  );
}
