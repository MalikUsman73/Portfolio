import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT } from '../data/content';
import '../styles/Sections.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about__text > *', {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.about__text', start: 'top 80%' },
      });
      gsap.from('.stat-card', {
        opacity: 0, y: 24, scale: 0.95, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.about__stats', start: 'top 82%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container about__inner">
        {/* Left: Text */}
        <div className="about__text">
          <div className="section-label">About Me</div>
          <h2 className="section-title">{ABOUT.headline}</h2>
          {ABOUT.bio.split('\n\n').map((para, i) => (
            <p key={i} className="section-subtitle" style={{ marginBottom: '16px', maxWidth: '100%' }}>{para}</p>
          ))}
        </div>

        {/* Right: Stats */}
        <div className="about__stats">
          {ABOUT.stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
