import { Link } from 'react-router-dom';
import './LatestNews.css';

const news = [
  {
    date: 'July 2026',
    category: 'Admissions',
    title: 'Admissions Open for 2026–2027 Academic Year',
    excerpt: 'Applications are now being accepted for Pre-KG through Class 11. Limited seats available — apply early.',
  },
  {
    date: 'June 2026',
    category: 'Achievement',
    title: 'Board Exam Results — Our Students Excel Again',
    excerpt: 'Our Class 10 and Class 12 students have achieved outstanding results in the Tamil Nadu State Board examinations.',
  },
  {
    date: 'May 2026',
    category: 'Events',
    title: 'Annual Day Celebrations 2026',
    excerpt: 'A grand celebration of talent showcasing Bharathanatyam, music, drama, and sports achievements of our students.',
  },
];

function LatestNews() {
  return (
    <section className="news-section section" id="latest-news" aria-label="Latest news and announcements">
      <div className="container">
        <div className="section-header">
          <span className="section-label">News & Announcements</span>
          <h2 className="section-title">Stay Updated</h2>
          <hr className="divider divider-center" />
        </div>

        <div className="news-grid">
          {news.map((item, index) => (
            <article className="news-card card" key={index}>
              <div className="news-card-top">
                <span className="news-category">{item.category}</span>
                <time className="news-date">{item.date}</time>
              </div>
              <h3 className="news-card-title">{item.title}</h3>
              <p className="news-card-excerpt">{item.excerpt}</p>
              <Link to="/events" className="news-card-link">
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </article>
          ))}
        </div>

        <div className="news-cta">
          <Link to="/events" className="btn btn-secondary">View All News & Events</Link>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
