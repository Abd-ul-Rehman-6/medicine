import { useEffect, useMemo } from 'react';
import { ArrowLeft, ArrowRight, Check, AlertCircle, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogArt from '../components/BlogArt';
import { BLOG_POSTS, getPost } from '../data/blogPosts';
import '../styles/BlogArticle.css';

export default function BlogArticle({ slug }) {
  const post = useMemo(() => getPost(slug), [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="blog-article-page">
        <Navbar />
        <main className="article-notfound">
          <h1>Article not found</h1>
          <p>This article may have moved or the link is incomplete.</p>
          <a className="article-back" href="#/">
            <ArrowLeft size={15} strokeWidth={2.4} />
            Back to home
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  const related = (post.related || [])
    .map((s) => getPost(s))
    .filter(Boolean);

  return (
    <div className="blog-article-page">
      <Navbar />

      <main className="article-main">
        {/* ---------- Card hero — the same card the article was opened from ---------- */}
        <section className={`article-hero ${post.theme}`}>
          <div className="article-hero-inner">
            <div className="article-hero-media">
              <span className="article-hero-art">
                <BlogArt kind={post.art} />
              </span>
              <span className="article-hero-chip">{post.category}</span>
              <div className="article-hero-overlay">
                <p className="article-hero-eyebrow">{post.eyebrow}</p>
                <h2 className="article-hero-headline">{post.headline}</h2>
              </div>
            </div>

            <div className="article-hero-copy">
              <a className="article-back" href="#blogs">
                <ArrowLeft size={15} strokeWidth={2.4} />
                Back to Insights
              </a>

              <h1 className="article-title">{post.title}</h1>

              <div className="article-meta">
                <span className="article-author">
                  <span className="article-avatar">{post.author.initials}</span>
                  <span className="article-author-text">
                    <strong>{post.author.name}</strong>
                    <small>{post.author.role}</small>
                  </span>
                </span>

                <span className="article-meta-item">
                  <Clock size={14} strokeWidth={2.2} />
                  {post.date}
                </span>
                <span className="article-meta-item">
                  <Clock size={14} strokeWidth={2.2} />
                  {post.read}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Article body ---------- */}
        <article className="article-body">
          {post.body.map((block, i) => {
            if (block.type === 'lead') {
              return (
                <p key={i} className="article-lead">
                  {block.text}
                </p>
              );
            }

            if (block.type === 'h2') {
              return (
                <h2 key={i} className="article-h2">
                  {block.text}
                </h2>
              );
            }

            if (block.type === 'p') {
              return (
                <p key={i} className="article-p">
                  {block.text}
                </p>
              );
            }

            if (block.type === 'ul') {
              return (
                <ul key={i} className="article-ul">
                  {block.items.map((it) => (
                    <li key={it}>
                      <span className="article-bullet">
                        <Check size={11} strokeWidth={3.2} />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === 'stats') {
              return (
                <div key={i} className="article-stats">
                  {block.items.map((s) => (
                    <div key={s.label} className="article-stat">
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              );
            }

            if (block.type === 'note') {
              const warn = block.tone === 'warn';
              return (
                <div
                  key={i}
                  className={`article-note ${warn ? 'warn' : 'info'}`}
                >
                  <span className="article-note-ico">
                    {warn ? (
                      <AlertCircle size={16} strokeWidth={2.4} />
                    ) : (
                      <Check size={16} strokeWidth={2.6} />
                    )}
                  </span>
                  <div>
                    <strong>{block.title}</strong>
                    <p>{block.text}</p>
                  </div>
                </div>
              );
            }

            if (block.type === 'takeaways') {
              return (
                <div key={i} className="article-takeaways">
                  <h3>Key takeaways</h3>
                  <ul>
                    {block.items.map((it) => (
                      <li key={it}>
                        <span className="article-bullet">
                          <Check size={11} strokeWidth={3.2} />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            return null;
          })}

          <div className="article-tags">
            <span className="article-tag">{post.category}</span>
            <span className="article-tag">Medication Management</span>
            <span className="article-tag">EveryDose</span>
          </div>
        </article>

        {/* ---------- More insights ---------- */}
        {related.length > 0 && (
          <section className="article-related">
            <div className="article-related-inner">
              <h2 className="article-related-title">More insights</h2>

              <div className="article-related-grid">
                {related.map((r) => (
                  <a
                    key={r.slug}
                    className="article-rel-card"
                    href={`#article/${r.slug}`}
                  >
                    <span className={`article-rel-media ${r.theme}`}>
                      <span className="article-rel-art">
                        <BlogArt kind={r.art} />
                      </span>
                      <span className="article-rel-chip">{r.category}</span>
                      <span className="article-rel-headline">{r.headline}</span>
                    </span>

                    <span className="article-rel-body">
                      <span className="article-rel-meta">
                        {r.date} · {r.read}
                      </span>
                      <span className="article-rel-title">{r.title}</span>
                      <span className="article-rel-link">
                        Read article
                        <ArrowRight size={14} strokeWidth={2.4} />
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
