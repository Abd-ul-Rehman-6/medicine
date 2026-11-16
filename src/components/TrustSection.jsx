import React, { useState, useEffect, useRef } from 'react';
import '../styles/TrustSection.css';

const TESTIMONIALS = [
  <>
    I have recommended EveryDose to our{' '}
    <strong>entire medical team</strong>
  </>,
  <>
    The most <strong>easy, flexible, helpful</strong> and{' '}
    <strong>informative</strong> medication app
  </>,
  <>
    EveryDose has been <strong>game changing</strong>
  </>,
  <>
    <strong>Excellent</strong> for organizing meds and tracking administration
  </>,
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" fill="#F2A000" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function TrustSection() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`trust-section ${shown ? 'is-visible' : ''}`}
    >
      <div className="trust-container">
        <h2 className="trust-title">
          Trusted by industry leaders and 100,000+ patients
        </h2>

        <div className="logos-grid">
          <div className="logo-card">
            <div className="logo-baptist">
              <span className="baptist-mark">
                <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
                  <path d="M16 3l1.6 3.2L16 8l1.6 2.4L16 12h-1.2l-1.6-1.6L16 8l-1.6-1.8L16 3z" fill="#ffffff" />
                  <ellipse cx="16" cy="20.5" rx="7" ry="8.5" fill="#ffffff" />
                  <path d="M11.2 16.5l9.6 7.5M20.8 16.5l-9.6 7.5M12.4 20.5h7.2M16 13v15" stroke="#00694A" strokeWidth="1.3" />
                </svg>
              </span>
              <span className="logo-serif dark">
                Baptist<br />Health
              </span>
            </div>
          </div>

          <div className="logo-card">
            <div className="logo-banner">
              <svg viewBox="0 0 42 30" width="42" height="30" fill="none" stroke="#08718A" strokeWidth="3.2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7c4.5-4.5 9 4.5 13.5 0S27 11.5 31.5 7" />
                <path d="M4 15c4.5-4.5 9 4.5 13.5 0S27 19.5 31.5 15" />
                <path d="M4 23c4.5-4.5 9 4.5 13.5 0S27 27.5 31.5 23" />
              </svg>
              <span className="logo-serif navy">
                Banner<br />Health
              </span>
            </div>
          </div>

          <div className="logo-card">
            <div className="logo-sylvester">
              <span className="uj-mark">
                <span className="uj-u">U</span>
                <span className="uj-j">J</span>
              </span>
              <div className="sylv-text">
                <strong>SYLVESTER</strong>
                <small>COMPREHENSIVE CANCER CENTER</small>
                <small className="miami">UNIVERSITY OF MIAMI HEALTH SYSTEM</small>
              </div>
            </div>
          </div>

          <div className="logo-card">
            <div className="logo-ironshore">
              <svg viewBox="0 0 40 44" width="34" height="38" aria-hidden="true">
                <path d="M20 2 L38 12 L20 22 L2 12 Z" fill="#f6c445" />
                <path d="M2 12 L20 22 L20 42 L2 32 Z" fill="#8A9BA3" />
                <path d="M38 12 L20 22 L20 42 L38 32 Z" fill="#40545E" />
              </svg>
              <div className="ironshore-text">
                <strong>IRONSHORE</strong>
                <small>PHARMACEUTICALS</small>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((quote, i) => (
            <div className="testimonial-card" key={i}>
              <svg className="quote-mark" viewBox="0 0 24 18" aria-hidden="true">
                <path
                  d="M0 18V9.4C0 3.9 3.1.6 8.2 0l.8 2.6C6.2 3.3 4.7 4.9 4.6 7.2H8.4V18H0zm13.6 0V9.4c0-5.5 3.1-8.8 8.2-9.4l.8 2.6c-2.8.9-4.3 2.5-4.4 4.8h3.8V18h-8.4z"
                  fill="#08718A"
                />
              </svg>
              <p className="testimonial-text">{quote}</p>
            </div>
          ))}
        </div>

        <div className="trust-footer">
          <h3 className="rating-title">Over 4,000 5-star reviews</h3>

          <div className="rating-badge">
            <div className="app-heart-logo">
              <svg viewBox="0 0 54 34" width="54" height="34" aria-hidden="true">
                <path
                  d="M15 32C8.5 26.5 2 21.5 2 14.2 2 8.3 6.5 3.5 12 3.5c3.5 0 6.3 2 8.5 5 2.2-3 5-5 8.5-5 5.5 0 10 4.8 10 10.7 0 7.3-6.5 12.3-13 17.8-3.3-2.8-7.2-6-11-10z"
                  fill="#20C6A1"
                  opacity="0.95"
                />
                <path
                  d="M31 32c-5-4.2-10-8-10-13.5 0-4.4 3.3-8 7.4-8 2.6 0 4.6 1.4 6.3 3.6 1.7-2.2 3.7-3.6 6.3-3.6 4.1 0 7.4 3.6 7.4 8C48.4 24 43.4 27.8 38 32c-2.5-2-5.2-4.3-7-7z"
                  fill="#003F5C"
                />
              </svg>
            </div>

            <div className="divider-line" />

            <div className="star-rating">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
