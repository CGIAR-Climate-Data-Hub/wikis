---
title: "Baselines and reference periods"
description: "What a 'temperature anomaly' actually means — and why three different baselines turn up in African adaptation work."
area: AAA Adaptation Atlas
version: "0.2-draft"
estimatedReadingMinutes: 8
sidebar:
  order: 6
  label: "Baselines"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

:::tip[If you remember one thing]
A temperature anomaly is meaningless without a baseline. Every chart that says "+2 °C by 2050" is implicitly answering "compared to *when*?" — and different sources answer differently. Always name the baseline; always check it before comparing two charts.
:::

## What this page covers

Three different baselines turn up in African adaptation work. They're all defensible; none of them is wrong. But they give different numbers for the same physical climate, and you'll be asked to defend a number in a proposal. By the end of this page you'll know:

- What a baseline (reference period) actually is
- The three baselines you'll meet most often
- Why observational and projection products often use different baselines from each other
- How to convert between them when you need to

## What a baseline is

A **baseline** (or **reference period**) is the past climate state that present and future climate are compared *against*. When a chart says "African temperatures will rise +2 °C by 2050," the +2 is *relative to the baseline* — usually a 20- or 30-year average of recent observed climate.

Baselines exist because absolute temperatures vary across the continent, across the seasons, and across the diurnal cycle. A single number like "Africa in 2050: +2 °C" only makes sense as a *change*. The baseline is the zero point you measure that change from.

A baseline also smooths out year-to-year noise. A 30-year average is long enough to filter most internal variability (ENSO, monsoon variability), so a 30-year baseline gives you the climate's *forced* state at a moment in time. Shorter baselines are noisier; longer ones risk averaging across genuine climate change.

## The three baselines you'll meet

These are the three you'll encounter in any African adaptation document, in order from oldest to most recent.

<figure>
<img src="/cdh-wikis/figures/F-baselines-timeline.svg" alt="A horizontal timeline from 1850 to 2100 showing the three climate reference periods as coloured bars. The 1850 to 1900 IPCC pre-industrial baseline sits at the far left of the chart, spanning 50 years. The 1991 to 2020 WMO observational baseline and the 1995 to 2014 CMIP6 projection baseline both sit near the right of the chart and overlap each other by 20 years. A vertical dashed line at 2026 marks today. A short annotation below the chart notes that approximately 0.85 degrees Celsius of observed warming separates the IPCC pre-industrial anchor from the modern baselines.">
<figcaption><strong>Figure 1.</strong> The three baselines you'll meet, on a single time axis. The IPCC pre-industrial anchor (1850–1900) is far back; the WMO observational normal (1991–2020) and the CMIP6 reference period (1995–2014) are both recent and overlap each other by 20 years. The headline ~0.85 °C offset between the IPCC anchor and the modern baselines is documented in <a href="https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/">IPCC AR6 WGI SPM Box SPM.1</a>. <em>Interim schematic — see <a href="https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/cmip6-wiki/figure-commissions/F-baselines-timeline.md">commission brief</a> for the polished version.</em></figcaption>
</figure>

### 1850–1900 — the IPCC pre-industrial anchor

Used by: **IPCC AR6**, the Paris Agreement temperature targets ("well below 2 °C", "1.5 °C"), most global climate communication.

This period predates significant industrial CO₂ emissions and serves as the "no human influence" reference for global mean surface temperature. It's the baseline behind the famous "1.5 °C" and "2 °C" targets — those are 1.5 and 2 degrees *above 1850–1900*, not above the present.

You'll see this baseline in: AR6 SPM figures (SPM.1, SPM.8); UNFCCC, IPCC, and most international policy documents; carbon-budget calculations.

The catch: 1850–1900 is impossible to observe directly across Africa. Surface stations were sparse and the model-based estimates carry observational uncertainty. The +0.85 °C offset between 1850–1900 and the 1995–2014 CMIP6 reference period is itself an *assessed* value from observed warming, not a directly measured one ([IPCC AR6 WGI SPM Box SPM.1](https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/)).

### 1991–2020 — the WMO operational baseline

Used by: **WMO**, the national meteorological and hydrological services (NMHSs), most operational climate-monitoring products, and observational reporting workflows.

This is the World Meteorological Organization's current standard reference period for climatological normals. It rotates every 30 years (the previous one was 1961–1990); 1991–2020 was adopted in 2021. It's the baseline behind the WMO *State of the Climate in Africa* series: the 2024 report attributes a continental temperature anomaly of +0.86 °C to 2024 — relative to 1991–2020 ([WMO 2024](https://wmo.int/publication-series/state-of-climate-africa-2024)).

The WMO baseline is closer to "the climate readers actually remember," which makes it the natural reference for observational reporting and partner-facing communication. This wiki uses 1991–2020 throughout its projection figures for the same reason.

### 1995–2014 — the CMIP6 reference period

Used by: **CMIP6** experiments, **NEX-GDDP-CMIP6** projections, and any downstream tool that ingests CMIP6 model output without re-baselining.

This is the standard reference period in the CMIP6 design ([Eyring et al. 2016](https://doi.org/10.5194/gmd-9-1937-2016)). The CMIP6 historical experiment runs from 1850 to 2014; the future SSP experiments begin in 2015. So 1995–2014 is the 20-year window at the end of the historical run that the future projections are anchored to.

Statistically downscaled products like NEX-GDDP-CMIP6 inherit this reference period. Future-projection values from CMIP6-derived products are therefore relative to 1995–2014 by construction — not because anyone chose this baseline for partner-facing reasons, but because re-baselining model output to a different period would require additional processing and introduce its own approximation error.

## Why observational and projection products often use different baselines

Tools that combine a recent-changes view with a future-projections view almost always end up with two baselines — observational side anchored to 1991–2020, projection side anchored to 1995–2014. This isn't accidental. It's because the upstream data products carry their own conventions through.

Observational and reanalysis products (CHIRPS, CHIRTS, ERA5, WMO regional bulletins) are reported by their providers against the 1991–2020 WMO baseline. Statistically downscaled projection products (NEX-GDDP-CMIP6, CHELSA-CMIP6) come anchored to 1995–2014 because that's the CMIP6 standard reference period. Forcing both onto a single baseline would mean either re-processing observational data to a non-standard reference (giving up consistency with WMO products and complicating cross-validation with the WMO continental anomaly series) or re-processing model output to a non-standard reference (introducing computational cost and approximation error). Neither typically buys enough scientific value to be worth the cost.

The pragmatic implication: the offset between 1991–2020 and 1995–2014 is small (a few hundredths of a degree for temperature; smaller for precipitation as a ratio). For most adaptation-decision purposes, the difference is well inside the inter-model spread and isn't material. Where a single document puts a recent-changes number next to a future-projections number in the same sentence, both should explicitly name their baseline — let the reader see the asymmetry, and it stops being a problem.

:::caution[Don't silently harmonise]
If you're tempted to "harmonise" recent-change and future-projection figures to a single baseline for clean presentation: don't. The CMIP6 1995–2014 reference is fixed by the upstream model products; the WMO 1991–2020 reference is fixed by the observational products. Re-baselining either side hides an approximation inside what looks like a precise number. Be explicit instead.
:::

## How to read across baselines

You'll occasionally need to convert a number from one baseline to another — usually to put a CMIP6-derived projection alongside an IPCC SPM figure that uses 1850–1900.

The IPCC AR6 WGI SPM provides the assessed offset: **global mean surface temperature increased by 0.85 °C from 1850–1900 to 1995–2014** ([SPM Box SPM.1](https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/)). So a CMIP6 future projection of "+2.0 °C by 2050 (vs 1995–2014)" is equivalent to "+2.85 °C by 2050 (vs 1850–1900)."

The conversion is global, not regional. African-specific offsets between 1850–1900 and modern baselines are different — the continent has warmed faster than the global average ([WMO State of the Climate in Africa 2024](https://wmo.int/publication-series/state-of-climate-africa-2024)). For African chart anomalies, prefer staying in 1991–2020 space rather than converting; converting to 1850–1900 imports the global offset and the regional offset, and most readers won't have either calibrated.

The offset between **1991–2020 and 1995–2014** is small enough that for most adaptation purposes it can be treated as zero. If you need precision, the 1991–2020 mean is slightly cooler than 1995–2014 (because it averages over four extra cool early years and drops four warmer late years), so a future-projections anomaly relative to 1995–2014 is *fractionally smaller* than the same anomaly relative to 1991–2020 — by perhaps 0.05 °C globally. Below the inter-model spread; not worth converting unless you're being asked to defend the third decimal place.

## Where these conventions are applied — CGIAR resources

The 1991–2020 observational baseline combined with the 1995–2014 projection baseline is the pattern across many CGIAR climate-rationale tools. The most-developed example is the **[AAA Adaptation Atlas](https://adaptationatlas.cgiar.org/)** and its *Build a Climate Rationale* notebook, which combine WMO-aligned observational products with NEX-GDDP-CMIP6 projection products under exactly this baseline asymmetry. The AAA Adaptation Atlas's methodology on the projection side is documented in [African CMIP6 Ensembling](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/) — that page goes deeper on how 18 CMIP6 models are sub-set and ensembled for African work. If you're working at a CGIAR centre and want a worked reference implementation of these conventions, that's the place to look.

## Further reading

- [IPCC AR6 WGI SPM Box SPM.1 — assessment of warming since 1850–1900](https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/) — the canonical reference for the 0.85 °C offset.
- [WMO State of the Climate in Africa 2024](https://wmo.int/publication-series/state-of-climate-africa-2024) — applied use of the 1991–2020 baseline across the continent.
- [Eyring et al. 2016 — CMIP6 experimental design](https://doi.org/10.5194/gmd-9-1937-2016) — sets the 1995–2014 reference period inherited by NEX-GDDP and downstream CMIP6-derived products.
- [Carbon Brief — explainer on how IPCC and the Paris Agreement use 1850–1900](https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change/) — non-specialist orientation.
- [WMO climatological normals page](https://community.wmo.int/en/wmo-climatological-normals) — the operational definition of the 30-year baseline cycle.
