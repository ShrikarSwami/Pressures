import { useEffect, useMemo, useState } from 'react';
import pressures from '../data/pressures.js';
import resources from '../data/resources.js';
import PressureCard from './PressureCard.jsx';
import ReflectionSummary from './ReflectionSummary.jsx';

const STORAGE_KEY = 'pressures-resonated';
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const PressureFeed = () => {
  const [resonatedIds, setResonatedIds] = useState(() => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Unable to read saved pressures', error);
      return [];
    }
  });

  useEffect(() => {
    // Persist the resonance choices so refreshes feel consistent.
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resonatedIds));
    } catch (error) {
      console.error('Unable to store selections', error);
    }
  }, [resonatedIds]);

  const handleResonate = (id) => {
    setResonatedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resonatedCategories = useMemo(() => {
    const categories = pressures
      .filter((item) => resonatedIds.includes(item.id))
      .map((item) => item.category);
    return Array.from(new Set(categories));
  }, [resonatedIds]);

  // Seed a small, stable random count per pressure for "resonates with other people".
  const resonateSeeds = useMemo(() => {
    const seeds = {};
    pressures.forEach((p) => {
      seeds[p.id] = randomInt(0, 67);
    });
    return seeds;
  }, []);

  return (
    <div className="pressure-feed">
      {pressures.map((pressure) => {
        const resonated = resonatedIds.includes(pressure.id);
        const showNudge =
          pressure.category === 'Panic' ||
          pressure.category === 'Isolation' ||
          pressure.category === 'Body image';
        // find a related resource link if available (match first overlapping tag)
        const related = resources.find(
          (r) => r.type === 'link' && r.tags && pressure.tags.some((t) => r.tags.includes(t))
        );
        const resourceLink = related ? related.url : null;
        return (
          <PressureCard
            key={pressure.id}
            title={pressure.title}
            voice={pressure.voice}
            explanation={pressure.explanation}
            tags={pressure.tags}
            resonated={resonated}
            onResonate={() => handleResonate(pressure.id)}
            resourceLink={resourceLink}
            showNudge={showNudge}
            resonateCount={resonateSeeds[pressure.id]}
          />
        );
      })}
      <ReflectionSummary count={resonatedIds.length} categories={resonatedCategories} />
    </div>
  );
};

export default PressureFeed;
