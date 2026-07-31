// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// CGIAR Climate Data Hub — wikis site.
//
// Deployed to GitHub Pages at:
//   https://cgiar-climate-data-hub.github.io/wikis/
//
// To add a new wiki:
//   1. Drop a markdown / mdx file under src/content/docs/<area>/<slug>.md
//   2. Update the `sidebar` config below to surface it
//   3. Commit & push to main; the GitHub Action deploys automatically
//
// See ./playbook/ADDING_A_NEW_WIKI.md for the full guide.

export default defineConfig({
  // GitHub Pages serves the site under /wikis/ — Starlight needs both
  // site (full URL) and base (repo path) so internal links resolve.
  site: 'https://cgiar-climate-data-hub.github.io',
  base: '/cdh-wikis',

  integrations: [
    starlight({
      title: 'CGIAR Climate Data Hub — Wikis',
      description:
        'Reference and knowledge wikis from the CGIAR Climate Data Hub community — staging and publishing area for partner-facing climate-science reference material.',

      // Climate Action visual identity — full logo (CGIAR shield + CGIAR
      // wordmark + Climate Action block). The logo has its own background
      // and reads on both light and dark themes, so no light/dark variants
      // are needed. Replace this PNG with an SVG when one is supplied by
      // the Climate Action design team. The favicon (CGIAR shield alone)
      // is a separate file — still TODO.
      logo: {
        src: './src/assets/cgiar-climate-action-logo.png',
        alt: 'CGIAR Climate Action',
      },

      // Override Starlight's Head component to inject schema.org JSON-LD.
      components: {
        Head: './src/components/Head.astro',
      },

      // Edit-on-GitHub link in each page footer.
      editLink: {
        baseUrl:
          'https://github.com/CGIAR-Climate-Data-Hub/wikis/edit/main/',
      },

      // Last-updated timestamps in the footer use the git history.
      lastUpdated: true,

      social: {
        github: 'https://github.com/CGIAR-Climate-Data-Hub/wikis',
      },

      // Sidebar — grouped by "area" (the source institution / programme
      // contributing the wiki). When a new wiki lands, either drop it in
      // an existing group or add a new group here.
      sidebar: [
        {
          label: 'About',
          items: [
            { label: 'Welcome', slug: '' },
            { label: 'Contributing a wiki', slug: 'contributing' },
          ],
        },
        {
          label: 'Climate data for African adaptation',
          items: [
            { label: 'Overview', slug: 'aaa-atlas' },
            {
              label: 'Foundations',
              collapsed: false,
              items: [
                { label: 'Projections primer', slug: 'aaa-atlas/projections-primer' },
                { label: 'Baselines', slug: 'aaa-atlas/baselines' },
                {
                  label: 'Climate models 101',
                  slug: 'aaa-atlas/climate-models-101',
                  badge: { text: 'draft', variant: 'caution' },
                },
              ],
            },
            {
              label: 'Why models differ',
              collapsed: true,
              items: [
                {
                  label: 'Why models disagree',
                  slug: 'aaa-atlas/why-models-disagree',
                  badge: { text: 'draft', variant: 'caution' },
                },
                {
                  label: 'Downscaling',
                  slug: 'aaa-atlas/downscaling',
                  badge: { text: 'draft', variant: 'caution' },
                },
                {
                  label: 'Bias correction',
                  slug: 'aaa-atlas/bias-correction',
                  badge: { text: 'draft', variant: 'caution' },
                },
              ],
            },
            {
              label: 'Datasets & Africa evaluation',
              collapsed: true,
              items: [
                {
                  label: 'Dataset landscape',
                  slug: 'aaa-atlas/dataset-landscape',
                  badge: { text: 'draft', variant: 'caution' },
                },
                {
                  label: 'Regional evaluation',
                  slug: 'aaa-atlas/regional-evaluation',
                  badge: { text: 'draft', variant: 'caution' },
                },
                { label: 'African CMIP6 Ensembling', slug: 'aaa-atlas/african-cmip6-ensembling' },
                {
                  label: 'East African Paradox',
                  slug: 'aaa-atlas/east-african-paradox',
                  badge: { text: 'draft', variant: 'caution' },
                },
              ],
            },
            {
              label: 'For CGIAR',
              collapsed: false,
              items: [
                {
                  label: 'Recommendations for CGIAR',
                  slug: 'aaa-atlas/cgiar-recommendations',
                  badge: { text: 'draft', variant: 'caution' },
                },
              ],
            },
            {
              label: 'CMIP7 & forward look',
              collapsed: false,
              items: [
                {
                  label: "What's next — CMIP7",
                  slug: 'aaa-atlas/future-projections',
                  badge: { text: 'draft', variant: 'caution' },
                },
                {
                  label: 'Downscaling infrastructure',
                  slug: 'aaa-atlas/cmip7-downscaling-infrastructure',
                  badge: { text: 'scaffold', variant: 'caution' },
                },
                {
                  label: 'Hazards pipeline',
                  slug: 'aaa-atlas/cmip7-hazards-pipeline',
                  badge: { text: 'scaffold', variant: 'caution' },
                },
              ],
            },
            {
              label: 'Reference',
              collapsed: false,
              items: [
                {
                  label: 'Voices from the field',
                  slug: 'aaa-atlas/voices',
                  badge: { text: 'open call', variant: 'note' },
                },
                { label: 'Glossary', slug: 'aaa-atlas/glossary' },
                { label: 'References', slug: 'aaa-atlas/references' },
              ],
            },
          ],
        },
        {
          label: 'Methods and tools for adaptation tracking',
          items: [
            {
              label: 'Overview',
              slug: 'adaptation-tracking',
              badge: { text: 'coming soon', variant: 'note' },
            },
          ],
        },
      ],

      // CGIAR Climate Action visual identity — see src/styles/cgiar.css.
      customCss: ['./src/styles/cgiar.css'],

      // Don't fight Starlight's defaults on the components — Asides
      // (`:::note` `:::tip` `:::caution` `:::danger`) cover the callout
      // patterns we use today; richer custom components can be added per
      // wiki via MDX if needed.
    }),
  ],
});
