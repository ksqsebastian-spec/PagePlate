import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';
import { PROJECTS } from '@/lib/projects';

export default function Home() {
  return (
    <LenisProvider>
      <NavBar />

      <main style={{ backgroundColor: '#35311f', minHeight: '100svh' }}>
        <style>{`
          .portfolio-hero {
            padding: 12rem 20px 4rem;
            text-align: center;
          }
          .portfolio-hero__eyebrow {
            font-size: 0.75rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.45);
            margin: 0 0 1.25rem;
          }
          .portfolio-hero__title {
            font-size: clamp(3rem, 8vw, 7rem);
            font-weight: 400;
            color: #fff;
            letter-spacing: -0.03em;
            line-height: 0.92;
            margin: 0 0 1.5rem;
          }
          .portfolio-hero__sub {
            font-size: 1rem;
            color: rgba(255,255,255,0.5);
            margin: 0;
          }

          .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
            padding: 0 0.75rem 0.75rem;
          }
          @media (min-width: 1024px) {
            .portfolio-grid { grid-template-columns: repeat(3, 1fr); }
          }

          .portfolio-card {
            position: relative;
            overflow: hidden;
            aspect-ratio: 3/4;
            display: block;
            text-decoration: none;
            background: #1a1810;
          }
          .portfolio-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.7s cubic-bezier(0.16,1,0.3,1), filter 0.5s ease;
          }
          .portfolio-card:hover img {
            transform: scale(1.06);
            filter: brightness(0.55);
          }
          .portfolio-card__always {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 1.25rem 1.5rem;
            background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%);
            transition: opacity 0.3s ease;
          }
          .portfolio-card:hover .portfolio-card__always {
            opacity: 0;
          }
          .portfolio-card__index {
            font-size: 0.6875rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.45);
            margin: 0 0 0.25rem;
          }
          .portfolio-card__title-small {
            font-size: 1.125rem;
            font-weight: 400;
            color: #fff;
            margin: 0;
            letter-spacing: -0.01em;
          }
          .portfolio-card__overlay {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 2rem 1.5rem;
            opacity: 0;
            transition: opacity 0.35s ease;
          }
          .portfolio-card:hover .portfolio-card__overlay {
            opacity: 1;
          }
          .portfolio-card__region {
            font-size: 0.6875rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.5);
            margin: 0 0 0.5rem;
          }
          .portfolio-card__title {
            font-size: 1.5rem;
            font-weight: 400;
            color: #fff;
            margin: 0 0 0.75rem;
            letter-spacing: -0.02em;
          }
          .portfolio-card__desc {
            font-size: 0.8125rem;
            color: rgba(255,255,255,0.7);
            margin: 0 0 1.25rem;
            line-height: 1.55;
          }
          .portfolio-card__cta {
            font-size: 0.75rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.9);
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .portfolio-card__arrow {
            display: inline-block;
            transition: transform 0.2s ease;
          }
          .portfolio-card:hover .portfolio-card__arrow {
            transform: translateX(5px);
          }

          @media (max-width: 639px) {
            .portfolio-hero { padding-top: 8rem; }
            .portfolio-card__overlay,
            .portfolio-card__always { padding: 1rem; }
            .portfolio-card__title { font-size: 1.125rem; }
          }
        `}</style>

        <div className="portfolio-hero">
          <p className="portfolio-hero__eyebrow">Selected Works</p>
          <h1 className="portfolio-hero__title">Portfolio</h1>
          <p className="portfolio-hero__sub">Landscape photography &amp; quiet architecture</p>
        </div>

        <div className="portfolio-grid">
          {PROJECTS.map((project, i) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}/`}
              className="portfolio-card"
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                loading={i < 2 ? 'eager' : 'lazy'}
              />

              {/* Default label — fades out on hover */}
              <div className="portfolio-card__always">
                <p className="portfolio-card__index">{String(i + 1).padStart(2, '0')}</p>
                <h2 className="portfolio-card__title-small">{project.title}</h2>
              </div>

              {/* Hover overlay */}
              <div className="portfolio-card__overlay">
                <p className="portfolio-card__region">{project.region}</p>
                <h2 className="portfolio-card__title">{project.title}</h2>
                <p className="portfolio-card__desc">{project.description}</p>
                <span className="portfolio-card__cta">
                  View project <span className="portfolio-card__arrow">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <Footer />
      </main>
    </LenisProvider>
  );
}
