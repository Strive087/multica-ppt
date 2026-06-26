# Multica Web PPT Redesign

Date: 2026-06-27

## Goal

Rework the current Multica presentation so it is both usable as a slide deck and visually strong enough for a story-led internal talk. The redesign should fix layout breakage first, then shift the deck toward image-led editorial slides with lighter text density.

## Context

The current deck has two linked problems:

1. The presentation shell, Reveal container, and overview mode do not provide a stable stage. Content can feel cramped, unbalanced, or stacked in ways that break the slide experience.
2. The visual system is too generic. Slides read like application UI blocks rather than a presentation with rhythm, emphasis, and narrative pacing.

The user wants a redesign that:

- keeps the deck fully functional
- prioritizes images and diagrams as the main storytelling device
- uses a magazine-like presentation style rather than a technical dashboard aesthetic
- preserves the existing topic and core slide sequence

## Design Direction

The deck will move to an editorial presentation style:

- warm neutral background instead of the current cold dark shell
- darker ink-like typography with restrained accent colors
- stronger hero imagery and more deliberate whitespace
- slides designed to be spoken over, not read line by line

The intended audience experience is:

1. notice the main image or composition first
2. understand the page thesis from one short line
3. use minimal supporting points as anchors while listening

## Scope

In scope:

- redesign the slide-stage layout for slide mode
- redesign overview mode into a usable thumbnail wall
- reduce per-slide text density
- create or generate a cohesive set of presentation visuals
- update tests affected by presentation behavior

Out of scope:

- changing the presentation topic
- adding remote image fetching or third-party asset pipelines
- building a full CMS-like slide templating system
- introducing speaker notes, export flows, or printing support

## Architecture

### 1. Presentation Shell

`src/components/presentation/presentation-shell.tsx` becomes the stable outer stage for both views.

Responsibilities:

- provide the page frame and brand header
- maintain `mode` and `currentSlide`
- render a fixed, presentation-oriented canvas area
- place controls and progress where they do not compete with slide content

Expected outcome:

- the deck reads like a presentation on a stage, not like a document in a scrolling page

### 2. Slide Mode

`src/components/presentation/reveal-deck.tsx` remains the interaction layer for Reveal but stops owning visual layout.

Responsibilities:

- initialize and destroy Reveal safely
- keep slide index synchronized
- provide keyboard and button navigation
- host a stable slide viewport with predictable aspect and padding

Design changes:

- move to a fixed or bounded stage with a clear visual frame
- simplify controls so they support but do not dominate the slide
- ensure slides fit within the viewport without collapsing into long content stacks

### 3. Overview Mode

`src/components/presentation/overview-deck.tsx` becomes a grid of uniform preview cards.

Responsibilities:

- show a clean overview of all slides at once
- make jump-to-slide behavior obvious
- preserve the same visual language as slide mode

Design changes:

- replace full-content stacked rendering with thumbnail-style cards
- keep only title, kicker, a small preview visual, and current-state highlighting
- optimize for scanning and fast selection

### 4. Slide Composition

`src/components/presentation/slide-content.tsx` will shift from a generic two-column content renderer to a slide-template renderer keyed by slide type.

Template families:

- `hero`: large image-led cover composition
- `diagram`: large system/process visual with minimal thesis text
- `story`: image block plus one-line argument and a few supporting points
- `summary`: closing or framing layout with strong typographic emphasis

This does not require a new full schema. The existing `visualType` field can remain the routing mechanism, with internal layout logic mapped from current slide categories.

### 5. Visual Assets

Images will be generated locally through the available image workflow and integrated as first-class presentation assets.

Target generated assets:

- cover hero image
- Multica runtime relationship visual
- object collaboration visual
- agent capability visual
- migration practice workflow visual
- closing page image or composition

Constraints:

- assets should feel like one deck, not six unrelated illustrations
- diagrams should remain legible inside the chosen warm editorial theme
- generated images should support explanation, not act as decoration only

### 6. Content Density

`src/content/slides.ts` will be edited to reduce reading load.

Per slide target:

- one title
- one short thesis sentence
- two or three support points at most

This keeps the current flow but makes each page more speakable.

## Data Flow

1. `PresentationShell` owns mode and current slide index.
2. `RevealDeck` emits slide changes back to the shell.
3. `OverviewDeck` selects a slide index and returns to slide mode.
4. `SlideContent` chooses a layout template from slide metadata.
5. Visual components or generated assets render inside the chosen template.

This preserves the current interaction model while separating stage layout from per-slide design.

## Error Handling and Stability

Primary risks:

- Reveal sizing and internal transforms fighting custom layout
- image-heavy slides overflowing smaller laptop viewports
- overview cards drifting away from slide-mode visual language

Mitigations:

- keep Reveal responsible for navigation only, not deep layout decisions
- constrain content inside a predictable stage size and visual viewport
- prefer bounded text blocks and fixed preview ratios
- verify behavior at common desktop widths before closing the task

## Testing Strategy

Automated coverage should confirm behavior that matters after the redesign:

- slide mode still renders and navigates
- overview mode still switches and selects correctly
- Reveal synchronization still avoids premature interaction bugs

Existing tests should be updated where text or DOM structure necessarily changes. New tests should focus on behavior and view switching, not fragile presentation markup.

Manual verification should confirm:

- desktop slide mode looks intentionally composed
- no slide content overflows the intended stage
- overview mode is scannable and selectable
- the deck now feels image-led rather than text-led

## Implementation Outline

1. Stabilize shell and stage layout.
2. Refactor slide mode and overview mode into separate, cleaner visual surfaces.
3. Rework slide content templates.
4. Generate and integrate the new visual assets.
5. Trim slide copy to match the new presentation style.
6. Update and run tests.

## Acceptance Criteria

- The slide deck works reliably in slide mode and overview mode.
- The presentation uses a cohesive warm editorial style.
- Every major slide has a strong visual focal point.
- Text density is clearly reduced from the current version.
- Navigation and slide synchronization remain functional.
- The resulting deck is suitable for a spoken internal presentation.
