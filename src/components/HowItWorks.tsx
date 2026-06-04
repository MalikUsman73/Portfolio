import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HOW_IT_WORKS } from '../data/content';
import '../styles/Sections.css';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.how .section-label, .how .section-title, .how .section-subtitle', {
        opacity: 0, y: 24, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.how', start: 'top 78%' },
      });
      gsap.from('.step-card', {
        opacity: 0, y: 40, duration: 0.65, stagger: 0.18, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: '.how__steps', start: 'top 82%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how" className="section how" ref={sectionRef}>
      <div className="container">
        <div className="section-label">The Process</div>
        <h2 className="section-title">Simple. Fast.<br />Done For You.</h2>
        <p className="section-subtitle">
          From the first call to going live — here's exactly how we work together.
        </p>

        <div className="how__steps">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={step.step} className="step-card">
              <div className="step-circle">{i + 1}</div>
              <div className="step-number">STEP {step.step}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
