import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiExternalLink } from 'react-icons/fi';
import { EXPERIENCE } from '../data/content';
import '../styles/Experience.css';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.experience .section-label, .experience .section-title, .experience .section-subtitle', {
        opacity: 0, y: 24, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.experience', start: 'top 78%' },
      });
      gsap.from('.experience__card', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.experience__card', start: 'top 82%' },
      });
      gsap.from('.experience__highlight', {
        opacity: 0, x: -16, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.experience__highlights', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className="container">
        <div className="section-label">Work Experience</div>
        <h2 className="section-title">Where I Currently<br />Build With AI</h2>
        <p className="section-subtitle">
          Working at the intersection of automation and intelligence — engineering systems that think, act, and execute.
        </p>

        {EXPERIENCE.map((exp) => (
          <div key={exp.company} className="experience__card">
            <div className="experience__header">
              <div className="experience__company">
                <div className="experience__logo">🧠</div>
                <div className="experience__company-info">
                  <div className="experience__company-name">
                    <a href={exp.url} target="_blank" rel="noopener noreferrer">
                      {exp.company} <FiExternalLink size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 4 }} />
                    </a>
                  </div>
                  <div className="experience__company-type">{exp.type}</div>
                </div>
              </div>
              <div className="experience__badge">
                <span className="experience__badge-dot" />
                Currently Working
              </div>
            </div>

            <div className="experience__role">{exp.role}</div>
            <div className="experience__period">📅 {exp.period}</div>
            <p className="experience__desc">{exp.description}</p>

            <div className="experience__highlights">
              {exp.highlights.map((h, i) => (
                <div key={i} className="experience__highlight">{h}</div>
              ))}
            </div>

            <div className="experience__tech">
              {exp.tech.map((t) => (
                <span key={t} className="experience__tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
