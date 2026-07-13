import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section" id="hero" aria-label="Welcome to SVM School">
      {/* Decorative background elements */}
      <div className="hero-bg-pattern" aria-hidden="true"></div>
      <div className="hero-bg-circle hero-bg-circle--1" aria-hidden="true"></div>
      <div className="hero-bg-circle hero-bg-circle--2" aria-hidden="true"></div>

      <div className="container hero-content-wrapper">
        <div className="hero-text-content">
          <span className="hero-badge">
            <span className="hero-badge-dot"></span>
            Est. 2003 &middot; Anaicut, Tamil Nadu
          </span>

          <h1 className="hero-title">
            Sri Vivekananda
            <span className="hero-title-accent"> Matric Hr Sec </span>
            School
          </h1>

          <p className="hero-motto">"Wisers are Born Here"</p>

          <p className="hero-description">
            Nurturing every student to think boldly, act with integrity,
            and grow into confident young leaders — from their first day
            in class to the day they graduate.
          </p>

          <div className="hero-cta-group">
            <a href="/admissions" className="btn btn-gold hero-cta">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Apply for Admission
            </a>
            <a href="/about" className="btn btn-secondary hero-cta hero-cta--outline">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-card">
            <div className="hero-visual-inner">
              {/* Vivekananda silhouette / school image placeholder */}
              <div className="hero-image-placeholder">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-mandala" aria-hidden="true">
                  <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
                  <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
                  <text x="100" y="90" textAnchor="middle" fill="currentColor" fontSize="14" fontFamily="var(--font-heading)" opacity="0.6">ॐ</text>
                  <text x="100" y="115" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="var(--font-body)" opacity="0.5">Arise, Awake</text>
                </svg>
              </div>
              <div className="hero-visual-label">
                <span className="hero-visual-years">20+</span>
                <span>Years of<br />Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
