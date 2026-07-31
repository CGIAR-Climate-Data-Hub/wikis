# CGIAR Climate Data Hub — Wikis

Staging and publishing area for partner-facing knowledge wikis from the CGIAR Climate Data Hub community.

**Live site**: https://cgiar-climate-data-hub.github.io/cdh-wikis/

## What this is

This repo hosts methodology and reference wikis from the [CGIAR Climate Action Climate Data Hub](https://climate-action.cgiar.org/) — partner-facing content that sits between the primary scientific literature and the day-to-day climate-rationale tools the Data Hub publishes. Each wiki explains *why* a given tool makes the methodological choices it does, written for the national and regional partners who need to defend those choices in proposals, NAPs, and scientific reviews.

The first wiki here grew out of work on the [AAA Adaptation Atlas](https://adaptationatlas.cgiar.org/)'s *Build a Climate Rationale* notebook — specifically, the need to give a defensible answer to *which CMIP6 climate-model ensembles to use for each African region*. More wikis will follow as the Data Hub commissions further reference material and as partner institutions contribute.

Each wiki is plain Markdown with [Astro Starlight](https://starlight.astro.build/) frontmatter. The site is built and deployed to GitHub Pages on every push to `main` via the workflow at `.github/workflows/deploy.yml`.

## Quick start (local development)

```bash
npm install                    # install Astro, Starlight, and sharp (image pipeline)
npm run dev                    # local dev server at http://localhost:4321/cdh-wikis/
npm run build                  # produce a static build in dist/
npm run preview                # preview the static build locally
```

## Adding content

- **New wiki**: see [`playbook/ADDING_A_NEW_WIKI.md`](./playbook/ADDING_A_NEW_WIKI.md) for the full guide
- **Editing an existing wiki**: click "Edit this page" in the footer of any wiki to open the source markdown on GitHub directly
- **Conventions for coding agents (Claude Code)**: see [`CLAUDE.md`](./CLAUDE.md)

## Repository layout

```
wikis/
├── CLAUDE.md                       conventions for AI coding agents
├── README.md                       this file
├── astro.config.mjs                Astro + Starlight config, sidebar
├── package.json                    Node dependencies
├── tsconfig.json
├── .github/workflows/deploy.yml    GitHub Pages deployment
├── playbook/                       contributor + maintainer docs
└── src/
    ├── content.config.ts           Starlight content-collection schema
    └── content/
        └── docs/                   one folder per area, one file per wiki
            ├── index.mdx           splash landing page
            ├── contributing.md     contributor guide
            └── aaa-atlas/          AAA Atlas–originated wikis (climate-model selection)
                ├── index.md
                ├── african-cmip6-ensembling.md
                └── figures/
```

## Contributing

Partner contributions are welcome — National Meteorological Services, regional research centres (ICPAC, ACMAD, SADC-CSC, AGRHYMET), and CGIAR partners. See [`/contributing/`](./src/content/docs/contributing.md) on the site or [`playbook/ADDING_A_NEW_WIKI.md`](./playbook/ADDING_A_NEW_WIKI.md) here.

## Maintainer

Pete Steward — `p.steward@cgiar.org` — Alliance Bioversity-CIAT (CGIAR).

## Licence

Content licence: TBD by the CGIAR Climate Data Hub team. Until then, contributions are stored under the wiki repo's default GitHub terms — see the [GitHub Terms of Service](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service).
