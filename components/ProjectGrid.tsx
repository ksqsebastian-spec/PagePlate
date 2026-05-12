import { projects } from "@/lib/data/projects";
import ProjectCard from "./ProjectCard";

// Grid layout pattern: alternating portrait/landscape in a column-based layout
const GRID_ITEMS = projects.flatMap((p) => {
  const heroImg = p.heroImages[0];
  return [{ slug: p.slug, title: p.title, image: heroImg }];
});

// Predefined layout patterns for the masonry-style grid
// Each item: [colSpan, rowSpan] in a 6-column grid
const PATTERNS = [
  [2, 3], // portrait tall
  [3, 2], // landscape wide
  [2, 2], // square-ish
  [3, 3], // large square
  [2, 2], // square
  [4, 2], // wide landscape
];

export default function ProjectGrid() {
  return (
    <section
      style={{
        padding: "0",
        backgroundColor: "#E9E4DF",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridAutoRows: "200px",
          gap: "2px",
        }}
      >
        {GRID_ITEMS.map((item, i) => {
          const [colSpan, rowSpan] = PATTERNS[i % PATTERNS.length];
          return (
            <ProjectCard
              key={item.slug}
              slug={item.slug}
              title={item.title}
              image={item.image}
              style={{
                gridColumn: `span ${colSpan}`,
                gridRow: `span ${rowSpan}`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
