---
layout: default
permalink: /cite_guide
description: How to Cite
---
# Guidance on how to cite the data

To acknowledge the efforts of the recording schemes and the Biological Records Centre (BRC) in mobilizing UK species occurrence records, we provide below some suggested statements to include in acknowledgements and/or data availability statements of published reports or papers using the data. These statements will help us better track how the data are being used and ensure that these data streams can be maintained in the future. 

## For data availability statements

Our recommended citation practice depends on the download route: 

1.  If the data have been downloaded from GBIF or the NBN, we recommend citing the digital object identifier (DOI) that is supplied with the dataset. In both cases, the DOI comes from GBIF. See the [GBIF Citation Guidelines](https://www.gbif.org/citation-guidelines) and or [NBN Citation Guidance](https://docs.nbnatlas.org/cite-nbn-atlas-data/) for further details.

1.  If the data have been shared directly from the recording scheme or the BRC, we recommend the following formulation:

    > [*Scheme name*] ([*Year*]). Data for [*Species group*] collected during [*Time Span*] accessed on [*Date*].

    As an example: 

    > British Dragonfly Society (2026). Data for Zygoptera collected during 1980-2026 accessed on 22/07/2026.

    See the Appendix below for the list of scheme names. 

1.  If the data have been accessed via a data archiving platform (e.g. Plant Atlas 2020 data on Zenodo), we recommend citing the DOI on the archiving platform.

## For acknowledgements

First, to recognisze the efforts of the schemes: 

> We thank the [insert scheme name] for organiszing, verifying and sharing the data. 

Second, to recognisze the efforts of the volunteer data collectors: 

> We thank the volunteer recorders for the efforts in collecting the data. 

Finally, to recognisze the role of the BRC: 

> We also thank the UKCEH Biological Records Centre for maintaining infrastructure that supports data collection and storage.  

We note that this last statement is not always appropriate since some scheme data are held outside these systems (e.g., data from the BSBI or BLS). Please check the metadata associated with the data or to determine whether BRC has pprovided support to the scheme. 
 
### List of scheme names

{% for scheme in site.data.schemes %}
* {{scheme.name}}
{% endfor %}