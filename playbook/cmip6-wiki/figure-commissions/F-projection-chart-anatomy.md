# Figure commission — F-projection-chart-anatomy

**Status**: ready to commission.

**Used on**: `src/content/docs/aaa-atlas/projections-primer.md`, placed after the "How to read a projection chart" section.

**Final file path**: `src/content/docs/aaa-atlas/figures/F-projection-chart-anatomy.png` (PNG preferred; SVG acceptable).

## What the figure must show

An annotated CMIP6 time-series, time axis covering at least 2020–2100, with **two scenario bands** (preferred: SSP1-2.6 + SSP3-7.0, since these are the two scenarios SPM Figure 8 already shows with shaded *very-likely* ranges). Each scenario contains:

- A thick **central line** = ensemble mean.
- A **shaded envelope** behind the line = inter-model spread (the *very-likely* range, as used in SPM.8).

The two scenario bands must visibly **overlap heavily in the near term** (through ~2040) and **diverge clearly by 2080–2100**.

Four annotation callouts, in roughly these positions:

1. *"Ensemble mean"* → leader pointing to one of the central lines.
2. *"Inter-model spread (17–83% range)"* → leader pointing to one of the shaded envelopes.
3. *"Scenario uncertainty"* → bracket or leader between the two scenario means at the 2100 end of the chart.
4. *"Near-term: internal variability dominates"* → leader pointing to the overlapping left portion of the chart.

## Source — use this

Base image: **IPCC AR6 WGI Summary for Policymakers Figure 8, panel (a) only**.

- Figure page: https://www.ipcc.ch/report/ar6/wg1/figures/summary-for-policymakers/figure-spm-8/
- High-resolution PNG: https://www.ipcc.ch/report/ar6/wg1/downloads/figures/IPCC_AR6_WGI_SPM_Figure_8.png
- Underlying dataset: https://catalogue.ceda.ac.uk/uuid/98af2184e13e4b91893ab72f301790db
- **Licence**: CC-BY 4.0 (IPCC AR6 figures — re-usable with attribution).

## Workflow

1. Crop SPM Figure 8 to **panel (a) only**. Discard panels (b) Arctic sea ice, (c) ocean pH, (d) sea level, (e) sea level at 2300.
2. Recommended: **simplify to two scenarios** by removing the SSP1-1.9, SSP2-4.5, and SSP5-8.5 mean lines from the cropped panel. Keep SSP1-2.6 (low, with shading) and SSP3-7.0 (high, with shading). A two-scenario figure reads more cleanly for a pedagogical figure than the original five-scenario panel.
3. Add the four annotation callouts per [STYLE.md](../../../STYLE.md) callout conventions: 12 px primary label, 11 px secondary subtitle, 0.75 stroke leader line in `var(--color-text-secondary)`. Place callouts at the chart margins (top-left, top-right, right-side bracket, bottom-left).
4. Save as 800 px-wide PNG (or SVG) at the file path above.

## Style exceptions for this figure (important)

Per [STYLE.md baseline convention](../../../STYLE.md#baseline-convention), figures that are direct adaptations of IPCC originals **retain the original baseline and palette**. So for *this* figure, the following style points are exceptions:

| Element | This figure | Wiki default |
|---|---|---|
| Y-axis baseline | **1850–1900** (the IPCC pre-industrial anchor used in SPM.8) | 1991–2020 (WMO observational) |
| Scenario colour palette | **IPCC's SSP colour scheme** (preserve as-rendered) | Blue / amber pair |

All other STYLE.md rules apply: callout typography, sentence case, font sizes, accessibility, caption convention.

## Caption (already written in the page source)

> **Figure 1.** Anatomy of a projection chart. Adapted from [IPCC AR6 WGI SPM Figure 8, panel (a)](https://www.ipcc.ch/report/ar6/wg1/figures/summary-for-policymakers/figure-spm-8/) (CC-BY 4.0). Each scenario shows the multi-model ensemble mean (central line) with the *very likely* inter-model range as shading. Temperature anomalies are relative to **1850–1900** (the IPCC pre-industrial baseline) — see [Baselines and reference periods](/cdh-wikis/aaa-atlas/baselines/) for how this baseline relates to the 1991–2020 WMO baseline used elsewhere on the wiki. *Placeholder — to be commissioned.*

## Alt text (already written in the page source)

> A line chart showing global mean surface temperature change from 1950 to 2100 across CMIP6 scenarios. The y-axis is temperature change in °C relative to 1850–1900. Each scenario is rendered as a coloured central line — the multi-model ensemble mean — with a shaded envelope behind it showing the 17–83% inter-model range. The historical period before 2015 is shown as a black line. The scenario lines start from a common point in 2015 and overlap heavily through the 2030s before diverging clearly by 2100, with the high-emissions scenario reaching the greatest warming. Four annotation callouts label: the ensemble mean (a central scenario line), the inter-model spread (the shaded envelope), the scenario uncertainty (the gap between scenario means at 2100), and the near-term region where the scenario bands overlap and internal variability dominates the uncertainty.

## Deliverable

- File at: `src/content/docs/aaa-atlas/figures/F-projection-chart-anatomy.png`
- Send to: Pete Steward (`p.steward@cgiar.org`) or open a PR against this repo.

## Acceptance checklist

Before this figure can be marked v0.3-validated:

- [ ] Cropped to panel (a) only.
- [ ] Two scenarios visible (SSP1-2.6 + SSP3-7.0) with both means + shaded envelopes.
- [ ] Four callouts placed at chart margins per STYLE.md.
- [ ] CC-BY 4.0 attribution and 1850–1900 baseline both named in the caption.
- [ ] PNG legible at 800 px width.
- [ ] Alt text in the `<figure>` block matches the rendered figure exactly.
