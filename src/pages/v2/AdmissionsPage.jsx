import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import './AdmissionsPage.css';

const steps = [
  {
    step: '01',
    title: 'Enquiry',
    description: 'Visit our school or fill out the online enquiry form to get information about the admission process, fee structure, and available seats.',
  },
  {
    step: '02',
    title: 'Application',
    description: 'Collect and submit the application form along with the required documents at the school office during office hours.',
  },
  {
    step: '03',
    title: 'Interaction',
    description: 'A brief interaction with the student and parents to understand learning needs and to introduce the school environment.',
  },
  {
    step: '04',
    title: 'Admission Confirmation',
    description: 'Upon selection, complete the admission formalities including fee payment and document submission to secure the seat.',
  },
];

function AdmissionsPage() {
  return (
    <>
      <PageHeader
        title="Admissions"
        subtitle="Join the SVM School family — Admissions open for the 2026–2027 academic year"
        breadcrumb="Admissions"
      />

      {/* Admission Process */}
      <section className="section" id="admission-process">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How to Apply</span>
            <h2 className="section-title">Admission Process</h2>
            <hr className="divider divider-center" />
            <p className="section-subtitle">
              Our admission process is simple and parent-friendly. Follow these
              steps to enrol your child at Sri Vivekananda Matric Hr Sec School.
            </p>
          </div>

          <div className="admission-steps">
            {steps.map((item, index) => (
              <div className="admission-step" key={index}>
                <div className="admission-step-number">{item.step}</div>
                <div className="admission-step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section admissions-eligibility-section" id="eligibility">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Requirements</span>
            <h2 className="section-title">Eligibility & Documents</h2>
            <hr className="divider divider-center" />
          </div>

          <div className="eligibility-grid">
            <div className="eligibility-card card">
              <h3>Age Criteria</h3>
              <ul className="eligibility-list">
                <li>Pre-KG: 2.5 years and above</li>
                <li>LKG: 3.5 years and above</li>
                <li>UKG: 4.5 years and above</li>
                <li>Class 1: 5.5 years and above</li>
                <li>Other classes: As per TN State Board norms</li>
              </ul>
            </div>

            <div className="eligibility-card card">
              <h3>Documents Required</h3>
              <ul className="eligibility-list">
                <li>Birth Certificate (original & copy)</li>
                <li>Transfer Certificate (for Classes 2 and above)</li>
                <li>Progress Report / Mark Sheet</li>
                <li>Aadhaar Card of student & parent</li>
                <li>4 Passport-size photographs</li>
                <li>Community Certificate (if applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section admissions-cta-section" id="admission-cta">
        <div className="container admissions-cta-content">
          <h2>Ready to Join Our School Family?</h2>
          <p>
            Give your child the gift of quality education rooted in values.
            Visit our campus or contact us to begin the admission process.
          </p>
          <div className="admissions-cta-buttons">
            <Link to="/contact" className="btn btn-gold">Contact Us</Link>
            <a href="tel:+91XXXXXXXXXX" className="btn btn-secondary admissions-cta-call">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdmissionsPage;
