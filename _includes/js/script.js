// adapted from javascript functions useed in the ASEAN Centre for Biodiversity Hosted Portal
// https://github.com/gbif/hp-asean

function updateElementText(selector, value) {
  const $el = document.querySelector(selector);
  if (!$el) return;

  if (typeof value !== 'undefined') {
    var text = value;
    if (typeof value === 'number') {
      text = value.toLocaleString(currentLocale);
    }
    $el.textContent = text;
    $el.classList.remove('ajax-is-loading');
    $el.classList.add('ajax-is-loaded');
  }
}

{% assign graphqlEndpoint = site.graphqlEndpoint | default: "https://graphql.gbif.org/graphql" %}


// Javascript to run occurrence search query to get key occurrence stats
document.addEventListener('DOMContentLoaded', () => {
  const predicate = siteConfig.occurrenceSearch.scope;
  const query = `query ($predicate: Predicate) {
    occurrenceSearch(predicate: $predicate, size: 10) {
      documents {
        total
      }
      facet {
        mediaType {
          key
          count
        }
        hasCoordinate {
          key
          count
        }
      }
      cardinality {
        speciesKey
        familyKey
        publishingOrg
        datasetKey
      }
    }
  }`;
  const url = `{{ graphqlEndpoint }}?query=${encodeURIComponent(query)}&variables=${encodeURIComponent(JSON.stringify({ predicate }))}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResponse) {
      var occurrenceCount = jsonResponse.data.occurrenceSearch.documents.total;
      updateElementText('#occurrenceCount', occurrenceCount);

      var imageCount = jsonResponse.data.occurrenceSearch.facet.mediaType.filter(facet => facet.key === 'StillImage')[0].count;
      updateElementText('#imageCount', imageCount);

      var occurrenceMapCount = jsonResponse.data.occurrenceSearch.facet.hasCoordinate.filter(facet => facet.key === true)[0].count;
      updateElementText('#mapCount', occurrenceMapCount);

      var speciesCount = jsonResponse.data.occurrenceSearch.cardinality.speciesKey;
      updateElementText('#speciesCount', speciesCount);

      var familyCount = jsonResponse.data.occurrenceSearch.cardinality.familyKey;
      updateElementText('#familyCount', familyCount);

      var datasetCount = jsonResponse.data.occurrenceSearch.cardinality.datasetKey;
      updateElementText('#datasetCount', datasetCount);

      var publisherCount = jsonResponse.data.occurrenceSearch.cardinality.publishingOrg;
      updateElementText('#publisherCount', publisherCount);
 
    })
    .catch(function (err) {
      console.error('Error fetching occurrence count:', err);
    });
});

// Javascript to run literature search query to get key citation stats
document.addEventListener('DOMContentLoaded', () => {
  const lit_predicate = siteConfig.literatureSearch.scope;
  const lit_query = `query ($lit_predicate: Predicate) {
    literatureSearch(predicate: $lit_predicate, size: 10) {
      documents {
        total
      }
      facet {
        peerReview {
          key
          count
        }
        openAccess {
          key
          count
        }
      }
      cardinality {
        source
      }
    }
  }`;
  const lit_url = `{{ graphqlEndpoint }}?query=${encodeURIComponent(lit_query)}&variables=${encodeURIComponent(JSON.stringify({ lit_predicate }))}`;

  fetch(lit_url)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResponse) {
      var nCitation = jsonResponse.data.literatureSearch.documents.total;
      updateElementText('#nCitation', nCitation);

      var peerCount = jsonResponse.data.literatureSearch.facet.peerReview.filter(facet => facet.key === true)[0].count;
      updateElementText('#peerCount', peerCount);

      var openCount = jsonResponse.data.literatureSearch.facet.openAccess.filter(facet => facet.key === true)[0].count;
      updateElementText('#openCount', openCount);

      var nSource = jsonResponse.data.literatureSearch.cardinality.source;
      updateElementText('#nSource', nSource);
 
    })
    .catch(function (err) {
      console.error('Error fetching occurrence count:', err);
    });
});
