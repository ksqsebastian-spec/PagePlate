import { notFound } from 'next/navigation';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';
import ContentLockup from '@/components/ContentLockup';
import NextProjectCard from '@/components/NextProjectCard';
import { PROJECTS, getProject } from '@/lib/projects';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = project.nextSlug ? getProject(project.nextSlug) : null;

  return (
    <LenisProvider>
      <NavBar />

      <main style={{ backgroundColor: '#35311f', position: 'relative' }}>
        <style>{`
          /* ── Hero ── */
          .ph { display: grid; height: 100svh; overflow: hidden; background: #35311f; }
          .ph__img { grid-area: 1/-1; width: 100%; height: 100svh; position: relative; z-index: 0; }
          .ph__img img { width: 100%; height: 100%; object-fit: cover; display: block; }
          .ph__content {
            grid-area: 1/-1; z-index: 1;
            background: rgba(0,0,0,0.3);
            color: rgba(255,255,255,0.7);
            display: grid;
            grid-template-rows: 1fr auto;
            padding-inline: 20px;
          }
          .ph__header {
            align-self: center; justify-self: center;
            display: grid; gap: 1rem;
            text-align: center; justify-items: center;
          }
          .ph__title {
            font-weight: 400; letter-spacing: -0.01em;
            font-size: clamp(2.5rem, 6vw, 4.5rem);
            color: #fff; line-height: 0.95; margin: 0;
            animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
          }
          .ph__subtitle {
            font-size: clamp(0.875rem, 1.5vw, 1rem);
            color: rgba(255,255,255,0.7); margin: 0;
            animation: fadeIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both;
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; } to { opacity: 1; }
          }
          .ph__footer {
            display: flex; justify-content: space-between;
            align-items: flex-end; padding-bottom: 20px;
          }
          .ph__meta {
            display: flex; flex-wrap: wrap; gap: 0.75rem 2rem;
            list-style: none; margin: 0; padding: 0;
          }
          .ph__meta div { display: flex; gap: 0.375rem; align-items: baseline; }
          .ph__meta dt { font-size: 0.6875rem; color: rgba(255,255,255,0.6); letter-spacing: 0.05em; text-transform: uppercase; }
          .ph__meta dd { font-size: 0.6875rem; color: #fff; letter-spacing: -0.01em; margin: 0; }
          .ph__scroll {
            display: flex; align-items: center; justify-content: center;
            width: 2.5rem; height: 2.5rem; border-radius: 50%;
            border: 1px solid rgba(255,255,255,0.3); color: #fff;
            text-decoration: none; flex-shrink: 0;
            transition: background 0.2s, border-color 0.2s;
          }
          .ph__scroll:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.5); }
          @media (min-width: 768px) {
            .ph__content { padding-inline: 48px; }
            .ph__footer { padding-bottom: 48px; }
          }

          /* ── Gallery ── */
          .gallery { display: grid; gap: 0.75rem; padding-bottom: 4rem; background: #35311f; }
          .gallery__row { display: flex; gap: 0.75rem; }
          .gallery__row--full .gallery__cell { width: 100%; }
          .gallery__cell { overflow: hidden; flex-shrink: 0; }
          .gallery__cell--wide { width: 66.67%; aspect-ratio: 480/416; }
          .gallery__cell--narrow { width: 33.33%; aspect-ratio: 240/416; }
          .gallery__cell--full { aspect-ratio: 16/7; }
          .gallery__cell img { width: 100%; height: 100%; object-fit: cover; display: block; }
          @media (max-width: 639px) {
            .gallery__row { flex-direction: column; }
            .gallery__cell--wide,
            .gallery__cell--narrow { width: 100%; aspect-ratio: 4/3; }
          }

          /* ── Back link ── */
          .back-link {
            display: inline-flex; align-items: center; gap: 0.5rem;
            font-size: 0.8125rem; letter-spacing: 0.05em; text-transform: uppercase;
            color: rgba(255,255,255,0.5); text-decoration: none;
            padding: 3rem 20px 0;
            transition: color 0.2s;
          }
          .back-link:hover { color: #fff; }
          @media (min-width: 768px) { .back-link { padding: 3rem 48px 0; } }
        `}</style>

        {/* Back nav */}
        <a href="/" className="back-link">← All projects</a>

        {/* Hero */}
        <section className="ph">
          <div className="ph__img">
            <img src={project.image} alt={project.imageAlt} loading="eager" />
          </div>
          <div className="ph__content">
            <div className="ph__header">
              <h1 className="ph__title">{project.title}</h1>
              <p className="ph__subtitle">{project.subtitle}</p>
            </div>
            <div className="ph__footer">
              <dl className="ph__meta">
                <div><dt>Region</dt><dd>{project.region}</dd></div>
                <div><dt>Year</dt><dd>{project.year}</dd></div>
              </dl>
              <a href="#overview" className="ph__scroll" aria-label="Scroll to overview">↓</a>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <div className="gallery">
          {/* Row 1: wide + narrow */}
          <div className="gallery__row">
            <div className="gallery__cell gallery__cell--wide">
              <img src={project.galleryImages[0].src} alt={project.galleryImages[0].alt} loading="lazy" />
            </div>
            <div className="gallery__cell gallery__cell--narrow">
              <img src={project.galleryImages[1].src} alt={project.galleryImages[1].alt} loading="lazy" />
            </div>
          </div>
          {/* Row 2: wide + narrow */}
          {project.galleryImages.length > 3 && (
            <div className="gallery__row">
              <div className="gallery__cell gallery__cell--wide">
                <img src={project.galleryImages[2].src} alt={project.galleryImages[2].alt} loading="lazy" />
              </div>
              <div className="gallery__cell gallery__cell--narrow">
                <img src={project.galleryImages[3].src} alt={project.galleryImages[3].alt} loading="lazy" />
              </div>
            </div>
          )}
          {/* Row 3: full width */}
          {project.galleryImages[4] && (
            <div className="gallery__row gallery__row--full">
              <div className="gallery__cell gallery__cell--full">
                <img src={project.galleryImages[4].src} alt={project.galleryImages[4].alt} loading="lazy" />
              </div>
            </div>
          )}
        </div>

        <ContentLockup
          id="overview"
          label="Overview"
          decoration="–––"
          body={project.overview}
          bodySize="large"
          anchorLabel="→ Project Details"
          anchorHref="#project-details"
        />

        <ContentLockup
          id="project-details"
          label="Project Details"
          body={project.details}
          bodySize="normal"
        />

        {/* Next project */}
        <div style={{ display: 'grid' }}>
          <div aria-hidden="true" style={{ gridRow: '1', gridColumn: '1/-1', height: '100lvh', pointerEvents: 'none' }} />
          <div style={{ gridRow: '1', gridColumn: '1/-1' }}>
            {next ? (
              <NextProjectCard
                title={next.title}
                href={`/projects/${next.slug}/`}
                thumbnail={project.nextThumb}
                thumbnailAlt={project.nextThumbAlt}
              />
            ) : (
              <NextProjectCard
                title="View All"
                href="/"
                thumbnail={project.image}
                thumbnailAlt="Back to portfolio"
              />
            )}
          </div>
          <div style={{ gridRow: '2', gridColumn: '1/-1', position: 'relative', zIndex: 1 }}>
            <Footer />
          </div>
        </div>
      </main>
    </LenisProvider>
  );
}
