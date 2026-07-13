import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/academics', label: 'Academics' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top info bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span className="top-bar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            +91-XXXXX XXXXX
          </span>
          <span className="top-bar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            info@svmschoolanaicut.com
          </span>
          <span className="top-bar-motto">"Wisers are Born Here"</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-navbar" role="navigation" aria-label="Main navigation">
        <div className="container navbar-inner">
          <Link to="/" className="navbar-brand" aria-label="SVM School Home">
            <div className="navbar-logo-icon">
              <img src={logo} alt="SVM School Logo" />
            </div>
            <div className="navbar-brand-text">
              <span className="navbar-school-name">Sri Vivekananda</span>
              <span className="navbar-school-sub">Matric Hr Sec School</span>
            </div>
          </Link>

          <ul className={`navbar-links ${isOpen ? 'navbar-links--open' : ''}`} id="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `navbar-link ${isActive ? 'navbar-link--active' : ''}`}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className={`navbar-toggle ${isOpen ? 'navbar-toggle--open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="nav-links"
            id="nav-toggle"
          >
            <span className="navbar-toggle-bar"></span>
            <span className="navbar-toggle-bar"></span>
            <span className="navbar-toggle-bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default NewNavbar;
