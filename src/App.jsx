import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import DocsSection from './components/DocsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AdherenceSection from './components/AdherenceSection';
import DownloadSection from './components/DownloadSection';
import BlogsSection from './components/BlogsSection';
import Footer from './components/Footer';
import StickyQR from './components/StickyQR';
import NeverMissDose from './pages/NeverMissDose';
import TrackEveryDose from './pages/TrackEveryDose';
import BlogArticle from './pages/BlogArticle';
import DailyDose from './pages/DailyDose';
import FaqsPage from './pages/FaqsPage';
import CaregiversPage from './pages/CaregiversPage';
import TermsPage from './pages/TermsPage';
import PrivacyFullPage from './pages/PrivacyFullPage';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const isNeverMiss = hash === '#never-miss';
  const isTrackEveryDose = hash === '#track-every-dose';
  const articleSlug = hash.startsWith('#article/')
    ? hash.slice('#article/'.length)
    : null;
  const isBlogs = hash === '#/blogs';
  const isDailyDose = hash === '#daily-dose';
  const isFaqs = hash === '#faqs';
  const isCaregivers = hash === '#caregivers';
  const isTerms = hash === '#terms';
  const isPrivacyFull = hash === '#privacy-full';

  useEffect(() => {
    if (isNeverMiss) {
      window.scrollTo(0, 0);
      return;
    }
    if (isTrackEveryDose) {
      window.scrollTo(0, 0);
      return;
    }
    if (articleSlug) {
      window.scrollTo(0, 0);
      return;
    }
    if (isDailyDose) {
      window.scrollTo(0, 0);
      return;
    }
    if (isFaqs) {
      window.scrollTo(0, 0);
      return;
    }
    if (isCaregivers) {
      window.scrollTo(0, 0);
      return;
    }
    if (isTerms) {
      window.scrollTo(0, 0);
      return;
    }
    if (isBlogs) {
      const t = setTimeout(() => {
        const el = document.getElementById('blogs');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo(0, 0);
      }, 90);
      return () => clearTimeout(t);
    }
    if (!hash || hash === '#/') {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [hash, isNeverMiss, isTrackEveryDose, articleSlug, isBlogs, isDailyDose, isFaqs, isCaregivers, isTerms, isPrivacyFull]);

  return (
    <>
      {articleSlug ? (
        <BlogArticle slug={articleSlug} />
      ) : isDailyDose ? (
        <DailyDose />
      ) : isFaqs ? (
        <FaqsPage />
      ) : isCaregivers ? (
        <CaregiversPage />
      ) : isTerms ? (
        <TermsPage />
      ) : isPrivacyFull ? (
        <PrivacyFullPage />
      ) : isNeverMiss ? (
        <NeverMissDose />
      ) : isTrackEveryDose ? (
        <TrackEveryDose />
      ) : (
        <div className="app-container">
          <Hero />
          <TrustSection />
          <DocsSection />
          <TestimonialsSection />
          <AdherenceSection />
          <DownloadSection />
          <BlogsSection />
          <Footer />
        </div>
      )}
      <StickyQR />
    </>
  );
}
