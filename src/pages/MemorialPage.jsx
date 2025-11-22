import { useEffect, useRef, useState } from 'react';
import messages from '../data/memorialMessages.js';

const MemorialPage = () => {
  // seconds since start (visual timer)
  const [count, setCount] = useState(0);
  const [grains, setGrains] = useState([]);
  const [paused, setPaused] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const intervalRef = useRef(null);
  const nextTickRef = useRef(Date.now() + intervalMs);
  const [nextIn, setNextIn] = useState(Math.round(intervalMs / 1000));

  const WHO_TOTAL = 703000; // baseline deaths/year (WHO 2019)
  const MALE_SHARE = 0.75; // 75% male share
  const secondsPerYear = 365 * 24 * 60 * 60;
  const secondsPerDeath = secondsPerYear / (WHO_TOTAL * MALE_SHARE);
  const intervalMs = Math.round(secondsPerDeath * 1000);

  useEffect(() => {
    if (paused) return;
    // spawn one grain at the real-data interval
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
      setGrains((g) => [
        ...g,
        { id: Date.now() + Math.random(), left: 50 + (Math.random() - 0.5) * 60 },
      ].slice(-200));
      nextTickRef.current = Date.now() + intervalMs;
      setNextIn(Math.round(intervalMs / 1000));
    }, intervalMs);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Pause/resume effect
  useEffect(() => {
    if (paused) {
      clearInterval(intervalRef.current);
    } else {
      // restart interval
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCount((c) => c + 1);
        setGrains((g) => [
          ...g,
          { id: Date.now() + Math.random(), left: 50 + (Math.random() - 0.5) * 60 },
        ].slice(-200));
        nextTickRef.current = Date.now() + intervalMs;
        setNextIn(Math.round(intervalMs / 1000));
      }, intervalMs);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  // reset timer and grains when user clicks through the warning (so the timer restarts visually)
  const handleReveal = () => {
    setRevealed(true);
    setCount(0);
    setGrains([]);
    // restart interval immediately
    clearInterval(intervalRef.current);
    nextTickRef.current = Date.now() + intervalMs;
    setNextIn(Math.round(intervalMs / 1000));
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCount((c) => c + 1);
        setGrains((g) => [
          ...g,
          { id: Date.now() + Math.random(), left: 50 + (Math.random() - 0.5) * 60 },
        ].slice(-200));
        nextTickRef.current = Date.now() + intervalMs;
        setNextIn(Math.round(intervalMs / 1000));
      }, intervalMs);
    }
  };

  // remove grains after animation end (safe timeout)
  useEffect(() => {
    if (!grains.length) return;
    const t = setTimeout(() => {
      setGrains((g) => g.slice(1));
    }, 2200);
    return () => clearTimeout(t);
  }, [grains]);

  // update nextIn countdown every second so users can see activity
  useEffect(() => {
    const id = setInterval(() => {
      const secs = Math.max(0, Math.round((nextTickRef.current - Date.now()) / 1000));
      setNextIn(secs);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="page memorial-vision">
      <section className="page-header">
        <p className="eyebrow">Memorial</p>
        <h1 style={{ color: 'var(--text)' }}>In memory — a quiet rhythm</h1>
        <p className="lede" style={{ color: 'var(--muted)' }}>
          This page honors the weight and the people behind numbers. It contains sensitive content.
          If reading feels overwhelming, please visit the <a href="/help">Help and resources</a> page.
        </p>
      </section>

      <div style={{ marginTop: '1rem' }}>
        {/* Prominent crisis CTA */}
        <div style={{ marginBottom: '1rem', padding: '1rem', borderRadius: 12, background: 'linear-gradient(90deg, rgba(255,0,60,0.06), rgba(255,140,0,0.04))', border: '1px solid rgba(255,255,255,0.04)' }}>
          <strong style={{ color: '#ffdcdc', display: 'block', fontSize: '1.05rem' }}>If you are in crisis: </strong>
          <div style={{ color: 'var(--muted)' }}>
            In the United States call <a href="tel:988">988</a> for 24/7 support. Outside the U.S.,
            find local emergency or crisis services. You can also visit the <a href="/help">Help</a> page for more resources.
          </div>
        </div>

        {/* Warning interstitial (jarring) */}
        {!revealed && (
          <div style={{ padding: '1rem', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,0,0,0.12)', marginBottom: '1rem' }}>
            <h2 style={{ margin: '0 0 0.5rem', color: '#ffdcdc' }}>Trigger warning</h2>
            <p style={{ margin: '0 0 0.75rem', color: 'var(--muted)' }}>
              This section contains raw accounts of grief, panic, self-harm, and suicidal thoughts.
              Reading may be upsetting. Do not proceed if you are feeling fragile.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary" onClick={handleReveal}>
                I understand — show me the memorial
              </button>
              <button className="btn" onClick={() => (window.location.href = '/help')}>
                I need help instead
              </button>
            </div>
          </div>
        )}

        <div className="memorial-timer">Time elapsed: {count} seconds — next drop in: {nextIn}s</div>

        <div className="memorial-stage memorial-blur" aria-hidden>
          <div className="bowl" aria-hidden>
            {grains.map((grain) => (
              <div
                key={grain.id}
                className="grain"
                style={{ left: `${grain.left}%` }}
              />
            ))}
          </div>
        </div>

        {/* Pause / resume control */}
        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button className="btn" onClick={() => setPaused((p) => !p)}>
            {paused ? 'Resume timer' : 'Pause timer'}
          </button>
          <small style={{ color: 'var(--muted)' }}>Timer runs at real-world cadence (1 grain ≈ 1 male suicide).</small>
        </div>

        <section style={{ marginTop: '1rem' }}>
          <h2 style={{ margin: '0 0 0.5rem' }}>Messages</h2>
          <p style={{ color: 'var(--muted)' }}>
            These anonymized excerpts were added with permission. They preserve the raw, scattered voice.
          </p>

          <div className="memorial-list">
            {(!revealed || messages.length === 0) && (
              <div className="memorial-card">{!revealed ? 'Messages are hidden behind a trigger warning.' : 'No messages loaded yet.'}</div>
            )}
            {revealed && messages.map((m) => (
              <article key={m.id} className="memorial-card">
                <h3 style={{ margin: '0 0 0.35rem' }}>{m.title} <small style={{ color: 'var(--muted)', fontWeight: 600 }}>[{m.id}]</small></h3>
                <p style={{ margin: 0, color: 'var(--muted)', whiteSpace: 'pre-wrap' }}>{m.content}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MemorialPage;
