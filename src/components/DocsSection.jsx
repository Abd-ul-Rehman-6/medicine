import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import '../styles/DocsSection.css';

export default function DocsSection() {
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
      className={`docs-section ${shown ? 'is-visible' : ''}`}
    >
      <div className="docs-container">
        <div className="docs-visual">
          <div className="docs-phone-card">
            <div className="docs-phone">
              <div className="docs-status">
                <span className="status-time">9:41</span>
                <span className="status-icons">
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="#1C2B33" aria-hidden="true">
                    <rect x="0" y="7" width="3" height="4" rx="1" />
                    <rect x="4.5" y="5" width="3" height="6" rx="1" />
                    <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
                    <rect x="13.5" y="0" width="3" height="11" rx="1" />
                  </svg>
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="none" stroke="#1C2B33" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                    <path d="M1.5 4.2a9 9 0 0 1 13 0" />
                    <path d="M4.5 7a5 5 0 0 1 7 0" />
                    <circle cx="8" cy="9.5" r="1" fill="#1C2B33" stroke="none" />
                  </svg>
                  <svg width="25" height="12" viewBox="0 0 25 12" aria-hidden="true">
                    <rect x="0.5" y="0.5" width="21" height="11" rx="3" fill="none" stroke="#1C2B33" strokeOpacity="0.4" />
                    <rect x="2" y="2" width="15" height="8" rx="2" fill="#1C2B33" />
                    <path d="M23 4v4a2.5 2.5 0 0 0 0-4z" fill="#1C2B33" fillOpacity="0.4" />
                  </svg>
                </span>
              </div>

              <div className="docs-nav">
                <X size={18} strokeWidth={2.2} />
                <span>Medication</span>
              </div>

              <div className="med-card">
                <h4 className="med-name">Ibuprofen 500 mg</h4>
                <span className="pill-left-badge">10 pill(s) left</span>

                <div className="med-row">
                  <span>Dose</span>
                  <span>1 pill(s)</span>
                </div>

                <div className="note-label">Personal note</div>
                <div className="note-box">
                  Need to take pain-killer for my period cramps
                  <span className="note-caret" />
                </div>

                <div className="note-footer">
                  <span className="note-footer-left">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#7B8B73" strokeWidth="1.4" aria-hidden="true">
                      <circle cx="6" cy="6" r="5" />
                      <path d="M6 5.2v3.2M6 3.6v.6" strokeLinecap="round" />
                    </svg>
                    View all notes in your health report.
                  </span>
                  <span>50/150</span>
                </div>
              </div>
            </div>
          </div>

         

        
        </div>

        <div className="docs-text">
          <h2>Comprehensive documentation and personal notes</h2>
          <p>
            MyTherapy automatically documents every intake, whether taken or
            skipped. You can even add notes to each instance, so you never have
            to face uncertainty regarding past intakes.
          </p>
          <p>
            In combination with your health diary, which MyTherapy keeps
            up-to-date, you will always carry your personal treatment overview
            with you and have access to it anytime, anywhere.
          </p>
        </div>
      </div>
    </section>
  );
}
