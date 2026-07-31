# Research anchors — CMIP7 + CORDEX-Africa

**Status:** compiled June 2026 from a `deep-research` synthesis across 5 fan-out searches plus a focused follow-up on the CMIP7 downscaling ecosystem. Every factual claim is cited inline.

**As-of date:** every section below reflects sources current to mid-2026. The field is moving fast — anchor anything you publish to specific dated sources, and re-verify the timeline table before each refresh.

**Verification stance:** the deep-research agents performed initial fact-checking against primary sources (WCRP, PCMDI, peer-reviewed GMD papers, modelling-centre pages). Claims marked **⚑ flag** are where sources disagreed, evidence was thin, or the fact is moving fast enough that a re-check is needed before publication.

---

## Executive summary — the bottom line

**For CGIAR Climate Action and partner teams planning bias-correction / downscaling work on CMIP7:**

1. **No CMIP7-derived downscaled product exists yet (June 2026).** The CMIP7 raw model output is just beginning to land on ESGF-NG (launched May 2026), with bulk publication targeted for H2 2026 and stable usability for proposal authors not before late 2027.
2. **The downscaling ecosystem is positioning, not producing.** Six major global teams (NASA NEX-GDDP, Climate Impact Lab GDPCIR, CHELSA, ISIMIP, CORDEX, WorldClim) are all gated on CMIP7 raw output. Only ISIMIP4 and CORDEX-CMIP7 have **explicit public plans**; the others have **implicit follow-up intent** (active CMIP6 product, no public roadmap).
3. **ISIMIP4 is the firmest commitment and the most CGIAR-relevant.** It has a published timeline (forcings May/June 2026; impact runs through 2026–2027), sector specificity (agriculture, water, health), and direct AR7 alignment. **First product likely to ship.**
4. **NEX-GDDP-CMIP7 — the backbone of the AAA Adaptation Atlas — has no public timeline.** Expect 2027 by analogy with the CMIP6 cycle, but Pete should expect to contact `bridget.thrasher@nasa.gov` (the dataset lead) for direct intent and timeline.
5. **CGIAR has no published CMIP7 downscaling effort.** African regional centres (ICPAC, AGRHYMET, ACMAD) are positioning as **consumers** of external products, not producers. This is **opportunity space** for the Climate Data Hub if CGIAR wants to claim a leadership role.
6. **Cross-product comparability will be poor.** Each downscaling team uses a different model subset, different bias-correction method, different observational baseline — comparing "ensemble means" across NEX-GDDP-CMIP7 vs ISIMIP4 vs CHELSA-CMIP7 is not apples-to-apples. **Pick one product per use case and document the choice.**

**Recommended CGIAR sequencing:**

| When | What to do |
|---|---|
| **Now → end-2026** | Stay on CMIP6 (NEX-GDDP-CMIP6 v2, CHELSA-CMIP6, ISIMIP3b). No production migration. |
| **2026 Q4 / 2027 Q1** | Pilot ISIMIP4 once forcings publish — sector readiness is the differentiator. Watch ESGF-NG for first AFT bulk outputs. |
| **2027** | Adopt NEX-GDDP-CMIP7 when NASA publishes (continuity with AAA Atlas pipeline). |
| **2027–2028** | Add CHELSA-CMIP7 for bioclimatic / crop-suitability work; layer CORDEX-Africa-CMIP7 for dynamical fidelity. |
| **2028+** | Production CMIP7 across CGIAR, with AFR-13 sub-ensemble re-derived against new CMIP7 model identities. |

**Funding risk — a critical new context (added June 2026).** The Trump administration's FY2026 budget proposed catastrophic cuts to every US federal contributor to CMIP7 — a ~50% cut to NASA Science, zero funding for NOAA climate research, GFDL closure, $1.15B cut to DOE Office of Science. **Congress decisively rejected most of these in the final appropriations bill signed 23 January 2026** ([AIP](https://www.aip.org/fyi/congress-set-to-finalize-science-budgets-rejecting-trump-cuts); [SpacePolicyOnline](https://spacepolicyonline.com/news/final-fy2026-nasa-noaa-appropriations-bill-clears-senate-white-house-is-next/)). But real damage occurred between January 2025 and January 2026: GISS lost its physical lab, ~10 GFDL staff were fired, the LLNL ESGF node was decommissioned. **Confirmed-cut risk is moderate; staffing, infrastructure-continuity, and FY2027-proposal risk is high.** See §11 for per-product funding-risk details.

**Two strategic questions for CGIAR leadership:**

1. **Is the Climate Data Hub positioned only to consume external CMIP7 products, or to claim space as a producer for African-region adaptation work?** No CGIAR-led CMIP7 downscaling pipeline was identified anywhere — see §10 ecosystem map.
2. **Should CGIAR migrate its CMIP-data pipelines away from US federal endpoints?** The Trump-era operational disruption means NEX-GDDP-CMIP7, GISTEMP, and US ESGF nodes are no longer the unambiguous default for an international research consortium. **Copernicus C3S CDS (EU-funded, treaty-protected) is the safer primary data home** going forward. See §11.5 for the migration recommendation.

---

## 1. CMIP7 design and structure

### The Assessment Fast Track (AFT)

The **CMIP7 Assessment Fast Track (AFT)** is a deliberately compact set of experiments — the expanded DECK plus a curated selection drawn from Community MIPs — designed to feed national/international climate assessments, in particular IPCC AR7 ([WCRP CMIP7 page](https://wcrp-cmip.org/cmip-phases/cmip7/); [Dunne et al. 2025, GMD 18:6671–6700](https://gmd.copernicus.org/articles/18/6671/2025/)).

Three structural changes vs CMIP6:

1. **No more MIP endorsement.** In CMIP6, the Panel formally endorsed ~22–23 MIPs that all bid into the data request, which ballooned the catalogue. For CMIP7 the Panel explicitly does *not* endorse MIPs; instead it publishes best-practice guidance and pulls a curated experiment subset into the AFT ([WCRP MIPs page](https://wcrp-cmip.org/mips/)). 35 community MIPs are currently registered ([WCRP CMIP7 page](https://wcrp-cmip.org/cmip-phases/cmip7/)).
2. **Expanded DECK as the entry card.** DECK now includes `historical`, `esm-hist` (ESMs only), `piClim-control`, `piClim-anthro`, and `piClim-4xCO2` in addition to the legacy CMIP6 experiments. The `abrupt-4xCO2` protocol is recommended out to 300 years for tighter ECS estimates ([Dunne et al. 2025](https://gmd.copernicus.org/articles/18/6671/2025/)).
3. **Continuous-CMIP framing.** CMIP is repositioned as a *continuous activity* with periodic "fast tracks" punctuating it, rather than a single big-bang phase. The AFT is the first such fast track ([WCRP CMIP7 page](https://wcrp-cmip.org/cmip-phases/cmip7/)).

The design responds to feedback after CMIP6 about unsustainable compute and human cost from sprawling MIP requests ([CMIP Panel meeting note, Apr 2024](https://wcrp-cmip.org/cmip-panel-meet-to-advance-cmip7-and-ar7-fast-track/); [Dunne et al. 2025](https://gmd.copernicus.org/articles/18/6671/2025/)).

> **⚑ flag:** the exact AFT experiment count lives in Dunne et al. 2025 Table 3. Pull the number directly from the paper, not from secondary summaries, before publication.

### Relationship to IPCC AR7

The AFT is explicitly scoped to AR7 ([WCRP CMIP7 page](https://wcrp-cmip.org/cmip-phases/cmip7/)). Originally called "AR7 Fast Track" — renamed "Assessment Fast Track" once the AR7 WGI timeline became uncertain.

Per the IPCC-63 workplan document (Lima, October 2025):

- **LAM1** (first lead-author meeting): 1–5 December 2025
- **LAM2:** 20–24 April 2026
- **First Order Draft expert review:** 10 August – 2 October 2026
- **LAM3:** 2–6 November 2026
- Everything from the second-order draft onward is **TBD** — IPCC-62 did not reach consensus on the full AR7 timeline ([IPCC AR7 Workplan Doc.10](https://apps.ipcc.ch/eventmanager/documents/93/221020250633-Doc.10%20-%20Workplan%20of%20the%20IPCC%20AR7.pdf); [SDG Knowledge Hub on IPCC-62](https://sdg.iisd.org/news/ipcc-agrees-working-group-report-outlines-no-decision-on-delivery-timeline/)).

Practical implication: AR7 WGI authors need CMIP7 output on ESGF and analysable before the FOD lock — i.e. usable data needed **mid-2026 to mid-2027**. The CMIP IPO publicly targets "second half of 2026" with a realistic estimate of "end of 2026 at the earliest" ([Carbon Brief, 22 May 2026](https://www.carbonbrief.org/guest-post-how-cmip7-will-shape-the-next-wave-of-climate-science/)).

---

## 2. Timeline (June 2026)

| Milestone | Date | Source |
|---|---|---|
| AFT experiment list endorsed | March 2024 (WGCM) | [CMIP Panel meeting note](https://wcrp-cmip.org/cmip-panel-meet-to-advance-cmip7-and-ar7-fast-track/) |
| Forcing datasets — DECK + ScenarioMIP — finalised | Rolling releases via input4MIPs; ScenarioMIP GHG forcing production-ready **March 2026** | [CMIP7 Forcings page](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/); [Zenodo: ScenarioMIP GHG forcing](https://zenodo.org/records/19243739) |
| CMIP6 ESGF closed to new submissions | 7 April 2025 | [ESGF announcement](https://wcrp-cmip.org/esgf-information/) |
| LLNL ESGF node decommissioned | 29 July 2025 | [ESGF announcement](https://wcrp-cmip.org/esgf-information/) |
| ESGF-NG (Next Generation) launch | May 2026 | [ESGF announcement](https://wcrp-cmip.org/esgf-information/) |
| CMIP7 Community Workshop (CMIP 2026), Kyoto | March 2026 | [ACCESS-NRI](https://www.access-nri.org.au/cmip7-overview/) |
| Model simulations underway at centres | Spring 2026 (IAM-derived scenarios); piControl/historical already running at multiple centres | [Carbon Brief, May 2026](https://www.carbonbrief.org/guest-post-how-cmip7-will-shape-the-next-wave-of-climate-science/); [ACCESS-NRI](https://www.access-nri.org.au/cmip7-overview/) |
| First ESGF release (CMIP7 model output) | First AFT data publication "anticipated late 2025"; in practice realistic first-data mid-2026, broader publication end-2026 | [ESGF announcement](https://wcrp-cmip.org/esgf-information/); [Carbon Brief, May 2026](https://www.carbonbrief.org/guest-post-how-cmip7-will-shape-the-next-wave-of-climate-science/) |
| AR7 WGI FOD expert review | 10 August – 2 October 2026 | [IPCC AR7 Workplan](https://apps.ipcc.ch/eventmanager/documents/93/221020250633-Doc.10%20-%20Workplan%20of%20the%20IPCC%20AR7.pdf) |
| First peer-reviewed CMIP7 results | GMD special issue open (forcings + experimental design); modelling-centre results papers realistic late 2026 / 2027 | [GMD CMIP7 special issue](https://gmd.copernicus.org/articles/special_issue1315.html) |
| AR7 WGI Summary for Policymakers approval | TBD (post-2027, undecided at IPCC-63) | [IPCC AR7 Workplan](https://apps.ipcc.ch/eventmanager/documents/93/221020250633-Doc.10%20-%20Workplan%20of%20the%20IPCC%20AR7.pdf) |
| Stable-result horizon for proposal authors | **Not before 2027–2028.** CMIP6 remains the citable corpus through at least mid-2027 | Inferred from ESGF + Dunne et al. + AR7 timeline above |

> **⚑ flag:** every date after mid-2026 is a moving target. Forcings are the most stable element; AR7 milestones are the least stable.

### Where CMIP7 is right now (June 2026)

- **Forcings:** complete and in production form via input4MIPs, including ScenarioMIP GHG concentrations published March 2026 on ESGF ([CMIP7 Forcings page](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/)).
- **Model simulations:** underway at multiple centres. ACCESS-ESM 1.6 is the publicly confirmed AFT submission ([ACCESS-NRI](https://www.access-nri.org.au/cmip7-overview/)); UKESM2 in development with a mid-2026 release target ([UKESM CMIP](https://ukesm.ac.uk/science/using-model-outputs-cmip/)). Bulk AFT output is not yet on ESGF.
- **ESGF:** active transition. ESGF-NG launched May 2026; first CMIP7 input4MIPs forcing data is on ESGF; CMIP7 model-output publication is just beginning to come online and is expected to ramp through late 2026 ([ESGF announcement](https://wcrp-cmip.org/esgf-information/)).

---

## 3. ScenarioMIP-CMIP7

**Status:** formally adopted. Design paper published — **[van Vuuren et al. 2026, GMD 19:2627–2656](https://gmd.copernicus.org/articles/19/2627/2026/)** — after peer review by 11 reviewers. IAM scenario quantifications delivered early February 2026; available via the [IIASA ScenarioMIP Explorer](https://scenariomip.apps.ece.iiasa.ac.at/) and Zenodo, under an **early-access window 1 Feb – 31 Aug 2026** (registration required, peer-review use only) ([Zenodo record 19825038](https://zenodo.org/records/19825038)).

### The seven scenarios

ScenarioMIP-CMIP7 defines **seven scenarios** ([WCRP Explainer](https://wcrp-cmip.org/explainer-scenarios-for-cmip7/); [van Vuuren et al. 2026](https://gmd.copernicus.org/articles/19/2627/2026/)):

| Code | Name | Character |
|---|---|---|
| **H** | High | Plausibly possible given a rollback of current policies. ~3.5 °C by 2100. **0.9 °C cooler than CMIP6 SSP5-8.5**, ~71 Gt CO₂/yr in 2100 vs 128 Gt for SSP5-8.5 |
| **HL** | High-to-Low | Overshoot pathway — high near-term, sharp mitigation later |
| **M** | Medium | **Anchored to currently-implemented policy (frozen at 2025)** — not to a forcing target |
| **ML** | Medium-to-Low | Overshoot, less aggressive than HL |
| **L** | Low | Roughly fills the SSP1-2.6 niche |
| **LN** | Low-to-Negative | Significant deliberate net-negative emissions (CDR-heavy) |
| **VL** | Very Low | **Overshoots 1.5 °C by ~0.2–0.3 °C** before returning to 1.5 °C by 2100 |

Sources: [WCRP Explainer](https://wcrp-cmip.org/explainer-scenarios-for-cmip7/); [van Vuuren et al. 2026](https://gmd.copernicus.org/articles/19/2627/2026/); [PBL release](https://www.pbl.nl/en/publications/new-global-climate-scenarios-highest-emissions-scenario-revised); [AEI summary](https://www.aei.org/articles/rcp8-5-is-officially-dead/).

### Labelling — the W/m² suffix is dropped

The radiative-forcing W/m² suffix is **dropped**: there is no "8.5" or "7.0" or "2.6" label in CMIP7 ([WCRP Explainer](https://wcrp-cmip.org/explainer-scenarios-for-cmip7/)). IAM teams still base quantifications on SSP narratives in the background — a single **marker SSP** is chosen per scenario and documented in companion IAM papers in 2026 — but the public-facing naming is **emissions-character-based** (H/M/L) rather than `SSPx-y.z` ([van Vuuren et al. 2026](https://gmd.copernicus.org/articles/19/2627/2026/)).

**There is no clean one-to-one mapping** from old to new labels. This is a re-design, not a re-label. Indicative correspondences from the literature:

- VL ≈ SSP1-1.9 territory but with explicit overshoot
- L roughly fills the SSP1-2.6 niche
- M is anchored to **current observed policy** (closer to ~SSP2-4.5 in outcomes but built differently)
- H is **well below** SSP5-8.5 (the highest CMIP7 scenario rejects the "fossil-fuel-maximalist counterfactual" framing)

### Tier structure

For ESMs running **concentration-driven**, all seven scenarios are Tier 1. For ESMs running **emissions-driven** (the more demanding configuration), Tier 1 is the seven emissions-driven runs **plus M in concentration-driven mode** (to isolate carbon-cycle effects); two additional concentration-driven runs are Tier 2 ([van Vuuren et al. 2026, Table 1](https://gmd.copernicus.org/articles/19/2627/2026/); [WCRP Explainer](https://wcrp-cmip.org/explainer-scenarios-for-cmip7/)).

> **⚑ flag:** exact Tier 2 scenario IDs need to be confirmed by reading the paper's Table 1 directly. Search snippets paraphrase rather than quote.

### What's conceptually new

1. **High end reframed** as "plausibly possible given policy rollback," not as a fossil-fuel-maximalist counterfactual. Explicit response to the SSP5-8.5/"hot model" implausibility critique ([AEI](https://www.aei.org/articles/rcp8-5-is-officially-dead/); [van Vuuren et al. 2026](https://gmd.copernicus.org/articles/19/2627/2026/)).
2. **M anchored to current implemented policy** (frozen at 2025), not to an arbitrary forcing target. Major methodological shift ([Carbon Brief, May 2026](https://www.carbonbrief.org/guest-post-how-cmip7-will-shape-the-next-wave-of-climate-science/)).
3. **Explicit accommodation of overshoot + net-negative CDR pathways** (HL, LN, VL). Mitigation now framed as including deliberate carbon removal, not just emissions reductions.

### Implications for African adaptation narratives

Proposal authors **should update their framing** as CMIP7 outputs become available:

- "SSP2-4.5" and "SSP5-8.5" remain valid for CMIP6 data (which is what operational adaptation tools still use through 2027 at minimum).
- CMIP7 outputs will be labelled H/M/L/VL — and the **substantive content has shifted**. CMIP7-H ≠ SSP5-8.5; CMIP7-M is policy-anchored, not forcing-anchored.
- Practical guidance: cite SSP labels when referencing existing CMIP6 products; flag that CMIP7 uses a new framework; note that high-end risk in CMIP7 corresponds to ~3.5 °C by 2100, not >4 °C.

---

## 4. Forcing datasets (input4MIPs)

CMIP7 forcing datasets are distributed through [input4MIPs](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/) (PCMDI/LLNL). The Forcings Task Team curates **12 dataset categories** for the DECK and ScenarioMIP experiments ([WCRP CMIP7 Forcings page](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/); [input4MIPs dataset overviews](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/)).

### The 12 forcings — providers + source IDs

| # | Forcing | Provider / institution | CMIP7 source ID (historical DECK) | Status (Jun 2026) |
|---|---|---|---|---|
| 1 | Anthropogenic SLCF + CO₂ emissions | Hoesly & Smith — **CEDS** (PNNL, USA) | `CEDS-CMIP-2025-04-18` (+ `-supplemental`) | Final |
| 2 | Open biomass-burning emissions | van Marle (Deltares), van der Werf (Wageningen) — **BB4CMIP7** | `DRES-CMIP-BB4CMIP7-2-1` | Final |
| 3 | Land use | Chini & Hurtt (Univ. Maryland) — **LUH3** | `UofMD-landState-3-1-2` | Final |
| 4 | Greenhouse gas concentrations | Nicholls & Meinshausen (**Climate Resource**, AU) | `CR-CMIP-1-0-0` | Final |
| 5 | CO₂ isotopes | Graven (Imperial College) | `ImperialCollege-3-0` | Final |
| 6 | Stratospheric volcanic SO₂ + aerosol optics | Aubry (Univ. of Exeter) | `UOEXETER-CMIP-2-2-1` | Final |
| 7 | Ozone concentrations | Hegglin (Jülich/FZJ), Plummer (ECCC) | `FZJ-CMIP-ozone-1-2`, `FZJ-CMIP-ozone-2-0` | Final |
| 8 | Nitrogen deposition | Jülich Forschungszentrum (FZJ) | `FZJ-CMIP-nitrogen-2-0` | Final |
| 9 | Solar irradiance | Funke (CSIC, ES) — **SOLARIS-HEPPA** | `SOLARIS-HEPPA-CMIP-4-6` | Final |
| 10 | AMIP SST / sea-ice boundary | Durack (PCMDI/LLNL) | `PCMDI-AMIP-1-1-10` | Final |
| 11 | Aerosol optical properties / MACv2-SP | Fiedler (Heidelberg) — distributed via Zenodo | `Zenodo:15283189` | Final |
| 12 | Population density | Paprotny (PIK), Hawker (Bristol/WorldPop) | `PIK-CMIP-1-0-1` | Final |

For ScenarioMIP, emissions and biomass-burning come from **IIASA-IAMC** source IDs (e.g. `IIASA-IAMC-vl-1-1-1` … `IIASA-IAMC-h-1-1-1`) ([dataset overviews summary](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/)). All 12 DECK historical forcings are **production-final** (`mip_era = CMIP7`); earlier `mip_era = CMIP6Plus` source IDs are tagged testing-only ([delivery summary](https://input4mips-cvs.readthedocs.io/en/latest/database-views/input4MIPs_delivery-summary.html)).

ScenarioMIP forcings are finalised across all seven scenarios for: GHG concentrations, anthropogenic + biomass-burning emissions, land use, ozone, nitrogen deposition, volcanic, solar, and population density (released through April 2026). **Gaps**: CO₂ isotopes and AMIP SST/sea-ice have no ScenarioMIP data yet ([summary §ScenarioMIP CMIP7](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/#cmip7_1)).

### Licensing

The **June 2025 CMIP Core Panel ruled that CMIP7 DECK forcings must be CC-BY-4.0 or CC0** ([input4MIPs licensing section](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/#cmip7-input4mips-data-licensing); [WCRP forcing-data licensing](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/)). The WCRP page notes "almost all data providers have complied"; per-file compliance verifiable via the `license_id` / `license` global attributes ([CMIP7 dataset-level view](https://input4mips-cvs.readthedocs.io/en/latest/database-views/input4MIPs_datasets_CMIP7.html)).

**Implication for CGIAR:** all CMIP7 forcings are usable in CGIAR products with attribution and no viral ShareAlike clauses.

### Release-notification channel

Canonical channel is **GitHub releases of `PCMDI/input4MIPs_CVs`** ([releases page](https://github.com/PCMDI/input4MIPs_CVs/releases)). Every CV change triggers a versioned release with a changelog. Subscribe via GitHub *Watch → Custom → Releases*.

The CMIP IPO also mirrors major announcements as emails archived at [forcings-email-archive](https://input4mips-cvs.readthedocs.io/en/latest/forcings-email-archive/). Latest CV release as of writing: **v6.7.43, 5 May 2026**.

### Material differences from CMIP6

- **Land use:** LUH3 replaces LUH2 — adds plantation-forest state (`pltns`), splits biofuel crops into first/second generation, adds afforestation tree-cover (`addtc`) and protected-area fractions. Built on HYDE 3.4 (vs HYDE 3.2) with new remote sensing for Brazil/Indonesia/China ([land-use overview](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/land-use/#differences-from-cmip6-or-other-previous-versions)).
- **Anthropogenic emissions:** new CEDS release extending coverage to **2023**.
- **Biomass burning:** new BB4CMIP7 replacing CMIP6 BB4CMIP6.
- **GHG concentrations:** new Climate Resource product replaces the CMIP6 Meinshausen dataset, extending coverage to **2022** ([CMIP-GHG-Concentration-Generation](https://github.com/climate-resource/CMIP-GHG-Concentration-Generation)).
- **Volcanic:** Univ. of Exeter (Aubry) replaces CMIP6's Toohey/Sigl reconstruction.
- **Ozone + nitrogen deposition:** consolidated under FZJ (Hegglin) replacing CCMI/CMIP6 IGAC-SPARC ozone files.
- **Population density:** new category (no CMIP6 equivalent).
- **Long-run extensions:** population, volcanic, GHGs, emissions now include explicit **2101–2300** extensions for long-run scenarios.
- **Distribution:** input4MIPs publishes via the ESGF ORNL node ([esgf-node.ornl.gov](https://esgf-node.ornl.gov)) with direct-download links maintained in the CVs repo as MetaGrid fallback.

---

## 5. REF — Rapid Evaluation Framework

The **Rapid Evaluation Framework (REF)** is "a community-driven platform for benchmarking and performance assessment of Earth System Models," built as "a complete end to end system providing a systematic and rapid performance assessment of the expected models participating in the CMIP7 Assessment Fast Track" ([WCRP REF page](https://wcrp-cmip.org/cmip7/rapid-evaluation-framework/); [eScience Center press release 13 Apr 2026](https://www.esciencecenter.nl/news/scientists-launch-open-access-framework-to-rapidly-evaluate-next-generation-climate-models-ahead-of-ipcc-ar7/)).

### What's new vs prior infrastructure

REF does **not** replace ESMValTool, ILAMB/IOMB or PMP — it **orchestrates** them. "Three community evaluation and benchmarking packages are included in the CMIP Assessment Fast Track REF (ESMValTool, ILAMB/IOMB and PMP)," with CMEC also contributing, wired into one common containerized pipeline ([eScience Center, 2026](https://www.esciencecenter.nl/news/scientists-launch-open-access-framework-to-rapidly-evaluate-next-generation-climate-models-ahead-of-ipcc-ar7/)).

Crucially, REF "fully integrate[s] evaluation tools into the CMIP publication workflow, and their diagnostic outputs published alongside the model output on the Earth System Grid Federation (ESGF) through an easily accessible website" ([WCRP REF page](https://wcrp-cmip.org/cmip7/rapid-evaluation-framework/)). Where IPCC AR6 evaluation took months and required downloading terabytes of raw model output, "the REF automates much of the process, running checks across a wide range of measurements and producing results that are available online for anyone to access."

### Launch, governance, funding

- **REF v1 launched 7 October 2025** at the ESM2025 Final General Assembly ([WCRP launch announcement, 24 Oct 2025](https://wcrp-cmip.org/launch-of-the-rapid-evaluation-framework-v1/)).
- **CMIP7-ready REF launched in March 2026** at the CMIP 2026 Community Workshop in Kyoto ([eScience Center, 13 Apr 2026](https://www.esciencecenter.nl/news/scientists-launch-open-access-framework-to-rapidly-evaluate-next-generation-climate-models-ahead-of-ipcc-ar7/)).
- Development led by the **CMIP7 Model Benchmarking Task Team** (CMIP Panel). Co-leads: Birgit Hassler (DLR), Ranjini Swaminathan (NCEO/Reading), Forrest Hoffman (ORNL/ESGF).
- Software delivery: Climate Resource + Netherlands eScience Center. Funded by ESA and US DOE.
- "A new governance panel under the WCRP Core Project ESMO is being established to guide its future development."

### What REF produces

"Pre-computed evaluation metrics organized by model component and diagnostic type … statistical summaries, spatial maps, and time series comparisons" — accessed via a Data Explorer and Diagnostic Browser dashboard, with downloads in netCDF, CSV and PNG. Diagnostics organised into five thematic areas aligned with the CMIP7 Harmonised Data Request: atmosphere, Earth system, impacts & adaptation, land & land ice, ocean & sea ice ([WCRP REF page](https://wcrp-cmip.org/cmip7/rapid-evaluation-framework/)).

REF explicitly frames results as characterising "model performance and highlight[ing] model spread, diversity and differences … [results] should not be interpreted as identifying 'good' or 'bad' models" — i.e. no single ranking is produced ([WCRP launch announcement](https://wcrp-cmip.org/launch-of-the-rapid-evaluation-framework-v1/)).

### Implications for African evaluation

No Africa-specific module or regional skill-score product yet. The Model Benchmarking Task Team includes **Demiso Daba (Arba Minch University, Ethiopia)**, and Jared Lewis (Climate Resource) explicitly calls out "colleagues in the Global South" as beneficiaries of pre-computed diagnostics ([eScience Center, 2026](https://www.esciencecenter.nl/news/scientists-launch-open-access-framework-to-rapidly-evaluate-next-generation-climate-models-ahead-of-ipcc-ar7/)).

REF surfaces standard global maps and AR6-reference-region summaries via ESMValTool/PMP. Bespoke African regional evaluation will still need to happen downstream of REF outputs — REF is the *raw material* for [Regional evaluation](/cdh-wikis/aaa-atlas/regional-evaluation/) work, not a replacement for it.

---

## 6. Participating modelling centres

Status of the 18 CMIP6 centres that contributed to NEX-GDDP-CMIP6 (the AAA Adaptation Atlas baseline), as of June 2026:

| Centre (CMIP6 model) | CMIP7 status | Source |
|---|---|---|
| CSIRO/BoM (ACCESS) | **Yes** — ACCESS-ESM1.6 to FastTrack; ACCESS-ESM3 to follow | [ACCESS-NRI](https://www.access-nri.org.au/cmip7-overview/) |
| CCCma, Canada (CanESM5) | **Likely yes — unconfirmed** | [CCCma page](https://www.canada.ca/en/environment-climate-change/services/climate-change/science-research-data/modeling-projections-analysis/centre-modelling-analysis.html); [Carbon Brief](https://www.carbonbrief.org/guest-post-how-cmip7-will-shape-the-next-wave-of-climate-science/) |
| NCAR, USA (CESM2) | **Yes** — CESM3 targeted at FastTrack, public release spring 2026 | [CESM3 plans](https://www.cesm.ucar.edu/news/community-earth-system-model-3-cesm3-plans-progress-timelines) |
| CMCC, Italy (CMCC-ESM2) | **Yes** — CMCC-ESM contributing; CMCC scientists are CMIP7 Data Request authors | [CMCC ESM](https://www.cmcc.it/models/cmcc-esm-earth-system-model); [GMD 19:2849](https://gmd.copernicus.org/articles/19/2849/2026/) |
| CNRM-CERFACS, France (CNRM-CM6/ESM2) | **Yes** — committed via CLIMERI-France | [CLIMERI-France](https://climeri-france.fr/les-simulations-globales/) |
| EC-Earth consortium (EC-Earth3) | **Yes** — EC-Earth4 to FastTrack, plus EC-Earth3-ESM-1-1 also submitted | [EC-Earth4 CMIP7](https://ec-earth.org/ec-earth-and-cmip/ec-earth4-and-cmip7/) |
| NOAA-GFDL, USA (GFDL-ESM4) | **Yes** — GFDL is CMIP Panel co-chair (John Dunne) | [WCRP GFDL node](https://wcrp-cmip.org/nodes/noaa-gfdl/) |
| INM, Russia (INM-CM4/5) | **Yes** — INMCM6 planned, INMCM6M is primary candidate | Volodin research profile |
| IPSL, France (IPSL-CM6A-LR) | **Yes** — committed via CLIMERI-France | [LMDZ CMIP7 workshops](https://www.lmd.ipsl.fr/actulmd/des-journees-pour-echanger-et-reflechir-autour-de-cmip7/) |
| NIMS-KMA, S. Korea (KACE-1-0-G) | **⚑ Unknown** — no public CMIP7 announcement found | [WDC-Climate CMIP6 KACE](https://www.wdc-climate.de/ui/cmip6?input=CMIP6.CMIP.NIMS-KMA.KACE-1-0-G) |
| MIROC consortium, Japan (MIROC6) | **Likely yes** — Tatebe/MIROC team referenced in Dunne et al. 2025 | [Dunne et al. 2025](https://gmd.copernicus.org/articles/18/6671/2025/) |
| MPI-M, Germany (MPI-ESM) | **Yes** — ICON is "central research tool"; MPI-M host of next-generation simulations | [MPI-M research](https://mpimet.mpg.de/en/research/modeling) |
| MRI, Japan (MRI-ESM2) | **⚑ Unknown / likely yes** — long-standing CMIP contributor; no explicit announcement | [Dunne et al. 2025](https://gmd.copernicus.org/articles/18/6671/2025/) (Miyakawa co-author, MRI) |
| NCC, Norway (NorESM2) | **Yes** — NorESM3.0 designated CMIP7 model; INES2/NorESM4CMIP7 meetings March 2026 Bergen | [NorESM annual meetings 2026](https://www.noresm.org/annual-meetings-for-ines2-and-noresm4cmip7-18-20-march-2026/) |
| Taiwan ESM (TaiESM1) | **⚑ Unknown** — no public CMIP7 announcement located | — |
| UK Met Office / NERC (UKESM1) | **Yes** — UKESM1.3-LL to CMIP7 plus HadGEM3-GC5 in two resolutions | [UKESM CMIP](https://ukesm.ac.uk/science/using-model-outputs-cmip/) |

### New entrants / departures

- **DOE E3SM (USA):** partial participation — "E3SM will not complete all of the requested CMIP7 Fast Track simulations … committed to completing the full DECK with the new v3 model" ([E3SM CMIP7 statement](https://e3sm.org/e3sm-participation-in-cmip7/)).
- **Chinese centres (BCC, IAP/LASG-FGOALS, NUIST-NESM, CAMS):** contributed 5+ models to CMIP6; no individual CMIP7 announcements located, but Carbon Brief's "more than 30 climate-modelling centres" implies continued participation ([Carbon Brief](https://www.carbonbrief.org/guest-post-how-cmip7-will-shape-the-next-wave-of-climate-science/)). **⚑ unconfirmed.**
- **No public departures** among the 18 NEX-GDDP-CMIP6 centres.

### Does the NEX-GDDP-CMIP6 18-model subset map cleanly to CMIP7?

**Not yet.** At minimum 13 of the 18 are confirmed-or-likely participating, but:

1. There is no public NEX-GDDP-CMIP7 product yet (see §7).
2. The list of CMIP7 model versions (CESM3 vs CESM2, UKESM2 vs UKESM1, NorESM3 vs NorESM2, EC-Earth4 vs EC-Earth3, ACCESS-ESM 1.6/3 vs CMIP6 ACCESS lines) means even when CMIP7 versions land, they are **new model identities** — the regional-evaluation literature underpinning AFR-13 (Samuel et al. 2025; Park et al. 2023) is CMIP6-version-specific and won't transfer mechanically.
3. **Implication for AFR-13:** the regional sub-ensembles will need re-derivation once CMIP7 modelling output stabilises and African-regional evaluation papers appear (likely 2027+).

---

## 7. Downscaling and African relevance

As of June 2026, **no CMIP7-derived downscaled product for Africa is publicly released.**

### NASA NEX-GDDP-CMIP7

**Not announced.** Current product remains NEX-GDDP-CMIP6 v2.0, last updated 31 May 2025, covering 35 CMIP6 GCMs at 0.25° daily ([NCCS NEX-GDDP-CMIP6](https://www.nccs.nasa.gov/services/data-collections/land-based-products/nex-gddp-cmip6); [v2 Tech Note](https://www.nccs.nasa.gov/sites/default/files/NEX-GDDP-CMIP6-v2-Tech_Note.pdf)). NASA NEX historically waits for ESGF-published source models; CMIP7 AFT publication only began in late 2025 with broader availability gated on ESGF-NG (May 2026). **Expect NEX-GDDP-CMIP7 no earlier than 2027.**

### CHELSA-CMIP7

**Not announced.** Current CHELSA V2.1 + `chelsa-cmip6` Python package (Karger et al. 2023) remain latest ([CHELSA CMIP6](https://chelsa-climate.org/cmip6/)). CHELSA team is participating in CMIP7 Data Request scoping but no V3/CMIP7 product is published. No timeline beyond "alongside CMIP7 ISIMIP cycle."

### ISIMIP

**Active round still ISIMIP3a/3b.** ISIMIP3b on DKRZ refreshed February 2025 ([DKRZ README](https://docs.dkrz.de/_downloads/accd7fad41a788195dd9481aefe52008/README_ISIMIP3b_20250205.pdf)). A formal "ISIMIP4" protocol has not been published; planning is underway in coordination with the AFT ([Dunne et al. 2025](https://gmd.copernicus.org/articles/18/6671/2025/); [ISIMIP-OptimESM workshop 2025](https://www.isimip.org/outcomes/events/upcoming-cross-sectoral-isimip-workshop-2025/)). The Fast Track sequences "high" and "very low" scenarios first so ISIMIP can produce inputs in time for AR7.

**Practical transition path for impact modellers:** stay on ISIMIP3b through 2026–2027; migrate when ISIMIP releases CMIP7-derived forcing bundle (informally targeted late 2026 / 2027).

### CORDEX-CMIP6 over Africa

**Mid-flight, not finished.** Archiving specs v3 released 27 May 2026 ([CORDEX announcement](https://cordex.org/2025/03/21/new-version-of-archiving-specifications-for-cordex-cmip6-dynamical-downscaling-released/)); ESGF-NG publication is the gating step. Live simulation status at [wcrp-cordex.github.io/simulation-status](https://wcrp-cordex.github.io/simulation-status/). **For Africa, CORDEX-CMIP6 outputs likely materialise on ESGF-NG through 2026–2027 — in parallel with, or after, first global CMIP7 downscaled products.**

### Copernicus C3S Atlas — the bridge tool

The **[Copernicus Interactive Climate Atlas](https://atlas.climate.copernicus.eu/)** (v2 May 2025) is the live bridge. Still carries CMIP5/CMIP6 + CORDEX; no CMIP7 layer yet. AR7 Interactive Atlas expert meeting has been proposed but not scheduled.

---

## 8. Practical CGIAR transition guidance

- **No flag-day cutover.** Dunne et al. 2025 framework + Fast Track timeline + AFT delivery target (second half 2026) all point to **multi-year parallel coexistence**. CMIP6 will remain the operational backbone for adaptation work through at least 2027.
- **CMIP6 stays canonical through AR7 drafting.** Until ISIMIP releases CMIP7 forcings and NEX-GDDP-CMIP7 / CHELSA-CMIP7 exist, CMIP6 (NEX-GDDP-CMIP6 v2, CHELSA-CMIP6, ISIMIP3b) is the only viable backbone for sub-national African adaptation products.
- **"CMIP7-ready" products available now: essentially none for impacts work.** What exists is upstream: ScenarioMIP-CMIP7 paper, CMIP7 Data Request, REF infrastructure, finalised forcings. No downscaled, bias-corrected, impacts-ready African product.
- **Switching guidance for proposal authors (2026–2028 horizon):**
  - Frame proposals on CMIP6.
  - Include a "CMIP7 readiness clause" — team will adopt CMIP7-derived ISIMIP/NEX/CHELSA products as they publish, with a re-baseline planned for the AR7 cycle (2028+).
  - For Recent Changes view: continue 1991–2020 WMO baseline regardless.
  - For Future Projections view: continue 1995–2014 CMIP6 reference period; flag that CMIP7 will likely use a similar but not identical baseline once products land.

---

## 9. Monitoring sources

Canonical feeds to watch for keeping this knowledge base current:

| Source | URL | What it covers | Update mechanism | Frequency |
|---|---|---|---|---|
| WCRP-CMIP News | [wcrp-cmip.org/news](https://wcrp-cmip.org/news/) | CMIP7 milestones, Fast Track, REF, ESGF-NG | Page updates + [CMIP mailing lists](https://wcrp-cmip.org/cmip-mailing-lists/) | Weekly |
| PCMDI input4MIPs CVs releases | [github.com/PCMDI/input4MIPs_CVs/releases](https://github.com/PCMDI/input4MIPs_CVs/releases) | Forcing dataset versions | GitHub releases (Watch → Custom → Releases) | Weekly |
| ESGF releases | [esgf.github.io/releases.html](https://esgf.github.io/releases.html) | ESGF infrastructure, ESGF-NG migration | GitHub releases + RSS | Weekly |
| GMD CMIP7 special issue | [gmd.copernicus.org/articles/special_issue1315.html](https://gmd.copernicus.org/articles/special_issue1315.html) | Peer-reviewed framework/forcings/model papers | Page updates | Weekly |
| WCRP-CMIP forcings page | [wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/) | Forcing release announcements | Anchor section `#notifications_of_dataset_releases` | Weekly |
| input4MIPs forcings email archive | [input4mips-cvs.readthedocs.io/en/latest/forcings-email-archive/](https://input4mips-cvs.readthedocs.io/en/latest/forcings-email-archive/) | Authoritative CMIP IPO forcing announcements | Page updates | Monthly |
| CORDEX news + simulation status | [cordex.org](https://cordex.org/) + [wcrp-cordex.github.io/simulation-status](https://wcrp-cordex.github.io/simulation-status/) | CORDEX-CMIP6 archive specs, Africa simulations | Page updates; status auto-generated | Monthly |
| ISIMIP outcomes/events | [isimip.org](https://www.isimip.org/) | ISIMIP3 updates, ISIMIP4 planning | Page updates + mailing list | Monthly |
| NASA NCCS NEX-GDDP | [nccs.nasa.gov/services/data-collections/land-based-products/nex-gddp-cmip6](https://www.nccs.nasa.gov/services/data-collections/land-based-products/nex-gddp-cmip6) | NEX-GDDP versions / CMIP7 successor | Page updates (no RSS) | Monthly |
| CHELSA Climate | [chelsa-climate.org](https://chelsa-climate.org/) | CHELSA V3 / CMIP7 announcements | Page updates | Monthly |
| Copernicus C3S Atlas | [atlas.climate.copernicus.eu](https://atlas.climate.copernicus.eu/) | C3S Atlas dataset additions | Page updates; C3S newsletter | Monthly |
| WCRP News (parent) | [wcrp-climate.org/news](https://www.wcrp-climate.org/news/) | Cross-WCRP including CORDEX, GEWEX | RSS available | Monthly |
| IPCC Future Work | [ipcc.ch/about/future-work](https://www.ipcc.ch/about/future-work/) | AR7 schedule, Interactive Atlas | Page updates after each plenary | Quarterly |
| IIASA ScenarioMIP Explorer | [scenariomip.apps.ece.iiasa.ac.at](https://scenariomip.apps.ece.iiasa.ac.at/) | Scenario quantification data + updates | Page updates; early-access window closes 31 Aug 2026 | Monthly until Sep 2026 |

**Suggested operational pattern:**

- **Weekly:** subscribe to GitHub releases for `PCMDI/input4MIPs_CVs` (already a release feed); skim WCRP-CMIP News.
- **Monthly:** review the table above end-to-end; refresh dates in the timeline table in §2.
- **Quarterly:** re-run the deep-research synthesis against this file to catch material shifts (e.g. a new participating-centre confirmation, ISIMIP4 protocol publication, NEX-GDDP-CMIP7 announcement).

**Automation candidate:** a scheduled task (Cowork supports these) could fan-out searches against these feeds weekly and flag deltas. See `scheduled-tasks` in the Cowork tooling.

---

## 10. CMIP7 downscaling ecosystem — products and teams

This section catalogues every credible team that will produce CMIP7-derived downscaled / bias-corrected / impacts-ready products that CGIAR or partner organisations might consume. Compiled June 2026 from a focused follow-up research pass.

### 10.1 NEX-GDDP-CMIP7 — NASA NEX / NCCS Goddard (primary focus)

- **Plan announced?** **Implicit, not formal.** No NASA-NCCS public CMIP7 announcement as of June 2026. The current operational asset is **NEX-GDDP-CMIP6 v2.0** (technical documentation updated through May 2025) ([NCCS NEX-GDDP-CMIP6](https://www.nccs.nasa.gov/services/data-collections/land-based-products/nex-gddp-cmip6); [v2 Tech Note](https://www.nccs.nasa.gov/sites/default/files/NEX-GDDP-CMIP6-v2-Tech_Note.pdf)).
- **Current CMIP6 product:** 35 CMIP6 GCMs (one variant per model), 9 daily variables at 0.25° (~25 km), 1950–2100, four SSPs (1-2.6, 2-4.5, 3-7.0, 5-8.5) ([Thrasher et al. 2022, *Scientific Data*](https://www.nature.com/articles/s41597-022-01393-4)).
- **Method:** Daily variant of BCSD (Bias Correction / Spatial Disaggregation) ([Thrasher et al. 2022](https://www.nature.com/articles/s41597-022-01393-4)).
- **Expected CMIP7 timeline:** None publicly documented. The CMIP6 product appeared ~12 months after CMIP6 raw was on ESGF; by analogy NEX-GDDP-CMIP7 would arrive **late 2026 / 2027**. NEX-GDDP-CMIP6 v2 was still being augmented in December 2025 ([WDCC metadata for NEX_NESM](https://www.wdc-climate.de/ui/entry?acronym=NEX_NESM)), suggesting the team is currently completing CMIP6, not yet on CMIP7.
- **Africa coverage:** Global product on a regular 0.25° grid — Africa fully covered with no domain-specific tuning. **This is the backbone of the AAA Adaptation Atlas.**
- **Direct contact:** Bridget Thrasher (`bridget.thrasher@nasa.gov`) is the documented dataset contact. Recommended path for Pete to learn formal CMIP7 intent + timeline.
- **Watch:** [NCCS NEX-GDDP page](https://www.nccs.nasa.gov/nex-gddp/) + [AWS Open Data registry](https://registry.opendata.aws/nex-gddp-cmip6/) + WDCC catalogue ([wdc-climate.de](https://www.wdc-climate.de/ui/entry?acronym=NEX_ACC-CM2)). No GitHub release feed.

> **Confidence note:** the AGU Fall 2025 program, NCCS site, and NASA NTRS all searched — no NEX-GDDP-CMIP7 announcement surfaced.

### 10.2 CIL-GDPCIR-CMIP7 — Climate Impact Lab

- **Plan announced?** **No formal CMIP7 announcement.** Current product is **GDPCIR-CMIP6** ([Climate Impact Lab](https://impactlab.org/news-insights/introducing-our-new-global-downscaled-projections-for-climate-impacts-research/)).
- **Current CMIP6 product:** 25 CMIP6 GCMs, daily tasmin / tasmax / pr, 0.25°, 1950–2100, four SSPs ([Gergel et al. 2024, *GMD*](https://gmd.copernicus.org/articles/17/191/2024/)).
- **Method:** QDM (Quantile Delta Mapping) bias-correction + QPLAD (Quantile-Preserving Localized-Analog Downscaling) — designed to preserve extremes ([CIL methods page](https://impactlab.org/research/global-downscaled-projections-for-climate-impacts-research-gdpcir-preserving-extremes-for-modeling-future-climate-impacts/)).
- **Africa coverage:** Global on a regular grid.
- **Expected CMIP7 timeline:** No public statement. Active team with dedicated codebase — `ClimateImpactLab/downscaleCMIP6` repo is hardcoded to CMIP6 in its name; a `downscaleCMIP7` repo appearing would be the first signal.
- **Watch:** [impactlab.org/news-insights](https://impactlab.org/news-insights/) + the Microsoft Planetary Computer dataset catalogue.

### 10.3 CHELSA-CMIP7 — Karger et al., WSL / SDSC

- **Plan announced?** **Implicit, with strong signal.** The CMIP7 Impacts & Adaptation Data Request paper explicitly names CHELSA as a downstream developer that helped shape the CMIP7 variable list, and refers to a planned **CHELSA_land_daily** product that "would continue this work with CMIP7 outputs" ([Ruane et al. 2025, *GMD*](https://gmd.copernicus.org/articles/18/9497/2025/)).
- **Current product:** CHELSA V2.1 + `chelsa-cmip6` Python package, ~1 km (30 arc-sec) bioclimatic variables built from CMIP6 deltas ([CHELSA models](https://www.chelsa-climate.org/models/chelsa); [Brun et al. 2023, *Ecography*](https://nsojournals.onlinelibrary.wiley.com/doi/10.1111/ecog.06535)).
- **Method:** Mechanistic statistical downscaling + delta-change anomalies applied to a high-resolution baseline.
- **Africa coverage:** Global at ~1 km — fine enough to resolve African topographic gradients (Ethiopian highlands, East African Rift, Atlas Mountains).
- **Expected CMIP7 timeline:** No public date; gated on CMIP7 raw outputs. **2027 expected.**
- **Watch:** [chelsa-climate.org](https://www.chelsa-climate.org/) + WSL GitLab ([gitlabext.wsl.ch/karger/chelsa_cmip6](https://gitlabext.wsl.ch/karger/chelsa_cmip6)).

### 10.4 ISIMIP4 — PIK Potsdam (Frieler, Schewe, ISIMIP sector network)

- **Plan announced?** **Yes — firmest commitment in the ecosystem.** ISIMIP4 is the planned CMIP7-driven simulation round. PIK held a dedicated OptimESM–ISIMIP workshop (May 2025) scoping ISIMIP4 contributions to AR7 ([PIK news](https://www.pik-potsdam.de/en/news/latest-news/climate-impact-science-for-the-next-ipcc-cycle-optimesm-isimip-workshop); [ISIMIP4 forcing-data slide deck PDF](https://www.isimip.org/documents/868/OptimESM-ISIMIP-May2025-forcing_data_for_ISIMIP4.pdf)).
- **Method:** Trend-preserving bias-adjustment + statistical downscaling of CMIP7 GCMs to 0.5° daily (the ISIMIP3b template), with strong emphasis on direct human forcing (land use, irrigation, fertiliser, population) consistent with the IAM ScenarioMIP runs.
- **Stated timeline:** ISIMIP wants historical CMIP7 outputs "as soon as possible" and scenario data by **May/June 2026** to contribute to AR7 ([CMIP7 forcings page](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/)). ISIMIP4 Fast Track simulations run through 2026–2027.
- **Africa coverage:** Global 0.5° — covers Africa but at coarser resolution than NEX-GDDP / CHELSA.
- **Lead / funding:** PIK; lead Katja Frieler with Jacob Schewe and a network of ~14 ISIMIP sector groups.
- **Watch:** [isimip.org](https://www.isimip.org/), [protocol.isimip.org](https://protocol.isimip.org/), ISIMIP mailing list.

### 10.5 CORDEX-CMIP7 — WCRP-CORDEX (with Africa flagship domain)

- **Plan announced?** **Yes — formally chartered.** A **Task Force on Preparation of CORDEX-CMIP7** (coordinator Jesús Fernández) plus a separate **Task Team on Protocol and Infrastructure** are active ([CORDEX TF page](https://cordex.org/strategic-activities/taskforces/task-force-on-preparation-of-cordex-cmip7/); [TTPI call](https://cordex.org/2025/10/16/join-the-task-team-on-cordex-cmip7-protocol-and-infrastructure/)).
- **Stated timeline:** "CORDEX-CMIP7 protocols and technical documentation should be finalized by the time the first CMIP7 models become available for downscaling, expected in about one year" — written October 2024, pointing to **late 2025 / 2026**. RCM simulations follow protocol agreement and will run through 2026–2028.
- **Method:** Dynamical downscaling via RCMs (REMO, WRF, RegCM, HCLIM, ALADIN, CCAM, ICON), increasingly **convection-permitting** (few-km), plus a growing empirical statistical downscaling / ML emulator track.
- **Africa coverage:** **Region 5 (CORDEX-Africa) is a flagship domain.** CSAG-UCT hosts the CORDEX International Project Office jointly with ESA. Task Force member Amira Nasser covers the RegCM AFR domain.
- **Watch:** [cordex.org](https://cordex.org/) news + mailing list; Region 5 Africa domain page.

### 10.6 WorldClim Future CMIP7 — Fick & Hijmans, UC Davis

- **Plan announced?** **No.** Current product is WorldClim 2.1 future, CMIP6-based: 19 bioclimatic variables, 9 GCMs, 4 SSPs, four future periods, 30 arc-sec to 10 arc-min ([worldclim.org/data/cmip6](https://www.worldclim.org/data/cmip6/cmip6_clim2.5m.html)).
- **Method:** Statistical downscaling via delta method to the WorldClim 2.1 baseline; bioclim variables computed on the downscaled monthly time series.
- **Expected CMIP7 timeline:** Implicit (team has done CMIP3/5/6 cycles). No public roadmap. **2027–2028.**
- **Africa coverage:** Global at 30 arc-sec — high relevance for CGIAR crop-suitability / species-distribution work.
- **Watch:** [worldclim.org](https://www.worldclim.org/) (no RSS; check quarterly).

### 10.7 Africa-specific downscaling teams

| Team | Role | CMIP7 plan |
|---|---|---|
| **CSAG** (UCT Cape Town — Hewitson, Jack, Pinto) | CORDEX IPO host; long-running CMIP6 statistical downscaling for Africa | No standalone product; contributions via CORDEX-Africa-CMIP7 ([CSAG](https://www.csag.uct.ac.za/)) |
| **ICPAC** (IGAD, Nairobi) | Operates CMIP6 Climate Change Information Visualization Portal — 10 CMIP6 models, four SSPs, three time horizons, Greater Horn of Africa ([ICPAC RCC](https://www.icpac.net/rcc/climate-change/)) | No explicit CMIP7 plan; implicit-likely follow-up |
| **AGRHYMET** (West Africa, CILSS, Niamey) | Regional climate services delivery | Consumer, not producer — expect CORDEX-Africa-CMIP7 reuse |
| **ACMAD** (African Centre of Meteorological Applications for Development) | Seasonal-to-decadal services for African NMHSs | Consumer, not producer |
| **ACPC / AMCEN** | Policy / advisory bodies | Consumers of downstream products |

**Bottom line for African regional centres:** all are positioned as **consumers** of external CMIP7 downscaled products, not producers. No primary African-led CMIP7 downscaling effort surfaced in this research.

### 10.8 Other notable initiatives

- **NOAA / NCEI** publishes LOCA2 and STAR-ESDM for CONUS (CMIP6); not Africa-relevant for CMIP7.
- **Berkeley Earth** focuses on observational reanalysis; no downscaled CMIP-product line.
- **MPI-M (Hamburg)** runs REMO regional model — will contribute via CORDEX-CMIP7.
- **University one-off products** (e.g. Ethiopia BCCAQ [Diro et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10338452/); Senegal high-res 0.0375° [*Sci. Data* 2026](https://www.nature.com/articles/s41597-026-07059-9)) — currently CMIP6; CMIP7 follow-ons depend on individual PIs.

### 10.9 Ecosystem summary table

| Product | Plan announced | Expected release | Method | Models (CMIP6 ref) | Africa coverage | Watch URL |
|---|---|---|---|---|---|---|
| **NEX-GDDP-CMIP7** | Implicit | Late 2026 – 2027 (est.) | Daily BCSD | 35 (v2) | Global 0.25° | [nccs.nasa.gov/nex-gddp](https://www.nccs.nasa.gov/nex-gddp/) |
| **CIL-GDPCIR-CMIP7** | Implicit | 2027 (est.) | QDM + QPLAD | 25 | Global 0.25° | [impactlab.org](https://impactlab.org/news-insights/) |
| **CHELSA-CMIP7** | Implicit (named in I&A request) | 2027 | Delta + mechanistic | n/a | Global ~1 km | [chelsa-climate.org](https://www.chelsa-climate.org/) |
| **ISIMIP4** | **Yes** | Forcings May/Jun 2026; impacts runs 2026–27 | Trend-preserving bias-adjust | ~5–10 (Fast Track subset) | Global 0.5° | [isimip.org](https://www.isimip.org/) |
| **CORDEX-CMIP7** | **Yes (TF + TT)** | Protocol late 2025/2026; sims 2026–28 | Dynamical (RCM) + ESD | Subset per RCM | Region 5 Africa flagship | [cordex.org](https://cordex.org/) |
| **WorldClim CMIP7** | No | 2027–28 (est.) | Delta + WorldClim baseline | ~9 (CMIP6 ref) | Global 30 arc-sec | [worldclim.org](https://www.worldclim.org/) |
| **CSAG (via CORDEX-Africa)** | Via CORDEX | 2026–28 | Mixed | Subset | Africa-specific | [csag.uct.ac.za](https://www.csag.uct.ac.za/) |
| **ICPAC portal** | No explicit CMIP7 plan | TBD | Visualisation of multi-model ensemble | 10 (CMIP6 today) | Greater Horn of Africa | [icpac.net/rcc](https://www.icpac.net/rcc/climate-change/) |

### 10.10 Cross-product comparability

CMIP7-downscaled products will share the same raw CMIP7 GCM forcings but **differ on three axes**:

1. **Model subset.** NEX-GDDP downscaled 35 CMIP6 GCMs; CIL-GDPCIR did 25; ISIMIP3b used ~5; WorldClim used 9. The intersection across products is small. Comparing "ensemble means" across products is **not apples-to-apples** because each product chose a different ensemble.
2. **Method.** BCSD (NEX), QDM+QPLAD (CIL), delta (WorldClim, CHELSA), trend-preserving (ISIMIP), RCM (CORDEX) — these produce **systematically different extremes** for the same GCM + scenario ([Lange & Büchner 2017](https://www.isimip.org/gettingstarted/details/13/); [Iturbide et al. 2022](https://link.springer.com/article/10.1007/s10584-023-03623-z)).
3. **Baseline observational target.** Each product anchors to a different reference (GMFD, ERA5-Land, CHELSA V2.1, EWEMBI, CRU). This introduces a baseline-shift artefact when cross-comparing products even for the same GCM.

**Practical implication for CGIAR:** pick **one product per use case** and document the choice; do not mix bioclim variables from CHELSA with daily indices from NEX-GDDP in the same headline figure without explicit cross-validation.

### 10.11 Practical sequencing for CGIAR

1. **2026 H2 — don't migrate yet.** CMIP7 raw simulations are only beginning to land on ESGF. No downscaled product available. Stay on CMIP6 (NEX-GDDP-CMIP6 v2) for AAA Atlas / Climate Rationale notebook production.
2. **2026 Q4 / 2027 Q1 — watch ISIMIP4 first.** ISIMIP4 has the firmest timeline (forcings May/Jun 2026, AR7 alignment) and the strongest sector-specific outputs (agriculture, water) most relevant to CGIAR. Even if 0.5° is coarser than NEX-GDDP, **the impact-variable readiness is the differentiator.**
3. **2027 — add NEX-GDDP-CMIP7 when it ships.** Continuity with the existing AAA pipeline is the strongest argument; method (BCSD), grid (0.25°), and access pattern (AWS S3) should all be preserved.
4. **2027–2028 — add CHELSA-CMIP7 for bioclimatic / crop-suitability use cases.** 1 km resolution is the right scale for sub-national targeting.
5. **2028+ — layer in CORDEX-Africa-CMIP7** where dynamical fidelity matters (convection-permitting precipitation extremes, monsoon dynamics). Slower release but irreplaceable for process realism.
6. **Operational rule:** mirror the CMIP6 ensemble strategy — pick the 1–2 products that match the use case, not all of them.

### 10.12 Strategic question for CGIAR leadership

**No CGIAR-led CMIP7 downscaling pipeline was identified in this research.** African regional centres (ICPAC, AGRHYMET, ACMAD) are positioned as consumers, not producers. The AAA Adaptation Atlas is positioned to *consume* NEX-GDDP-CMIP7 when it ships.

This is opportunity space. Two questions worth raising at CGIAR Climate Action leadership level:

1. **Is the Climate Data Hub positioned only to consume external CMIP7 products, or to claim space as a producer for African-region adaptation work?** A CGIAR-led African-tuned CMIP7 product (statistical downscaling + bias-correction to CHIRTS/CHIRPS for the African continent) would be the first of its kind, sit alongside NEX-GDDP-CMIP7 globally, and remove a dependency on a US-government-funded product timeline.
2. **If so, what's the CGIAR pipeline play?** Build internally (Atlas + CIAT data team), via partnership (CSAG, ICPAC), or via the Climate Data Hub's growing methodology infrastructure (this wiki + the Build a Climate Rationale notebook)?

Worth a separate strategy conversation. Surface for CGIAR Climate Action programme leadership before AR7 cycle planning crystallises.

---

## 11. Funding risk to CMIP7 downstream products (US science cuts)

The Trump administration (returned to office January 2025) proposed catastrophic cuts to every US federal contributor to CMIP7. Congress decisively rejected most of these in the final FY2026 appropriations bill signed 23 January 2026 — but real damage occurred during the year-long gap, and FY2027 risk remains elevated. This section captures the picture as of June 2026.

### 11.1 Headline assessment

- **Confirmed funding cuts:** moderate. Congress restored NASA Earth Science to $2.15B and protected NOAA OAR for FY2026 ([AIP](https://www.aip.org/fyi/congress-set-to-finalize-science-budgets-rejecting-trump-cuts)).
- **Staffing damage:** high. ~10 GFDL staff fired Feb 2025 ([Science/AAAS](https://www.science.org/content/article/noaa-firings-hit-birthplace-weather-and-climate-forecasting)); GISS lab evicted from Columbia May 2025 ([Scientific American](https://www.scientificamerican.com/article/nasas-goddard-institute-for-space-studies-faces-eviction-under-trump-plan/)). Staff continuity at both institutions is fragile.
- **Infrastructure disruption:** high. LLNL ESGF node legacy SOLR index decommissioned 29 July 2025; ESGF-NG (Globus-based, multi-node) launched May 2026 ([WCRP-CMIP](https://wcrp-cmip.org/esgf-information/)). US ESGF endpoints are no longer the unambiguous default for international research.
- **FY2027 risk:** elevated. White House FY2027 PBR appears Spring 2026; Congress votes through Sept 2026. **Re-check this section quarterly.**

### 11.2 What's been cut — chronological

| Date | Agency / Program | Action | Amount | Source |
|---|---|---|---|---|
| Feb 27 2025 | NOAA / GFDL | ~10 federal staff fired in mass layoffs; ~hundreds across NOAA | n/a | [Science/AAAS](https://www.science.org/content/article/noaa-firings-hit-birthplace-weather-and-climate-forecasting) |
| Apr 2025 | DOC / Princeton CIMES | $4M in grants suspended (later partially reversed) | $4M | [Daily Princetonian](https://www.dailyprincetonian.com/article/2025/04/princeton-news-adpol-research-funding-climate-change-trump) |
| May 2025 | NASA GISS | Columbia lease ($3.03M/yr) terminated; staff to remote work | $3M/yr | [Scientific American](https://www.scientificamerican.com/article/nasas-goddard-institute-for-space-studies-faces-eviction-under-trump-plan/) |
| May 2025 | White House FY2026 PBR | Proposed 47–53% cut to NASA Science; zero for NOAA climate research; $1.15B cut to DOE Office of Science; 57% cut to NSF | ~$1.16B (NASA ES); $1.7B (NOAA); $1.15B (DOE SC) | [Sabin Center](https://climate.law.columbia.edu/content/white-houses-proposed-fy2026-budget-cuts-nasa-funding); [Eos](https://eos.org/research-and-developments/proposed-noaa-budget-calls-for-0-for-climate-research) |
| Jul 29 2025 | DOE / LLNL ESGF node | Legacy SOLR index shut down; transition to Globus/ESGF-NG | n/a | [WCRP-CMIP](https://wcrp-cmip.org/esgf-information/) |
| Aug 2025 | NSF / NCAR-Wyoming Supercomputing Center | Federal judge **blocked** transfer to U. Wyoming; NCAR retains control | n/a | [UCAR](https://news.ucar.edu/133071/ucar-statement-order-granting-preliminary-injunction) |
| Jan 23 2026 | Congress (final FY2026) | **Rejected** most proposed cuts; NASA $24.44B, NOAA $6.17B (incl. $224M climate research), NSF $8.75B | restored | [AIP](https://www.aip.org/fyi/congress-set-to-finalize-science-budgets-rejecting-trump-cuts); [SpacePolicyOnline](https://spacepolicyonline.com/news/final-fy2026-nasa-noaa-appropriations-bill-clears-senate-white-house-is-next/) |

### 11.3 Per-product funding risk

| Product / Team | Status (June 2026) | Funder | Implication for the Atlas |
|---|---|---|---|
| **NASA GISS ModelE → CMIP7** | **Restructured / at risk.** Lab evicted from Columbia; staff remote; CMIP7 submission status unclear | NASA ESD | Don't count on GISS ModelE for CMIP7 Fast Track |
| **NEX-GDDP-CMIP7 (NCCS)** | **Status uncertain.** NEX-GDDP-CMIP6 remains operational on AWS Open Data; no CMIP7 release announcement | NASA ESD | **Treat CMIP6 NEX-GDDP as the last reliable NASA downscaling vintage** — don't commit to NEX-GDDP-CMIP7 in roadmaps |
| **GISTEMP (surface temperature)** | **Operational but fragile.** Still publishing; depends on GISS staff continuity | NASA ESD | Have HadCRUT5 / Berkeley Earth fallback ready; cite GISTEMP as supporting, not load-bearing |
| **NOAA GFDL ESM4 → CMIP7** | **Operational, contested.** Closure proposed; rejected by Congress for FY2026. CIMES Princeton partnership renewed Sept 2024 for 5 yrs / $85M. 10 staff lost | NOAA OAR | GFDL CMIP7 submission likely but possibly degraded / delayed ([ProPublica](https://www.propublica.org/article/trump-noaa-budget-cuts-climate-change-modeling-princeton-gfdl); [Princeton](https://research.princeton.edu/news/climate-modeling-institute-renewed-five-more-years)) |
| **DOE E3SM v3 → CMIP7 DECK** | **Operational.** DOE Office of Science cuts rejected by Congress; E3SM not specifically targeted | DOE SC / BER | Lower risk than NOAA / NASA products |
| **NSF NCAR CESM3 → CMIP7 Fast Track** | **On track.** Public release targeted spring 2026 (slightly slipped); NCAR-Wyoming supercomputer preserved by court order | NSF | **CESM3 is the most reliable US CMIP7 contribution** |
| **NOAA NCEI LOCA2 / STAR-ESDM** | **Operational, US-focused.** OAR partially preserved | NOAA OAR | Of limited relevance to Africa-focused Atlas work |
| **Climate Impact Lab GDPCIR** | **Operational.** Foundation + university funded; low direct federal exposure | Private / foundation | **Safer downscaling option** for any successor to NEX-GDDP |
| **ESGF US nodes (LLNL/ORNL)** | **Decommissioned (SOLR) / transitioning to Globus ESGF-NG.** | DOE | **Plan for European mirrors (DKRZ, IPSL, CEDA) as primary access route** |

### 11.4 Non-US alternatives — what remains reliably funded

- **UK Met Office UKESM2 + HadGEM3-GC5**: targeted release mid-2026 ([UKESM](https://ukesm.ac.uk/science/using-model-outputs-cmip/)); UKRI / Met Office funding intact.
- **MPI-M ICON-ESM, IPSL-CM, CNRM-CM, EC-Earth4**: all funded through national agencies and EU Horizon Europe (ESM2025 project).
- **JAMSTEC / MIROC, MRI** (Japan): confirmed CMIP7 contributors ([van Vuuren et al. 2026](https://gmd.copernicus.org/articles/19/2627/2026/)).
- **CCCma (Canada), CSIRO (Australia)**: contributing nationally-funded ESMs.
- **Copernicus C3S CDS** (EU-funded, ECMWF-implemented): **redundantly hosted, treaty-protected CMIP6/CMIP7 access. The safest primary data home for an international research consortium.** ([C3S](https://climate.copernicus.eu/))
- **European ESGF nodes** (DKRZ, IPSL, CEDA) continue operating the legacy SOLR index alongside Globus ([WCRP-CMIP](https://wcrp-cmip.org/esgf-information/)).

### 11.5 Recommendations for CGIAR / Adaptation Atlas

1. **Treat Copernicus C3S CDS as primary data infrastructure, ESGF-LLNL as secondary.** Migrate ingest pipelines away from US ESGF endpoints before any near-term Atlas data refresh. C3S is the only redundantly-funded, treaty-protected EU climate data infrastructure.
2. **Don't commit to NEX-GDDP-CMIP7 in roadmaps.** No public release timeline; assume CMIP6 NEX-GDDP is the **terminal NASA downscaling product** for at least 18 months. Evaluate **GDPCIR (Climate Impact Lab)** and **CHELSA-CMIP7** (Swiss WSL) as primary downscaled inputs instead.
3. **Build the African ensemble around non-US-led models first:** UKESM2, EC-Earth4, MPI-ICON, IPSL, CNRM, MIROC, ACCESS, CanESM. **Add GFDL and CESM3 when delivered, but the ensemble must be operational without them.**
4. **Anticipate GISTEMP fragility.** For observational baselines, lead with **HadCRUT5** (Met Office / UEA) or **Berkeley Earth**; cite GISTEMP as supporting, not load-bearing.
5. **Monitor the FY2027 budget cycle (May–September 2026).** Congressional rejection is not permanent; staffing damage at GFDL / GISS persists regardless of appropriations. Maintain quarterly funding-risk reviews of this section.
6. **Caveat published guidance.** Climate Rationale notebook references to US-funded products should carry a footnote on funding-continuity risk for partners writing multi-year GCF / Adaptation Fund proposals.

### 11.6 The strategic shift this implies

The original framing of §10.12 said the lack of a CGIAR-led CMIP7 downscaling pipeline was **opportunity space**. With this funding context, that reframes to **necessity:**

> *The combination of (a) no CMIP7-derived African downscaled product available from any team, (b) NEX-GDDP-CMIP7 — the AAA Atlas's existing dependency — at uncertain funding status, and (c) no public CGIAR-led downscaling effort, means CGIAR Climate Action faces a real operational risk for its post-2027 climate-rationale tools. The Climate Data Hub claiming production-space for African-region CMIP7 downscaling is no longer just an opportunity to lead — it is also a hedge against the AAA Atlas's largest single point of dependency-failure.*

Worth surfacing to CGIAR Climate Action programme leadership before AR7 cycle planning crystallises.

---

## What we still don't know

- **Exact AFT experiment count and full list.** Need to read Dunne et al. 2025 Table 3 directly.
- **Tier 2 ScenarioMIP-CMIP7 scenario assignments.** Need to read van Vuuren et al. 2026 Table 1 directly.
- **Fate of VL sub-variants (VLLO, VLHO).** Appeared in earlier drafts; status in the published paper unclear.
- **CMIP7 participation status of:** KACE-1-0-G (NIMS-KMA), TaiESM, MRI-ESM, BCC, FGOALS, NESM, CAMS. Searches found no public announcements but absence of evidence ≠ evidence of absence.
- **First-data ETA on ESGF for the median modelling centre.** Public statements give "second half of 2026" with caveats; actual centre-by-centre publication times will diverge.
- **CMIP7-CMIP6 SSP-to-scenario crosswalk table.** No published crosswalk; only qualitative correspondences. Likely to appear in supplementary materials of forthcoming peer-reviewed papers.
- **AR7 WGI timeline post-LAM3.** IPCC-63 did not reach consensus; second-order draft and approval session dates are TBD.

---

## Citation backbone for the wiki page

Priority sources for a v0.2-draft of `src/content/docs/aaa-atlas/future-projections.md` — keep this list short, every entry must be a primary or authoritative-secondary source:

1. **Dunne, J. P. et al. (2025).** "CMIP7 Assessment Fast Track — overview." *Geoscientific Model Development* 18, 6671–6700. [10.5194/gmd-18-6671-2025](https://gmd.copernicus.org/articles/18/6671/2025/) — *the canonical CMIP7 framework paper.*
2. **van Vuuren, D. P. et al. (2026).** "Scenarios for climate research in the CMIP7 era." *Geoscientific Model Development* 19, 2627–2656. [10.5194/gmd-19-2627-2026](https://gmd.copernicus.org/articles/19/2627/2026/) — *the canonical ScenarioMIP-CMIP7 design paper.*
3. **WCRP-CMIP (2026).** "Explainer: Scenarios for CMIP7." [wcrp-cmip.org/explainer-scenarios-for-cmip7](https://wcrp-cmip.org/explainer-scenarios-for-cmip7/) — *non-specialist orientation to the new scenarios.*
4. **WCRP-CMIP (live).** "CMIP7 phase page." [wcrp-cmip.org/cmip-phases/cmip7](https://wcrp-cmip.org/cmip-phases/cmip7/) — *canonical landing for CMIP7 structure + FastTrack.*
5. **WCRP-CMIP (live).** "CMIP7 Forcing Datasets." [wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets](https://wcrp-cmip.org/cmip-phases/cmip7/cmip7-forcing-datasets/) — *forcings, licensing, notification channels.*
6. **input4MIPs CVs (live).** "CMIP7 dataset overviews." [input4mips-cvs.readthedocs.io](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/) — *detailed per-dataset specifications.*
7. **WCRP-CMIP (2026).** "Rapid Evaluation Framework." [wcrp-cmip.org/cmip7/rapid-evaluation-framework](https://wcrp-cmip.org/cmip7/rapid-evaluation-framework/) — *REF infrastructure overview.*
8. **WCRP-CMIP (2025).** "Launch of the Rapid Evaluation Framework v1," 24 October 2025. [wcrp-cmip.org/launch-of-the-rapid-evaluation-framework-v1](https://wcrp-cmip.org/launch-of-the-rapid-evaluation-framework-v1/) — *REF v1 launch context.*
9. **eScience Center (2026).** "Scientists launch open-access framework to rapidly evaluate next-generation climate models ahead of IPCC AR7," 13 April 2026. [esciencecenter.nl/news/...](https://www.esciencecenter.nl/news/scientists-launch-open-access-framework-to-rapidly-evaluate-next-generation-climate-models-ahead-of-ipcc-ar7/) — *MBTT co-lead quotes; CMIP7-ready REF.*
10. **Carbon Brief (2026).** "Guest post: How CMIP7 will shape the next wave of climate science," 22 May 2026. [carbonbrief.org/...](https://www.carbonbrief.org/guest-post-how-cmip7-will-shape-the-next-wave-of-climate-science/) — *non-specialist explainer with CMIP IPO-sourced timeline.*
11. **WCRP-CMIP (2026).** "ESGF information." [wcrp-cmip.org/esgf-information](https://wcrp-cmip.org/esgf-information/) — *ESGF-NG migration + CMIP6/CMIP7 transition.*
12. **IPCC (2025).** "AR7 Workplan Document 10," IPCC-63 (Lima, October 2025). [apps.ipcc.ch/.../Doc.10](https://apps.ipcc.ch/eventmanager/documents/93/221020250633-Doc.10%20-%20Workplan%20of%20the%20IPCC%20AR7.pdf) — *official AR7 timeline.*
13. **Karger, D. N. et al. (2023).** CHELSA-CMIP6 documentation. [chelsa-climate.org/cmip6](https://chelsa-climate.org/cmip6/) — *current downscaled product; CMIP7 successor TBD.*
14. **NCCS (2025).** NEX-GDDP-CMIP6 v2.0 page. [nccs.nasa.gov/services/data-collections/land-based-products/nex-gddp-cmip6](https://www.nccs.nasa.gov/services/data-collections/land-based-products/nex-gddp-cmip6) — *current Atlas-baseline product.*
15. **CORDEX (2026).** Archiving specifications v3 for CORDEX-CMIP6, May 2026. [cordex.org](https://cordex.org/) — *CORDEX-CMIP6 publication-readiness for Africa.*

---

## Provenance

- **Compiled:** June 2026 via `deep-research` skill (5 fan-out search agents).
- **Synthesis:** consolidated 5 agent outputs into this single anchors file.
- **Owner:** Pete Steward (`p.steward@cgiar.org`).
- **Refresh trigger:** anytime monitoring sources surface a material change to the timeline, scenario design, forcing datasets, or African downscaling roadmap. Aim for quarterly re-runs of the deep-research pass at minimum.
