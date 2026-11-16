import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import BlogArt from './BlogArt';
import { BLOG_POSTS } from '../data/blogPosts';
import '../styles/BlogsSection.css';

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

    let raf;
    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const vis = Math.min(r.bottom, vh) - Math.max(r.top, 0);
      if (vis > 0 && vis / Math.min(r.height, vh) >= threshold) {
        setShown(true);
        return;
      }
      raf = requestAnimationFrame(check);
    };
    raf = requestAnimationFrame(check);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [threshold]);

  return [ref, shown];
}

export default function BlogsSection() {
  const [ref, shown] = useReveal();

  return (
    <section
      id="blogs"
      ref={ref}
      className={`blogs-section ${shown ? 'is-visible' : ''}`}
    >
      <div className="blogs-inner">
        <div className="blogs-head">
          <h2 className="blogs-title">Insightful Blogs</h2>
          <p className="blogs-sub">
            Practical medication guides from our clinical and product team —
            written for people who take more than one medicine.
          </p>
        </div>

        <div className="blogs-grid">
          {BLOG_POSTS.map((post, i) => (
            <article key={post.slug} className={`blog-card blog-card-d${i + 1}`}>
              <div className={`blog-card-media ${post.theme}`}>
                <span className="blog-card-art">
                  <BlogArt kind={post.art} />
                </span>

                <span className="blog-card-chip">{post.category}</span>

                <div className="blog-card-overlay">
                  <p className="blog-card-eyebrow">{post.eyebrow}</p>
                  <h3 className="blog-card-headline">{post.headline}</h3>
                </div>
              </div>

              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-card-date">{post.date}</span>
                  <span className="blog-card-dot" />
                  <span className="blog-card-read">{post.read}</span>
                </div>

                <h4 className="blog-card-title">{post.title}</h4>
                <p className="blog-card-excerpt">{post.excerpt}</p>

                <a className="blog-card-link" href={`#article/${post.slug}`}>
                  Read article
                  <ArrowRight size={15} strokeWidth={2.4} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
