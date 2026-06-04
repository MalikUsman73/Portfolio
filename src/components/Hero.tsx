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
            I Automate<br />
            Local Businesses<br />
            with <span className="highlight">AI</span>
          </h1>

          <p ref={subRef} className="hero__sub">
            Custom websites &amp; AI-powered receptionists — built for US local businesses that are ready to grow without growing their team.
          </p>

          <div ref={actionsRef} className="hero__actions">
            <a
              href={PERSONAL.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="hero-book-call"
            >
              Book a Free Call →
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

        {/* Right: Photo */}
        <div ref={photoRef} className="hero__photo-wrap">
          <div className="hero__photo-card">
            {/* Floating badge 1 */}
            <div className="hero__badge-float hero__badge-float--1">
              <div className="hero__badge-float-icon">🌐</div>
              <div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>Service</div>
                <div>Custom Websites</div>
              </div>
            </div>

            {/* Photo */}
            <img
              src="/profile.jpg"
              alt="Abdullah Tariq"
              className="hero__photo-img"
              onError={(e) => {
                // Fallback gradient avatar if image missing
                const el = e.currentTarget;
                el.style.display = 'none';
                const parent = el.parentElement!;
                const fallback = document.createElement('div');
                fallback.style.cssText = `
                  position:relative;z-index:1;width:100%;height:100%;border-radius:22px;
                  background:linear-gradient(135deg,#2563EB,#7C3AED);
                  display:flex;align-items:center;justify-content:center;
                  font-family:Sora,sans-serif;font-size:6rem;font-weight:800;color:white;
                  box-shadow:0 20px 60px rgba(0,0,0,0.14);
                `;
                fallback.textContent = 'AT';
                parent.appendChild(fallback);
              }}
            />

            {/* Floating badge 2 */}
            <div className="hero__badge-float hero__badge-float--2">
              <div className="hero__badge-float-icon">🤖</div>
              <div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>Service</div>
                <div>AI Receptionist</div>
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
