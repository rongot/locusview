const get = require('core-js/fn/reflect/get')
const { waitAndClick, waitAndType, getXPathAndClick} = require('../common/locateHelpers')
const { baseURL } = require('../config/configuration')
const InfraPage = require('./a_infra_superPage')

module.exports = class CuPage extends InfraPage{

    //these are page element selectors
    forgotError = '.login-invalid-username'
    forgotErrotXPath = '//*[contains(@class, "login-invalid-username")]'
    userLicenseAgreement = '//div[@class = "login-terms flex"]/a' 
    licenseAgreementHeaderText = '[elementor-heading-title.elementor-size-default]'
    
    constructor(page) {
        super(page)       
    }

    
}

