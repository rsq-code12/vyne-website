## Goals

* Add a visually led section that explains why VYNE is more than current AI models and how it works differently.

* Match existing design language: neon accents, mono headings with `//`, grid cards, subtle motion via framer-motion and `FadeIn`.

* Keep copy concise; visuals carry the message.

## Placement

* Insert the new section right after `Explanation` and before `Status` to follow the narrative: intro → differentiation → build status.

* Integration point: `App.tsx:17` (directly after `<Explanation />`).

## Visual Concept

* Two-part section for clarity and impact:

1. Side‑by‑side comparison grid (LLMs Today vs VYNE Neural Engine)

* 4 rows of paired cards with icons, short labels.

* Styling: `bg-vyne-card` tiles, `border-white/5` with hover `border-vyne-neon/30`, rounded, `FadeIn` stagger.

* Headline: `// WHY VYNE IS DIFFERENT` in mono with neon `//`.

1. Animated pipeline: Capture → Neural Engine (core) → Context Injection

* Three highlighted blocks centered; the middle “Neural Engine” glows (neon ring), side blocks are subdued.

* Ambient motion: pulsing neon lines between blocks using `motion.div` and gradient `bg-grid-pattern` backdrop.

## Content Outline

* Comparison (left = LLMs Today / right = VYNE):

* “Session‑Bound” vs “Persistent Long‑Term Memory”

* “Limited Context Window” vs “Recall Across Months/Projects”

* “Cloud‑Centric” vs “Local + Private”

* “One‑Shot Prompting” vs “Automatic Context Injection”

* Pipeline captions:

* Capture: browser/desktop/plugins quietly extract relevant context.

* Neural Engine: locally processes, indexes, builds a personal knowledge map.

* Injection: feeds any AI/Copilot the exact missing context at ask‑time.

## Motion & Interaction

* Use `FadeIn` for headings and tiles with staggered delays.

* Gentle hover scale on tiles (`whileHover={{ scale: 1.03 }}`) to add tactility.

* Animated connectors between pipeline blocks with low‑opacity neon to avoid distraction.

## Accessibility & Responsiveness

* Semantic structure: one `section` per part, headings as `h2`, tiles as `article`.

* Color contrast: neon accents on dark, body text in `text-gray-300/400`.

* Responsive grids: stack on mobile (1‑col → 2‑col → 4‑row pairs), maintain readability.

* Keyboard focus visible on interactive elements; no motion gates that block navigation.

## Implementation Steps

1. Create `components/Comparison.tsx` with two subparts: `ComparisonGrid` and `Pipeline` using Tailwind + `framer-motion` + `FadeIn`.
2. Title block: mono uppercase with neon `//`, centered, consistent with `Explanation`.
3. ComparisonGrid: 2‑column layout on md+, paired rows (4), icon + short label + 1‑line desc.
4. Pipeline: 3 cards with animated neon connectors, central card labeled “VYNE Neural Engine”.
5. Import and insert `<Comparison />` into `App.tsx` after `<Explanation />`.
6. Verify on mobile and desktop in preview; adjust spacing (`py-24`, `gap-8/12`).

## Copy (Concise, Visual‑First)

* Title: `// WHY VYNE IS DIFFERENT`

* Tiles:

* Session‑Bound → Persistent Memory

* Limited Context → True Recall Over Time

* Cloud‑Centric → Local + Private

* One‑Shot Prompts → Automatic Context Injection

* Pipeline captions: Capture → Neural Engine → Injection (1‑line each).

## Libraries & Style Alignment

* Reuse existing imports: `lucide-react` icons, `framer-motion`, and `FadeIn`.

* Tailwind palette already defines `vyne.*`; use `bg-vyne-card`, `bg-vyne-dark`, `text-vyne-neon`.

## Approval

* Confirm this placement and visual approach. On approval, I will implement the `Comparison` component, wire it into `App.tsx`, and verify responsiveness and motion balance.

