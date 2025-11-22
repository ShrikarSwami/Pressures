# Pressures

Pressures is a mobile-first Vite + React web app that quietly surfaces the emotional pressures men often carry in silence. Anonymous first-person snippets are paired with short explanations so readers feel less alone and see why these feelings show up. A simple reflection flow lets you mark the cards that resonate and nudges you toward help if things feel heavy.

## Getting started

1. Install dependencies (a local cache is fine):  
   `npm install --cache .npm-cache`
2. Start the dev server:  
   `npm run dev`
3. Build for production:  
   `npm run build`

## Main pages

- `Home` – intro, tagline, and a clear safety banner with links to start reading, learning, or finding help.
- `Pressures` – scrollable feed of anonymous-style cards with tag chips, gentle explanations, and a “This resonates with me” toggle that persists to localStorage. A reflection summary at the end recaps what landed and nudges toward help if many cards resonate.
- `Learn` – short educational sections on heartbreak withdrawal, helper burnout, body image and control, and panic/dissociation.
- `Help` – reiterates the disclaimer, normalizes reaching out, and lists a crisis line example (988 in the US) plus general guidance to find local resources.

## Components and data

- `Header` and `Footer` provide navigation and context.
- `PressureCard`, `PressureFeed`, and `ReflectionSummary` handle the main experience and localStorage persistence.
- Pressure content lives in `src/data/pressures.js` as an array of 12+ anonymized pressures across themes like breakup grief, body image, panic, burnout, and isolation.

## Safety and limitations

- This project is for awareness and reflection only; it is not therapy or medical advice.
- Avoids graphic details and does not provide instructions for self-harm or disordered eating.
- Includes gentle prompts to seek support (friends, doctors, counselors, or crisis lines) when things feel overwhelming.

Built for the HealTech Innovators Hackathon 2025.
