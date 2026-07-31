---
title: "Climate models 101 — what's inside a GCM"
description: "What a Global Climate Model actually is, what's inside it, why there are so many of them, and what the CMIP6 framework adds."
area: AAA Adaptation Atlas
version: "0.2-draft"
estimatedReadingMinutes: 10
sidebar:
  order: 6
  label: "Climate models 101"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

:::tip[If you remember one thing]
A climate model is not a statistical trend extrapolation. It is a physics-based simulation — the equations of fluid dynamics, thermodynamics, and radiation solved across thousands of grid cells, thousands of times. That's why the models agree on the direction of warming even when they disagree on the magnitude: **the physics is shared; the uncertainty lives in how sub-grid processes are approximated.**
:::

## What this page covers

A non-specialist explanation of what climate models are, who builds them, what's inside them, and how the international CMIP6 framework brings them all together into a common archive. By the end you'll know:

- What physics actually runs inside a GCM, and where the uncertainty comes from
- How modern Earth System Models differ from the original coupled atmosphere-ocean models
- Why ~50 modelling centres each build their own model — and why that's deliberate
- What the CMIP coordination framework does, and why it makes multi-model ensembles possible
- Which 18 models sit behind NASA's NEX-GDDP-CMIP6 product (the dataset that powers most African projection work, including the AAA Adaptation Atlas), and where to find the deep dive on how those 18 are sub-ensembled for African regions

## What is a Global Climate Model?

When a proposal reviewer asks "which model?" they're really asking "what physical assumptions underpin these numbers?" Knowing what's inside a GCM lets you answer that honestly — and gives you confidence when citing projections in a climate rationale.

A **Global Climate Model (GCM)** is a physics-based computer simulation of Earth's climate system. It divides the atmosphere, ocean, and land surface into a three-dimensional grid — typically at a horizontal spacing of one to two degrees of latitude/longitude, roughly 100–200 km at the equator — and at each grid cell, at each timestep (often 20–30 minutes of simulated time), solves coupled equations for:

- **Atmospheric dynamics** — winds, pressure gradients, the Coriolis effect, moisture transport
- **Thermodynamics** — heat exchange between the atmosphere, land surface, and ocean
- **Radiation** — how solar radiation arrives and how longwave radiation escapes to space (this is where CO₂'s warming effect enters the physics)
- **Surface hydrology** — evaporation, runoff, soil moisture

Not everything can be solved explicitly at the model's grid scale. Processes smaller than a grid cell — convective thunderstorms, cloud microphysics, turbulent ocean surface mixing — must be represented through **parameterisations**: mathematical approximations that estimate the aggregate effect of those sub-grid processes without resolving them individually. Cloud parameterisation is the largest single source of uncertainty between models, and different modelling teams handle it differently ([IPCC AR6 WGI Ch 1](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-1/); [Flato et al. 2013](https://www.ipcc.ch/site/assets/uploads/2018/02/WG1AR5_Chapter09_FINAL.pdf)).

"Global" means the simulation wraps around the whole planet with no open lateral boundaries. "Climate" means it runs for decades to centuries, not the days-to-weeks of a weather forecast. Climate models don't predict *specific* weather events — they simulate the statistical envelope of what the climate system can produce under a given set of forcing conditions.

<figure>
<img src="./figures/F3-gcm-components.png" alt="Schematic diagram showing the main components of a modern climate model: atmosphere, ocean, land surface, sea ice, and vegetation, connected by arrows indicating exchanges of energy, water, and carbon between components.">
<figcaption><strong>Figure 1.</strong> The main components of a modern Earth System Model and the fluxes exchanged between them — energy, water, carbon, and momentum. Each component is represented by equations solved on the model's grid. placeholder — to be commissioned</figcaption>
</figure>

## Earth System Model vs Atmosphere-Ocean GCM — the modern picture

Most of what you'll encounter in CMIP6 is technically an **Earth System Model (ESM)** — a more capable cousin of the original coupled atmosphere-ocean model. The distinction matters if your proposal references land-use feedbacks or carbon sinks; for temperature and rainfall projections over Africa, the two types produce similar outputs.

The original coupled climate models joined an atmospheric model to an ocean model: **Atmosphere-Ocean General Circulation Models (AOGCMs)**. These were the workhorse of CMIP3 and much of CMIP5. They simulated the physical climate well but treated CO₂ concentrations as a prescribed input rather than a quantity the model itself could simulate.

Modern ESMs go further. They add:

- **Ocean and terrestrial carbon cycles** — so the model simulates how much of our CO₂ emissions the ocean and land ecosystems absorb (the carbon-sink feedbacks that affect atmospheric CO₂ concentrations themselves)
- **Dynamic vegetation** — land cover can shift in response to temperature and rainfall, which feeds back into evapotranspiration and surface albedo
- **Atmospheric chemistry** — aerosols, ozone, reactive nitrogen
- **Ice sheet dynamics** — in the most advanced configurations

The naming convention in CMIP6 model IDs is inconsistent: models with "ESM" in their name (like GFDL-ESM4 or ACCESS-ESM1-5) are explicitly ESMs, while others (MIROC6, NorESM2-LM) are technically AOGCMs or hybrid configurations. For the temperature and precipitation variables that downstream products like NEX-GDDP-CMIP6 ingest, the atmosphere-ocean physics core dominates, and the distinction has little practical effect on the projections you cite ([Flato et al. 2013](https://www.ipcc.ch/site/assets/uploads/2018/02/WG1AR5_Chapter09_FINAL.pdf)). It matters most when a study is examining land-cover feedbacks or ocean carbon uptake.

## Why there are so many

The diversity of models across CMIP6 is **deliberate**, not a coordination failure. It's how the climate science community maps the space of uncertainty in our physical representation of the climate system.

Every major national meteorological research institute builds and maintains its own climate model: NOAA's Geophysical Fluid Dynamics Laboratory (GFDL) in the USA, the Max Planck Institute for Meteorology (MPI-M) in Germany, Japan's Meteorological Research Institute (MRI), France's Institut Pierre-Simon Laplace (IPSL), Norway's NCC, and dozens more. Each team has been refining its model for decades and brings different expertise — some stronger on ocean circulation, some on land-surface hydrology, some on atmospheric convection.

Each centre also makes its own choices in **model tuning**: adjusting free parameters in the parameterisation schemes until the model's historical simulation (roughly 1850–2014) reproduces observed temperature, radiative balance, and sea ice with acceptable accuracy ([Hourdin et al. 2017](https://doi.org/10.1175/BAMS-D-15-00135.1)). Tuning is part science, part judgement. A team that prioritises matching global mean temperature will make different parameter choices from a team prioritising regional precipitation patterns — even if both start from the same underlying physics equations.

Different tuning choices lead to different **equilibrium climate sensitivities (ECS)**: how much the model's global mean temperature rises per doubling of atmospheric CO₂. Across CMIP6, the ECS range runs from about 1.8 °C to over 5 °C, compared to the AR6-assessed very-likely range of 2.5–4.0 °C. Models with ECS well above that assessed range — often called **"hot models"** — tend to produce implausibly rapid warming under high-emissions scenarios ([Hausfather et al. 2022](https://doi.org/10.1038/d41586-022-01192-2)). This is a known issue in CMIP6, and serious African projection work — including the AAA Adaptation Atlas's default ensemble — handles it by excluding the most extreme outliers. Full reasoning is in [African CMIP6 Ensembling](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/).

Having ~50 independent models is the community's way of sampling the distribution of plausible futures that different modelling choices imply. It's not that one model is right and the others are wrong. Genuine scientific uncertainty about cloud feedbacks, ocean mixing, and atmospheric chemistry means there are multiple defensible representations of the climate system. The multi-model ensemble mean reflects what the community, as a whole, considers most likely; the ensemble spread captures what remains genuinely unknown.

## The CMIP framework

CMIP is the coordination layer that makes multi-model comparison possible. Without it, every institute would run its own scenarios, produce outputs in incompatible formats, and you couldn't combine them into a single projection band or cite them consistently in a proposal.

The **Coupled Model Intercomparison Project (CMIP)**, organised by the [World Climate Research Programme (WCRP)](https://wcrp-cmip.org/), sets the rules: run these standardised experiments, produce these output variables, archive in this common format. CMIP6 — the sixth phase and the current operational standard — gathered contributions from approximately 50 models at 30+ modelling centres across around 18 countries ([Eyring et al. 2016](https://doi.org/10.5194/gmd-9-1937-2016)).

A standard CMIP6 contribution has two main parts:

- **Historical simulation (1850–2014)** — the model is driven by observed greenhouse-gas concentrations, volcanic eruptions, and solar variation. Used to evaluate whether the model can reproduce observed historical climate before the future runs are trusted.
- **Future-scenario runs (2015–2100, sometimes 2150)** — the model is forced by a prescribed SSP emissions pathway. Several models run all four SSPs (SSP1-2.6, SSP2-4.5, SSP3-7.0, SSP5-8.5); many run only SSP2-4.5 and SSP5-8.5.

Model outputs are archived in the **Earth System Grid Federation (ESGF)** — a distributed infrastructure that makes petabytes of raw CMIP6 data publicly available. Most downstream products used in adaptation work (NASA NEX-GDDP-CMIP6, ISIMIP3b, CHELSA-CMIP6) are derived from this archive after applying bias correction and statistical or dynamical downscaling — topics covered in [Downscaling](/cdh-wikis/aaa-atlas/downscaling/) and [Bias correction](/cdh-wikis/aaa-atlas/bias-correction/).

CMIP is not a single experiment but an umbrella for dozens of **Model Intercomparison Projects (MIPs)** — HighResMIP (high-resolution runs), ScenarioMIP (the standard future-scenario runs), LS3MIP (land surface), and CORDEX (regional downscaling, coordinated separately). CMIP7, the next generation, is now entering its first phases: see [CMIP7 + CORDEX-Africa](/cdh-wikis/aaa-atlas/future-projections/) for what's coming.

## The 18 models behind NEX-GDDP-CMIP6

Most African projection work — including the **AAA Adaptation Atlas** and its *Build a Climate Rationale* notebook — doesn't pull directly from the raw CMIP6 archive. It uses NASA's **NEX-GDDP-CMIP6** dataset ([Thrasher et al. 2022](https://doi.org/10.1038/s41597-022-01393-4)), which statistically downscales CMIP6 output to a 0.25° grid (~25 km spacing) using a bias-corrected spatial disaggregation (BCSD) method. That downscaling is what makes the projections fine enough to use at the country and sub-national scale in Africa.

NASA's original NEX-GDDP-CMIP6 release covered 18 models from institutions across four continents:

| Model | Modelling centre | Country |
|---|---|---|
| ACCESS-CM2 | CSIRO + Bureau of Meteorology | Australia |
| ACCESS-ESM1-5 | CSIRO | Australia |
| CanESM5 | CCCma (Environment and Climate Change Canada) | Canada |
| CMCC-ESM2 | CMCC | Italy |
| EC-Earth3 | EC-Earth consortium | Europe (multi-institution) |
| EC-Earth3-Veg-LR | EC-Earth consortium | Europe (multi-institution) |
| GFDL-ESM4 | NOAA GFDL | USA |
| INM-CM4-8 | INM RAS | Russia |
| INM-CM5-0 | INM RAS | Russia |
| IPSL-CM6A-LR | IPSL | France |
| KACE-1-0-G | NIMS-KMA | South Korea |
| MIROC6 | JAMSTEC / AORI / NIES | Japan |
| MPI-ESM1-2-HR | MPI-M | Germany |
| MPI-ESM1-2-LR | MPI-M | Germany |
| MRI-ESM2-0 | MRI | Japan |
| NorESM2-LM | NCC | Norway |
| NorESM2-MM | NCC | Norway |
| TaiESM1 | AS-RCEC | Taiwan |

Not all 18 are used equally in serious African work. The **AAA Adaptation Atlas** applies **regionally-tuned sub-ensembles** that drop models with documented weaknesses over specific African regions or with ECS outside the AR6-assessed likely range. Which models get dropped, why, which regions use which sub-ensembles, and how to override the defaults are all covered in [African CMIP6 Ensembling](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/).

<figure>
<img src="./figures/F16-cmip6-institutes-map.png" alt="World map with dots marking the locations of the 18 NEX-GDDP-CMIP6 modelling institutes, spread across Australia, Europe, North America, Russia, East Asia, and Taiwan.">
<figcaption><strong>Figure 2.</strong> The 18 NEX-GDDP-CMIP6 modelling centres span four continents. That geographical and institutional diversity is part of why the model spread is treated as a sample from the space of plausible physical representations rather than pure noise. placeholder — to be commissioned</figcaption>
</figure>

## Further reading

- [Eyring et al. 2016 — CMIP6 experimental design and organisation](https://doi.org/10.5194/gmd-9-1937-2016)
- [Hourdin et al. 2017 — The art and science of climate model tuning](https://doi.org/10.1175/BAMS-D-15-00135.1)
- [Flato et al. 2013 — Evaluation of climate models (AR5 WGI Ch 9)](https://www.ipcc.ch/site/assets/uploads/2018/02/WG1AR5_Chapter09_FINAL.pdf)
- [Thrasher et al. 2022 — NASA NEX-GDDP-CMIP6](https://doi.org/10.1038/s41597-022-01393-4)
- [Hausfather et al. 2022 — Recognize the "hot model" problem](https://doi.org/10.1038/d41586-022-01192-2)
- [AR6 WGI Chapter 1 — Framing, Context, and Methods](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-1/)
- [WCRP CMIP project overview](https://wcrp-cmip.org/)
- [Carbon Brief — How do climate models work?](https://www.carbonbrief.org/qa-how-do-climate-models-work)
- [Met Office — What is a climate model?](https://www.metoffice.gov.uk/research/approach/modelling-systems/unified-model/climate-models)
