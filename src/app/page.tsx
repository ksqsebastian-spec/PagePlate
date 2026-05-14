import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';
import { PROJECTS } from '@/lib/projects';

export default function Home() {
  const featured = PROJECTS.slice(0, 5);

  return (
    <LenisProvider>
      <NavBar />

      <main style={{ backgroundColor: '#35311f' }}>
        <style>{`
          /* ── Spread hero ─────────────────────────────────────── */
          .spread {
            position: relative;
            height: 100svh;
            overflow: hidden;
            background: transparent;
          }

          /* Ghost title behind all images */
          .spread__bg {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding-bottom: 4%;
            pointer-events: none;
            z-index: 0;
          }
          .spread__bg-text {
            font-size: clamp(5rem, 13vw, 14rem);
            font-weight: 400;
            color: rgba(255,255,255,0.06);
            letter-spacing: -0.04em;
            line-height: 0.88;
            text-align: center;
            white-space: nowrap;
            margin: 0;
          }

          /* Hitmarker jolt on hover */
          @keyframes hitjolt {
            0%   { transform: translate3d(0,0,0) scale(1); }
            20%  { transform: translate3d(-2px,-2px,0) scale(1.01); }
            40%  { transform: translate3d(2px, 1px,0) scale(0.99); }
            60%  { transform: translate3d(-1px, 1px,0) scale(1.005); }
            80%  { transform: translate3d(1px,-1px,0) scale(1); }
            100% { transform: translate3d(0,0,0) scale(1); }
          }

          /* Image cards */
          .spread__item {
            position: absolute;
            overflow: hidden;
            display: block;
            text-decoration: none;
            z-index: 1;
          }
          .spread__item:hover {
            animation: hitjolt 0.28s cubic-bezier(0.36,0.07,0.19,0.97) both;
            z-index: 2;
          }
          .spread__item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          /* Pill label */
          .spread__label {
            position: absolute;
            bottom: 0.875rem;
            left: 0.875rem;
            display: inline-flex;
            align-items: center;
            gap: 0.625rem;
            padding: 0.5rem 0.875rem;
            background: rgba(20,18,10,0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 100px;
            font-size: 0.8125rem;
            color: #fff;
            white-space: nowrap;
            opacity: 0;
            transform: translateY(6px);
            transition: opacity 0.2s ease, transform 0.2s ease;
            pointer-events: none;
          }
          .spread__label-arrow {
            display: inline-block;
            transition: transform 0.15s ease;
          }
          .spread__item:hover .spread__label {
            opacity: 1;
            transform: translateY(0);
          }
          .spread__item:hover .spread__label-arrow {
            transform: translateX(3px);
          }

          /*
           * Desktop layout — 5 images, zero overlap.
           * Grid conceptually:
           *  col: [0—21%] [23—49%] [gap] [55—76%] [78—98%]
           *  Images staggered vertically so they never overlap.
           */
          @media (min-width: 768px) {
            /* img1 — left column, upper */
            .spread__item--1 {
              left: 1.5%;  top: 8%;
              width: 20%;  height: 52%;
            }
            /* img2 — centre-left, starts near top */
            .spread__item--2 {
              left: 23%;   top: 4%;
              width: 26%;  height: 46%;
            }
            /* img3 — centre-right, starts lower so no conflict */
            .spread__item--3 {
              left: 51%;   top: 14%;
              width: 23%;  height: 50%;
            }
            /* img4 — centre-left lower (below img2, same column) */
            .spread__item--4 {
              left: 23%;   top: 52%;   /* top = img2.top + img2.height + gap */
              width: 26%;  height: 36%;
            }
            /* img5 — right column */
            .spread__item--5 {
              left: 76%;   top: 6%;
              width: 22%;  height: 56%;
            }
          }

          /* Scroll hint */
          .spread__scroll {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            z-index: 10;
            pointer-events: none;
          }
          .spread__scroll-label {
            font-size: 0.6875rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.3);
          }
          .spread__scroll-line {
            width: 1px;
            height: 2.5rem;
            background: linear-gradient(to bottom, rgba(255,255,255,0.25), transparent);
            animation: scrollPulse 1.8s ease-in-out infinite;
          }
          @keyframes scrollPulse {
            0%   { opacity: 1; transform: scaleY(1) translateY(0); }
            100% { opacity: 0; transform: scaleY(0.3) translateY(100%); }
          }

          /* Mobile: 2-col grid, always-visible labels */
          @media (max-width: 767px) {
            .spread { height: auto; padding: 7rem 0.75rem 3rem; overflow: visible; }
            .spread__bg { position: relative; padding: 1rem 0 2rem; }
            .spread__bg-text { font-size: clamp(2.5rem, 10vw, 4rem); }
            .spread__items-mobile {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 0.75rem;
            }
            .spread__item {
              position: static;
              width: auto !important;
              height: auto !important;
              aspect-ratio: 3/4;
            }
            .spread__label { opacity: 1; transform: none; }
            .spread__scroll { display: none; }
          }
          @media (min-width: 768px) {
            .spread__items-mobile { display: contents; }
          }

          /* ── Project list (below fold) ───────────────────────── */
          .projects-list {
            padding: 6rem 1.5rem 4rem;
          }
          .projects-list__heading {
            font-size: 0.75rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.35);
            margin: 0 0 3rem;
          }
          .projects-list__item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.25rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            text-decoration: none;
            transition: padding-left 0.2s ease;
          }
          .projects-list__item:first-child { border-top: 1px solid rgba(255,255,255,0.08); }
          .projects-list__item:hover { padding-left: 0.75rem; }
          .projects-list__item-left {
            display: flex; align-items: center; gap: 1.5rem;
          }
          .projects-list__item-num {
            font-size: 0.6875rem; letter-spacing: 0.1em;
            color: rgba(255,255,255,0.3); min-width: 1.5rem;
          }
          .projects-list__item-thumb {
            width: 3rem; height: 3rem;
            border-radius: 4px; overflow: hidden; flex-shrink: 0;
          }
          .projects-list__item-thumb img {
            width: 100%; height: 100%; object-fit: cover; display: block;
            transition: transform 0.3s ease;
          }
          .projects-list__item:hover .projects-list__item-thumb img {
            transform: scale(1.1);
          }
          .projects-list__item-title {
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            font-weight: 400; color: #fff;
            letter-spacing: -0.01em; margin: 0;
          }
          .projects-list__item-region {
            font-size: 0.8125rem; color: rgba(255,255,255,0.35);
            margin: 0; display: none;
          }
          @media (min-width: 768px) { .projects-list__item-region { display: block; } }
          .projects-list__item-arrow {
            font-size: 1rem; color: rgba(255,255,255,0.3);
            transition: color 0.2s, transform 0.2s;
          }
          .projects-list__item:hover .projects-list__item-arrow {
            color: #fff; transform: translateX(4px);
          }
        `}</style>

        {/* ── Spread hero ── */}
        <section className="spread" aria-label="Featured projects">
          <div className="spread__bg" aria-hidden="true">
            <h1 className="spread__bg-text">Wild Horizons</h1>
          </div>

          <div className="spread__items-mobile">
            {featured.map((project, i) => (
              <a
                key={project.slug}
                href={`/projects/${project.slug}/`}
                className={`spread__item spread__item--${i + 1}`}
                aria-label={project.title}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
                <span className="spread__label">
                  {project.title}
                  <span className="spread__label-arrow">→</span>
                </span>
              </a>
            ))}
          </div>

          <div className="spread__scroll" aria-hidden="true">
            <span className="spread__scroll-label">Scroll</span>
            <span className="spread__scroll-line" />
          </div>
        </section>

        {/* ── Full project list ── */}
        <section className="projects-list" aria-label="All projects">
          <p className="projects-list__heading">All projects</p>
          <div>
            {PROJECTS.map((project, i) => (
              <a
                key={project.slug}
                href={`/projects/${project.slug}/`}
                className="projects-list__item"
              >
                <div className="projects-list__item-left">
                  <span className="projects-list__item-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="projects-list__item-thumb">
                    <img src={project.image} alt="" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="projects-list__item-title">{project.title}</h2>
                    <p className="projects-list__item-region">{project.region}</p>
                  </div>
                </div>
                <span className="projects-list__item-arrow">→</span>
              </a>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </LenisProvider>
  );
}
