import React, { useState, useEffect, useRef } from 'react';
import { QR_SIZE, QR_GRID } from '../utils/qr';
import '../styles/DownloadSection.css';

export default function DownloadSection() {
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
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="download"
      className={`download-section ${shown ? 'is-visible' : ''}`}
    >
      <div className="download-container">
        <svg className="dl-mascot" viewBox="0 0 120 120" aria-hidden="true">
          <ellipse cx="60" cy="104" rx="18" ry="4" fill="#e8ecf7" />
          <path
            d="M47 74 Q45 98 60 98 Q75 98 73 74 Z"
            fill="#ffffff"
            stroke="#E5EDF0"
            strokeWidth="2"
          />
          <circle cx="45" cy="84" r="5" fill="#fff" stroke="#E5EDF0" strokeWidth="2" />
          <circle cx="75" cy="84" r="5" fill="#fff" stroke="#E5EDF0" strokeWidth="2" />
          <circle cx="60" cy="48" r="28" fill="#00694A" />
          <path
            d="M34 50 Q60 6 86 50"
            fill="none"
            stroke="#1C2B33"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <rect x="24" y="46" width="17" height="24" rx="8.5" fill="#1C2B33" />
          <rect x="79" y="46" width="17" height="24" rx="8.5" fill="#1C2B33" />
          <path
            d="M45 50 Q50 44 55 50"
            fill="none"
            stroke="#1C2B33"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M65 50 Q70 44 75 50"
            fill="none"
            stroke="#1C2B33"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M53 58 Q60 65 67 58"
            fill="none"
            stroke="#1C2B33"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <g fill="#20C6A1">
            <circle cx="97" cy="26" r="4" />
            <rect x="99.5" y="8" width="2.5" height="18" rx="1" />
            <path d="M102 8 Q108 11 107 16 Q105 13 102 12 Z" />
          </g>
        </svg>

        <h2 className="dl-title">
          Download Pillo
          <br />
          Free Today!
        </h2>

        <div className="qr-card">
          <svg
            className="qr-code"
            viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`}
            aria-hidden="true"
          >
            {QR_GRID.map((row, r) =>
              row.map((on, c) =>
                on ? (
                  <rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill="#ffffff" />
                ) : null
              )
            )}
          </svg>
          <p className="qr-text">
            Scan the QR code
            <br />
            with your phone camera
          </p>
        </div>

        <div className="store-buttons">
          <a className="store-btn" href="#google-play">
            <svg className="store-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#ffffff"
                d="M5 3.2v17.6c0 .5.5.8.9.5l14.6-8.8c.4-.2.4-.8 0-1L5.9 2.7c-.4-.3-.9 0-.9.5z"
              />
            </svg>
            <span className="store-text">
              <small>GET IT FREE ON</small>
              <strong>Google Play</strong>
            </span>
          </a>

          <a className="store-btn" href="#testflight">
            <svg className="store-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#ffffff"
                d="M17.05 12.04c-.02-2.02 1.65-2.99 1.72-3.04-.94-1.37-2.4-1.56-2.92-1.58-1.24-.13-2.42.73-3.05.73-.63 0-1.6-.71-2.63-.69-1.35.02-2.6.79-3.29 2-1.4 2.44-.36 6.05 1 8.03.67.97 1.47 2.06 2.52 2.02 1.01-.04 1.39-.65 2.61-.65 1.22 0 1.56.65 2.63.63 1.09-.02 1.78-.99 2.44-1.96.76-1.12 1.08-2.21 1.09-2.27-.02-.01-2.09-.8-2.11-3.19zM15.1 5.99c.56-.68.94-1.63.83-2.57-.81.03-1.79.54-2.37 1.22-.52.6-.98 1.56-.85 2.48.9.07 1.83-.46 2.39-1.13z"
              />
            </svg>
            <span className="store-text">
              <small>JOIN THE BETA ON</small>
              <strong>TestFlight</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
