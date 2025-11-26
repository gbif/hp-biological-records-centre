/*
This is the fil in which you configure the data widgets. Feel free to experiment with the configuration options. 
But it is also completely okay to write and issue and ask for help to configure the widgets.
You probably want to check out the documentation at https://hp-theme.gbif-staging.org/documentation-intro
*/

const datasetKeys = [
  "97d01261-0027-4e89-a0d2-4a7d700f5fdb",
  "83072c26-af4e-44a7-b373-0567f623081d",
  "000c7e0c-c7f4-4b18-8ab7-57ade1a89e30"
]

const publishingOrganizations = [
  "d4b5490a-3267-4e96-94b3-9b93ea167051",
  "2fc95322-47d4-4137-8ce7-f2a6e64f1209",
  "76e846b0-1332-411e-a4fc-4e2251bfeea5",
  "0c392aa0-a452-4254-be5c-e49dd60e9b02",
  "aa569acf-991d-4467-b327-8442f30ddbd2",
  "32f1b389-5871-4da3-832f-9a89132520c5",
  "980451bb-e9d8-4984-8d68-0d9772ea1582",
  "90da406e-9e67-4830-a480-befef56beedb",
  "98f2e583-a557-46b5-98b9-05561f144966",
  "dccfcdcf-d272-45c8-85cb-e3dbf18b8a34",
  "b663df19-4d5d-4139-96bb-32a83e24113f",
  "b0d7bdb4-d7ba-47cb-95f1-2082558cae9e",
  "d7fdac0a-fb87-46a4-91bc-633addb541a9",
  "edbf0897-6149-44c9-b06f-bf83d4fc4437",
  "707c54fc-b0d4-4082-9196-181cb9358aab",
  "cface13f-e41b-4f60-9b11-c7218951bcf8",
  "125b5016-8748-43a8-ae03-632345d3262a",
  "43d63d86-81b1-4806-b2d7-0dfeb82393c6",
  "f025ded8-0efe-478d-a4d5-f6ae9edc3a85",
  "bcecc656-f757-4637-83ce-c1f44f17c77d",
  "d0071a22-dbf0-4ac4-881c-088118c5b563",
  "293a2f8d-ab04-4765-83e9-b2426f439f9d",
  "a86070d3-15cf-43df-b5a9-6949901963d3",
  "d3dd95c3-93d4-4349-a13f-55abf89ad140",
  "00eeb78f-cfa5-452b-970c-cb4e8545f027",
  "179ccc1f-7315-4925-9725-69377ca8b6d4",
  "ad9b45e8-19ae-443d-a452-246ee12b36e2",
  "8b09e94e-a95e-417f-8695-53dd9ae7f4e1",
  "0d72dd7f-6f05-46af-85c2-8b6e77ce5534"
]


var siteConfig = {
  "version": 3,
  "pages": [ // which pages do we want to enable
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "occurrenceKey"
    },
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    // TODO: you should remove types you do not want to use
    "OCCURRENCE",
    "LITERATURE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "or",
      "predicates": [
        {
          "type": "in",
          "key": "datasetKey",
          "values": datasetKeys
        },
        {
          "type": "in",
          "key": "publishingOrg",
          "values": publishingOrganizations
        }
      ]
    },
    "highlightedFilters": [
      "taxonKey",
      "verbatimScientificName",
      "institutionKey",
      "collectionKey",
      "catalogNumber",
      "recordedBy",
      "identifiedBy"
    ],
    "excludedFilters": [
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "protocol",
      "publishingCountry",
      "institutionCode",
      "collectionCode"
    ],
    "defaultEnabledTableColumns": [
      "features",
      "institutionKey",
      "collectionKey",
      "catalogNumber",
      "country",
      "year",
      "recordedBy",
      "identifiedBy"
    ],
    "tabs": [
      "table",
      "gallery",
      "map",
      "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": 52,
      "lng": 12,
      "zoom": 4.911544076366507
    }
  },
  "collectionSearch": {
    excludedFilters: ['country', 'active'],
    // highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
    scope: {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // search filters have the format {field: [values]}
      active: true
    },
  },
  "institutionSearch": {
    // excludedFilters: ['country', 'active'],
    // highlightedFilters: ['q', 'type'],
    // defaultTableColumns: ['title', 'type'],
    scope: {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // search filters have the format {field: [values]}
      active: true
    }
  },
  "datasetSearch": {
    excludedFilters: ['publishingCountry', 'networkKey', 'projectId', 'hostingOrg'],
    highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    scope: {
      // TODO: you should add a scope here if you need search to be limited to a subset
      // search filters have the format {field: [values]}
      type: ['OCCURRENCE', 'CHECKLIST']
    },
  },
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      "type": "or",
      "predicates": [
        {
          "type": "in",
          "key": "gbifDatasetKey",
          "values": datasetKeys
        },
        {
          "type": "in",
          "key": "publishingOrganizationKey",
          "values": publishingOrganizations
        }
      ]
    },
  }
}
