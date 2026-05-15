interface ContentLockupProps {
  id?: string;
  label: string;
  body: string;
  secondaryContent?: string;
  anchorLabel?: string;
  anchorHref?: string;
  className?: string;
}

export default function ContentLockup({
  id,
  label,
  body,
  secondaryContent,
  anchorLabel,
  anchorHref,
  className,
}: ContentLockupProps) {
  const secondaryParagraphs = secondaryContent
    ? secondaryContent.split('\n\n').filter(Boolean)
    : [];

  return (
    <>
      <style>{`
        .content-lockup {
          padding-block: var(--padding-section--xl, 10rem);
          padding-inline: var(--container-aside, var(--container-gutter, 20px));
          display: grid;
          color: var(--color--text, rgba(0,0,0,0.6));
          gap: var(--gap-container--md, 1.25rem) var(--gap-section--md, 3rem);
          align-content: center;
        }
        @media (min-width: 992px) {
          .content-lockup {
            --small-col-width: 19.25rem;
            grid-template-columns: var(--small-col-width) 1fr;
            align-items: flex-start;
          }
        }
        @media (min-width: 1400px) {
          .content-lockup {
            --small-col-width: 27.375rem;
          }
        }

        .content-lockup__title {
          letter-spacing: -0.01em;
          font-size: 1rem;
          font-weight: 400;
          color: var(--color--text-subtle, rgba(0,0,0,0.4));
          line-height: 1.2;
          margin: 0;
        }
        @media (min-width: 992px) {
          .content-lockup__title {
            font-size: 1.25rem;
          }
        }

        .content-lockup__content {
          display: flex;
          flex-direction: column;
          gap: var(--gap-section--lg, 5rem);
        }

        .content-lockup__body {
          font-weight: 400;
          letter-spacing: -0.01em;
          font-size: 2.25rem;
          line-height: 1.3;
          margin: 0;
          color: var(--color--text, rgba(0,0,0,0.6));
        }
        @media (min-width: 992px) {
          .content-lockup__body {
            font-size: 3rem;
          }
        }
        @media (min-width: 1920px) {
          .content-lockup__body {
            font-size: 3.5rem;
          }
        }

        .content-lockup__secondary {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        @media (min-width: 992px) {
          .content-lockup__secondary {
            grid-column: 2;
            grid-row: 2;
            flex-direction: column;
          }
        }

        .content-lockup__secondary-content {
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.01em;
          font-size: 1.5rem;
          color: var(--color--text, rgba(0,0,0,0.6));
          margin-top: -0.25em;
          white-space: pre-wrap;
        }
        @media (min-width: 992px) {
          .content-lockup__secondary-content {
            font-size: 1.75rem;
          }
        }
        @media (min-width: 1920px) {
          .content-lockup__secondary-content {
            font-size: 2rem;
          }
        }
        .content-lockup__secondary-content p {
          margin: 0;
        }

        .content-lockup__anchor-button {
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.01em;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0;
          color: var(--color--text, rgba(0,0,0,0.6));
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin: 0;
          text-decoration: none;
        }
        @media (min-width: 992px) {
          .content-lockup__anchor-button {
            font-size: 1.25rem;
          }
        }
      `}</style>
      <div id={id} className={`content-lockup${className ? ` ${className}` : ''}`}>
        <h2 className="content-lockup__title">{label}</h2>

        <div className="content-lockup__content">
          <p className="content-lockup__body">{body}</p>
        </div>

        {(secondaryParagraphs.length > 0 || anchorLabel) && (
          <div className="content-lockup__secondary">
            <div className="content-lockup__secondary-content">
              {secondaryParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {anchorLabel && (
                <p>
                  <span hidden>–––</span>{' '}
                  {anchorHref ? (
                    <a href={anchorHref} className="content-lockup__anchor-button">
                      {anchorLabel}
                    </a>
                  ) : (
                    <button className="content-lockup__anchor-button">{anchorLabel}</button>
                  )}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
