const url = '/api/v1/config/project-types'

const data = [{
    "id": -244993699,
    "layout": {
      "sections": [
        {
          "fields": [
            {
              "options": [],
              "barcodeRegex": null,
              "id": -6754560621,
              "layoutId": -2225227841,
              "sectionId": -3767455564,
              "title": "Project Name",
              "key": "name",
              "placeholder": "",
              "esriName": "WorkRequestNumber",
              "mandatory": false,
              "order": 1,
              "type": "AUTO_GENERATE",
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
                "maxLength": 50
              },
              "maxLength": 50
            },
            {
              "options": [
                {
                  "id": -987436848,
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
                  "id": -8405657470,
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
              "id": -2483912534,
              "layoutId": -2225227841,
              "sectionId": -3767455564,
              "title": "System Type",
              "key": "systemType",
              "placeholder": "",
              "esriName": "SystemType",
              "mandatory": false,
              "order": 2,
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
              "options": [],
              "barcodeRegex": null,
              "id": -8677975300,
              "layoutId": -2225227841,
              "sectionId": -3767455564,
              "title": "State",
              "placeholder": "",
              "esriName": "Reserved01",
              "mandatory": false,
              "order": 3,
              "type": "TEXT",
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
                "maxLength": 50
              },
              "maxLength": 50
            },
            {
              "options": [
                {
                  "id": -2182131078,
                  "title": "East Bay",
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
                  "id": -2490521661,
                  "title": "Diablo",
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
                  "id": -7216057568,
                  "title": "Northern",
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
              "id": -7940065978,
              "layoutId": -2225227841,
              "sectionId": -3767455564,
              "title": "Division",
              "placeholder": "",
              "esriName": "Reserved02",
              "mandatory": false,
              "order": 4,
              "type": "SELECTION",
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
            },
            {
              "options": [],
              "barcodeRegex": null,
              "id": -3757171398,
              "layoutId": -2225227841,
              "sectionId": -3767455564,
              "title": "Leak #",
              "placeholder": "",
              "esriName": "Reserved03",
              "mandatory": false,
              "order": 5,
              "type": "NUMBER",
              "behavior": "NORMAL",
              "system": false,
              "customData": {
                "maximumWholeValue": 999999999999,
                "minimumWholeValue": -999999999999,
                "maxDecimalPoints": 4,
                "mandatoryDecimalPoints": 0
              },
              "defaultValues": null,
              "helpInfo": {
                "title": "Gas leak",
                "paragraph": "A gas leak refers to an unintended leak of natural gas or another gaseous product from a pipeline or other containment into any area where the gas should not be present. Gas leaks can be hazardous to health and the environment. Even a small leak into a building or other confined space may gradually build up an explosive or lethal concentration of gas.[1] Leaks of natural gas and refrigerant gas into the atmosphere are especially harmful due to their global warming potential and ozone depletion potential"
              },
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
            }
          ],
          "id": -3767455564,
          "layoutId": -2225227841,
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
              "id": -5535155691,
              "layoutId": -2225227841,
              "sectionId": -1868793892,
              "title": "Field Engineer",
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
              "options": [],
              "barcodeRegex": null,
              "id": -6899378812,
              "layoutId": -2225227841,
              "sectionId": -1868793892,
              "title": "Inspection Date",
              "placeholder": "",
              "esriName": "Reserved05",
              "mandatory": false,
              "order": 2,
              "type": "DATE",
              "behavior": "NORMAL",
              "system": false,
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
                "isOn": null,
                "operator": "SINGLE",
                "conditions": [
                  {
                    "values": [],
                    "entityId": -5535155691,
                    "entityType": "FIELD",
                    "operator": "NOT_NULL"
                  }
                ]
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
              "id": -4409926973,
              "layoutId": -2225227841,
              "sectionId": -1868793892,
              "title": "Signature",
              "placeholder": "",
              "esriName": "Reserved06",
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
              "id": -7178453726,
              "layoutId": -2225227841,
              "sectionId": -1868793892,
              "title": "",
              "placeholder": "",
              "esriName": "Reserved07",
              "mandatory": false,
              "order": 4,
              "type": "STATEMENT",
              "behavior": "NORMAL",
              "system": false,
              "customData": {
                "statementText": "Installed according to ABC standard"
              },
              "defaultValues": [],
              "helpInfo": {
                "title": "Gas Compliance Certificate",
                "paragraph": "A gas compliance certificate is an extremely important document you will receive whenever gas is installed on your property or premises. Gas compliance certificates can and will only be supplied by a certified gas fitter upon completion of any gas installation, amendment, modification or extension to an existing gas service or upon a new gas installation.\n\nIt’s important to understand the difference between a gas compliance certificate and a gas inspection certificate. If your property is connected to a mains natural gas supply your gas fitter will provide a certificate of compliance when work is done on a gas installation in your home or premises. If your property uses gas bottles which are refilled on site or exchanged, a certificate of inspection will be issued by your gas fitter when work is carried out on gas installations."
              },
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
          "id": -1868793892,
          "layoutId": -2225227841,
          "title": "Inspection",
          "decoration": true,
          "order": 2,
          "viewParams": {
            "placeholder": "* Section *"
          },
          "type": "SECTION"
        }
      ],
      "id": -2225227841,
      "key": "",
      "draft": false
    },
    "title": "Construction",
    "order": 1,
    "symbol": "construction-site",
    "visibleWhen": null,
    "valueWhen": null,
    "requireWhen": null,
    "type": "PROJECT_TYPE",
    "rootType": true,
    "components": {
      "ASSET_TYPE": [
        {
          "id": 5,
          "visible": true,
          "required": false
        },
        {
          "id": 4,
          "visible": true,
          "required": false
        },
        {
          "id": 6,
          "visible": true,
          "required": false
        },
        {
          "id": 7,
          "visible": true,
          "required": false
        }
      ],
      "FORM_TYPE": [
        {
          "id": 1,
          "visible": true,
          "required": false
        },
        {
          "id": 2,
          "visible": true,
          "required": false
        },
        {
          "id": 3,
          "visible": true,
          "required": false
        }
      ],
      "MODULE": [
        {
          "id": 2,
          "visible": true,
          "required": false
        }
      ]
    },
    "checklistLayout": null,
    "helpInfo": {
      "title": "Construction site",
      "paragraph": "A construction site is an area or piece of land on which construction works are being carried out."
    },
    "previewCard": {
      "title": "",
      "subtitle": "",
      "secondaryTitle": "",
      "secondarySubtitle": ""
    }
  }

]

module.exports = {data, url}