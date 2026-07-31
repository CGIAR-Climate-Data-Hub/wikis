---
title: "CGIAR Climate Action CMIP7 downscaling — methods and infrastructure"
description: "Methods, compute, and data-sharing infrastructure for a CGIAR-led downscaled and bias-corrected CMIP7 dataset for African adaptation work. Companion page to the CMIP7 transition overview."
area: CGIAR Climate Data Hub
version: "0.1-stub"
estimatedReadingMinutes: 12
authors:
  - name: "Carlos Navarros"
    affiliation: "CGIAR Climate Action — lead author (scaffold to be drafted)"
sidebar:
  order: 15
  label: "CMIP7 — downscaling infrastructure"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

:::caution[Draft — content stub]
This page is a scaffold for the CGIAR-led CMIP7 downscaling proposition. Lead author: **Carlos Navarros**. Supporting context lives in [`playbook/cmip6-wiki/research_anchors_cmip7.md`](https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/cmip6-wiki/research_anchors_cmip7.md) (especially §10 ecosystem map and §11 funding-risk assessment) and the [CMIP7 leadership brief](https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/cmip6-wiki/cmip7-leadership-brief.md).
:::

## What this page covers

The methods, compute, and data-sharing infrastructure needed to produce a **CGIAR Climate Action African-tuned CMIP7 downscaled and bias-corrected dataset** — the data that will eventually replace NEX-GDDP-CMIP6 as the operational backbone of the [AAA Adaptation Atlas](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/) and the [Build a Climate Rationale notebook](https://adaptationatlas.cgiar.org/).

This is the upstream half of CGIAR Climate Action's CMIP7 production effort. The downstream half — the [hazards pipeline](/cdh-wikis/aaa-atlas/cmip7-hazards-pipeline/) that turns these downscaled inputs into adaptation-decision indicators — is the companion page.

For the partner-facing transition overview (what CMIP7 is, when it lands, what proposal authors should do today), see [What's next — CMIP7 and CORDEX-Africa](/cdh-wikis/aaa-atlas/future-projections/).

## Why CGIAR is in this business

No CMIP7-derived downscaled product for African adaptation exists yet from any team — NEX-GDDP-CMIP7 has no public release timeline, no African regional centre (ICPAC, AGRHYMET, ACMAD, CSAG) has announced a CMIP7-tuned product of its own, and the AAA Adaptation Atlas's single largest dependency (NEX-GDDP-CMIP6) is at uncertain funding continuity through the FY2026–FY2027 US budget cycle ([leadership brief](https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/cmip6-wiki/cmip7-leadership-brief.md)).

A CGIAR-led African-tuned CMIP7 downscaling pipeline is **both an opportunity and a hedge** — opportunity to claim production-space for African adaptation, hedge against external dependency failure. This page is where that pipeline is documented.

## Proposition — scope

*To be drafted by Carlos Navarros. Suggested points to cover:*

- **Continental scope** — sub-Saharan Africa + Madagascar; with consideration of North Africa scope.
- **Variables** — minimally daily tasmin / tasmax / pr to match NEX-GDDP-CMIP6 v2 baseline; aspirationally the full 9-variable NEX-GDDP variable list to support direct substitutability.
- **Spatial resolution target** — 0.25° (NEX-GDDP parity) vs higher (CHELSA-class) trade-off.
- **Temporal coverage** — full CMIP7 AFT horizon (1850–2100 historical+scenario).
- **Scenarios** — the seven CMIP7 scenarios (H, HL, M, ML, L, LN, VL) per [van Vuuren et al. 2026](https://gmd.copernicus.org/articles/19/2627/2026/).
- **Model count target** — the AFR-13 / AFR-8 / FULL-18 sub-ensemble logic from [African CMIP6 Ensembling](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/), re-derived against CMIP7 model identities.

## Bias-correction methodology

*To be drafted by Carlos Navarros. Sources for the existing literature:*

- **BCSD (Bias Correction / Spatial Disaggregation)** — the NEX-GDDP-CMIP6 method ([Thrasher et al. 2022, *Scientific Data*](https://www.nature.com/articles/s41597-022-01393-4)).
- **QDM (Quantile Delta Mapping) + QPLAD** — Climate Impact Lab's GDPCIR method ([Gergel et al. 2024, *GMD*](https://gmd.copernicus.org/articles/17/191/2024/)).
- **ISIMIP3BASD (trend-preserving bias-adjustment)** — the ISIMIP method ([Lange 2019, *GMD*](https://gmd.copernicus.org/articles/12/3055/2019/)).
- **Delta-change methods** — CHELSA, WorldClim approach.

*Suggested decision points:*

- Which method best handles African precipitation extremes (relevant to East African paradox handling)?
- How to handle the **observational baseline** — CHIRTS / CHIRPS (Africa-tuned, the existing AAA convention) vs ERA5-Land (global, longer record) vs MSWEP?
- Reference period for bias correction — 1995–2014 (CMIP6 standard) or shift to a longer window?

## Downscaling methodology

*To be drafted by Carlos Navarros.*

- **Statistical vs dynamical** — for the operational pipeline, statistical (BCSD / QDM-class) is the right choice for breadth and speed; dynamical (CORDEX-Africa-CMIP7) is a complementary parallel product, not a primary.
- **Spatial interpolation method** — bilinear vs bicubic vs constructed-analogue.
- **Topography handling** — Ethiopian highlands, Atlas Mountains, East African Rift require careful treatment.

## Compute infrastructure

*To be drafted by Carlos Navarros. The infrastructure decision must support both this downscaling pipeline AND the downstream [hazards pipeline](/cdh-wikis/aaa-atlas/cmip7-hazards-pipeline/) — shared compute is one of the design constraints.*

*Suggested points to cover:*

- **Compute envelope** — TB of input data ingested, TB of output, CPU-hour budget for the full ensemble × scenario × year matrix.
- **Hosting options** — AWS (NASA NEX precedent), Google Cloud, Microsoft Azure (Planetary Computer precedent), Copernicus DIAS (EU), CGIAR-internal HPC (Alliance Bioversity-CIAT, ILRI, others).
- **Decision drivers** — cost, data residency, partner accessibility, durability.
- **Workflow orchestration** — Pangeo / Dask, Snakemake, Prefect, Argo Workflows, others.

## Data storage and sharing infrastructure

*To be drafted by Carlos Navarros.*

*Suggested points to cover:*

- **Output format** — netCDF-CF, Zarr, GeoTIFF, COG, Parquet (for tabular indices).
- **Access pattern** — bulk download via S3 / Cloud Storage, OPeNDAP, STAC catalogue.
- **Catalog / metadata** — ESGF integration vs standalone catalogue vs Climate Data Hub native registry.
- **License** — CC-BY-4.0 (matching CMIP7 forcings convention).
- **DOI and versioning** — Zenodo, datacite, monthly or quarterly minted versions.
- **Discoverability** — partner-facing how-to-access guide; OGC API; STAC.

## Pipeline architecture

*To be drafted by Carlos Navarros.*

*Suggested stages:*

1. **Ingest** — pull raw CMIP7 model output from ESGF-NG / Copernicus C3S CDS, cache per model × scenario × variable.
2. **Bias-correct** — apply the chosen method against the African observational baseline.
3. **Downscale** — apply the chosen spatial method to the target grid.
4. **Validate** — compare downscaled output against held-out observational sets; flag anomalies.
5. **Publish** — emit netCDF/Zarr to storage, mint catalogue entry, update STAC.
6. **Hand off** — make outputs available to the [hazards pipeline](/cdh-wikis/aaa-atlas/cmip7-hazards-pipeline/).

## Timeline and dependencies

*To be drafted by Carlos Navarros.*

| Quarter | Milestone | Dependency |
|---|---|---|
| **2026 Q4** | Funding decision; team scoping | CGIAR Climate Action leadership |
| **2027 Q1** | Pilot pipeline against 2–3 CMIP7 models | First AFT models on ESGF-NG |
| **2027 H2** | Scale to full AFR-13 successor ensemble | Continued ESGF-NG publication |
| **2028 H1** | First public release of CGIAR-AAA-CMIP7 v0.1 | Validation against observational baselines |
| **2028 H2 / 2029** | Integration into the AAA Adaptation Atlas Future Projections layer | Hand-off to the hazards pipeline complete |

## Validation and QA/QC

*To be drafted by Carlos Navarros.*

- **Reference data** — CHIRTS / CHIRPS for Africa observational backbone; ERA5-Land as cross-check.
- **Validation metrics** — KGE, NSE, percent-bias for the historical period; trend preservation across the bias correction.
- **Comparison products** — NEX-GDDP-CMIP6 v2 (regression test), CIL-GDPCIR-CMIP6, CHELSA-CMIP6.
- **AR6-region-resolved validation** for the AR6 reference regions over Africa ([Iturbide et al. 2020](https://doi.org/10.5194/essd-12-2959-2020)).
- **Adversarial cases** — known-difficult regions (East African long rains, Sahel summer monsoon, Madagascar orographic precipitation).

## Open design questions

*To be answered as part of the pilot phase:*

- Single CGIAR-AAA-CMIP7 product or **a small family** of products (e.g. one for daily indices, one for bioclim variables, one for extremes)?
- Centralised CGIAR pipeline or **partnership-led** (CSAG, ICPAC contributing methodology)?
- How to integrate with [ISIMIP4](https://www.isimip.org/) and CORDEX-Africa-CMIP7 outputs rather than duplicate them?
- Maintenance commitment — how many years post-release will CGIAR support this product?

## Further reading

- [What's next — CMIP7 and CORDEX-Africa](/cdh-wikis/aaa-atlas/future-projections/) — the partner-facing transition overview.
- [CMIP7 hazards pipeline](/cdh-wikis/aaa-atlas/cmip7-hazards-pipeline/) — the companion downstream page.
- [African CMIP6 Ensembling](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/) — the existing CMIP6 methodology this pipeline will replace.
- [Dataset landscape](/cdh-wikis/aaa-atlas/dataset-landscape/) *(draft)* — the wider CMIP-era dataset catalogue.
- [research_anchors_cmip7.md](https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/cmip6-wiki/research_anchors_cmip7.md) §10 — the full ecosystem map of parallel downscaling teams.
- [CMIP7 leadership brief](https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/cmip6-wiki/cmip7-leadership-brief.md) — the case for CGIAR claiming production-space.
