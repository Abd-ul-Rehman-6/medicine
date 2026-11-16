import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/TestimonialsSection.css';

const REVIEWS = [
  {
    text: 'Simply no words can describe the ease of use and functionality of this application. Thank you for producing such a program that is light years ahead of any other! 5 stars from me!!',
    author: '— Emily Hum, Android App User',
  },
  {
    text: "It just make keeping track and ordering your meds so so much easier. There's no need to sort through all your paper prescriptions & repeats anymore!",
    author: 'Gillian_troubat, Apple App User',
  },
  {
    text: "This app has helps me to manage my medications. I was forever forgetting to take medicines and running out and getting stuck. This never happens any more. I'm very grateful. Thank you",
    author: 'Saskatoon James, Apple App User',
  },
  {
    text: 'Great app for remembering my pills at the right time every day. The reminders are a lifesaver for my whole family.',
    author: 'Michael R., Android App User',
  },
  {
    text: 'Simple, clean and really helpful. I finally know exactly what I have taken and when. Highly recommended!',
    author: 'Anna K., Apple App User',
  },
];

function QuoteMark() {
  return (
    <svg className="review-quote" viewBox="0 0 24 18" aria-hidden="true">
      <path
        d="M0 18V9.4C0 3.9 3.1.6 8.2 0l.8 2.6C6.2 3.3 4.7 4.9 4.6 7.2H8.4V18H0zm13.6 0V9.4c0-5.5 3.1-8.8 8.2-9.4l.8 2.6c-2.8.9-4.3 2.5-4.4 4.8h3.8V18h-8.4z"
        fill="#20C6A1"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState('next');
  const total = REVIEWS.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection('next');
      setIndex((i) => (i + 1) % total);
    }, 4500);
    return () => clearInterval(id);
  }, [paused, total]);

  const visible = [0, 1, 2].map((i) => REVIEWS[(index + i) % total]);

  const prev = () => {
    setDirection('prev');
    setIndex((i) => (i - 1 + total) % total);
  };
  const next = () => {
    setDirection('next');
    setIndex((i) => (i + 1) % total);
  };

  const goTo = (i) => {
    setDirection(i >= index ? 'next' : 'prev');
    setIndex(i);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <h2 className="testimonials-title">What our app users are saying</h2>

        <div
          className="testimonials-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button className="carousel-arrow arrow-left" onClick={prev} aria-label="Previous reviews">
            <ChevronLeft size={40} strokeWidth={1.6} />
          </button>

          <div className={`reviews-grid slide-${direction}`} key={index}>
            {visible.map((review, i) => (
              <div className="review-card" key={i}>
                <QuoteMark />
                <p className="review-text">{review.text}</p>
                <p className="review-author">{review.author}</p>
              </div>
            ))}
          </div>

          <button className="carousel-arrow arrow-right" onClick={next} aria-label="Next reviews">
            <ChevronRight size={40} strokeWidth={1.6} />
          </button>
        </div>

        <div className="carousel-dots">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === index ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
