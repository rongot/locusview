const url = '/api/v1/config/mapping/form-types'

const data = [
    {
        "id": -106137087,
        "layout": {
          "sections": [
            {
              "fields": [
                {
                  "options": [],
                  "barcodeRegex": null,
                  "id": -7030530328,
                  "layoutId": -3361923661,
                  "sectionId": -179420269,
                  "title": "Supervisor/Inspector",
                  "placeholder": "",
                  "esriName": "Reserved01",
                  "mandatory": false,
                  "order": 1,
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
                }
              ],
              "id": -179420269,
              "layoutId": -3361923661,
              "title": "Details",
              "decoration": true,
              "order": 1,
              "type": "SECTION"
            },
            {
              "fields": [
                {
                  "options": [
                    {
                      "id": -3399037492,
                      "title": "Maine",
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
                      "id": -7836920979,
                      "title": "New Hampshire",
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
                      "id": -7164232051,
                      "title": "Massachusetts",
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
                  "id": -1401933436,
                  "layoutId": -3361923661,
                  "sectionId": -8018022699,
                  "title": "State",
                  "placeholder": "",
                  "esriName": "Reserved02",
                  "mandatory": false,
                  "order": 1,
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
                  "id": -6296620103,
                  "layoutId": -3361923661,
                  "sectionId": -8018022699,
                  "title": "Town",
                  "placeholder": "",
                  "esriName": "Reserved03",
                  "mandatory": false,
                  "order": 2,
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
                  "options": [],
                  "barcodeRegex": null,
                  "id": -6703276309,
                  "layoutId": -3361923661,
                  "sectionId": -8018022699,
                  "title": "Address",
                  "placeholder": "",
                  "esriName": "Comments",
                  "mandatory": false,
                  "order": 3,
                  "type": "MULTI_LINE_TEXT",
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
                }
              ],
              "id": -8018022699,
              "layoutId": -3361923661,
              "title": "Location",
              "decoration": true,
              "order": 2,
              "viewParams": {
                "placeholder": "* Section *"
              },
              "type": "SECTION"
            },
            {
              "fields": [
                {
                  "options": [],
                  "barcodeRegex": null,
                  "id": -3383407364,
                  "layoutId": -3361923661,
                  "sectionId": -1474689197,
                  "title": "Tester name/ID",
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
                      "id": -2866223608,
                      "title": "NTC",
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
                      "id": -2223419823,
                      "title": "LVS",
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
                      "id": -5660683398,
                      "title": "UTL",
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
                      "id": -536288219,
                      "title": "ATS",
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
                      "id": -8800224435,
                      "title": "WGL",
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
                      "id": -7548243816,
                      "title": "PEC",
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
                      "id": -6559445168,
                      "title": "PGE",
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
                      "id": -860846532,
                      "title": "SJG",
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
                  "id": -7799638695,
                  "layoutId": -3361923661,
                  "sectionId": -1474689197,
                  "title": "Company",
                  "placeholder": "",
                  "esriName": "Reserved05",
                  "mandatory": false,
                  "order": 2,
                  "type": "LIST",
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
                  "id": -4168350139,
                  "layoutId": -3361923661,
                  "sectionId": -1474689197,
                  "title": "Test Date",
                  "placeholder": "",
                  "esriName": "Reserved06",
                  "mandatory": false,
                  "order": 3,
                  "type": "DATE",
                  "behavior": "NORMAL",
                  "system": false,
                  "customData": {
                    "maxDate": "today"
                  },
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
                  "options": [],
                  "barcodeRegex": null,
                  "id": -3411703865,
                  "layoutId": -3361923661,
                  "sectionId": -1474689197,
                  "title": "Passed",
                  "placeholder": "",
                  "esriName": "Reserved07",
                  "mandatory": false,
                  "order": 4,
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
              "id": -1474689197,
              "layoutId": -3361923661,
              "title": "Test Info",
              "decoration": true,
              "order": 3,
              "viewParams": {
                "placeholder": "* Section *"
              },
              "type": "SECTION"
            }
          ],
          "id": -3361923661,
          "key": "",
          "draft": false
        },
        "title": "Pressure Test",
        "order": 1,
        "symbol": "pressure-test",
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
      },
      {
        "id": -3747890865,
        "layout": {
          "sections": [
            {
              "fields": [
                {
                  "options": [
                    {
                      "id": -7414758573,
                      "title": "New Phased Service",
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
                      "id": -8429608322,
                      "title": "New Service",
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
                      "id": -7375899695,
                      "title": "Replacement",
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
                      "id": -1185483992,
                      "title": "Transfer",
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
                      "id": -4422611095,
                      "title": "Alteration",
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
                      "id": -1127256873,
                      "title": "Repair",
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
                      "id": -6801984350,
                      "title": "Deactivation",
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
                      "id": -3032448072,
                      "title": "Uprate",
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
                    },
                    {
                      "id": -3939882512,
                      "title": "Convert",
                      "order": 9,
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
                      "id": -3546098975,
                      "title": "Other",
                      "order": 10,
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
                  "id": -2921724791,
                  "layoutId": -5421690543,
                  "sectionId": -3463705340,
                  "title": "Job Type",
                  "placeholder": "",
                  "esriName": "Reserved01",
                  "mandatory": false,
                  "order": 1,
                  "type": "MULTI_SELECT_LIST",
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
                  "options": [
                    {
                      "id": -7756650712,
                      "title": "Stub",
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
                      "id": -4417473974,
                      "title": "Stub Completion",
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
                    }
                  ],
                  "barcodeRegex": null,
                  "id": -5253809281,
                  "layoutId": -5421690543,
                  "sectionId": -3463705340,
                  "title": "New Phased Service Type",
                  "placeholder": "",
                  "esriName": "Reserved02",
                  "mandatory": false,
                  "order": 2,
                  "type": "MULTI_SELECT_LIST",
                  "behavior": "NORMAL",
                  "system": false,
                  "customData": null,
                  "defaultValues": [],
                  "helpInfo": null,
                  "visibleWhen": {
                    "isOn": null,
                    "operator": "SINGLE",
                    "conditions": [
                      {
                        "values": [
                          "-7414758573"
                        ],
                        "entityId": -2921724791,
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
                    "maxLength": 2000
                  },
                  "maxLength": 2000
                },
                {
                  "options": [
                    {
                      "id": -6824786627,
                      "title": "Full Service",
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
                      "id": -3362051805,
                      "title": "Branch Service",
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
                      "id": -1191233593,
                      "title": "Mother Service",
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
                  "id": -8552874820,
                  "layoutId": -5421690543,
                  "sectionId": -3463705340,
                  "title": "Service Type",
                  "placeholder": "",
                  "esriName": "Reserved03",
                  "mandatory": false,
                  "order": 3,
                  "type": "SELECTION",
                  "behavior": "NORMAL",
                  "system": false,
                  "customData": null,
                  "defaultValues": [],
                  "helpInfo": null,
                  "visibleWhen": {
                    "isOn": null,
                    "operator": "SINGLE",
                    "conditions": [
                      {
                        "values": [
                          "-8429608322",
                          "-6801984350"
                        ],
                        "entityId": -2921724791,
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
                    "maxLength": 2000
                  },
                  "maxLength": 2000
                },
                {
                  "options": [
                    {
                      "id": -7818815278,
                      "title": "Full Service",
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
                      "id": -5914439875,
                      "title": "Branch Service",
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
                      "id": -58246060,
                      "title": "Mother Service",
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
                      "id": -3201201669,
                      "title": "Partial Service",
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
                      "id": -3905004050,
                      "title": "Riser",
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
                    }
                  ],
                  "barcodeRegex": null,
                  "id": -8082794928,
                  "layoutId": -5421690543,
                  "sectionId": -3463705340,
                  "title": "Replacement Type",
                  "placeholder": "",
                  "esriName": "Reserved04",
                  "mandatory": false,
                  "order": 4,
                  "type": "MULTI_SELECT_LIST",
                  "behavior": "NORMAL",
                  "system": false,
                  "customData": null,
                  "defaultValues": [],
                  "helpInfo": null,
                  "visibleWhen": {
                    "isOn": null,
                    "operator": "SINGLE",
                    "conditions": [
                      {
                        "values": [
                          "-7375899695"
                        ],
                        "entityId": -2921724791,
                        "entityType": "FIELD",
                        "operator": "ANY"
                      }
                    ]
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
                  "id": -7311004096,
                  "layoutId": -5421690543,
                  "sectionId": -3463705340,
                  "title": "Mother Service",
                  "placeholder": "",
                  "esriName": "Reserved05",
                  "mandatory": false,
                  "order": 5,
                  "type": "TEXT",
                  "behavior": "NORMAL",
                  "system": false,
                  "customData": null,
                  "defaultValues": [],
                  "helpInfo": null,
                  "visibleWhen": {
                    "isOn": null,
                    "operator": "OR",
                    "conditions": [
                      {
                        "values": [
                          "-3362051805"
                        ],
                        "entityId": -8552874820,
                        "entityType": "FIELD",
                        "operator": "ANY"
                      },
                      {
                        "values": [
                          "-5914439875"
                        ],
                        "entityId": -8082794928,
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
                  "id": -25439645,
                  "layoutId": -5421690543,
                  "sectionId": -3463705340,
                  "title": "Deactivation Reason",
                  "placeholder": "",
                  "esriName": "Reserved06",
                  "mandatory": false,
                  "order": 6,
                  "type": "TEXT",
                  "behavior": "NORMAL",
                  "system": false,
                  "customData": null,
                  "defaultValues": [],
                  "helpInfo": null,
                  "visibleWhen": {
                    "isOn": null,
                    "operator": "SINGLE",
                    "conditions": [
                      {
                        "values": [
                          "-6801984350"
                        ],
                        "entityId": -2921724791,
                        "entityType": "FIELD",
                        "operator": "ANY"
                      }
                    ]
                  },
                  "requireWhen": {
                    "isOn": null,
                    "operator": "SINGLE",
                    "conditions": [
                      {
                        "values": [
                          "-3032448072"
                        ],
                        "entityId": -2921724791,
                        "entityType": "FIELD",
                        "operator": "AT_LEAST"
                      }
                    ]
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
                  "id": -8194902621,
                  "layoutId": -5421690543,
                  "sectionId": -3463705340,
                  "title": "Other Type code",
                  "placeholder": "",
                  "esriName": "Reserved07",
                  "mandatory": false,
                  "order": 7,
                  "type": "SCANNER",
                  "behavior": "NORMAL",
                  "system": false,
                  "customData": null,
                  "defaultValues": [],
                  "helpInfo": null,
                  "visibleWhen": {
                    "isOn": null,
                    "operator": "SINGLE",
                    "conditions": [
                      {
                        "values": [
                          "-3546098975"
                        ],
                        "entityId": -2921724791,
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
                    "maxLength": 250
                  },
                  "maxLength": 250
                }
              ],
              "id": -3463705340,
              "layoutId": -5421690543,
              "title": "Details",
              "decoration": true,
              "order": 1,
              "type": "SECTION"
            }
          ],
          "id": -5421690543,
          "key": "",
          "draft": false
        },
        "title": "Job Type",
        "order": 2,
        "symbol": "dig",
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
          "subtitle": "<|:createDate| ><|:lastUpdated| >",
          "secondaryTitle": "",
          "secondarySubtitle": ""
        }
      },
      {
        "id": -3584021493,
        "layout": {
          "sections": [
            {
              "fields": [
                {
                  "options": [],
                  "barcodeRegex": null,
                  "id": -3092090170,
                  "layoutId": -7225738939,
                  "sectionId": -7279553995,
                  "title": "Inspector",
                  "placeholder": "",
                  "esriName": "Reserved01",
                  "mandatory": false,
                  "order": 1,
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
                  "options": [],
                  "barcodeRegex": null,
                  "id": -4437971242,
                  "layoutId": -7225738939,
                  "sectionId": -7279553995,
                  "title": "Inspected on",
                  "placeholder": "",
                  "esriName": "Reserved02",
                  "mandatory": false,
                  "order": 2,
                  "type": "DATE",
                  "behavior": "NORMAL",
                  "system": false,
                  "customData": {
                    "maxDate": "today"
                  },
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
                },
                {
                  "options": [],
                  "barcodeRegex": null,
                  "id": -5498593660,
                  "layoutId": -7225738939,
                  "sectionId": -7279553995,
                  "title": "Approx installed pipes length, in ft",
                  "placeholder": "",
                  "esriName": "Reserved03",
                  "mandatory": false,
                  "order": 3,
                  "type": "NUMBER",
                  "behavior": "NORMAL",
                  "system": false,
                  "customData": {
                    "maximumWholeValue": 9999,
                    "minimumWholeValue": -999999999999,
                    "maxDecimalPoints": 4,
                    "mandatoryDecimalPoints": 0
                  },
                  "defaultValues": [
                    "100"
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
                  "barcodeRegex": null,
                  "id": -266686412,
                  "layoutId": -7225738939,
                  "sectionId": -7279553995,
                  "title": "Signature",
                  "placeholder": "",
                  "esriName": "Reserved04",
                  "mandatory": false,
                  "order": 4,
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
                }
              ],
              "id": -7279553995,
              "layoutId": -7225738939,
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
                  "id": -6866702307,
                  "layoutId": -7225738939,
                  "sectionId": -424881890,
                  "title": "Notes",
                  "placeholder": "",
                  "mandatory": false,
                  "order": 1,
                  "type": "MULTI_LINE_TEXT",
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
                  "id": -1789511281,
                  "layoutId": -7225738939,
                  "sectionId": -424881890,
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
                    "isOn": null,
                    "operator": "SINGLE",
                    "conditions": [
                      {
                        "values": [],
                        "entityId": -6866702307,
                        "entityType": "FIELD",
                        "operator": "NULL"
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
                  "id": -4271219504,
                  "layoutId": -7225738939,
                  "sectionId": -424881890,
                  "title": "",
                  "placeholder": "",
                  "esriName": "Reserved05",
                  "mandatory": false,
                  "order": 3,
                  "type": "STATEMENT",
                  "behavior": "NORMAL",
                  "system": false,
                  "customData": {
                    "statementText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut eleifend lectus. Nunc ultricies finibus purus, quis tincidunt elit interdum ac. Suspendisse potenti. Pellentesque eu mattis biam."
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
              "id": -424881890,
              "layoutId": -7225738939,
              "title": "Comments",
              "decoration": true,
              "order": 2,
              "viewParams": {
                "placeholder": "* Section *"
              },
              "type": "SECTION"
            }
          ],
          "id": -7225738939,
          "key": "",
          "draft": false
        },
        "title": "Review",
        "order": 3,
        "symbol": "review-and-approve",
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
        "attachable": false,
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