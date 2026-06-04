import { useEffect, useRef, useState } from 'react';
import { PERSONAL } from '../data/content';
import '../styles/Navbar.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#specialisms', label: 'Specialisms' },
  { href: '#services', label: 'Services' },
  { href: '#tools', label: 'Tools' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section tracking
      const sections = ['about', 'experience', 'specialisms', 'services', 'how', 'tools', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(`#${id}`);
          return;
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on click outside
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className={`navbar${scrolled ? ' scrolled' : ''}${mobileOpen ? ' mobile-open' : ''}`}
    >
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="navbar__logo-badge">AT</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-first">Abdullah</span>
            <span className="navbar__logo-last"> Tariq</span>
          </span>
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? 'active' : ''}
                onClick={(e) => handleNavClick(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={PERSONAL.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary navbar__cta"
          style={{ padding: '10px 22px', fontSize: '14px' }}
        >
          Book a Call
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
