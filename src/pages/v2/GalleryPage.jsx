import { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './GalleryPage.css';

const categories = ['All', 'Campus', 'Events', 'Sports', 'Classroom', 'Cultural'];

// Placeholder gallery items — will be replaced with real photos
const galleryItems = [
  { id: 1, category: 'Campus', caption: 'School Main Building' },
  { id: 2, category: 'Events', caption: 'Annual Day Celebration' },
  { id: 3, category: 'Sports', caption: 'Sports Day — Track Events' },
  { id: 4, category: 'Classroom', caption: 'Interactive Learning Session' },
  { id: 5, category: 'Cultural', caption: 'Bharathanatyam Performance' },
  { id: 6, category: 'Campus', caption: 'School Playground' },
  { id: 7, category: 'Events', caption: 'Independence Day Celebrations' },
  { id: 8, category: 'Sports', caption: 'Karate Training' },
  { id: 9, category: 'Cultural', caption: 'Cultural Program' },
];

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A glimpse into life at Sri Vivekananda Matric Hr Sec School"
        breadcrumb="Gallery"
      />

      <section className="section" id="gallery">
        <div className="container">
          {/* Filter Tabs */}
          <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter-btn ${activeCategory === cat ? 'gallery-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                id={`gallery-tab-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div className="gallery-item" key={item.id}>
                <div className="gallery-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span>Photo Coming Soon</span>
                </div>
                <div className="gallery-caption">
                  <span className="gallery-caption-category">{item.category}</span>
                  <p className="gallery-caption-text">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="gallery-empty">No photos in this category yet. Check back soon!</p>
          )}
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
