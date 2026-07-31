---
title: "CGIAR Climate Action CMIP7 hazards pipeline"
description: "The downstream hazards-indicator pipeline that consumes the CGIAR-led CMIP7 downscaled and bias-corrected dataset, feeding the AAA Adaptation Atlas and the Build a Climate Rationale notebook."
area: CGIAR Climate Data Hub
version: "0.1-stub"
estimatedReadingMinutes: 10
authors:
  - name: "Pete Steward"
    affiliation: "Alliance Bioversity-CIAT / CGIAR Climate Action — co-lead author (scaffold to be drafted)"
  - name: "Harold Achicanoy"
    affiliation: "Alliance Bioversity-CIAT / CGIAR Climate Action — co-lead author (scaffold to be drafted)"
  - name: "Brayden Youngberg"
    affiliation: "Alliance Bioversity-CIAT / CGIAR Climate Action — co-lead author (scaffold to be drafted)"
sidebar:
  order: 16
  label: "CMIP7 — hazards pipeline"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

:::caution[Draft — content stub]
This page is a scaffold for the CGIAR-led CMIP7 hazards pipeline. Lead authors: **Pete Steward, Harold Achicanoy, Brayden Youngberg**. This page describes the downstream half of the CGIAR Climate Action CMIP7 production effort; the upstream half is the [CMIP7 downscaling infrastructure page](/cdh-wikis/aaa-atlas/cmip7-downscaling-infrastructure/). The two pipelines share compute infrastructure.
:::

## What this page covers

The methodology and pipeline that turns the [CGIAR-led CMIP7 downscaled and bias-corrected dataset](/cdh-wikis/aaa-atlas/cmip7-downscaling-infrastructure/) into **hazard indicators** — the analysis-ready variables that feed the [AAA Adaptation Atlas](https://adaptationatlas.cgiar.org/), the [Build a Climate Rationale notebook](https://adaptationatlas.cgiar.org/), and partner-facing climate-rationale tools across CGIAR Climate Action.

For the partner-facing transition overview (what CMIP7 is, when it lands, what proposal authors should do today), see [What's next — CMIP7 and CORDEX-Africa](/cdh-wikis/aaa-atlas/future-projections/).

## Scope

*To be drafted by Pete / Harold / Brayden.*

This pipeline replaces the existing CMIP6-era hazards processing in the `hazards_prototype` and `atlas_notebooks` codebases. Its outputs are the variables a climate-rationale author actually cites — degree days, dry-spell length, extreme-precipitation thresholds, heat indices, drought indicators — at the spatial and temporal scales the AAA Adaptation Atlas surfaces.

## Hazard variables to compute

*To be drafted. The starting list inherits the CMIP6-era hazards catalogue:*

- **Thermal**: degree days (growing, heating, cooling); heat-stress indices (WBGT, UTCI); consecutive days >35 °C; tropical-nights count.
- **Precipitation**: total rainfall (annual, seasonal); R10mm, R20mm, R95p; consecutive dry days (CDD); consecutive wet days (CWD); RX1day, RX5day.
- **Drought**: SPI / SPEI at multiple timescales; soil-moisture deficit.
- **Composite**: heat × drought concurrence; growing-season length; rainfall-onset / cessation; agroclimatic-zone shifts.

*Each hazard variable carries:*
- A defined calculation method (ETCCDI / WMO / sector-specific)
- A reference period and baseline
- A spatial / temporal aggregation (gridded, admin-1, country-level)
- An ensemble-aggregation convention (mean, percentile spread)

## Methodology — per hazard

*To be drafted by Pete / Harold / Brayden.*

*Suggested points for each hazard:*

- Calculation method + reference
- Daily-vs-monthly input handling
- Threshold conventions (fixed vs percentile, climatology-relative vs absolute)
- Bias-correction implications — which hazard variables are robust to which BC methods
- Known issues for African regions (e.g. SPI for the Sahel; degree-day formulations for tropical crops)

## Compute infrastructure — shared with the downscaling pipeline

*To be drafted by Pete / Harold / Brayden in coordination with Carlos Navarros.*

The hazards pipeline runs on the **same compute and storage infrastructure** as the [downscaling pipeline](/cdh-wikis/aaa-atlas/cmip7-downscaling-infrastructure/). Decisions taken upstream (cloud vs HPC, workflow orchestrator, storage format, region) propagate downstream.

*Suggested design considerations:*

- **Read pattern** — hazards processing reads downscaled daily data sequentially over time and spatially in chunks. Zarr chunked appropriately is much faster than netCDF for this access pattern.
- **Compute envelope** — typically 1–2 orders of magnitude smaller than the downscaling step (hazards are derived statistics, not regridded fields).
- **Parallelism** — embarrassingly parallel by model × scenario × hazard; suits Dask / Snakemake.
- **Caching** — intermediate hazard outputs cached at multiple aggregation levels (gridded, admin-1, country).

## Data products produced

*To be drafted by Pete / Harold / Brayden.*

*Tentative product list:*

1. **Gridded hazard layers** — netCDF/Zarr, full African continent, per-model and ensemble-aggregated.
2. **Admin-1 / country-level tabular indices** — parquet, per-country time series, suitable for direct ingest into the [Build a Climate Rationale notebook](https://adaptationatlas.cgiar.org/).
3. **Threshold-exceedance maps** — when does each grid cell first cross a hazard threshold under each scenario.
4. **Climate-rationale ready summary indices** — pre-computed change signals (e.g. "+X% rainfall in MAM by 2050") with uncertainty bounds, designed for direct quotation in GCF / Adaptation Fund concept notes.

## Integration with the AAA Adaptation Atlas

*To be drafted.*

- **Read path**: AAA Adaptation Atlas's parquet layer consumes the admin-1 / country tabular indices.
- **Versioning**: hazards-pipeline output versioned per CMIP7 ensemble release; AAA Atlas pins specific hazard-pipeline versions for citation stability.
- **Backward compatibility**: existing CMIP6 hazards layers retained until partners citing CMIP6 work close out their cycles.

## Validation and QA/QC

*To be drafted by Pete / Harold / Brayden.*

- **Reference data** — observed hazard indices from CHIRTS / CHIRPS / ERA5-Land for the historical period.
- **Regression vs CMIP6 hazards pipeline** — hazards under CMIP7 inputs vs hazards under CMIP6 inputs for the historical overlap period.
- **Internal consistency** — composite hazards (e.g. heat × drought) should be self-consistent across spatial and temporal aggregations.
- **Sector spot-checks** — agronomic colleagues at Alliance Bioversity-CIAT / ILRI / IFPRI on whether the hazard fields look right for their crops / livestock systems.

## Timeline and dependencies

*To be drafted. Key dependency: the [downscaling pipeline](/cdh-wikis/aaa-atlas/cmip7-downscaling-infrastructure/) must publish before the hazards pipeline can ingest.*

| Quarter | Milestone | Dependency |
|---|---|---|
| **2026 Q4** | Hazards catalogue review; spec consolidation | None blocking |
| **2027 Q1** | Pipeline scaffold built; runs end-to-end on CMIP6 pilot inputs | Downscaling pipeline pilot |
| **2027 H2** | Pipeline running against first CGIAR-AAA-CMIP7 outputs | Downscaling v0.1 release |
| **2028 H1** | First CMIP7 hazards-layer release; integration into AAA Atlas test | Downscaling production release |
| **2028 H2 / 2029** | Production CMIP7 hazards layer live in the AAA Adaptation Atlas | All upstream + validation complete |

## Open design questions

*To be answered during pipeline scoping:*

- Which hazards to compute first — the highest-cited subset, or full parity with CMIP6 hazards day one?
- How to handle the **East African paradox** in projected hazards — flag-and-disclose, weight-down, or exclude affected models from East African long-rains-derived hazards?
- Use the **AFR-13 sub-ensemble** equivalent or run all CMIP7 models then sub-set per hazard?
- Output format priority — Zarr (cloud-native) or netCDF (community legacy)?

## Further reading

- [CMIP7 downscaling infrastructure](/cdh-wikis/aaa-atlas/cmip7-downscaling-infrastructure/) — the upstream companion page (Carlos Navarros).
- [What's next — CMIP7 and CORDEX-Africa](/cdh-wikis/aaa-atlas/future-projections/) — the partner-facing transition overview.
- [Recommendations for CGIAR](/cdh-wikis/aaa-atlas/cgiar-recommendations/) — current operational defaults that this pipeline will eventually update.
- [African CMIP6 Ensembling](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/) — the CMIP6 methodology that the existing hazards pipeline runs against.
- [research_anchors_cmip7.md](https://github.com/CGIAR-Climate-Data-Hub/cdh-wikis/blob/main/playbook/cmip6-wiki/research_anchors_cmip7.md) — the full CMIP7 knowledge base behind this work.
