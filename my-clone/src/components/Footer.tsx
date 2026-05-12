import { MarvellLogo, InstagramIcon, FacebookIcon } from './icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <style>{`
        .site-footer {
          padding: 1.5rem;
          color: rgba(255, 255, 255, 0.6);
          display: grid;
          grid-template-areas: "logo logo" "content socials";
          gap: 1.5rem 0.75rem;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.01em;
          font-size: 0.75rem;
          background-color: #35311f;
        }

        @media (min-width: 480px) {
          .site-footer {
            font-size: 0.875rem;
            grid-template-areas: "logo content socials";
            grid-template-columns: auto 1fr auto;
          }
        }

        .site-footer__logo {
          grid-area: logo;
          color: #b1a781;
          display: flex;
          align-items: center;
          width: fit-content;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .site-footer__logo:hover {
          color: #fff;
        }

        .site-footer__content {
          grid-area: content;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .site-footer__links {
          display: flex;
          gap: 0.75rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .site-footer a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .site-footer a:hover {
          color: #fff;
        }

        .site-footer__socials {
          grid-area: socials;
          display: flex;
          gap: 0.75rem;
          align-items: center;
          justify-content: flex-end;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .site-footer__social-icon {
          width: 1.125rem;
          height: 1.125rem;
        }
      `}</style>

      <a href="/" className="site-footer__logo" aria-label="Marvell Tile & Stone">
        <MarvellLogo />
      </a>

      <div className="site-footer__content">
        <span>© 2025 Marvell Tile &amp; Stone</span>
        <ul className="site-footer__links">
          <li>
            <a href="/privacy-policy/">Privacy</a>
          </li>
          <li>
            <a href="/terms-and-conditions/">Terms &amp; Conditions</a>
          </li>
        </ul>
        <span>
          Website by{' '}
          <a href="https://www.humaan.com/">Humaan</a>
        </span>
      </div>

      <ul className="site-footer__socials">
        <li>
          <a
            href="https://www.instagram.com/marvelltileandstone/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="site-footer__social-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/marvelltileandstone/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="site-footer__social-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
