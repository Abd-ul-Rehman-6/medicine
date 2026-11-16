import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/SubCta.css';

export default function SubCta() {
  return (
    <section className="sub-cta-section">
      <div className="sub-cta-content">
        <p className="sub-cta-description">
          Behavior-driven digital engagement that helps pharmaceutical <br />
          brands activate patients, improve outcomes, and scale support <br />
          across therapies and markets.
        </p>

        <div className="sub-cta-actions">
          <button className="btn-request-demo">
            {/* Pehla Arrow: Default par dikhega */}
            <ArrowRight size={16} className="arrow-initial" />
            
            <span>REQUEST A DEMO</span>

            {/* Doosra Arrow: Hover karne par right side par show hoga */}
            <ArrowRight size={16} className="arrow-hover" />
          </button>
          
          <a href="#daily-dose" className="explore-platform-link">
            Explore Blog
          </a>
        </div>
      </div>
    </section>
  );
}