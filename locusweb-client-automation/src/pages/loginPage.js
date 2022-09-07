const get = require('core-js/fn/reflect/get')
const { waitAndClick, waitAndType, getXPathAndClick} = require('../common/locateHelpers')
const { baseURL } = require('../config/configuration')
const InfraPage = require('./a_infra_superPage')

module.exports = class LoginPage extends InfraPage{

    //these are page element selectors
    forgotError = '.login-invalid-username'
    forgotErrotXPath = '//*[contains(@class, "login-invalid-username")]'
    userLicenseAgreement = '//div[@class = "login-terms flex"]/a' 
    licenseAgreementHeaderText = '[elementor-heading-title.elementor-size-default]'
    helpBlock='.help-block'
    
    constructor(page) {
        super(page)       
    }

    //these are methods used on this page 
    async visit(url=baseURL) {
        await this.page.goto(url, {
            waitUntil: 'load',
            // Remove the timeout
            timeout: 0
        })  
    }

    async loginAsAdmin() {
        await this.login(this.adminUsername, this.adminPassword)
    }
    
    async login(userName, password) {
        await waitAndType(this.page, this.usernameField, userName)
        //await waitAndClick(this.page, this.termsCheckBox)
        //await getXPathAndClick(this.page, this.primaryButtonByText.replace('{{0}}', '""'))
        await waitAndType(this.page, this.passwordField, password)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace('{{0}}', '""'))   
    }
}

