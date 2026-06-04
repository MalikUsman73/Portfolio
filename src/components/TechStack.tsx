import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TOOLS } from '../data/content';
import '../styles/Sections.css';
import '../styles/Marquee.css';

gsap.registerPlugin(ScrollTrigger);

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-outer">
      <div className={`marquee-track${reverse ? ' marquee-track--reverse' : ''}`}>
        {doubled.map((tool, i) => (
          <div key={`${tool}-${i}`} className="tool-chip">
            <span className="tool-chip-dot" style={reverse ? { background: 'var(--accent-2)' } : {}} />
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tools__header > *', {
        opacity: 0, y: 24, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.tools', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tools" className="section tools" ref={sectionRef}>
      <div className="container tools__header">
        <div className="section-label">Tech &amp; Tools</div>
        <h2 className="section-title">Powered by the<br />Best AI Stack</h2>
        <p className="section-subtitle">
          Every automation I build uses battle-tested tools to ensure reliability, speed, and results for your business.
        </p>
      </div>

      <div className="tools__marquee-wrap">
        <MarqueeRow items={TOOLS} />
        <div style={{ height: 20 }} />
        <MarqueeRow items={[...TOOLS].reverse()} reverse />
      </div>
    </section>
  );
}
