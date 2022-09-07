const url = '/api/v1/config/mapping/asset-types'

const data = [{
    "id": -7493991542,
    "layout": {
      "sections": [
        {
          "fields": [
            {
              "options": [
                {
                  "id": -1158161349,
                  "title": "Main",
                  "order": 1,
                  "defaultOption": false,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -364543481,
                  "title": "Service",
                  "order": 2,
                  "defaultOption": false,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                }
              ],
              "barcodeRegex": null,
              "id": -2178524045,
              "layoutId": -5632852401,
              "sectionId": -8791876794,
              "title": "System Type",
              "key": "systemType",
              "placeholder": "",
              "esriName": "SystemType",
              "mandatory": false,
              "order": 1,
              "type": "SELECTION",
              "behavior": "LOCKED",
              "system": true,
              "partOfCatalog": false,
              "isCatalogIndex": null,
              "active": true,
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
            },
            {
              "options": [
                {
                  "id": -1545584599,
                  "title": "Existing Feature",
                  "order": 1,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -7632797120,
                  "title": "Other",
                  "order": 2,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -2558208979,
                  "title": "Pipe Support",
                  "order": 3,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -8936128782,
                  "title": "Street Monument",
                  "order": 4,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                }
              ],
              "barcodeRegex": null,
              "id": -689811164,
              "layoutId": -5632852401,
              "sectionId": -8791876794,
              "title": "Reference Point Type",
              "placeholder": "",
              "esriName": "Reserved01",
              "mandatory": false,
              "order": 2,
              "type": "LIST",
              "behavior": "NORMAL",
              "system": false,
              "partOfCatalog": false,
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
                "maxLength": 2000
              },
              "maxLength": 2000
            },
            {
              "options": [],
              "barcodeRegex": null,
              "id": -7588365461,
              "layoutId": -5632852401,
              "sectionId": -8791876794,
              "title": "Other Reference Point Type",
              "placeholder": "",
              "esriName": "Reserved02",
              "mandatory": false,
              "order": 3,
              "type": "TEXT",
              "behavior": "NORMAL",
              "system": false,
              "partOfCatalog": false,
              "customData": null,
              "defaultValues": [],
              "helpInfo": null,
              "visibleWhen": {
                "isOn": null,
                "operator": "SINGLE",
                "conditions": [
                  {
                    "values": [
                      "-7632797120"
                    ],
                    "entityId": -689811164,
                    "entityType": "FIELD",
                    "operator": "ANY"
                  }
                ]
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
              "barcodeRegex": null,
              "id": -4898491365,
              "layoutId": -5632852401,
              "sectionId": -8791876794,
              "title": "Date",
              "placeholder": "",
              "esriName": "Reserved05",
              "mandatory": false,
              "order": 4,
              "type": "DATE",
              "behavior": "NORMAL",
              "system": false,
              "partOfCatalog": false,
              "customData": null,
              "defaultValues": [
                "false"
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
            }
          ],
          "id": -8791876794,
          "layoutId": -5632852401,
          "title": "Details",
          "decoration": true,
          "order": 1,
          "type": "SECTION"
        },
        {
          "fields": [
            {
              "options": [],
              "barcodeRegex": null,
              "id": -6298669286,
              "layoutId": -5632852401,
              "sectionId": -617007671,
              "title": "Comments",
              "placeholder": "",
              "esriName": "Comments",
              "mandatory": false,
              "order": 1,
              "type": "MULTI_LINE_TEXT",
              "behavior": "NORMAL",
              "system": false,
              "partOfCatalog": false,
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
                "maxLength": 250
              },
              "maxLength": 250
            },
            {
              "options": [],
              "barcodeRegex": null,
              "id": -3013343973,
              "layoutId": -5632852401,
              "sectionId": -617007671,
              "title": "Pictures",
              "placeholder": "",
              "esriName": "N/A",
              "mandatory": false,
              "order": 2,
              "type": "PHOTO",
              "behavior": "NORMAL",
              "system": false,
              "customData": null,
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
              "id": -2825657024,
              "layoutId": -5632852401,
              "sectionId": -617007671,
              "title": "Signature",
              "placeholder": "",
              "esriName": "Reserved04",
              "mandatory": false,
              "order": 3,
              "type": "SIGNATURE",
              "behavior": "NORMAL",
              "system": false,
              "customData": null,
              "defaultValues": [],
              "helpInfo": null,
              "visibleWhen": {
                "isOn": true,
                "operator": null,
                "conditions": null
              },
              "requireWhen": {
                "isOn": null,
                "operator": "SINGLE",
                "conditions": [
                  {
                    "values": [],
                    "entityId": -7588365461,
                    "entityType": "FIELD",
                    "operator": "NOT_NULL"
                  }
                ]
              },
              "valueWhen": null,
              "validation": {
                "maxLength": 50
              },
              "maxLength": 50
            }
          ],
          "id": -617007671,
          "layoutId": -5632852401,
          "title": "Notes & Comments",
          "decoration": true,
          "order": 2,
          "viewParams": {
            "placeholder": "* Section *"
          },
          "type": "SECTION"
        }
      ],
      "id": -5632852401,
      "key": "",
      "draft": false
    },
    "title": "Reference point",
    "order": 3,
    "symbol": "reference-point",
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
    "type": "ASSET_TYPE",
    "geometryType": "POINT",
    "partOfCatalog": false,
    "helpInfo": {
      "title": "Reference point",
      "paragraph": "Reference point, a geometrical point used to define the location of another point"
    },
    "previewCard": {
      "title": "<|entityTitle| >",
      "subtitle": "<|:lastUpdated| >",
      "secondaryTitle": "",
      "secondarySubtitle": ""
    }
  },
  {
    "id": -5094094470,
    "layout": {
      "sections": [
        {
          "fields": [
            {
              "options": [
                {
                  "id": -149540221,
                  "title": "Main",
                  "order": 1,
                  "defaultOption": false,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -6261890700,
                  "title": "Service",
                  "order": 2,
                  "defaultOption": false,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                }
              ],
              "barcodeRegex": null,
              "id": -2832142356,
              "layoutId": -3776031008,
              "sectionId": -6500673584,
              "title": "System Type",
              "key": "systemType",
              "placeholder": "",
              "esriName": "SystemType",
              "mandatory": false,
              "order": 1,
              "type": "SELECTION",
              "behavior": "LOCKED",
              "system": true,
              "partOfCatalog": false,
              "isCatalogIndex": null,
              "active": true,
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
            },
            {
              "options": [
                {
                  "id": -378330217,
                  "title": "Centerline of the Street",
                  "order": 1,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -2661743096,
                  "title": "Property Line",
                  "order": 2,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -425636579,
                  "title": "Edge of Pavement",
                  "order": 3,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -4743916048,
                  "title": "Face of Curb",
                  "order": 4,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -8923746966,
                  "title": "Back of Walk",
                  "order": 5,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -438799575,
                  "title": "Public Utility Easement",
                  "order": 6,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -6376753047,
                  "title": "Right of Way",
                  "order": 7,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -6997854915,
                  "title": "Other",
                  "order": 8,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                }
              ],
              "barcodeRegex": null,
              "id": -7727415090,
              "layoutId": -3776031008,
              "sectionId": -6500673584,
              "title": "Reference Line Type",
              "placeholder": "",
              "esriName": "Reserved01",
              "mandatory": false,
              "order": 2,
              "type": "LIST",
              "behavior": "NORMAL",
              "system": false,
              "partOfCatalog": false,
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
                "maxLength": 2000
              },
              "maxLength": 2000
            },
            {
              "options": [],
              "barcodeRegex": null,
              "id": -2774498138,
              "layoutId": -3776031008,
              "sectionId": -6500673584,
              "title": "Length in ft",
              "placeholder": "",
              "esriName": "Reserved02",
              "mandatory": false,
              "order": 3,
              "type": "NUMBER",
              "behavior": "NORMAL",
              "system": false,
              "partOfCatalog": false,
              "customData": {
                "maximumWholeValue": 9999999,
                "minimumWholeValue": -999999999999,
                "maxDecimalPoints": 4,
                "mandatoryDecimalPoints": 0
              },
              "defaultValues": [
                "1"
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
              "options": [
                {
                  "id": -8326823362,
                  "title": "Service",
                  "order": 1,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -4540375,
                  "title": "Main",
                  "order": 2,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -63783089,
                  "title": "Other",
                  "order": 3,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                }
              ],
              "barcodeRegex": null,
              "id": -7588063988,
              "layoutId": -3776031008,
              "sectionId": -6500673584,
              "title": "Type",
              "placeholder": "",
              "esriName": "Reserved03",
              "mandatory": false,
              "order": 4,
              "type": "SELECTION",
              "behavior": "NORMAL",
              "system": false,
              "partOfCatalog": false,
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
                "maxLength": 2000
              },
              "maxLength": 2000
            },
            {
              "options": [],
              "barcodeRegex": null,
              "id": -8499119807,
              "layoutId": -3776031008,
              "sectionId": -6500673584,
              "title": "Approved",
              "placeholder": "",
              "esriName": "Reserved05",
              "mandatory": false,
              "order": 5,
              "type": "CHECKBOX",
              "behavior": "NORMAL",
              "system": false,
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
                "maxLength": 2000
              },
              "maxLength": 2000
            }
          ],
          "id": -6500673584,
          "layoutId": -3776031008,
          "title": "Details",
          "decoration": true,
          "order": 1,
          "type": "SECTION"
        },
        {
          "fields": [
            {
              "options": [],
              "barcodeRegex": null,
              "id": -3098614352,
              "layoutId": -3776031008,
              "sectionId": -1984094973,
              "title": "Division",
              "placeholder": "",
              "esriName": "Reserved04",
              "mandatory": false,
              "order": 1,
              "type": "SCANNER",
              "behavior": "NORMAL",
              "system": false,
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
                "maxLength": 250
              },
              "maxLength": 250
            },
            {
              "options": [
                {
                  "id": -6185261217,
                  "title": "Bridge",
                  "order": 1,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -4759925842,
                  "title": "Other",
                  "order": 2,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -7176047944,
                  "title": "Pipeline",
                  "order": 3,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -968681731,
                  "title": "Railroad",
                  "order": 4,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -6691579518,
                  "title": "Road",
                  "order": 5,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                },
                {
                  "id": -2967835714,
                  "title": "Water",
                  "order": 6,
                  "active": true,
                  "viewParams": {
                    "currentState": "normal",
                    "status": "",
                    "actions": [
                      "inactive",
                      "star",
                      "edit",
                      "delete"
                    ],
                    "placeholder": "",
                    "tags": []
                  }
                }
              ],
              "barcodeRegex": null,
              "id": -149103476,
              "layoutId": -3776031008,
              "sectionId": -1984094973,
              "title": "Crossing types",
              "placeholder": "",
              "esriName": "Reserved06",
              "mandatory": false,
              "order": 2,
              "type": "MULTI_SELECT_LIST",
              "behavior": "NORMAL",
              "system": false,
              "partOfCatalog": false,
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
                "maxLength": 2000
              },
              "maxLength": 2000
            },
            {
              "options": [],
              "barcodeRegex": null,
              "id": -4355271546,
              "layoutId": -3776031008,
              "sectionId": -1984094973,
              "title": "",
              "placeholder": "",
              "esriName": "Reserved07",
              "mandatory": false,
              "order": 3,
              "type": "STATEMENT",
              "behavior": "NORMAL",
              "system": false,
              "customData": {
                "statementText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ullamcorper mi, at gravida erat. Integer nec erat malesuada, sodales nibh a, venenatis felis. Proin luctus hendrerit velit in libero"
              },
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
          "id": -1984094973,
          "layoutId": -3776031008,
          "title": "Job Site",
          "decoration": true,
          "order": 2,
          "viewParams": {
            "placeholder": "* Section *"
          },
          "type": "SECTION"
        }
      ],
      "id": -3776031008,
      "key": "",
      "draft": false
    },
    "title": "Reference Line",
    "order": 4,
    "symbol": "reference-line",
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
    "type": "ASSET_TYPE",
    "geometryType": "LINE",
    "partOfCatalog": false,
    "helpInfo": null,
    "previewCard": {
      "title": "<|entityTitle| >",
      "subtitle": "<|:lastUpdated| >",
      "secondaryTitle": "",
      "secondarySubtitle": ""
    }
  }

]

module.exports = {data, url}