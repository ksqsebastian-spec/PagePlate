import NavBar from '@/components/NavBar';
import ProjectHero from '@/components/ProjectHero';
import ImageGallery from '@/components/ImageGallery';
import ContentLockup from '@/components/ContentLockup';
import NextProjectCard from '@/components/NextProjectCard';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';

const OVERVIEW_BODY = `–––Wild Horizons is a study of the places that quiet the mind — sunset-streaked alpine peaks, palms leaning over warm coastal water, forests softened by morning fog, and the architecture that lives alongside them. Each frame is a meditation on scale, light, and the moment a landscape stops feeling like a view and starts feeling like a memory.`;

const DETAILS_BODY = `Shot across three continents over eighteen months, this series follows a simple brief: photograph places that feel both improbably large and unmistakably personal. From the Dolomites at first light to a single palm above the South Pacific, from Iceland's basalt waterfalls to a Northwest coast going pink at dusk, the work is paired with quiet residential architecture — modern, restrained, designed to listen rather than speak.

Every image is unedited beyond color and contrast — no compositing, no relocations, no false skies. The intent is reverence, not embellishment. The hope is that you'll look at one of these landscapes the way a guest looks at the home it belongs to: slowly, all the way through, and then again.`;

export default function Home() {
  return (
    <LenisProvider>
      <NavBar />

      <main style={{ backgroundColor: '#35311f', position: 'relative' }}>
        <ProjectHero />

        <ImageGallery />

        <ContentLockup
          id="overview"
          label="Overview"
          decoration="–––"
          body={OVERVIEW_BODY}
          bodySize="large"
          anchorLabel="→ Project Details"
          anchorHref="#project-details"
        />

        <ContentLockup
          id="project-details"
          label="Project Details"
          decoration="–––"
          body={DETAILS_BODY}
          bodySize="normal"
        />

        <div style={{ display: 'grid' }}>
          <div
            aria-hidden="true"
            style={{
              gridRow: '1',
              gridColumn: '1 / -1',
              height: '100lvh',
              pointerEvents: 'none',
            }}
          />
          <div style={{ gridRow: '1', gridColumn: '1 / -1' }}>
            <NextProjectCard
              title="Quiet Forests"
              href="/projects/quiet-forests/"
              thumbnail="/images/next-project-eco-thumb.jpg"
              thumbnailAlt="Sun rays piercing through a misty forest at dawn"
            />
          </div>
          <div style={{ gridRow: '2', gridColumn: '1 / -1', position: 'relative', zIndex: 1 }}>
            <Footer />
          </div>
        </div>
      </main>
    </LenisProvider>
  );
}
