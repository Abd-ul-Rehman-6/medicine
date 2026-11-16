import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PrivacyPage.css';

export default function PrivacyFullPage() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Privacy Policy (Full) - Medicine Reminder App';
    window.scrollTo(0, 0);
    fetch('/privacy-policy-full.txt')
      .then((r) => r.text())
      .then((t) => {
        setText(t);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const renderText = (raw) => {
    const lines = raw.split('\n');
    const blocks = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();
      if (!trimmed) { i++; continue; }
      if (/^=+$/.test(trimmed)) { i++; continue; }
      const nextLine = i < lines.length - 1 ? lines[i + 1].trim() : '';
      if (nextLine && /^=+$/.test(nextLine)) { blocks.push({ type: 'h1', text: trimmed }); i += 2; continue; }
      if (nextLine && /^-+$/.test(nextLine) && nextLine.length > 3) { blocks.push({ type: 'h2', text: trimmed }); i += 2; continue; }
      if (nextLine && /^~+$/.test(nextLine)) { blocks.push({ type: 'h3', text: trimmed }); i += 2; continue; }
      if (trimmed.startsWith('- ')) {
        let bulletText = trimmed.slice(2);
        i++;
        while (i < lines.length) {
          const next = lines[i].trim();
          if (!next || next.startsWith('- ') || /^=+$/.test(next) || /^-+$/.test(next) || /^~+$/.test(next)) break;
          const nextNext = i < lines.length - 1 ? lines[i + 1].trim() : '';
          if (nextNext && (/^=+$/.test(nextNext) || /^-+$/.test(nextNext) || /^~+$/.test(nextNext))) break;
          if (/^[A-Z]/.test(next) && !/[a-z,]$/.test(bulletText.trim())) break;
          bulletText += ' ' + next;
          i++;
        }
        blocks.push({ type: 'li', text: bulletText });
        continue;
      }
      let para = trimmed;
      i++;
      while (i < lines.length) {
        const next = lines[i].trim();
        if (!next || next.startsWith('- ') || /^=+$/.test(next) || /^-+$/.test(next) || /^~+$/.test(next)) break;
        const nextNext = i < lines.length - 1 ? lines[i + 1].trim() : '';
        if (nextNext && (/^=+$/.test(nextNext) || /^-+$/.test(nextNext) || /^~+$/.test(nextNext))) break;
        if ((/[A-Z]$/.test(para.trim()) && para.trim().length < 60) || (/^[A-Z]/.test(next) && !/[a-z,]$/.test(para.trim()))) break;
        para += ' ' + next;
        i++;
      }
      blocks.push({ type: 'p', text: para });
    }
    return blocks;
  };

  const blocks = text ? renderText(text) : [];
  const grouped = [];
  let currentUl = null;
  blocks.forEach((b) => {
    if (b.type === 'li') {
      if (!currentUl) { currentUl = { type: 'ul', items: [] }; grouped.push(currentUl); }
      currentUl.items.push(b.text);
    } else {
      currentUl = null;
      grouped.push(b);
    }
  });

  return (
    <div className="privacy-wrap">
      <Navbar />
      <div className="privacy-page">
        <div className="wrap">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {grouped.map((block, idx) => {
                if (block.type === 'h1') return <h1 key={idx}>{block.text}</h1>;
                if (block.type === 'h2') return <h2 key={idx}>{block.text}</h2>;
                if (block.type === 'h3') return <h3 key={idx}>{block.text}</h3>;
                if (block.type === 'p') return <p key={idx}>{block.text}</p>;
                if (block.type === 'ul') {
                  return (
                    <ul key={idx}>
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}