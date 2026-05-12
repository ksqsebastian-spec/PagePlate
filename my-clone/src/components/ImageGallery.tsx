'use client';

import { useEffect, useRef } from 'react';

export default function ImageGallery() {
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const images = imgRefs.current;

    const handleScroll = () => {
      images.forEach((el) => {
        if (!el) return;
        const rect = el.closest('.block-image')!.getBoundingClientRect();
        const viewportH = window.innerHeight;
        const progress = 1 - (rect.top + rect.height) / (viewportH + rect.height);
        const offset = (progress - 0.5) * 60; // ±30px
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .image-gallery {
          display: grid;
          gap: 0.75rem;
          padding-bottom: 10rem;
          background-color: #35311f;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .image-gallery {
            padding-bottom: 16rem;
          }
        }

        .block {
          display: flex;
          gap: 0.75rem;
        }

        .block--full {
          display: flex;
        }

        .block-image {
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }

        .block-image__inner {
          width: 100%;
          height: 100%;
          will-change: transform;
        }

        .block-image img {
          width: 100%;
          height: auto;
          display: block;
          transform: translateZ(0);
          object-fit: cover;
        }

        .block:not(.block--full) .block-image img {
          height: 100%;
          object-fit: cover;
        }

        .block:not(.block--full) .block-image--left {
          aspect-ratio: 480 / 416;
        }

        .block:not(.block--full) .block-image--right {
          aspect-ratio: 240 / 416;
        }

        @media (max-width: 639px) {
          .block {
            flex-direction: column;
          }
          .block-image {
            width: 100% !important;
          }
        }
      `}</style>
      <div className="image-gallery">
        <div className="block">
          <div className="block-image block-image--left" style={{ width: '66.67%' }}>
            <div
              className="block-image__inner"
              ref={(el) => { imgRefs.current[0] = el; }}
            >
              <img src="/images/gallery-1.jpg" alt="Large glass window and detailed brick tiled ceiling." />
            </div>
          </div>
          <div className="block-image block-image--right" style={{ width: '33.33%' }}>
            <div
              className="block-image__inner"
              ref={(el) => { imgRefs.current[1] = el; }}
            >
              <img src="/images/gallery-2.jpg" alt="Luxurious, well-lit, curved, brick, tiled ceiling." />
            </div>
          </div>
        </div>

        <div className="block">
          <div className="block-image block-image--left" style={{ width: '66.67%' }}>
            <div
              className="block-image__inner"
              ref={(el) => { imgRefs.current[2] = el; }}
            >
              <img src="/images/gallery-3.jpg" alt="Precision brick, tiled ceiling framed by wooden cabinets." />
            </div>
          </div>
          <div className="block-image block-image--right" style={{ width: '33.33%' }}>
            <div
              className="block-image__inner"
              ref={(el) => { imgRefs.current[3] = el; }}
            >
              <img src="/images/gallery-4.jpg" alt="Luxurious brick tiling." />
            </div>
          </div>
        </div>

        <div className="block block--full">
          <div className="block-image" style={{ width: '100%' }}>
            <div
              className="block-image__inner"
              ref={(el) => { imgRefs.current[4] = el; }}
            >
              <img src="/images/gallery-5.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
