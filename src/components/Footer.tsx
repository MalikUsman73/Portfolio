import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { PERSONAL } from '../data/content';
import '../styles/Sections.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__name">
          Abdullah<span>.</span>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Abdullah Tariq · AI Automation Engineer
        </p>
        <div className="footer__socials">
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
