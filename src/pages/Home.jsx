import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="page home-page">
      <section className="hero">
        <p className="eyebrow">Pressures</p>
        <h1>A quiet space that shows what men carry and why it hurts, with short stories and explanations.</h1>
        <p className="lede">
          Short anonymous voices describe heartbreak, body image worries, panic, and burnout. Simple notes
          underneath explain why these feelings happen, and remind you that you are not alone.
        </p>
        <div className="cta-group">
          <Link className="btn btn-primary" to="/pressures">
            Start reading the pressures
          </Link>
          <div className="cta-secondary">
            <Link to="/learn">Learn more</Link>
            <span className="divider">•</span>
            <Link to="/help">Help and resources</Link>
          </div>
        </div>
        <p className="safety-note">
          This is for awareness and reflection, not a diagnostic tool. If something feels overwhelming,
          pausing to talk with someone you trust is a strong choice.
        </p>
      </section>

      <section className="info-grid" aria-label="How Pressures works">
        <article className="info-card">
          <h3>Anonymous voices</h3>
          <p>
            Brief first-person snippets capture what heavy days can sound like without revealing anyone&apos;s
            details.
          </p>
        </article>
        <article className="info-card">
          <h3>Gentle explanations</h3>
          <p>
            Each pressure comes with a short note about why those feelings show up, written in plain,
            non-clinical language.
          </p>
        </article>
        <article className="info-card">
          <h3>Your reflections</h3>
          <p>
            Tap “This resonates with me” to keep track of what feels familiar. It stays on this device so
            you can reflect privately.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Home;
