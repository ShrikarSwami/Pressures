import { Link } from 'react-router-dom';
import ResourceFeed from '../components/ResourceFeed.jsx';

const Home = () => {
  return (
    <main className="page home-page">
      <section className="hero">
        <p className="eyebrow">Pressures</p>
        <h1 style={{ color: 'var(--text)' }}>A quiet space that shows what men carry and why it hurts</h1>
        <p className="lede" style={{ color: 'var(--muted)' }}>
          Brief, anonymous first-person voices paired with short explanations. This site is designed for
          reflection and to point toward practical support.
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
          This project is for awareness and reflection only and is not medical advice. If you feel unsafe
          or in crisis, please use the Help and resources link or contact local emergency services.
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

      <section style={{ marginTop: '1rem' }}>
        <h2 style={{ margin: '0 0 0.5rem' }}>Explore real experiences & resources</h2>
        <p style={{ margin: '0 0 0.75rem', color: 'var(--muted)' }}>Read anonymized first-person experiences and curated resources to find practical next steps.</p>
        <ResourceFeed />
      </section>
    </main>
  );
};

export default Home;
