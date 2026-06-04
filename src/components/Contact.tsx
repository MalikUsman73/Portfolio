import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiPhone, FiLinkedin, FiCalendar } from 'react-icons/fi';
import { PERSONAL } from '../data/content';
import '../styles/Sections.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact > .container > *', {
        opacity: 0, y: 32, duration: 0.75, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact', start: 'top 78%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title" style={{ color: 'white' }}>
          Ready to Automate<br />Your Business?
        </h2>
        <p className="contact__sub">
          Book a free 30-minute discovery call. We'll talk about your business, your goals, and whether a custom website or AI receptionist makes sense for you — zero pressure.
        </p>

        <a
          href={PERSONAL.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__cta-btn"
          id="contact-book-call"
        >
          <FiCalendar size={20} />
          Book a Free 30-Min Call
        </a>

        <div className="contact__links">
          <a href={`mailto:${PERSONAL.email}`} className="contact__link" id="contact-email">
            <FiMail className="contact__link-icon" />
            {PERSONAL.email}
          </a>
          <span className="contact__divider">·</span>
          <a href={`tel:${PERSONAL.phone}`} className="contact__link" id="contact-phone">
            <FiPhone className="contact__link-icon" />
            {PERSONAL.phone}
          </a>
          <span className="contact__divider">·</span>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
            id="contact-linkedin"
          >
            <FiLinkedin className="contact__link-icon" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
