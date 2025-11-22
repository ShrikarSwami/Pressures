const PressureCard = ({ title, voice, explanation, tags, onResonate, resonated, showNudge }) => {
  return (
    <article className={`pressure-card ${resonated ? 'card-resonated' : ''}`}>
      <div className="card-content">
        <h3 className="card-category">{title}</h3>
        <p className="card-voice">“{voice}”</p>
        <p className="card-explanation">{explanation}</p>
        {showNudge && (
          <p className="card-nudge">
            It is okay to ask for help. Talking to a counselor, doctor, or trusted person can make
            these feelings easier to carry.
          </p>
        )}
      </div>
      <div className="card-meta">
        <div className="tag-list" aria-label="Tags">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          className={`resonate-btn ${resonated ? 'resonate-btn--saved' : ''}`}
          onClick={onResonate}
          aria-pressed={resonated}
        >
          {resonated ? 'Saved' : 'This resonates with me'}
        </button>
      </div>
    </article>
  );
};

export default PressureCard;
