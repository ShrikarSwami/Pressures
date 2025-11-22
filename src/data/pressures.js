const pressures = [
  {
    id: 'breakup-silence',
    category: 'Breakup',
    title: 'Silence feels like danger',
    voice: 'I keep checking my phone like a fire alarm is going off, even though I know the message will not come.',
    explanation:
      'After a breakup, your brain can treat quiet moments like a threat because it once linked connection with safety. That alarm feeling is a stress response, not proof that you are broken.',
    tags: ['Breakup', 'Abandonment'],
  },
  {
    id: 'self-blame-loop',
    category: 'Breakup',
    title: 'Replay and blame',
    voice: 'I replay every conversation, convinced that if I had said one more thing, I would not be alone right now.',
    explanation:
      'When trust gets shaken, the mind hunts for control by rewriting the past. Rumination can feel productive, but it usually just keeps the pain loud.',
    tags: ['Breakup', 'Self-blame'],
  },
  {
    id: 'helper-burnout',
    category: 'Burnout',
    title: 'Strong friend fatigue',
    voice: 'People call me when their world is on fire. I stay calm on the phone and crumble after I hang up.',
    explanation:
      'Carrying other people through crisis without space to rest can burn through your energy and sense of self. Even the most dependable friends need refueling and boundaries.',
    tags: ['Burnout', 'Helper role'],
  },
  {
    id: 'body-image-control',
    category: 'Body image',
    title: 'Shrinking to feel in control',
    voice: 'When life feels messy, I skip meals to feel like I am disciplined. The hunger almost feels like proof I am worthy.',
    explanation:
      'Linking self-worth to restriction can start quietly, especially when everything else feels chaotic. Bodies are not meant to be punished to earn care.',
    tags: ['Body image', 'Restriction'],
  },
  {
    id: 'panic-shutdown',
    category: 'Panic',
    title: 'Freeze and blackout',
    voice: 'When stress spikes, my vision narrows and I forget what I was doing. It scares me to not remember minutes of my day.',
    explanation:
      'Extreme stress can push the nervous system into survival mode. That fog or blackout feeling is the brain trying to protect you, and it is a sign you deserve support.',
    tags: ['Panic', 'Dissociation'],
  },
  {
    id: 'burden-isolation',
    category: 'Isolation',
    title: 'Hiding the heaviness',
    voice: 'I avoid texting friends because I do not want to be the gloomy one. The less I share, the smaller I feel.',
    explanation:
      'Feeling like a burden often leads to pulling away, which can make loneliness even louder. Connection rarely expects perfection; it needs honesty and small check-ins.',
    tags: ['Isolation', 'Loneliness'],
  },
  {
    id: 'savior-complex',
    category: 'Burnout',
    title: 'Trying to save everyone',
    voice: 'I cannot relax unless everyone around me is okay. Rest feels selfish when someone else is hurting.',
    explanation:
      'Growing up as the fixer can train you to ignore your own needs. Letting others carry their part is not abandonment; it is what keeps you from burning out.',
    tags: ['Helper role', 'Boundaries'],
  },
  {
    id: 'double-self',
    category: 'Identity',
    title: 'Two versions of me',
    voice: 'There is the version of me that jokes at work, and the one that falls apart in the shower. I am scared people would not like the second one.',
    explanation:
      'Masking pain to stay “easy to be around” can split your sense of self. Feeling divided is a signal to seek spaces where the whole version of you is welcomed.',
    tags: ['Identity', 'Masking'],
  },
  {
    id: 'body-hate',
    category: 'Body image',
    title: 'Mirror as a critic',
    voice: 'I see every flaw when I look in the mirror. I talk to myself in ways I would never talk to a friend.',
    explanation:
      'Critical self-talk often grows from comparison and shame. Practicing kinder language toward your body can slowly retrain the inner critic.',
    tags: ['Body image', 'Self-talk'],
  },
  {
    id: 'panic-night',
    category: 'Panic',
    title: 'Nighttime spirals',
    voice: 'At night my chest tightens and my thoughts speed up. Sleep feels impossible when my mind keeps rehearsing disasters.',
    explanation:
      'Anxious thoughts often get louder when the day quiets down. Slow breathing, grounding, and talking it out with someone you trust can lower the alarm.',
    tags: ['Panic', 'Sleep'],
  },
  {
    id: 'disappear',
    category: 'Isolation',
    title: 'Wanting to disappear',
    voice: 'Some days I wish I could fade out so no one has to deal with me or my mess.',
    explanation:
      'Wanting to vanish can be a sign of deep exhaustion and shame. You are not a burden for needing care. It is okay to ask for help; people and professionals are there for these moments.',
    tags: ['Isolation', 'Shame'],
  },
  {
    id: 'self-worth-performance',
    category: 'Identity',
    title: 'Only valued for output',
    voice: 'If I am not productive or helpful, I do not know who I am. Rest makes me feel useless.',
    explanation:
      'When worth is tied to performance, slowing down feels dangerous. You still have value when you are not producing for others.',
    tags: ['Worth', 'Burnout'],
  },
  {
    id: 'anger-underneath',
    category: 'Breakup',
    title: 'Anger hiding grief',
    voice: 'I snap over small things even though I know I am really hurt. Anger feels safer than admitting I feel abandoned.',
    explanation:
      'Anger can be a guard that protects softer feelings like grief. Naming the hurt underneath can make the anger less explosive.',
    tags: ['Breakup', 'Anger'],
  },
  {
    id: 'hyper-vigilance',
    category: 'Stress',
    title: 'Always on guard',
    voice: 'I plan every scenario because it feels like the only way to stay safe. My body never fully relaxes.',
    explanation:
      'Living in survival mode trains your nervous system to scan for danger. Over time that constant alertness is exhausting, and it is okay to seek support to help your body downshift.',
    tags: ['Stress', 'Vigilance'],
  },
  {
    id: 'body-numb',
    category: 'Body image',
    title: 'Numb instead of hungry',
    voice: 'Sometimes I skip food until I cannot feel anything. It is easier to be numb than anxious.',
    explanation:
      'Using restriction to mute feelings can hide pain for a moment but strains your body and mind. Nourishment and support are both forms of care you deserve.',
    tags: ['Body image', 'Numbness'],
  },
];

export default pressures;
