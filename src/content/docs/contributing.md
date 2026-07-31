---
title: Contributing a wiki
description: How to contribute a new wiki page, or a partner perspective to an existing wiki, on the CGIAR Climate Data Hub.
---

This is the contributors' guide for the CGIAR Climate Data Hub wikis. There are two distinct contribution patterns covered below.

## Contributing a partner perspective to an existing wiki

Many wikis include a "regional perspectives" or "national voices" section that explicitly seeks contributions from National Meteorological Services, regional centres (ICPAC, ACMAD, SADC-CSC, AGRHYMET, …), or CGIAR partner teams.

The fastest way to contribute is to click **"Edit this page"** in the footer of the wiki you want to add to — that opens the source markdown on GitHub with a pre-filled editor. Make your edit, propose a pull request, and the wiki owners review.

Each contribution should usually:

- Identify your institution and your contact (so we can credit the contribution and check back if needed)
- Stay within the section structure the wiki defines
- Cite at least one peer-reviewed source or institutional report supporting your perspective
- Be roughly 2–4 paragraphs unless the wiki's own guidance says otherwise

If you'd rather not work in GitHub directly, email the wiki's named contact (listed in the wiki's footer) and the Data Hub team will integrate your contribution.

## Contributing a new wiki

Bigger lift. Talk to the CGIAR Climate Data Hub team before starting so we can align on scope, audience, and house style.

If you have written-out content already and just need a place to host it:

1. Open an issue on the [wikis repo](https://github.com/CGIAR-Climate-Data-Hub/wikis) describing the wiki — title, audience, length, source of truth (where will the canonical content live?), and any figures / data references.
2. We discuss style and slot — which "area" of the site it belongs in, what slug it takes.
3. Open a pull request adding the content under `src/content/docs/<area>/<slug>.md`, with Astro Starlight frontmatter (see existing wikis for examples) and the file structure described in [`playbook/ADDING_A_NEW_WIKI.md`](https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/ADDING_A_NEW_WIKI.md).
4. Update `astro.config.mjs` `sidebar` to surface the new page.
5. Reviewers approve; the GitHub Action builds and deploys.

## Style notes

These wikis target an *educated user who is not a specialist in the wiki's topic*. Some style notes that apply across the site:

- **Plain language, defined jargon.** Bold the term on first use and define it inline. The reader shouldn't need to read a textbook to follow the page.
- **Acknowledge what we don't know.** Honest treatment of uncertainty buys trust; defensive over-claiming costs it.
- **Tell the reader what to do with the information.** Every major section should end with practical guidance — "*how this affects what you read in the [tool]*" or similar.
- **Use Asides for the key takeaways.** Starlight supports `:::note`, `:::tip`, `:::caution`, `:::danger` — use them liberally for the 1-2 sentences a partner-meeting attendee should walk away with.
- **Cite well, cite honestly.** Inline-link to DOIs or official URLs. We don't need footnotes or bibliographies as separate sections — a well-linked paragraph is more useful than a 30-row reference table.

## Questions

Open an issue on the repo, or contact the CGIAR Climate Data Hub team via [climate-action.cgiar.org](https://climate-action.cgiar.org).
