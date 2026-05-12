import HeroCycle from "@/components/HeroCycle";
import ProjectGrid from "@/components/ProjectGrid";

export default function HomePage() {
  return (
    <main>
      <HeroCycle />
      <ProjectGrid />

      <footer
        style={{
          padding: "40px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(0,0,0,0.1)",
          fontFamily: "var(--font-body), Barlow, sans-serif",
          fontSize: "12px",
          letterSpacing: "0.06em",
          opacity: 0.45,
        }}
      >
        <span>© {new Date().getFullYear()} Seehafer Elemente</span>
        <span>Stone &amp; Tile Artisans</span>
      </footer>
    </main>
  );
}
