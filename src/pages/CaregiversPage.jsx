import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  HERO_IMG,
  SENIOR_IMG,
  HEADINGS,
  HERO,
  HERO_CTA,
  ALERT_CHIP,
  WORRIES,
  DEMO,
  DEMO_ALERT,
  DEMO_META,
  PROFILES,
  PERM_NOTE,
  PERMISSIONS,
  SENIOR,
  SENIOR_TEXT,
  MORE,
  STEPS,
  PLAN,
  FAQS,
  FOOTER_DISC,
  FOOTER_PHOTO,
} from '../data/caregiversData';
import '../styles/CaregiversPage.css';

const ENTITIES = {
  '&ldquo;': '\u201C',
  '&rdquo;': '\u201D',
  '&lsquo;': '\u2018',
  '&rsquo;': '\u2019',
  '&mdash;': '\u2014',
  '&ndash;': '\u2013',
  '&hellip;': '\u2026',
  '&middot;': '\u00B7',
  '&rarr;': '\u2192',
  '&amp;': '&',
};

const dec = (s) =>
  String(s === undefined || s === null ? '' : s).replace(
    /&[a-z]+;/g,
    (m) => ENTITIES[m] || m
  );

const DOT_CHECK = (
  <Check size={12} strokeWidth={3.4} aria-hidden="true" />
);

const PERM_TABS = [
  { key: 'view', label: 'View only' },
  { key: 'help', label: 'Help with doses' },
  { key: 'manage', label: 'Full manager' },
];

export default function CaregiversPage() {
  const [demo, setDemo] = useState({
    status: DEMO_META.status,
    statusCls: '',
    done: [true, false, false],
    todayDot: '',
    weekCount: '4 of 5 taken',
    careAlert: false,
    nudgeNote: '',
    actions: true,
    ffwd: false,
  });

  const [perm, setPerm] = useState('view');
  const [senior, setSenior] = useState(true);
  const [mpText, setMpText] = useState('Taken \u2713');

  useEffect(() => {
    document.title = 'For Caregivers - Medicine Reminder App';
    window.scrollTo(0, 0);
  }, []);

  const markDone = (i) =>
    setDemo((d) => {
      const done = [...d.done];
      done[i] = true;
      return { ...d, done };
    });

  const onTaken = () =>
    setDemo((d) => ({
      ...d,
      actions: false,
      ffwd: true,
      status: 'Taken at 8:04 - confirmed.',
      statusCls: 'ok',
      todayDot: 'done',
      weekCount: '5 of 5 taken',
      nudgeNote: '',
    }));

  const onSnooze = () => {
    markDone(1);
    setDemo((d) => ({
      ...d,
      status: "Snoozed - she'll be reminded again in 10 minutes.",
      statusCls: 'warn',
    }));
  };

  const onSkip = () =>
    setDemo((d) => ({
      ...d,
      actions: false,
      ffwd: true,
      status: "Skipped - logged, and you'll see it in her day view.",
      statusCls: 'bad',
      todayDot: 'missed',
      weekCount: '4 of 5 taken \u00b7 1 skipped',
    }));

  const onFfwd = () => {
    setDemo((d) => {
      const done = [...d.done];
      done[1] = true;
      done[2] = true;
      return {
        ...d,
        done,
        actions: false,
        ffwd: true,
        status: 'No reply by 8:15 - the alert has gone to you.',
        statusCls: 'bad',
        careAlert: true,
        todayDot: 'missed',
        weekCount: '4 of 5 taken \u00b7 1 unconfirmed',
      };
    });
  };

  const onReset = () =>
    setDemo({
      status: DEMO_META.status,
      statusCls: '',
      done: [true, false, false],
      todayDot: '',
      weekCount: '4 of 5 taken',
      careAlert: false,
      nudgeNote: '',
      actions: true,
      ffwd: false,
    });

  const onNudge = () =>
    setDemo((d) => ({ ...d, nudgeNote: "Nudge sent to Mum's phone." }));

  const onCallNote = () =>
    setDemo((d) => ({
      ...d,
      nudgeNote:
        "Noted - alert closed, and the check is saved in her record.",
      careAlert: false,
      todayDot: 'done',
      weekCount: '5 of 5 accounted for',
    }));

  const permData = PERMISSIONS[perm];

  return (
    <>
      <div className="cg-page">
      <Navbar />

      <main>
        {/* ============ HERO ============ */}
        <div className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1 dangerouslySetInnerHTML={{ __html: HERO.h1 }} />
              <p className="lede">{dec(HERO.lede)}</p>

              <div className="cta-row">
                <a className="btn btn-primary" href="#demo">
                  {dec(HERO_CTA.primary)}
                </a>
                <a className="btn btn-ghost" href="#setup">
                  {dec(HERO_CTA.ghost)}
                </a>
              </div>

              <ul className="facts">
                {HERO.facts.map((f, i) => (
                  <li key={i}>
                    <span
                      className="fact-ic"
                      dangerouslySetInnerHTML={{ __html: f.icon }}
                    />
                    {dec(f.text)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-photo">
              <img src={HERO_IMG} alt="A mother and daughter reviewing medication at home" />
              <div className="alert-chip" role="note">
                <span
                  className="bell"
                  dangerouslySetInnerHTML={{ __html: ALERT_CHIP.icon }}
                />
                <span>
                  <strong>{dec(ALERT_CHIP.title)}</strong>
                  <span>{dec(ALERT_CHIP.text)}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============ WORRIES ============ */}
        <section aria-labelledby="worries-h">
          <div className="wrap">
            <div className="sec-head">
            <h2 id="worries-h">{dec(HEADINGS['worries-h'].title)}</h2>
          </div>

            <div className="worry">
              {WORRIES.map((w, i) => (
                <div className="worry-row" key={i}>
                  <div className="q">{dec(w.q)}</div>
                  <div
                    className="arrow"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: w.arrow }}
                  />
                  <div className="a">{dec(w.a)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DEMO ============ */}
        <section id="demo" aria-labelledby="demo-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="demo-h">{dec(HEADINGS['demo-h'].title)}</h2>
              <p>{dec(HEADINGS['demo-h'].sub)}</p>
            </div>

            <div className="demo-shell">
              <div>
                <div className="cg-phone" aria-label="Demo of the reminder on Mum's phone">
                  <div className="who">
                    <span className="avatar" aria-hidden="true">
                      M
                    </span>
                    <span>
                      <strong>{dec(DEMO_META.phoneName)}</strong>
                      <span>{dec(DEMO_META.phoneSub)}</span>
                    </span>
                  </div>

                  <div className="cg-notif">
                    <div className="time">{dec(DEMO_META.notifTime)}</div>
                    <div className="med">{dec(DEMO_META.notifMed)}</div>
                    <div className="dose">{dec(DEMO_META.notifDose)}</div>
                    <div className="dose-actions">
                      <button
                        type="button"
                        className="taken"
                        onClick={onTaken}
                        disabled={!demo.actions}
                      >
                        Taken
                      </button>
                      <button
                        type="button"
                        onClick={onSnooze}
                        disabled={!demo.actions}
                      >
                        Snooze
                      </button>
                      <button
                        type="button"
                        onClick={onSkip}
                        disabled={!demo.actions}
                      >
                        Skip
                      </button>
                    </div>
                  </div>

                  <p
                    className={`phone-status ${demo.statusCls}`}
                    role="status"
                  >
                    {dec(demo.status)}
                  </p>

                  <button
                    type="button"
                    className="ffwd"
                    onClick={onFfwd}
                    disabled={demo.ffwd}
                  >
                    {dec(DEMO_META.ffwd)}
                  </button>
                </div>
              </div>

              <div className="care-panel">
                <h3>{dec(DEMO_META.careTitle)}</h3>
                <p className="sub">{dec(DEMO_META.careSub)}</p>

                <ol className="timeline">
                  {DEMO.timeline.map((t, i) => (
                    <li
                      key={i}
                      className={`${i === 2 ? 'alert-step' : ''} ${
                        demo.done[i] ? 'done' : ''
                      }`}
                    >
                      <span className="t">{dec(t.t)}</span>
                      <span className="dotc" aria-hidden="true">
                        {demo.done[i] ? DOT_CHECK : null}
                      </span>
                      <span>{dec(t.text)}</span>
                    </li>
                  ))}
                </ol>

                <div
                  className={`care-alert ${demo.careAlert ? 'show' : ''}`}
                  role="alert"
                >
                  <strong>{dec(DEMO_ALERT.title)}</strong>
                  <p>{dec(DEMO_ALERT.text)}</p>
                  <div className="row">
                    <button
                      type="button"
                      className="solid"
                      onClick={onNudge}
                    >
                      {dec(DEMO_ALERT.nudge)}
                    </button>
                    <button type="button" onClick={onCallNote}>
                      {dec(DEMO_ALERT.checked)}
                    </button>
                  </div>
                  <p className="nudge-note" role="status">
                    {dec(demo.nudgeNote)}
                  </p>
                </div>

                <div className="week" aria-label="Mum's week so far">
                  <span className="week-label">
                    {dec(DEMO.weekLabel)}{' '}
                    <b>{dec(demo.weekCount)}</b>
                  </span>
                  {DEMO.week.map((d, i) => {
                    const cls =
                      i === 4 ? `d ${demo.todayDot || d.cls}` : `d ${d.cls}`;
                    return (
                      <span className={cls} key={i}>
                        {d.letter}
                      </span>
                    );
                  })}
                </div>

                <button type="button" className="demo-reset" onClick={onReset}>
                  {dec(DEMO_META.reset)}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAMILY PROFILES ============ */}
        <section id="family" aria-labelledby="family-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="family-h">{dec(HEADINGS['family-h'].title)}</h2>
              <p>{dec(HEADINGS['family-h'].sub)}</p>
            </div>

            <div className="profiles">
              {PROFILES.map((p, i) =>
                p.add ? (
                  <div className="profile add" key={i}>
                    <strong>{dec(p.title)}</strong>
                    <span>{dec(p.text)}</span>
                    <span className="chip ok">{dec(p.chip)}</span>
                  </div>
                ) : (
                  <article className="profile" key={i}>
                    <div className="who">
                      <span className="avatar" aria-hidden="true">
                        {dec(p.avatar)}
                      </span>
                      <span>
                        <strong>{dec(p.name)}</strong>
                        <span>{dec(p.sub)}</span>
                      </span>
                    </div>
                    <div className="stat">
                      <span>{dec(p.stat1)}</span>
                      <b>{dec(p.stat1v)}</b>
                    </div>
                    <div className="bar" aria-hidden="true">
                      <i style={{ width: p.bar }} />
                    </div>
                    <div className="stat">
                      <span>{dec(p.stat2)}</span>
                      <b>{dec(p.stat2v)}</b>
                    </div>
                    <span className={`chip ${p.chipCls}`}>{dec(p.chip)}</span>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* ============ PERMISSIONS ============ */}
        <section id="permissions" aria-labelledby="perm-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="perm-h">{dec(HEADINGS['perm-h'].title)}</h2>
              <p>{dec(HEADINGS['perm-h'].sub)}</p>
            </div>

            <div className="perm-shell">
              <div
                className="perm-tabs"
                role="tablist"
                aria-label="Permission levels"
              >
                {PERM_TABS.map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    role="tab"
                    aria-selected={perm === t.key}
                    onClick={() => setPerm(t.key)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <p className="perm-desc">{dec(permData.desc)}</p>

              <ul className="perm-list">
                {permData.items.map((it) => (
                  <li key={it[0]} className={it[1] ? '' : 'no'}>
                    <span className="ic">
                      {it[1] ? (
                        <Check size={18} strokeWidth={2.4} aria-hidden="true" />
                      ) : (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                      )}
                    </span>
                    <span>{dec(it[0])}</span>
                  </li>
                ))}
              </ul>

              <div className="perm-note">
                <strong>{dec(PERM_NOTE.title)}</strong>
                {dec(PERM_NOTE.text)}
              </div>
            </div>
          </div>
        </section>

        {/* ============ SENIOR MODE ============ */}
        <section aria-labelledby="senior-h">
          <div className="wrap senior-grid">
            <div>
              <img
                src={SENIOR_IMG}
                alt="A senior woman comfortably taking her medicine at home"
                loading="lazy"
              />
            </div>
            <div>
              <div className="sec-head" style={{ marginBottom: '10px' }}>
                <h2 id="senior-h">{dec(HEADINGS['senior-h'].title)}</h2>
                <p>{dec(SENIOR_TEXT)}</p>
              </div>

              <div className="mode-toggle" role="group" aria-label="Preview mode">
                <button
                  type="button"
                  aria-pressed={!senior}
                  onClick={() => setSenior(false)}
                >
                  Standard
                </button>
                <button
                  type="button"
                  aria-pressed={senior}
                  onClick={() => setSenior(true)}
                >
                  Senior Mode
                </button>
              </div>

              <div
                className={`mini-phone ${senior ? 'senior' : ''}`}
                aria-label="Preview of the reminder screen"
              >
                <div className="mp-time">8:00 AM &middot; with breakfast</div>
                <div className="mp-med">Morning tablets</div>
                <div className="mp-dose">2 medicines</div>
                <button
                  type="button"
                  className="mp-btn"
                  onClick={() => setMpText('Taken \u2713 - nice and simple')}
                >
                  {mpText}
                </button>
                <div className="mp-row">
                  <button type="button">Snooze</button>
                  <button type="button">Skip</button>
                </div>
              </div>

              <ul className="senior-points">
                {SENIOR.points.map((p, i) => (
                  <li key={i}>
                    <span
                      className="ic"
                      dangerouslySetInnerHTML={{ __html: p.icon }}
                    />
                    {dec(p.text)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============ MORE ============ */}
        <section aria-labelledby="more-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="more-h">{dec(HEADINGS['more-h'].title)}</h2>
            </div>

            <div className="more">
              {MORE.map((m, i) => (
                <div className="more-item" key={i}>
                  <span
                    className="ic"
                    dangerouslySetInnerHTML={{ __html: m.icon }}
                  />
                  <div>
                    <strong>{dec(m.title)}</strong>
                    <p>{dec(m.text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SETUP ============ */}
        <section id="setup" aria-labelledby="setup-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="setup-h">{dec(HEADINGS['setup-h'].title)}</h2>
              <p>{dec(HEADINGS['setup-h'].sub)}</p>
            </div>

            <div className="steps">
              {STEPS.map((s, i) => (
                <div className="step" key={i}>
                  <span className="num">{dec(s.num)}</span>
                  <strong>{dec(s.title)}</strong>
                  <p>{dec(s.text)}</p>
                </div>
              ))}
            </div>

            <div className="plan">
              <div>
                <h2>{dec(PLAN.title)}</h2>
                <p>{dec(PLAN.text)}</p>
                <ul>
                  {PLAN.bullets.map((b) => (
                    <li key={b}>
                      <span aria-hidden="true">&#10003;</span> {dec(b)}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="price">
                  {dec(PLAN.price.split(' / ')[0])}
                  <small> / {dec(PLAN.price.split(' / ')[1])}</small>
                </div>
                <p>{dec(PLAN.note)}</p>
                <a className="btn" href="#setup">
                  {dec(PLAN.cta)}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="faq" aria-labelledby="faq-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="faq-h">{dec(HEADINGS['faq-h'].title)}</h2>
            </div>

            {FAQS.map((f, i) => (
              <details key={i}>
                <summary>
                  {dec(f.q)}
                  <span className="plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="ans">
                  <p>{dec(f.a)}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* ============ PAGE FOOTER ============ */}
      <div className="cg-foot">
        <div className="wrap">
          <nav aria-label="Footer">
            <a href="#demo">Live demo</a>
            <a href="#family">Your family</a>
            <a href="#permissions">Permissions</a>
            <a href="#setup">Set up</a>
            <a href="#faq-h">Caregiver questions</a>
          </nav>
          <p className="disc">{dec(FOOTER_DISC)}</p>
          <p>Photo: {dec(FOOTER_PHOTO)}</p>
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
}
