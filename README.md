# MyWeb

A bright personal site built with Next.js, combining:

- a polished personal homepage
- projects and profile pages
- a four-channel notes space backed by local Markdown files

## Local development

```bash
npm install
npm run dev
```

## Main editable content

### Profile and project text

- `src/content/profile.ts`
- `src/content/projects.ts`

### Notes content

Add markdown files into:

- `src/content/notes/life/`
- `src/content/notes/study/`
- `src/content/notes/games/`
- `src/content/notes/anime/`

Each note only needs:

```md
---
title: "Your title"
---

Your body content here.
```

You can insert images directly in the body with markdown image syntax:

```md
![alt text](/images/your-image.png)
```

## Replaceable assets

### Homepage hero art

- Put your chosen file in `public/images/`
- Update the path in `src/lib/site-config.ts`

### Notes-space banner or themed image

- Put your chosen file in `public/images/`
- Update the path in `src/lib/site-config.ts`

### Site-level background music

- Put the file in `public/audio/`
- Update the path in `src/lib/site-config.ts`
- Set `musicEnabled` to `true` when you want to use it

If you do not want site-level music, keep `musicEnabled` as `false`.
