import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../data/content';
import { PERSONAL } from '../data/content';
import '../styles/Sections.css';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP: Record<string, string> = {
  globe: '🌐',
  bot: '🤖',
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services .section-label, .services .section-title, .services .section-subtitle', {
        opacity: 0, y: 24, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.services', start: 'top 78%' },
      });
      gsap.from('.service-card', {
        opacity: 0, y: 40, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.services__grid', start: 'top 82%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="section services" ref={sectionRef}>
      <div className="container">
        <div className="section-label">What I Offer</div>
        <h2 className="section-title">Two Services.<br />Maximum Impact.</h2>
        <p className="section-subtitle">
          I focus on two things local businesses need most — a professional online presence and a receptionist that never sleeps.
        </p>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div key={s.id} className={`service-card service-card--${i}`}>
              <div className="service-card__icon">{ICON_MAP[s.icon] || '⚡'}</div>
              <div className="service-card__subtitle">{s.subtitle}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
              <ul className="service-card__features">
                {s.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a
                href={PERSONAL.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="service-card__btn"
                id={`service-cta-${s.id}`}
              >
                {s.cta} <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
