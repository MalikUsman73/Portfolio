import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PERSONAL } from '../data/content';
import ParticleBackground from './ParticleBackground';
import '../styles/Hero.css';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial state, then animate in
    gsap.set([headlineRef.current, subRef.current, actionsRef.current, photoRef.current], { opacity: 1 });
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
      .fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .fromTo(actionsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .fromTo(photoRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');
  }, []);

  return (
    <section className="hero" id="hero">
      <ParticleBackground />

      <div className="container hero__inner">
        {/* Left: Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            AI Automation Engineer
          </div>

          <h1 ref={headlineRef} className="hero__headline">
            Production AI<br />
            Systems That<br />
            <span className="highlight">Replace Manual Work</span>
          </h1>

          <p ref={subRef} className="hero__sub">
            n8n automation pipelines, voice AI agents, and full-stack platforms — built for real clients, running in production.
          </p>

          <div ref={actionsRef} className="hero__actions">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="btn btn-primary"
              id="hero-get-in-touch"
            >
              Get in Touch →
            </a>
            <a
              href="#services"
              className="btn btn-outline"
              onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
              id="hero-see-services"
            >
              See Services
            </a>
          </div>
        </div>

        {/* Right: Avatar card */}
        <div ref={photoRef} className="hero__photo-wrap">
          <div className="hero__photo-card">
            {/* Floating badge 1 */}
            <div className="hero__badge-float hero__badge-float--1">
              <div className="hero__badge-float-icon">⚙️</div>
              <div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>Stack</div>
                <div>n8n · Claude API</div>
              </div>
            </div>

            {/* Initials avatar */}
            <div
              className="hero__photo-img"
              style={{
                background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Sora, sans-serif',
                fontSize: '6rem',
                fontWeight: 800,
                color: 'white',
                borderRadius: '22px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              MU
            </div>

            {/* Floating badge 2 */}
            <div className="hero__badge-float hero__badge-float--2">
              <div className="hero__badge-float-icon">🎙️</div>
              <div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>500+</div>
                <div>Calls / Month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="8" cy="8" r="2" fill="currentColor">
            <animate attributeName="cy" values="8;14;8" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
        Scroll
      </div>
    </section>
  );
}
