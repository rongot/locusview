const NewApiRequests = require('../apiRequests/newAPI_Requests')
const apiR = new NewApiRequests()

module.exports = class CuFunctions {

    async getCustomCuFieldKeys (token, assetFormTypeID)  {

        let allFields
        let cuFieldsFromTypes = {}
        let response = await apiR.getGeneralRestCall(apiR.assetTypeURL, token, [assetFormTypeID])
        console.log(response)
        allFields = response.data.layout.sections[0].fields

        for(let element of allFields) {
            if(element.partOfCu) {
                cuFieldsFromTypes[`"${element.key}"`] = ""
            }
        }

        return cuFieldsFromTypes
    }
}