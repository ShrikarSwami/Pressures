const ResourceCard = ({ item }) => {
  if (!item) return null;

  return (
    <article className="resource-card">
      <div className="resource-type">{item.type === 'experience' ? 'Real experience' : 'Resource'}</div>
      <h3 style={{ margin: '0 0 0.35rem' }}>{item.title}</h3>
      {item.type === 'experience' ? (
        <p style={{ color: 'var(--muted)', margin: 0 }}>{item.content}</p>
      ) : (
        <p style={{ color: 'var(--muted)', margin: 0 }}>{item.summary}</p>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          {item.tags?.map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>
        <div className="resource-actions">
          {item.type === 'link' ? (
            <a href={item.url} target="_blank" rel="noreferrer">
              Open
            </a>
          ) : (
            <span className="badge-experience">Read</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ResourceCard;
