'use client';

import { useState, useEffect } from 'react';

export default function ProjectHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .project-hero {
          display: grid;
          height: 100svh;
          overflow: hidden;
          background-color: #35311f;
        }

        .project-hero__image-wrapper {
          grid-area: 1 / -1;
          width: 100%;
          height: 100svh;
          position: relative;
          z-index: -1;
        }

        .project-hero__image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .project-hero__content {
          grid-area: 1 / -1;
          background-color: rgba(0, 0, 0, 0.3);
          color: rgba(255, 255, 255, 0.7);
          display: grid;
          grid-template-rows: 1fr auto;
          padding-inline: 20px;
        }

        .project-hero__header {
          grid-area: 1 / 1 / -1 / -1;
          align-self: center;
          justify-self: center;
          display: grid;
          gap: 1rem;
          text-align: center;
          justify-items: center;
        }

        .project-hero__title {
          font-family: var(--font-neue-montreal), "Helvetica Neue", sans-serif;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-size: 3.5rem;
          color: #ffffff;
          line-height: 0.95;
          margin: 0;
          font-feature-settings: "kern" off;
          font-kerning: none;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-hero__title--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .project-hero__subtitle {
          font-family: var(--font-neue-montreal), "Helvetica Neue", sans-serif;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          margin: 0;
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
        }

        .project-hero__subtitle--visible {
          opacity: 1;
        }

        .project-hero__footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-bottom: 20px;
        }

        .project-hero__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .project-hero__meta div {
          display: flex;
          gap: 0.375rem;
          align-items: baseline;
        }

        .project-hero__meta dt {
          font-size: 0.6875rem;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .project-hero__meta dd {
          font-size: 0.6875rem;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .project-hero__scroll-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          font-size: 1rem;
          transition: background-color 0.2s, border-color 0.2s;
          text-decoration: none;
          flex-shrink: 0;
        }

        .project-hero__scroll-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        @media (min-width: 768px) {
          .project-hero__content {
            padding-inline: 48px;
          }

          .project-hero__title {
            font-size: 4.5rem;
          }

          .project-hero__subtitle {
            font-size: 1rem;
          }

          .project-hero__footer-content {
            padding-bottom: 48px;
          }
        }
      `}</style>

      <section className="project-hero">
        <div className="project-hero__image-wrapper">
          <img
            src="/images/hero-main.jpg"
            alt="A vivid alpine sunset washing color across mountain peaks."
            loading="eager"
          />
        </div>
        <div className="project-hero__content">
          <div className="project-hero__header">
            <h1
              className={`project-hero__title${visible ? ' project-hero__title--visible' : ''}`}
            >
              Wild Horizons
            </h1>
            <p
              className={`project-hero__subtitle${visible ? ' project-hero__subtitle--visible' : ''}`}
            >
              Landscape Photography &amp; Quiet Architecture
            </p>
          </div>
          <div className="project-hero__footer-content">
            <dl className="project-hero__meta">
              <div>
                <dt>Series</dt>
                <dd>Wild Horizons, Vol. I</dd>
              </div>
              <div>
                <dt>Region</dt>
                <dd>Dolomites · Pacific · Iceland</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>2024 — 2026</dd>
              </div>
              <div>
                <dt>Imagery</dt>
                <dd>Adobe Stock</dd>
              </div>
            </dl>
            <a
              href="#overview"
              className="project-hero__scroll-btn"
              aria-label="Scroll to overview"
            >
              ↓
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
