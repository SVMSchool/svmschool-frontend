import { useState, useEffect, useRef } from 'react';
import './StatsCounter.css';

const stats = [
  { number: 20, suffix: '+', label: 'Years of Excellence' },
  { number: 2000, suffix: '+', label: 'Students & Growing' },
  { number: 150, suffix: '+', label: 'Dedicated Staff' },
  { number: 100, suffix: '%', label: 'Holistic Development' },
];

function AnimatedNumber({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="stats-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" id="stats" ref={sectionRef} aria-label="School statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              className="stats-item"
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <AnimatedNumber
                target={stat.number}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <span className="stats-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsCounter;
