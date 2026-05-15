import { notFound } from 'next/navigation';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';
import ContentLockup from '@/components/ContentLockup';
import NextProjectCard from '@/components/NextProjectCard';
import ImageGallery from '@/components/ImageGallery';
import { PROJECTS, getProject } from '@/lib/projects';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Marvell Tile & Stone`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = project.nextSlug ? getProject(project.nextSlug) : null;

  const heroMeta = project.metadata ?? [
    { label: 'Region', value: project.region },
    { label: 'Year', value: project.year },
  ];

  return (
    <LenisProvider>
      <NavBar />
      <main style={{ backgroundColor: '#35311f', position: 'relative' }}>
        <style>{`
          .ph { display: grid; height: 100svh; overflow: hidden; background: #35311f; }
          .ph__img { grid-area: 1/-1; width: 100%; height: 100svh; z-index: 0; }
          .ph__img img { width: 100%; height: 100%; object-fit: cover; display: block; }
          .ph__content {
            grid-area: 1/-1; z-index: 1;
            background: rgba(0,0,0,0.3);
            display: grid; grid-template-rows: 1fr auto;
            padding-inline: var(--container-gutter, 20px);
          }
          .ph__header {
            align-self: center; justify-self: center;
            display: grid; gap: 1rem;
            text-align: center; justify-items: center;
          }
          .ph__title {
            font-weight: 400; letter-spacing: -0.01em;
            font-size: 3.5rem;
            color: #fff; line-height: 0.95; margin: 0;
            animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
          }
          @media (min-width: 480px) { .ph__title { font-size: 4.5rem; } }
          @media (min-width: 992px) { .ph__title { font-size: 8rem; } }
          .ph__subtitle {
            font-size: 1.25rem;
            color: rgba(255,255,255,0.6); margin: 0;
            animation: fadeIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both;
          }
          @media (min-width: 992px) { .ph__subtitle { font-size: 1.75rem; } }
          @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

          .ph__meta {
            display: grid; grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem; padding: 1.5rem 0; margin: 0;
          }
          @media (min-width: 768px) {
            .ph__meta { display: flex; justify-content: space-evenly; padding: 3rem 0; }
          }
          .ph__meta-item { display: grid; gap: 0.375rem; }
          @media (min-width: 768px) { .ph__meta-item { justify-items: center; } }
          .ph__meta dt { font-size: 1rem; color: rgba(255,255,255,0.6); letter-spacing: -0.01em; margin: 0; }
          .ph__meta dd { font-size: 1rem; color: #fff; letter-spacing: -0.01em; margin: 0; }
          @media (min-width: 992px) {
            .ph__meta dt, .ph__meta dd { font-size: 1.25rem; letter-spacing: -0.0125em; }
          }

          .project-fg {
            background-color: rgb(202, 202, 196);
            --color--bg: rgb(202, 202, 196);
            --color--bg-strong: #ffffff;
            --color--text: rgba(0,0,0,0.6);
            --color--text-strong: #35311f;
            --color--text-subtle: rgba(0,0,0,0.4);
            --color--border: rgba(0,0,0,0.3);
            --color--border-subtle: rgba(0,0,0,0.1);
          }

          .np-grid { display: grid; isolation: isolate; }
          .np-grid__spacer { grid-area: 1/-1; height: 100lvh; pointer-events: none; }
          .np-grid__card { grid-area: 1/-1; }
          .np-grid__footer { grid-row: 2; }
        `}</style>

        <section className="ph">
          <div className="ph__img">
            <img src={project.image} alt={project.imageAlt} loading="eager" />
          </div>
          <div className="ph__content">
            <div className="ph__header">
              <h1 className="ph__title">{project.title}</h1>
              <p className="ph__subtitle">{project.subtitle}</p>
            </div>
            <dl className="ph__meta">
              {heroMeta.map((item) => (
                <div className="ph__meta-item" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="project-fg">
          <ContentLockup
            id="overview"
            label="Overview"
            body={project.overview}
            anchorLabel="↓ Project Details"
            anchorHref="#project-details"
          />

          {project.galleryImages.length > 0 && (
            <ImageGallery images={project.galleryImages} />
          )}

          <div id="project-details">
            <ContentLockup
              label="Project Details"
              secondaryContent={project.details}
            />
          </div>
        </div>

        <div className="np-grid">
          <div aria-hidden="true" className="np-grid__spacer" />
          <div className="np-grid__card">
            <NextProjectCard
              title={next ? next.title : 'View All'}
              href={next ? `/projects/${next.slug}/` : '/'}
              thumbnail={project.nextThumb}
              thumbnailAlt={project.nextThumbAlt}
              theme="light"
            />
          </div>
          <div className="np-grid__footer">
            <Footer variant="light" />
          </div>
        </div>
      </main>
    </LenisProvider>
  );
}
