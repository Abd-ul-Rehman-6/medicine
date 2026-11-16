import React, { useState, useEffect } from 'react';
import { QR_SIZE, QR_GRID } from '../utils/qr';
import '../styles/StickyQR.css';

export default function StickyQR() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <aside
      className={`sticky-qr ${scrolled ? 'is-scrolled' : ''}`}
      aria-label="Get the Pillo app"
    >
      <svg
        className="sticky-qr-code"
        viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`}
        aria-hidden="true"
      >
        {QR_GRID.map((row, r) =>
          row.map((on, c) =>
            on ? (
              <rect
                key={`${r}-${c}`}
                x={c}
                y={r}
                width="1"
                height="1"
                fill="#ffffff"
              />
            ) : null
          )
        )}
      </svg>
      <span className="sticky-qr-text">Get the Pillo app</span>
    </aside>
  );
}
