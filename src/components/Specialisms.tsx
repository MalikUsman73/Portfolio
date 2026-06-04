import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SPECIALISMS } from '../data/content';
import '../styles/Experience.css';

gsap.registerPlugin(ScrollTrigger);

export default function Specialisms() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.specialisms__header > *', {
        opacity: 0, y: 24, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.specialisms', start: 'top 78%' },
      });
      gsap.from('.specialism-card', {
        opacity: 0, y: 32, scale: 0.96, duration: 0.6, stagger: 0.1, ease: 'back.out(1.3)',
        scrollTrigger: { trigger: '.specialisms__grid', start: 'top 82%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="specialisms" className="section specialisms" ref={sectionRef}>
      <div className="container">
        <div className="specialisms__header">
          <div className="section-label" style={{ justifyContent: 'center' }}>What I Build</div>
          <h2 className="section-title">My Core Specialisms<br />in Agentic AI</h2>
          <p className="section-subtitle">
            From workflow automation to voice agents — I build AI systems that operate autonomously, at scale.
          </p>
        </div>

        <div className="specialisms__grid">
          {SPECIALISMS.map((s) => (
            <div key={s.title} className="specialism-card">
              <span className="specialism-card__icon">{s.icon}</span>
              <div className="specialism-card__title">{s.title}</div>
              <p className="specialism-card__desc">{s.desc}</p>
              <div className="specialism-card__glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
