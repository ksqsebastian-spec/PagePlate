interface NextProjectCardProps {
  title: string;
  href: string;
  thumbnail: string;
  thumbnailAlt?: string;
  theme?: 'dark' | 'light';
}

export default function NextProjectCard({
  title,
  href,
  thumbnail,
  thumbnailAlt = '',
  theme = 'dark',
}: NextProjectCardProps) {
  // Split title into words for the thumbnail-between-words layout
  const words = title.trim().split(/\s+/);
  const firstWord = words[0] ?? '';
  const remainingWords = words.slice(1).join(' ');

  // 'light' theme = visually light (cream bg, dark text)
  // 'dark' theme = visually dark (dark brown bg, light text)
  const themeVars =
    theme === 'light'
      ? {
          '--color--bg': '#f3efeb',
          '--color--bg-strong': '#ffffff',
          '--color--text-strong': '#35311f',
          '--color--text': 'rgba(0,0,0,0.6)',
          '--color--text-subtle': 'rgba(0,0,0,0.4)',
        }
      : {
          '--color--bg': '#35311f',
          '--color--bg-strong': '#19170e',
          '--color--text-strong': '#ffffff',
          '--color--text': 'rgba(255,255,255,0.7)',
          '--color--text-subtle': 'rgba(255,255,255,0.6)',
        };

  return (
    <>
      <style>{`
        .project-card {
          height: var(--100lvh, 100lvh);
          background-color: var(--color--bg, #35311f);
          display: flex;
          position: sticky;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: var(--gap-container--md, 1.25rem);
          z-index: -1;
        }

        .project-card__heading {
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.01em;
          font-size: 1rem;
          color: var(--color--text-subtle, rgba(255,255,255,0.6));
          margin: 0;
        }
        @media (min-width: 992px) {
          .project-card__heading {
            font-size: 1.25rem;
          }
        }

        .project-card__link {
          font-family: var(--font-neue-montreal);
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 0.95;
          font-size: 3.5rem;
          color: var(--color--text-strong, #ffffff);
          text-decoration: none;
        }
        @media (min-width: 480px) {
          .project-card__link {
            font-size: 4.5rem;
          }
        }
        @media (min-width: 992px) {
          .project-card__link {
            font-size: 8rem;
          }
        }

        .project-card__title-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0 0.4em;
          line-height: 0.95;
        }

        .project-card__thumbnail {
          height: 1em;
          width: 1em;
          object-fit: cover;
          border-radius: 0.5rem;
        }
        @media (min-width: 480px) {
          .project-card__thumbnail {
            height: 0.75em;
            width: 0.75em;
          }
        }
      `}</style>
      <div className="project-card" style={themeVars as React.CSSProperties}>
        <p className="project-card__heading">Next Project</p>
        <a href={href} className="project-card__link">
          <span className="project-card__title-wrapper">
            <span>{firstWord}</span>
            <img
              className="project-card__thumbnail"
              src={thumbnail}
              alt={thumbnailAlt}
            />
            {remainingWords && <span>{remainingWords}</span>}
          </span>
        </a>
      </div>
    </>
  );
}
