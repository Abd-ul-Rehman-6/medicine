import React, { useState, useEffect } from 'react';
import { Eye, X, AlarmClock, ArrowRight, Check } from 'lucide-react';
import SubCta from './SubCta';
import Navbar from './Navbar';
import '../styles/Hero.css';

function Laurel({ side = 'left' }) {
  return (
    <svg
      className={`laurel ${side === 'right' ? 'laurel-right' : ''}`}
      viewBox="0 0 26 58"
      aria-hidden="true"
    >
      <path
        d="M9 54C3 43 3 22 11 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <g fill="currentColor">
        <ellipse cx="12.5" cy="48" rx="5" ry="2.4" transform="rotate(-48 12.5 48)" />
        <ellipse cx="9.5" cy="40" rx="5" ry="2.4" transform="rotate(-32 9.5 40)" />
        <ellipse cx="8" cy="32" rx="5" ry="2.4" transform="rotate(-18 8 32)" />
        <ellipse cx="8.5" cy="24" rx="5" ry="2.4" transform="rotate(-8 8.5 24)" />
        <ellipse cx="10.5" cy="16" rx="5" ry="2.4" transform="rotate(4 10.5 16)" />
        <ellipse cx="13.5" cy="9" rx="5" ry="2.4" transform="rotate(16 13.5 9)" />
      </g>
    </svg>
  );
}

const HEADING_WORDS = [
  'The',
  'pill',
  'reminder',
  'that',
  { text: "won't", accent: true },
  { text: 'stop', accent: true },
  'until',
  'you',
  'take',
  'it',
];

export default function Hero() {
  const [rating, setRating] = useState('0.0');

  useEffect(() => {
    let raf;
    let start;
    const duration = 1300;

    const timeout = setTimeout(() => {
      const tick = (now) => {
        if (start === undefined) start = now;
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setRating((4.8 * eased).toFixed(1));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, 1100);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-outer">
      <div className="hero-frame anim-frame-lines hero-frame-line">
        <Navbar />

        {/* New Hero: Phone mockup + Ratings, Heading, CTA */}
        <main className="hero-content fade-in-hero">
          <div className="hero-pills" aria-hidden="true">
            <span className="pill pill-1" />
            <span className="pill pill-2" />
            <span className="pill pill-3" />
            <span className="pill pill-4" />
          </div>

          <div className="phone-stage">
            <div className="notif notif-1">
              <span className="notif-icon notif-ok">
                <Check size={12} strokeWidth={3} />
              </span>
              Pill taken
            </div>
            <div className="notif notif-2">
              <span className="notif-icon">
                <AlarmClock size={12} />
              </span>
              Reminder · 5 min
            </div>

            <div className="phone">
              <div className="phone-screen">
                <div className="phone-notch" />

                <div className="screen-title">
                  <span className="screen-title-small">TIME TO TAKE</span>
                  <span className="screen-title-big">PILLS</span>
                </div>

                <div className="view-meds">
                  <Eye size={13} />
                  <span>View medications</span>
                  <span className="view-meds-arrow">›</span>
                </div>

                <div className="mascot">
                  <div className="mascot-eye">
                    <span className="pupil" />
                  </div>
                  <div className="mascot-eye">
                    <span className="pupil" />
                  </div>
                  <span className="mascot-smile" />
                </div>

                <div className="screen-actions">
                  <div className="screen-action">
                    <button className="screen-round-btn" aria-label="Skip all">
                      <X size={16} />
                    </button>
                    <span>Skip all</span>
                  </div>
                  <div className="screen-action">
                    <button className="screen-round-btn" aria-label="Reschedule">
                      <AlarmClock size={16} />
                    </button>
                    <span>Reschedule</span>
                  </div>
                </div>

                <button className="take-now">
                  <span>Take now</span>
                  <span className="take-now-arrow">
                    <ArrowRight size={14} />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-ratings">
              <div className="rating">
                <Laurel side="left" />
                <div className="rating-text">
                  <strong>{rating}</strong>
                  <span>more than 6k<br />ratings</span>
                </div>
                <Laurel side="right" />
              </div>

              <div className="rating">
                <Laurel side="left" />
                <div className="rating-text">
                  <strong>#1</strong>
                  <span>Medicine app on<br />Google play</span>
                </div>
                <Laurel side="right" />
              </div>
            </div>

            <h1 className="hero-heading">
              {HEADING_WORDS.map((word, i) => {
                const text = typeof word === 'string' ? word : word.text;
                const accent = typeof word === 'object' && word.accent;
                return (
                  <span
                    key={i}
                    className={`heading-word${accent ? ' accent' : ''}`}
                    style={{ '--i': String(i) }}
                  >
                    {text}
                  </span>
                );
              })}
            </h1>

            <p className="hero-subtext">
              Easy to swipe, easy to forget<br />
              Pillo doesn't let that happen — free for unlimited meds
            </p>

            <div className="store-buttons">
              <button className="store-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.2 3.4v17.2c0 .85 1.04 1.28 1.64.68l13.1-8.6a.8.8 0 0 0 0-1.36L7.84 2.72c-.6-.6-1.64-.17-1.64.68z" />
                </svg>
                <span>
                  <small>GET IT FREE ON</small>
                  <b>Google Play</b>
                </span>
              </button>

              <button className="store-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span>
                  <small>JOIN THE BETA ON</small>
                  <b>App Store</b>
                </span>
              </button>
            </div>
          </div>
        </main>

        {/* Separated Sub-CTA Section Component */}
        <SubCta />
      </div>
    </div>
  );
}
