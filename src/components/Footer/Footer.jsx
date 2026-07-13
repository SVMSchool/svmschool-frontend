import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="site-footer" role="contentinfo">
      {/* Vivekananda quote strip */}
      <div className="footer-quote">
        <div className="container">
          <blockquote>
            "Arise, awake, and stop not till the goal is reached."
            <cite>— Swami Vivekananda</cite>
          </blockquote>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          {/* Column 1 — About */}
          <div className="footer-col footer-col--about">
            <div className="footer-brand">
              <div className="footer-logo-icon">
                <span>S</span>
              </div>
              <div>
                <h3 className="footer-school-name">Sri Vivekananda</h3>
                <p className="footer-school-type">Matric Hr Sec School, Anaicut</p>
              </div>
            </div>
            <p className="footer-about-text">
              Established in 2003, we nurture every student to think boldly, act with
              integrity, and grow into confident young leaders. Wisers are Born Here.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 — Academics */}
          <div className="footer-col">
            <h4 className="footer-heading">Academics</h4>
            <ul className="footer-links">
              <li><Link to="/academics">Pre-KG & Kindergarten</Link></li>
              <li><Link to="/academics">Primary School (1–5)</Link></li>
              <li><Link to="/academics">Middle School (6–8)</Link></li>
              <li><Link to="/academics">High School (9–10)</Link></li>
              <li><Link to="/academics">Hr Sec School (11–12)</Link></li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <address className="footer-contact">
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Anaicut, Vellore District,<br />Tamil Nadu, India</span>
              </div>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+91-XXXXX XXXXX</span>
              </div>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>info@svmschoolanaicut.com</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {currentYear} Sri Vivekananda Matric Hr Sec School, Anaicut. All rights reserved.</p>
          <p className="footer-bottom-motto">Wisers are Born Here</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
