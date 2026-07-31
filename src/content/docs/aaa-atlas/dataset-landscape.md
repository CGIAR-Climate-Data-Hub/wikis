---
title: "The climate-projection dataset landscape"
description: "A reference catalogue of the climate-projection datasets relevant to African adaptation work — what they are, what they're for, and where to get them. Includes NEX-GDDP-CMIP6, CORDEX-Africa, ISIMIP3b, CHELSA-CMIP6, ERA5, CHIRPS, and others."
area: AAA Adaptation Atlas
version: "0.1-stub"
estimatedReadingMinutes: 15
sidebar:
  order: 10
  label: "Dataset landscape"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

:::caution[Draft — content stub]
This page is currently a structural scaffold. The full dataset inventory backing this page lives in [`playbook/cmip6-wiki/datasets_inventory.md`](https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/cmip6-wiki/datasets_inventory.md).
:::

## What this page covers

The major climate-projection and climate-baseline datasets you'll encounter doing African adaptation work. For each: what it is, what it's best for, what its limitations are, and where to get it. The headline comparison table; then per-dataset write-ups for the most-likely-relevant ones.

## At-a-glance comparison

*To be written. A single table with columns:*

| Dataset | Type | Resolution | Coverage | Bias-corrected | Africa-suited | Best for |
|---|---|---|---|---|---|---|

*Populated from `datasets_inventory.md`.*

## Datasets you'll meet most often

*Per-dataset write-ups (1-2 paragraphs each) for:*

### NEX-GDDP-CMIP6

*The Atlas default. 18 models, 0.25°, BCSD bias correction.*

### CORDEX-Africa

*Dynamical downscaling. CMIP5-era mature, CMIP6-era in progress.*

### ISIMIP3b

*Impact-sector default. 5 models, 0.5°, ISIMIP3BASD bias adjustment.*

### CHELSA-CMIP6

*Very-high-resolution (1 km) for ecology / agroecology.*

### ERA5 / ERA5-Land

*The dominant historical-reanalysis baseline for Africa.*

### CHIRPS / CHIRTS-ERA5

*UCSB observational gridded rainfall + temperature.*

### AR6 Interactive Atlas

*IPCC's pre-processed CMIP6 + CORDEX organised by AR6 regions.*

### World Bank Climate Knowledge Portal

*The most-likely alternative tool the Atlas's audience already uses.*

## Mentioned briefly

*One-line each on: CMIP6 raw (ESGF), CMIP5 raw, CIL-GDPCIR, WorldClim Future, MERRA-2, JRA-55, GMFD, W5E5.*

## How to choose for your use case

*To be written. Decision-tree framing:*

- *National / admin-1 adaptation work with multiple variables* → NEX-GDDP-CMIP6
- *Impact-sector modelling (crops / water / health)* → ISIMIP3b
- *Very-fine-resolution ecological work* → CHELSA-CMIP6
- *Physical-consistency-critical extreme events* → CORDEX-Africa
- *Historical baseline + observed-change analysis* → ERA5 + CHIRPS/CHIRTS
- *Operational reporting + government policy framing* → AR6 Interactive Atlas + CCKP

## Why the Atlas chose NEX-GDDP-CMIP6

*To be written. Brief justification cross-linking to [Atlas approach](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/).*
