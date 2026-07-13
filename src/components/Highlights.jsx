import './Highlights.css';

const highlights = [
  { number: '20+', label: 'Years of Excellence' },
  { number: '2000+', label: 'Students' },
  { number: '150+', label: 'Teaching & Non-Teaching Staff' },
  { number: '4+', label: 'Sports, Yoga, Bharathanatyam & Karate' },
];

function Highlights() {
  return (
    <section className="highlights">
      {highlights.map((item, index) => (
        <div className="highlight-card" key={index}>
          <h2 className="highlight-number">{item.number}</h2>
          <p className="highlight-label">{item.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Highlights;