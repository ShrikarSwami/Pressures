import { Link } from 'react-router-dom';

const ReflectionSummary = ({ count, categories }) => {
  const categoryLine = categories.length > 0 ? categories.join(', ') : 'many corners of life';

  let headline = 'Notice what landed for you';
  let body =
    'These pressures are common, even when they feel isolating. Paying attention to them is a kind way to respond to yourself.';

  if (count === 0) {
    body =
      'Even if none of these sounded like you, you probably know someone who feels this way. Listening to them without fixing can matter a lot.';
  } else if (count < 4) {
    body =
      `A few of these sounded familiar. You are not strange for feeling this mix of ${categoryLine}. Small check-ins with people you trust can help.`;
  } else {
    headline = 'That is a lot to carry';
    body =
      'A lot of these pressures hit close to home. You do not have to carry all of this by yourself. Reaching out to a professional or trusted person can help lighten the load.';
  }

  return (
    <section className="reflection-summary" aria-live="polite">
      <div>
        <p className="summary-kicker">Reflection</p>
        <h3>{headline}</h3>
        <p>{body}</p>
        {count > 0 && (
          <p className="summary-count">You marked {count} pressures that resonated.</p>
        )}
        {count >= 3 && (
          <p className="summary-help">
            If things feel heavy, a quick visit to the <Link to="/help">Help and resources</Link> page can
            offer next steps.
          </p>
        )}
      </div>
    </section>
  );
};

export default ReflectionSummary;
