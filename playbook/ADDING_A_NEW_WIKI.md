# Adding a new wiki — step-by-step guide

This is the human-facing version of the conventions in `CLAUDE.md`. If you're an LLM coding agent (Claude Code, etc.), read `CLAUDE.md` instead — it's more concise.

## Before you start

Talk to the CGIAR Climate Data Hub team (or the wiki repo owner) before drafting a new wiki. We want to make sure the new content has a clear audience and a clear "source of truth" — i.e. where the canonical version of the content lives if it's being staged from another repository.

A good wiki on this site:

- Has an **educated but non-specialist audience** — typically someone writing a climate rationale, a programme designer, an analyst at a partner institution. Not someone with a PhD in the wiki's topic.
- **Sits between primary literature and the daily tools**. If the content fits in a tool's Methods text, put it there. If it belongs in a textbook, link to one. Wikis are for the middle ground.
- **Is honest about uncertainty.** If there are open questions in the underlying science, the wiki acknowledges them. This buys credibility with partners.
- **Tells the reader what to do with the information.** Practical guidance every section.

## File layout

Each wiki is a single markdown file under `src/content/docs/<area>/<slug>.md`.

- `<area>` is the institution or programme — e.g. `aaa-atlas`, `aiccra`, `excel-foresight`. If the new wiki doesn't fit any of the existing areas, create a new folder for it, with an `index.md` page explaining the area.
- `<slug>` is the URL part — lowercase, hyphenated, descriptive. The page URL is `https://cgiar-climate-data-hub.github.io/cdh-wikis/<area>/<slug>/`.

Figures go in `src/content/docs/<area>/figures/`. Reference them from the markdown with relative paths (`./figures/your-figure.png`). Astro's image pipeline handles size, format, and lazy loading.

## Frontmatter

Every wiki starts with YAML frontmatter:

```yaml
---
title: "Short, scannable title"
description: "One-sentence description. Shows up in search results, cards, and meta tags."
area: "AAA Adaptation Atlas"
version: "0.1-draft"
sourceOfTruth: "atlas_notebooks repo (Alliance Bioversity-CIAT, CGIAR)"
authors:
  - name: "Author name"
    affiliation: "Institution"
estimatedReadingMinutes: 18
sidebar:
  order: 10
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---
```

The two required fields are `title` and `description`. The rest are Starlight defaults or our extended schema (see `src/content.config.ts`).

`sidebar.order` controls vertical order in the global sidebar within the area's section. Lower numbers appear first.

## Sidebar registration

Adding a new file isn't enough — Starlight also needs to know where to put it in the global navigation. Edit `astro.config.mjs` and find the `sidebar` array. Add an entry for your new page under the right area:

```js
{
  label: 'AAA Adaptation Atlas',
  items: [
    { label: 'Overview', slug: 'aaa-atlas' },
    { label: 'African CMIP6 Ensembling', slug: 'aaa-atlas/african-cmip6-ensembling' },
    { label: 'Your New Wiki', slug: 'aaa-atlas/your-new-wiki' },  // ← add here
  ],
},
```

If you're starting a new area, add the whole block. Look at how the existing entries are structured.

## Writing style

We've collected style notes in `CLAUDE.md` under "Content conventions". The short version:

- Plain language; jargon defined on first use
- `:::note` / `:::tip` / `:::caution` / `:::danger` directives for callouts (Starlight syntax)
- HTML `<figure>` with `<figcaption>` for figures
- Inline citation links (DOIs, official URLs) — no footnotes
- Lead with "so what" for the reader
- End each major section with "how this affects you"

## Local development

```bash
npm install          # one-time, installs Astro + Starlight + sharp
npm run dev          # local dev server at http://localhost:4321
```

The dev server hot-reloads on save. Changes show up in the browser within a second or two. Use this to preview as you write.

```bash
npm run build        # static build into dist/
npm run preview      # preview the built site locally
```

Use `npm run build` before opening a PR — Starlight catches broken internal links, malformed frontmatter, and other issues at build time.

## Pull request flow

1. Branch off `main`
2. Add your wiki + sidebar registration
3. Verify locally with `npm run build`
4. Open a PR — describe the wiki's audience, source of truth, and review path in the PR body
5. Reviewer (maintainer or area lead) checks for:
   - Audience appropriateness
   - Citation honesty
   - Style consistency with existing wikis
   - Build passes
6. Merge to `main` — the GitHub Action deploys to GitHub Pages within a minute or two

## After publishing

- **Partner contributions** to a "regional perspectives" or "voices from regional centres" section can come in via PR (click *Edit this page* on the wiki's footer to open the markdown source on GitHub).
- **Versioning** — bump the `version` frontmatter on significant content changes. Old versions persist via git history; partner teams who cited a specific version can pull that revision.
- **Citation stability** — don't rename slugs once a wiki is live. If a slug is wrong, add a redirect rather than rewriting history.

## Contact

Pete Steward — `p.steward@cgiar.org` — wiki repo maintainer (CGIAR Climate Data Hub).
