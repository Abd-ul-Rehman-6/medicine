import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  HERO,
  ESSENTIALS,
  CHAPTERS,
  PARTS,
  PAGE_FOOT_HTML,
} from '../data/termsData';
import '../styles/TermsPage.css';

export default function TermsPage() {
  const [active, setActive] = useState(CHAPTERS[0]?.id || '');

  /* scroll-spy for the sticky chapter bar */
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const els = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean);
    if (!els.length) return undefined;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-10% 0px -65% 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.title = 'Terms & Conditions - Medicine Reminder App';
    window.scrollTo(0, 0);
  }, []);

  const goTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(id);
  };

  return (
    <div className="terms-wrap">
      <Navbar />

      <div className="terms-page">
        <div className="wrap">
          <header className="hero">
            <h1 dangerouslySetInnerHTML={{ __html: HERO.title }} />
            <div className="hero-meta">
              {HERO.meta.filter((m) => m.label !== 'Last updated').map((m) => (
                <span key={m.label}>
                  <b dangerouslySetInnerHTML={{ __html: m.label }} />{' '}
                  {m.value}
                </span>
              ))}
            </div>
            {HERO.meta.filter((m) => m.label === 'Last updated').map((m) => (
              <p className="hero-updated" key={m.label}>
                <b dangerouslySetInnerHTML={{ __html: m.label }} /> {m.value}
              </p>
            ))}
            <p className="hero-date">{HERO.date}</p>
          </header>

          <section className="essentials" aria-labelledby="essentials-title">
            <div className="essentials-head">
              <h2
                id="essentials-title"
                dangerouslySetInnerHTML={{ __html: ESSENTIALS.title }}
              />
              <p dangerouslySetInnerHTML={{ __html: ESSENTIALS.sub }} />
            </div>
            <div className="key-grid">
              {ESSENTIALS.tiles.map((t) => (
                <article className="key-tile" key={t.num}>
                  <span className="k-num">{t.num}</span>
                  <strong dangerouslySetInnerHTML={{ __html: t.title }} />
                  <p dangerouslySetInnerHTML={{ __html: t.text }} />
                </article>
              ))}
            </div>
          </section>

          <nav className="chapter-nav" aria-label="Parts of these terms">
            {CHAPTERS.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className={active === c.id ? 'active' : ''}
                onClick={(e) => goTo(e, c.id)}
                dangerouslySetInnerHTML={{ __html: c.label }}
              />
            ))}
          </nav>

          <main>
            {PARTS.map((part) => (
              <section className="part" id={part.id} key={part.id}>
                <div className="part-head">
                  <div className="part-letter">{part.letter}</div>
                  <div>
                    <h2 dangerouslySetInnerHTML={{ __html: part.title }} />
                    <p dangerouslySetInnerHTML={{ __html: part.sub }} />
                  </div>
                </div>

                {part.clauses.map((c) => (
                  <article className="clause" id={c.id} key={c.id}>
                    <div className="clause-head">
                      <span className="clause-num">{c.num}</span>
                      <h2 dangerouslySetInnerHTML={{ __html: c.title }} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: c.html }} />
                  </article>
                ))}
              </section>
            ))}

            <footer
              className="page-foot"
              dangerouslySetInnerHTML={{ __html: PAGE_FOOT_HTML }}
            />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
