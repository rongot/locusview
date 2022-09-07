const ApiRequests = require("./newAPI_Requests")

//Mappable_Point to Mappable_Line

module.exports = class ApiRequestsCU extends ApiRequests {

    cuTypeURL = "/api/v1/config/compatible-unit-types"
    
    async getCuTypeFields(token) {
        let body = ""
        let cuFields = {}
        const result = await this.getGeneralRestCall(this.cuTypeURL, token)
        const resJson = result.data
        const resStatus = result.status
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