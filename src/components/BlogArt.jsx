export default function BlogArt({ kind }) {
  if (kind === 'reminder') {
    return (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <circle cx="60" cy="60" r="46" stroke="#fff" strokeOpacity="0.35" strokeWidth="3" />
        <circle cx="60" cy="60" r="30" fill="#fff" fillOpacity="0.16" />
        <path d="M60 42v19l13 9" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
        <circle cx="96" cy="30" r="8" fill="#fff" fillOpacity="0.5" />
        <rect x="14" y="78" width="26" height="8" rx="4" fill="#fff" fillOpacity="0.3" />
      </svg>
    );
  }

  if (kind === 'refill') {
    return (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <rect x="26" y="34" width="38" height="62" rx="9" fill="#fff" fillOpacity="0.22" />
        <rect x="34" y="22" width="22" height="14" rx="5" fill="#fff" fillOpacity="0.4" />
        <rect x="34" y="58" width="22" height="18" rx="4" fill="#fff" fillOpacity="0.55" />
        <rect x="70" y="58" width="30" height="14" rx="7" fill="#fff" fillOpacity="0.5" transform="rotate(-38 70 58)" />
        <rect x="72" y="84" width="26" height="13" rx="6.5" fill="#fff" fillOpacity="0.32" transform="rotate(-38 72 84)" />
      </svg>
    );
  }

  if (kind === 'shared') {
    return (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <circle cx="42" cy="44" r="17" fill="#fff" fillOpacity="0.45" />
        <path d="M16 92c0-15 12-24 26-24s26 9 26 24" fill="#fff" fillOpacity="0.24" />
        <circle cx="86" cy="52" r="13" fill="#fff" fillOpacity="0.3" />
        <path d="M66 92c0-11 9-18 20-18s20 7 20 18" fill="#fff" fillOpacity="0.16" />
        <path d="M52 66h16" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <rect x="24" y="20" width="64" height="80" rx="10" fill="#fff" fillOpacity="0.2" />
      <rect x="38" y="14" width="36" height="12" rx="6" fill="#fff" fillOpacity="0.45" />
      <path
        d="M36 58h10l6-12 8 24 6-12h12"
        stroke="#fff"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="36" y="82" width="40" height="6" rx="3" fill="#fff" fillOpacity="0.35" />
      <circle cx="92" cy="88" r="12" fill="#fff" fillOpacity="0.28" />
    </svg>
  );
}
