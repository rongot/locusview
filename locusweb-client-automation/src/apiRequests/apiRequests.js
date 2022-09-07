const https = require('https')
const puppeteer = require('puppeteer')
const devices = puppeteer.devices

const { apiCreateEmptyGroup, apiCreateAPolicyWithSpecificFieldDate, apiPolicyUnlockScanned,
    apiCreateAPolicyWithAllFieldsYes, apiCreateUserWithTwoPolicies, apiCreatePolicySpecificTypeWithAllFieldsDate, apiCreatePrPermissionPolicyAllTypes,
    apiCreateAPolicyWithSpecificFieldDate2, apiPolicySpecificTypesAllEditDetails, apiCreateUserWithOnePolicy, apiPMPolicyOnly } = require('../../src/apiRequests/requests')

const chai = require('chai');
const assert = chai.assert;

const { baseURLForApi } = require('../config/configuration');
const { Console } = require('console');


module.exports = class ApiRequests {
    constructor(baseURL = baseURLForApi) {
        this.baseURL = baseURL
    }

    async generalApiRequest(page, requestBodyString, token, initialRequestText, requestUrl, requestUrlRegexpi, requestMethod) {
        let rURL = this.baseURL + requestUrl

        let resStatus = initialRequestText
        let resJson = initialRequestText
        const body = requestBodyString

        if (requestMethod != "GET") {
            await page.evaluate((rURL, token, body, requestMethod) => {
                try {
                    const response = fetch(`${rURL}`, {
                        method: requestMethod,
                        body: body, // string or object
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Token ${token}`
                        }
                    })
                } catch (e) {
                    console.log(`error in ${requestUrl}, body ${requestBodyString}, ${e}`)
                }
            }, rURL, token, body, requestMethod)
        }
        else {
            await page.evaluate((rURL, token) => {
                const response = fetch(`${rURL}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                    }
                })
            }, rURL, token)
        }


        await page.on('response', async (response) => {

            const request = await response.request()
            const urlRegexpi = requestUrlRegexpi

            if (await urlRegexpi.test(request.url())) {
                //console.log("URL : " + request.url())      
                try {
                    // request for js resource  
                    resStatus = await response.status()
                    //console.log(resStatus)                 
                    resJson = await response.json()
                    //console.log(resJson)   
                } catch (error) {
                    resJson = initialRequestText
                }

            }

        })
        //await page.waitForTimeout(5000)
        for (let index = 0; index < 100; index++) {

            if (resJson != initialRequestText) {
                break
            }
            await page.waitForTimeout(200)
        }
        return { resStatus, resJson }
    }

    async postRequestAuth(page, myBody) {

        let rURL = this.baseURL + "/api/v1/authenticate"
        let resJson = { token: "empty" }
        await page.evaluate((myBody, rURL) => {
            const response = fetch(`${rURL}`, {
                method: 'POST',
                body: myBody, // string or object
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            //console.log(response)


        }, myBody, rURL)

        await page.on('response', async (response) => {
            const request = await response.request()
            const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*authenticate[\S\s]*/i
            //console.log(request)

            if (urlRegexpi.test(request.url())) {
                // console.log("URL : " + request.url())

                // request for js resource  
                try {
                    resJson = await response.json()
                } catch (error) {
                    resJson = { token: "empty" }
                }

                // console.log(resJson.token)
            }

        })
        for (let index = 0; index < 100; index++) {

            if (resJson.token != "empty") {
                break
            }
            await page.waitForTimeout(100)
        }

        // await page.waitForTimeout(5000)
        //console.log(resJson)
        return resJson.token

    }

    async createNewAsset(page, token, body) {
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*asset-types[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", "/api/v1/config/mapping/asset-types", urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus
        //console.log(resJson)
        return { resStatus, resJson }
    }

    async updateAssetType(page, token, body, assetTypeID) {

        //console.log(`-------------->${assetTypeID}`)
        //console.log(JSON.stringify(body))
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*asset-types[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", `/api/v1/config/mapping/asset-types/${assetTypeID}`, urlRegexpi, "PUT")
        const resJson = result.resJson
        const resStatus = result.resStatus
        //console.log(resJson)
        return { resStatus, resJson }
    }

    async createNewProject(page, token, body) {
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*project-types[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", "/api/v1/config/project-types", urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus
        //console.log(resJson)
        return { resStatus, resJson }
    }
    
    async getToken(loginPage, page) {
        const body = `{"username": "${loginPage.adminUsername}","password": "${loginPage.adminPassword}","deviceIdentifier": "puppeteer","acceptedTerms": true} `
        const token = await this.postRequestAuth(page, body)
        //console.log('token print ', token)
        return token
    }
    
    async createAnyTypeProject(page, token, projectName, projectTypeID, status = 'DRAFT') {

        let body = {
            "id": -1,
            "typeId": projectTypeID,
            "status": status,
            "name": projectName,
            "geometry": null,
            "parentId": null,
            "systemType": "Main",
            "customFields": {
            }

        }

        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*project[\S\s]*/i
        const result = await this.generalApiRequest(page, await JSON.stringify(body), token, "empty", `/api/v1/projects/`, urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus

        return { resStatus, resJson }
    }

    async getAssetTypeIdByName(page, token, assetTypeName) { //<=====assetTypeName
        const body = ""
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*asset-types[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", "/api/v1/config/mapping/asset-types", urlRegexpi, "GET")
        const resJson = result.resJson
        const resStatus = result.resStatus
        let assetTypeID
        for (let assetType of resJson) {
            if (assetType.title == assetTypeName) {
                assetTypeID = assetType.id
                return { resStatus, assetType, assetTypeID }
            }
        }
        return { resStatus, resJson }
    }

    async createCatalogRow(page, token, body) {
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*assets[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", "/api/v1/catalogs/assets", urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus
        //console.log(resJson)
        return { resStatus, resJson }
    }

    async createAssetEntity(page, token, body) {
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*assets[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", "/api/v1/assets", urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus
        //console.log(resJson)
        return { resStatus, resJson }
    }

    async patchProject(page, token, body, projectID) {
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*projects[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", `/api/v1/projects/${projectID}`, urlRegexpi, "PATCH")
        const resJson = result.resJson
        const resStatus = result.resStatus
        //console.log(resJson)
        return { resStatus, resJson }
    }

    async getProjectTypeByID(page, token, projectTypeID) {
        let body = ""
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*project-types[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", `/api/v1/config/project-types/${projectTypeID}`, urlRegexpi, "GET")
        const resJson = result.resJson
        const resStatus = result.resStatus
        //console.log(resJson)
        return { resStatus, resJson }
    }

    async getCuTypeFields(page, token) {
        let body = ""
        let cuFields = {}
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*compatible-unit-types[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", `/api/v1/config/compatible-unit-types`, urlRegexpi, "GET")
        const resJson = result.resJson
        const resStatus = result.resStatus
        for (let element of resJson[0].layout.sections[0].fields) {
            switch (element.title) {
                case "Compatible Unit ID":
                    cuFields.unitIdField = element.key
                    break;
                case "Description":
                    cuFields.descField = element.key
                    break;
                case "Work Function":
                    cuFields.workFuncField = element.key
                    break;
            }
        }
        return { resStatus, cuFields }
    }

    async createCuRecord(page, token, body) {
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*compatible-units[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", "/api/v1/compatible-units", urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus
        //console.log(resJson)
        return { resStatus, resJson }
    }

    async updateCuRecord(page, token, body, id) {
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*compatible-units[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", `/api/v1/compatible-units/${id}`, urlRegexpi, "PUT")
        const resJson = result.resJson
        const resStatus = result.resStatus
        //console.log(resJson)
        return { resStatus, resJson }
    }

    async createWorkUnitEntity(page, token, workUnitName, workUnitTypeID, parentID) {

        let body = {
            "id": -1,
            "typeId": workUnitTypeID,
            "name": workUnitName,
            "geometry": null,
            "rootId": parentID,
            "systemType": null,
            "customFields": {
            }
        }

        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*project[\S\s]*/i
        const result = await this.generalApiRequest(page, await JSON.stringify(body), token, "empty", `/api/v1/projects/`, urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus

        return { resStatus, resJson }
    }

    async createGeometry(page, token, body) {
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*geometries[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", "/api/v1/geometries", urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus
        //console.log(resJson)
        return { resStatus, resJson }
    }

    async createLink(page, token, body) {
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*links[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", "/api/v1/links", urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus
        //console.log(resJson)
        return { resStatus, resJson }
    }

    async createCuAggregation(page, token, body) {
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*sum-by-method[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", "/api/v1/config/aggregation-types/1/sum-by-method", urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus
        return { resStatus, resJson }
        
    }
    
    async createNewGWD(page, token, body,projectID) {
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*designs[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", "/api/v1/designs", urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus
        // console.log("resJson"+resJson)
        // console.log("resStatus"+resStatus)
        return { resStatus, resJson }
    }
    async createNewProjectType(page, token, body) {
        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*project-types[\S\s]*/i
        const result = await this.generalApiRequest(page, JSON.stringify(body), token, "empty", "/api/v1/config/project-types", urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus
        //console.log(resJson)
        return { resStatus, resJson }
    }
    async linkWUtoWL(page, token, workUnitIDs,wLIds) {
        let randomUUID = (Math.random() + 1).toString(36).substring(3);
       // "uuid": `6d8a4535-a4e7-4899-a177-${randomUUID}`

        let body = {
            "entityType1": "PROJECT",
            "entityId1": workUnitIDs,
            "entityType2": "WORK_LOCATION",
            "entityId2": wLIds,
            //"projectId": parentID,
            "uuid": `6d8a4535-a4e7-4899-a177-${randomUUID}`

        }

        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*link[\S\s]*/i
        const result = await this.generalApiRequest(page, await JSON.stringify(body), token, "empty", `/api/v1/links/`, urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus

        return { resStatus, resJson }
    }
    async linkAssetToCU(page, token, assetTypeIDs,cuIdsProj1) {
        let randomUUID = (Math.random() + 1).toString(36).substring(3);
       // "uuid": `6d8a4535-a4e7-4899-a177-${randomUUID}`

        let body = {
            "entityType1": "ASSET",
            "entityId1": assetTypeIDs,
            "entityType2": "PLANNED_CU",
            "entityId2": cuIdsProj1,
            //"projectId": parentID,
            "uuid": `6d8a4535-a4e7-4899-a177-${randomUUID}`

        }

        const urlRegexpi = /\.nortecview\.com\/api\/[\S\s]*link[\S\s]*/i
        const result = await this.generalApiRequest(page, await JSON.stringify(body), token, "empty", `/api/v1/links/`, urlRegexpi, "POST")
        const resJson = result.resJson
        const resStatus = result.resStatus

        return { resStatus, resJson }
    }

}