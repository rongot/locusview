// Policies

//
const apiCreateMobilePolicy = (name) => ({

  "name": name,
  "permissions":
  {
    "app:mobile": {
      "actions": [
        "access"
      ]
    },
    "config:asset_type:*": {
      "actions": [
        "full_edit:in_review",
        "full_edit:in_progress"
      ]
    },
    "config:project_type:*": {
      "actions": [
        "full_edit:in_review",
        "full_edit:draft",
        "transition:in_progress",
        "transition:submitted",
        "full_edit:in_progress"
      ]
    }
  },
  "readonly": false,
  "restricted": false
})

const bodyForCreateAsset = (assetTypeId, projectID, workUnitId = projectID) => ({
  "typeId": assetTypeId,
  "projectId": projectID,
  "parentProjectId": workUnitId,
  "uuid": `6d8a4535-a4e7-4899-a177-` + (Math.random() + 1).toString(36).substring(3),
  "order": 0,
  "inputMethod": "MANUAL"
})

const bodyForGeometry = (projectID, latitude, longitude) => ({
  "projectId": projectID,
  "uuid": `6d8a4535-a4e7-4899-a177-` + (Math.random() + 1).toString(36).substring(3),
  "latitude": latitude,
  "longitude": longitude

})

const bodyForLinkGeometry = (assetOrWorkunit, assetOrWuID, geometryID, edgeType, order) => ({
  "entityType1": assetOrWorkunit,
  "entityId1": assetOrWuID,//Asset or WU ID
  "entityType2": "GEOMETRY",
  "entityId2": geometryID,//Geometry
  "edgeType": edgeType,
  "order": order,
  "uuid": `5d55f44a-8efd-4c35-b09c-` + (Math.random() + 1).toString(36).substring(3)

})

const createProjectWitAssetAndRequiredResetFieldBody = (idAsset, projectName, requiredTextTitle) => ({
  "id": -6655646483,
  //"id": 31,

  "layout": {
    "sections": [
      {
        "fields": [
          {
            "options": [],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": -3741283570,
            //"id": 31,

            "layoutId": -4946005158,
            // "layoutId": 163,

            "sectionId": -2894277676,
            "title": projectName,
            "key": "name",
            "placeholder": null,
            "esriName": "WorkRequestNumber",
            "tagId": null,
            "mandatory": false,
            "order": 1,
            "type": "AUTO_GENERATE",
            "behavior": "NORMAL",
            "system": true,
            "partOfCatalog": false,
            "active": true,
            "unique": false,
            "isCatalogIndex": false,
            "customData": null,
            "defaultValues": [],
            "helpInfo": null,
            "visibleWhen": {
              "isOn": true,
              "operator": null,
              "conditions": null
            },
            "requireWhen": {
              "isOn": true,
              "operator": null,
              "conditions": null
            },
            "valueWhen": null,
            "validation": {
              "maxLength": 50
            },
            "maxLength": 50
          },
          {
            "options": [],
            "barcodeRegex": null,
            "id": -5645172472,
            "layoutId": -380438298,
            "sectionId": -7687252370,
            "title": requiredTextTitle,
            "placeholder": null,
            "esriName": "",
            "mandatory": false,
            "order": 2,
            "type": "TEXT",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
            "partOfCu": false,
            "unique": false,
            "isCatalogIndex": false,
            "customData": null,
            "defaultValues": [],
            "helpInfo": null,
            "visibleWhen": {
              "isOn": true,
              "operator": null,
              "conditions": null
            },
            "requireWhen": {
              "isOn": true,
              "operator": null,
              "conditions": null
            },
            "valueWhen": {
              "action": "RESET",
              "fieldIds": [
                -3741283570
              ]
            },

            "validation": {
              "maxLength": 50
            },
            "maxLength": 50
          }

        ],
        //"id": -2894277676,
        "id": 31,

        //"layoutId": -4946005158,
        "layoutId": 163,

        "title": "Details",
        "order": 1,
        "type": "SECTION"
      }
    ],
    //"id": -4946005158,
    "id": 31,

    "key": null,
    "draft": false
  },
  "id": 31,
  "title": projectName,
  "order": 11,
  "symbol": "abandonment",
  "materialBehavior": "ENABLED",
  "visibleWhen": null,
  "valueWhen": null,
  "requireWhen": null,
  "type": "PROJECT_TYPE",
  "rootType": true,
  "workflowId": 1,
  "components": {
    "ASSET_TYPE": [
      {
        "id": idAsset,
        "visible": true,
        "required": false
      }
    ]
  },
  "helpInfo": null,
  "previewCard": {
    "title": "<|name| >",
    "subtitle": "<|:lastUpdated| >",
    "secondaryTitle": "<|entityTitle| >",
    "secondarySubtitle": ""
  }
})

const createAssetWithIndexFieldBody = (assetName, partOfCatalog = false) => ({
  "id": -846302245,
  "layout": {
    "sections": [
      {
        "fields": [
          {
            "options": [
              {
                "id": -123988038,
                "value": "L1",
                "title": "L1",
                "order": 0,
                "deleted": false,
                "defaultOption": false,
                "active": true
              },
              {
                "id": -4175232868,
                "value": "L2",
                "title": "L2",
                "order": 1,
                "deleted": false,
                "defaultOption": false,
                "active": true
              },
              {
                "id": -5577721144,
                "value": "L3",
                "title": "L3",
                "order": 2,
                "deleted": false,
                "defaultOption": false,
                "active": true
              }
            ],
            "barcodeRegex": null,
            "id": -5204230198,
            "layoutId": -7726310018,
            "sectionId": -5194123486,
            "title": "ListApi",
            "placeholder": null,
            "esriName": "",
            "mandatory": false,
            "order": 1,
            "type": "LIST",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": partOfCatalog,
            "unique": false,
            "isCatalogIndex": false,
            "customData": null,
            "listType": "LOCAL",
            "defaultValues": null,
            "helpInfo": null,
            "visibleWhen": {
              "isOn": true,
              "operator": null,
              "conditions": null
            },
            "requireWhen": {
              "isOn": false,
              "operator": null,
              "conditions": null
            },
            "valueWhen": null,
            "validation": {
              "maxLength": 2000
            },
            "maxLength": 2000
          },
          {
            "options": [],
            "barcodeRegex": null,
            "id": -7079183491,
            "layoutId": -555926444,
            "sectionId": -5194123486,
            "title": "index",
            "placeholder": null,
            "esriName": "",
            "mandatory": false,
            "order": 2,
            "type": "CATALOG_INDEX",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": true,
            "partOfCu": false,
            "unique": false,
            "isCatalogIndex": false,
            "customData": null,
            "defaultValues": [],
            "helpInfo": null,
            "visibleWhen": {
              "isOn": true,
              "operator": null,
              "conditions": null
            },
            "requireWhen": {
              "isOn": false,
              "operator": null,
              "conditions": null
            },
            "valueWhen": {
              "action": "RESET",
              "fieldIds": [
                -5204230198
              ]
            },
            "validation": {
              "maxLength": 50
            },
            "maxLength": 50
          }
        ],
        "id": -5194123486,
        "layoutId": -7726310018,
        "title": "Details",
        "order": 1,
        "type": "SECTION"
      }
    ],
    "id": -7726310018,
    "key": null,
    "draft": false
  },
  "title": assetName,
  "order": 10,
  "symbol": "abandonment",
  "visibleWhen": {
    "isOn": false,
    "conditions": null
  },
  "valueWhen": {
    "action": "RESET",
    "fieldIds": null,
    "operator": "NO CONDITIONS",
    "conditions": []
  },
  "requireWhen": {
    "isOn": false,
    "conditions": null
  },
  "entityType": true,
  "type": "[configuration] Create asset type",
  "barcodeSupport": null,
  "geometryType": "LINE",
  "immediateMap": false,
  "pinType": "TRIANGLE",
  "lineType": "SOLID",
  "partOfCatalog": partOfCatalog,
  "helpInfo": null,
  "previewCard": {
    "title": "<|entityTitle| >",
    "subtitle": "<|:lastUpdated| >",
    "secondaryTitle": "",
    "secondarySubtitle": ""
  }
})

module.exports = { apiCreateMobilePolicy, bodyForCreateAsset, bodyForGeometry, bodyForLinkGeometry, createProjectWitAssetAndRequiredResetFieldBody,createAssetWithIndexFieldBody }

