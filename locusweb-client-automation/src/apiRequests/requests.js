const createAssetBody = (assetName, partOfCatalog=false) => ({
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
const createAssetBodyv2 = (assetName) => ({
  "id": -316314314,
  "layout": {
    "sections": [
      {
        "fields": [
          {
            "options": [
              {
                "id": -1548316298,
                "title": "Main",
                "order": 1,
                "defaultOption": false,
                "active": true
              },
              {
                "id": -2433304667,
                "title": "Service",
                "order": 2,
                "defaultOption": false,
                "active": true
              }
            ],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": -7913530108,
            "layoutId": -1192328706,
            "sectionId": -6516677325,
            "title": "System Type",
            "key": "systemType",
            "placeholder": null,
            "esriName": "SystemType",
            "tagId": null,
            "mandatory": false,
            "order": 1,
            "type": "SELECTION",
            "behavior": "LOCKED",
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
              "maxLength": 2000
            },
            "maxLength": 2000
          }
        ],
        "id": -6516677325,
        "layoutId": -1192328706,
        "title": "Details",
        "order": 1,
        "type": "SECTION"
      }
    ],
    "id": -1192328706,
    "key": null,
    "draft": false
  },
  "title": assetName,
  "order": 7,
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
  "geometryType": "POINT",
  "immediateMap": false,
  "pinType": "TRIANGLE",
  "helpInfo": null,
  "previewCard": {
    "title": "<|entityTitle| >",
    "subtitle": "<|:lastUpdated| >",
    "secondaryTitle": "",
    "secondarySubtitle": ""
  }
})
const createFormTypeBodyV2 = (formName) => ({
  "id": -6406993693,
  "layout": {
    "sections": [
      {
        "fields": [],
        "id": -8070419398,
        "layoutId": -8453076064,
        "title": "Details",
        "order": 1,
        "type": "SECTION"
      }
    ],
    "id": -8453076064,
    "key": null,
    "draft": false
  },
  "title": formName,
  "order": 5,
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
  "type": "FORM_TYPE",
  "captureLocation": false,
  "attachable": true,
  "helpInfo": null,
  "previewCard": {
    "title": "<|entityTitle| >",
    "subtitle": "<|:lastUpdated| >",
    "secondaryTitle": "",
    "secondarySubtitle": ""
  }

})
const createAssetForSharedList = (assetName) => ({

  "id": -3108490815,
  "layout": {
    "sections": [
      {
        "fields": [
          {
            "sharedListId": 2,
            "barcodeRegex": null,
            "id": -3159316749,
            "layoutId": -4188466188,
            "sectionId": -2291168380,
            "title": "ListShared",
            "placeholder": null,
            "esriName": "",
            "mandatory": false,
            "order": 1,
            "type": "LIST",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
            "unique": false,
            "isCatalogIndex": false,
            "customData": null,
            "listType": "SHARED",
            "defaultValues": [
              "1427"
            ],
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
            "id": -4332424308,
            "layoutId": -4188466188,
            "sectionId": -2291168380,
            "title": "CalcShared",
            "placeholder": null,
            "esriName": "",
            "mandatory": false,
            "order": 2,
            "type": "CALCULATION",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
            "unique": false,
            "isCatalogIndex": false,
            "customData": {
              "calculationData": [
                {
                  "value": {
                    "conditionsWithNumberValues": [
                      {
                        "condition": {
                          "entityId": -3159316749,
                          "entityType": "FIELD",
                          "values": [],
                          "operator": "NOT_NULL"
                        },
                        "order": 1,
                        "numberValue": "1"
                      }
                    ],
                    "defaultNumberValue": "2"
                  },
                  "type": "SWITCH_CONDITION",
                  "order": 1
                }
              ]
            },
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
                -3159316749
              ]
            },
            "validation": {
              "maxLength": 2000
            },
            "maxLength": 2000
          }
        ],
        "id": -2291168380,
        "layoutId": -4188466188,
        "title": "Details",
        "order": 1,
        "type": "SECTION"
      }
    ],
    "id": -4188466188,
    "key": null,
    "draft": false
  },
  "title": assetName,
  "order": 11,
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
  "partOfCatalog": false,
  "helpInfo": null,
  "previewCard": {
    "title": "<|entityTitle| >",
    "subtitle": "<|:lastUpdated| >",
    "secondaryTitle": "",
    "secondarySubtitle": ""
  }

})

const createProjectBody = {
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
            "title": "ProjectAPI",
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
  "title": "ProjectAPI",
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
        "id": 31,
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
}

const createProjectWitAssetBody = (idAsset, projectName) => ({
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

const createAlertWithAssetBody = (idProject, idAsset, customField, alertName) => ({
  "title": alertName,
  "projectTypeIds": [
    idProject
  ],
  "behaviors": [],
  "id": -1434005174,
  "alertLevel": "WARNING",
  "alertDefinition": {
    "id": -3232008341,
    "entityTypeIds": [
      idAsset
    ],
    "operator": "AND",
    "criterion": [
      {
        "values": [
          "L1"
        ],
        "order": 1,
        "fieldKey": customField,
        "operator": "ANY",
        "selectedField": null
      }
    ],
    "alertTypeId": -1434005174,
    "alertTriggerId": null,
    "order": 1,
    "entityType": "ASSET_TYPE"
  },
  "alertTrigger": {
    "evaluationType": "CURRENT",
    "operator": "AND",
    "alertTypeId": -1434005174,
    "alertDefinitions": [
      {
        "id": -4020721268,
        "entityTypeIds": [
          idAsset
        ],
        "operator": "AND",
        "criterion": [],
        "alertTypeId": -1434005174,
        "alertTriggerId": null,
        "order": 1,
        "entityType": "ASSET_TYPE"
      }
    ]
  },
  "projectTitle": null,
  "alertSummary": "AssetAPI  with ListApi Any of Specific Value  L1",
  "viewParams": {
    "dirty": true,
    "submitted": true
  },
  "type": "[configuration] Create alert type"
})

// Policies
const apiCreateAPolicyWithSpecificFieldDate1 = {

  "name": "A1SergPolicyCombine",
  "permissions": {
    "app:review_and_approve": {
      "actions": [
        "access"
      ]
    },
    "config:project_type:8": {
      "actions": [
        "transition:in_review",
        "partial_edit:draft"
      ]
    },
    "config:field:291": {
      "actions": [
        "edit:draft"
      ]
    }
  }

}

const apiCreateAPolicyWithSpecificFieldDate2 =
// create policy with one specific Specific Types+ one specific Field=date
// https://photos.app.goo.gl/gmZt5jQksYBx2mWe6
{
  "name": "A3SergPolicyCombine",
  "permissions": {
    "app:review_and_approve": {
      "actions": [
        "access"
      ]
    },
    "config:project_type:8": {
      "actions": [
        "transition:in_review",
        "partial_edit:draft"
      ]
    },
    "config:field:291": {
      "actions": [
        "edit:draft"
      ]
    }
  }

}
const apiCreateAPolicyWithAllFieldsYes =
// specific Specific Types+one all fields=yes
// https://photos.app.goo.gl/JodEG6shDuqmGFEi6
{
  "name": "A2SergPolicyCombine",
  "permissions": {
    "app:review_and_approve": {
      "actions": [
        "access"
      ]
    },
    "config:project_type:8": {
      "actions": [
        "transition:in_review",
        "full_edit:draft",
        "full_edit:in_progress",
        "full_edit:in_review"
      ]
    }
  }
}
const apiPolicyUnlockScanned = {
  "name": "Unlock_Policy",
  "permissions": {
    "app:general": {
      "actions": ["edit_scanned_assets"]
    },
    "config:asset_type:5": {
      "actions": [
        "full_edit:in_review",
        "full_edit:in_progress"
      ]
    },
    "config:project_type:*": {
      "actions": [
        "full_edit:in_review",
        "transition:in_review",
        "full_edit:in_progress"
      ]
    },
    "app:review_and_approve": {
      "actions": [
        "access"
      ]
    }
  }

}

const apiCreatePolicySpecificTypeWithAllFieldsDate =
//create policy with one specific Specific Types+ ALL specific Field=date
// https://photos.app.goo.gl/d2G5owjbSXK1v7Cs6

{
  "name": "ASergTestPolicyEdit",
  "permissions": {
    "app:review_and_approve": {
      "actions": [
        "access"
      ]
    },
    "config:project_type:8": {
      "actions": [
        "transition:in_review",
        "partial_edit:draft",
        "partial_edit:in_progress",
        "partial_edit:in_review"
      ]
    },
    "config:field:291": {
      "actions": [
        "edit:draft",
        "edit:in_progress",
        "edit:in_review"
      ]
    }
  }
}
const apiCreatePrPermissionPolicyAllTypes =
//https://photos.app.goo.gl/yHvoJYw6bo7YtbWM6
//create policy with Alltypes at Project Permission
{
  "name": "ASergPolicyAllTypes",
  "permissions": {
    "app:review_and_approve": {
      "actions": [
        "access"
      ]
    },
    "config:project_type:*": {
      "actions": [
        "transition:in_review"
      ]
    }
  }
}
const apiPolicySpecificTypesAllEditDetails =
//https://photos.app.goo.gl/csHnXqsaxunx8qTXA
//create policy with all selected Specific Types at Project Permission
{
  "name": "A4SergPolicyPartial",
  "permissions": {
    "app:review_and_approve": {
      "actions": [
        "access"
      ]
    },
    "config:project_type:8": {
      "actions": [
        "transition:in_review",
        "partial_edit:draft",
        "partial_edit:in_progress",
        "partial_edit:in_review"
      ]
    },
    "config:field:291": {
      "actions": [
        "edit:draft"
      ]
    },
    "config:field:292": {
      "actions": [
        "edit:in_progress"
      ]
    },
    "config:field:293": {
      "actions": [
        "edit:in_review"
      ]
    }
  }
}


//Create user
// create user with two policies 
const userWithPolicyBody = (userName, policyIds) => ({
  "username": userName,
  "firstName": null,
  "lastName": null,
  "email": null,
  "phoneNumber": null,
  "additionalInfo": null,
  "password": "nElena!123",
  "policyIds": policyIds,
  "groupIds": [],
  "status": "ACTIVE"
})
// create user with two policies 

// create user with one policy and var name
const apiCreateUserWithOnePolicy = (userName, policy) => 
({
    "username": userName,
    "password": "nElena!123",
    "policyIds": [policy],
    "groupIds": [],
    "status": "ACTIVE",
    "firstName": "",
    "lastName": "",
    "email": ""
})

const bodyCreateEmptyGroup = (groupName) =>
({
  "name": groupName
})

// review map
const createProjectBodyWithList_NVIEW26308 =
{
  "id": -3358134646,
  "layout": {
    "sections": [
      {
        "fields": [
          {
            "options": [],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": -7110290196,
            "layoutId": -6009452172,
            "sectionId": -414806748,
            "title": "Project Name",
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
            "options": [
              {
                "id": -6981587399,
                "value": "Black",
                "title": "Black",
                "order": 0,
                "deleted": false,
                "defaultOption": false,
                "active": true
              },
              {
                "id": -7947242518,
                "value": "Red",
                "title": "Red",
                "order": 1,
                "deleted": false,
                "defaultOption": false,
                "active": true
              },
              {
                "id": -1749764004,
                "value": "White",
                "title": "White",
                "order": 2,
                "deleted": false,
                "defaultOption": false,
                "active": true
              }
            ],
            "barcodeRegex": null,
            "id": -6448360822,
            "layoutId": -6009452172,
            "sectionId": -414806748,
            "title": "ListProject",
            "placeholder": null,
            "esriName": "",
            "mandatory": false,
            "order": 2,
            "type": "LIST",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
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
          }
        ],
        "id": -414806748,
        "layoutId": -6009452172,
        "title": "Details",
        "order": 1,
        "type": "SECTION"
      }
    ],
    "id": -6009452172,
    "key": null,
    "draft": false
  },
  "title": "Project for Filter",
  "order": 8,
  "symbol": "abandonment",
  "materialBehavior": "ENABLED",
  "visibleWhen": null,
  "valueWhen": null,
  "requireWhen": null,
  "type": "PROJECT_TYPE",
  "rootType": true,
  "workflowId": 1,
  "components": {},
  "helpInfo": null,
  "previewCard": {
    "title": "<|name| >",
    "subtitle": "<|:lastUpdated| >",
    "secondaryTitle": "<|entityTitle| >",
    "secondarySubtitle": ""
  }
}

//Forms
const apiDeleteFieldFromContent_NVIEW26024_1 =
{
  "id": 5,
  "layout": {
    "sections": [
      {
        "fields": [
          {
            "options": [],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": 316,
            "layoutId": 119,
            "sectionId": 237,
            "title": "text without value",
            "key": "customField316",
            "placeholder": null,
            "esriName": "",
            "tagId": null,
            "mandatory": false,
            "order": 1,
            "type": "TEXT",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
            "active": false,
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
            "valueWhen": null,
            "validation": {
              "maxLength": 50
            },
            "maxLength": 50
          },
          {
            "options": [],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": 317,
            "layoutId": 119,
            "sectionId": 237,
            "title": "text with value",
            "key": "customField317",
            "placeholder": null,
            "esriName": "",
            "tagId": null,
            "mandatory": false,
            "order": 2,
            "type": "TEXT",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
            "active": false,
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
            "valueWhen": null,
            "validation": {
              "maxLength": 50
            },
            "maxLength": 50
          },
          {
            "options": [],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": 318,
            "layoutId": 119,
            "sectionId": 237,
            "title": "text with default value",
            "key": "customField318",
            "placeholder": null,
            "esriName": "",
            "tagId": null,
            "mandatory": false,
            "order": 3,
            "type": "TEXT",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
            "active": true,
            "unique": false,
            "isCatalogIndex": false,
            "customData": null,
            "defaultValues": [
              "default value"
            ],
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
              "maxLength": 50
            },
            "maxLength": 50
          },
          {
            "options": [],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": 319,
            "layoutId": 119,
            "sectionId": 237,
            "title": "number with value",
            "key": "customField319",
            "placeholder": null,
            "esriName": "",
            "tagId": null,
            "mandatory": false,
            "order": 4,
            "type": "NUMBER",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
            "active": false,
            "unique": false,
            "isCatalogIndex": false,
            "customData": {
              "maximumWholeValue": 999999999999,
              "minimumWholeValue": -999999999999,
              "maxDecimalPoints": 4,
              "mandatoryDecimalPoints": 0
            },
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
              "maxLength": 12
            },
            "maxLength": 12
          },
          {
            "options": [],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": 320,
            "layoutId": 119,
            "sectionId": 237,
            "title": "number without value",
            "key": "customField320",
            "placeholder": null,
            "esriName": "",
            "tagId": null,
            "mandatory": false,
            "order": 5,
            "type": "NUMBER",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
            "active": false,
            "unique": false,
            "isCatalogIndex": false,
            "customData": {
              "maximumWholeValue": 999999999999,
              "minimumWholeValue": -999999999999,
              "maxDecimalPoints": 4,
              "mandatoryDecimalPoints": 0
            },
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
              "maxLength": 12
            },
            "maxLength": 12
          },
          {
            "options": [],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": 321,
            "layoutId": 119,
            "sectionId": 237,
            "title": "number with default value",
            "key": "customField321",
            "placeholder": null,
            "esriName": "",
            "tagId": null,
            "mandatory": false,
            "order": 6,
            "type": "NUMBER",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
            "active": true,
            "unique": false,
            "isCatalogIndex": false,
            "customData": {
              "maximumWholeValue": 999999999999,
              "minimumWholeValue": -999999999999,
              "maxDecimalPoints": 4,
              "mandatoryDecimalPoints": 0
            },
            "defaultValues": [
              "5"
            ],
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
              "maxLength": 12
            },
            "maxLength": 12
          },
          {
            "options": [],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": 322,
            "layoutId": 119,
            "sectionId": 237,
            "title": "date with default value",
            "key": "customField322",
            "placeholder": null,
            "esriName": "",
            "tagId": null,
            "mandatory": false,
            "order": 7,
            "type": "DATE",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
            "active": true,
            "unique": false,
            "isCatalogIndex": false,
            "customData": null,
            "defaultValues": [
              "true"
            ],
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
            "options": [
              {
                "id": 1455,
                "title": "3",
                "order": 1,
                "defaultOption": false,
                "active": true
              },
              {
                "id": 1456,
                "title": "2",
                "order": 2,
                "defaultOption": false,
                "active": true
              },
              {
                "id": 1457,
                "title": "1",
                "order": 3,
                "defaultOption": false,
                "active": true
              }
            ],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": 328,
            "layoutId": 119,
            "sectionId": 237,
            "title": "inactive list",
            "key": "customField328",
            "placeholder": null,
            "esriName": "",
            "tagId": null,
            "mandatory": false,
            "order": 8,
            "type": "LIST",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
            "active": false,
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
          }
        ],
        "id": 237,
        "layoutId": 119,
        "title": "Details",
        "order": 1,
        "type": "SECTION"
      }
    ],
    "id": 119,
    "key": "customLayout119"
  },
  "title": "Inactive Fields Form",
  "order": 6,
  "symbol": "abandonment",
  "visibleWhen": {
    "isOn": null,
    "operator": "SINGLE",
    "conditions": [
      {
        "values": [
          "10",
          "11",
          "12"
        ],
        "entityId": null,
        "entityType": "PROJECT_TYPE",
        "operator": "ANY"
      }
    ]
  },
  "valueWhen": {
    "action": "RESET",
    "fieldIds": null,
    "operator": "NO CONDITIONS",
    "conditions": []
  },
  "requireWhen": {
    "isOn": false,
    "operator": null,
    "conditions": null
  },
  "behavior": "NORMAL",
  "type": "[configuration] Update form type",
  "captureLocation": false,
  "active": true,
  "attachable": true,
  "helpInfo": null,
  "previewCard": {
    "title": "<|entityTitle| >",
    "subtitle": "<|:lastUpdated| >",
    "secondaryTitle": "",
    "secondarySubtitle": ""
  }
}
const apiDeleteFieldFromContent_NVIEW26024_2 =
{
  "id": 1,
  "layout": {
    "sections": [
      {
        "fields": [
          {
            "options": [],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": 230,
            "layoutId": 90,
            "sectionId": 205,
            "title": "free text 1",
            "key": "customField230",
            "placeholder": null,
            "esriName": "Reserved01",
            "tagId": null,
            "mandatory": false,
            "order": 1,
            "type": "TEXT",
            "behavior": "NORMAL",
            "system": false,
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
              "isOn": false,
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
            "sharedListId": null,
            "barcodeRegex": null,
            "id": 231,
            "layoutId": 90,
            "sectionId": 205,
            "title": "free text 2",
            "key": "customField231",
            "placeholder": null,
            "esriName": "Reserved02",
            "tagId": null,
            "mandatory": false,
            "order": 2,
            "type": "TEXT",
            "behavior": "NORMAL",
            "system": false,
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
              "isOn": false,
              "operator": null,
              "conditions": null
            },
            "valueWhen": null,
            "validation": {
              "maxLength": 50
            },
            "maxLength": 50
          }
        ],
        "id": 205,
        "layoutId": 90,
        "title": "Details",
        "order": 1,
        "type": "SECTION"
      }
    ],
    "id": 90,
    "key": "customLayout90"
  },
  "title": "Form NON Attachable",
  "order": 1,
  "symbol": "construction-cone",
  "visibleWhen": {
    "isOn": null,
    "operator": "SINGLE",
    "conditions": [
      {
        "values": [
          "1",
          "2",
          "4",
          "6",
          "8",
          "12"
        ],
        "entityId": null,
        "entityType": "PROJECT_TYPE",
        "operator": "ANY"
      }
    ]
  },
  "valueWhen": {
    "action": "RESET",
    "fieldIds": null,
    "operator": "NO CONDITIONS",
    "conditions": []
  },
  "requireWhen": {
    "isOn": false,
    "operator": null,
    "conditions": null
  },
  "behavior": "NORMAL",
  "type": "[configuration] Update form type",
  "captureLocation": false,
  "active": true,
  "attachable": false,
  "helpInfo": null,
  "previewCard": {
    "title": "<|entityTitle| >",
    "subtitle": "<|:lastUpdated| >",
    "secondaryTitle": "",
    "secondarySubtitle": ""
  }
}
const apiEmpty = {

}

// Create Alerts
//alerts for v2
//AlertJoint

const apiAlertv2LeakReport = (alertName) =>
({
  "title": alertName,
  "projectTypeIds": [
    2
  ],
  "behaviors": [],
  "id": -8243116713,
  "alertLevel": "WARNING",
  "alertDefinition": {
    "id": -8888621644,
    "entityTypeIds": [
      6
    ],
    "operator": "AND",
    "criterion": [],
    "alertTypeId": -8243116713,
    "alertTriggerId": null,
    "order": 1,
    "entityType": "ASSET_TYPE"
  },
  "alertTrigger": {
    "operator": "AND",
    "alertTypeId": -8243116713,
    "evaluationType": "CURRENT",
    "alertDefinitions": [
      {
        "id": -2533783058,
        "entityTypeIds": [
          6
        ],
        "operator": "AND",
        "criterion": [],
        "alertTypeId": -8243116713,
        "alertTriggerId": null,
        "order": 1,
        "entityType": "ASSET_TYPE"
      }
    ]
  },
  "projectTitle": null,
  "alertSummary": "Reference point",
  "viewParams": {
    "dirty": true,
    "submitted": true
  },
  "type": "[configuration] Create alert type"
})
const apiAlertv2JointsJointType = (alertName) =>
({

  "title": alertName,
  "projectTypeIds": [
    1
  ],
  "behaviors": [],
  "id": -8574622991,
  "alertLevel": "WARNING",
  "alertDefinition": {
    "id": -5730333567,
    "entityTypeIds": [
      1
    ],
    "operator": "AND",
    "criterion": [],
    "alertTypeId": -8574622991,
    "alertTriggerId": null,
    "order": 1,
    "entityType": "JOINT_TYPE"
  },
  "alertTrigger": {
    "operator": "AND",
    "alertTypeId": -8574622991,
    "evaluationType": "CURRENT",
    "alertDefinitions": [
      {
        "id": -594264713,
        "entityTypeIds": [
          1
        ],
        "operator": "AND",
        "criterion": [],
        "alertTypeId": -8574622991,
        "alertTriggerId": null,
        "order": 1,
        "entityType": "JOINT_TYPE"
      }
    ]
  },
  "projectTitle": null,
  "alertSummary": "Electro",
  "viewParams": {
    "dirty": true,
    "submitted": true
  },
  "type": "[configuration] Create alert type"


})
const apiAlertv2JointsAssetType = (alertName) =>
({

  "title": alertName,
  "projectTypeIds": [
    1
  ],
  "behaviors": [],
  "id": -359392841,
  "alertLevel": "WARNING",
  "alertDefinition": {
    "id": -427360559,
    "entityTypeIds": [
      6
    ],
    "operator": "AND",
    "criterion": [],
    "alertTypeId": -359392841,
    "alertTriggerId": null,
    "order": 1,
    "entityType": "ASSET_TYPE"
  },
  "alertTrigger": {
    "operator": "AND",
    "alertTypeId": -359392841,
    "evaluationType": "CURRENT",
    "alertDefinitions": [
      {
        "id": -3240378766,
        "entityTypeIds": [
          6
        ],
        "operator": "AND",
        "criterion": [],
        "alertTypeId": -359392841,
        "alertTriggerId": null,
        "order": 1,
        "entityType": "ASSET_TYPE"
      }
    ]
  },
  "projectTitle": null,
  "alertSummary": "Reference point",
  "viewParams": {
    "dirty": true,
    "submitted": true
  },
  "type": "[configuration] Create alert type"

})
const apiAlertv2Form = (alertName) =>
({
  "title": alertName,
  "projectTypeIds": [
    1
  ],
  "behaviors": [],
  "id": -7880320196,
  "alertLevel": "WARNING",
  "alertDefinition": {
    "id": -2804529245,
    "entityTypeIds": [
      1
    ],
    "operator": "AND",
    "criterion": [],
    "alertTypeId": -7880320196,
    "alertTriggerId": null,
    "order": 1,
    "entityType": "FORM_TYPE"
  },
  "alertTrigger": {
    "operator": "AND",
    "alertTypeId": -7880320196,
    "evaluationType": "CURRENT",
    "alertDefinitions": [
      {
        "id": -7258875081,
        "entityTypeIds": [
          1
        ],
        "operator": "AND",
        "criterion": [],
        "alertTypeId": -7880320196,
        "alertTriggerId": null,
        "order": 1,
        "entityType": "FORM_TYPE"
      }
    ]
  },
  "projectTitle": null,
  "alertSummary": "Pressure Test",
  "viewParams": {
    "dirty": true,
    "submitted": true
  },
  "type": "[configuration] Create alert type"
})

const apiAlertv2Asset = (alertName) =>
({
  "title": alertName,
  "projectTypeIds": [
    1
  ],
  "behaviors": [],
  "id": -3274136152,
  "alertLevel": "WARNING",
  "alertDefinition": {
    "id": -5621730567,
    "entityTypeIds": [
      6
    ],
    "operator": "AND",
    "criterion": [],
    "alertTypeId": -3274136152,
    "alertTriggerId": null,
    "order": 1,
    "entityType": "ASSET_TYPE"
  },
  "alertTrigger": {
    "operator": "AND",
    "alertTypeId": -3274136152,
    "evaluationType": "CURRENT",
    "alertDefinitions": [
      {
        "id": -8928935802,
        "entityTypeIds": [
          6
        ],
        "operator": "AND",
        "criterion": [],
        "alertTypeId": -3274136152,
        "alertTriggerId": null,
        "order": 1,
        "entityType": "ASSET_TYPE"
      }
    ]
  },
  "projectTitle": null,
  "alertSummary": "Reference point",
  "viewParams": {
    "dirty": true,
    "submitted": true
  },
  "type": "[configuration] Create alert type"

})
// body to create alert with LifecycleProject
const apiAlertWithPreventStatusNewOneVal = (alertName) =>

({
  "title": alertName,
  "projectTypeIds": [
    13
  ],
  "behaviors": [
    "PREVENT_NEW"
  ],
  "id": -4325418548,
  "alertLevel": "VIOLATION",
  "alertDefinition": {
    "id": -7602418847,
    "entityTypeIds": [
      13
    ],
    "operator": "AND",
    "criterion": [],
    "alertTypeId": -4325418548,
    "alertTriggerId": null,
    "order": 1,
    "entityType": "PROJECT_TYPE"
  },
  "alertTrigger": {
    "evaluationType": "CURRENT",
    "operator": "AND",
    "alertTypeId": -4325418548,
    "alertDefinitions": [
      {
        "id": -3967376015,
        "entityTypeIds": [
          13
        ],
        "operator": "AND",
        "criterion": [],
        "alertTypeId": -4325418548,
        "alertTriggerId": null,
        "order": 1,
        "entityType": "PROJECT_TYPE"
      }
    ]
  },
  "projectTitle": null,
  "alertSummary": "LifecycleProject",
  "viewParams": {
    "dirty": true,
    "submitted": true
  },
  "type": "[configuration] Create alert type"
})

const apiAlertWithPreventThreeStatuses = (alertName) =>
({
  "title": alertName,
  "projectTypeIds": [
    13
  ],
  "behaviors": [
    "PREVENT_NEW",
    "PREVENT_SUBMISSION",
    "PREVENT_APPROVAL"
  ],
  "id": -5315601447,
  "alertLevel": "WARNING",
  "alertDefinition": {
    "id": -2784837351,
    "entityTypeIds": [
      13
    ],
    "operator": "AND",
    "criterion": [],
    "alertTypeId": -5315601447,
    "alertTriggerId": null,
    "order": 1,
    "entityType": "PROJECT_TYPE"
  },
  "alertTrigger": {
    "evaluationType": "CURRENT",
    "operator": "AND",
    "alertTypeId": -5315601447,
    "alertDefinitions": [
      {
        "id": -4479405429,
        "entityTypeIds": [
          13
        ],
        "operator": "AND",
        "criterion": [],
        "alertTypeId": -5315601447,
        "alertTriggerId": null,
        "order": 1,
        "entityType": "PROJECT_TYPE"
      }
    ]
  },
  "projectTitle": null,
  "alertSummary": "LifecycleProject",
  "viewParams": {
    "dirty": true,
    "submitted": true
  },
  "type": "[configuration] Create alert type"
})

//    "title": "Long Story Min/Max rang",
const apiAlertDefaultValues = (alertName) =>
(
  {
    "title": alertName,
    "projectTypeIds": [
      8
    ],
    "behaviors": [],
    "id": -1801970974,
    "alertLevel": "MINOR_VIOLATION",
    "alertDefinition": {
      "id": -8926565390,
      "entityTypeIds": [
        6
      ],
      "operator": "AND",
      "criterion": [
        {
          "values": [
            "INTERNAL",
            "DEFAULT",
            "EXTERNAL",
            "MANUAL",
            "CALCULATED"
          ],
          "order": 1,
          "fieldKey": "recordType",
          "operator": "ANY",
          "selectedField": null
        },
        {
          "values": [
            "30",
            "50"
          ],
          "order": 2,
          "fieldKey": "accuracyInches",
          "operator": "IN_RANGE",
          "selectedField": null
        }
      ],
      "alertTypeId": -1801970974,
      "alertTriggerId": null,
      "order": 1,
      "entityType": "ASSET_TYPE"
    },
    "alertTrigger": {
      "operator": "AND",
      "alertTypeId": -1801970974,
      "evaluationType": "LINKED",
      "alertDefinitions": [
        {
          "id": -6611616087,
          "entityTypeIds": [
            4,
            2,
            6
          ],
          "operator": "AND",
          "criterion": [],
          "alertTypeId": -1801970974,
          "alertTriggerId": null,
          "order": 1,
          "entityType": "FORM_TYPE"
        }
      ]
    },
    "projectTitle": null,
    "alertSummary": "Asset_Without_Support  with GPS Rec Type Any of Specific Value  INTERNAL,  DEFAULT,  EXTERNAL,  MANUAL,  CALCULATED and GPS Accuracy (inch) In Range between 30 and 50 has no  Pressure Test, Capture Form, Form to Delete",
    "viewParams": {
      "dirty": true,
      "submitted": true
    },
    "type": "[configuration] Create alert type"
  }
)

//PM

// create PM with lifecicle
const apiCreatePMLifecicle = (pmName) =>
({
  "name": pmName,
  "id": -1,
  "typeId": 13,
  "customFields": {},
  "createDate": null,
  "lastUpdated": null,
  "status": "DRAFT",
  "systemType": null,
  "parentId": null,
  "geometry": null,
  "rootId": null,
  "summary": null,
  "state": {
    "message": null,
    "status": "DRAFT",
    "workflowStepTypeId": 1
  }

})

//Project types
const apiCreateProjectType = (ProjectTypeName) => ({
  "id": -7328305858,
  "layout": {
    "sections": [
      {
        "fields": [
          {
            "options": [],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": -5142172072,
            "layoutId": -2150116585,
            "sectionId": -1494994981,
            "title": "Project Name",
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
            "id": -1388076266,
            "layoutId": -2150116585,
            "sectionId": -1494994981,
            "title": "myText",
            "placeholder": null,
            "esriName": "",
            "mandatory": false,
            "order": 2,
            "type": "TEXT",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
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
            "valueWhen": null,
            "validation": {
              "maxLength": 50
            },
            "maxLength": 50
          }
        ],
        "id": -1494994981,
        "layoutId": -2150116585,
        "title": "Details",
        "order": 1,
        "type": "SECTION"
      }
    ],
    "id": -2150116585,
    "key": null,
    "draft": false
  },
  "title": ProjectTypeName,
  "order": 123,
  "symbol": "abandonment",
  "materialBehavior": "ENABLED",
  "visibleWhen": null,
  "valueWhen": null,
  "requireWhen": null,
  "type": "PROJECT_TYPE",
  "rootType": true,
  "workflowId": 1,
  "components": {},
  "helpInfo": null,
  "previewCard": {
    "title": "<|name| >",
    "subtitle": "<|:lastUpdated| >",
    "secondaryTitle": "<|entityTitle| >",
    "secondarySubtitle": ""
  }
})

const apiCreateProjectTypeForBulkTesting = {
  "id": -7328305858,
  "layout": {
    "sections": [
      {
        "fields": [
          {
            "options": [],
            "sharedListId": null,
            "barcodeRegex": null,
            "id": -5142172072,
            "layoutId": -2150116585,
            "sectionId": -1494994981,
            "title": "Project Name",
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
            "id": -1388076266,
            "layoutId": -2150116585,
            "sectionId": -1494994981,
            "title": "myText",
            "placeholder": null,
            "esriName": "",
            "mandatory": false,
            "order": 2,
            "type": "TEXT",
            "behavior": "NORMAL",
            "system": false,
            "partOfCatalog": false,
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
            "valueWhen": null,
            "validation": {
              "maxLength": 50
            },
            "maxLength": 50
          }
        ],
        "id": -1494994981,
        "layoutId": -2150116585,
        "title": "Details",
        "order": 1,
        "type": "SECTION"
      }
    ],
    "id": -2150116585,
    "key": null,
    "draft": false
  },
  "title": "Project_For_BULK",
  "order": 123,
  "symbol": "abandonment",
  "materialBehavior": "ENABLED",
  "visibleWhen": null,
  "valueWhen": null,
  "requireWhen": null,
  "type": "PROJECT_TYPE",
  "rootType": true,
  "workflowId": 1,
  "components": {},
  "helpInfo": null,
  "previewCard": {
    "title": "<|name| >",
    "subtitle": "<|:lastUpdated| >",
    "secondaryTitle": "<|entityTitle| >",
    "secondarySubtitle": ""
  }
}

const apiAlertCreateProjectTypeForBulkTesting = (ProjectTypeID, fieldID) => ({
  "title": "zAlert: Project Type For Bulk Testing",
  "projectTypeIds": [
    ProjectTypeID
  ],
  "behaviors": [
    "PREVENT_NEW"
  ],
  "id": -8639965216,
  "alertLevel": "VIOLATION",
  "alertDefinition": {
    "id": -715923956,
    "entityTypeIds": [
      ProjectTypeID
    ],
    "operator": "AND",
    "criterion": [],
    "alertTypeId": -8639965216,
    "alertTriggerId": null,
    "order": 1,
    "entityType": "PROJECT_TYPE"
  },
  "alertTrigger": {
    "operator": "AND",
    "alertTypeId": -8639965216,
    "evaluationType": "CURRENT",
    "alertDefinitions": [
      {
        "id": -3446137061,
        "entityTypeIds": [
          ProjectTypeID
        ],
        "operator": "AND",
        "criterion": [
          {
            "values": [],
            "order": 1,
            "fieldKey": fieldID,
            "operator": "NULL",
            "selectedField": null
          }
        ],
        "alertTypeId": -8639965216,
        "alertTriggerId": null,
        "order": 1,
        "entityType": "PROJECT_TYPE"
      }
    ]
  },
  "projectTitle": null,
  "alertSummary": "Project Type For Bulk Testing   with myText No Value",
  "viewParams": {
    "dirty": true,
    "submitted": true
  },
  "type": "[configuration] Create alert type"
})

const apiPMPolicyOnly = {
  "name": "PM_Policy_Only",
  "readonly": false,
  "restricted": false,
  "permissions": {
    "app:project_management": {
      "actions": [
        "access"
      ]
    },
    "config:project_type:7": {
      "actions": [
        "transition:draft"
      ]
    },
    "config:project_type:8": {
      "actions": [
        "delete:*",
        "full_edit:draft",
        "transition:new",
        "transition:draft"
      ]
    },
    "config:project_type:9": {
      "actions": [
        "assign_and_permit:*",
        "transition:new",
        "transition:draft"
      ]
    }
  }
}

const apiForPartialSuccessFail = {
  "name": "a For Partial Success(will fail)",
  "id": -1,
  "typeId": 8,
  "customFields": {
    "customField291": "2022-02-10T10:18:08.180Z"
  },
  "createDate": null,
  "lastUpdated": null,
  "status": "DRAFT",
  "systemType": null,
  "parentId": null,
  "geometry": null,
  "rootId": null,
  "summary": null,
  "state": {
    "message": null,
    "status": "DRAFT",
    "workflowStepTypeId": 1
  },
  "assignment": {
    "userIds": [
      8
    ],
    "groupIds": []
  },
  "permission": {
    "userIds": [
      8
    ],
    "groupIds": []
  },
  "allowAll": false
}

const apiForPartialSuccessPass = {
  "name": "a For Partial Success(will pass)",
  "id": -1,
  "typeId": 8,
  "customFields": {
    "customField291": "2022-02-10T10:18:08.180Z"
  },
  "createDate": null,
  "lastUpdated": null,
  "status": "DRAFT",
  "systemType": null,
  "parentId": null,
  "geometry": null,
  "rootId": null,
  "summary": null,
  "state": {
    "message": null,
    "status": "DRAFT",
    "workflowStepTypeId": 1
  },
  "allowAll": true
}

const api1NotPermitted = {
  "name": "1 Not Permited",
  "id": -1,
  "typeId": 7,
  "customFields": {},
  "createDate": null,
  "lastUpdated": null,
  "status": "DRAFT",
  "systemType": null,
  "parentId": null,
  "geometry": null,
  "rootId": null,
  "summary": null,
  "state": {
    "message": null,
    "status": "DRAFT",
    "workflowStepTypeId": 1
  }
}

const emailNotificationAssignment = (emailTitle, projectTypeID) => ({
  "id": -1,
  "title": emailTitle,
  "recipientTypes": [
    "ASSIGNEES",
    "CONTRIBUTORS",
    "PERMITTED"
  ],
  "messageType": "EMAIL",
  "distributionListIds": [

  ],
  "templateId": 1,
  "definition": {
    "id": -1,
    "typeId": -1,
    "entityType": "PROJECT_TYPE",
    "entityTypeIds": [
      projectTypeID
    ],
    "conditions": [
      {
        "key": "assignment",
        "type": "ANY"
      }
    ]
  }
});

const emailNotificationStatus = (emailTitle, projectTypeID) => ({
  "id": -1,
  "title": emailTitle,
  "recipientTypes": [
    "ASSIGNEES",
    "CONTRIBUTORS",
    "PERMITTED"
  ],
  "messageType": "EMAIL",
  "distributionListIds": [

  ],
  "templateId": 2,
  "definition": {
    "id": -1,
    "typeId": -1,
    "entityType": "PROJECT_TYPE",
    "entityTypeIds": [
      projectTypeID
    ],
    "conditions": [
      {
        "key": "stepTypeId",
        "type": "ANY"
      }
    ]
  }
});

const bodyForCreateProject = (typeID, status, projectName) => ({
  "id": -1,
  "typeId": typeID,
  "status": status,
  "name": projectName,
  "geometry": null,
  "parentId": null,
  "systemType": "Main",
  "customFields": {
  }

});

const bodyCreateTag = (title, category = "STRING") => ({
  "title":title,
  "category":category
})

module.exports = {
  apiPolicyUnlockScanned, createAssetBody, createProjectBody, createProjectWitAssetBody, createAlertWithAssetBody,
  apiCreateAPolicyWithSpecificFieldDate1, apiCreateAPolicyWithAllFieldsYes, userWithPolicyBody, apiCreatePolicySpecificTypeWithAllFieldsDate,
  apiCreatePrPermissionPolicyAllTypes, apiCreateAPolicyWithSpecificFieldDate2, apiPolicySpecificTypesAllEditDetails,
  apiCreateUserWithOnePolicy, createProjectBodyWithList_NVIEW26308, apiDeleteFieldFromContent_NVIEW26024_1, apiDeleteFieldFromContent_NVIEW26024_2,
  apiAlertWithPreventStatusNewOneVal, apiCreatePMLifecicle, apiAlertWithPreventThreeStatuses, apiAlertDefaultValues, apiCreateProjectTypeForBulkTesting,
  apiAlertCreateProjectTypeForBulkTesting, createAssetForSharedList, apiPMPolicyOnly, apiAlertv2JointsAssetType, apiAlertv2JointsJointType,
  apiAlertv2Form, apiAlertv2Asset, apiAlertv2LeakReport, createAssetBodyv2, createFormTypeBodyV2, apiForPartialSuccessFail, apiForPartialSuccessPass,
  api1NotPermitted, bodyCreateEmptyGroup, emailNotificationAssignment, emailNotificationStatus, apiCreateProjectType, bodyForCreateProject, bodyCreateTag
}
