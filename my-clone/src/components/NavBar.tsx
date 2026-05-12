'use client';

import { useRef, useState, useEffect, CSSProperties } from 'react';
import { MarvellLogo, ChevronDownIcon } from '../components/icons';

const NAV_ITEMS = [
  {
    label: 'Projects',
    children: [
      { label: 'Ainslie Street', href: '/projects/ainslie-street/' },
      { label: 'Beach Street', href: '/projects/beach-street/' },
      { label: 'Duncraig Road', href: '/projects/duncraig-road/' },
      { label: 'Eco Outdoor', href: '/projects/eco-outdoor/' },
      { label: 'Excelsior Street', href: '/projects/excelsior-street/' },
      { label: 'Forrest Street', href: '/projects/forrest-street/' },
      { label: 'Hubble Street', href: '/projects/hubble-street/' },
      { label: 'Sewell Street', href: '/projects/sewell-street/' },
      { label: 'St. Leonards Ave', href: '/projects/st-leonards-ave/' },
      { label: 'Vivaldi Avenue', href: '/projects/vivaldi-drive/' },
    ],
  },
  { label: 'Profile', href: '/profile/' },
  { label: 'Contact', href: '/contact/' },
] as const;

const ACTIVE_HREF = '/projects/duncraig-road/';

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null);
  const submenuLiRef = useRef<HTMLLIElement>(null);
  const [open, setOpen] = useState(false);

  // Scroll-driven hide/show
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    nav.style.transition = 'transform 0.3s ease';
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 80) {
        nav.style.setProperty('--y', '-80px');
      } else {
        nav.style.setProperty('--y', '0px');
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close submenu on outside click
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (submenuLiRef.current && !submenuLiRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  // Close submenu on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          transform: translate(-50%, var(--y, 0px));
          z-index: 100;
          padding: 0.25rem;
          border-radius: 8px;
        }
        .nav-root::before {
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          content: "";
        }
        .nav-ul {
          display: grid;
          grid-auto-flow: column;
          gap: 0.25rem;
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .nav-logo {
          color: #b1a781;
          padding: 0.5rem;
          box-sizing: content-box;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.3s ease-in-out;
          border-radius: 6px;
          text-decoration: none;
        }
        .nav-logo:hover {
          color: #c8bc9a;
        }
        .nav-logo svg {
          width: 1.125rem;
          height: 1rem;
        }
        .nav-link,
        .nav-btn {
          font-family: inherit;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          cursor: pointer;
          background: none;
          border: none;
          text-rendering: geometricPrecision;
          gap: 0.375rem;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .nav-link:hover,
        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.08);
        }
        .nav-submenu-li {
          position: relative;
        }
        .nav-submenu {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 0;
          background: rgba(20, 18, 10, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 8px;
          padding: 0.5rem;
          min-width: 180px;
          z-index: 200;
          height: 0;
          overflow: hidden;
          visibility: hidden;
          transform: translateY(-12px);
          opacity: 0;
          transition: transform 0.2s ease, opacity 0.2s ease, visibility 0.2s;
          list-style: none;
          margin: 0;
        }
        .nav-submenu.nav-submenu--open {
          height: auto;
          overflow: visible;
          visibility: visible;
          transform: translateY(0);
          opacity: 1;
        }
        .nav-submenu-link {
          display: block;
          padding: 0.5rem 0.75rem;
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.6);
          border-radius: 4px;
          white-space: nowrap;
          text-decoration: none;
          transition: background-color 0.2s, color 0.2s;
        }
        .nav-submenu-link:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }
        .nav-submenu-link--active {
          color: #ffffff;
        }
      `}</style>

      <nav
        ref={navRef}
        className="nav-root"
        style={{ '--y': '0px' } as CSSProperties}
      >
        <ul className="nav-ul">
          {/* Logo */}
          <li>
            <a href="/" className="nav-logo">
              <MarvellLogo />
            </a>
          </li>

          {/* Projects with submenu */}
          <li ref={submenuLiRef} className="nav-submenu-li">
            <button
              type="button"
              className="nav-btn"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
            >
              {NAV_ITEMS[0].label}
              <ChevronDownIcon
                style={{
                  transition: 'transform 0.2s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
            <ul className={`nav-submenu${open ? ' nav-submenu--open' : ''}`}>
              {NAV_ITEMS[0].children.map((child) => (
                <li key={child.href}>
                  <a
                    href={child.href}
                    className={`nav-submenu-link${child.href === ACTIVE_HREF ? ' nav-submenu-link--active' : ''}`}
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* Profile */}
          <li>
            <a href={NAV_ITEMS[1].href} className="nav-link">
              {NAV_ITEMS[1].label}
            </a>
          </li>

          {/* Contact */}
          <li>
            <a href={NAV_ITEMS[2].href} className="nav-link">
              {NAV_ITEMS[2].label}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
