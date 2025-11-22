// Anonymized memorial messages (keeps numeric citation markers as log IDs)
// These entries preserve the raw, stream-of-consciousness voice. Content contains
// references to self-harm, panic, and deep distress. If you add more messages,
// ensure you have permission and avoid personally identifying details.

const messages = [
  {
    id: '2662',
    title: 'No time to grieve',
    content:
      "You realize unlike you where you probably were already over me months back I never really got time to grieve this whole mess and the best I can do is just exist through it till the pain dulls and that's not happening knowing all of the stuff I have... [cite: 2662]",
    tags: ['grief', 'isolation'],
  },
  {
    id: '2699',
    title: 'Alone',
    content: "...i just have to exist through it all on my own (i have no freinds) [cite: 2699]",
    tags: ['loneliness'],
  },
  {
    id: '2689-2690',
    title: 'Surrounded by reminders',
    content:
      "The best I can do right now is just exist through it and hope the pain dulls over time. It is not happening because I am surrounded by reminders of us. [cite: 2689, 2690]",
    tags: ['grief', 'reminders'],
  },
  {
    id: '2728',
    title: 'Existing until it dulls',
    content: "Everything happened so fast, and now I'm just existing until the pain dulls. [cite: 2728]",
    tags: ['grief'],
  },
  {
    id: '2883',
    title: 'Numbing',
    content: "Bruh I ain tryna be sober fr I just want this pain to go away [cite: 2883]",
    tags: ['substance', 'pain'],
  },
  {
    id: '2712-2731',
    title: 'No one to lean on',
    content:
      "I don't really have anyone to lean on, and it's been hard to process all of this by myself. [cite: 2712, 2731]",
    tags: ['support', 'isolation'],
  },
  {
    id: '2747',
    title: 'Wounds reopen',
    content:
      "...it will just re open the wounds that I am already having a terrible time trying to deal with [cite: 2747]",
    tags: ['grief', 'pain'],
  },
  {
    id: '2688',
    title: 'No time or space',
    content: "I never got the time or space to process any of this. [cite: 2688]",
    tags: ['grief'],
  },
  {
    id: '2687',
    title: 'Limits to pushing through',
    content: "...my ability to keep pushing through has limits. [cite: 2687]",
    tags: ['endurance'],
  },
  {
    id: '2752',
    title: 'Panic over triggers',
    content:
      "...with the amount of emotional and panic attacks I have even at little things like the mention of fucking Spotify... [cite: 2752]",
    tags: ['panic', 'triggers'],
  },
  {
    id: '2602',
    title: 'Breakdowns',
    content: "Until I’ll just have mental breakdowns and panic attacks [cite: 2602]",
    tags: ['panic'],
  },
  {
    id: '2609a',
    title: 'Unsafe sleeping',
    content:
      "I don’t feel safe sleeping in my bed anymore so I ask other people to sleep in it instead so I can sleep on the floor because I am scum who deserves to suffer [cite: 2609]",
    tags: ['sleep', 'shame'],
  },
  {
    id: '2609b',
    title: 'Panic waking',
    content:
      "I’ve woken up to like panic attacks and fell off my bed once and also anxiety attacks and stuff so I don’t sleep on it anymore it’s either my floor or under my bed [cite: 2609]",
    tags: ['panic', 'sleep'],
  },
  {
    id: '2652-2659',
    title: 'Dreams and staying asleep',
    content:
      "I have had dreams of her and my body didn't want to escape I just remained asleep even after waking up I wanted to go back. Its the reason I don't feel safe sleeping on my bed anymore... [cite: 2652, 2653, 2658, 2659]",
    tags: ['dreams', 'trauma'],
  },
  {
    id: '2911-2912',
    title: 'Vulnerability fear',
    content:
      "I never feel like you’re a bad person but sometimes you’ll take things just that extra step further and it terrifies me, you have pictures of me vulnerable and thought you claim you wouldn’t do anything with them. I could never know. [cite: 2911, 2912]",
    tags: ['vulnerability', 'trust'],
  },
  {
    id: '2628-2638',
    title: 'Self-harm and neglect',
    content:
      "...doesn’t develop an eating disorders and cut himself, and write on himself and have heart problems [cite: 2628, 2638]",
    tags: ['self-harm', 'eating'],
  },
  {
    id: '2650-2656',
    title: 'Hollowness',
    content:
      "I've been getting better I am eating meals every once in a while (even if they aren't the most healthy) I donated blood because I didn't want any in my body and I like the feeling of hollowness. [cite: 2650, 2656]",
    tags: ['self-neglect', 'recovery'],
  },
  {
    id: '2651-2657',
    title: 'Dream pulls',
    content:
      "I just remeber that dream seeing her and hearig her voice once again kind to me I fear if my other freind didn't kick me awake in his shaky sleepy state I wouldn't want to wake up and that has happened. [cite: 2651, 2657]",
    tags: ['dreams', 'suicidal-thoughts'],
  },
  {
    id: '2906',
    title: 'Too tired',
    content: "The issue is I don’t want keep trying. I’m too tired. [cite: 2906]",
    tags: ['suicidal-thoughts', 'exhaustion'],
  },
  {
    id: '2914-2418',
    title: 'Sacrificing happiness',
    content:
      "I can’t keep sacrificing my happiness for a love that isn’t being reciprocated in the way I needed. [cite: 2914, 2406, 2418]",
    tags: ['love', 'self-worth'],
  },
  {
    id: '2916-2420',
    title: 'What’s wrong with me',
    content:
      "I feel like I keep messing up and I just sit and wonder what’s actually wrong with me. [cite: 2916, 2408, 2420]",
    tags: ['self-doubt'],
  },
  {
    id: '2917-2421',
    title: 'Feeling like a loser',
    content:
      "When whatever semblance of ego I have wears off I realize that I am nothing but a loser and a joke. [cite: 2917, 2409, 2421]",
    tags: ['self-worth'],
  },
  {
    id: '2918-2422',
    title: 'Holding on',
    content:
      "I’m making you stay with me even though I’ve hurt you multiple times it means that you love me, and you’re hoping I’ll change. [cite: 2918, 2410, 2422]",
    tags: ['relationships', 'guilt'],
  },
  {
    id: '2919-2423',
    title: 'Choosing pain',
    content: "It means you choose pain over pleasure in the hopes I’ll be what you need. [cite: 2919, 2411, 2423]",
    tags: ['relationships'],
  },
  {
    id: '2905',
    title: 'Not that person',
    content: "I can’t be that person though because I am just not that type of person. [cite: 2905]",
    tags: ['identity'],
  },
  {
    id: '2920',
    title: 'Last gift',
    content:
      "Leaving you for your peace is my last gift to you, I know staying would only hurt us both and you deserve the kind of calm I could never bring. [cite: 2920]",
    tags: ['suicidal-thoughts', 'sacrifice'],
  },
  {
    id: '2915-2419',
    title: 'Only way to heal',
    content:
      "This isn’t easy but it’s the only way for me to heal and move on. [cite: 2915, 2407, 2419]",
    tags: ['healing', 'suicidal-thoughts'],
  },
  {
    id: '2521',
    title: 'Mask and shame',
    content:
      "I must keep the mask on forever I’m just doing a worst and worst job at doing it How can I fix it so no one things there’s anything wrong with em... [cite: 2521]",
    tags: ['masking', 'shame'],
  },
];

export default messages;
