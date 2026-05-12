'use client';

import Image from 'next/image';

interface NextProjectCardProps {
  title: string;
  href: string;
  thumbnail: string;
  thumbnailAlt?: string;
}

export default function NextProjectCard({
  title,
  href,
  thumbnail,
  thumbnailAlt = '',
}: NextProjectCardProps) {
  const words = title.split(/\s+/);

  return (
    <div className="next-project-card">
      <style>{`
        .next-project-card {
          height: 100lvh;
          background-color: #35311f;
          display: flex;
          position: sticky;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1.25rem;
          z-index: -1;
        }

        .next-project-card__link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          color: #fff;
          text-decoration: none;
        }

        .next-project-card__heading {
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.01em;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        @media (min-width: 768px) {
          .next-project-card__heading {
            font-size: 1.5rem;
          }
        }

        .next-project-card__title-wrapper {
          text-align: center;
        }

        .next-project-card__title-line {
          font-family: var(--font-neue-montreal), "Helvetica Neue", sans-serif;
          font-weight: 400;
          font-size: 3rem;
          letter-spacing: -0.01em;
          line-height: 0.95;
          color: #fff;
          margin: 0;
        }

        @media (min-width: 768px) {
          .next-project-card__title-line {
            font-size: 4.5rem;
          }
        }

        @media (min-width: 1280px) {
          .next-project-card__title-line {
            font-size: 6rem;
          }
        }

        .next-project-card__thumbnail-wrapper {
          width: 8.75rem;
          height: 8.75rem;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .next-project-card__thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          transition: transform 0.4s ease;
        }

        .next-project-card__link:hover .next-project-card__thumbnail {
          transform: scale(1.05);
        }
      `}</style>

      <a href={href} className="next-project-card__link">
        <p className="next-project-card__heading">Next Project</p>
        <div className="next-project-card__title-wrapper">
          {words.map((word, i) => (
            <h2 key={i} className="next-project-card__title-line">
              {word}
            </h2>
          ))}
        </div>
        <div className="next-project-card__thumbnail-wrapper">
          <Image
            src={thumbnail}
            alt={thumbnailAlt}
            width={140}
            height={140}
            className="next-project-card__thumbnail"
          />
        </div>
      </a>
    </div>
  );
}
