import PageHeader from '../../components/PageHeader/PageHeader';
import './EventsPage.css';

const upcomingEvents = [
  {
    date: 'Aug 15, 2026',
    title: 'Independence Day Celebrations',
    description: 'Flag hoisting ceremony, patriotic performances, and special assembly to honour our nation.',
  },
  {
    date: 'Sep 5, 2026',
    title: 'Teachers\' Day',
    description: 'A day to honour our dedicated teachers with student performances and heartfelt tributes.',
  },
  {
    date: 'Oct 2026',
    title: 'Annual Sports Day',
    description: 'A full day of athletic events, team sports, Karate demonstrations, and Yoga performances.',
  },
];

const achievements = [
  {
    year: '2025–26',
    title: 'State Board Exam Excellence',
    description: 'Outstanding results in Class 10 and Class 12 Tamil Nadu State Board examinations.',
  },
  {
    year: '2024–25',
    title: 'District-Level Sports Champions',
    description: 'Our students won multiple medals in district-level athletics and Karate competitions.',
  },
  {
    year: '2023–24',
    title: 'Cultural Festival Winners',
    description: 'Bharathanatyam and music teams secured top positions in inter-school cultural competitions.',
  },
];

function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events & Achievements"
        subtitle="Celebrating milestones and moments that make SVM School special"
        breadcrumb="Events"
      />

      {/* Upcoming Events */}
      <section className="section" id="upcoming-events">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Upcoming</span>
            <h2 className="section-title">Upcoming Events</h2>
            <hr className="divider divider-center" />
          </div>

          <div className="events-timeline">
            {upcomingEvents.map((event, index) => (
              <div className="events-timeline-item" key={index}>
                <div className="events-timeline-marker">
                  <div className="events-timeline-dot"></div>
                </div>
                <div className="events-timeline-content card">
                  <time className="events-date">{event.date}</time>
                  <h3 className="events-title">{event.title}</h3>
                  <p className="events-desc">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section events-achievements-section" id="achievements">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Milestones</span>
            <h2 className="section-title">Our Achievements</h2>
            <hr className="divider divider-center" />
          </div>

          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <div className="achievement-card card" key={index}>
                <span className="achievement-year">{item.year}</span>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsPage;
