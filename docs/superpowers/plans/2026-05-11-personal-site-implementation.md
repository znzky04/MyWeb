# Personal Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first version of the personal website described in the approved design spec, including a bright homepage, projects/about pages, and a four-channel notes space backed by local Markdown content.

**Architecture:** Use a Next.js App Router site with typed content/config files and Markdown-driven notes content. Keep the site static-first, asset-replaceable, and easy to maintain, while separating the clean public-facing homepage from the more expressive notes area.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, markdown/MDX parsing, static assets

---

### Task 1: Scaffold the Application

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `public/`
- Modify: `.gitignore`

- [ ] **Step 1: Generate the Next.js application scaffold**

Run:

```bash
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Expected:

- A Next.js app is generated in the current repository
- Existing `docs/` directory remains in place
- `src/app/` and `public/` are created

- [ ] **Step 2: Review generated files before editing**

Run:

```bash
git status --short
```

Expected:

- Generated app files are visible as uncommitted changes
- Existing spec and plan docs remain untouched

- [ ] **Step 3: Normalize `.gitignore` if the generator changes it**

Ensure `.gitignore` still excludes at minimum:

```gitignore
node_modules/
.next/
dist/
build/
out/
.env
.env.local
.vercel/
coverage/
```

- [ ] **Step 4: Verify the fresh app starts**

Run:

```bash
npm run dev
```

Expected:

- Dev server starts without TypeScript or config errors
- Default Next.js starter page renders locally

- [ ] **Step 5: Commit scaffold**

```bash
git add .
git commit -m "chore: scaffold nextjs app"
```

### Task 2: Establish the Design System and Content Structure

**Files:**
- Create: `src/lib/site-config.ts`
- Create: `src/lib/types.ts`
- Create: `src/content/profile.ts`
- Create: `src/content/projects.ts`
- Create: `src/content/notes/README.md`
- Create: `src/content/notes/life/`
- Create: `src/content/notes/study/`
- Create: `src/content/notes/games/`
- Create: `src/content/notes/anime/`
- Create: `public/images/`
- Create: `public/audio/`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create typed site-level configuration**

Define the main site configuration in `src/lib/types.ts` and `src/lib/site-config.ts`, including:

- Navigation items
- Notes category definitions
- Social link shape
- Music toggle metadata
- Replaceable asset paths

- [ ] **Step 2: Create editable profile content**

Add `src/content/profile.ts` with fields for:

- Name
- Identity line
- Intro copy
- Keywords
- About copy
- Timeline items
- Contact links

- [ ] **Step 3: Create editable projects content**

Add `src/content/projects.ts` with a typed array for:

- Project name
- Summary
- Stack
- Highlight
- Link
- Status

- [ ] **Step 4: Reserve replaceable asset locations**

Create these directories and keep them documented for later user replacement:

```text
public/images/
public/audio/
src/content/notes/
```

- [ ] **Step 5: Set global visual tokens**

Implement CSS variables in `src/app/globals.css` for:

- Backgrounds
- Surfaces
- Text colors
- Accent colors
- Borders
- Shadows
- Radii
- Motion timing

The default theme should feel bright, airy, and youthful.

- [ ] **Step 6: Wire the global shell**

Update `src/app/layout.tsx` so the app:

- Sets site metadata
- Imports the global styles
- Uses a stable root background
- Supports future site-level music/UI chrome

- [ ] **Step 7: Commit design-system and content foundation**

```bash
git add .
git commit -m "feat: add content model and design system foundation"
```

### Task 3: Build Shared UI Primitives and Layout Sections

**Files:**
- Create: `src/components/layout/site-header.tsx`
- Create: `src/components/layout/site-footer.tsx`
- Create: `src/components/layout/container.tsx`
- Create: `src/components/layout/section-heading.tsx`
- Create: `src/components/ui/button-link.tsx`
- Create: `src/components/ui/tag.tsx`
- Create: `src/components/ui/project-card.tsx`
- Create: `src/components/ui/timeline-item.tsx`
- Create: `src/components/ui/category-card.tsx`
- Create: `src/components/ui/search-input.tsx`

- [ ] **Step 1: Create shared layout primitives**

Build reusable primitives for:

- Fixed-width content container
- Shared section heading pattern
- Header/footer shell

- [ ] **Step 2: Create reusable homepage/project primitives**

Build:

- CTA button link component
- Project card component
- Timeline item component

- [ ] **Step 3: Create notes-space primitives**

Build:

- Category card component
- Search input component
- Small utility tag or badge component if needed for note cards

- [ ] **Step 4: Verify TypeScript and linting still pass**

Run:

```bash
npm run lint
```

Expected:

- No lint errors

- [ ] **Step 5: Commit shared UI layer**

```bash
git add .
git commit -m "feat: add shared layout and ui primitives"
```

### Task 4: Build the Main Homepage

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/home/hero-section.tsx`
- Create: `src/components/home/intro-section.tsx`
- Create: `src/components/home/projects-section.tsx`
- Create: `src/components/home/timeline-section.tsx`
- Create: `src/components/home/notes-entry-section.tsx`
- Create: `src/components/home/contact-section.tsx`

- [ ] **Step 1: Write the homepage structure first**

Implement the homepage with these sections in order:

- Hero
- Intro
- Selected projects
- Timeline
- Notes entry section
- Contact section

- [ ] **Step 2: Build the hero around replaceable art**

The hero must support:

- Name and identity line
- Intro copy
- Two main CTAs
- Replaceable art panel from `public/images/`

- [ ] **Step 3: Build the notes-entry section as a strong visual handoff**

This section should feel like an invitation into a second world of the site, not just a plain blog link block.

- [ ] **Step 4: Verify homepage behavior in the browser**

Run:

```bash
npm run dev
```

Then verify:

- Desktop layout reads cleanly
- The page feels bright and not gloomy
- The notes entry area stands out visually

- [ ] **Step 5: Commit homepage**

```bash
git add .
git commit -m "feat: build homepage experience"
```

### Task 5: Build About and Projects Pages

**Files:**
- Create: `src/app/about/page.tsx`
- Create: `src/app/projects/page.tsx`
- Create: `src/components/projects/projects-grid.tsx`
- Create: `src/components/about/about-content.tsx`

- [ ] **Step 1: Implement the About page**

The page should render:

- Longer introduction
- Interests
- Personal direction
- A more narrative tone than the homepage

- [ ] **Step 2: Implement the Projects page**

The page should render:

- Full project list
- Clear summaries
- Project links
- Stack/highlight information

- [ ] **Step 3: Verify page routing**

Check these routes:

- `/`
- `/about`
- `/projects`

Expected:

- All pages render without route errors
- Navigation between them works

- [ ] **Step 4: Commit public-facing pages**

```bash
git add .
git commit -m "feat: add about and projects pages"
```

### Task 6: Implement Markdown-Driven Notes Infrastructure

**Files:**
- Create: `src/lib/notes.ts`
- Create: `src/lib/markdown.ts`
- Create: `src/content/notes/life/welcome.md`
- Create: `src/content/notes/study/welcome.md`
- Create: `src/content/notes/games/welcome.md`
- Create: `src/content/notes/anime/welcome.md`
- Modify: `package.json`

- [ ] **Step 1: Add markdown dependencies**

Install the parsing layer:

```bash
npm install gray-matter remark remark-html
```

- [ ] **Step 2: Create typed notes utilities**

Add note utilities that can:

- Read category folders
- Parse frontmatter
- Return note lists by category
- Return single note content by slug
- Support title search filtering

- [ ] **Step 3: Create starter note files**

Add one sample entry per category to prove the content system works.

Each file should use minimal frontmatter:

```md
---
title: "Sample title"
---

Body content here.
```

- [ ] **Step 4: Verify note parsing with a focused check**

Run a build after wiring markdown utilities:

```bash
npm run build
```

Expected:

- Markdown content parses without runtime errors

- [ ] **Step 5: Commit notes infrastructure**

```bash
git add .
git commit -m "feat: add markdown notes content system"
```

### Task 7: Build the Notes Hub, Category Pages, and Detail Pages

**Files:**
- Create: `src/app/notes/page.tsx`
- Create: `src/app/notes/[category]/page.tsx`
- Create: `src/app/notes/[category]/[slug]/page.tsx`
- Create: `src/components/notes/notes-hub.tsx`
- Create: `src/components/notes/notes-list.tsx`
- Create: `src/components/notes/note-card.tsx`
- Create: `src/components/notes/note-detail.tsx`

- [ ] **Step 1: Build the notes landing page**

The hub page must present the four fixed categories:

- Daily writing
- Study notes
- Game notes
- Anime impressions

This page should feel like a themed gateway, not a generic archive.

- [ ] **Step 2: Build the category list pages**

Each category page must:

- Show that category's entries only
- Keep the visual tone expressive but usable
- Support optional title search

- [ ] **Step 3: Build the note detail page**

Each detail page must:

- Render title and markdown body
- Support inline images inside markdown
- Link back to the relevant category page

- [ ] **Step 4: Verify all notes routes**

Check:

- `/notes`
- `/notes/life`
- `/notes/study`
- `/notes/games`
- `/notes/anime`
- One detail page in each category

- [ ] **Step 5: Commit notes UI**

```bash
git add .
git commit -m "feat: add notes hub and category pages"
```

### Task 8: Add Replaceable Site-Level Music and Asset Guidance

**Files:**
- Create: `src/components/layout/site-music.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `README.md`

- [ ] **Step 1: Add optional site-level music wiring**

If a music file exists in `public/audio/`, the site should be able to use it as optional background music. Keep the control lightweight and easy to disable.

- [ ] **Step 2: Document replaceable resources**

Update `README.md` with a short maintainer guide covering:

- Where to replace homepage art
- Where to replace notes-space art
- Where to replace site-level music
- Where to add notes markdown files

- [ ] **Step 3: Commit asset guidance**

```bash
git add .
git commit -m "docs: add asset replacement guidance"
```

### Task 9: Responsive QA, Build Verification, and Cleanup

**Files:**
- Modify: any affected page or component files
- Test: full app via `npm run lint` and `npm run build`

- [ ] **Step 1: Run lint**

```bash
npm run lint
```

Expected:

- No lint errors

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected:

- Production build succeeds

- [ ] **Step 3: Run visual verification in the browser**

Check desktop and mobile-sized views for:

- Homepage readability
- Notes hub clarity
- Category page usability
- Detail page image rendering
- No dark/gloomy tone drift

- [ ] **Step 4: Clean any placeholder or debug artifacts**

Remove:

- Generator leftovers not needed by the design
- Placeholder text that breaks the site tone
- Temporary styles or test-only fragments

- [ ] **Step 5: Commit the verified first version**

```bash
git add .
git commit -m "feat: deliver first version of personal site"
```

## Self-Review

- Spec coverage: This plan covers homepage, about/projects, notes hub, four category pages, detail pages, local markdown storage, inline image support, replaceable assets, optional site-level music, and lightweight title search.
- Placeholder scan: No `TODO`, `TBD`, or abstract “implement later” steps are left in the task list.
- Type consistency: The route shape, category names, and content model remain consistent with the approved design spec.

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-05-11-personal-site-implementation.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

The user has already asked to continue directly, so proceed with **Inline Execution** unless redirected.
