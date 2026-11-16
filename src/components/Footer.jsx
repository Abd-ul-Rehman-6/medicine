import React, { useState, useEffect, useRef } from 'react';
import '../styles/Footer.css';

const COLUMNS = [
  {
    title: 'Features',
    links: [
      { label: 'Never Miss a Dose', href: '#never-miss' },
      { label: 'Track Every Dose', href: '#track-every-dose' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'The Daily Dose (Blog)', href: '#daily-dose' },
      { label: 'FAQs', href: '#faqs' },
      { label: 'For Caregivers', href: '#caregivers' },
    ],
  },
  {
    title: 'Platform',
    links: ['For Pharma', 'For Providers', 'For Patients', 'Download App'],
  },
];

export default function Footer() {
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
    <footer
      ref={ref}
      className={`site-footer ${shown ? 'is-visible' : ''}`}
    >
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg className="footer-logo-mark" viewBox="0 0 34 28" aria-hidden="true">
              <path
                d="M4 24 L11 4 L17 24 L23 4 L30 24"
                fill="none"
                stroke="#E8853D"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="footer-logo-text">MediLife
</span>
          </div>

          <p className="footer-tagline">
            The patient engagement engine for pharma portfolios
          </p>

          <div className="footer-badges">
            <a className="footer-badge" href="#app-store">
              <svg className="badge-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#ffffff"
                  d="M17.05 12.04c-.02-2.02 1.65-2.99 1.72-3.04-.94-1.37-2.4-1.56-2.92-1.58-1.24-.13-2.42.73-3.05.73-.63 0-1.6-.71-2.63-.69-1.35.02-2.6.79-3.29 2-1.4 2.44-.36 6.05 1 8.03.67.97 1.47 2.06 2.52 2.02 1.01-.04 1.39-.65 2.61-.65 1.22 0 1.56.65 2.63.63 1.09-.02 1.78-.99 2.44-1.96.76-1.12 1.08-2.21 1.09-2.27-.02-.01-2.09-.8-2.11-3.19zM15.1 5.99c.56-.68.94-1.63.83-2.57-.81.03-1.79.54-2.37 1.22-.52.6-.98 1.56-.85 2.48.9.07 1.83-.46 2.39-1.13z"
                />
              </svg>
              <span className="badge-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>

            <a className="footer-badge" href="#google-play">
              <svg className="badge-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#20C6A1"
                  d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1L13.5 12v-.2L3.7 1.8h-.1z"
                />
                <path
                  fill="#ffbc00"
                  d="M17 15.7l-3.5-3.5v-.2L17 8.5l.1.1 4.2 2.4c1.2.7 1.2 1.8 0 2.5L17 15.7z"
                />
                <path
                  fill="#ff3a44"
                  d="M17.1 15.6L13.5 12 3.6 22.2c.4.4 1 .5 1.8.1l11.7-6.7"
                />
                <path
                  fill="#00e676"
                  d="M17.1 8.4L5.4 1.7c-.8-.4-1.4-.4-1.8.1L13.5 12l3.6-3.6z"
                />
              </svg>
              <span className="badge-text">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="footer-columns">
          {COLUMNS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4 className="footer-col-title">{col.title}</h4>
              <ul className="footer-links">
                {col.links.map((link) => {
                  const isObj = typeof link === 'object';
                  const label = isObj ? link.label : link;
                  const href = isObj
                    ? link.href
                    : `#${link.toLowerCase().replace(/\s+/g, '-')}`;
                  return (
                    <li key={label}>
                      <a href={href}>{label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-social" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 3rem', display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem', gap: '1rem' }}>
        <a href="#google" aria-label="Google" style={{ color: "#4285F4" }}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09zM12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23zM5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62zM12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
        </a>
        <a href="#x" aria-label="X" style={{ color: "#ffffff" }}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-7-6.2 7H1.7l8.1-9.3L1 2h7.1l4.9 6.4L18.9 2z" /></svg>
        </a>
        <a href="#facebook" aria-label="Facebook" style={{ color: "#1877F2" }}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07z" /></svg>
        </a>
        <a href="#youtube" aria-label="YouTube" style={{ color: "#FF0000" }}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
        </a>
      </div>


      <div className="footer-bottom">
        <span className="footer-copy">© 2026 MEDISAFE. ALL RIGHTS RESERVED.</span>
        <nav className="footer-policy">
          <a href="#privacy-full">Privacy Policy</a>
          <span className="policy-dot">•</span>
          <a href="#terms">Terms &amp; Conditions</a>
        </nav>
      </div>
    </footer>
  );
}
