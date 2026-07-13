import PageHeader from '../../components/PageHeader/PageHeader';
import './AboutPage.css';

function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Rooted in Swami Vivekananda's vision of holistic education since 2003"
        breadcrumb="About"
      />

      {/* Vision & Mission */}
      <section className="section about-vm-section" id="vision-mission">
        <div className="container">
          <div className="about-vm-grid">
            <div className="about-vm-card">
              <div className="about-vm-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </div>
              <h2 className="about-vm-title">Our Vision</h2>
              <hr className="divider" />
              <p>
                To be a centre of excellence in education that shapes young minds into
                responsible citizens, inspired by Swami Vivekananda's ideals of courage,
                self-reliance, and service to humanity.
              </p>
            </div>
            <div className="about-vm-card">
              <div className="about-vm-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h2 className="about-vm-title">Our Mission</h2>
              <hr className="divider" />
              <p>
                To provide quality education in a nurturing environment that promotes
                academic excellence, physical fitness, cultural enrichment, and moral values —
                creating confident leaders for tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="section about-history-section" id="history">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Established in 2003</h2>
            <hr className="divider divider-center" />
          </div>
          <div className="about-history-content">
            <div className="about-history-text">
              <p>
                Sri Vivekananda Matric Hr Sec School was founded in 2003 in Anaicut,
                Vellore District, Tamil Nadu, with a dream of providing quality education
                accessible to the local community. Named after the great Swami Vivekananda,
                our school embodies his philosophy: <em>"Education is the manifestation of
                the perfection already in man."</em>
              </p>
              <p>
                Over the past 20+ years, we have grown from a small institution to a
                thriving school community of 2000+ students and 150+ dedicated staff members.
                Our students consistently excel in Tamil Nadu State Board examinations and
                go on to pursue higher education in top colleges across Tamil Nadu and beyond.
              </p>
              <p>
                We offer education from Pre-KG through Class 12 (Higher Secondary),
                following the Tamil Nadu State Board (Matriculation) curriculum. Beyond
                academics, our students participate in Sports, Yoga, Bharathanatyam, Karate,
                and various cultural programs that develop them into well-rounded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section about-principal-section" id="principal-message">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Principal's Message</h2>
            <hr className="divider divider-center" />
          </div>
          <div className="about-principal-card card">
            <div className="about-principal-avatar">
              <span>P</span>
            </div>
            <div className="about-principal-content">
              <blockquote>
                "At Sri Vivekananda Matric Hr Sec School, we believe that every child is
                unique and full of potential. Our role as educators is to create an
                environment where students discover their strengths, build character, and
                develop the confidence to face the future. True to our motto — 'Wisers are
                Born Here' — we strive to nurture wisdom, discipline, and compassion in
                every student who walks through our doors."
              </blockquote>
              <p className="about-principal-name">The Principal</p>
              <p className="about-principal-title">Sri Vivekananda Matric Hr Sec School, Anaicut</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
