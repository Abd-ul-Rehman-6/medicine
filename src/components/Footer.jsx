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
        <a href="#google" aria-label="Google">
          <svg viewBox="0 0 48 48" width="24" height="24" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 17.46 0 20.62 0 24c0 3.38.92 6.54 2.56 9.35l7.97-6.18z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
        </a>
        <a href="#x" aria-label="X">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#ffffff" aria-hidden="true"><path d="M18.244 3H21l-6.98 7.98L22 21h-5.4l-4.2-5.5L7.5 21H4.7l7.5-8.6L3 3h5.5l3.8 5L18.24 3z"/></svg>
        </a>
        <a href="#facebook" aria-label="Facebook">
          <svg viewBox="0 0 48 48" width="24" height="24" aria-hidden="true">
            <path fill="#1877F2" d="M48 24C48 10.75 37.25 0 24 0S0 10.75 0 24c0 12.02 8.83 21.98 20.36 23.8V30.9h-6.13V24h6.13v-5.24c0-6.05 3.6-9.4 9.12-9.4 2.64 0 5.4.47 5.4.47v5.93h-3.04c-2.98 0-3.92 1.85-3.92 3.76V24h6.68l-1.08 6.9h-5.6v16.9C39.17 45.98 48 36.02 48 24z"/>
          </svg>
        </a>
        <a href="#youtube" aria-label="YouTube">
          <svg viewBox="0 0 48 48" width="24" height="24" aria-hidden="true">
            <path fill="#FF0000" d="M48 33.4V17c0-2.9-2.4-5.3-5.3-5.3H5.3C2.4 11.7 0 14.1 0 17v16.4C0 36.3 2.4 38.7 5.3 38.7h37.4C45.6 38.7 48 36.3 48 33.4z"/>
            <path fill="#FFFFFF" d="M19.5 30.5V17.5l11.4 6.5z"/>
          </svg>
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
