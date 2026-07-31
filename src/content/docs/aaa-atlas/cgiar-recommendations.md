---
title: "Climate data recommendations for CGIAR"
description: "Prescriptive guidance for CGIAR colleagues across centres and programmes — which datasets, baselines, ensembles, and scenarios to use, and where the Climate Data Hub fits in the harmonisation arc."
area: AAA Adaptation Atlas
version: "0.1-draft"
estimatedReadingMinutes: 8
sidebar:
  order: 11
  label: "Recommendations for CGIAR"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

:::tip[If you remember one thing]
A climate-data choice that looks like a minor methodology call inside one CGIAR centre turns into a visible inconsistency between centres when partners read our work side by side. This page is the harmonisation tool — pick from these defaults unless you have a documented reason to deviate, and name the deviation when you do.
:::

## What this page is for

This is the CGIAR-internal page. Every other page in this wiki explains the *science* (what models do, why they disagree, how to read a projection chart). This page is the *prescription* — which datasets and conventions colleagues across CIAT, IFPRI, ILRI, IWMI, ICARDA, ICRAF, IRRI, AfricaRice, IITA, and the rest of CGIAR should default to, so a partner government reading three CGIAR briefs doesn't see three different climate stories.

The recommendations on this page are **defaults**, not absolutes. A scientist with a documented methodological reason to deviate should deviate — and name the deviation explicitly so reviewers and partners can follow. Silent divergence is the failure mode this page exists to prevent.

This page will evolve. Today the recommendations live as guidance. Over the next 12–18 months the [CGIAR Climate Data Hub](https://climate-action.cgiar.org) will deliver the same recommendations as **data products** — pre-baselined, pre-bias-corrected, ensemble-curated projection layers and observed-climate products that follow the guidance by construction. Once the data products land, the harmonisation question stops being "did each centre apply the methodology correctly?" and becomes "did each centre use the canonical product?" That's a much easier question to audit.

## Why this page exists

A climate scientist at one centre picks NEX-GDDP-CMIP6 with the full 18-model ensemble and only SSP5-8.5. A scientist at another centre picks CHELSA-CMIP6 with 5 models and SSP1-2.6 plus SSP3-7.0. A third uses raw CMIP6 from the ESGF archive without downscaling. All three present their results to the same partner government — for the same proposal cycle, even — and the headline numbers disagree by factors that *look* large to a non-specialist reader.

Each of those three choices is individually defensible. The mismatch between them isn't. From the partner government's seat, three CGIAR centres are telling them different things about the climate their country will face.

This page is how we stop doing that.

## Recommended defaults

The recommendations below are organised by what you're trying to do. Each row has a primary choice (use this), an acceptable alternative (use this if the primary doesn't fit), and a "don't" line.

### Observed historical climate

For establishing the present-day baseline against which change is measured.

| Use case | Primary | Acceptable alternative | Don't |
|---|---|---|---|
| Continental / sub-national rainfall (Africa) | **[CHIRPS](https://www.chc.ucsb.edu/data/chirps)** (UCSB, station-corrected, 5 km) | TAMSAT for sub-daily; GPCC for longer record | Station data alone — sparse African network |
| Continental / sub-national temperature (Africa) | **CHIRTS** (UCSB, station-corrected) | ERA5-Land for longer record + all variables | Raw satellite without station correction |
| Reanalysis (all variables, longest record) | **[ERA5](https://www.ecmwf.int/en/forecasts/dataset/ecmwf-reanalysis-v5)** (ECMWF, 1940–present, 30 km) | MERRA-2; JRA-55 for cross-validation | Calling reanalysis "observations" — it's a model-assisted gridded estimate |
| Continental anomaly reporting | WMO *State of the Climate in Africa* | — | Self-computing an anomaly without naming the WMO baseline |

**Observational baseline**: **1991–2020** (the WMO operational normal). This matches the baseline used in [WMO *State of the Climate in Africa 2024*](https://wmo.int/publication-series/state-of-climate-africa-2024) and across the WMO Regional Climate Outlook Forums (GHACOF, PRESASS, SARCOF). Don't pick a different 30-year window without naming it.

### Future projections

For projecting climate change relative to that baseline.

| Use case | Primary | Acceptable alternative | Don't |
|---|---|---|---|
| Sub-national multi-variable adaptation work | **NEX-GDDP-CMIP6** (NASA, 18 models, 0.25°, BCSD bias correction) — accessed via the [AAA Adaptation Atlas](https://adaptationatlas.cgiar.org/) | ISIMIP3b for impact-sector work | Raw CMIP6 (ESGF) without downscaling or bias correction |
| Impact-sector modelling (crops / water / health / nutrition) | **ISIMIP3b** (5 models, ISIMIP3BASD bias adjustment) | NEX-GDDP-CMIP6 if you need more models | The ISIMIP3a "historical-only" tier for *projection* work |
| Very-fine-resolution ecology / agroecology / species distribution | **CHELSA-CMIP6** (1 km statistical downscaling) | WorldClim Future as a cross-check | NEX-GDDP-CMIP6 at 0.25° for sub-watershed analysis — resolution too coarse |
| Extremes work that must be physically self-consistent | **CORDEX-CORE** dynamical downscaling (~22 km) | NEX-GDDP-CMIP6 with explicit caveats about statistical-downscaling assumptions | Statistical downscaling for compound extremes that require multivariate consistency |
| Forward-looking work (post-2027) | Watch for **CMIP7 Fast Track** and **CORDEX-Africa CMIP6** — see [CMIP7 + CORDEX](/cdh-wikis/aaa-atlas/future-projections/) | Continue CMIP6 in parallel during the transition | Switch all reporting to CMIP7 the day it lands — partners will be citing CMIP6 work for years |

**Projection baseline**: **1995–2014** (the CMIP6 standard reference period). This is the default the upstream products are anchored to. The asymmetry with the WMO 1991–2020 observational baseline is intentional — see [Baselines and reference periods](/cdh-wikis/aaa-atlas/baselines/).

### Ensembles

For deciding which subset of climate models to use.

- **Continental work across Africa**: use **AFR-13** (continental sub-ensemble, hot-models excluded) per the [AAA Adaptation Atlas methodology](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/), grounded in [Samuel et al. 2025](https://doi.org/10.1002/joc.8672).
- **Single-region work**: use the **regional sub-ensemble** matching your region (AFR-WAF for West Africa, AFR-HOA for the Greater Horn, AFR-SAF for Southern Africa, etc.). See [Regional evaluation](/cdh-wikis/aaa-atlas/regional-evaluation/).
- **Stress-testing / worst-case framing only**: use **FULL-18** (all 18 NEX-GDDP-CMIP6 models including hot tail) — and explicitly state that you're including hot models for stress-testing per [Hausfather et al. 2022](https://doi.org/10.1038/d41586-022-01192-2). Don't use FULL-18 silently for central estimates.

Whichever ensemble you choose, **report the central estimate and the inter-model spread together**. A single number without a spread is half the story — the spread *is* the uncertainty, and dropping it is the most common way CGIAR climate communication misleads partners.

### Scenarios

For deciding which SSP scenarios to include.

- **Minimum two scenarios.** Never report future projections under a single scenario alone. The honest framing requires showing the *range* across scenarios, because scenario uncertainty is large by end-of-century and the reader needs to see it.
- **Pragmatic default pair**: **SSP2-4.5 + SSP5-8.5** (middle-of-the-road + high-emissions). This pair captures the realistic policy range and the worst-case stress test in two numbers.
- **Paris-aligned framing**: **SSP1-2.6 + SSP5-8.5** (sustainability + business-as-usual). Use this pair when the proposal narrative explicitly contrasts mitigated vs unmitigated futures (e.g. NDC-aligned framings).
- **Three-scenario reporting** (SSP1-2.6 + SSP2-4.5 + SSP5-8.5) when you have room — this gives the reader the central, low, and high in one chart.
- **Don't use SSP5-8.5 in isolation.** Reporting only SSP5-8.5 implies acceptance of the worst-case scenario and inflates projected impacts. It's a stress-test scenario, not a central one.
- **Don't use SSP3-7.0 silently** — it's the "fragmented world" scenario and carries policy implications that need to be explicit when reported.

## What NOT to do

This list is short on purpose. These are the patterns that produce the cross-centre mismatches this page exists to prevent.

- **Don't cherry-pick a single model** that gives you the answer you want. The ensemble is the unit of analysis; individual models are samples.
- **Don't suppress the inter-model spread** for visual cleanliness. A chart with only the mean is misleading.
- **Don't use raw CMIP6 (ESGF)** for impact work. Bias correction is needed for any application that uses absolute values rather than anomalies.
- **Don't report future projections without naming the baseline.** "+2 °C by 2050" is meaningless without "vs 1995–2014" (or whatever your reference is).
- **Don't silently mix baselines** between a recent-changes figure and a future-projections figure in the same document. The asymmetry between 1991–2020 (observed) and 1995–2014 (projected) is intentional — name it.
- **Don't ignore the East African paradox.** If you're projecting Greater Horn of Africa MAM rainfall, frame your adaptation logic around the *observed drying*, not the modelled wetting. See [East African Paradox](/cdh-wikis/aaa-atlas/east-african-paradox/).
- **Don't drop the climate-rationale narrative**: observed context → observed change → projected change → adaptation logic. A projection number on its own — without the observed history that grounds it — is hard for partners to validate.

## The harmonisation arc — where this is going

Today the recommendations live as text in this wiki. Each centre's climate-data lead has to read the page, apply the guidance, and document the application in their methods sections. That works, but it depends on every centre doing the work — and on reviewers catching the cases where it didn't happen.

The Climate Data Hub is consolidating these recommendations into **accessible data products**:

- **Bias-corrected, ensemble-curated projection layers** for the canonical CGIAR use cases — continental, regional, sub-national; pre-aligned to the 1995–2014 baseline.
- **Pre-baselined observational products** for Africa — temperature, rainfall, extremes — aligned to the 1991–2020 WMO normal.
- **Standardised metadata** (CF conventions plus a CGIAR-specific extension) so any tool that ingests one product can ingest the others without re-mapping.
- **API and bulk-download access** for technical users; clickable map and chart products for policy users.
- **Reproducibility tags** — every CGIAR-published number traceable to the exact product version and ensemble used.

The mile markers along this arc:

1. **Today (2026 mid-year)**: Recommendations as text. The AAA Adaptation Atlas and its *Build a Climate Rationale* notebook serve as the de-facto reference implementation for projections. This wiki is the harmonisation source of truth.
2. **2026 Q4 — 2027 Q1**: Climate Data Hub v1 launches with the canonical projection products (NEX-GDDP-CMIP6 ensemble subsets at country, sub-national, and AR6-region resolutions). CHIRPS / CHIRTS observational products served alongside.
3. **2027 — 2028**: CMIP7 Fast Track products land. The Climate Data Hub publishes a CMIP6→CMIP7 transition guide so partners can compare across generations without re-baselining.
4. **2028+**: Recommendations become defaults *by construction* — the canonical product is the only one you can pull from the Climate Data Hub, so deviation requires going outside the platform (which is a meaningful flag in itself).

If you're already publishing CGIAR climate work, the recommendations above apply now. If you're scoping a new programme that won't deliver until 2027+, design the methodology to take the Climate Data Hub product as input rather than reproducing the upstream processing — your future self will thank you.

## How to flag a gap

If you read this page and your work needs something it doesn't cover — a new region, a new use case, a dataset CGIAR hasn't taken a view on — flag it. Open an issue against the [wikis repo](https://github.com/CGIAR-Climate-Data-Hub/wikis), or contact the CGIAR Climate Data Hub team at [climate-action.cgiar.org](https://climate-action.cgiar.org). Every gap closed here is a future inconsistency prevented.

Centre-level climate-data contacts will be listed here as the network solidifies. Alliance Bioversity-CIAT: Pete Steward (`p.steward@cgiar.org`).

## Further reading

- [African CMIP6 Ensembling — the AAA Adaptation Atlas approach](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/) — the methodology these recommendations apply.
- [Baselines and reference periods](/cdh-wikis/aaa-atlas/baselines/) — the baseline asymmetry between observed and projected products explained.
- [Samuel et al. 2025 — NEX-GDDP-CMIP6 evaluation for sub-Saharan Africa](https://doi.org/10.1002/joc.8672) — the evaluation paper behind the AFR-13 sub-ensemble.
- [Hausfather et al. 2022 — Recognize the 'hot model' problem](https://doi.org/10.1038/d41586-022-01192-2) — the basis for hot-model exclusion in the ensemble defaults.
- [WMO State of the Climate in Africa 2024](https://wmo.int/publication-series/state-of-climate-africa-2024) — applied use of the 1991–2020 observational baseline.
- [CGIAR Climate Action — Climate Data Hub](https://climate-action.cgiar.org) — the operational home that will deliver these recommendations as data products.
