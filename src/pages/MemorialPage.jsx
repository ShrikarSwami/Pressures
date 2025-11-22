import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ATTEMPTS_PER_MINUTE = 4; // illustrative global estimate for men; not real-time data
const ATTEMPTS_PER_SECOND = ATTEMPTS_PER_MINUTE / 60;

const formatElapsed = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs.toString().padStart(2, '0')}s`;
};

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

  const startTimeLabel = useMemo(
    () => new Date(startRef.current).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    []
  );

  return (
    <main className="page">
      <section className="page-header">
        <p className="eyebrow">Memorial</p>
        <h1>Every moment, men are reaching for help</h1>
        <p className="lede">
          This timer uses a rough global estimate of suicide attempts among men. It is not a live feed.
          The goal is awareness, not fear. If this feels heavy, please pause and reach out to someone or
          visit the Help page.
        </p>
      </section>

      <section className="learn-section memorial-vision">
        <div className="memorial-timer">Since you opened this page at {startTimeLabel}:</div>
        <div className="attempt-clock">
          <div className="attempt-count">{estimatedAttempts.toLocaleString()}+</div>
          <div className="attempt-label">estimated men have attempted</div>
          <div className="attempt-since">Timer running: {formatElapsed(elapsedSeconds)}</div>
        </div>
        <p style={{ marginTop: '0.75rem', color: 'var(--muted)' }}>
          These numbers are based on published annual estimates divided into minutes and seconds. They
          cannot capture every story, but they are a reminder to check in on ourselves and the men around us.
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
        <h2 style={{ marginTop: '0.5rem' }}>The semicolon means “continue”</h2>
        <p>
          Writers use a semicolon to pause and then keep the sentence going. Here it is a reminder that you
          can pause, breathe, and reach for help. You do not have to carry any of this alone.
        </p>
        <Link className="btn btn-primary" to="/help">
          Find help now
        </Link>
      </section>
    </main>
  );
};

export default MemorialPage;
