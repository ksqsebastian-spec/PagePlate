'use client';

import { useRef, useState, useEffect } from 'react';

interface ContentLockupProps {
  id?: string;
  label: string;
  body: string;
  bodySize?: 'large' | 'normal';
  anchorLabel?: string;
  anchorHref?: string;
  decoration?: string;
}

export default function ContentLockup({
  id,
  label,
  body,
  bodySize = 'large',
  anchorLabel,
  anchorHref,
  decoration,
}: ContentLockupProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: '-5% 0px' }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const revealBase: React.CSSProperties = {
    opacity: 0,
    transform: 'translateY(24px)',
  };

  const revealVisible: React.CSSProperties = {
    opacity: 1,
    transform: 'translateY(0)',
    transition:
      'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
  };

  const labelStyle: React.CSSProperties = {
    ...(visible ? revealVisible : revealBase),
  };

  const bodyStyle: React.CSSProperties = {
    ...(visible
      ? {
          ...revealVisible,
          transitionDelay: '200ms',
        }
      : { ...revealBase }),
  };

  return (
    <section ref={sectionRef} id={id} className="content-lockup">
      <style>{`
        .content-lockup {
          padding-block: 10rem;
          display: grid;
          gap: 1.25rem 3rem;
          align-content: start;
          color: rgba(255, 255, 255, 0.7);
          background-color: #35311f;
        }

        @media (min-width: 768px) {
          .content-lockup {
            padding-block: 16rem;
            grid-template-columns: 19.25rem 1fr;
          }
        }

        @media (min-width: 1280px) {
          .content-lockup {
            grid-template-columns: 27.375rem 1fr;
          }
        }

        .content-lockup__label {
          letter-spacing: -0.01em;
          font-size: 1rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.2;
          margin: 0;
        }

        @media (min-width: 768px) {
          .content-lockup__label {
            font-size: 1.5rem;
          }
        }

        .content-lockup__decoration {
          color: #9b926a;
          font-size: 0.875rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .content-lockup__body--large {
          font-size: 1.5rem;
          line-height: 1.4;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          white-space: pre-line;
        }

        @media (min-width: 1280px) {
          .content-lockup__body--large {
            font-size: 2rem;
          }
        }

        .content-lockup__body--normal {
          font-size: 1.125rem;
          line-height: 1.6;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          white-space: pre-line;
        }

        .content-lockup__anchor {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding-bottom: 0.25rem;
          text-decoration: none;
          margin-top: 1.5rem;
          transition: color 0.2s, border-color 0.2s;
        }

        .content-lockup__anchor:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.4);
        }

        .content-lockup__right {
          display: flex;
          flex-direction: column;
        }
      `}</style>

      <h2 className="content-lockup__label" style={labelStyle}>
        {label}
      </h2>

      <div className="content-lockup__right" style={bodyStyle}>
        {decoration && (
          <em className="content-lockup__decoration">{decoration}</em>
        )}
        <p className={`content-lockup__body--${bodySize}`}>{body}</p>
        {anchorLabel && anchorHref && (
          <a href={anchorHref} className="content-lockup__anchor">
            {anchorLabel}
          </a>
        )}
      </div>
    </section>
  );
}
