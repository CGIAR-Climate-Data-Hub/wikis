---
title: "What's next — CMIP7 and CORDEX-Africa"
description: "Where CMIP7 is in mid-2026, what's actually changing from CMIP6, when CMIP7-derived African projections will be usable, and what CGIAR partners should do in the meantime."
area: CGIAR Climate Data Hub
version: "0.2-draft"
estimatedReadingMinutes: 12
sidebar:
  order: 14
  label: "What's next"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

:::tip[If you remember one thing]
CMIP6 stays the operational backbone for African climate-rationale work through at least 2027. The new CMIP7 scenarios are **a re-design, not a re-label** — there's no clean SSP-to-CMIP7 crosswalk, and downscaled African products won't be reliably available until 2027–2028. If you're writing a proposal in 2026, frame on CMIP6 and add a "CMIP7 readiness clause" for the AR7 cycle.
:::

## What this page covers

The next generation of coordinated climate-model experiments is **CMIP7** — the Coupled Model Intercomparison Project Phase 7 — which will feed IPCC AR7. CMIP6 is being slowly superseded, but slowly is the operative word: the forcings are finalised, model runs are underway, and the first outputs are landing on ESGF-NG (the next-generation Earth System Grid Federation, launched May 2026), but **no CMIP7-derived downscaled product for African adaptation work exists yet**.

By the end of this page you'll know:

- What's actually changing from CMIP6 — the design, the experiments, the scenarios
- Where CMIP7 is in June 2026, and the timeline you should plan against
- When CMIP7-derived African projections will be usable in practice
- What proposal authors and CGIAR partners should do in the meantime

For the operational guidance ("which dataset, which baseline, which scenario *today*"), see [Recommendations for CGIAR](/cdh-wikis/aaa-atlas/cgiar-recommendations/). For the existing CMIP6 methodology this transition will replace, see [African CMIP6 Ensembling](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/).

## What's actually changing from CMIP6

CMIP7 isn't a renaming of CMIP6 — it's a structural redesign. Three things are materially different ([Dunne et al. 2025, GMD](https://gmd.copernicus.org/articles/18/6671/2025/); [WCRP CMIP7 page](https://wcrp-cmip.org/cmip-phases/cmip7/)):

1. **The Assessment Fast Track (AFT).** CMIP6 grew to ~22 endorsed Model Intercomparison Projects, each with their own experiment requests. The result was a sprawling catalogue and unsustainable compute and human cost at modelling centres. CMIP7 explicitly *does not* endorse MIPs; instead the CMIP Panel curates a compact "AFT" — an expanded DECK plus a small selection from community MIPs — designed to feed IPCC AR7 directly.
2. **Continuous CMIP, not phased.** The CMIP organisation is repositioning CMIP as a *continuous activity* punctuated by periodic "Fast Tracks" rather than a single big-bang phase every 7–8 years. The AFT is the first such Fast Track.
3. **Expanded DECK and tighter sensitivity diagnostics.** New experiments include `esm-hist` (ESM-only historical), several `piClim` configurations, and an extended 300-year `abrupt-4xCO2` protocol for sharper equilibrium-climate-sensitivity estimates.

The design responds directly to feedback after CMIP6 about the unsustainable scale and complexity. The headline implication for partners: **fewer experiments, more standardisation, faster turnaround into IPCC assessment.**

## The new scenarios — H/M/L instead of SSPs

The most visible change is the **scenarios**. CMIP6 used the SSP-RCP framework: scenario names had the form `SSPx-y.z` where the *y.z* was the target radiative forcing at 2100 in watts per square metre (e.g. SSP2-4.5 = "middle of the road, ~4.5 W/m² by 2100"). CMIP7 drops the W/m² suffix entirely. The new design uses seven scenarios labelled by *emissions character* ([van Vuuren et al. 2026, GMD](https://gmd.copernicus.org/articles/19/2627/2026/); [WCRP Explainer](https://wcrp-cmip.org/explainer-scenarios-for-cmip7/)):

| Code | Name | Character |
|---|---|---|
| **H** | High | Plausibly possible given a rollback of current climate policies. ~3.5 °C global warming by 2100. **0.9 °C cooler than CMIP6 SSP5-8.5** — the fossil-fuel-maximalist counterfactual is effectively retired. |
| **HL** | High-to-Low | Overshoot pathway — high near-term, sharp mitigation later |
| **M** | Medium | **Anchored to currently-implemented policy (frozen at 2025)** — not to a forcing target. A methodological shift. |
| **ML** | Medium-to-Low | Overshoot, less aggressive than HL |
| **L** | Low | Roughly fills the SSP1-2.6 niche |
| **LN** | Low-to-Negative | Significant deliberate carbon-dioxide removal (CDR-heavy) |
| **VL** | Very Low | **Overshoots 1.5 °C by 0.2–0.3 °C** before returning to 1.5 °C by 2100 |

Three things in this design matter for partners:

- **No clean SSP-to-CMIP7 crosswalk exists.** Indicative correspondences from the literature: VL ≈ SSP1-1.9, L ≈ SSP1-2.6 niche, M ≈ SSP2-4.5 outcomes (but built differently), H is *well below* SSP5-8.5. Don't relabel — when you migrate to CMIP7 you migrate the science, not just the name.
- **The high end is reframed.** CMIP7-H is "plausibly possible given policy rollback," not a fossil-fuel-maximalist counterfactual. This is an explicit response to the [SSP5-8.5 implausibility critique](https://www.nature.com/articles/d41586-020-00177-3) that gathered momentum through the late CMIP6 era.
- **Overshoot and net-negative pathways are first-class citizens.** HL, ML, LN — mitigation is framed as including deliberate carbon removal, not just emissions reductions.

## Where CMIP7 is right now (June 2026)

| Status | Component |
|---|---|
| ✅ **Done** | CMIP7 forcings finalised (12 DECK categories + ScenarioMIP), distributed via [input4MIPs](https://input4mips-cvs.readthedocs.io/en/latest/dataset-overviews/) under CC-BY-4.0 / CC0 licensing |
| ✅ **Done** | ESGF-NG (next-generation Earth System Grid Federation) live, launched May 2026 |
| ✅ **Done** | REF (Rapid Evaluation Framework) CMIP7-ready since [CMIP 2026 Community Workshop](https://www.esciencecenter.nl/news/scientists-launch-open-access-framework-to-rapidly-evaluate-next-generation-climate-models-ahead-of-ipcc-ar7/) in Kyoto, March 2026 |
| 🟡 **Partial** | First AFT model output trickling onto ESGF-NG (ACCESS-ESM1.6 confirmed submitting); bulk publication targeted for second half of 2026 |
| ⏳ **Pending** | AR7 WGI First Order Draft expert review, August–October 2026 |
| ⏳ **Pending** | First CMIP7-derived downscaled / bias-corrected products for adaptation work |
| ⏳ **Pending** | African regional-evaluation literature on CMIP7 models — the basis for AR-style regional sub-ensembles |
| ❓ **Undecided** | AR7 WGI Summary for Policymakers approval timeline (IPCC-63 did not reach consensus) |

The forcings are stable and citable; the raw model output is in the early-publication phase where centres may retract and republish. **Don't ingest raw CMIP7 model output into operational pipelines yet** — wait for the centres' v1.0 publications and the [ESGF errata service](https://errata.es-doc.org/) to stabilise.

## The timeline you should plan against

| When | What | What this means for you |
|---|---|---|
| **Now → end-2026** | CMIP7 raw model output trickling onto ESGF-NG; AR7 WGI FOD review | Stay on CMIP6 in production. No migration. |
| **2027 Q1–Q2** | First CMIP7-derived downscaled / bias-corrected products begin to appear; ISIMIP4 forcings publish first | Pilot ingest of ISIMIP4 if your work is impact-sector (crops, water, health) |
| **2027 H2 / 2028** | Broader downscaled product availability; first peer-reviewed regional-evaluation papers for CMIP7 over African sub-regions | Start adopting CMIP7-derived products for new analyses; CMIP6 still acceptable for proposals where partner cited it |
| **2028+** | CMIP7 viable for CGIAR partner-facing production work | Migrate the AAA Adaptation Atlas's Future Projections layer to CMIP7-derived inputs once the regional-evaluation basis exists |
| **TBD (post-2027)** | AR7 WGI SPM approval, AR7 publication | Cite AR7 directly once published; the wiki will be revised |

The takeaway: **CMIP6 stays the operational backbone for 2026 and 2027**, with a transition window through 2028. Proposal authors writing in 2026 should cite CMIP6 confidently; those writing in late 2027 onwards will increasingly cite CMIP7.

## What CMIP7-derived African data looks like — the downscaling pathway

Raw CMIP7 model output is at ~100 km resolution — too coarse to use directly for sub-national African adaptation work. The pathway from raw CMIP7 to data a CGIAR proposal can cite runs through several downscaling and bias-correction products, each on its own timeline:

- **[NASA NEX-GDDP-CMIP7](https://www.nccs.nasa.gov/nex-gddp/)** — the global statistical-downscaling product that has anchored the AAA Adaptation Atlas's CMIP6 ensemble. No public release timeline for the CMIP7 version as of mid-2026; expect 2027 by analogy with the CMIP6 cycle.
- **[CIL-GDPCIR-CMIP7](https://impactlab.org/news-insights/introducing-our-new-global-downscaled-projections-for-climate-impacts-research/)** — Climate Impact Lab's downscaled product. Implicit follow-up; no public timeline.
- **[CHELSA-CMIP7](https://www.chelsa-climate.org/)** — Swiss WSL's high-resolution (~1 km) statistical downscaling. Named explicitly in the [CMIP7 Impacts & Adaptation Data Request](https://gmd.copernicus.org/articles/18/9497/2025/); expected 2027.
- **[ISIMIP4](https://www.isimip.org/)** — the impact-sector default. Forcings published May–June 2026; sector-model runs through 2026–2027. **Firmest timeline; most likely first to ship.** Especially relevant for agriculture, water, health work.
- **[CORDEX-CMIP7](https://cordex.org/strategic-activities/taskforces/task-force-on-preparation-of-cordex-cmip7/)** — dynamical downscaling at ~22 km via regional climate models. Africa is a flagship CORDEX domain. Formally chartered task force; protocol finalisation late 2025 / 2026; simulations through 2026–2028. Slower but irreplaceable for extremes and monsoon dynamics.
- **WorldClim Future CMIP7** — bioclimatic variables at 30 arc-sec. No public roadmap; expect 2027–2028.

:::caution[Cross-product comparability is poor]
Each downscaling team uses a different model subset (NEX-GDDP downscaled 35 CMIP6 GCMs; CIL-GDPCIR did 25; ISIMIP3b used ~5), a different bias-correction method (BCSD, QDM, delta, trend-preserving, RCM), and a different observational baseline. **Comparing "ensemble means" across NEX-GDDP-CMIP7 vs CHELSA-CMIP7 vs ISIMIP4 is not apples-to-apples.** Pick one product per use case and document the choice.
:::

**For Africa specifically**, regional centres (ICPAC, AGRHYMET, ACMAD, CSAG) are positioned as **consumers** of these external products — none has announced a CMIP7-tuned African downscaled product of its own as of mid-2026.

## The East African Paradox in CMIP7

The persistent CMIP-era disagreement between observed long-rains drying and modelled wetting over the Greater Horn of Africa ([East African Paradox](/cdh-wikis/aaa-atlas/east-african-paradox/)) is on the CMIP7 community's radar. The leading hypothesis is that the paradox is rooted in Pacific sea-surface-temperature biases that propagate through the Walker circulation to East African rainfall, and CMIP7 development has prioritised improving those biases ([Park et al. 2023](https://doi.org/10.1007/s00382-022-06622-5); [Schwarzwald et al. 2024](https://journals.ametsoc.org/view/journals/clim/37/24/JCLI-D-24-0225.1.xml)).

**Whether CMIP7 actually resolves it remains an open question** — the first round of CMIP7-vs-observations evaluation papers for the Greater Horn won't appear until 2027+. Until then, the existing paradox caveat continues to apply, and proposal authors working on East African long rains should frame adaptation logic around observed drying, not modelled wetting.

## CORDEX-Africa CMIP7

[CORDEX](https://cordex.org/) is the WMO-WCRP initiative producing **dynamically-downscaled** regional climate model simulations. Africa is one of its flagship domains (Region 5), with the CORDEX International Project Office hosted jointly by [CSAG at the University of Cape Town](https://www.csag.uct.ac.za/) and the European Space Agency.

CORDEX-CMIP7 is formally chartered — a [Task Force on Preparation of CORDEX-CMIP7](https://cordex.org/strategic-activities/taskforces/task-force-on-preparation-of-cordex-cmip7/) (coordinator Jesús Fernández) plus a separate Task Team on Protocol and Infrastructure. Protocols are being finalised through late 2025 / 2026; simulations will run through 2026–2028.

For African adaptation work, CORDEX-CMIP7 is the slower path but the right path for use cases where dynamical fidelity matters — convection-permitting precipitation extremes, monsoon dynamics, mountain orographic effects. CORDEX-CMIP6 outputs over Africa are still being archived (specs v3 released May 2026); the CMIP7 generation will follow.

## What to do in the meantime

For proposal authors and CGIAR partners writing in 2026 and 2027:

- **Frame on CMIP6.** It remains the citable, defensible, downscaled-and-evaluated corpus. NEX-GDDP-CMIP6 v2.0, CHELSA-CMIP6, ISIMIP3b all stay in service.
- **Add a "CMIP7 readiness clause" to multi-year proposals.** Note that the team will adopt CMIP7-derived ISIMIP / NEX-GDDP / CHELSA products as they publish, with re-baselining planned for the AR7 cycle (2028+).
- **For Recent Changes views: continue the 1991–2020 WMO baseline.** See [Baselines and reference periods](/cdh-wikis/aaa-atlas/baselines/). CMIP7 doesn't change observational baselines.
- **For Future Projections views: continue the 1995–2014 CMIP6 reference period.** CMIP7 will likely use a similar but not identical baseline once products land; the [baselines page](/cdh-wikis/aaa-atlas/baselines/) will be updated when that's confirmed.
- **Watch [ISIMIP4](https://www.isimip.org/) first.** It has the firmest timeline and the strongest sector specificity (crops, water, health) most relevant to CGIAR partner work.
- **Don't commit specifically to NEX-GDDP-CMIP7 in roadmaps.** No public release timeline exists; assume NEX-GDDP-CMIP6 v2 is the terminal NASA downscaling vintage for at least 18 months. For continuity-critical work, evaluate CIL-GDPCIR and CHELSA-CMIP7 as backup paths.

If your work requires partner-government-facing certainty over a multi-year horizon, consult the [CGIAR Climate Action data team](mailto:p.steward@cgiar.org) for the current internal recommendation on the CMIP7 transition pathway. The internal guidance is updated quarterly as the field moves.

## Where this page sits in the wiki

This page is the forward-look part of the wiki. The companion pages cover:

- The current methodology being applied: [African CMIP6 Ensembling](/cdh-wikis/aaa-atlas/african-cmip6-ensembling/)
- The defaults CGIAR centres should harmonise around today: [Recommendations for CGIAR](/cdh-wikis/aaa-atlas/cgiar-recommendations/)
- The dataset landscape your team will need to navigate during the transition: [Dataset landscape](/cdh-wikis/aaa-atlas/dataset-landscape/)
- The regional evaluation literature that will be re-done for CMIP7: [Regional evaluation](/cdh-wikis/aaa-atlas/regional-evaluation/)
- The paradox case that CMIP7 may help resolve: [East African Paradox](/cdh-wikis/aaa-atlas/east-african-paradox/)

When CMIP7-derived African projections become viable, the CGIAR Climate Data Hub will update the underlying methodology pages and add a CMIP7 sub-ensemble alongside the existing CMIP6 view — not as a flag-day cutover. Old versions of this page are retained for citation stability.

## Further reading

- [Dunne et al. 2025 — CMIP7 Assessment Fast Track overview (GMD)](https://gmd.copernicus.org/articles/18/6671/2025/) — the canonical framework paper.
- [van Vuuren et al. 2026 — Scenarios for CMIP7 (GMD)](https://gmd.copernicus.org/articles/19/2627/2026/) — the canonical scenario-design paper.
- [WCRP Explainer — Scenarios for CMIP7](https://wcrp-cmip.org/explainer-scenarios-for-cmip7/) — non-specialist orientation to the new H/M/L framework.
- [WCRP CMIP7 phase page](https://wcrp-cmip.org/cmip-phases/cmip7/) — canonical landing for CMIP7 structure, AFT, and progress.
- [WCRP Rapid Evaluation Framework](https://wcrp-cmip.org/cmip7/rapid-evaluation-framework/) — the new model-evaluation infrastructure for AR7.
- [Carbon Brief — How CMIP7 will shape the next wave of climate science (May 2026)](https://www.carbonbrief.org/guest-post-how-cmip7-will-shape-the-next-wave-of-climate-science/) — non-specialist explainer.
- [CORDEX Task Force on CORDEX-CMIP7](https://cordex.org/strategic-activities/taskforces/task-force-on-preparation-of-cordex-cmip7/) — for the regional dynamical-downscaling pathway.
- [ISIMIP — protocols and outcomes](https://www.isimip.org/) — for the impact-sector pathway.
