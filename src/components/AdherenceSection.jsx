import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, BarChart3, Users } from 'lucide-react';
import '../styles/AdherenceSection.css';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const DATA = [48, 55, 62, 71, 80, 89];

const PLOT = { left: 64, right: 580, top: 30, bottom: 320 };
const xAt = (i) => PLOT.left + (i * (PLOT.right - PLOT.left)) / (DATA.length - 1);
const yAt = (v) => PLOT.bottom - (v / 100) * (PLOT.bottom - PLOT.top);

function smoothPath(points) {
  if (points.length < 2) return '';
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

const POINTS = DATA.map((v, i) => [xAt(i), yAt(v)]);
const LINE_PATH = smoothPath(POINTS);
const AREA_PATH = `${LINE_PATH} L ${xAt(DATA.length - 1)} ${PLOT.bottom} L ${xAt(0)} ${PLOT.bottom} Z`;
const LAST = POINTS[POINTS.length - 1];
const TIP_X = LAST[0] - 34;
const TIP_Y = LAST[1] - 56;

export default function AdherenceSection() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const [vals, setVals] = useState({ after: 0, lift: 0, users: 0 });

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

  useEffect(() => {
    if (!shown) return;
    let raf;
    let start;
    const duration = 1400;

    const timeout = setTimeout(() => {
      const tick = (now) => {
        if (start === undefined) start = now;
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVals({
          after: Math.round(89 * eased),
          lift: Math.round(41 * eased),
          users: Math.round(50 * eased),
        });
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, 350);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [shown]);

  const drawCls = shown ? ' draw' : '';

  return (
    <section
      ref={ref}
      className={`adherence-section ${shown ? 'is-visible' : ''}`}
    >
      <div className="adherence-container">
        <div className="adherence-text">
          

          <h2>
            <span className="accent">92% of Pillo users</span> improved their
            medication adherence
          </h2>

          <p>
            Users who started taking their meds inconsistently now stay on
            track — with timely reminders, dose tracking, and smart nudges that
            actually fit into daily life.
          </p>

          <div className="kpi-row">
            <div className="kpi">
              <span className="kpi-icon">
                <TrendingUp size={18} />
              </span>
              <div className="kpi-info">
                <strong>{vals.after}%</strong>
                <span>Current adherence</span>
              </div>
            </div>

            <div className="kpi">
              <span className="kpi-icon">
                <BarChart3 size={18} />
              </span>
              <div className="kpi-info">
                <strong>+{vals.lift} pts</strong>
                <span>Lift vs baseline</span>
              </div>
            </div>

            <div className="kpi">
              <span className="kpi-icon">
                <Users size={18} />
              </span>
              <div className="kpi-info">
                <strong>{vals.users}K</strong>
                <span>Users analyzed</span>
              </div>
            </div>
          </div>

          <p className="footnote">
            *Based on adherence data from 50,000 Android users as of January 1,
            2026
          </p>
        </div>

        <div className="chart-panel">
          <div className="panel-head">
            <span className="panel-title">Adherence over time</span>
            <span className="panel-badge">+{vals.lift} pts</span>
          </div>

          <svg
            className="trend-svg"
            viewBox="0 0 640 380"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#006F56" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#006F56" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {[100, 75, 50, 25].map((v) => (
              <g key={v}>
                <line
                  x1={PLOT.left}
                  y1={yAt(v)}
                  x2={PLOT.right}
                  y2={yAt(v)}
                  className="trend-grid"
                />
                <text
                  x={PLOT.left - 12}
                  y={yAt(v)}
                  className="trend-y-label"
                  textAnchor="end"
                  dominantBaseline="middle"
                >
                  {v}%
                </text>
              </g>
            ))}

            <line
              x1={PLOT.left}
              y1={yAt(48)}
              x2={PLOT.right}
              y2={yAt(48)}
              className="trend-baseline"
            />
            <text
              x={PLOT.right}
              y={yAt(48) - 12}
              className="trend-baseline-label"
              textAnchor="end"
            >
              Baseline 48%
            </text>

            <path
              d={AREA_PATH}
              fill="url(#areaFill)"
              className={`trend-area${drawCls}`}
            />

            <path
              d={LINE_PATH}
              fill="none"
              pathLength="1"
              className={`trend-line${drawCls}`}
            />

            {POINTS.map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={i === POINTS.length - 1 ? 7.5 : 5.5}
                className={`trend-dot${drawCls}`}
                style={{ animationDelay: `${0.6 + i * 0.13}s` }}
              />
            ))}

            <g className={`trend-tip${drawCls}`}>
              <rect
                x={TIP_X}
                y={TIP_Y}
                width="68"
                height="34"
                rx="9"
                className="tip-bg"
              />
              <text
                x={TIP_X + 34}
                y={TIP_Y + 17}
                className="tip-text"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                89%
              </text>
            </g>

            {MONTHS.map((m, i) => (
              <text
                key={m}
                x={xAt(i)}
                y={354}
                className="trend-x-label"
                textAnchor="middle"
              >
                {m}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
