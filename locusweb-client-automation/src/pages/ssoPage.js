const get = require('core-js/fn/reflect/get')
const { waitAndClick, waitAndType, getXPathAndClick} = require('../common/locateHelpers')
const InfraPage = require('./a_infra_superPage')

module.exports = class SsoPage extends InfraPage{
    
    constructor(page) {
        super(page)       
    }
    π
    async loginWithUserName(userName) {
        await waitAndType(this.page, this.usernameField, userName)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace('{{0}}', '""'))   
    }
}

