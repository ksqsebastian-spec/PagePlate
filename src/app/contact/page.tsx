import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';

export const metadata = {
  title: 'Contact — Portfolio',
  description: 'Get in touch to discuss commissions, exhibitions, or licensing.',
};

export default function ContactPage() {
  return (
    <LenisProvider>
      <NavBar />
      <main style={{ backgroundColor: '#35311f', minHeight: '100svh' }}>
        <style>{`
          .contact-page {
            max-width: 900px;
            margin: 0 auto;
            padding: 12rem 20px 8rem;
          }
          .contact-page__eyebrow {
            font-size: 0.75rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.4);
            margin: 0 0 2rem;
          }
          .contact-page__title {
            font-size: clamp(2.5rem, 6vw, 5rem);
            font-weight: 400;
            color: #fff;
            letter-spacing: -0.03em;
            line-height: 0.92;
            margin: 0 0 3rem;
          }
          .contact-page__divider {
            height: 1px;
            background: rgba(255,255,255,0.12);
            margin: 0 0 3rem;
            border: none;
          }
          .contact-page__intro {
            font-size: clamp(1rem, 2vw, 1.375rem);
            line-height: 1.6;
            color: rgba(255,255,255,0.6);
            margin: 0 0 4rem;
          }
          .contact-page__links {
            display: grid;
            gap: 0;
          }
          .contact-page__link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            text-decoration: none;
            transition: padding-left 0.2s ease;
          }
          .contact-page__link:first-child {
            border-top: 1px solid rgba(255,255,255,0.1);
          }
          .contact-page__link:hover { padding-left: 0.75rem; }
          .contact-page__link-label {
            font-size: 0.6875rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.4);
            margin: 0 0 0.25rem;
          }
          .contact-page__link-value {
            font-size: 1.25rem;
            color: #fff;
            margin: 0;
            letter-spacing: -0.01em;
          }
          .contact-page__link-arrow {
            font-size: 1.25rem;
            color: rgba(255,255,255,0.4);
            transition: color 0.2s, transform 0.2s;
          }
          .contact-page__link:hover .contact-page__link-arrow {
            color: #fff;
            transform: translateX(4px);
          }
          @media (max-width: 600px) {
            .contact-page { padding-top: 8rem; }
          }
        `}</style>

        <div className="contact-page">
          <p className="contact-page__eyebrow">Contact</p>
          <h1 className="contact-page__title">Let's talk<br />about light.</h1>
          <hr className="contact-page__divider" />

          <p className="contact-page__intro">
            Available for commissions, exhibitions, editorial licensing, and
            architectural photography collaborations. Response within two working days.
          </p>

          <div className="contact-page__links">
            <a href="mailto:hello@wildhorizons.studio" className="contact-page__link">
              <div>
                <p className="contact-page__link-label">Email</p>
                <p className="contact-page__link-value">hello@wildhorizons.studio</p>
              </div>
              <span className="contact-page__link-arrow">→</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-page__link">
              <div>
                <p className="contact-page__link-label">Instagram</p>
                <p className="contact-page__link-value">@wildhorizons</p>
              </div>
              <span className="contact-page__link-arrow">→</span>
            </a>
            <div className="contact-page__link" style={{ cursor: 'default' }}>
              <div>
                <p className="contact-page__link-label">Studio</p>
                <p className="contact-page__link-value">Bolzano, Italy / Portland, Oregon</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </LenisProvider>
  );
}
