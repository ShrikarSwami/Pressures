import PressureFeed from '../components/PressureFeed.jsx';
import ResourceFeed from '../components/ResourceFeed.jsx';
import ConversationCounter from '../components/ConversationCounter.jsx';

const supportThreads = [
  {
    id: 'support-1',
    prompt: 'I feel like a ghost since my breakup. I keep replaying everything.',
    response:
      'Anonymous reply: You are not crazy for replaying it. Many of us do. One thing that helped me was talking out loud to a friend without trying to fix it. You deserve that space too.',
    tags: ['Breakup', 'Grief'],
  },
  {
    id: 'support-2',
    prompt: 'I try to be the strong friend, but lately I have nothing left.',
    response:
      'Anonymous reply: Same. Setting a simple boundary like “no crisis calls after 9pm” changed my energy. You are allowed to rest without being selfish.',
    tags: ['Burnout', 'Helper role'],
  },
  {
    id: 'support-3',
    prompt: 'I hate how I look and skip meals to feel in control.',
    response:
      'Anonymous reply: I used to do that. What helped was telling my doctor and one trusted friend. They did not shame me—they just stayed with me. You deserve that care too.',
    tags: ['Body image'],
  },
  {
    id: 'support-4',
    prompt: 'Panic hits at night and I feel like I will black out.',
    response:
      'Anonymous reply: You are not alone. Slow breathing and texting a friend kept me grounded. Please consider talking with a professional as well; you do not have to handle this solo.',
    tags: ['Panic', 'Sleep'],
  },
];

const PressuresPage = () => {
  return (
    <main className="page">
      <section className="page-header">
        <p className="eyebrow">Read</p>
        <h1>The pressures men carry in silence</h1>
        <p className="lede">
          Scroll through anonymous, first-person style snippets paired with gentle explanations. Tap
          “This resonates with me” when something feels familiar; it will be saved on this device so you can
          notice patterns over time.
        </p>
        <p className="micro-copy">
          Some cards mention panic, body image, or wanting to disappear. If any card feels too heavy,
          pausing is okay. You can head to the Help and resources page anytime.
        </p>
      </section>

      <ConversationCounter />
      <PressureFeed />
      <section style={{ marginTop: '1rem' }}>
        <h2 style={{ margin: '0 0 0.5rem' }}>Want more than stories?</h2>
        <p style={{ margin: '0 0 0.75rem', color: 'var(--muted)' }}>
          If you want practical resources or other people's anonymized experiences, here are curated
          items to explore.
        </p>
        <ResourceFeed />
      </section>

      <section style={{ marginTop: '1.25rem' }}>
        <h2 style={{ margin: '0 0 0.4rem' }}>Anonymous support from other men</h2>
        <p style={{ color: 'var(--muted)', margin: '0 0 0.75rem' }}>
          These are anonymized notes where men reflect on each other&apos;s pressures. They are not therapy,
          but simple reminders that you are heard.
        </p>
        <div className="resource-grid">
          {supportThreads.map((thread) => (
            <article key={thread.id} className="resource-card">
              <div className="resource-type">Shared by men</div>
              <p style={{ color: 'var(--text)', fontWeight: 700, margin: '0 0 0.5rem' }}>
                “{thread.prompt}”
              </p>
              <p style={{ color: 'var(--muted)', margin: '0 0 0.5rem' }}>{thread.response}</p>
              <div className="tag-list">
                {thread.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PressuresPage;
