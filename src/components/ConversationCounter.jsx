import { useEffect, useRef, useState } from 'react';

// Gentle visualization that reminds the reader they are not alone.
// We track time with useState/useEffect and move the estimate slowly with small, random steps
// so it does not feel like a machine-gun counter. All numbers here are illustrative, not live data.
const PEOPLE_PER_SECOND = 0.15; // slower, illustrative rate of people wrestling with similar pressures

const countries = [
  'Brazil',
  'Nigeria',
  'India',
  'Canada',
  'United States',
  'United Kingdom',
  'Australia',
  'Kenya',
  'Philippines',
  'Germany',
  'South Africa',
  'Mexico',
  'Argentina',
  'France',
  'Spain',
];

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomCountry = () => countries[randomInt(0, countries.length - 1)];

const ConversationCounter = () => {
  const [secondsOnPage, setSecondsOnPage] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [estimatedPeople, setEstimatedPeople] = useState(0);
  const [country, setCountry] = useState(() => randomCountry());
  const [dailyVisitors, setDailyVisitors] = useState(null);
  const startRef = useRef(Date.now()); // store the mount time so we can compute elapsed seconds
  const estimateIntervalRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startRef.current) / 1000);
      setSecondsOnPage(elapsed);
    }, 1000);

    return () => clearInterval(id); // clean up the timer when the component unmounts
  }, []);

  useEffect(() => {
    // When the counter is shown, move the estimate forward with small random steps every few seconds.
    if (!showCounter) {
      if (estimateIntervalRef.current) clearInterval(estimateIntervalRef.current);
      return;
    }

    estimateIntervalRef.current = setInterval(() => {
      setEstimatedPeople((prev) => prev + randomInt(0, 1)); // increment slowly and sometimes stay flat
      setCountry(randomCountry()); // rotate a country so it feels like a global community
    }, 3500);

    return () => {
      if (estimateIntervalRef.current) clearInterval(estimateIntervalRef.current);
    };
  }, [showCounter]);

  if (!showCounter) {
    return (
      <div className="info-card" style={{ marginBottom: '1rem' }}>
        <h3>You are not alone</h3>
        <p style={{ marginBottom: '0.6rem' }}>
          Want a gentle reminder that others are feeling something similar right now? This is an estimate,
          not live data.
        </p>
        <button className="btn btn-primary" type="button" onClick={() => setShowCounter(true)}>
          Show a rough global estimate
        </button>
      </div>
    );
  }

  const derivedEstimate = Math.max(
    estimatedPeople,
    Math.floor(secondsOnPage * PEOPLE_PER_SECOND) // keep a lower bound based on time for continuity
  );

  return (
    <div className="info-card" style={{ marginBottom: '1rem' }}>
      <h3>You are not the only one</h3>
      <p>
        This is a rough estimate of how many people in the world might be wrestling with similar pressures
        while you are here. It is not live data, just a reminder that you are not alone. If seeing this
        feels heavier, you can hide it anytime.
      </p>

      <div style={{ margin: '0.75rem 0' }}>
        <p style={{ margin: '0 0 0.4rem', fontWeight: 700, color: 'var(--text)' }}>
          Estimated people feeling something similar since you opened this page:
        </p>
        <div
          style={{
            fontSize: '1.6rem',
            fontWeight: 800,
            color: 'var(--text)',
            letterSpacing: '0.01em',
          }}
          aria-live="polite"
        >
          {derivedEstimate.toLocaleString()}
        </div>
        <p style={{ margin: '0.4rem 0 0', color: 'var(--muted)', fontSize: '0.95rem' }}>
          Somewhere in {country}, someone else may be feeling this too.
        </p>
      </div>

      <div style={{ margin: '0.75rem 0' }}>
        <p style={{ margin: '0 0 0.35rem', fontWeight: 700, color: 'var(--text)' }}>
          Rough estimate of people who visited this page today:
        </p>
        <div style={{ fontWeight: 800, color: 'var(--text)' }}>
          {(dailyVisitors ?? (function initVisitors() {
            const value = randomInt(180, 1200);
            setDailyVisitors(value);
            return value;
          })()).toLocaleString()}
        </div>
        <p style={{ margin: '0.2rem 0 0', color: 'var(--muted)', fontSize: '0.95rem' }}>
          This is randomized and for perspective only.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button className="resonate-btn" type="button" onClick={() => setShowCounter(false)}>
          Hide this
        </button>
      </div>
    </div>
  );
};

export default ConversationCounter;
