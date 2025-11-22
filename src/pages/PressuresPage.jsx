import PressureFeed from '../components/PressureFeed.jsx';

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
      <PressureFeed />
    </main>
  );
};

export default PressuresPage;
