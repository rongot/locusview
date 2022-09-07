module.exports = class GenericBodies {

    genericAssetTypeBody = (assetTypeName) => ({
        "id": -2484286580,
        "order": 10,
        "layout": {
            "sections": [
                {
                    "fields": [
                        {
                            "options": [],
                            "barcodeRegex": null,
                            "id": -5758340382,
                            "layoutId": -7985223370,
                            "sectionId": -4247520707,
                            "title": "freeText",
                            "placeholder": null,
                            "esriName": "",
                            "mandatory": false,
                            "order": 1,
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
                            "id": -6817953797,
                            "layoutId": -7985223370,
                            "sectionId": -4247520707,
                            "title": "numbers",
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
                    "id": -4247520707,
                    "layoutId": -7985223370,
                    "title": "Details",
                    "order": 1,
                    "type": "SECTION"
                }
            ],
            "id": -7985223370,
            "key": null,
            "draft": false
        },
        "previewCard": {
            "title": "<|entityTitle| >",
            "subtitle": "<|:lastUpdated| >",
            "secondaryTitle": "",
            "secondarySubtitle": ""
        },
        "title": assetTypeName,
        "symbol": "anode",
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

    genericFormTypeBody = (formTypeName, attachable = false) => ({
        "id": -7302691401,
        "layout": {
            "sections": [
                {
                    "fields": [],
                    "id": -4944559690,
                    "layoutId": -8093148597,
                    "title": "Details",
                    "order": 1,
                    "type": "SECTION"
                }
            ],
            "id": -8093148597,
            "key": null,
            "draft": false
        },
        "previewCard": {
            "title": "<|entityTitle| >",
            "subtitle": "<|:lastUpdated| >",
            "secondaryTitle": "",
            "secondarySubtitle": ""
        },
        "title": formTypeName,
        "symbol": "inspection",
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
        "attachable": attachable,
        "helpInfo": null,
        "barcodeSupport": null
    })

    genericWorkUnitTypeBody = (workUnitTypeName, assetTypeIDs, formTypeIDs) => {
        
        let ASSET_TYPE = []
        let FORM_TYPE = []
        
        if(assetTypeIDs) {
            for(let assetTypeID of assetTypeIDs) {
                ASSET_TYPE.push({
                    id: assetTypeID,
                    visible: true,
                    required: false,
                })
            }
        }
    
        if(formTypeIDs) {
            for(let formTypeID of formTypeIDs) {
                FORM_TYPE.push({
                    id: formTypeID,
                    visible: true,
                    required: false,
                })
            }
        }

        workUnitTypeBody = {
            "id": -161200629,
            "symbol": "construction-site",
            "order": 8,
            "layout": {
                "sections": [
                    {
                        "fields": [
                            {
                                "options": [],
                                "sharedListId": null,
                                "barcodeRegex": null,
                                "id": -2044330624,
                                "layoutId": -8345623099,
                                "sectionId": -8986891368,
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
                        "id": -8986891368,
                        "layoutId": -8345623099,
                        "title": "Details",
                        "order": 1,
                        "type": "SECTION"
                    }
                ],
                "id": -8345623099,
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
            "title": workUnitTypeName,
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
                "ASSET_TYPE": ASSET_TYPE,
                "FORM_TYPE": FORM_TYPE
            },
            "helpInfo": null,
            "barcodeSupport": null
        }

        return workUnitTypeBody
    }

    genericWorOrderTypeBody = (worOrderTypeName, assetTypeIDs, formTypeIDs, workUnitTypeIDs) => {

        let ASSET_TYPE = []
        let FORM_TYPE = []
        let PROJECT_TYPE = []
        
        if(assetTypeIDs) {
            for(let assetTypeID of assetTypeIDs) {
                ASSET_TYPE.push({
                    id: assetTypeID,
                    visible: true,
                    required: false,
                })
            }
        }
    
        if(formTypeIDs) {
            for(let formTypeID of formTypeIDs) {
                FORM_TYPE.push({
                    id: formTypeID,
                    visible: true,
                    required: false,
                })
            }
        }

        if(workUnitTypeIDs) {
            for(let workUnitTypeID of workUnitTypeIDs) {
                FORM_TYPE.push({
                    id: workUnitTypeID,
                    visible: true,
                    required: false,
                })
            }
        }

        workOrderTypeBody = {
            "id": -7298821466,
            "symbol": "meter",
            "order": 9,
            "layout": {
                "sections": [
                    {
                        "fields": [
                            {
                                "options": [],
                                "sharedListId": null,
                                "barcodeRegex": null,
                                "id": -3583272670,
                                "layoutId": -8076917163,
                                "sectionId": -58561698,
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
                        "id": -58561698,
                        "layoutId": -8076917163,
                        "title": "Details",
                        "order": 1,
                        "type": "SECTION"
                    }
                ],
                "id": -8076917163,
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
            "title": worOrderTypeName,
            "visibleWhen": null,
            "valueWhen": null,
            "requireWhen": null,
            "type": "PROJECT_TYPE",
            "rootType": true,
            "workflowId": 1,
            "components": {
                "ASSET_TYPE": ASSET_TYPE,
                "FORM_TYPE": FORM_TYPE,
                "PROJECT_TYPE" : PROJECT_TYPE
            },
            "helpInfo": null,
            "barcodeSupport": null
        }

        return workOrderTypeBody
    }
}