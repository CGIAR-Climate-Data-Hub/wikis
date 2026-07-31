---
title: "Bias correction — what it does and why it matters"
description: "Climate models have known biases against observations. Bias correction adjusts model output to better match the observed historical climate. Here's how the most common methods work, and where they break down."
area: AAA Adaptation Atlas
version: "0.1-stub"
estimatedReadingMinutes: 9
sidebar:
  order: 9
  label: "Bias correction"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

:::caution[Draft — content stub]
This page is currently a structural scaffold. Sources for citations are catalogued in [`playbook/cmip6-wiki/research_anchors.md`](https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/cmip6-wiki/research_anchors.md) §A5.
:::

## What this page covers

What bias correction means, the three methods you'll encounter in African adaptation work, why methodologists are sometimes nervous about it, and what to know when citing a bias-corrected product.

## What is bias?

*To be written. A model's raw output systematically differs from observations — too cold, too wet, wrong seasonality. Bias is the systematic part of the model-vs-observation gap, separate from natural variability.*

## The two-step transformation

*To be written. (1) Map raw model historical to observed historical, learning the bias function. (2) Apply the same function to model future output. Result: future projection adjusted for the model's historical bias.*

## Methods you'll encounter

*To be written.*

- **Delta change** — simplest. Add the model's projected anomaly to observed historical climate. Conservative; preserves observed climatology.
- **Quantile mapping** — map each quantile of the model distribution to the corresponding quantile of the observation distribution. The "BCSD" / standard method (Wood 2004; Cannon 2015).
- **ISIMIP3BASD** (Lange 2019) — trend-preserving variant of quantile mapping. Preserves the model's projected change while correcting historical bias. Used by ISIMIP3b and CHELSA-CMIP6.

## Why methodologists are sometimes nervous

*To be written. Sources: Ehret et al. 2012; Maraun 2016. Key points:*

- *Bias correction assumes the bias function is stationary — i.e. that the model's behaviour relative to observations stays the same in a warmer world. Hard to verify.*
- *Bias correction can break physical consistency between variables (a precipitation correction may not match the temperature correction; the corrected fields can be physically incoherent).*
- *Over-correction risks: if the observed reference dataset has its own biases, you're correcting toward the wrong target.*

## What the Atlas uses

*To be written. NEX-GDDP-CMIP6 uses BCSD against the GMFD reference. ISIMIP3b / CHELSA-CMIP6 use ISIMIP3BASD against W5E5. Cross-link to [Dataset landscape](/cdh-wikis/aaa-atlas/dataset-landscape/).*

## Practical guidance

*To be written. When you cite a bias-corrected dataset, the bias-correction method matters less than understanding it exists. The honest framing in a proposal: "We use NEX-GDDP-CMIP6, statistically downscaled and bias-corrected against the GMFD reference."*

## Further reading

- [Cannon et al. 2015 — Bias correction methods comparison](https://doi.org/10.1175/JCLI-D-14-00754.1)
- [Ehret et al. 2012 — Should we apply bias correction?](https://doi.org/10.5194/hess-16-3391-2012)
- [Lange 2019 — ISIMIP3BASD trend-preserving method](https://doi.org/10.5194/gmd-12-3055-2019)
