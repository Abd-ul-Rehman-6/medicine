import { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ARTICLES,
  CORNERSTONE,
  LATEST,
  FILTERS,
  HERO_IMG,
  CAREGIVER_IMG,
} from '../data/dailyDoseData';
import '../styles/DailyDose.css';

const PAGE_TITLE =
  'The Daily Dose - Medication guides that end in action | Medicine Reminder App';

const PAGE_DESCRIPTION =
  'Short medication guides in plain language: missed doses, timing, food, side effects, refills and caregiving. Read it, then set it up in the app.';

/* ---------------- helpers ---------------- */

function fmt(mins) {
  const m = ((mins % 1440) + 1440) % 1440;
  const h = Math.floor(m / 60);
  const mm = m % 60;
  const ap = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mm < 10 ? '0' : ''}${mm} ${ap}`;
}

function dateStr(base, offset) {
  const d = new Date(base.getTime() + offset * 86400000);
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

const STAGES = [
  {
    key: 'starting',
    num: '1',
    title: 'The first week',
    text: 'New prescription, new routine. Build the habit before motivation runs out.',
  },
  {
    key: 'routine',
    num: '2',
    title: 'Routine is set',
    text: 'Now protect it: streaks, adherence, and readings that show it is working.',
  },
  {
    key: 'hard-days',
    num: '3',
    title: 'The hard days',
    text: 'Travel, illness, fasting, broken sleep. The days routines usually collapse.',
  },
  {
    key: 'caregiving',
    num: '4',
    title: 'For someone you love',
    text: "A parent's pills, a child's dose. Managing medicine that is not yours.",
  },
];

const CARE_LIST = [
  { id: 'care-alerts', title: 'The alert that replaces the daily "Did you take it?" call', min: 4 },
  { id: 'care-report', title: "Walking into the doctor's office with a report, not a guess", min: 3 },
  { id: 'care-senior', title: 'Senior Mode: bigger text, fewer taps, calmer reminders', min: 3 },
];

/* ---------------- page ---------------- */

export default function DailyDose() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [stageFilter, setStageFilter] = useState(null);
  const [openId, setOpenId] = useState(null);

  // tools
  const [mdSchedule, setMdSchedule] = useState('once');
  const [mdLate, setMdLate] = useState('1');
  const [mdResult, setMdResult] = useState(null);
  const [tcWake, setTcWake] = useState('07:00');
  const [tcBed, setTcBed] = useState('23:00');
  const [tcDoses, setTcDoses] = useState('3');
  const [tcResult, setTcResult] = useState(null);
  const [rcLeft, setRcLeft] = useState('14');
  const [rcPerDay, setRcPerDay] = useState('2');
  const [rcResult, setRcResult] = useState(null);

  const readerRef = useRef(null);
  const lastFocus = useRef(null);

  const closeArticle = () => {
    setOpenId(null);
    if (readerRef.current) readerRef.current.scrollTop = 0;
    if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
  };

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

  /* reader: escape key + scroll lock */
  useEffect(() => {
    if (!openId) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeArticle();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openId]);

  /* ---------------- guide filtering ---------------- */
  const visibleIds = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    const pool = stageFilter
      ? Object.keys(ARTICLES)
      : term
        ? Object.keys(ARTICLES)
        : CORNERSTONE;

    return pool.filter((id) => {
      const a = ARTICLES[id];
      if (activeFilter !== 'all' && a.cat !== activeFilter) return false;
      if (stageFilter && !a.stage.includes(stageFilter)) return false;
      if (term) {
        const hay = `${a.title} ${a.summary} ${a.cat}`.toLowerCase();
        if (!hay.includes(term)) return false;
      }
      return true;
    });
  }, [searchTerm, activeFilter, stageFilter]);

  const openArticle = (id) => {
    if (!ARTICLES[id]) return;
    lastFocus.current = document.activeElement;
    setOpenId(id);
  };

  const article = openId ? ARTICLES[openId] : null;

  const scrollToGuides = () => {
    const el = document.getElementById('guides');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const clearFilters = () => {
    setActiveFilter('all');
    setSearchTerm('');
    setStageFilter(null);
  };

  /* ---------------- tool 1: missed dose checker ---------------- */
  const runMissedDose = () => {
    const late = parseInt(mdLate, 10);
    let verdict;
    let text;
    let cls = '';

    if (mdSchedule === 'prn') {
      verdict = 'Nothing to catch up on.';
      text =
        'As-needed (PRN) medicine has no schedule to miss. Take it when the symptom it treats shows up, and respect the maximum per day on the label.';
    } else if (mdSchedule === 'weekly') {
      if (late <= 3) {
        verdict = 'Take it today.';
        text =
          'A weekly dose remembered within a day or two is normally taken when remembered - then either keep the original day or adopt today as the new day. Pick one and stay consistent.';
      } else {
        verdict = 'Take it now, and reset the day.';
        text =
          'At 12+ hours late on a weekly medicine, take it when remembered and let today become your new weekly day - unless your label says otherwise.';
        cls = 'warn';
      }
    } else if (late === 1) {
      verdict = 'Take it now.';
      text =
        "You're well inside the usual window. Take the missed dose, then carry on with your normal schedule - nothing else changes.";
    } else if (late === 2) {
      verdict = 'Take it now, in most cases.';
      text =
        'For once- and twice-daily medicines, a few hours late is normally still fine to take. Continue the next dose at its usual time - don\'t shift the whole day.';
    } else if (late === 3) {
      verdict = 'Borderline - check the gap to the next dose.';
      text =
        'If the next dose is still several hours away, taking it is the usual advice. If the next dose is due within a couple of hours, skip the missed one instead. Never take both together.';
      cls = 'warn';
    } else {
      verdict = 'Skip it. Take the next dose on time.';
      text =
        "A full interval has passed, so the missed dose is gone - and that's okay. Do not double up. Do note it in your log: one miss is an accident, a weekly pattern is a schedule problem worth fixing.";
      cls = 'warn';
    }

    setMdResult({
      verdict,
      text,
      cls,
      fine:
        'General guidance for common everyday medicines. Time-critical medicines (blood thinners, insulin, anti-seizure, transplant, birth control) follow stricter label rules - when unsure, one call to your pharmacist settles it.',
    });
  };

  /* ---------------- tool 2: timing calculator ---------------- */
  const runTiming = () => {
    const wake = tcWake || '07:00';
    const bed = tcBed || '23:00';
    const n = parseInt(tcDoses, 10);

    let w = parseInt(wake.split(':')[0], 10) * 60 + parseInt(wake.split(':')[1], 10);
    let b = parseInt(bed.split(':')[0], 10) * 60 + parseInt(bed.split(':')[1], 10);
    if (b <= w) b += 1440;

    const span = b - w;
    const times = [];
    for (let i = 0; i < n; i += 1) {
      times.push(fmt(w + Math.round((span * i) / (n - 1))));
    }
    const gap = Math.round((span / (n - 1) / 60) * 10) / 10;

    setTcResult({
      times,
      gap,
      fine: `Doses are spaced about ${gap} hours apart across your day - no 3 a.m. alarm. This fits a label that says "${n} times a day". If your label says "every ${Math.round(
        24 / n
      )} hours", follow the label instead - and if the two conflict, ask your pharmacist which one wins.`,
    });
  };

  /* ---------------- tool 3: refill countdown ---------------- */
  const runRefill = () => {
    const left = parseInt(rcLeft, 10);
    const per = parseInt(rcPerDay, 10);

    if (Number.isNaN(left) || Number.isNaN(per) || per < 1 || left < 0) {
      setRcResult({
        verdict: 'Check those numbers.',
        text: 'Enter the pills left (0 or more) and how many you take per day.',
        cls: 'stop',
        fine: '',
      });
      return;
    }

    const days = Math.floor(left / per);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let verdict;
    let text;
    let cls = '';

    if (days <= 0) {
      verdict = 'You are at the end of this bottle.';
      text =
        "Today's doses use what is left. Order the refill now - and if a dose will be missed before it arrives, tell the pharmacy; they often have an emergency-supply option.";
      cls = 'stop';
    } else if (days < 7) {
      verdict = `Reorder today - you have ${days} ${days === 1 ? 'day' : 'days'} left.`;
      text = `You run out around <b>${dateStr(today, days)}</b>. You're inside the 7-day buffer, so order today rather than this week.`;
      cls = 'warn';
    } else {
      verdict = `${days} days of medicine left.`;
      text = `You run out around <b>${dateStr(today, days)}</b>. Put the reorder on <b>${dateStr(
        today,
        days - 7
      )}</b> - seven days before empty survives pharmacy delays, renewal waits, and weekends.`;
    }

    setRcResult({
      verdict,
      text,
      cls,
      fine: 'Counting actual pills, not the label date - dropped and split tablets make paper math lie.',
    });
  };

  /* ---------------- render ---------------- */
  return (
    <>
      <div className="dd-page">
      <Navbar />

      <main id="home">
        {/* ============ HERO ============ */}
        <div className="wrap hero">
          <div className="hero-grid">
            <div>
              
              <h1>
                The Daily <em>Dose</em>
              </h1>
              <p className="sub">
                Plain-language medication guides that get you moving.
              </p>

              <form
                className="searchbar"
                id="searchForm"
                role="search"
                onSubmit={(e) => {
                  e.preventDefault();
                  scrollToGuides();
                }}
              >
                <input
                  type="search"
                  id="searchInput"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={'Search a question - try "missed a dose"'}
                  aria-label="Search guides"
                />
                <button type="submit">Search guides</button>
              </form>

              <div className="hero-meta">
                <span>
                  <b>6</b> cornerstone guides
                </span>
                <span>
                  <b>3</b> working tools
                </span>
                <span>
                  <b>Weekly</b> new guides &amp; checklists
                </span>
              </div>
            </div>

            <figure className="hero-photo" style={{ margin: 0 }}>
              <img
                src={HERO_IMG}
                alt="A woman at home holding her daily pills in one hand and a glass of water in the other"
              />
              <figcaption>
                <b>Read it, then do it.</b> Every guide below finishes with the
                matching tool or app feature - reminders with Taken / Snooze /
                Skip, refill alerts, caregiver alerts.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* ============ TOOLS ============ */}
        <section id="tools" aria-labelledby="tools-h">
          <div className="wrap">
            <div className="sec-head">
              
              <h2 id="tools-h">Get an answer, not a reading list</h2>
              <p className="lede">
                Three tools for the three moments you check this blog.
              </p>
            </div>

            <div className="tools">
              {/* Missed dose checker */}
              <div className="tool" id="tool-missed">
                <div className="tool-icon" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="13" r="8" />
                    <path d="M12 9v4l2.5 2.5M9 2h6" />
                  </svg>
                </div>
                <h3>Missed Dose Checker</h3>
                <p>
                  Answer two questions and get the usual next step for most
                  everyday medicines.
                </p>

                <div>
                  <label htmlFor="md-schedule">How often do you take it?</label>
                  <select
                    id="md-schedule"
                    value={mdSchedule}
                    onChange={(e) => setMdSchedule(e.target.value)}
                  >
                    <option value="once">Once a day</option>
                    <option value="twice">Twice a day</option>
                    <option value="thrice">Three or more times a day</option>
                    <option value="weekly">Once a week</option>
                    <option value="prn">Only when needed (PRN)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="md-late">How long ago was it due?</label>
                  <select
                    id="md-late"
                    value={mdLate}
                    onChange={(e) => setMdLate(e.target.value)}
                  >
                    <option value="1">Under 2 hours</option>
                    <option value="2">2-6 hours</option>
                    <option value="3">6-12 hours</option>
                    <option value="4">More than 12 hours / a full day</option>
                  </select>
                </div>

                <button
                  className="go"
                  id="md-go"
                  type="button"
                  onClick={runMissedDose}
                >
                  Check what to do
                </button>

                <div
                  className={`result ${mdResult ? `show ${mdResult.cls}` : ''}`}
                  id="md-result"
                  role="status"
                  dangerouslySetInnerHTML={
                    mdResult
                      ? {
                          __html: `<b class="verdict">${mdResult.verdict}</b>${mdResult.text}<span class="fineprint">${mdResult.fine}</span>`,
                        }
                      : { __html: '' }
                  }
                />
              </div>

              {/* Timing calculator */}
              <div className="tool" id="tool-timing">
                <div className="tool-icon" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                  </svg>
                </div>
                <h3>Dose Timing Calculator</h3>
                <p>
                  "3 times a day" rarely means every 8 hours while you sleep.
                  Build a schedule around your real day.
                </p>

                <div>
                  <label htmlFor="tc-wake">You wake up at</label>
                  <input
                    type="time"
                    id="tc-wake"
                    value={tcWake}
                    onChange={(e) => setTcWake(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="tc-doses">Doses per day</label>
                  <select
                    id="tc-doses"
                    value={tcDoses}
                    onChange={(e) => setTcDoses(e.target.value)}
                  >
                    <option value="2">2 times a day</option>
                    <option value="3">3 times a day</option>
                    <option value="4">4 times a day</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="tc-bed">You go to bed at</label>
                  <input
                    type="time"
                    id="tc-bed"
                    value={tcBed}
                    onChange={(e) => setTcBed(e.target.value)}
                  />
                </div>

                <button className="go" id="tc-go" type="button" onClick={runTiming}>
                  Build my schedule
                </button>

                <div
                  className={`result ${tcResult ? 'show' : ''}`}
                  id="tc-result"
                  role="status"
                  dangerouslySetInnerHTML={
                    tcResult
                      ? {
                          __html: `<b class="verdict">Your waking-hours schedule</b><span class="sched">${tcResult.times
                            .map((t) => `<span>${t}</span>`)
                            .join('')}</span><span class="fineprint">${tcResult.fine}</span>`,
                        }
                      : { __html: '' }
                  }
                />
              </div>

              {/* Refill countdown */}
              <div className="tool" id="tool-refill">
                <div className="tool-icon" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.5 3.5 20 13a4.95 4.95 0 0 1-7 7L3.5 10.5a4.95 4.95 0 0 1 7-7Z" />
                    <path d="m7 10 7 7M8.5 6.5l2 2" />
                  </svg>
                </div>
                <h3>Refill Countdown</h3>
                <p>
                  Count the pills left in the bottle. We will tell you the day
                  you run out - and the day to actually reorder.
                </p>

                <div>
                  <label htmlFor="rc-left">Pills left in the bottle</label>
                  <input
                    type="number"
                    id="rc-left"
                    min="0"
                    max="999"
                    value={rcLeft}
                    onChange={(e) => setRcLeft(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="rc-perday">Pills you take per day</label>
                  <input
                    type="number"
                    id="rc-perday"
                    min="1"
                    max="20"
                    value={rcPerDay}
                    onChange={(e) => setRcPerDay(e.target.value)}
                  />
                </div>

                <button className="go" id="rc-go" type="button" onClick={runRefill}>
                  Count it down
                </button>

                <div
                  className={`result ${rcResult ? `show ${rcResult.cls}` : ''}`}
                  id="rc-result"
                  role="status"
                  dangerouslySetInnerHTML={
                    rcResult
                      ? {
                          __html: `<b class="verdict">${rcResult.verdict}</b>${rcResult.text}<span class="fineprint">${rcResult.fine}</span>`,
                        }
                      : { __html: '' }
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ GUIDES ============ */}
        <section id="guides" aria-labelledby="guides-h">
          <div className="wrap">
            <div className="sec-head">
              
              <h2 id="guides-h">Six guides that cover almost everything</h2>
              <p className="lede">
                Six cornerstone guides, each ending in the tool that solves it.
              </p>
            </div>

            <div
              className="chips"
              id="chips"
              role="group"
              aria-label="Filter guides by topic"
            >
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  className="chip"
                  aria-pressed={activeFilter === f.key}
                  onClick={() => {
                    setActiveFilter(f.key);
                    setStageFilter(null);
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="guides" id="guideGrid">
              {visibleIds.map((id) => {
                const a = ARTICLES[id];
                return (
                  <button
                    key={id}
                    className="card"
                    type="button"
                    onClick={() => openArticle(id)}
                  >
                    <img src={a.img} alt={a.alt} loading="lazy" />
                    <span className="body">
                      <span className="cat">{a.cat}</span>
                      <h3>{a.title}</h3>
                      <p>{a.summary}</p>
                      <span className="meta">
                        <span>
                          {a.min} min read · {a.date}
                        </span>
                        <span className="read">Read guide →</span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className={`no-results ${visibleIds.length === 0 ? 'show' : ''}`}>
              <p style={{ margin: '0 0 10px' }}>
                <b>No guide matches that yet.</b> Try &quot;missed&quot;,
                &quot;food&quot;, &quot;travel&quot; or &quot;refill&quot; - or browse
                everything.
              </p>
              <button className="chip" id="clearFilter" type="button" onClick={clearFilters}>
                Show all guides
              </button>
            </div>
          </div>
        </section>

        {/* ============ JOURNEY ============ */}
        <section id="journey" aria-labelledby="journey-h">
          <div className="wrap">
            <div className="sec-head">
             
              <h2 id="journey-h">Your routine has stages. So does this blog.</h2>
              <p className="lede">
                Pick the stage you are in - the guides reshuffle to match.
              </p>
            </div>

            <div className="journey">
              {STAGES.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  className={`stage ${stageFilter === s.key ? 'active' : ''}`}
                  onClick={() => {
                    setStageFilter(stageFilter === s.key ? null : s.key);
                    setActiveFilter('all');
                    scrollToGuides();
                  }}
                >
                  <span className="num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CAREGIVER SERIES ============ */}
        <section id="caregiver" aria-labelledby="caregiver-h">
          <div className="wrap">
            <div className="sec-head">
              
              <h2 id="caregiver-h">The Caregiver Series</h2>
            </div>

            <div className="caregiver">
              <img
                src={CAREGIVER_IMG}
                alt="A daughter helping her mother sort prescription bottles and a weekly pill organizer at the kitchen table"
              />
              <div className="inner">
                <p className="lede">
                  For readers managing someone else&rsquo;s medicine - a parent,
                  a partner, a child. Short, practical, and honest about the
                  hard parts: reminders that feel like nagging, 2 a.m. worries,
                  and being the memory at the doctor&rsquo;s.
                </p>
                <ul>
                  {CARE_LIST.map((c) => (
                    <li key={c.id}>
                      <button type="button" onClick={() => openArticle(c.id)}>
                        <b>{c.title}</b>
                        <span>Read · {c.min} min</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ LATEST ============ */}
        <section id="latest" aria-labelledby="latest-h">
          <div className="wrap">
            <div className="sec-head">
              
              <h2 id="latest-h">Latest from The Daily Dose</h2>
              <p className="lede">
                One question, one answer, one thing to do. New guides land every
                week.
              </p>
            </div>

            <div className="latest" id="latestList">
              {LATEST.map((id, i) => {
                const a = ARTICLES[id];
                return (
                  <button key={id} type="button" onClick={() => openArticle(id)}>
                    <span className="n">{i + 1}</span>
                    <span className="t">
                      <b>{a.title}</b>
                      <span>
                        {a.cat} · {a.min} min · {a.date}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ APP BAND ============ */}
        <div className="wrap">
          <div className="appband">
            <div>
              <h2>Every guide ends in the app</h2>
              <p>
                The Daily Dose is the reading half. The Medicine Reminder App is
                the doing half - the same green, the same plain language, on
                your home screen.
              </p>
            </div>
            <div className="feats">
              <div>
                Never Miss a Dose
                <small>
                  Reminders with Taken / Snooze / Skip - and a follow-up nudge if
                  a dose goes unconfirmed.
                </small>
              </div>
              <div>
                Track Every Dose
                <small>
                  Adherence calendar, streaks, refill alerts, and a PDF report
                  for your doctor.
                </small>
              </div>
              <div>
                Caregiver alerts
                <small>
                  Family Pro lets someone you trust know when a dose is missed.
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="dd-footnote">
          <div className="wrap">
            <p className="disc">
              <b>Please read:</b> The Daily Dose offers general information about
              managing medication routines. It is not medical advice and does
              not replace your doctor or pharmacist. Never change, skip, or
              double a dose based on a blog post - when a guide and your
              prescription disagree, your prescription wins, and a pharmacist is
              one phone call away.
            </p>
            <p style={{ marginTop: '14px' }}>
              The Daily Dose — A Medicine Reminder App publication — Guides
              reviewed for plain language and accuracy before publishing.
            </p>
          </div>
        </div>
      </main>

      {/* ============ ARTICLE READER ============ */}
      <div
        className={`reader-backdrop ${article ? 'open' : ''}`}
        id="readerBackdrop"
        onClick={closeArticle}
        aria-hidden="true"
      />
      <div
        className={`reader ${article ? 'open' : ''}`}
        id="reader"
        role="dialog"
        aria-modal="true"
        aria-labelledby="artTitle"
        ref={readerRef}
      >
        {article && (
          <div className="reader-panel">
            <button
              type="button"
              className="reader-close"
              onClick={closeArticle}
              aria-label="Close guide"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <article className="article">
              <span className="cat" id="artCat">
                {article.cat}
              </span>
              <h1 id="artTitle">{article.title}</h1>
              <p className="byline" id="artMeta">
                {article.min} min read · {article.date} · Reviewed for plain
                language and accuracy
              </p>

              <img
                className="hero-img"
                id="artImg"
                src={article.img}
                alt={article.alt}
              />

              <div className="takeaway">
                <b>Key takeaway</b>
                <span id="artTakeaway">{article.takeaway}</span>
              </div>

              <div
                className="content"
                id="artBody"
                dangerouslySetInnerHTML={{ __html: article.body }}
              />

              <div className="do-box">
                <b className="head">Do it in the app</b>
                <p id="artDo">{article.doIt}</p>
              </div>

              <div className="related" id="artRelated">
                {article.related && article.related.length > 0 && (
                  <>
                    <h3>Keep going</h3>
                    {article.related.map((rid) => (
                      <button
                        key={rid}
                        type="button"
                        onClick={() => openArticle(rid)}
                      >
                        {ARTICLES[rid].title} →
                      </button>
                    ))}
                  </>
                )}
              </div>

              <p className="disc">
                General information only - not medical advice. If anything here
                conflicts with your prescription label or your doctor&apos;s
                instructions, follow those and ask your pharmacist.
              </p>
            </article>
          </div>
        )}
      </div>
      </div>

      <Footer />
    </>
  );
}
