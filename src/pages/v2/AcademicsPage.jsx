import PageHeader from '../../components/PageHeader/PageHeader';
import './AcademicsPage.css';

const grades = [
  {
    level: 'Pre-KG & Kindergarten',
    grades: 'Pre-KG, LKG, UKG',
    description: 'Play-based learning with phonics, basic numeracy, creative arts, and social skills development in a safe and joyful environment.',
  },
  {
    level: 'Primary School',
    grades: 'Classes 1 – 5',
    description: 'Strong foundation in languages (Tamil & English), Mathematics, Science, and Social Studies with activity-based teaching methods.',
  },
  {
    level: 'Middle School',
    grades: 'Classes 6 – 8',
    description: 'Expanded curriculum with hands-on learning in Science labs, computer education, and introduction to co-curricular activities.',
  },
  {
    level: 'High School',
    grades: 'Classes 9 – 10',
    description: 'Intensive board exam preparation with focused coaching, regular assessments, and comprehensive study materials for State Board success.',
  },
  {
    level: 'Higher Secondary',
    grades: 'Classes 11 – 12',
    description: 'Specialized streams with expert faculty, career guidance, and competitive exam preparation to shape future professionals.',
  },
];

function AcademicsPage() {
  return (
    <>
      <PageHeader
        title="Academics"
        subtitle="Tamil Nadu State Board (Matriculation) curriculum from Pre-KG to Class 12"
        breadcrumb="Academics"
      />

      {/* Curriculum Overview */}
      <section className="section" id="curriculum">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Curriculum</span>
            <h2 className="section-title">State Board Matriculation</h2>
            <hr className="divider divider-center" />
            <p className="section-subtitle">
              Our curriculum follows the Tamil Nadu State Board (Matriculation) pattern,
              emphasizing conceptual understanding, practical application, and holistic development.
            </p>
          </div>

          <div className="academics-grades">
            {grades.map((grade, index) => (
              <div className="academics-grade-card card" key={index}>
                <div className="academics-grade-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="academics-grade-content">
                  <h3 className="academics-grade-level">{grade.level}</h3>
                  <span className="academics-grade-range">{grade.grades}</span>
                  <p className="academics-grade-desc">{grade.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section academics-methodology-section" id="methodology">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">Teaching Methodology</h2>
            <hr className="divider divider-center" />
          </div>

          <div className="academics-methods-grid">
            <div className="academics-method-card">
              <h4>Conceptual Learning</h4>
              <p>Focus on understanding core concepts rather than rote memorization, building strong analytical skills.</p>
            </div>
            <div className="academics-method-card">
              <h4>Activity-Based Teaching</h4>
              <p>Hands-on experiments, projects, and interactive sessions that make learning engaging and memorable.</p>
            </div>
            <div className="academics-method-card">
              <h4>Regular Assessment</h4>
              <p>Continuous evaluation through tests, assignments, and periodic exams to track student progress.</p>
            </div>
            <div className="academics-method-card">
              <h4>Individual Attention</h4>
              <p>Small class sizes and dedicated teachers ensuring personalized guidance for every student.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="section" id="co-curricular">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Beyond Academics</span>
            <h2 className="section-title">Co-Curricular Activities</h2>
            <hr className="divider divider-center" />
            <p className="section-subtitle">
              Inspired by Swami Vivekananda's belief in complete education — we develop mind, body, and spirit.
            </p>
          </div>

          <div className="academics-cocurricular-grid">
            {['Sports & Athletics', 'Yoga & Meditation', 'Bharathanatyam', 'Karate', 'Art & Craft', 'Music'].map((activity, index) => (
              <div className="academics-activity-card" key={index}>
                <span className="academics-activity-name">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AcademicsPage;
