interface ImageItem {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Array<{ src: string; alt: string }>;
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [img0, img1, img2, img3, img4, img5, img6] = images;

  return (
    <>
      <style>{`
        .image-gallery {
          display: grid;
          gap: 0.75rem;
          padding-bottom: var(--padding-section--xl, 10rem);
          background-color: var(--color--bg, #f3efeb);
          position: relative;
          z-index: 1;
        }
        .gallery-block {
          display: flex;
          gap: 0.75rem;
        }
        .gallery-block--right {
          justify-content: flex-end;
        }
        .gallery-block-image {
          position: relative;
          overflow: hidden;
        }
        .gallery-block--full .gallery-block-image {
          width: 100%;
        }
        .gallery-block--half .gallery-block-image {
          width: 50%;
        }
        .gallery-block-image__inner {
          display: grid;
          overflow: hidden;
        }
        .gallery-block-image img {
          width: 100%;
          height: auto;
          transform: translateZ(0);
          display: block;
        }
      `}</style>
      <div className="image-gallery">
        {/* Image 0: full width */}
        {img0 && (
          <div className="gallery-block gallery-block--full">
            <div className="gallery-block-image">
              <div className="gallery-block-image__inner">
                <img src={img0.src} alt={img0.alt} />
              </div>
            </div>
          </div>
        )}

        {/* Image 1: full width */}
        {img1 && (
          <div className="gallery-block gallery-block--full">
            <div className="gallery-block-image">
              <div className="gallery-block-image__inner">
                <img src={img1.src} alt={img1.alt} />
              </div>
            </div>
          </div>
        )}

        {/* Images 2 & 3: side-by-side half blocks */}
        {(img2 || img3) && (
          <div className="gallery-block gallery-block--half">
            {img2 && (
              <div className="gallery-block-image">
                <div className="gallery-block-image__inner">
                  <img src={img2.src} alt={img2.alt} />
                </div>
              </div>
            )}
            {img3 && (
              <div className="gallery-block-image">
                <div className="gallery-block-image__inner">
                  <img src={img3.src} alt={img3.alt} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Image 4: full width */}
        {img4 && (
          <div className="gallery-block gallery-block--full">
            <div className="gallery-block-image">
              <div className="gallery-block-image__inner">
                <img src={img4.src} alt={img4.alt} />
              </div>
            </div>
          </div>
        )}

        {/* Image 5: right-aligned half block (only right half, left is empty) */}
        {img5 && (
          <div className="gallery-block gallery-block--half gallery-block--right">
            <div className="gallery-block-image">
              <div className="gallery-block-image__inner">
                <img src={img5.src} alt={img5.alt} />
              </div>
            </div>
          </div>
        )}

        {/* Image 6: full width */}
        {img6 && (
          <div className="gallery-block gallery-block--full">
            <div className="gallery-block-image">
              <div className="gallery-block-image__inner">
                <img src={img6.src} alt={img6.alt} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
