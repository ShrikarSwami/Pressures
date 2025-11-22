import { useMemo, useState } from 'react';
import resources from '../data/resources.js';
import ResourceCard from './ResourceCard.jsx';

const ResourceFeed = () => {
  const [filter, setFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState(null);

  const tags = useMemo(() => {
    const set = new Set();
    resources.forEach((r) => r.tags?.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  const visible = useMemo(() => {
    return resources.filter((r) => {
      if (filter === 'resources' && r.type !== 'link') return false;
      if (filter === 'experiences' && r.type !== 'experience') return false;
      if (tagFilter && !r.tags?.includes(tagFilter)) return false;
      return true;
    });
  }, [filter, tagFilter]);

  return (
    <section className="resource-section" aria-label="Resources and experiences">
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
        <button className="btn" onClick={() => setFilter('all')}>All</button>
        <button className="btn" onClick={() => setFilter('resources')}>Resources</button>
        <button className="btn" onClick={() => setFilter('experiences')}>Experiences</button>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          <small style={{ color: 'var(--muted)' }}>Filter by tag:</small>
          <select value={tagFilter ?? ''} onChange={(e) => setTagFilter(e.target.value || null)}>
            <option value="">All</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="resource-grid">
        {visible.map((item) => (
          <ResourceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ResourceFeed;
