import { useEffect, useRef, useState } from 'react';
import {
  Search,
  ScanLine,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Plus,
  Clock,
  Check,
  Pill,
  Droplet,
  Syringe,
  ShieldCheck,
  Bell,
  Download,
  Calendar,
  SkipForward,
  ArrowUpRight,
  X,
  Phone,
  MapPin,
  ShoppingCart,
  Pencil,
  AlertCircle,
  Navigation,
  User,
  Users,
  AtSign,
  SendHorizontal,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/TrackEveryDose.css';

function useReveal(threshold = 0.25) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setShown(true);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);

    const check = () => {
      if (done) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const vis = Math.min(r.bottom, vh) - Math.max(r.top, 0);
      if (vis > 0 && vis / Math.min(r.height, vh) >= threshold) show();
    };
    const t = setTimeout(check, 1200);
    let raf = requestAnimationFrame(function loop() {
      if (done) return;
      check();
      raf = requestAnimationFrame(loop);
    });
    window.addEventListener('resize', check);
    return () => {
      io.disconnect();
      clearTimeout(t);
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', check);
    };
  }, [threshold]);

  return [ref, shown];
}

function TedSep({ first = false }) {
  const [ref, shown] = useReveal(0.5);
  return (
    <div
      ref={ref}
      className={`ted-sep ${first ? 'ted-sep-first' : ''} ${
        shown ? 'is-visible' : ''
      }`}
      aria-hidden="true"
    >
      <span className="ted-sep-line" />
      <span className="ted-sep-diamond" />
      <span className="ted-sep-line" />
    </div>
  );
}

const FILTERS = ['All', 'Morning', 'Evening', 'Low Stock'];

const MEDS = [
  {
    id: 1,
    abbr: 'Metfo',
    name: 'Metformin 500mg',
    meta: 'Tablet · 2x daily',
    next: '8:30 AM',
    nextHour: 8.5,
    stock: 12,
    daysLeft: 5,
    low: true,
  },
  {
    id: 2,
    abbr: 'Amloc',
    name: 'Amlodipine 5mg',
    meta: 'Tablet · 1x daily',
    next: '7:00 AM',
    nextHour: 7,
    stock: 28,
    daysLeft: 28,
    low: false,
  },
  {
    id: 3,
    abbr: 'Vit D3',
    name: 'Vitamin D3 Drops',
    meta: 'Liquid · 1x daily',
    next: '8:00 PM',
    nextHour: 20,
    stock: 43,
    daysLeft: 43,
    low: false,
  },
  {
    id: 4,
    abbr: 'Amoxi',
    name: 'Amoxicillin 250mg',
    meta: 'Capsule · 3x daily',
    next: '2:00 PM',
    nextHour: 14,
    stock: 18,
    daysLeft: 6,
    low: true,
  },
];

const UNITS = ['mg', 'mcg', 'ml', 'IU', '%'];

const FORMS = [
  { id: 'tablet', label: 'Tablet', icon: Pill },
  { id: 'capsule', label: 'Capsule', icon: Pill, rotate: true },
  { id: 'liquid', label: 'Liquid', icon: Droplet },
  { id: 'injection', label: 'Injection', icon: Syringe },
];

const COLORS = [
  { id: 'white', hex: '#ffffff', label: 'White' },
  { id: 'yellow', hex: '#fde68a', label: 'Yellow' },
  { id: 'pink', hex: '#fbcfe8', label: 'Pink' },
  { id: 'blue', hex: '#EAF3F3', label: 'Blue' },
  { id: 'orange', hex: '#fed7aa', label: 'Orange' },
  { id: 'coral', hex: '#fecaca', label: 'Coral' },
  { id: 'green', hex: '#22C55E', label: 'Dark green' },
];

const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const CAL_BASELINE = 17;

const CAL_STATUS = {
  3: 'partial',
  7: 'missed',
  11: 'partial',
};

function dayStatus(d) {
  if (d > CAL_BASELINE) return 'future';
  if (d === CAL_BASELINE) return 'today';
  return CAL_STATUS[d] || 'taken';
}

const CAL_DAYS = Array.from({ length: 30 }, (_, i) => i + 1);
const CAL_TRAILING = [1, 2, 3, 4, 5];

const RANGE_DATA = {
  '7 Days': {
    overall: 86,
    goal: 80,
    delta: '+4% vs prior 7 days',
    taken: 24,
    missed: 3,
    skipped: 1,
    meds: [
      { abbr: 'Metf', name: 'Metformin 500mg', pct: 80, note: '14 taken · 2 missed', freq: '2x daily' },
      { abbr: 'Amlo', name: 'Amlodipine 5mg', pct: 95, note: '7 taken · 0 missed', freq: '1x daily' },
      { abbr: 'Vit D3', name: 'Vitamin D3 Drops', pct: 90, note: '6 taken · 1 skipped', freq: 'Evening' },
      { abbr: 'Amoxi', name: 'Amoxicillin 250mg', pct: 70, note: '15 taken · 4 missed', freq: '3x daily' },
    ],
  },
  '30 Days': {
    overall: 84,
    goal: 80,
    delta: '+6% vs prior 30 days',
    taken: 98,
    missed: 13,
    skipped: 5,
    meds: [
      { abbr: 'Metf', name: 'Metformin 500mg', pct: 78, note: '54 taken · 12 missed', freq: '2x daily' },
      { abbr: 'Amlo', name: 'Amlodipine 5mg', pct: 93, note: '28 taken · 2 missed', freq: '1x daily' },
      { abbr: 'Vit D3', name: 'Vitamin D3 Drops', pct: 88, note: '24 taken · 3 skipped', freq: 'Evening' },
      { abbr: 'Amoxi', name: 'Amoxicillin 250mg', pct: 68, note: '42 taken · 15 missed', freq: '3x daily' },
    ],
  },
  '90 Days': {
    overall: 79,
    goal: 80,
    delta: '−2% vs prior 90 days',
    taken: 264,
    missed: 41,
    skipped: 18,
    meds: [
      { abbr: 'Metf', name: 'Metformin 500mg', pct: 74, note: '148 taken · 40 missed', freq: '2x daily' },
      { abbr: 'Amlo', name: 'Amlodipine 5mg', pct: 91, note: '78 taken · 9 missed', freq: '1x daily' },
      { abbr: 'Vit D3', name: 'Vitamin D3 Drops', pct: 85, note: '68 taken · 12 skipped', freq: 'Evening' },
      { abbr: 'Amoxi', name: 'Amoxicillin 250mg', pct: 62, note: '85 taken · 41 missed', freq: '3x daily' },
    ],
  },
};
const RANGES = ['7 Days', '30 Days', '90 Days', 'Custom'];

export default function TrackEveryDose() {
  const [heroRef, heroShown] = useReveal(0.1);
  const [addRef, addShown] = useReveal();
  const [detRef, detShown] = useReveal();
  const [adhRef, adhShown] = useReveal();
  const [range, setRange] = useState('7 Days');
  const [exporting, setExporting] = useState(false);
  const [pharmRef, pharmShown] = useReveal();
  const [calling, setCalling] = useState(false);
  const [invRef, invShown] = useReveal();
  const [inviteType, setInviteType] = useState('adult');
  const [inviteEmail, setInviteEmail] = useState('');
  const [relationship, setRelationship] = useState('Mother');
  const [permission, setPermission] = useState('Viewer');
  const [managedByMe, setManagedByMe] = useState(true);
  const [sent, setSent] = useState(false);
  const [calRef, calShown] = useReveal(0.1);
  const [calView, setCalView] = useState('Month');
  const [calDay, setCalDay] = useState(CAL_BASELINE);
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState(null);
  const [strength, setStrength] = useState('500');
  const [unit, setUnit] = useState('mg');
  const [form, setForm] = useState('tablet');
  const [color, setColor] = useState('white');

  const adh = RANGE_DATA[range] || RANGE_DATA['7 Days'];
  const exportReport = () => {
    setExporting(true);
    setTimeout(() => setExporting(false), 1800);
  };

  const calStatus = dayStatus(calDay);
  const doseBadge = (medState) => {
    if (medState === 'taken') return { label: 'TAKEN', cls: 'taken' };
    if (medState === 'partial') return { label: 'PARTIAL', cls: 'partial' };
    if (medState === 'missed') return { label: 'MISSED', cls: 'missed' };
    return { label: 'PENDING', cls: 'pending' };
  };
  const doses = [
    {
      abbr: 'Metf',
      name: 'Metformin 500mg',
      meta: 'Tablet · Oral',
      time: '8:30 AM',
      state:
        calStatus === 'taken'
          ? 'taken'
          : calStatus === 'partial'
            ? 'partial'
            : calStatus === 'missed'
              ? 'missed'
              : 'pending',
    },
    {
      abbr: 'Amlo',
      name: 'Amlodipine 5mg',
      meta: 'Tablet · Blood Pressure',
      time: '7:00 AM',
      state: calStatus === 'missed' ? 'missed' : 'taken',
    },
  ];

  const visible = MEDS.filter((m) => {
    const q = query.trim().toLowerCase();
    const matchQ =
      !q || `${m.name} ${m.meta}`.toLowerCase().includes(q);
    const matchF =
      filter === 'All' ||
      (filter === 'Morning' && m.nextHour < 12) ||
      (filter === 'Evening' && m.nextHour >= 17) ||
      (filter === 'Low Stock' && m.low);
    return matchQ && matchF;
  });

  return (
    <div className="ted-page">
      <Navbar />

      {/* First Section — Centered Hero */}
      <main className="ted-hero">
        <div className="ted-hero-inner" ref={heroRef}>
          <span
            className={`ted-eyebrow ted-reveal ${
              heroShown ? 'is-visible' : ''
            }`}
          >
            Track Every Dose
          </span>

          <h1
            className={`ted-title ted-reveal ted-reveal-delay-1 ${
              heroShown ? 'is-visible' : ''
            }`}
          >
            Track every dose you take,
            <br />
            on time, every time
          </h1>

          <p
            className={`ted-sub ted-reveal ted-reveal-delay-2 ${
              heroShown ? 'is-visible' : ''
            }`}
          >
            Log each dose the moment you take it, see your full history at a
            glance, and let Pillo keep your streak going — so you always know
            what was taken, when, and what's next.
          </p>

          <a
            className={`ted-cta ted-reveal ted-reveal-delay-3 ${
              heroShown ? 'is-visible' : ''
            }`}
            href="#download"
          >
            Download app
          </a>
        </div>
      </main>

      <TedSep first />

      {/* Second Section — My Medications (mobile UI) */}
      <section
        ref={addRef}
        className={`ted-add ${addShown ? 'is-visible' : ''}`}
        id="medications"
      >
        <div className="ted-add-inner">
          <div className="ted-add-visual">
            <div className="ted-phone" aria-hidden="true">
              <span className="ted-phone-notch" />
              <div className="ted-phone-screen">
                <div className="ted-searchbar">
                  <Search size={15} />
                  <input
                    type="text"
                    placeholder="Search medications..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <ScanLine size={17} className="ted-scan-ico" />
                </div>

                <div className="ted-filters">
                  {FILTERS.map((f) => (
                    <button
                      key={f}
                      type="button"
                      className={`ted-chip ${filter === f ? 'active' : ''}`}
                      onClick={() => setFilter(f)}
                    >
                      {f === 'Low Stock' && (
                        <span className="ted-lowdot" />
                      )}
                      {f}
                    </button>
                  ))}
                </div>

                <div className="ted-medlist">
                  {visible.map((m) => (
                    <div
                      key={m.id}
                      className={`ted-medcard ${openId === m.id ? 'open' : ''}`}
                      onClick={() => setOpenId(openId === m.id ? null : m.id)}
                    >
                      <div className="ted-medcard-main">
                        <span className="ted-med-avatar">{m.abbr}</span>
                        <div className="ted-med-info">
                          <div className="ted-med-namerow">
                            <strong>{m.name}</strong>
                            {m.low && (
                              <span className="ted-lowbadge">LOW STOCK</span>
                            )}
                          </div>
                          <small className="ted-med-meta">{m.meta}</small>
                          <span className="ted-med-next">
                            <Clock size={11} strokeWidth={2.4} />
                            Next: {m.next}
                          </span>
                        </div>
                        <ChevronRight
                          size={16}
                          className="ted-med-chevron"
                        />
                      </div>

                      <div className="ted-medcard-foot">
                        <div className="ted-med-progress">
                          <span
                            className={`ted-med-bar ${
                              m.low ? 'low' : 'ok'
                            }`}
                            style={{ width: `${Math.min(m.stock, 100)}%` }}
                          />
                        </div>
                        <span
                          className={`ted-med-days ${
                            m.low ? 'low' : 'ok'
                          }`}
                        >
                          {m.daysLeft} days left
                        </span>
                      </div>

                      {openId === m.id && (
                        <div className="ted-med-actions">
                          <button type="button" className="ted-med-btn primary">
                            Take now
                          </button>
                          <button type="button" className="ted-med-btn">
                            Snooze
                          </button>
                          <button type="button" className="ted-med-btn">
                            Refill
                          </button>
                        </div>
                      )}
                    </div>
                  ))}

                  {visible.length === 0 && (
                    <p className="ted-empty">No medications found</p>
                  )}
                </div>

                <button type="button" className="ted-fab">
                  <Plus size={22} strokeWidth={2.4} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TedSep />

      {/* Third Section — Add Medication · Details (mobile UI) */}
      <section
        ref={detRef}
        className={`ted-det ${detShown ? 'is-visible' : ''}`}
        id="add-medication"
      >
        <div className="ted-det-inner">
          <div className="ted-det-text">
            <span className="ted-det-eyebrow ted-reveal">
              <span className="ted-det-dot" />
              Step <em>1</em>
            </span>
            <h2 className="ted-det-title ted-reveal ted-reveal-delay-1">
              Smart details,{' '}
              <span className="ted-accent">filled in for you</span>
            </h2>
            <p className="ted-det-sub ted-reveal ted-reveal-delay-2">
              Pillo matches your drug to a clinical index, suggests the right
              strength and form, and remembers everything about the medicine —
              so the next step is just confirming.
            </p>
            <ul className="ted-add-checks">
              <li className="ted-reveal ted-reveal-delay-1">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Clinical index match — Glucophage, Fortamet
              </li>
              <li className="ted-reveal ted-reveal-delay-2">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Strength, units &amp; form — tablet to injection
              </li>
              <li className="ted-reveal ted-reveal-delay-3">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Pill color &amp; special instructions, optional
              </li>
            </ul>
          </div>

          <div className="ted-det-visual">
            <div className="ted-phone" aria-hidden="true">
              <span className="ted-phone-notch" />
              <div className="ted-phone-screen ted-details-screen">
                <div className="ted-details-bar">
                  <strong>Add Medication</strong>
                  <span className="ted-rx-badge">
                    <ShieldCheck size={10} strokeWidth={2.6} />
                    RX VERIFIED
                  </span>
                  <span className="ted-rx-avatar">AM</span>
                </div>

                <div className="ted-details-step">
                  <span>Step 2 of 3 · Details</span>
                  <span className="ted-details-step-num">66%</span>
                </div>
                <div className="ted-details-progress">
                  <span style={{ width: '66%' }} />
                </div>

                <span className="ted-details-label">Medication Details</span>

                <div className="ted-details-field">
                  <span className="ted-details-flabel">
                    Medication Name <em>*</em>
                  </span>
                  <div className="ted-details-input">
                    <strong>Metformin</strong>
                    <Search size={14} />
                  </div>
                  <span className="ted-details-match">
                    <Check size={10} strokeWidth={3.2} />
                    Matches clinical index [Glucophage, Fortamet]
                  </span>
                </div>

                <div className="ted-details-row">
                  <div className="ted-details-field ted-details-grow">
                    <span className="ted-details-flabel">Strength</span>
                    <input
                      className="ted-details-input ted-details-input-field"
                      type="text"
                      value={strength}
                      onChange={(e) => setStrength(e.target.value)}
                      aria-label="Strength"
                    />
                  </div>
                  <button type="button" className="ted-details-unit">
                    {unit} <ChevronDown size={12} strokeWidth={2.6} />
                  </button>
                </div>

                <div className="ted-units">
                  {UNITS.map((u) => (
                    <button
                      key={u}
                      type="button"
                      className={`ted-unit ${unit === u ? 'active' : ''}`}
                      onClick={() => setUnit(u)}
                    >
                      {u}
                    </button>
                  ))}
                </div>

                <div className="ted-details-formhead">
                  <span className="ted-details-flabel">Medication Form</span>
                  <span className="ted-details-count">5 Formats</span>
                </div>
                <div className="ted-form-grid">
                  {FORMS.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      className={`ted-form-card ${
                        form === f.id ? 'active' : ''
                      }`}
                      onClick={() => setForm(f.id)}
                    >
                      {form === f.id && (
                        <span className="ted-form-check">
                          <Check size={10} strokeWidth={3.4} />
                        </span>
                      )}
                      <f.icon
                        size={18}
                        strokeWidth={1.8}
                        style={f.rotate ? { transform: 'rotate(45deg)' } : {}}
                      />
                      <span>{f.label}</span>
                    </button>
                  ))}
                </div>

                <div className="ted-details-colorhead">
                  <span className="ted-details-flabel">Color (optional)</span>
                  <span className="ted-details-colorname">
                    {COLORS.find((c) => c.id === color)?.label}
                  </span>
                </div>
                <div className="ted-colors">
                  {COLORS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      className={`ted-color ${color === c.id ? 'active' : ''}`}
                      style={{ background: c.hex }}
                      onClick={() => setColor(c.id)}
                      aria-label={c.label}
                    >
                      {color === c.id && (
                        <Check
                          size={13}
                          strokeWidth={3.2}
                          color={c.id === 'white' ? '#123C4D' : '#ffffff'}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="ted-details-special">
                  <div className="ted-details-colorhead">
                    <span className="ted-details-flabel">
                      Special Instructions
                    </span>
                    <span className="ted-details-optional">Optional</span>
                  </div>
                  <div className="ted-details-textarea">
                    e.g. Take with food after breakfast, avoid grapefruit…
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TedSep />

      {/* Fourth Section — Calendar (text left, mobile UI right) */}
      <section
        ref={calRef}
        className={`ted-cal ${calShown ? 'is-visible' : ''}`}
        id="calendar"
      >
        <div className="ted-cal-inner">
          <div className="ted-cal-text">
            <span className="ted-det-eyebrow ted-reveal">
              <span className="ted-det-dot" />
              Step <em>2</em>
            </span>
            <h2 className="ted-det-title ted-reveal ted-reveal-delay-1">
              Your month,{' '}
              <span className="ted-accent">at a glance</span>
            </h2>
            <p className="ted-det-sub ted-reveal ted-reveal-delay-2">
              Pillo maps your entire month into a color-coded calendar. Green
              means you took everything, orange means a partial day, red means
              a miss — and one tap on any day shows exactly which doses were
              taken, when, and what's still pending.
            </p>
            <ul className="ted-add-checks">
              <li className="ted-reveal ted-reveal-delay-1">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Green, orange and red dots — taken, partial or missed at a glance
              </li>
              <li className="ted-reveal ted-reveal-delay-2">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Today's panel — Metformin &amp; Amlodipine with times and status
              </li>
              <li className="ted-reveal ted-reveal-delay-3">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Month ↔ week toggle — zoom out to the whole month or in to the week
              </li>
              <li className="ted-reveal ted-reveal-delay-3">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Tap any past day to review its full dose list and status
              </li>
            </ul>
          </div>
          <div className="ted-cal-visual">
            <div className="ted-phone" aria-hidden="true">
              <span className="ted-phone-notch" />
              <div className="ted-phone-screen ted-cal-screen">
                <div className="ted-cal-dark">
                  <div className="ted-cal-bar">
                    <strong>Calendar</strong>
                    <span className="ted-cal-bar-actions">
                      <span className="ted-cal-bell">
                        <Bell size={16} strokeWidth={2} />
                        <span className="ted-cal-bell-dot" />
                      </span>
                      <span className="ted-rx-avatar">AM</span>
                    </span>
                  </div>

                  <div className="ted-cal-toggle">
                    {['Month', 'Week'].map((v) => (
                      <button
                        key={v}
                        type="button"
                        className={calView === v ? 'active' : ''}
                        onClick={() => setCalView(v)}
                      >
                        {v}
                      </button>
                    ))}
                  </div>

                  <div className="ted-cal-nav">
                    <button type="button" className="ted-cal-navbtn" aria-label="Previous month">
                      <ChevronLeft size={14} strokeWidth={2.6} />
                    </button>
                    <strong>September 2026</strong>
                    <button type="button" className="ted-cal-navbtn" aria-label="Next month">
                      <ChevronRight size={14} strokeWidth={2.6} />
                    </button>
                    <button
                      type="button"
                      className="ted-cal-today-btn"
                      onClick={() => setCalDay(CAL_BASELINE)}
                    >
                      Today
                    </button>
                  </div>
                </div>

                <div className="ted-cal-grid">
                  {DOW.map((d) => (
                    <span key={d} className="ted-cal-dow">
                      {d}
                    </span>
                  ))}
                  {CAL_DAYS.map((d) => {
                    const s = dayStatus(d);
                    const isSelected = d === calDay;
                    const dot =
                      s === 'taken'
                        ? 'ok'
                        : s === 'partial'
                          ? 'partial'
                          : s === 'missed'
                            ? 'missed'
                            : s === 'today'
                              ? 'today'
                              : null;
                    return (
                      <button
                        key={d}
                        type="button"
                        className={`ted-cal-day ${s} ${
                          isSelected ? 'selected' : ''
                        }`}
                        disabled={s === 'future'}
                        onClick={() => setCalDay(d)}
                      >
                        <span className="ted-cal-num">{d}</span>
                        {dot && <span className={`ted-cal-dot ${dot}`} />}
                      </button>
                    );
                  })}
                  {CAL_TRAILING.map((d) => (
                    <span key={`t-${d}`} className="ted-cal-day future trailing">
                      <span className="ted-cal-num">{d}</span>
                    </span>
                  ))}
                </div>

                <div className="ted-cal-legend">
                  <span>
                    <span className="ted-cal-dot ok" /> Taken
                  </span>
                  <span>
                    <span className="ted-cal-dot partial" /> Partial
                  </span>
                  <span>
                    <span className="ted-cal-dot missed" /> Missed
                  </span>
                  <span>
                    <span className="ted-cal-dot today" /> Today
                  </span>
                </div>

                <div className="ted-cal-panel">
                  <div className="ted-cal-panel-head">
                    <span className="ted-cal-panel-title">
                      <span className="ted-cal-panel-dot" />
                      {calDay === CAL_BASELINE
                        ? `Today · Sep ${calDay}`
                        : `Sep ${calDay}`}
                    </span>
                    <span className="ted-cal-panel-badge">2 doses</span>
                  </div>

                  {doses.map((d) => {
                    const b = doseBadge(d.state);
                    return (
                      <div key={d.name} className="ted-cal-dose">
                        <span className="ted-med-avatar">{d.abbr}</span>
                        <span className="ted-cal-dose-info">
                          <strong>{d.name}</strong>
                          <small>{d.meta}</small>
                        </span>
                        <span className="ted-cal-dose-time">{d.time}</span>
                        <span className={`ted-cal-dose-badge ${b.cls}`}>
                          {b.cls === 'taken' && <Check size={10} strokeWidth={3.4} />}
                          {b.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <TedSep />

      {/* Fifth Section — Adherence Detail (mobile UI left, text right) */}
      <section
        ref={adhRef}
        className={`ted-adh ${adhShown ? 'is-visible' : ''}`}
        id="adherence"
      >
        <div className="ted-adh-inner">
          <div className="ted-adh-visual">
            <div className="ted-phone" aria-hidden="true">
              <span className="ted-phone-notch" />
              <div className="ted-phone-screen ted-adh-screen">
                <div className="ted-adh-dark">
                  <div className="ted-adh-bar">
                    <strong>Adherence Detail</strong>
                    <button
                      type="button"
                      className="ted-adh-export"
                      onClick={exportReport}
                    >
                      {exporting ? 'Exporting…' : 'Export'}{' '}
                      <Download size={11} strokeWidth={2.4} />
                    </button>
                  </div>
                  <div className="ted-adh-ranges">
                    {RANGES.map((r) => (
                      <button
                        key={r}
                        type="button"
                        className={`ted-adh-pill ${range === r ? 'active' : ''}`}
                        onClick={() => setRange(r)}
                      >
                        {r === 'Custom' && (
                          <Calendar size={11} strokeWidth={2.4} />
                        )}
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="ted-adh-card">
                  <div className="ted-adh-cardhead">
                    <div>
                      <strong>Overall Adherence</strong>
                      <small>Last 7 days · All medications</small>
                    </div>
                    <div className="ted-adh-ring">
                      <svg viewBox="0 0 64 64" className="ted-adh-ringsvg">
                        <circle className="ted-adh-ring-bg" cx="32" cy="32" r="26" />
                        <circle
                          className="ted-adh-ring-fg"
                          cx="32"
                          cy="32"
                          r="26"
                          pathLength="100"
                          strokeDasharray={`${adh.overall} 100`}
                        />
                      </svg>
                      <div className="ted-adh-ring-center">
                        <strong>{adh.overall}%</strong>
                        <span>GOAL {adh.goal}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="ted-adh-bignum">
                    {adh.overall}
                    <span>%</span>
                  </div>
                  <div className="ted-adh-delta">
                    <ArrowUpRight size={12} strokeWidth={2.6} />
                    {adh.delta}
                  </div>

                  <div className="ted-adh-tiles">
                    <div className="ted-adh-tile taken">
                      <span className="ted-adh-tile-ico">
                        <Check size={15} strokeWidth={3} />
                      </span>
                      <strong>{adh.taken}</strong>
                      <span>Taken</span>
                    </div>
                    <div className="ted-adh-tile missed">
                      <span className="ted-adh-tile-ico">
                        <X size={15} strokeWidth={3} />
                      </span>
                      <strong>{adh.missed}</strong>
                      <span>Missed</span>
                    </div>
                    <div className="ted-adh-tile skipped">
                      <span className="ted-adh-tile-ico">
                        <SkipForward size={15} strokeWidth={2.6} />
                      </span>
                      <strong>{adh.skipped}</strong>
                      <span>Skipped</span>
                    </div>
                  </div>
                </div>

                <div className="ted-adh-card ted-adh-permed">
                  <div className="ted-adh-permed-head">
                    <strong>Per Medication</strong>
                    <button type="button" className="ted-adh-allmeds">
                      All Meds <ChevronDown size={11} strokeWidth={2.4} />
                    </button>
                  </div>

                  {adh.meds.map((m) => (
                    <div key={m.name} className="ted-adh-medrow">
                      <div className="ted-adh-medrow-top">
                        <span className="ted-med-avatar ted-adh-avatar">
                          {m.abbr}
                        </span>
                        <span className="ted-adh-medcol">
                          <strong>{m.name}</strong>
                          <small>{m.note}</small>
                        </span>
                        <span
                          className={`ted-adh-pct ${
                            m.pct >= 80 ? 'ok' : 'low'
                          }`}
                        >
                          {m.pct}%
                        </span>
                      </div>
                      <div className="ted-adh-progress">
                        <span
                          className={m.pct >= 80 ? 'ok' : 'low'}
                          style={{ width: `${m.pct}%` }}
                        />
                      </div>
                      <span className="ted-adh-freq">{m.freq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="ted-adh-text">
            <span className="ted-det-eyebrow ted-reveal">
              <span className="ted-det-dot" />
              Step <em>3</em>
            </span>
            <h2 className="ted-det-title ted-reveal ted-reveal-delay-1">
              See your adherence,{' '}
              <span className="ted-accent">not just your streak</span>
            </h2>
            <p className="ted-det-sub ted-reveal ted-reveal-delay-2">
              An overall score against your goal, a trend against the previous
              period, and a per-medication breakdown — everything you need to
              see what's working and what's slipping.
            </p>
            <ul className="ted-add-checks">
              <li className="ted-reveal ted-reveal-delay-1">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Overall adherence ring with your 80% goal built in
              </li>
              <li className="ted-reveal ted-reveal-delay-2">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Taken / missed / skipped tiles, plus trend vs last period
              </li>
              <li className="ted-reveal ted-reveal-delay-3">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Per-medication bars — spot the weakest pill instantly
              </li>
              <li className="ted-reveal ted-reveal-delay-3">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                7 / 30 / 90-day ranges — and a one-tap export for your doctor
              </li>
            </ul>
          </div>
        </div>
      </section>

      <TedSep />

      {/* Sixth Section — Pharmacy Details (text left, mobile UI right) */}
      <section
        ref={pharmRef}
        className={`ted-pharm ${pharmShown ? 'is-visible' : ''}`}
        id="pharmacy"
      >
        <div className="ted-pharm-inner">
          <div className="ted-pharm-text">
            <span className="ted-det-eyebrow ted-reveal">
              <span className="ted-det-dot" />
              Step <em>4</em>
            </span>
            <h2 className="ted-det-title ted-reveal ted-reveal-delay-1">
              Your pharmacy,{' '}
              <span className="ted-accent">one tap away</span>
            </h2>
            <p className="ted-det-sub ted-reveal ted-reveal-delay-2">
              Call the store, get directions, and see your linked medications
              and refill alerts — all without leaving Pillo. Opening hours,
              phone line and address are always in sync.
            </p>
            <ul className="ted-add-checks">
              <li className="ted-reveal ted-reveal-delay-1">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                One-tap call &amp; directions to your pharmacy
              </li>
              <li className="ted-reveal ted-reveal-delay-2">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Linked medications with refill alerts — 4 days left on Metformin
              </li>
              <li className="ted-reveal ted-reveal-delay-3">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Standard opening hours — today, weekends, holidays
              </li>
            </ul>
          </div>

          <div className="ted-pharm-visual">
            <div className="ted-phone" aria-hidden="true">
              <span className="ted-phone-notch" />
              <div className="ted-phone-screen ted-pharm-screen">
                <div className="ted-pharm-dark">
                  <div className="ted-pharm-bar">
                    <strong>Pharmacy Details</strong>
                    <span className="ted-pharm-editico">
                      <Pencil size={13} strokeWidth={2.2} />
                    </span>
                  </div>
                </div>

                <div className="ted-pharm-card ted-pharm-headcard">
                  <div className="ted-pharm-logo">
                    <ShoppingCart size={22} strokeWidth={1.8} />
                  </div>
                  <strong>Green Cross Pharmacy</strong>
                  <span className="ted-pharm-branch">
                    <span className="ted-pharm-dot-open" />
                    Main branch · Open until 9:00 PM
                  </span>
                  <span className="ted-pharm-open">
                    <span className="ted-pharm-dot-open" />
                    OPEN NOW
                  </span>
                </div>

                <div className="ted-pharm-card ted-pharm-contactcard">
                  <div className="ted-pharm-contacthead">
                    <span className="ted-pharm-sectionlabel">Contact</span>
                    <span className="ted-pharm-link">Primary Provider</span>
                  </div>
                  <div className="ted-pharm-row">
                    <span className="ted-pharm-row-ico">
                      <Phone size={14} strokeWidth={2} />
                    </span>
                    <span className="ted-pharm-row-text">
                      <strong>+1 (555) 234-8890</strong>
                      <small>Direct Pharmacy Line</small>
                    </span>
                    <ChevronRight size={14} className="ted-pharm-chev" />
                  </div>
                  <div className="ted-pharm-row">
                    <span className="ted-pharm-row-ico">
                      <MapPin size={14} strokeWidth={2} />
                    </span>
                    <span className="ted-pharm-row-text">
                      <strong>124 Maple Street, Springfield</strong>
                      <small>0.8 miles away · Springfield Medical Plaza</small>
                    </span>
                  </div>
                  <div className="ted-pharm-actions">
                    <button
                      type="button"
                      className="ted-pharm-call"
                      onClick={() => {
                        setCalling(true);
                        setTimeout(() => setCalling(false), 1800);
                      }}
                    >
                      <Phone size={13} strokeWidth={2.4} />
                      {calling ? 'Calling…' : 'Call'}
                    </button>
                    <button type="button" className="ted-pharm-directions">
                      <Navigation size={12} strokeWidth={2.2} />
                      Directions
                    </button>
                  </div>
                </div>

                <div className="ted-pharm-card">
                  <div className="ted-pharm-contacthead">
                    <span className="ted-pharm-sectionlabel">Linked Medications</span>
                    <span className="ted-pharm-badge">2 Prescriptions</span>
                  </div>
                  <div className="ted-pharm-linkedrow">
                    <span className="ted-med-avatar ted-pharm-avatar">Metf</span>
                    <span className="ted-pharm-linkedcol">
                      <strong>Metformin 500mg</strong>
                      <small>Take 1 tablet with dinner · Rx #44901</small>
                    </span>
                    <span className="ted-pharm-lowbadge">LOW</span>
                  </div>
                  <div className="ted-pharm-linkedrow">
                    <span className="ted-med-avatar ted-pharm-avatar">Amlo</span>
                    <span className="ted-pharm-linkedcol">
                      <strong>Amlodipine 5mg</strong>
                      <small>Take 1 tablet every morning · Rx #78903</small>
                    </span>
                    <span className="ted-pharm-okbadge">OK</span>
                  </div>
                  <div className="ted-pharm-warn">
                    <AlertCircle size={12} strokeWidth={2.4} />
                    Metformin needs a refill in 4 days.
                  </div>
                </div>

                <div className="ted-pharm-card">
                  <div className="ted-pharm-contacthead">
                    <span className="ted-pharm-sectionlabel">Opening Hours</span>
                    <span className="ted-pharm-link">Standard Hours</span>
                  </div>
                  <div className="ted-pharm-hoursrow today">
                    <span>Mon–Fri <em>Today</em></span>
                    <strong>8:00 AM – 9:00 PM</strong>
                  </div>
                  <div className="ted-pharm-hoursrow">
                    <span>Saturday</span>
                    <strong>9:00 AM – 6:00 PM</strong>
                  </div>
                  <div className="ted-pharm-hoursrow">
                    <span>Sunday</span>
                    <strong className="ted-pharm-closed">● Closed</strong>
                  </div>
                </div>

                <div className="ted-pharm-edit">
                  <Pencil size={12} strokeWidth={2.2} />
                  Edit Pharmacy Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TedSep />

      {/* Seventh Section — Invite Member (mobile UI left, text right) */}
      <section
        ref={invRef}
        className={`ted-inv ${invShown ? 'is-visible' : ''}`}
        id="invite-member"
      >
        <div className="ted-inv-inner">
          <div className="ted-inv-visual">
            <div className="ted-phone" aria-hidden="true">
              <span className="ted-phone-notch" />
              <div className="ted-phone-screen ted-inv-screen">
                <div className="ted-inv-dark">
                  <div className="ted-inv-bar">
                    <strong>Invite Member</strong>
                    <span className="ted-inv-avatar">
                      <User size={15} strokeWidth={2} />
                    </span>
                  </div>
                </div>

                <span className="ted-inv-sectionlabel">Invite Type</span>
                <div className="ted-inv-card ted-inv-typecard">
                  <button
                    type="button"
                    className={`ted-inv-option ${
                      inviteType === 'adult' ? 'active' : ''
                    }`}
                    onClick={() => setInviteType('adult')}
                  >
                    <span
                      className={`ted-inv-radio ${
                        inviteType === 'adult' ? 'on' : ''
                      }`}
                    />
                    <span className="ted-inv-option-text">
                      <strong>Invite an Adult</strong>
                      <small>They manage their own login &amp; data</small>
                    </span>
                    <User size={17} strokeWidth={1.8} className="ted-inv-option-ico" />
                  </button>
                  <button
                    type="button"
                    className={`ted-inv-option ${
                      inviteType === 'dependent' ? 'active' : ''
                    }`}
                    onClick={() => setInviteType('dependent')}
                  >
                    <span
                      className={`ted-inv-radio ${
                        inviteType === 'dependent' ? 'on' : ''
                      }`}
                    />
                    <span className="ted-inv-option-text">
                      <strong>Create Dependent Profile</strong>
                      <small>I manage everything for them (e.g. a child)</small>
                    </span>
                    <Users size={17} strokeWidth={1.8} className="ted-inv-option-ico" />
                  </button>
                </div>

                <div className="ted-inv-field">
                  <span className="ted-inv-fieldlabel">Email or Phone</span>
                  <div className="ted-inv-input">
                    <input
                      type="text"
                      placeholder="name@email.com or +1 555..."
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      aria-label="Email or phone"
                    />
                    <AtSign size={15} strokeWidth={2} />
                  </div>
                  <span className="ted-inv-fieldhint">
                    <Check size={10} strokeWidth={3} />
                    They'll receive a secure invite link
                  </span>
                </div>

                <div className="ted-inv-field">
                  <span className="ted-inv-fieldlabel">Relationship</span>
                  <div className="ted-inv-pills">
                    {['Mother', 'Father', 'Son', 'Daughter', 'Other'].map((r) => (
                      <button
                        key={r}
                        type="button"
                        className={`ted-inv-pill ${
                          relationship === r ? 'active' : ''
                        }`}
                        onClick={() => setRelationship(r)}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="ted-inv-field">
                  <span className="ted-inv-fieldlabel">Permission Level</span>
                  <div className="ted-inv-card ted-inv-permcard">
                    <button
                      type="button"
                      className={`ted-inv-perm ${
                        permission === 'Viewer' ? 'active' : ''
                      }`}
                      onClick={() => setPermission('Viewer')}
                    >
                      <span className="ted-inv-perm-text">
                        <strong>Viewer</strong>
                        <small>can see adherence only</small>
                      </span>
                      <span
                        className={`ted-inv-radio ted-inv-radio-sm ${
                          permission === 'Viewer' ? 'on' : ''
                        }`}
                      />
                    </button>
                    <button
                      type="button"
                      className={`ted-inv-perm ${
                        permission === 'Co-manager' ? 'active' : ''
                      }`}
                      onClick={() => setPermission('Co-manager')}
                    >
                      <span className="ted-inv-perm-text">
                        <strong>Co-manager</strong>
                        <small>can edit schedule &amp; log doses</small>
                      </span>
                      <span
                        className={`ted-inv-radio ted-inv-radio-sm ${
                          permission === 'Co-manager' ? 'on' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="ted-inv-managedby">
                  <span className="ted-inv-managedby-text">
                    <strong>Managed by me</strong>
                    <small>For dependents — no separate login</small>
                  </span>
                  <button
                    type="button"
                    className={`ted-inv-toggle ${managedByMe ? 'on' : ''}`}
                    onClick={() => setManagedByMe((v) => !v)}
                    aria-label="Managed by me"
                    role="switch"
                    aria-checked={managedByMe}
                  >
                    <span className="ted-inv-knob" />
                  </button>
                </div>

                <button
                  type="button"
                  className="ted-inv-send"
                  onClick={() => {
                    setSent(true);
                    setTimeout(() => setSent(false), 1800);
                  }}
                >
                  <SendHorizontal size={15} strokeWidth={2.2} />
                  {sent ? 'Invite Sent ✓' : 'Send Invite'}
                </button>
                <span className="ted-inv-skip">Skip for now</span>
              </div>
            </div>
          </div>

          <div className="ted-inv-text">
            <span className="ted-det-eyebrow ted-reveal">
              <span className="ted-det-dot" />
              Step <em>5</em>
            </span>
            <h2 className="ted-det-title ted-reveal ted-reveal-delay-1">
              Add a member to{' '}
              <span className="ted-accent">your care team</span>
            </h2>
            <p className="ted-det-sub ted-reveal ted-reveal-delay-2">
              Invite an adult to manage their own login and data, or create a
              dependent profile for a child — then choose exactly what they can
              see and do. Pillo sends a secure invite link, so nobody's health
              data is shared until they accept.
            </p>
            <ul className="ted-add-checks">
              <li className="ted-reveal ted-reveal-delay-1">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Invite an adult, or create a dependent profile for a child
              </li>
              <li className="ted-reveal ted-reveal-delay-2">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Viewer or Co-manager — see adherence only, or edit &amp; log doses
              </li>
              <li className="ted-reveal ted-reveal-delay-3">
                <span className="ted-add-tick">
                  <Check size={12} strokeWidth={3} />
                </span>
                Secure invite link — delivered by email or phone
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA - before footer, same logo style as navbar */}

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
            one place - so you never have to think twice about forgetting.
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