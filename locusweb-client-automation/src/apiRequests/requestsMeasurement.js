const ApiRequests = require("./newAPI_Requests")

//Mappable_Point to Mappable_Line

module.exports = class ApiRequestsMeasurement extends ApiRequests {

    measurementURL = "/api/v1/measurements"
    
    bodyBetween = {//Mappable_Point to Mappable_Line
        "updateUser": {
            "id": 10,
            "username": "mobile",
            "firstName": null,
            "lastName": null,
            "guid": "83618671-6532-11eb-8eb4-020cb33bdfb6",
            "email": null,
            "status": "ACTIVE",
            "groupIds": null
        },
        "projectId": 55,
        "uuid": null,
        "originEntityType": "PROJECT",
        "originEntityId": 58,
        "originGeometryId": 56,
        "destinationEntityType": "PROJECT",
        "destinationEntityId": 57,
        "destinationGeometryId": 54,
        "type": "BETWEEN_VERTICES",
        "calculationMethod": "CALCULATED",
        "manualHeadings": {
            "manualHorizontalDistanceInFeet": null,
            "manualAlongDistanceInFeet": null
        },
        "headings": {
            "horizontalDistanceInFeet": 157.58202604,
            "verticalDistanceInFeet": null,
            "offsetInFeet": null,
            "azimuth": 66.61312637626588,
            "grade": null,
            "slopeDistanceInFeet": null,            
        },
        "pathGeometriesIds": null,
        "intersection": null,
        "deleted": false
    }
    bodyBetweenPerpendicular = {//Asset_Without_Support to Mappable_Line
        "updateUser": {
            "id": 10,
            "username": "mobile",
            "firstName": null,
            "lastName": null,
            "guid": "83618671-6532-11eb-8eb4-020cb33bdfb6",
            "email": null,
            "status": "ACTIVE",
            "groupIds": null
        },
        "projectId": 55,
        "uuid": null,
        "originEntityType": "ASSET",
        "originEntityId": 79,
        "originGeometryId": 58,
        "destinationEntityType": "PROJECT",
        "destinationEntityId": 57,
        "destinationGeometryId": null,
        "type": "BETWEEN_ENTITIES",
        "calculationMethod": "CALCULATED",
        "manualHeadings": {
            "manualHorizontalDistanceInFeet": null,
            "manualAlongDistanceInFeet": null
        },
        "headings": {
            "horizontalDistanceInFeet": 39.13385952,
            "verticalDistanceInFeet": null,
            "offsetInFeet": null,
            "azimuth": 206.9343049879944,
            "grade": null,
            "slopeDistanceInFeet": null,            
        },
        "pathGeometriesIds": null,
        "intersection": {
            "longitude": 34.80920914518521,
            "latitude": 32.159522641005886
        },
        "deleted": false
    }
    bodyAlong = {//Mappable_Line To Asset_Without_Support
        "updateUser": {
            "id": 10,
            "username": "mobile",
            "firstName": null,
            "lastName": null,
            "guid": "83618671-6532-11eb-8eb4-020cb33bdfb6",
            "email": null,
            "status": "ACTIVE",
            "groupIds": null
        },
        "projectId": 55,
        "uuid": null,
        "originEntityType": "PROJECT",
        "originEntityId": 57,
        "originGeometryId": 52,
        "destinationEntityType": "ASSET",
        "destinationEntityId": 79,
        "destinationGeometryId": 58,
        "type": "OFFSET",
        "calculationMethod": "CALCULATED",
        "manualHeadings": {
            "manualHorizontalDistanceInFeet": null,
            "manualAlongDistanceInFeet": null
        },
        "headings": {
            "horizontalDistanceInFeet": 39.13385952,
            "verticalDistanceInFeet": null,
            "offsetInFeet": 164.42585828,
            "azimuth": 26.934274381902185,
            "grade": null,
            "slopeDistanceInFeet": null,            
        },
        "pathGeometriesIds": [
            52,
            53
        ],
        "intersection": {
            "longitude": 34.80920914518521,
            "latitude": 32.159522641005886
        },
        "deleted": false
    }
    
    async createNewMeasurement(token, body) {
        const response = await this.postGeneralRestCall(this.measurementURL, token, body)
        return response
    }

    async updateMeasurement(token, body, mesurementID) {
        const response = await this.putGeneralRestCall(this.measurementURL, token, body, [mesurementID])
        return response
    }

    async getMeasurements(token, projectID){
        const measurementsByProjectIdURL = `/api/v1/measurements/?projectId=${projectID}`
        const response = await this.getGeneralRestCall(measurementsByProjectIdURL, token)
        return response
    }

    async getMeasurementById(token, measurementID){
        const response = await this.getGeneralRestCall(this.measurementURL, token, [measurementID])
        return response
    }

    async deleteMeasurements(token, measurementID){
        const response = await this.deleteGeneralRestCall(this.measurementURL, token, [measurementID])
        return response
    }


}