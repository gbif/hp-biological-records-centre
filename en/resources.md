---
layout: documentation
permalink: /resources
description: Resources
sideNavigation: sideNavigation.guides
toc: true
---
## Apps
The Biological Records Centre has collaborated with a number of recording schemes and mobile app developers to launch a range of smartphone apps. These apps provide identification resources and aim to make it easy to submit wildlife records. The sightings go to [iRecord](https://irecord.org.uk/), allowing recorders to see all their observations in one place.

A list of apps is available on the [BRC websites](https://www.brc.ac.uk/apps)

## Software & Tools

### iRecord
[iRecord](https://irecord.org.uk/) is a a website and app that allows recorder to submit observations. The goal of iRecord is to help bring together wildlife sightings from many sources, so that they can be checked by experts and made available to support research and decision-making. It is operated by the [Biological Records Centre (BRC)](https://www.brc.ac.uk/) as part of the work of the [UK Centre for Ecology & Hydrology (UKCEH)](https://www.ceh.ac.uk/).
Contains computer vision or image recognition species identification support. Also contains some tailored and semi-structured recording forms for specific taxon groups.

### Indicia
[Indicia](https://indicia.org.uk/home) provides a solution for developing online biological recording. Indicia is not an off the shelf solution for online recording. Rather, it is a toolkit that simplifies the development by providing ready-made components required to build online recording websites. Indicia provides a set of services, tools and examples that can be added to almost any website to provide rich online recording functionality. Indicia supports wildlife observation recording forms that are as simple or advanced as you need, allow photo upload, reporting, mapping and verification of the records.

### occAssess
An R package that enables straightforward screening of species occurrence data for potential biases. The package contains a number Af discrete functions, each of which returns a measure of the potential for bias in one or more of the taxonomic, temporal, spatial, and environmental dimensions.

The package is available via [github](https://github.com/robboyd/occAssess).

### fresacalo (R package)
An R package that contains an R reimplementation of the Frescalo method. The R package includes the option of running the frescalo analyses in parallel on multi-processor computers or computing clusters.

The package is available via [github](https://github.com/colinharrower/frescalo).

### Frescalo (original fortran program)
Frescalo estimates species richness and time trends when recording effort is uneven. The method was developed by Dr. Mark Hill in 2011 and released as a command line fortran program. The download includes a readme file, together with a worked example and supplementary programs to define neighbourhoods of individual grid cells. For the theoretical background, see [Hill (2011) in Methods in Ecology and Evolution](https://besjournals.onlinelibrary.wiley.com/doi/10.1111/j.2041-210X.2011.00146.x).

A download of the fortran version is available on the [BRC website](https://www.brc.ac.uk/biblio/frescalo-computer-program-analyse-your-biological-records)

### BRCmap
An R package designed to help produce UK species distribution maps of the type commonly used in distribution atlases. The packages contains functions to deal with UK grid references and can map data where spatial information is provided as grid references.

The package is avialable via [github](https://github.com/colinharrower/BRCmap)

### Sparta
An R package that contains functions for assessing species trends from occurrence records, including occupancy-detection models.

The Sparta package is available via [github](https://github.com/BiologicalRecordsCentre/sparta)

### Spherikm
A fortan computer program for clustering columns and rows of an occurrence matrix using weighted spherikal k-means. For information on the method see the [Hill *et al.* 2013 in Methods in Ecology and Evolution](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.12038).

The program is available to download from the [BRC website](https://www.brc.ac.uk/biblio/spherikm-computer-program-clustering-columns-and-rows-occurrence-matrix-using-weighted)

### CLUSTASPEC
An R script containing functions used to run CLUSTASPEC in R. CLUSTASPEC takes presence/absence data for a series of species and using this data attempt to looks for patterns in their occurrence. The download includes a readme file, together with the R script defining the clustaspec function. For more information and an application of the method see [Preston, *et al.* 2011 in Journal of Bryology](https://www.tandfonline.com/doi/full/10.1179/1743282010Y.0000000001)

The R script is available to download from the [BRC website](https://www.brc.ac.uk/biblio/clustaspec-r-function-determine-patterns-distribution)

## Reference datasets

### Trait data for Butterflies and macromoths of Great Britain and Ireland
a comprehensive traits database for the butterflies and macro-moths of Great Britain and Ireland. The database covers 968 species in 21 families. Ecological traits fall into four main categories: life cycle ecology and phenology, host plant specificity and characteristics, breeding habitat, and morphological characteristics. The database also contains data regarding species distribution, conservation status, and temporal trends for abundance and occupancy.

The dataset is available to download from the [UKcEH EIDC](https://catalogue.ceh.ac.uk/documents/dbc7cc17-cbbd-49dd-bab4-8e8855768d66)

### Database of Insects and their Food Plants (DBIF)
This database is primarily a collation of published interactions between Great Britain's invertebrate herbivores (insects and mites) and their host plants. There are also some interactions for the invertebrates closely associated with herbivores, such as predators, parasitoids, cleptoparasites and mutualists. DBIF contains about 47,000 interactions for roughly 9,300 invertebrate taxa (species, sub-species and forms) and 5,700 plant taxa (species, genera and broader groupings).

The [DBIF database](https://dbif.brc.ac.uk/) is available online. 

### GB Non-native Species Information Portal (GB NNSIP)
The [GB Non-native Species Information Portal (NNSIP)](https://www.nonnativespecies.org/non-native-species/information-portal) provides access to distribution data for over 3000 non-native species in GB as well as additional information such as place or origin, date of introduction and methods of introduction. For 300 species much more detailed information is provided, including information on identification, impacts and control methods. The GB NNSIP is hosted on the GB [Non-Native Species Secretariat (GB NNSS) website](https://www.nonnativespecies.org), which provides information on Non-native species and the UK response to non-native species (e.g. risk analyses, altert species, biosecurity and pathways).

### BRYOATT
BRYOATT is a dataset of attributes of British and Irish Mosses, Liverworts and Hornworts. BRYOATT was published in 2007 by the Centre for Ecology and Hydrology (CEH) and provided for all British and Irish species a codified set of attributes for use in ecological analyses. These included information on native status, size, life form, life history, altitudinal and geographical range and habitat of 1057 British and Irish bryophyte species and a further 134 aggregates and infraspecific taxa. Much of the information was newly compiled, or generated afresh for this publication. Ellenberg values for Light, Moisture, Reaction, Nitrogen and Salt tolerance were provided for all taxa. A new classification of the life forms was proposed and applied to all taxa. Their substrates and EUNIS habitats in Britain and Ireland were also tabulated. The dataset was published in 2007 as a booklet (Hill MO, Preston CD, Bosanquet SDS, Roy DB, 2007, BRYOATT Attributes of British and Irish Mosses, Liverworts and Hornworts), a companion to PLANTATT. 

An Excel spreadsheet of the attributes, and a PDF explaining the background and nomenclature are available to download on the [BRC websites](https://www.brc.ac.uk/biblio/bryoatt-attributes-british-and-irish-mosses-liverworts-and-hornworts-spreadsheet)

### PLANTATT
PLANTATT is a datasets of attributes of British and Irish Plants. The dataset was compiled and published in 2004, and last updated in November 2008. 

A download that includes an Excel spreadsheet of the attributes, and a PDF explaining the background and nomenclature is avaiable from the [BRC website](https://www.brc.ac.uk/biblio/plantatt-attributes-british-and-irish-plants-spreadsheet)


## Atlases
Promoting and publishing atlases is an integral part of BRC’s work.  Atlases continue to be important for biological recording while also providing a basis for periodic review of the distribution of species within a taxonomic group. Atlases and the currated datasets used to produce them are often used for research.

For more information on published Atlases see the [BRC website](https://www.brc.ac.uk/theme/atlases)