# Unslop pass (November 24, 2026)

Done with the unslop skill by Damir Sokolovsky (@heydamir), CC BY 4.0.

## Audit

Medium slop on a strong base (dark stage, lime brand, Space Grotesk, a printed attendee badge). Signs found:

- Blurred lime and pink orbs and a glowing grid behind the hero (`src/components/Hero.astro`)
- Pill chips above the headline (date, city, days to go)
- A looping marquee of uppercase topics in a full-width lime band, and a badge that sways forever
- Outlined (stroke-only) "2027" in the headline
- Uppercase tracked mono labels everywhere: eyebrows with a decorative dash (`src/styles/global.css`), hero facts, badge label, ticket notes, speaker companies, hotel distances, sponsor tiers, chips
- 700 weights on the headline, stats, prices, buttons, day tabs, sponsor pitch and links
- The featured ticket with a lime-to-green gradient, a 2px neon border and a lime glow shadow
- Speaker portraits on dark gradients with extra outline rings, in six hues including purple
- Pill buttons, day tabs and track filters; buttons and speaker cards lifting on hover
- Striped backgrounds on break and social rows in the agenda
- An exclamation mark in the contact form's thank-you message; trailing period on the tagline

## Direction

- Product: a two-day Portland conference for people working between design and engineering
- Character: loud, practical, a little nerdy
- World: a converted foundry hall on conference morning; lanyards, printed badges, stage light, the program booklet
- Moments: the attendee badge on its lanyard in the hero, and the agenda's track colors
- Signature: badge-print mono for dates, times, places and small labels, in sentence case like a printed program

## Changes

- Color: orbs, grid and striped rows removed; featured ticket is a raised surface with a 1px lime hairline and no glow; lime kept for the year, primary actions, the countdown and the featured tier
- Copy: date, city and days to go are one quiet mono line instead of pills; tagline without a period; no exclamation marks
- Type: sentence-case mono labels with no tracking; the eyebrow dash removed; headings 500 to 600, stats and prices 500 with tabular figures; "2027" filled in lime instead of outlined
- Details: buttons and tabs 10px, filters 8px, chips 6px; speaker portraits on flat deep tones, one shape each, purple swapped for an ember red
- Layout: the marquee became a static topics row under the stats
- Motion: no sway, no marquee, no hover lift; a small press scale on buttons and color changes on one easing curve

screenshot-2: Agenda with day tabs, track filters and Day 1
screenshot-3: Tickets
