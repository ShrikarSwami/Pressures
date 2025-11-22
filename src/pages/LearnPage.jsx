const LearnPage = () => {
  return (
    <main className="page">
      <section className="page-header">
        <p className="eyebrow">Learn</p>
        <h1>Why these pressures hurt</h1>
        <p className="lede">
          These notes are not medical advice. They simply explain why heartbreak, burnout, body image
          struggles, and panic can feel so intense, and why none of it means you are weak.
        </p>
      </section>

      <section className="learn-section">
        <h2>Mechanisms of acute distress</h2>
        <p>
          Acute emotional distress after events such as relationship separation commonly activates the
          sympathetic nervous system and related neuroendocrine systems (e.g., elevated cortisol). This
          can lead to physiological symptoms including tachycardia, chest tightness, sleep disruption,
          and intrusive recollection.
        </p>
        <p>
          These responses are well-described in stress-research literature and reflect adaptive alarm
          systems rather than moral failure. If symptoms persist, evidence-based interventions include
          psychological therapies (CBT, trauma-focused approaches) and, where indicated, clinical
          assessment for medication.
        </p>
      </section>

      <section className="learn-section">
        <h2>Caregiver fatigue and burnout</h2>
        <p>
          Repeated exposure to others' crises without sufficient recovery produces allostatic load and
          increases risk of emotional exhaustion, disengagement, and decreased cognitive flexibility.
          Organizational and interpersonal limits (clear boundaries, scheduled rest) reduce this risk.
        </p>
        <p>
          Clinical approaches focus on workload adjustment, peer support, and structured self-care; when
          impairment occurs, consult occupational health or a mental health professional.
        </p>
      </section>

      <section className="learn-section">
        <h2>Body image and disordered eating</h2>
        <p>
          Experiencing loss of control in other domains may precipitate restrictive eating or compensatory
          behaviors in some individuals. Disordered eating increases risk for metabolic and cardiac
          complications and warrants assessment by healthcare professionals.
        </p>
        <p>
          Treatment pathways include nutritional rehabilitation, psychotherapy (e.g., CBT-E, MANTRA), and
          multidisciplinary medical monitoring when needed.
        </p>
      </section>

      <section className="learn-section">
        <h2>Panic, dissociation, and blackouts</h2>
        <p>
          Intense stress can produce panic attacks, transient dissociative experiences, and memory gaps.
          These phenomena are associated with acute autonomic hyperarousal and should be evaluated when
          recurrent or impairing. Immediate strategies include grounding and paced breathing; longer-term
          care is provided via psychotherapy and, if appropriate, medication.
        </p>
        <p>
          If episodes include loss of consciousness or medically unexplained blackouts, seek medical
          evaluation to rule out neurological or cardiological causes.
        </p>
      </section>
    </main>
  );
};

export default LearnPage;
