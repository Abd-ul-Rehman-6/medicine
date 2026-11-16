import { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  FAQ_JSONLD,
  QUICK_CHIPS,
  CATEGORIES,
  TOP_QUESTIONS,
  GROUPS,
  DISCLAIMER_HTML,
  FOOT_NOTE_HTML,
} from '../data/faqsData';
import '../styles/FaqsPage.css';

const PAGE_TITLE = 'FAQs - Medicine Reminder App Help Desk';

const PAGE_DESCRIPTION =
  'Answers for the Medicine Reminder App: missed doses, reminders, schedules, refills, safety checks, caregivers, reports, plans and privacy - search and find the fix.';

export default function FaqsPage() {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('all');
  const [openIds, setOpenIds] = useState([]);
  const [votes, setVotes] = useState({});
  const [flashId, setFlashId] = useState(null);
  const [composed, setComposed] = useState('');
  const [copyNote, setCopyNote] = useState(
    "Paste into the app's Help - Contact support."
  );

  const searchRef = useRef(null);
  const supportRef = useRef(null);
  const copiedRef = useRef(null);

  /* SEO + scroll to top */
  useEffect(() => {
    document.title = PAGE_TITLE;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', PAGE_DESCRIPTION);
    window.scrollTo(0, 0);
  }, []);

  /* ---------- filtering ---------- */
  const q = query.trim().toLowerCase();

  const groups = useMemo(
    () =>
      GROUPS.map((g) => {
        const items = g.items.map((it) => ({
          ...it,
          visible:
            (activeCat === 'all' || it.cat === activeCat) &&
            (q === '' || it.q.toLowerCase().includes(q) ||
              it.answer.toLowerCase().includes(q)),
        }));
        return { ...g, items };
      }),
    [q, activeCat]
  );

  const shownCount = groups.reduce(
    (a, g) => a + g.items.filter((i) => i.visible).length,
    0
  );

  const isFiltered = q !== '' || activeCat !== 'all';

  /* ---------- actions ---------- */
  const toggleItem = (id) =>
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const jumpTo = (id) => {
    setQuery('');
    setActiveCat('all');
    setOpenIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setFlashId(id);
    setTimeout(() => setFlashId(null), 1600);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 60);
  };

  const pickQuick = (value) => {
    setQuery(value);
    setTimeout(() => {
      const el = document.getElementById('allH');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  const clearSearch = () => {
    setQuery('');
    if (searchRef.current) searchRef.current.focus();
  };

  const scrollToSupport = () => {
    if (supportRef.current)
      supportRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const focusSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      if (searchRef.current) searchRef.current.focus({ preventScroll: true });
    }, 350);
  };

  const vote = (id, value) => setVotes((prev) => ({ ...prev, [id]: value }));

  const compose = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const topic = (data.get('topic') || '').toString();
    const msg = (data.get('message') || '').toString().trim();

    const lines = [
      `Subject: [${topic}] Support question - Medicine Reminder App`,
      '',
      msg ||
        '(Write your question here - what happened, and what you expected instead.)',
      '',
      name ? `From: ${name}` : 'From: (your name)',
      email ? `Reply to: ${email}` : 'Reply to: (your email)',
      'Sent from the FAQs page',
    ];
    setComposed(lines.join('\n'));
    setCopyNote("Paste into the app's Help - Contact support.");
  };

  const copy = () => {
    const done = () =>
      setCopyNote(
        'Copied - paste into Help - Contact support.'
      );
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(composed)
        .then(done)
        .catch(() => {
          if (copiedRef.current) {
            copiedRef.current.select();
            document.execCommand('copy');
          }
          done();
        });
    } else {
      if (copiedRef.current) {
        copiedRef.current.select();
        document.execCommand('copy');
      }
      done();
    }
  };

  /* ---------- status line ---------- */
  const status = (() => {
    if (q === '') return '';
    if (shownCount === 0)
      return (
        'No answers match ' +
        '“' +
        query.trim() +
        '”.'
      );
    return (
      shownCount +
      ' answer' +
      (shownCount === 1 ? '' : 's') +
      ' match “' +
      query.trim() +
      '” - tap one to open it.'
    );
  })();

  return (
    <>
      <div className="faq-page">
      <Navbar />

      {/* FAQ structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FAQ_JSONLD }}
      />

      {/* ============ HERO + SEARCH ============ */}
      <header className="hero">
        <div className="wrap">
          
          <h1>
            How can we <em>help?</em>
          </h1>
            <p className="lede">
              Type a question - short answers, filtered as you type.
            </p>

          <form
            className="searchbox"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.8-3.8" />
            </svg>
            <input
              id="searchInput"
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={'Try "missed dose", "reminder", "refill", "parent".'}
              aria-label="Search frequently asked questions"
              autoComplete="off"
            />
            {query && (
              <button
                type="button"
                className="clear-btn show"
                onClick={clearSearch}
              >
                Clear
              </button>
            )}
          </form>

          <p className="search-status" aria-live="polite">
            {status}
          </p>

          <div className="quick">
            <span>Popular right now:</span>
            {QUICK_CHIPS.map((c) => (
              <button
                key={c.value}
                type="button"
                className="chip"
                onClick={() => pickQuick(c.value)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="wrap">
        {/* ============ TOP 6 ============ */}
        {!isFiltered && (
          <section id="topSection" aria-labelledby="topH">
            <div className="section-head">
              <h2 id="topH">Asked the most</h2>
            </div>
            <p className="section-sub">
              
            </p>
            <div className="top6">
              {TOP_QUESTIONS.map((t, i) => (
                <button
                  key={t.target}
                  type="button"
                  className="top-card"
                  onClick={() => jumpTo(t.target)}
                >
                  <span className="top-num">{i + 1}</span>
                  <span>
                    <b>{t.q}</b>
                  </span>
                  <span className="go" aria-hidden="true">
                    →
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ============ ALL QUESTIONS ============ */}
        <section aria-labelledby="allH">
          <div className="section-head">
            <h2 id="allH">Browse by topic</h2>
          </div>
          <p className="section-sub">
            Nine topics of short answers - pick one to narrow the list.
          </p>

          <div className="catbar" role="group" aria-label="Filter questions by topic">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                className="cat-pill"
                aria-pressed={activeCat === c.key}
                onClick={() => setActiveCat(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className={`no-results ${shownCount === 0 ? 'show' : ''}`}>
            <b>Nothing matches that search</b>
            Try a shorter word - "dose", "refill", "cancel" - or write your
            question out below and send it to support.
            <br />
            <button type="button" onClick={scrollToSupport}>
              Go to support
            </button>
          </div>

          <div id="faqList">
            {groups.map((g) => {
              const visible = g.items.filter((i) => i.visible);
              if (!visible.length) return null;

              return (
                <div className="cat-group" key={g.key}>
                  <div className="cat-title">
                    <span
                      className="cat-icon"
                      dangerouslySetInnerHTML={{ __html: g.icon }}
                    />
                    <h3>{g.title}</h3>
                    <span className="count">
                      · {visible.length === g.items.length
                        ? `${g.items.length} answers`
                        : `${visible.length} of ${g.items.length}`}
                    </span>
                  </div>

                  {g.items.map((it) => {
                    if (!it.visible) return null;
                    const open = openIds.includes(it.id);
                    const voteValue = votes[it.id];

                    return (
                      <div
                        key={it.id}
                        id={it.id}
                        className={`faq-item ${open ? 'open' : ''} ${
                          flashId === it.id ? 'flash' : ''
                        }`}
                      >
                        <button
                          type="button"
                          className="faq-q"
                          aria-expanded={open}
                          onClick={() => toggleItem(it.id)}
                        >
                          {it.q}
                          <span className="chev" aria-hidden="true">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M6 9.75l6 6 6-6" />
                            </svg>
                          </span>
                        </button>

                        <div className="faq-a">
                          <div className="faq-a-inner">
                            <div
                              className="faq-body"
                              dangerouslySetInnerHTML={{ __html: it.answer }}
                            />
                            <div className="helpful">
                              {voteValue ? (
                                <span className="reply">
                                  {voteValue === 'yes'
                                    ? 'Thanks - glad it helped.'
                                    : 'Sorry it didn’t. '}
                                  {voteValue === 'no' && (
                                    <a onClick={scrollToSupport}>
                                      Tell support below
                                    </a>
                                  )}
                                  {voteValue === 'no' &&
                                    ' - they answer every message.'}
                                </span>
                              ) : (
                                <>
                                  <span>Was this helpful?</span>
                                  <button
                                    type="button"
                                    onClick={() => vote(it.id, 'yes')}
                                  >
                                    Yes
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => vote(it.id, 'no')}
                                  >
                                    No
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>

        {/* ============ SUPPORT ============ */}
        <section aria-labelledby="supportH" ref={supportRef}>
          <div className="support">
            <div className="support-info">
              <h2 id="supportH">Still stuck?</h2>
              <p>Two ways to get help.</p>
              <ol>
                <li>In the app: <b>Help / Support</b> → <b>Contact support</b></li>
                <li>Say what you expected vs what happened — we see your app version and settings.</li>
              </ol>
              <p style={{ marginTop: '14px' }}>
                Or write it here — the button prepares a block for the app.
              </p>

              <div className="assistant-box">
                <b>Want an answer now?</b>
                <p style={{ margin: '4px 0 8px' }}>
                  <b>Help / Support → Ask the assistant</b>. AI answers, day or night — falls back to a human if needed.
                </p>
                <a onClick={focusSearch}>Search these answers →</a>
              </div>
            </div>

            <form className="support-form" onSubmit={compose}>
              <div className="field">
                <label htmlFor="sfName">Your name</label>
                <input
                  id="sfName"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. example"
                />
              </div>

              <div className="field">
                <label htmlFor="sfEmail">Your email</label>
                <input
                  id="sfEmail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="@example.com"
                />
              </div>

              <div className="field">
                <label htmlFor="sfTopic">Topic?</label>
                <select id="sfTopic" name="topic" defaultValue="Reminders">
                  {[
                    'Reminders',
                    'Missed dose',
                    'Schedules',
                    'Refills & stock',
                    'Family & caregivers',
                    'Subscription & billing',
                    'Privacy & my data',
                    'Something else',
                  ].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="sfMsg">Your question</label>
                <textarea
                  id="sfMsg"
                  name="message"
                  placeholder="Write your question here."
                />
              </div>

              <button type="submit" className="compose-btn">
                Prepare message
              </button>

              <div className={`composed ${composed ? 'show' : ''}`}>
                <label htmlFor="composedText">Ready to send</label>
                <textarea id="composedText" ref={copiedRef} readOnly value={composed} />
                <div className="copy-row">
                  <button type="button" className="copy-btn" onClick={copy}>
                    Copy message
                  </button>
                  <span className="copy-note">{copyNote}</span>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* ============ FOOTER DISCLAIMER ============ */}
      <div className="faq-footnote">
        <div className="wrap">
          <div
            className="disclaimer"
            dangerouslySetInnerHTML={{ __html: DISCLAIMER_HTML }}
          />
          <p
            className="foot-note"
            dangerouslySetInnerHTML={{ __html: FOOT_NOTE_HTML }}
          />
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
}
