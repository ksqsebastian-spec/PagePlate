import NavBar from '@/components/NavBar';
import ProjectHero from '@/components/ProjectHero';
import ImageGallery from '@/components/ImageGallery';
import ContentLockup from '@/components/ContentLockup';
import NextProjectCard from '@/components/NextProjectCard';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';

const OVERVIEW_BODY = `Known as "Marvellangelo", this Applecross home became the backdrop for a tiling project that tested Marvell Tile and Stones' skill, stamina, and precision. With brick tiles laid overhead on a soaring arched ceiling, each calculation, cut, and placement became a statement of craftsmanship—a balance of engineering, artistry, and purpose.`;

const DETAILS_BODY = `For this Applecross home —nicknamed "Marvellangelo" — Marvell Tile and Stone transformed an arched ceiling into a breathtaking brick-tiled masterpiece. Precision was everything: every tile was set overhead with a consistent 6.4mm grout joint, each measure checked to maintain rhythm, symmetry, and balance across the vault. Days of preparation went into calculating the curve so that it resolved into full bricks at its base.

The installation tested the team's physical endurance and technical skill. Working against gravity, perched on ladders, and craning upward, each brick was locked into perfect alignment – no mean feat! Edges were finished with a refined "bird beak" detail, while joints were filled with 5mm raked-back black resin grout, creating sharp shadow lines that created depth and drama. The result? A truly stunning soaring ceiling that fuses mathematics, engineering, strength, and artistry — a true standout achievement for our team and Perth's interior design landscape.`;

export default function Home() {
  return (
    <LenisProvider>
      {/* Fixed overlay nav */}
      <NavBar />

      <main style={{ backgroundColor: '#35311f', position: 'relative' }}>
        {/* 1. Full-viewport hero */}
        <ProjectHero />

        {/* 2. Image gallery with parallax */}
        <ImageGallery />

        {/* 3. Overview text section */}
        <ContentLockup
          id="overview"
          label="Overview"
          decoration="–––"
          body={OVERVIEW_BODY}
          bodySize="large"
          anchorLabel="→ Project Details"
          anchorHref="#project-details"
        />

        {/* 4. Project details text section */}
        <ContentLockup
          id="project-details"
          label="Project Details"
          decoration="–––"
          body={DETAILS_BODY}
          bodySize="normal"
        />

        {/* 5. Sticky next-project card + footer stacked in grid so footer scrolls over card */}
        <div style={{ display: 'grid' }}>
          {/* Twin spacer: reserves space in flow so footer can scroll over the sticky card */}
          <div
            aria-hidden="true"
            style={{
              gridRow: '1',
              gridColumn: '1 / -1',
              height: '100lvh',
              pointerEvents: 'none',
            }}
          />
          {/* Sticky card sits at same grid row, behind footer */}
          <div style={{ gridRow: '1', gridColumn: '1 / -1' }}>
            <NextProjectCard
              title="Eco Outdoor"
              href="/projects/eco-outdoor/"
              thumbnail="/images/next-project-eco-thumb.jpg"
              thumbnailAlt="Eco Outdoor project thumbnail"
            />
          </div>
          {/* Footer in next row, natural z-index scrolls over the sticky card */}
          <div style={{ gridRow: '2', gridColumn: '1 / -1', position: 'relative', zIndex: 1 }}>
            <Footer />
          </div>
        </div>
      </main>
    </LenisProvider>
  );
}
