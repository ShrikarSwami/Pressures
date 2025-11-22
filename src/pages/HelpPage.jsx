const HelpPage = () => {
  return (
    <main className="page">
      <section className="page-header">
        <p className="eyebrow">Help</p>
        <h1>Help and resources</h1>
        <p className="lede">
          This project is for awareness and reflection only. It is not therapy or medical advice. If you are
          in crisis or feel unsafe with your thoughts, please reach out to a trusted person or a crisis line
          in your region.
        </p>
      </section>

      <section className="help-section">
        <h2>It is okay to ask for help</h2>
        <p>
          Talking with a counselor, doctor, or support line is a normal way to handle intense feelings. You
          are not weak or dramatic for wanting professional backup.
        </p>
        <p>
          If you are in the United States, you can reach a free 24/7 crisis line by dialing 988. If you are
          elsewhere, search online for a crisis line or mental health helpline in your country.
        </p>
        <p>Other examples (check what is active in your region):</p>
        <ul className="help-list">
          <li>Crisis Text Line (US/Canada/UK/Ireland): text HOME to 741741 (or 686868 in Canada).</li>
          <li>Local hospital or doctor: ask for a same-day visit if you feel unsafe.</li>
          <li>Campus or workplace support lines if available.</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>Simple steps that can lower the weight</h2>
        <ul className="help-list">
          <li>Tell one trusted person that things feel heavy, even if you do not know what to ask for.</li>
          <li>Schedule a short visit with your doctor or a counselor to talk about stress, panic, or mood.</li>
          <li>Save a local or national helpline number in your phone now, so it is ready if you need it.</li>
          <li>Keep eating, moving, and sleeping as kindly as you can; basic care helps your brain steady itself.</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>If you support someone else</h2>
        <p>
          You do not have to fix their situation. Listening, validating their feelings, and encouraging
          professional help can be more than enough. Protect your own rest, too.
        </p>
      </section>
    </main>
  );
};

export default HelpPage;
