import { useRef } from 'react';
import './Hero.css';

function Hero() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section className="hero">
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      <div className="hero-shape hero-shape-3"></div>

      <div
        className="hero-content"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="hero-eyebrow">Est. 2003</span>
        <h1 className="hero-heading">
          Sri Vivekananda <span className="hero-highlight">Matric.</span> Higher Sec. School
        </h1>
        <p className="hero-subtext">
          Nurturing every student to think boldly, act with integrity, and grow
          into confident young leaders — from their first day in class to the
          day they graduate.
        </p>
        <div className="hero-actions">
          <a href="/contact" className="hero-btn hero-btn-primary">Visit Our School</a>
          <a href="/about" className="hero-btn hero-btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;