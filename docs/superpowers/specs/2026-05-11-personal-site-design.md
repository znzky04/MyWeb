# Personal Site Design Spec

**Date:** 2026-05-11

## 1. Project Goal

Build a personal website with two complementary halves:

- A bright, polished, youthfully styled personal homepage that presents identity, projects, skills, and growth.
- A more expressive personal record space for daily writing, study notes, game notes, and anime impressions.

The site should feel distinctive and visually designed, but remain easy to maintain, easy to restyle, and simple to deploy. It should not require login, comments, or a heavy backend.

## 2. Core Product Direction

### Recommended Positioning

The site should feel like:

- `Portfolio-like personal homepage`
- `Private themed record space`

The homepage is the public-facing, cleaner, more structured side. The record space is the more personal, relaxed, interest-driven side.

### Tone Split

The visual system should intentionally split into two emotional layers:

- `Main site`: bright, airy, clean, youthful, magazine-like
- `Record space`: more playful, more anime/game-adjacent, more personal

This split is deliberate. It keeps the main site readable and presentable while still giving the overall website a strong personal identity.

## 3. Visual Direction

### Main Site Style

The homepage and profile-facing pages should use:

- Bright backgrounds
- Soft layered gradients
- Clean typography with personality
- Gentle motion
- Spacious layout and readable hierarchy
- Light, refreshing color balance rather than dark cyber styling

### Record Space Style

The record area should feel like a themed personal zone rather than a generic blog. It can borrow light anime or game-inspired UI language, such as:

- Section entrances that feel like entering different rooms or channels
- More decorative headers
- Distinct category blocks
- Slightly stronger accent colors
- Small HUD or menu-like visual details, but still readable and practical

### Color Direction

Preferred overall palette direction:

- Base: white, milk white, very pale sky blue, pale mint
- Accents: soft blue, mint green, coral pink, small amounts of sunny yellow
- Avoid: heavy black, gloomy purple gradients, dark mode-first presentation

### Illustration and Background Assets

The site must be designed so that the user can later replace:

- Homepage hero illustration
- Section banner art
- Record-space background art
- Site-level background music file if included

These assets should be treated as replaceable resources, not hardcoded design assumptions.

## 4. Site Structure

The first version should include the following routes or page-level surfaces.

### `/`

Main homepage containing:

- Hero section
- Personal introduction
- Selected projects
- Growth timeline or experience section
- Record space entrance
- Contact links

### `/projects`

Dedicated projects page containing:

- Full project list
- Project cards or sections
- Tech stack and role summaries

### `/about`

Extended self-introduction containing:

- Interests
- Preferred technical direction
- Personal style and habits
- Optional lightweight narrative that feels more personal than a resume

### `/notes`

Record space landing page containing four large category entrances:

- Daily writing
- Study notes
- Game notes
- Anime impressions

This page should feel like a hub rather than a normal article index.

### `/notes/life`

List page for daily writing.

### `/notes/study`

List page for study notes.

### `/notes/games`

List page for game notes.

### `/notes/anime`

List page for anime impressions.

### `/notes/[category]/[slug]`

Detail page for a single record entry.

## 5. Homepage Content Model

### Hero Section

Purpose:

- Establish identity quickly
- Deliver the strongest visual impression
- Set the clean-and-youthful tone

Recommended contents:

- Name
- One-line identity summary
- Short introduction
- Primary action for projects/about
- Secondary action for entering the record space
- Main illustration or visual panel

The hero should not feel like a corporate landing page. It should feel personal, memorable, and polished.

### Personal Summary Section

A short section introducing:

- Who the user is
- What they are interested in
- What they are building or learning
- A few memorable keywords

### Selected Projects Section

Show 3 to 6 strong representative projects.

Each project card should ideally include:

- Name
- Short summary
- Main stack
- One standout point
- Link if available

### Growth Timeline / Experience Section

This section replaces a rigid resume block with a more approachable timeline-style presentation.

Possible content:

- Learning milestones
- School or training stages
- Competitions
- Clubs
- Internships
- Important project moments

### Record Space Entrance

This should be visually distinct from the rest of the homepage and should feel like an invitation into a second world of the site.

It should not look like a plain blog link. It should feel intentional and atmospheric.

### Contact Section

Keep this simple and clean.

Possible entries:

- GitHub
- Email
- Bilibili
- Steam
- Other selected platforms

## 6. Record Space Product Design

### Product Positioning

The record space is not a conventional blog and not a heavy note-taking tool.

It is a lightweight personal writing area divided into four fixed channels:

- `日记随笔 / Daily writing`
- `学习笔记 / Study notes`
- `游戏笔记 / Game notes`
- `追番感受 / Anime impressions`

### Core Interaction Model

The user should not create an entry first and then classify it.

Instead, the user chooses a category first by entering the relevant section, and then writes content for that section. This keeps the mental model simple and matches the intended use pattern.

### Entry Structure

Each record entry should contain only:

- Title
- Body

The body should support inline images.

### Fields Explicitly Excluded

The following should not be part of the first-version authoring flow:

- Manual date input
- Mood field
- Tag input
- Category input
- Music marker
- Cover marker

Dates can exist implicitly through file metadata or generated listing information if useful, but they should not be a required authored field.

### Category Pages

Each category should have its own page and atmosphere, while still sharing one global design language.

These category pages should support:

- Entry list
- Simple browsing
- Optional title search

### Detail Pages

Each detail page should prioritize readability and image support.

The page should include:

- Title
- Body content
- Optional implicit date display if derived automatically
- Navigation back to its category
- Optional previous/next entry links if easy to support

## 7. Record Creation Workflow

### First Version Authoring Model

The first version should use local content files rather than browser-based writing.

Recommended authoring logic:

1. Choose one of the four record categories
2. Create a new local content file inside that category
3. Write title and body
4. Insert images in the body where needed
5. The site automatically renders the new entry in the correct category

### Simplicity Rule

The writing experience should optimize for low friction.

The user should never need to think about:

- Schema complexity
- Extra metadata
- Manual categorization after the fact

## 8. Search

### Preferred Scope

If implementation remains lightweight, the first version should support:

- Title-only search in the record space

This is useful enough to improve usability without introducing a heavy full-text search system.

### Fallback

If title search materially complicates the first version, it may be deferred. However, it is desirable and should remain in scope if feasible.

## 9. Music and Replaceable Assets

### Site-Level Music

Any background music should be site-level only, not entry-level.

If included, it should be:

- Optional
- Easy to replace
- Easy to disable

### Replaceable Visual Assets

The design should make it obvious which assets the user can later swap:

- Homepage hero art
- Section banners
- Record-space illustrations or themed backgrounds

Final implementation should clearly document where these assets live.

## 10. Technical Direction

### Recommended Stack

The first version should use:

- Next.js
- TypeScript
- Tailwind CSS
- Markdown-based local content

### Why This Stack

This stack is recommended because it is:

- Lightweight
- Easy to deploy
- Easy to maintain
- Suitable for static personal content
- Easy to extend later if a database is added

### Content Organization Direction

The implementation should separate content into clear groups:

- Personal/profile content
- Project content
- Record entries by category
- Static visual assets
- Optional audio assets

This makes the site easy to update without editing application logic each time.

## 11. Non-Goals

The project should explicitly avoid these features:

- Login
- Account systems
- Comments
- Social posting features
- Admin dashboard
- Heavy backend infrastructure
- Complex editor systems

The only likely future upgrade path is:

- Replacing local record storage with a lightweight database or browser-based save workflow

Even with that future upgrade, the site should still remain personal, lightweight, and single-user oriented.

## 12. First Version Scope

The first version should include:

- Homepage
- Projects page
- About page
- Record space landing page
- Four category pages
- Entry detail pages
- Inline-image support in entries
- Replaceable visual assets
- Optional replaceable site-level music
- Mobile-friendly responsive design
- Title search in records if implementation stays lightweight

## 13. Long-Term Structure

The architecture should leave room for:

- Database-backed record storage later
- Browser-based writing later
- Additional personal sections later, such as favorites, collections, or links

But none of these should shape the first version in a way that makes it heavier now.

## 14. Design Success Criteria

The design should be considered successful if:

- The homepage looks memorable, bright, and clearly personal
- The site feels more expressive than a plain resume page
- The record space feels like a personal zone rather than a generic blog
- Writing new entries is simple enough to be used regularly
- The four-category structure matches the user's actual habits
- Assets such as art and music can be swapped without redesigning the site
- The overall system stays lightweight and maintainable

## 15. Final Recommendation

Proceed with:

- A bright, youthfully styled personal homepage
- A four-channel personal record space
- Title + body only entry structure
- Inline image support
- Local Markdown content for the first version
- No login, no comments, no admin systems

This is the best balance between aesthetics, usability, maintainability, and future flexibility for the intended personal website.
