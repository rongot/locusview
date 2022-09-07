const createAssetTypeCU_withIndexFields = (assetNameAndStatus) => ({

    "id": -1616353221,
    "order": 12,
    "layout": {
        "sections": [
            {
                "fields": [
                    {
                        "options": [],
                        "barcodeRegex": null,
                        "id": -5251076885,
                        "layoutId": -1010177724,
                        "sectionId": -5497433958,
                        "title": "TextField",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 1,
                        "type": "TEXT",
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
                        "valueWhen": null,
                        "validation": {
                            "maxLength": 50
                        },
                        "maxLength": 50
                    },
                    {
                        "options": [],
                        "barcodeRegex": null,
                        "id": -3950223061,
                        "layoutId": -5407361184,
                        "sectionId": -7483743629,
                        "title": "NumberSimple",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 2,
                        "type": "NUMBER",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": true,
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
                    }
                ],
                "id": -5497433958,
                "layoutId": -1010177724,
                "title": "Details",
                "order": 1,
                "type": "SECTION"
            }
        ],
        "id": -1010177724,
        "key": null,
        "draft": false
    },
    "previewCard": {
        "title": "<|entityTitle| >",
        "subtitle": "<|:lastUpdated| >",
        "secondaryTitle": "",
        "secondarySubtitle": ""
    },
    "title": assetNameAndStatus[0],   //title of the Asset
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
    "type": "[configuration] Create asset type",
    "geometryType": "POINT",
    "immediateMap": false,
    "pinType": "TRIANGLE",
    "partOfCatalog": true,
    "partOfCu": true,
    "helpInfo": null,
    "barcodeSupport": null,
    "lineType": null,
    "active": assetNameAndStatus[1]         //status: Active/Inactive
})

const createAssetTypeCU_witOuthIndexFields = (assetNameAndStatus) => ({
    "id": -2903007164,
    "order": 11,
    "layout": {
        "sections": [
            {
                "fields": [
                    {
                        "options": [],
                        "barcodeRegex": null,
                        "id": -5914399629,
                        "layoutId": -2399252367,
                        "sectionId": -7905647943,
                        "title": "FreeTextSimple",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 1,
                        "type": "TEXT",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": true,
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
                        "barcodeRegex": null,
                        "id": -4015770873,
                        "layoutId": -2399252367,
                        "sectionId": -7905647943,
                        "title": "NumberSimple",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 2,
                        "type": "NUMBER",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": true,
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
                    }
                ],
                "id": -7905647943,
                "layoutId": -2399252367,
                "title": "Details",
                "order": 1,
                "type": "SECTION"
            }
        ],
        "id": -2399252367,
        "key": null,
        "draft": false
    },
    "previewCard": {
        "title": "<|entityTitle| >",
        "subtitle": "<|:lastUpdated| >",
        "secondaryTitle": "",
        "secondarySubtitle": ""
    },
    "title": assetNameAndStatus[0],
    "symbol": "pass-ndt",
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
    "type": "[configuration] Create asset type",
    "geometryType": "POINT",
    "immediateMap": false,
    "pinType": "TRIANGLE",
    "partOfCatalog": false,
    "partOfCu": true,
    "helpInfo": null,
    "barcodeSupport": null,
    "lineType": null,
    "active": assetNameAndStatus[1]         //status: Active/Inactive

})

const createAssetTypeCU_FieldtoDeleteListField = (assetNameAndStatus) => ({
    "id": -2903007164,
    "order": 11,
    "layout": {
        "sections": [
            {
                "fields": [
                    {
                        "sectionId": -265,
                        "layoutId": -137,
                        "behavior": "NORMAL",
                        "title": "LocalListSimmple",
                        "order": 4,
                        "type": "LIST",
                        "maxLength": 2000,
                        "visibleWhen": {
                            "operator": null,
                            "conditions": null,
                            "isOn": true
                        },
                        "requireWhen": {
                            "operator": null,
                            "conditions": null,
                            "isOn": false
                        },
                        "valueWhen": null,
                        "defaultValues": null,
                        "options": [
                            {
                                "id": 1497,
                                "fieldId": 477,
                                "title": "V1",
                                "order": 0,
                                "defaultOption": false,
                                "active": true
                            },
                            {
                                "id": 1498,
                                "fieldId": 477,
                                "title": "V2",
                                "order": 1,
                                "defaultOption": false,
                                "active": true
                            },
                            {
                                "id": 1499,
                                "fieldId": 477,
                                "title": "V3",
                                "order": 2,
                                "defaultOption": false,
                                "active": true
                            }
                        ],
                        "customData": null,
                        "placeholder": null,
                        "esriName": "",
                        "helpInfo": null,
                        "system": false,
                        "partOfCatalog": false,
                        "barcodeRegex": null,
                        "isCatalogIndex": false,
                        "sharedListId": null,
                        "listType": "LOCAL",
                        "active": true,
                        "unique": false,
                        "tagId": null,
                        "partOfCu": true,
                        "partOfCuKey": false
                    },
                    {
                        "options": [],
                        "barcodeRegex": null,
                        "id": -5914399629,
                        "layoutId": -2399252367,
                        "sectionId": -7905647943,
                        "title": "FieldToDelete",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 1,
                        "type": "TEXT",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": true,
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
                        "barcodeRegex": null,
                        "id": -4015770873,
                        "layoutId": -2399252367,
                        "sectionId": -7905647943,
                        "title": "NumberSimple",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 2,
                        "type": "NUMBER",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": true,
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
                    },                    {
                        "options": [],
                        "barcodeRegex": null,
                        "id": -5914399629,
                        "layoutId": -2399252367,
                        "sectionId": -7905647943,
                        "title": "FreeTextSimple",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 1,
                        "type": "TEXT",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": true,
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
                "id": -7905647943,
                "layoutId": -2399252367,
                "title": "Details",
                "order": 1,
                "type": "SECTION"
            }
        ],
        "id": -2399252367,
        "key": null,
        "draft": false
    },
    "previewCard": {
        "title": "<|entityTitle| >",
        "subtitle": "<|:lastUpdated| >",
        "secondaryTitle": "",
        "secondarySubtitle": ""
    },
    "title": assetNameAndStatus[0],
    "symbol": "pass-ndt",
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
    "type": "[configuration] Create asset type",
    "geometryType": "POINT",
    "immediateMap": false,
    "pinType": "TRIANGLE",
    "partOfCatalog": false,
    "partOfCu": true,
    "helpInfo": null,
    "barcodeSupport": null,
    "lineType": null,
    "active": assetNameAndStatus[1]
})

const createAssetTypeCU_FieldforNumericTests = (assetNameAndStatus) => ({
    "id": -2906746516,
    "order": 10,
    "layout": {
        "sections": [
            {
                "fields": [
                    {
                        "options": [],
                        "barcodeRegex": null,
                        "id": -5908906114,
                        "layoutId": -1091618553,
                        "sectionId": -1876843183,
                        "title": "Pipe diameter",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 1,
                        "type": "TEXT",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": true,
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
                        "barcodeRegex": null,
                        "id": -1341337489,
                        "layoutId": -1091618553,
                        "sectionId": -1876843183,
                        "title": "Pipe length",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 2,
                        "type": "NUMBER",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": true,
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
                    }
                ],
                "id": -1876843183,
                "layoutId": -1091618553,
                "title": "Details",
                "order": 1,
                "type": "SECTION"
            }
        ],
        "id": -1091618553,
        "key": null,
        "draft": false
    },
    "previewCard": {
        "title": "<|entityTitle| >",
        "subtitle": "<|:lastUpdated| >",
        "secondaryTitle": "",
        "secondarySubtitle": ""
    },
    "title": assetNameAndStatus[0],
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
    "type": "[configuration] Create asset type",
    "geometryType": "POINT",
    "immediateMap": false,
    "pinType": "TRIANGLE",
    "partOfCatalog": false,
    "partOfCu": true,
    "helpInfo": null,
    "barcodeSupport": null,
    "lineType": null,
    "active": assetNameAndStatus[1]
})

const createAssetTypeCU_withCalcField = (assetNameAndStatus) => ({
    "id": -1229493347,
    "order": 17,
    "layout": {
        "sections": [
            {
                "fields": [
                    {
                        "options": [],
                        "barcodeRegex": null,
                        "id": -7455295848,
                        "layoutId": -133276316,
                        "sectionId": -5681408924,
                        "title": "Pipe diameter",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 1,
                        "type": "TEXT",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": true,
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
                        "barcodeRegex": null,
                        "id": -3466165357,
                        "layoutId": -133276316,
                        "sectionId": -5681408924,
                        "title": "Pipe length",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 2,
                        "type": "NUMBER",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": false,
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
                        "barcodeRegex": null,
                        "id": -7216257654,
                        "layoutId": -133276316,
                        "sectionId": -5681408924,
                        "title": "Pipe length + 2",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 3,
                        "type": "CALCULATION",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": false,
                        "unique": false,
                        "isCatalogIndex": false,
                        "customData": {
                            "calculationData": [
                                {
                                    "value": -3466165357,
                                    "type": "FIELD",
                                    "order": 1
                                },
                                {
                                    "type": "OPERATOR",
                                    "value": "ADD",
                                    "order": 2
                                },
                                {
                                    "value": 2,
                                    "type": "CONSTANT",
                                    "order": 3
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
                                -3466165357
                            ]
                        },
                        "validation": {
                            "maxLength": 2000
                        },
                        "maxLength": 2000
                    }
                ],
                "id": -5681408924,
                "layoutId": -133276316,
                "title": "Details",
                "order": 1,
                "type": "SECTION"
            }
        ],
        "id": -133276316,
        "key": null,
        "draft": false
    },
    "previewCard": {
        "title": "<|entityTitle| >",
        "subtitle": "<|:lastUpdated| >",
        "secondaryTitle": "",
        "secondarySubtitle": ""
    },
    "title": assetNameAndStatus[0],
    "symbol": "replacement",
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
    "type": "[configuration] Create asset type",
    "geometryType": "POINT",
    "immediateMap": false,
    "pinType": "TRIANGLE",
    "partOfCatalog": false,
    "partOfCu": true,
    "helpInfo": null,
    "barcodeSupport": null,
    "lineType": null,
    "active": assetNameAndStatus[1]
})

const createAssetTypeCU_FieldforNumericTestsNoCU = (assetNameAndStatus) => ({
    "id": -374226896,
    "order": 15,
    "layout": {
        "sections": [
            {
                "fields": [
                    {
                        "options": [],
                        "barcodeRegex": null,
                        "id": -1757034957,
                        "layoutId": -5226519812,
                        "sectionId": -5174881968,
                        "title": "Pipe diameter",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 1,
                        "type": "TEXT",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": true,
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
                        "barcodeRegex": null,
                        "id": -1002906457,
                        "layoutId": -5226519812,
                        "sectionId": -5174881968,
                        "title": "Pipe length",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 2,
                        "type": "NUMBER",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": false,
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
                    }
                ],
                "id": -5174881968,
                "layoutId": -5226519812,
                "title": "Details",
                "order": 1,
                "type": "SECTION"
            }
        ],
        "id": -5226519812,
        "key": null,
        "draft": false
    },
    "previewCard": {
        "title": "<|entityTitle| >",
        "subtitle": "<|:lastUpdated| >",
        "secondaryTitle": "",
        "secondarySubtitle": ""
    },
    "title": assetNameAndStatus[0],
    "symbol": "environment",
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
    "type": "[configuration] Create asset type",
    "geometryType": "POINT",
    "immediateMap": false,
    "pinType": "TRIANGLE",
    "partOfCatalog": false,
    "partOfCu": true,
    "helpInfo": null,
    "barcodeSupport": null,
    "lineType": null,
    "active": assetNameAndStatus[1]
})

const projectTypeForCuTesting = (assetsIDs, workUnitTypeIDs, projectName = "Project_CU_testing") => {

    let ASSET_TYPE = []
    let PROJECT_TYPE = []
    
    for(let element of assetsIDs) {
        ASSET_TYPE.push({
            id: element,
            visible: true,
            required: false,
        })
    }

    if(workUnitTypeIDs) {
        for(let element of workUnitTypeIDs) {
            PROJECT_TYPE.push({
                id: element,
                visible: true,
                required: false,
            })
        }
    }

  
    const ProjectBody = {
        "id": -3609921243,
        "symbol": "abandonment",
        "order": 8,
        "layout": {
            "sections": [
                {
                    "fields": [
                        {
                            "options": [],
                            "sharedListId": null,
                            "barcodeRegex": null,
                            "id": -4118398109,
                            "layoutId": -6131182971,
                            "sectionId": -1355406842,
                            "title": "Name",
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
                            "partOfCu": false,
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
                    "id": -1355406842,
                    "layoutId": -6131182971,
                    "title": "Details",
                    "order": 1,
                    "type": "SECTION"
                }
            ],
            "id": -6131182971,
            "key": null,
            "draft": false
        },
        "previewCard": {
            "title": "<|name| >",
            "subtitle": "<|:lastUpdated| >",
            "secondaryTitle": "<|entityTitle| >",
            "secondarySubtitle": ""
        },
        "materialBehavior": "ENABLED",
        "title": projectName,
        "visibleWhen": null,
        "valueWhen": null,
        "requireWhen": null,
        "type": "PROJECT_TYPE",
        "rootType": true,
        "workflowId": 1,
        "components": {
            "ASSET_TYPE": ASSET_TYPE,
            "PROJECT_TYPE": PROJECT_TYPE
        },
        "helpInfo": null,
        "barcodeSupport": null
    }
    
    return ProjectBody
}

const workUnitTypeForCuTesting = (assetsIDs, wuTypeName="Work_Unit_CU_Testing") => {

    let ASSET_TYPE = []
    
    for(let element of assetsIDs) {
        ASSET_TYPE.push({
            id: element,
            visible: true,
            required: false,
        })
    }
    const workOrderBody = {
        "id": -2211826115,
        "symbol": "anode",
        "order": 7,
        "layout": {
            "sections": [
                {
                    "fields": [
                        {
                            "options": [],
                            "sharedListId": null,
                            "barcodeRegex": null,
                            "id": -1462021083,
                            "layoutId": -7698712899,
                            "sectionId": -8674911964,
                            "title": "Name",
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
                            "partOfCu": false,
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
                    "id": -8674911964,
                    "layoutId": -7698712899,
                    "title": "Details",
                    "order": 1,
                    "type": "SECTION"
                }
            ],
            "id": -7698712899,
            "key": null,
            "draft": false
        },
        "previewCard": {
            "title": "<|name| >",
            "subtitle": "<|:lastUpdated| >",
            "secondaryTitle": "",
            "secondarySubtitle": ""
        },
        "materialBehavior": "ENABLED",
        "title": wuTypeName,
        "mappable": false,
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
        "type": "WORK_UNIT_TYPE",
        "rootType": false,
        "geometryType": null,
        "pinType": "TRIANGLE",
        "lineType": null,
        "components": {
            "ASSET_TYPE": ASSET_TYPE
        },
        "helpInfo": null,
        "barcodeSupport": null
    }
    
    return workOrderBody
}

const catalogRow = (assetTypeID, customFields) => ({
    "id": -302282986,
    "typeId": assetTypeID,
    "active": true,
    "customFields": customFields
})

const cuRecord = (assetTypeID, assetTypeCustomFields, externalCuId, workFunction, unitOfMeasure = "") => ({
    "typeId": 1,
    "active": true,
    "composingEntities": [
        {
            "entityType": "ASSET_TYPE",
            "typeId": assetTypeID,
            "customFields": assetTypeCustomFields
        }
    ],
    "customFields": {},
    "externalCuId": externalCuId,
    "workFunction": workFunction,
    "unitOfMeasure": unitOfMeasure
})

const assetUnderCuProject = (assetTypeID, projectID, customFields, workUnitID = projectID) => ({
    "typeId": assetTypeID,
    "projectId": projectID,
    "barcode": "SDF345THGD",
    "inputMethod": "SCANNED",
    "warnings": [
        "RECALLED"
    ],
    "lengthInFeet": 111,
    "systemType": "Main",
    "geometries": null,
    "order": 1,
    "edgeType": "START",
    "customFields": customFields,
    "parentProjectId": workUnitID
})

const geometriesCU = (latitude, longitude, projectId) => ({
    "latitude": latitude,
    "longitude": longitude,
    "projectId": projectId
})

const createGWDBOdy1 = (projectIDvar) => ({

    "projectId": projectIDvar,
    "externalWorkLocations": [
       
        {
            "name": "WL2",
            "wuTypeId": 14,
            "coordinates": [
                {
                    "latitude": 35.915024,
                    "longitude": 34.263013
                },
                {
                    "latitude": 36.902325,
                    "longitude": 34.526808
                }
            ],
            "order": 2,
            "externalCompatibleUnits": [
                {
                    "compatibleUnitTypeId": 1,
                    "customFields": {
                        "customField467": "CUwithText",
                        "customField469": "Install"
                    },
                    "quantity": 23,
                    "coordinates": [
                        {
                            "latitude": 35.666365,
                            "longitude": 34.636097
                        },
                        {
                            "latitude": 36.697988,
                            "longitude": 35.043168
                        }
                    ]
                }
            ]
        },
        {
            "name": "WL1",
            "wuTypeId": 14,
            "coordinates": [
                {
                    "latitude": 35.555,
                    "longitude": 34.111111
                },
                {
                    "latitude": 37.112825,
                    "longitude": 33.864557
                }

            ],
            "order": 3,
            "externalCompatibleUnits": [
                {
                    "compatibleUnitTypeId": 1,
                    "customFields": {
                        "customField467": "CUwithNumber",
                        "customField469": "Install"
                    },
                    "quantity": 23,
                    "coordinates": [
                        {
                            "latitude": 35.666365,
                            "longitude": 34.636097
                        },
                        {
                            "latitude": 36.697988,
                            "longitude": 35.043168
                        }
                    ]
                }
            ]
        },
        {
            "name": "WL4",
            "wuTypeId": 14,
            "coordinates": [
                {
                    "latitude": 36.029676,
                    "longitude": 35.021211
                },
                {
                    "latitude": 36.511193,
                    "longitude": 35.363114
                }

            ],
            "order": 4,
            "externalCompatibleUnits": [
                {
                    "compatibleUnitTypeId": 1,
                    "customFields": {
                        "customField467": "CUwithIndex",
                        "customField469": "Install"
                    },
                    "quantity": 23,
                    "coordinates": [
                        {
                            "latitude": 35.666365,
                            "longitude": 34.636097
                        },
                        {
                            "latitude": 36.697988,
                            "longitude": 35.043168
                        }
                    ]
                }
            ]
        },
        {
            "name": "WL3",
            "wuTypeId": 14,
            "coordinates": [
                {
                    "latitude": 35.555,
                    "longitude": 34.111111
                },
                {
                    "latitude": 36.824404,
                    "longitude": 33.341213
                } 

            ],
            "order": 1,
            "externalCompatibleUnits": [
                
            ]
        }
    ],
    "externalCompatibleUnits": [
       {
                    "compatibleUnitTypeId": 1,
                    "customFields": {
                        "customField467": "CUwithNumber",
                        "customField469": "Install"
                    },
                    "quantity": 23,
                    "coordinates": [
                        {
                            "latitude": 35.387149,
                            "longitude": 33.502511
                        },
                        {
                            "latitude": 35.225893,
                            "longitude": 35.925034
                        }
                    ]
                }
    ]
  }
)

const formTypeBody = (formName) => ({
    "id": -145278008,
    "order": 9,
    "layout": {
        "sections": [
            {
                "fields": [
                    {
                        "options": [],
                        "barcodeRegex": null,
                        "id": -358247042,
                        "layoutId": -4607843723,
                        "sectionId": -5312147557,
                        "title": "NumberSimple",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 1,
                        "type": "NUMBER",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": true,
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
                        "barcodeRegex": null,
                        "id": -1859019066,
                        "layoutId": -4607843723,
                        "sectionId": -5312147557,
                        "title": "CalculationSimple",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 2,
                        "type": "CALCULATION",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": false,
                        "unique": false,
                        "isCatalogIndex": false,
                        "customData": {
                            "calculationData": [
                                {
                                    "value": -358247042,
                                    "type": "FIELD",
                                    "order": 1
                                },
                                {
                                    "type": "OPERATOR",
                                    "value": "ADD",
                                    "order": 2
                                },
                                {
                                    "value": 1,
                                    "type": "CONSTANT",
                                    "order": 3
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
                                -358247042
                            ]
                        },
                        "validation": {
                            "maxLength": 2000
                        },
                        "maxLength": 2000
                    },
                    {
                        "options": [],
                        "barcodeRegex": null,
                        "id": -358147042,
                        "layoutId": -4607841723,
                        "sectionId": -5312117557,
                        "title": "NumberSimple2",
                        "placeholder": null,
                        "esriName": "",
                        "mandatory": false,
                        "order": 1,
                        "type": "NUMBER",
                        "behavior": "NORMAL",
                        "system": false,
                        "partOfCatalog": false,
                        "partOfCu": false,
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
                    }
                ],
                "id": -5312147557,
                "layoutId": -4607843723,
                "title": "Details",
                "order": 1,
                "type": "SECTION"
            }
        ],
        "id": -4607843723,
        "key": null,
        "draft": false
    },
    "previewCard": {
        "title": "<|entityTitle| >",
        "subtitle": "<|:lastUpdated| >",
        "secondaryTitle": "",
        "secondarySubtitle": ""
    },
    "title": formName,
    "symbol": "cathodic",
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
    "barcodeSupport": null
})

const basicProjectType = (projectTypeName, formID, assetID, wuID) => ({
    "id": -4169064116,
    "symbol": "abandonment",
    "order": 8,
    "layout": {
        "sections": [
            {
                "fields": [
                    {
                        "options": [],
                        "sharedListId": null,
                        "barcodeRegex": null,
                        "id": -7748116457,
                        "layoutId": -2092565224,
                        "sectionId": -2344480969,
                        "title": "Name",
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
                        "partOfCu": false,
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
                "id": -2344480969,
                "layoutId": -2092565224,
                "title": "Details",
                "order": 1,
                "type": "SECTION"
            }
        ],
        "id": -2092565224,
        "key": null,
        "draft": false
    },
    "previewCard": {
        "title": "<|name| >",
        "subtitle": "<|:lastUpdated| >",
        "secondaryTitle": "<|entityTitle| >",
        "secondarySubtitle": ""
    },
    "materialBehavior": "ENABLED",
    "title": projectTypeName,
    "visibleWhen": null,
    "valueWhen": null,
    "requireWhen": null,
    "type": "PROJECT_TYPE",
    "rootType": true,
    "workflowId": 1,
    "components": {
        "FORM_TYPE": [
            {
                "id": formID,
                "visible": true,
                "required": false
            }
        ],
        "ASSET_TYPE": [
            {
                "id": assetID,
                "visible": true,
                "required": false
            }
        ],
        "PROJECT_TYPE": [
            {
                "id": wuID,
                "visible": true,
                "required": false
            }
        ]
    },
    "helpInfo": null,
    "barcodeSupport": null
})

const basicProjectEntity = (projectName, typeID) => ({
    "name": projectName,
    "id": -1,
    "type": "PROJECT",
    "typeId": typeID,
    "customFields": {},
    "createDate": null,
    "lastUpdated": null,
    "status": "NEW",
    "systemType": null,
    "parentId": null,
    "geometry": null,
    "rootId": null,
    "summary": null
})

const basicAsset = (title) => ({
    "id": -3505130058,
    "order": 10,
    "layout": {
        "sections": [
            {
                "fields": [],
                "id": -6703523160,
                "layoutId": -5086174607,
                "title": "Details",
                "order": 1,
                "type": "SECTION"
            }
        ],
        "id": -5086174607,
        "key": null,
        "draft": false
    },
    "previewCard": {
        "title": "<|entityTitle| >",
        "subtitle": "<|:lastUpdated| >",
        "secondaryTitle": "",
        "secondarySubtitle": ""
    },
    "title": title,
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
    "type": "[configuration] Create asset type",
    "geometryType": "POINT",
    "immediateMap": false,
    "pinType": "TRIANGLE",
    "partOfCatalog": false,
    "partOfCu": false,
    "helpInfo": null,
    "barcodeSupport": null,
    "lineType": null
})

const basicWorkUnitType = (wuName, formID) => ({
    "id": -7844719059,
    "symbol": "abandonment",
    "order": 7,
    "layout": {
        "sections": [
            {
                "fields": [
                    {
                        "options": [],
                        "sharedListId": null,
                        "barcodeRegex": null,
                        "id": -8433974457,
                        "layoutId": -2206527723,
                        "sectionId": -4396877341,
                        "title": "Name",
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
                        "partOfCu": false,
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
                "id": -4396877341,
                "layoutId": -2206527723,
                "title": "Details",
                "order": 1,
                "type": "SECTION"
            }
        ],
        "id": -2206527723,
        "key": null,
        "draft": false
    },
    "previewCard": {
        "title": "<|name| >",
        "subtitle": "<|:lastUpdated| >",
        "secondaryTitle": "",
        "secondarySubtitle": ""
    },
    "materialBehavior": "ENABLED",
    "title": wuName,
    "mappable": false,
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
    "type": "WORK_UNIT_TYPE",
    "rootType": false,
    "geometryType": null,
    "components": {
        "FORM_TYPE": [
            {
                "id": formID,
                "visible": true,
                "required": false
            }
        ]
    },
    "helpInfo": null,
    "barcodeSupport": null
})
const assetEntityBody = (assetTypeIDs, projectID,randomUUID) => ({

    "typeId": assetTypeIDs,
    "projectId": projectID,
    "geometries": null,
    "customFields": {},
    "parentProjectId": projectID,
    "inputMethod":"MANUAL",
    "uuid": `6d8a4535-a4e7-4899-a177-${randomUUID}`
})

const basicDesings = (projectID, compatibleUnitIDs, wuTypeID = "") => ({
    "projectId": projectID,
    "workLocations": [
        // {
        //     "name": "location-1",
        //     "wuTypeId": wuTypeID,
        //     "coordinates": [
        //         {
        //             "latitude": 35.1902100217,
        //             "longitude": 36.1902100217
        //         }
        //     ],
        //     "order": 1,
        //     "plannedCompatibleUnits": [
        //         {
        //             "externalCuId": compatibleUnitIDs[1][0],
        //             "workFunction": compatibleUnitIDs[1][1],
        //             "quantity": 3
        //         }
        //     ]
        // }
    ],
    "plannedCompatibleUnits": [
        {
            "externalCuId": compatibleUnitIDs[0][0],
            "workFunction": compatibleUnitIDs[0][1],
            "quantity": 3
        }
        // {
        //     "externalCuId": compatibleUnitIDs[2][0],
        //     "workFunction": compatibleUnitIDs[2][1],
        //     "quantity": 3
        // }
    ]
})



module.exports = {
    createAssetTypeCU_withIndexFields, createAssetTypeCU_witOuthIndexFields, projectTypeForCuTesting, catalogRow, assetUnderCuProject, 
    cuRecord, workUnitTypeForCuTesting, geometriesCU, createAssetTypeCU_FieldtoDeleteListField, createAssetTypeCU_FieldforNumericTests,
    createAssetTypeCU_FieldforNumericTestsNoCU, createAssetTypeCU_withCalcField,
    cuRecord, workUnitTypeForCuTesting, geometriesCU, createAssetTypeCU_FieldtoDeleteListField, createGWDBOdy1, basicAsset, formTypeBody,
    basicProjectType, basicWorkUnitType,assetEntityBody, basicDesings, basicProjectEntity
}