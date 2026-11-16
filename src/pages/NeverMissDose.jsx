import React, { useState, useEffect, useRef } from 'react';
import { AlarmClock, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/NeverMissDose.css';

function useReveal(threshold = 0.25) {
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
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, shown];
}

export default function NeverMissDose() {
  const [smartRef, smartShown] = useReveal();
  const [escRef, escShown] = useReveal();
  const [snzRef, snzShown] = useReveal();
  const [schRef, schShown] = useReveal();
  const [wgtRef, wgtShown] = useReveal();
  const [skipRef, skipShown] = useReveal();
  const [cgRef, cgShown] = useReveal();
  const [vals, setVals] = useState({ onTime: 0, daily: 0, confirm: 0 });
  const [snoozeMins, setSnoozeMins] = useState(30);
  const [schedType, setSchedType] = useState('Daily');
  const [meal, setMeal] = useState('With meal');
  const [days, setDays] = useState([0, 2, 4]);
  const [logged, setLogged] = useState(false);
  const [skipReason, setSkipReason] = useState(null);

  const toggleDay = (i) =>
    setDays((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  useEffect(() => {
    if (!smartShown) return;
    let raf;
    let start;
    const duration = 1400;

    const timeout = setTimeout(() => {
      const tick = (now) => {
        if (start === undefined) start = now;
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVals({
          onTime: Math.round(98 * eased),
          daily: Math.round(2.4 * eased * 10) / 10,
          confirm: Math.round(91 * eased),
        });
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, 350);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [smartShown]);

  return (
    <div className="nmd-page">
      <Navbar />

      <main className="nmd-hero">
        <div className="nmd-hero-inner">
          <div className="nmd-hero-text">
           

            <h1 className="nmd-title">
              The pill reminder
              <br />
              that <span className="nmd-accent">doesn't give up</span>
            </h1>

            <p className="nmd-sub">
              Pillo starts a countdown and comes back until you confirm the
              dose.
            </p>

            <div className="nmd-cta-row">
              <a className="nmd-cta" href="#download">
                Download app
              </a>
            </div>

            <div className="nmd-trust">
              <span className="nmd-stars">★★★★★</span>
              <span className="nmd-trust-text">4.8 · more than 6k ratings</span>
            </div>
          </div>

          <div className="nmd-visual" aria-hidden="true">
            <div className="nmd-blob" />
            <span className="nmd-fpill fpill-1" />
            <span className="nmd-fpill fpill-2" />

            <div className="nmd-countdown-card">
              <div className="nmd-card-top">
                <span className="nmd-med-capsule" />
                <span className="nmd-med-info">
                  <strong>Metformin</strong>
                  <small>500 mg · 1 tablet</small>
                </span>
                <span className="nmd-med-tag">NEXT DOSE</span>
              </div>

              <div className="nmd-ring-wrap">
                <svg className="nmd-ring" viewBox="0 0 160 160">
                  <circle className="nmd-ring-bg" cx="80" cy="80" r="66" />
                  <circle
                    className="nmd-ring-fg"
                    cx="80"
                    cy="80"
                    r="66"
                    pathLength="100"
                  />
                </svg>
                <div className="nmd-ring-center">
                  <strong>12:45</strong>
                  <span>until next dose</span>
                </div>
              </div>

              <div className="nmd-card-actions">
                <button className="nmd-take" type="button">Take now</button>
                <button className="nmd-snooze" type="button">Snooze</button>
              </div>
            </div>

            <div className="nmd-chip nmd-chip-1">
              <span className="nmd-chip-ico">
                <AlarmClock size={14} />
              </span>
              Reminder · 9:00 AM
            </div>

            <div className="nmd-chip nmd-chip-2">
              <span className="nmd-chip-ico nmd-chip-ok">
                <Check size={14} strokeWidth={3} />
              </span>
              Dose confirmed
            </div>
          </div>
        </div>
      </main>

      {/* Smart Reminders — push notification section */}
      <section
        ref={smartRef}
        className={`nmd-smart ${smartShown ? 'is-visible' : ''}`}
        id="smart-reminders"
      >
        <div className="nmd-smart-inner">
          <div className="nmd-smart-head">
            <span className="nmd-eyebrow">
              <span className="nmd-eyebrow-dot" />
              Step <em>1</em>
            </span>
            <h2 className="nmd-smart-title">
              A push notification{' '}
              <span className="nmd-accent">at every dose time</span>
            </h2>
            <p className="nmd-smart-sub">
              No silent alarms, no forgotten taps — Pillo sends a push right
              when it's time, and keeps coming back until you confirm.
            </p>
          </div>

          <div className="nmd-smart-body">
            <div className="nmd-notif-stack" aria-hidden="true">
              <div className="nmd-notif">
                <span className="nmd-notif-ico">
                  <AlarmClock size={16} />
                </span>
                <span className="nmd-notif-text">
                  <strong>Time for Metformin</strong>
                  <span>500 mg · 1 tablet</span>
                </span>
                <span className="nmd-notif-time">now</span>
              </div>

              <div className="nmd-notif">
                <span className="nmd-notif-ico">
                  <AlarmClock size={16} />
                </span>
                <span className="nmd-notif-text">
                  <strong>Vitamin D · in 5 min</strong>
                  <span>1 capsule · with lunch</span>
                </span>
                <span className="nmd-notif-time">5m</span>
              </div>

              <div className="nmd-notif nmd-notif-ok">
                <span className="nmd-notif-ico">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="nmd-notif-text">
                  <strong>Dose confirmed</strong>
                  <span>Next reminder scheduled</span>
                </span>
                <span className="nmd-notif-time">✓</span>
              </div>
            </div>

            <div className="nmd-stats">
              <div className="nmd-stat">
                <strong className="nmd-stat-num">{vals.onTime}%</strong>
                <span className="nmd-stat-label">
                  Push notifications delivered on time
                </span>
              </div>
              <div className="nmd-stat">
                <strong className="nmd-stat-num">{vals.daily.toFixed(1)}M</strong>
                <span className="nmd-stat-label">Reminders sent every day</span>
              </div>
              <div className="nmd-stat">
                <strong className="nmd-stat-num">{vals.confirm}%</strong>
                <span className="nmd-stat-label">
                  Doses confirmed within 10 minutes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missed Dose Escalation */}
      <section
        ref={escRef}
        className={`nmd-feature nmd-escalate ${escShown ? 'is-visible' : ''}`}
        id="missed-dose-escalation"
      >
        <div className="nmd-feature-inner">
          <div className="nmd-feature-text">
            <span className="nmd-eyebrow">
              <span className="nmd-eyebrow-dot" />
              Step <em>2</em>
            </span>
            <h2 className="nmd-feature-title">
              10 minutes of silence?{' '}
              <span className="nmd-accent">We come back.</span>
            </h2>
            <p className="nmd-feature-sub">
              No answer within 10 minutes? Pillo escalates and sends the
              reminder again — the dose never slips through quietly.
            </p>
            <ul className="nmd-checks">
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Repeats until you confirm
              </li>
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Escalating follow-up intervals
              </li>
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Zero silent misses
              </li>
            </ul>
          </div>

          <div className="nmd-feature-visual" aria-hidden="true">
            <div className="nmd-phone">
              <span className="nmd-phone-notch" />
              <div className="nmd-phone-screen">
                <span className="nmd-phone-label">Reminders</span>
                <div className="nmd-timeline">
                  <div className="nmd-tl-step">
                    <span className="nmd-tl-dot">
                      <AlarmClock size={16} />
                    </span>
                    <span className="nmd-tl-body">
                      <strong>10:00 · Dose time</strong>
                      <span>Push sent — Metformin 500 mg</span>
                    </span>
                  </div>

                  <div className="nmd-tl-step">
                    <span className="nmd-tl-dot nmd-tl-wait">10m</span>
                    <span className="nmd-tl-body">
                      <strong>10:10 · No response</strong>
                      <span>Silence detected</span>
                    </span>
                  </div>

                  <div className="nmd-tl-step">
                    <span className="nmd-tl-dot nmd-tl-fire">
                      <AlarmClock size={16} />
                    </span>
                    <span className="nmd-tl-body">
                      <strong>Reminder repeats</strong>
                      <span>Comes back again — and again</span>
                    </span>
                  </div>

                  <span className="nmd-tl-loop">
                    ↻ Repeating every 10 min until confirmed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snooze — set any delay you like */}
      <section
        ref={snzRef}
        className={`nmd-feature nmd-snooze-sec ${snzShown ? 'is-visible' : ''}`}
        id="snooze"
      >
        <div className="nmd-feature-inner nmd-feature-reverse">
          <div className="nmd-feature-text">
            <span className="nmd-eyebrow">
              <span className="nmd-eyebrow-dot" />
              Step <em>3</em>
            </span>
            <h2 className="nmd-feature-title">
              Snooze <span className="nmd-accent">on your terms</span>
            </h2>
            <p className="nmd-feature-sub">
              Set any delay you like — choose exactly when you want the next
              nudge, from 5 minutes up to 2 hours.
            </p>
            <ul className="nmd-checks">
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Any delay from 5 min to 2 hours
              </li>
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                One tap straight from the notification
              </li>
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Smart defaults per medication
              </li>
            </ul>
          </div>

          <div className="nmd-feature-visual">
            <div className="nmd-phone">
              <span className="nmd-phone-notch" />
              <div className="nmd-phone-screen">
                <div className="nmd-snooze-card">
              <div className="nmd-card-top">
                <span className="nmd-med-capsule" />
                <span className="nmd-med-info">
                  <strong>Snooze reminder</strong>
                  <small>Metformin · 500 mg</small>
                </span>
                <span className="nmd-med-tag">SNOOZE</span>
              </div>

              <span className="nmd-snooze-label">Remind me again in</span>

              <div className="nmd-snooze-chips">
                {[10, 20, 30, 60].map((v) => (
                  <button
                    key={v}
                    type="button"
                    className={snoozeMins === v ? 'active' : ''}
                    onClick={() => setSnoozeMins(v)}
                  >
                    {v === 60 ? '1 hr' : `${v} min`}
                  </button>
                ))}
              </div>

              <div className="nmd-snooze-slider-row">
                <input
                  className="nmd-range"
                  type="range"
                  min="5"
                  max="120"
                  step="5"
                  value={snoozeMins}
                  onChange={(e) => setSnoozeMins(Number(e.target.value))}
                  aria-label="Snooze duration"
                />
                <span className="nmd-snooze-val">{snoozeMins} min</span>
              </div>

              <button className="nmd-snooze-btn" type="button">
                Snooze for {snoozeMins} minutes
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Schedule + Meal Timing — both in one section */}
      <section
        ref={schRef}
        className={`nmd-feature nmd-schedule-sec ${schShown ? 'is-visible' : ''}`}
        id="schedule"
      >
        <div className="nmd-feature-inner">
          <div className="nmd-feature-text">
            <span className="nmd-eyebrow">
              <span className="nmd-eyebrow-dot" />
              Step <em>4</em>
            </span>
            <h2 className="nmd-feature-title">
              Every schedule, <span className="nmd-accent">built right in</span>
            </h2>
            <p className="nmd-feature-sub">
              Daily, weekly, cyclical or PRN — before or after meals, Pillo
              follows every kind of schedule.
            </p>

            <div className="nmd-sched-groups">
              <div className="nmd-sched-group">
                <span className="nmd-sched-glabel">Flexible schedule</span>
                <div className="nmd-sched-gchips">
                  <span>Daily</span>
                  <span>Specific days</span>
                  <span>Cyclical</span>
                  <span>As-needed (PRN)</span>
                  <span>Tapering dose</span>
                </div>
              </div>

              <div className="nmd-sched-group">
                <span className="nmd-sched-glabel">Meal timing</span>
                <div className="nmd-sched-gchips">
                  <span>Before meal</span>
                  <span>With meal</span>
                  <span>After meal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="nmd-feature-visual">
            <div className="nmd-phone">
              <span className="nmd-phone-notch" />
              <div className="nmd-phone-screen">
                <span className="nmd-phone-label">Schedule</span>
                <div className="nmd-snooze-card nmd-sched-card">
                  <div className="nmd-card-top">
                    <span className="nmd-med-capsule" />
                    <span className="nmd-med-info">
                      <strong>Metformin</strong>
                      <small>500 mg · with meals</small>
                    </span>
                    <span className="nmd-med-tag">
                      {schedType === 'Specific days'
                        ? 'DAYS'
                        : schedType.toUpperCase()}
                    </span>
                  </div>

                  <span className="nmd-snooze-label">Repeat</span>
                  <div className="nmd-snooze-chips">
                    {['Daily', 'Specific days', 'Cyclical', 'PRN', 'Tapering'].map(
                      (v) => (
                        <button
                          key={v}
                          type="button"
                          className={schedType === v ? 'active' : ''}
                          onClick={() => setSchedType(v)}
                        >
                          {v}
                        </button>
                      )
                    )}
                  </div>

                  <span className="nmd-snooze-label">Days</span>
                  <div className="nmd-days">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`nmd-day ${days.includes(i) ? 'on' : ''}`}
                        onClick={() => toggleDay(i)}
                        aria-label={`Day ${i + 1}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>

                  <span className="nmd-snooze-label">Meal timing</span>
                  <div className="nmd-snooze-chips">
                    {['Before meal', 'With meal', 'After meal'].map((v) => (
                      <button
                        key={v}
                        type="button"
                        className={meal === v ? 'active' : ''}
                        onClick={() => setMeal(v)}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Log Widget — home/lock screen se confirm */}
      <section
        ref={wgtRef}
        className={`nmd-feature nmd-widget-sec ${wgtShown ? 'is-visible' : ''}`}
        id="quick-log"
      >
        <div className="nmd-feature-inner nmd-feature-reverse">
          <div className="nmd-feature-text">
            <span className="nmd-eyebrow">
              <span className="nmd-eyebrow-dot" />
              Step <em>5</em>
            </span>
            <h2 className="nmd-feature-title">
              Confirm <span className="nmd-accent">without opening</span> the app
            </h2>
            <p className="nmd-feature-sub">
              Confirm your dose directly from the home screen widget or lock screen — just one tap, no need to open the app.
            </p>
            <ul className="nmd-checks">
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Take / Snooze actions on the lock screen
              </li>
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Home screen widget with the next dose
              </li>
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Instant sync — confirmed in real time
              </li>
            </ul>
          </div>

          <div className="nmd-feature-visual">
            <div className="nmd-phone">
              <span className="nmd-phone-notch" />
              <div className="nmd-phone-screen nmd-lock-screen">
                <span className="nmd-lock-time">9:41</span>
                <span className="nmd-lock-date">Wednesday, 11 November</span>

                <div className="nmd-lock-notif">
                  <div className="nmd-card-top">
                    <span className="nmd-med-capsule" />
                    <span className="nmd-med-info">
                      <strong>Metformin</strong>
                      <small>500 mg · time for your dose</small>
                    </span>
                    <span className="nmd-med-tag">NOW</span>
                  </div>

                  {logged ? (
                    <div className="nmd-notif-confirmed">
                      <span className="nmd-tick">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      Dose confirmed · 9:41 AM
                    </div>
                  ) : (
                    <div className="nmd-notif-actions">
                      <button
                        className="nmd-btn-take"
                        type="button"
                        onClick={() => setLogged(true)}
                      >
                        Take now
                      </button>
                      <button className="nmd-btn-snooze" type="button">
                        Snooze
                      </button>
                    </div>
                  )}
                </div>

                <span className="nmd-lock-hint">Swipe up to unlock</span>
              </div>
            </div>

            <div className="nmd-widget-card">
              <span className="nmd-widget-label">Home widget</span>
              <div className="nmd-widget-row">
                <span className="nmd-med-capsule" />
                <span className="nmd-widget-info">
                  <strong>9:00 AM</strong>
                  <small>Metformin · 500 mg</small>
                </span>
              </div>
              <button
                className={`nmd-widget-btn ${logged ? 'done' : ''}`}
                type="button"
                disabled={logged}
                onClick={() => setLogged(true)}
              >
                {logged ? 'Confirmed ✓' : '✓ Confirm dose'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skip Reason — bhool gaya / side effect / dawa khatam */}
      <section
        ref={skipRef}
        className={`nmd-feature nmd-skip-sec ${skipShown ? 'is-visible' : ''}`}
        id="skip-reason"
      >
        <div className="nmd-feature-inner">
          <div className="nmd-feature-text">
            <span className="nmd-eyebrow">
              <span className="nmd-eyebrow-dot" />
              Step <em>6</em>
            </span>
            <h2 className="nmd-feature-title">
              Every skip <span className="nmd-accent">has a reason</span>
            </h2>
            <p className="nmd-feature-sub">
              Whether you forgot, experienced a side effect, or ran out of medicine — select a reason, and it will always be saved in your records.
            </p>
            <ul className="nmd-checks">
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                One-tap reasons — no typing needed
              </li>
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Every skip saved with its reason
              </li>
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Complete history, ready to share
              </li>
            </ul>
          </div>

          <div className="nmd-feature-visual">
            <div className="nmd-phone">
              <span className="nmd-phone-notch" />
              <div className="nmd-phone-screen">
                <span className="nmd-phone-label">Skip reason</span>
                <div className="nmd-snooze-card nmd-skip-card">
                  <div className="nmd-card-top">
                    <span className="nmd-med-capsule" />
                    <span className="nmd-med-info">
                      <strong>Metformin</strong>
                      <small>500 mg · dose skipped</small>
                    </span>
                    <span className="nmd-med-tag">SKIPPED</span>
                  </div>

                  <span className="nmd-snooze-label">Why did you skip?</span>
                  <div className="nmd-snooze-chips">
                    {['Forgot to take it', 'Side effect', 'Out of medicine'].map((v) => (
                      <button
                        key={v}
                        type="button"
                        className={skipReason === v ? 'active' : ''}
                        onClick={() => setSkipReason(v)}
                      >
                        {v}
                      </button>
                    ))}
                  </div>

                  {skipReason ? (
                    <div className="nmd-skip-saved">
                      <span className="nmd-tick">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      Saved to record · {skipReason}
                    </div>
                  ) : (
                    <p className="nmd-skip-hint">
                      Choose a reason — it will be saved in your records.
                    </p>
                  )}
                </div>

                <div className="nmd-history">
                  <span className="nmd-phone-label">History</span>
                  {skipReason && (
                    <div className="nmd-hist-row fresh">
                      <span>Wed 11</span>
                      <span className="nmd-hist-skip">
                        Skipped · {skipReason}
                      </span>
                    </div>
                  )}
                  <div className="nmd-hist-row">
                    <span>Tue 10</span>
                    <span className="nmd-hist-ok">Taken ✓</span>
                  </div>
                  <div className="nmd-hist-row">
                    <span>Mon 9</span>
                    <span className="nmd-hist-skip">Skipped · Side effect</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caregiver Alert — dose miss ho to family ko alag se alert */}
      <section
        ref={cgRef}
        className={`nmd-feature nmd-cg-sec ${cgShown ? 'is-visible' : ''}`}
        id="caregiver-alert"
      >
        <div className="nmd-feature-inner nmd-feature-reverse">
          <div className="nmd-feature-text">
            <span className="nmd-eyebrow">
              <span className="nmd-eyebrow-dot" />
              Step <em>7</em>
            </span>
            <h2 className="nmd-feature-title">
              Miss a dose, <span className="nmd-accent">family knows</span>
            </h2>
            <p className="nmd-feature-sub">
             If you miss a dose, your caregiver gets a separate alert — keeping your family informed so you’re never alone.
            </p>
            <ul className="nmd-checks">
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                A separate alert to your caregiver
              </li>
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Sent after a 30-minute grace period
              </li>
              <li>
                <span className="nmd-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Keeps nudging until someone responds
              </li>
            </ul>
          </div>

          <div className="nmd-feature-visual">
            <div className="nmd-phone">
              <span className="nmd-phone-notch" />
              <div className="nmd-phone-screen">
                <span className="nmd-phone-label">Caregiver alert</span>
                <div className="nmd-snooze-card nmd-cg-card">
                  <div className="nmd-card-top">
                    <span className="nmd-med-capsule" />
                    <span className="nmd-med-info">
                      <strong>Metformin</strong>
                      <small>500 mg · 30 min overdue</small>
                    </span>
                    <span className="nmd-med-tag">OVERDUE</span>
                  </div>

                  <span className="nmd-snooze-label">Caregiver</span>
                  <div className="nmd-cg-person">
                    <span className="nmd-cg-avatar">A</span>
                    <span className="nmd-cg-info">
                      <strong>Amma</strong>
                      <small>Primary caregiver · +92 300 1234567</small>
                    </span>
                  </div>

                  <div className="nmd-cg-flow">
                    <div className="nmd-cg-flow-head">
                      <span className="nmd-cg-auto-chip">AUTO</span>
                      <span>Automatic alert after the 30-minute grace period</span>
                    </div>
                    <div className="nmd-cg-step">
                      <span className="nmd-cg-step-dot done">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      Dose missed · 9:41 AM
                    </div>
                    <div className="nmd-cg-step">
                      <span className="nmd-cg-step-dot done">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      Grace period over · 10:11 AM
                    </div>
                    <div className="nmd-cg-step">
                      <span className="nmd-cg-step-dot auto">
                        <AlarmClock size={10} strokeWidth={2.5} />
                      </span>
                      Alert sent to Amma — automatically
                    </div>
                  </div>

                  <div className="nmd-cg-bubble">
                   Ali missed his Metformin 500 mg dose — it’s been 30 minutes.
                  </div>
                  <div className="nmd-cg-delivered">
                    <span className="nmd-tick">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    Delivered to Mom — no action needed from you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — before footer, same logo style as navbar */}

      <section className="nmd-final-cta">
        <div className="nmd-final-cta-inner">
          <div className="custom-logo-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2 className="nmd-final-cta-title">
            Your doses stay on track.
            <br />
            Your peace of mind is one tap away.
          </h2>
          <p className="nmd-final-cta-sub">
            Pillo quietly keeps every reminder, every dose and every refill in
            one place — so you never have to think twice about forgetting.
          </p>
          <a className="nmd-cta nmd-final-cta-btn" href="#download">
            Download app
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
