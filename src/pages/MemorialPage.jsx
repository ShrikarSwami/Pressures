import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ATTEMPTS_PER_MINUTE = 20; // illustrative estimate; not real-time data
const ATTEMPTS_PER_SECOND = ATTEMPTS_PER_MINUTE / 60;

const MemorialPage = () => {
  const startRef = useRef(Date.now());
  const semicolonRef = useRef(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [semicolonVisible, setSemicolonVisible] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startRef.current) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!semicolonRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSemicolonVisible(true);
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(semicolonRef.current);
    return () => observer.disconnect();
  }, []);

  const estimatedAttempts = useMemo(
    () => Math.max(0, Math.floor(elapsedSeconds * ATTEMPTS_PER_SECOND)),
    [elapsedSeconds]
  );

  const formattedElapsed = useMemo(() => {
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
  }, [elapsedSeconds]);

  const startTimeString = useMemo(() => {
    return new Date(startRef.current).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }, []);

  return (
    <main className="page">
      <section className="page-header">
        <p className="eyebrow">Memorial & wake-up call</p>
        <h1>Every minute matters</h1>
        <p className="lede">
          This page uses a rough, global estimate of suicide attempts. It is not real-time data, but a
          reminder that many people struggle in silence. If this feels heavy, please pause and reach out to
          someone or visit the Help page.
        </p>
      </section>

      <section className="learn-section memorial-vision">
        <div className="memorial-timer">Since you opened this page at {startTimeString}:</div>
        <div className="attempt-clock">
          <div className="attempt-count">{estimatedAttempts.toLocaleString()}+</div>
          <div className="attempt-label">estimated attempts</div>
          <div className="attempt-since">Timer running: {formattedElapsed}</div>
        </div>
        <p style={{ marginTop: '0.75rem', color: 'var(--muted)' }}>
          These numbers are based on published annual estimates divided into minutes and seconds. They
          cannot capture every story, but they can be a nudge toward checking in on ourselves and each
          other.
        </p>
        <div className="memorial-warning strong">
          If this raises crisis feelings for you, you deserve immediate support. Visit the{' '}
          <Link to="/help" style={{ fontWeight: 700 }}>
            Help and resources
          </Link>{' '}
          page or contact a crisis line now.
        </div>
      </section>

      <section className="help-section" ref={semicolonRef} style={{ textAlign: 'center' }}>
        <div className={`big-semicolon ${semicolonVisible ? 'big-semicolon--visible' : ''}`}>;</div>
        <h2 style={{ marginTop: '0.5rem' }}>The semicolon means “keep going”</h2>
        <p>
          Writers use a semicolon to pause and then continue a sentence. Many people use it as a symbol of
          surviving hard chapters. You are allowed to pause, breathe, and continue — with help beside you.
        </p>
        <Link className="btn btn-primary" to="/help">
          Find help now
        </Link>
      </section>
    </main>
  );
};

export default MemorialPage;
