import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: 'My children have grown tremendously — not just academically, but as confident and respectful individuals. The teachers truly care about every student.',
    name: 'Parent of Class 10 Student',
    role: 'Parent',
  },
  {
    quote: 'The school\'s focus on both academics and cultural activities like Bharathanatyam and Yoga gave me a well-rounded foundation that I carry with me today.',
    name: 'Alumni, Batch of 2020',
    role: 'Alumni',
  },
  {
    quote: 'We chose SVM School for its values rooted in Swami Vivekananda\'s teachings. The discipline and character building here is exceptional.',
    name: 'Parent of Class 7 Student',
    role: 'Parent',
  },
  {
    quote: 'The Karate and sports programs here helped me build discipline and confidence. I\'m grateful for the opportunities this school provided.',
    name: 'Alumni, Batch of 2022',
    role: 'Alumni',
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section section" id="testimonials" aria-label="Testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Voices of Our Community</h2>
          <hr className="divider divider-center" />
        </div>

        <div className="testimonials-carousel">
          <div className="testimonial-card" key={activeIndex}>
            <svg className="testimonial-quote-mark" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/>
            </svg>
            <blockquote className="testimonial-text">
              {testimonials[activeIndex].quote}
            </blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div>
                <p className="testimonial-name">{testimonials[activeIndex].name}</p>
                <p className="testimonial-role">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="testimonials-controls">
            <button
              className="testimonial-btn"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              id="testimonial-prev"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === activeIndex ? 'testimonial-dot--active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="testimonial-btn"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              id="testimonial-next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
