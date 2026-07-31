# CLAUDE.md — Working in this repo

This repo is the staging + publishing area for the **CGIAR Climate Data Hub wikis**. It is built with [Astro Starlight](https://starlight.astro.build/) and deployed to GitHub Pages on every push to `main` via the workflow at `.github/workflows/deploy.yml`.

If you're reading this as Claude Code, this file gives you the conventions you need to add content correctly. There is also a longer human-facing guide at `playbook/ADDING_A_NEW_WIKI.md`.

**Visual style for figures and per-page conventions** (palette, axes, callouts, Further reading sections, baseline convention) live in `STYLE.md` — read it before commissioning a figure or before writing a page.

## Repository layout

```
wikis/
├── CLAUDE.md                       ← this file
├── STYLE.md                        ← visual + per-page style guide
├── README.md                       ← human-facing landing
├── astro.config.mjs                ← site config, sidebar, base URL
├── package.json
├── tsconfig.json
├── .gitignore
├── .github/workflows/deploy.yml    ← GitHub Pages deployment
├── playbook/
│   └── ADDING_A_NEW_WIKI.md        ← longer human guide
├── public/                         ← static assets served at site root
└── src/
    ├── content.config.ts           ← Starlight content-collection schema
    └── content/
        └── docs/
            ├── index.mdx           ← landing page (splash hero)
            ├── contributing.md     ← contributors guide
            └── <area>/             ← one folder per area (e.g. aaa-atlas)
                ├── index.md        ← area landing page
                ├── <slug>.md       ← one wiki per file
                └── figures/        ← co-located figures
```

## Adding a new wiki

1. **Pick or create an area.** A wiki belongs to an "area" (typically a CGIAR programme or institution). Existing areas live under `src/content/docs/<area>/`. If the new wiki doesn't fit any of them, create a new folder + an `index.md` for that area.
2. **Create the wiki file** at `src/content/docs/<area>/<slug>.md`. The slug becomes part of the URL: `https://cgiar-climate-data-hub.github.io/cdh-wikis/<area>/<slug>/`.
3. **Frontmatter — use this template**:
   ```yaml
   ---
   title: "Short title"
   description: "One-sentence description; shows on cards and in search results."
   area: "Area name as a string"
   version: "0.1-draft"
   sourceOfTruth: "<repo-or-path-to-canonical-content>"
   authors:
     - name: "Author name"
       affiliation: "Institution"
   estimatedReadingMinutes: 10
   sidebar:
     order: 10
   tableOfContents:
     minHeadingLevel: 2
     maxHeadingLevel: 3
   ---
   ```
   - `title` and `description` are required (Starlight uses them everywhere).
   - `area`, `version`, `sourceOfTruth`, `authors`, `estimatedReadingMinutes` are optional extensions defined in `src/content.config.ts`.
   - `sidebar.order` controls where the page sits within its area's section in the global sidebar.
4. **Update `astro.config.mjs`** — add the new page to the `sidebar` array. Find the right area's `items` and append `{ label: "Pretty Title", slug: "<area>/<slug>" }`.
5. **Drop figures** into `src/content/docs/<area>/figures/` (co-located with the markdown). Reference them with relative paths from the markdown: `./figures/your-figure.png`. Astro's image pipeline handles optimisation.

## Content conventions

- **Audience.** Educated user, not a specialist in the wiki's topic. Plain language; define jargon on first use (bold the term + define inline). Glossary section at the end for terms used multiple times.
- **Markdown flavour.** Standard Astro Starlight Markdown — CommonMark + GFM extensions + Starlight directives (`:::note` / `:::tip` / `:::caution` / `:::danger` for asides). Tables, footnotes, headings as standard.
- **`.md` vs `.mdx`.** Use `.md` unless you need to import a React/Astro component. The landing page (`index.mdx`) uses MDX because it imports `<Card>` and `<CardGrid>`.
- **Headings.** `#` is the page title (Starlight injects it from frontmatter — DON'T put `# Title` at the top of the file). Use `##` for top-level sections, `###` for sub-sections. Avoid going deeper than `###`.
- **Asides (callouts).** Use Starlight's directive syntax:
  ```md
  :::note[Optional title]
  Content goes here.
  :::

  :::tip[If you remember one thing]
  Short, scannable.
  :::

  :::caution[Affected countries]
  Warning content — use for serious caveats.
  :::

  :::danger
  Reserve for hard "don't do this" warnings.
  :::
  ```
- **Figures.** Use HTML `<figure><img src="..." alt="..."><figcaption>...</figcaption></figure>` (works in `.md` files). Caption MUST be detailed; alt text MUST be a self-contained description. If a figure is not yet ready, leave the `<img>` pointing at the placeholder path under `./figures/` and add `placeholder — to be commissioned` to the caption.
- **Citations.** Inline links to DOIs or official URLs: `[Hausfather et al. 2022](https://doi.org/10.1038/d41586-022-01192-2)`. Don't use footnotes or numbered bibliographies — a "References and further reading" section with grouped DOI links at the end works better.
- **Style.**
  - Lead with "so what" for the reader.
  - Acknowledge uncertainty plainly.
  - Every major section ends with practical "how this affects you" guidance where possible.
  - No hero-narrative about the institution / tool the wiki references — the reader is *using* the tool; we're not selling them on it.

## Local development

```bash
npm install          # one-time
npm run dev          # local dev server at http://localhost:4321
npm run build        # static build into dist/
npm run preview      # preview the built site locally
```

Astro builds the site to `dist/` which the GitHub Action picks up and pushes to GitHub Pages. Don't commit `dist/` — it's gitignored.

## Deployment

GitHub Action at `.github/workflows/deploy.yml`. Triggers on push to `main`. Two jobs: `build` uses `withastro/action@v3`; `deploy` uses `actions/deploy-pages@v4`. Production URL: `https://cgiar-climate-data-hub.github.io/cdh-wikis/`.

If deployment is failing, check the Actions tab in the GitHub UI. Most likely cause is a typo in `astro.config.mjs` (e.g. a missing sidebar slug) or a broken link in the markdown that fails Starlight's link-check.

## Things NOT to do

- **Don't put `# Title` at the top of a markdown file.** Starlight injects it from frontmatter; double-titles look broken.
- **Don't reference figures via absolute URL** (`/cdh-wikis/figures/foo.png`) when they can be co-located. Co-location gives Astro the chance to optimise them.
- **Don't add `node_modules/` or `dist/` to commits.** Both are gitignored — but if you reset the gitignore by accident, watch for these.
- **Don't promote `0.1-draft` versions to canonical.** Bump the `version` frontmatter field on each significant content change. Old versions are retained for citation stability via git history.
- **Don't delete or move existing wikis without asking.** Partner teams may have linked to specific URLs in proposals. Renames break those links.
- **Don't add interactive widgets.** No sliders, no toggles, no Plotly/D3 charts, no scroll-driven explainers, no client-side JS for "engagement." These pages are reference content: static prose, tables, figures (SVG / PNG), and Starlight asides only. Partners need to cite specific revisions in proposals; interactive content breaks that, adds accessibility friction, and risks browser-version drift. If a topic genuinely demands interactivity, host it in the relevant tool (the Climate Rationale notebook, the Atlas itself) and link to it from the wiki.

## Contact

Wiki maintainer / lead: Pete Steward — `p.steward@cgiar.org`. Open an issue or pull request on the repo for anything else.
