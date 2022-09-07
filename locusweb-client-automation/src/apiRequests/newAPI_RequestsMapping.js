
const puppeteer = require('puppeteer')
const axios = require('axios')
require('axios-debug-log/enable')

const chai = require('chai')
const assert = chai.assert

const { baseURLForApi } = require('../config/configuration')
const { bodyForGeometry, bodyForLinkGeometry } = require('./bodyForBlankEnvRequests')
const NewApiRequests = require('./newAPI_Requests');

module.exports = class NewApiRequestsMapping extends NewApiRequests {

  

    async createGeometry(token, projectID, latitude, longitude) {       
        let response = await this.postGeneralRestCall(this.geometryURL,token,bodyForGeometry(projectID,latitude,longitude))
        
        return response
    }

    async createLinkFromAssetToGeometry(token, assetOrWuID, geometryID, assetOrWorkunit, order, edgeType) {//assetOrWorkunit=ASSET,PROJECT, edgeType= START,END,null
        const response = await this.postGeneralRestCall(this.linkURL,token,bodyForLinkGeometry(assetOrWorkunit,assetOrWuID,geometryID,edgeType,order))
        
        return response
    }

    async mapPoints(token, assetOrWuID, projectID, assetOrWorkunit, startLatitude, startLongitude, numPoints, closeWU = true) {//assetOrWorkunit=ASSET,PROJECT
        let geometries = []
        let links = []

        for (let index = 0; index < numPoints; index++) {
            let resp, resp2
            
            resp = await this.createGeometry(token,projectID,startLatitude - index * 0.0001000000,startLongitude - index * 0.0000800000)
            //    console.log(resp)
            // get id from response and push to array
            let geometryID = await JSON.stringify(resp.data).match(/"id":([0-9]+)/)

            geometryID = geometryID[1]
            geometries.push(geometryID)

            if (assetOrWorkunit == "PROJECT" && index == 0) {
                resp2 = await this.createLinkFromAssetToGeometry(token, assetOrWuID, geometryID, assetOrWorkunit, index + 1, "START")
            }
            else if (assetOrWorkunit == "PROJECT" && index == (numPoints - 1) && closeWU == true) {
                resp2 = await this.createLinkFromAssetToGeometry(token, assetOrWuID, geometryID, assetOrWorkunit, index + 1, "END")
            }
            else {
                resp2 = await this.createLinkFromAssetToGeometry(token, assetOrWuID, geometryID, assetOrWorkunit, index + 1, null)
            }

            let linkID = await JSON.stringify(resp2.data).match(/"id":([0-9]+)/)
            linkID = linkID[1]
            links.push(linkID)

        }

        return { geometries, links }
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