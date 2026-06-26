# Multica Web PPT Design

## Overview

Build a Vercel-deployable web presentation that introduces Multica's core product model first, then closes with a practical section on how it can be used for report-migration work. The final artifact should feel like a real presentation during a live internal share, while still being readable later as a self-guided long-form page.

Primary audience: internal engineering teammates.

Primary language: Chinese.

Presentation mode:
- Default to slide-by-slide navigation.
- Also support overview / scroll reading from the same content source.

## Goals

- Explain what Multica is without assuming prior product knowledge.
- Clarify the runtime model so teammates understand what runs in the cloud, what runs locally, and why that matters.
- Show the core collaboration objects and workflows that make Multica useful for engineering work.
- End with a concrete report-migration workflow that connects the product capabilities to real day-to-day work.
- Ship the presentation as a polished web artifact that can be hosted on Vercel.

## Non-Goals

- Reproduce the entire Multica docs site.
- Build a generic CMS for future presentations.
- Implement speaker notes, export-to-PDF, or account-backed editing.
- Turn the practice section into a detailed migration playbook for every report type.

## Source Content Boundary

The presentation content is split into two clearly labeled sources:

1. Official-product summary
   - Based on Multica documentation.
   - Covers product positioning, runtime model, collaboration objects, and common entry points.

2. Personal-practice section
   - Explicitly framed as "my usage pattern" rather than official guidance.
   - Focuses on how Multica can help structure and accelerate report-migration work.

Key docs to summarize:
- `Welcome`
- `How Multica works`
- `Issues and projects`
- `Agents`
- `Skills`
- `Tasks`
- `Autopilots`
- `Desktop app`
- `CLI`

## Core Product Takeaways To Convey

These are the main ideas the deck should communicate from the docs:

- Multica is a task collaboration platform for humans and AI agents in the same workspace.
- The runtime model is the key mental model: server, daemon, and AI coding tool coordinate to execute work.
- Agents are first-class workspace members that can be assigned issues, mentioned in comments, and collaborate through the same work objects as humans.
- Tasks are the execution unit for agent runs, with explicit state transitions and retry semantics.
- Skills act as attachable knowledge packs that shape agent behavior.
- Autopilots can start work on schedules, webhooks, or manual triggers.
- Desktop app and CLI are practical day-to-day entry points, while Cloud / self-host determine backend hosting style.

## Content Structure

Target deck length: around 9 slides.

### 1. Cover

- Presentation title
- Subtitle explaining the share angle
- Presenter identity / context
- Strong visual cue around human-agent collaboration

### 2. Why Multica

- Why this is not just another chat UI
- Why task-oriented collaboration matters for engineering teams
- Short framing for why the tool is relevant to internal workflows

### 3. How Multica Works

- Central slide for the `server -> daemon -> AI coding tool` model
- Explain that the server coordinates but agent execution happens through local or connected runtimes
- Reduce confusion about where work actually runs

### 4. Core Objects

- Workspace
- Project
- Issue
- Agent
- Task
- Show how these objects connect rather than listing them independently

### 5. Agent Capability Map

- Issue assignment
- Comment mentions
- Chat entry points
- Skills
- Squads
- Autopilots

### 6. Usage Surfaces

- Desktop app
- CLI
- Cloud vs self-host
- When each entry point is practical

### 7. Why It Fits Engineering Collaboration

- Agent as accountable worker instead of just a text assistant
- Shared task context
- Reusable knowledge via skills
- Better fit for multi-step execution than ad hoc prompting

### 8. My Report Migration Practice

- How report migration work can be decomposed into issues and subtasks
- How specialized skills can encode migration rules and repo conventions
- How repeated checks, reruns, and follow-up tasks map naturally to Multica workflows
- What kinds of work still require human review and judgment

### 9. Closing Summary

- Best-fit use cases
- Expected benefits for internal engineering work
- Practical next step for the team

## UX And Visual Direction

The site should look like a presentation first, not a generic documentation page.

Visual direction:
- Dark-first presentation theme
- Colors centered on graphite, steel, cyan-blue, and restrained orange highlights
- Motion used for staged reveals and slide transitions, not constant decoration
- Backgrounds should use gradients, subtle grid textures, and systems-like spatial cues

Reading behavior:
- Desktop defaults to slide mode
- Mobile gracefully degrades into a readable long page
- Same content source powers both modes

Navigation:
- Keyboard left/right navigation
- Scroll and click navigation
- Visible progress indicator
- Section-aware navigation or compact table of contents

## Technical Design

Recommended stack:
- Next.js
- TypeScript
- Tailwind CSS
- `reveal.js` for slide behavior

Architecture:
- `app/` hosts the presentation route and top-level page shells
- Presentation content lives in structured local data, not hard-coded inside one monolithic component
- Slide renderer maps content blocks into reusable slide layouts
- Overview / scroll mode reuses the same content source with a different container

Why `reveal.js`:
- Native slide semantics
- Mature keyboard and progress behaviors
- Better fit for a real web-PPT feel than building slide controls from scratch
- Easier to keep the project focused on content and visual polish

## Content Model

Use a local typed content structure for each slide:

- `id`
- `section`
- `title`
- `kicker` or short context line
- `summary`
- `bulletPoints`
- `visualType`
- `sourceLinks`

Optional fields:
- `speakerAngle`
- `callout`
- `diagramNodes`
- `diagramEdges`

This keeps the official-doc summary and personal-practice content easy to edit later.

## Interaction Details

- Default landing route opens the presentation view
- Toggle to switch into overview / scroll mode
- Reveal animations should be intentional and sparse
- Content should remain readable even if JavaScript animations are reduced

## Error Handling And Resilience

- If `reveal.js` enhancement fails, the page should still render slide content as normal stacked sections
- Source links should be optional at render time so incomplete data does not crash the deck
- Mobile layout should avoid overflow-heavy slide framing

## Testing Strategy

- Validate static build success
- Verify slide navigation works in desktop width
- Verify overview mode renders the same content correctly
- Verify mobile reading experience remains usable
- Verify Vercel build configuration works without local-only assumptions

## Deployment Plan

- Host on Vercel
- Keep the site static-friendly where possible
- Provide a concise `README` with local start, build, and deploy notes

## Risks And Mitigations

### Risk: Too much doc detail turns the deck into a manual

Mitigation:
- Limit each slide to one core message
- Move depth into concise bullets and source links

### Risk: Practice section feels disconnected from product intro

Mitigation:
- Reuse product concepts directly in the migration section
- Explicitly map issue / skill / task / review loops to migration work

### Risk: Slide library styling fights custom design

Mitigation:
- Keep `reveal.js` focused on navigation behavior
- Override presentation visuals through app-level styling and custom slide components

## Open Decisions Already Resolved

- Audience: internal team
- Language: Chinese
- Structure: tool introduction first, practice last
- Experience: both slide mode and overview mode
- Library direction: `Next.js + reveal.js`

## Implementation Handoff

The implementation phase should produce:
- A fresh project scaffold
- A complete first-pass deck with real Chinese content
- A clean reveal-based slide mode
- An overview mode using the same data
- Vercel-ready deployment configuration

## References

- [Multica Docs](https://multica.ai/docs)
- [How Multica works](https://multica.ai/docs/how-multica-works)
- [Issues and projects](https://multica.ai/docs/issues)
- [Agents](https://multica.ai/docs/agents)
- [Skills](https://multica.ai/docs/skills)
- [Tasks](https://multica.ai/docs/tasks)
- [Autopilots](https://multica.ai/docs/autopilots)
- [Desktop app](https://multica.ai/docs/desktop-app)
- [CLI](https://multica.ai/docs/cli)
