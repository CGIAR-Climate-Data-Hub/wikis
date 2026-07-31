---
title: "Downscaling — from global to local"
description: "What downscaling is, the two main families (statistical vs dynamical), and how they differ in cost, output, and trustworthiness for African adaptation work."
area: AAA Adaptation Atlas
version: "0.1-stub"
estimatedReadingMinutes: 10
sidebar:
  order: 8
  label: "Downscaling"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

:::caution[Draft — content stub]
This page is currently a structural scaffold. Sources for citations are catalogued in [`playbook/cmip6-wiki/research_anchors.md`](https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/cmip6-wiki/research_anchors.md) §A4.
:::

## What this page covers

Why raw climate-model output isn't directly useful at country / admin-1 scale; the two methods that bridge the gap; how they differ in approach, cost, and the kind of answers they can support.

## The resolution gap

*To be written. CMIP6 GCMs are ~100-250 km native resolution. African admin-1 polygons (~50-200 km across) sit at the edge of one or two grid cells. Coastal effects, orographic precipitation, river basin scales all sub-grid. Hence the need to downscale.*

## Statistical downscaling

*To be written. Big idea: use observed-climate patterns to map coarse model output to finer resolution. Methods: BCSD (Wood 2004), ISIMIP3BASD (Lange 2019), quantile mapping (Cannon 2015). Pros: cheap, fast, applicable to many GCMs at once. Cons: assumes stationarity of bias; can't generate new physical detail (just spatial disaggregation).*

## Dynamical downscaling

*To be written. Big idea: nest a regional climate model (RCM) inside a global GCM. Run the regional model at fine resolution; let physics generate the local detail. Pros: physically self-consistent; can resolve orography, sea breezes, monsoon variability. Cons: expensive (compute + storage); smaller ensembles; introduces another layer of model uncertainty (the RCM choice).*

## CORDEX — the dynamical downscaling community

*To be written. Coordinated Regional Climate Downscaling Experiment. CORDEX-Africa (AFR-22 / AFR-44); CORDEX-CORE. CMIP5-era runs are mature; CMIP6-era runs are in progress. Reference: Giorgi & Gutowski 2015.*

## Which to use, when

*To be written. Decision matrix. Statistical (NEX-GDDP-CMIP6, ISIMIP3b, CHELSA) for: most national / admin-1 adaptation work, large-ensemble framing, comparability across countries. Dynamical (CORDEX) for: extreme events / convection-permitting questions, physical-consistency-critical impacts, regional research with compute budget.*

## What the Atlas uses, and why

*To be written. NEX-GDDP-CMIP6: 0.25° statistical downscaling. Cross-link to [Dataset landscape](/cdh-wikis/aaa-atlas/dataset-landscape/) for the full comparison.*

## Further reading

- [Giorgi & Gutowski 2015 — CORDEX overview](https://doi.org/10.1146/annurev-environ-102014-021217)
- [Thrasher et al. 2022 — NEX-GDDP-CMIP6 product](https://doi.org/10.1038/s41597-022-01393-4)
- [AR6 WGI Ch 10 — Regional climate change linkage](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-10/)
- [Maraun & Widmann 2018 — Statistical downscaling textbook](https://doi.org/10.1017/9781107588783)
