
const puppeteer = require('puppeteer')
const axios = require('axios')
require('axios-debug-log/enable')

const chai = require('chai')
const assert = chai.assert

const { baseURLForApi } = require('../config/configuration')
const { bodyForGeometry, bodyForLinkGeometry } = require('./bodyForBlankEnvRequests')

module.exports = class NewApiRequests {

    constructor(baseURL = baseURLForApi) {
        this.baseURL = baseURL
    }

    getPermissions = "/api/v2/users/me/permissions"
    settingsURL = "/api/v1/config/general-settings"
    assetTypeURL = "/api/v1/config/mapping/asset-types"
    formTypeURL = "/api/v1/config/mapping/form-types"
    projectTypeURL = "/api/v1/config/project-types"
    alertTypeURL = "/api/v1/config/alert-types"
    metricTypeURL = "/api/v1/config/metric-types"
    notificationTypeURL = "/api/v1/config/notification-types"
    reconTypeURL= "/api/v1/config/recon/recon-types"
    cuTypeURL = "/api/v1/config/compatible-unit-types"
    cuTypeRecordURL = "/api/v1/compatible-units"
    cuDesingsURL = "/api/v1/designs"
    cuSumByURL = "/api/v1/config/aggregation-types/1/sum-by-method"

    
    tagURL = "/api/v1/config/tags"
    catalogRowURL = "/api/v1/catalogs/assets"
    reconURL="/api/v1/config/recon"
    

    userURL = "/api/v1/users"
    groupURL = "/api/v1/groups"
    policyURL = "/api/v1/policies"
    projectURL = "/api/v1/projects"
    assetURL="/api/v1/assets"
    geometryURL="/api/v1/geometries"
    linkURL="/api/v1/links/"
    formURL = "/api/v1/forms"
    reconMetricsUrl='/api/v1/recons'
    measureMentUrl="/api/v1/measurements"

    sharedListURL="/api/v1/config/shared-lists"
    
    handlePathParams(pathParams = []) {
        return pathParams.reduce((prevValue, param) => {
            prevValue = prevValue + `/${param}`

            return prevValue
        }, '')
    }

    async authenticate(username, password) {
        const fullUrl = this.baseURL + '/api/v1/authenticate'
        const data = {
            username,
            password,
            acceptedTerms: true
        }
        const headers = {
            'Content-Type': 'application/json',
        }
        const config = {headers}
        const response = await axios.post(fullUrl, data, config)
        return response.data.token
    }
    
    async postGeneralRestCall(url, token, body) {
        let response
        const fullUrl = this.baseURL + url
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
        const config = {headers}
        try {
            response = await axios.post(fullUrl, body, config)
        } catch (err) {
            console.error(err.message, err.response.data)
        }
        return response
    }

    async putGeneralRestCall(url, token, body, pathParams){
        let response
        const fullUrl = this.baseURL + url + this.handlePathParams(pathParams)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
        const config = {headers}
        try {
            response = await axios.put(fullUrl, body, config)
        } catch (err) {
            console.error(err.message, err.response.data)
        }
        return response
    }

    async patchGeneralRestCall(url, token, body, pathParams){
        let response
        const fullUrl = this.baseURL + url + this.handlePathParams(pathParams)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
        const config = {headers}
        try {
            response = await axios.patch(fullUrl, body, config)
        } catch (err) {
            console.error(err.message, err.response.data)
        }
        return response
    }

    async getGeneralRestCall(url, token, pathParams){
        let response
        const fullUrl = this.baseURL + url + this.handlePathParams(pathParams)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
        const config = {headers}
        try {
            response = await axios.get(fullUrl, config)
        } catch (err) {
            console.error(err.message, err.response.data)
        }
        return response
    }

    async deleteGeneralRestCall(url, token, pathParams) {
        let response
        const fullUrl = this.baseURL + url + this.handlePathParams(pathParams)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
        const config = {headers}
        try {
            response = await axios.delete(fullUrl, config)
        } catch (err) {
            console.error(err.message, err.response.data)
        }
        return response
    }

    async getIdByNameFromArray(url, token, name) {
        const response = await this.getGeneralRestCall(url, token)
        // TODO verify rest call success by status
        const { data = [], status } = response
        const item = data.find(el => {
            return el.title === name
        })

        if(!item || !item.id) {
            throw new Error(`Can not find Element by name: ${name}`)
        }

        return item.id
    }

    async setEnvironmentDefaultLanguage(url, token, lang = "en") {
        let settings = await this.getGeneralRestCall(url, token)
        settings.data.defaultLanguage = lang
        let body = settings.data
        const response = await this.postGeneralRestCall(url, token, body)
        return response
    }

}

/*postGeneralRestCall(url, token, body, inputHeaders = {}, pathParams) {
    // TODO add path params handling
    const fullUrl = this.baseURL + url
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
        ...inputHeaders
    }

    const config = {headers}

    return axios.post(fullUrl, body, config)
}*/