---
title: "Climate projections for Africa — a 10-minute primer"
description: "An accessible orientation to what climate projections are, what they're used for, and how to read them — written for non-specialists who are about to use them in adaptation work."
area: AAA Adaptation Atlas
version: "0.2-draft"
estimatedReadingMinutes: 10
sidebar:
  order: 5
  label: "Projections primer"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<figure>
<img src="/cdh-wikis/figures/F-africa-warming-stripes-hero.svg" alt="Animated warming-stripes chart showing African continental annual temperature anomaly from 1880 to 2025 relative to the 1991–2020 baseline. Each vertical stripe represents one year, coloured from deep blue for cool anomalies through neutral whites to dark red for warm anomalies. The stripes wipe in from left to right over the first six seconds of the animation, revealing the gradual transition from blue early-twentieth-century stripes through neutral mid-century stripes to increasingly red stripes from the 1980s onward. By 2025 the rightmost stripes are deep red." />
<figcaption>Africa is warming. Each stripe is one year of continental annual temperature anomaly, 1880–2025, relative to the 1991–2020 baseline. Style inspired by Ed Hawkins's <a href="https://showyourstripes.info/">#ShowYourStripes</a>. Data: NASA GISTEMP v4 tropical band (24°S–24°N), 1991–2020 baseline. <a href="https://data.giss.nasa.gov/gistemp/">data.giss.nasa.gov/gistemp</a>. See <a href="https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/cmip6-wiki/figure-commissions/F-africa-warming-stripes-hero.md">commission brief</a> for methodology. Regenerate with <code>scripts/regen-warming-stripes.py</code> (switches to Berkeley Earth Africa land data automatically when their server is reachable).</figcaption>
</figure>

:::tip[If you remember one thing]
A climate projection isn't a forecast of what will happen. It's a model's answer to "*if emissions follow trajectory X, here's what the physics says could happen.*" The honest reading of any projection chart is always: **which scenario, which models, and how much do they agree** — not a single number.
:::

## What this page covers

Your 10-minute orientation to climate projections for African adaptation work. By the end you'll know:

- What a "future climate projection" actually is (and what it isn't)
- The three sources of uncertainty in every projection chart you'll see
- How to read a projection chart honestly — central estimate, spread, scenario dependence
- Where projections fit into a climate-rationale workflow
- What the rest of this wiki section can answer for you

## What a projection is, and isn't

A **climate projection** is a model-based answer to the question *what would happen to the climate if greenhouse-gas emissions and land use follow a specific future trajectory?* That trajectory is called a **scenario**. For CMIP6, scenarios are the [Shared Socioeconomic Pathways](/cdh-wikis/aaa-atlas/glossary/) (SSPs) — SSP1-2.6 (sustainability), SSP2-4.5 (middle of the road), SSP3-7.0 (regional rivalry), SSP5-8.5 (fossil-fuelled development).

Projections are **not predictions**. A prediction would assume we know which scenario will play out; we don't. A projection says: *given* this scenario, the climate would behave roughly like this. Every projection chart you read is conditional on a choice the chart-maker made about emissions ([IPCC AR6 WGI Ch 1](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-1/); [AR6 WGI Summary for Policymakers](https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf)).

## Where projections come from — the short version

Projections come from **global climate models** ([GCMs](/cdh-wikis/aaa-atlas/glossary/)) — large physics-based simulations run at major modelling centres around the world. CMIP6, the current coordinated experiment, gathered runs from ~50 models. NASA's statistically-downscaled **NEX-GDDP-CMIP6** product provides 18 of them at 0.25° resolution; this is the most widely used dataset for African projection work, and it's the one the AAA Adaptation Atlas's *Build a Climate Rationale* notebook is built around (see [African CMIP6 Ensembling](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/) for which 18 models and why). The next page goes deep on what a GCM actually is: [Climate models 101](/cdh-wikis/aaa-atlas/climate-models-101/).

## The three sources of uncertainty

[Hawkins & Sutton (2009)](https://doi.org/10.1175/2009BAMS2607.1) gives the standard framing — every projection carries three layered uncertainties, and you should know which one dominates for your time horizon:

- **Scenario uncertainty** — we don't know which emissions path will play out (which SSP humanity ends up on).
- **Model uncertainty** — even given a scenario, different models give different answers because they represent atmosphere, ocean, land, and clouds differently.
- **Internal variability** — the climate's own year-to-year and decade-to-decade noise, driven by modes like ENSO and the monsoon. It doesn't go away with averaging across models.

A rough rule: for **near-term horizons (2030s)**, internal variability dominates the spread. For **end-of-century horizons (2080s+)**, scenario uncertainty does. Model uncertainty is in the middle and matters most at the **regional** scale — which is exactly where you're working.

## How to read a projection chart

A typical chart shows two things layered on top of each other:

- An **ensemble mean** — a single thick line through the average of multiple models. This is your central estimate.
- A **spread band** — usually shaded — showing the inter-model range (typically ±1 standard deviation, or the 17–83% inter-model interval). This is the uncertainty.

If multiple emissions scenarios are shown, each one gets its own coloured mean-and-spread band. The bands almost always overlap in the near term and diverge later as scenario uncertainty grows.

If a chart shows **only the mean and not the spread**, half the story is missing — treat it with caution and look for the source's underlying data. Honest charts always include the spread.

<figure>
<img src="/cdh-wikis/figures/F-projection-chart-anatomy.svg" alt="Schematic line chart from 2020 to 2100 with two CMIP6 emissions scenarios: SSP2-4.5 shown in blue and SSP5-8.5 in amber. Each scenario has a thick central line (the ensemble mean) and a shaded envelope behind it (the 17–83% inter-model spread). The two scenario bands overlap heavily through the 2030s and diverge by 2100, with SSP5-8.5 reaching about 4.6 °C and SSP2-4.5 about 2.7 °C above the 1991–2020 baseline. Four annotation callouts label the ensemble mean, the inter-model spread, the scenario uncertainty (the gap between scenarios at the right edge), and the near-term region where the bands overlap and internal variability dominates the uncertainty.">
<figcaption><strong>Figure 1.</strong> Anatomy of a projection chart (interim schematic). Two stylised CMIP6 emissions scenarios — SSP2-4.5 in blue, SSP5-8.5 in amber — showing how every honest projection chart layers three things: a central estimate (ensemble mean), inter-model spread (shaded envelope), and scenario uncertainty (the gap between scenarios that opens by end-of-century). Y-axis is °C above <strong>1991–2020</strong> (the wiki's default baseline; see <a href="/cdh-wikis/aaa-atlas/baselines/">Baselines and reference periods</a>). <em>Interim schematic — the final figure will be derived from <a href="https://www.ipcc.ch/report/ar6/wg1/figures/summary-for-policymakers/figure-spm-8/">IPCC AR6 WGI SPM Figure 8, panel (a)</a> (CC-BY 4.0) per the <a href="https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/cmip6-wiki/figure-commissions/F-projection-chart-anatomy.md">commission brief</a>.</em></figcaption>
</figure>

## Where this fits in a climate rationale

A defensible climate rationale for a Green Climate Fund concept note, an Adaptation Fund proposal, or a national NAP submission usually has four parts:

1. **Observed climate context** — the current baseline. Best continental source: [WMO State of the Climate in Africa 2024](https://wmo.int/publication-series/state-of-climate-africa-2024) (African temperature anomaly +0.86 °C vs the 1991–2020 baseline; North Africa fastest-warming; 2024 saw Sahel floods and Kenya MAM floods).
2. **Observed change** — recent trends in temperature, rainfall, extremes.
3. **Projected change** — what *this* wiki section helps you cite defensibly.
4. **Adaptation logic** — how the projected changes drive the intervention you're proposing.

Projections sit in part (3), but always read alongside (1) and (2) — a projection that *contradicts* the observed trend (as for East African long rains; see [East African Paradox](/cdh-wikis/aaa-atlas/east-african-paradox/)) is a known-difficult case, not a free pass to use the model number.

## What this wiki section can answer

| Question | Page |
|---|---|
| What's actually inside a climate model? | [Climate models 101](/cdh-wikis/aaa-atlas/climate-models-101/) |
| Why do models disagree? | [Why models disagree](/cdh-wikis/aaa-atlas/why-models-disagree/) |
| What does "downscaled" mean? | [Downscaling](/cdh-wikis/aaa-atlas/downscaling/) |
| What does "bias-corrected" mean? | [Bias correction](/cdh-wikis/aaa-atlas/bias-correction/) |
| Which datasets exist and what should I use? | [Dataset landscape](/cdh-wikis/aaa-atlas/dataset-landscape/) |
| Which models work best over my region? | [Regional evaluation](/cdh-wikis/aaa-atlas/regional-evaluation/) |
| What does the AAA Adaptation Atlas specifically use? | [African CMIP6 Ensembling](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/) |
| Why is East African rainfall a special case? | [East African Paradox](/cdh-wikis/aaa-atlas/east-african-paradox/) |
| What's coming next? | [CMIP7 + CORDEX-Africa](/cdh-wikis/aaa-atlas/future-projections/) |

## Further reading

- [IPCC AR6 WGI Chapter 1 — Framing, context, methods](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-1/) — the canonical reference for what climate projections are and aren't.
- [IPCC AR6 Interactive Atlas](https://interactive-atlas.ipcc.ch/) — region-by-region projection viewer; explore SSP bands for any AR6 reference region.
- [WMO State of the Climate in Africa 2024](https://wmo.int/publication-series/state-of-climate-africa-2024) — the most authoritative observational baseline for continental and regional change.
- [Hawkins & Sutton 2009 — The potential to narrow uncertainty in regional climate projections](https://doi.org/10.1175/2009BAMS2607.1) — the original framing of the three uncertainty sources.
- [Carbon Brief — How Shared Socioeconomic Pathways explore future climate change](https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change/) — non-specialist orientation to SSPs.
- [Carbon Brief — CMIP6: the next generation of climate models explained](https://www.carbonbrief.org/cmip6-the-next-generation-of-climate-models-explained/) — what changed from CMIP5 to CMIP6 and why it matters.
