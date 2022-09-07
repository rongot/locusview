const puppeteer = require('puppeteer')
const builder = require('../../../common/builder')
const LoginPage = require('../../../pages/loginPage')
const ReviewAndApprovePage = require('../../../pages/reviewAndApprovePage')
const ConfigurationPage= require('../../../pages/configurationGeneralPage')
const UserManPage = require('../../../pages/userManPage')
const chai = require('chai')
const assert = chai.assert
const { baseURL } = require('../../../config/configuration')
const {isElementExists, isElementExistsbyXPath, isXPathVisible} = require('../../../common/assertHelpers')
const { scrollTop, getValue, getXPathAndClick, waitAndClick, getInnerText, getXPathAndDoubleClick} = require('../../../common/locateHelpers')

describe ("Unit of Measurements Tests", () => {
    let page
    let loginPage
    let reviewAndApprovePage
    let configurationGeneralPage
    let userManPage

    before(async () => {
        page = await builder.build('LargeScreen')
        loginPage = new LoginPage(page) 
        reviewAndApprovePage = new ReviewAndApprovePage(page)
        configurationGeneralPage= new ConfigurationPage(page)
        userManPage = new UserManPage(page)
        await loginPage.visit()
        await loginPage.login(loginPage.adminUsername, loginPage.adminPassword)
        await page.waitForNavigation(page.url(`${baseURL}/app/main/review/projects`))
        await waitAndClick(page, reviewAndApprovePage.upperIconConfig)
        await page.waitForTimeout(1000)
    })

     beforeEach( async () => {
     //await page.reload()
    })

    after(async () => {
        await builder.closeBrowser()
    })

    describe("#newFullFlow Unit of Measurements settings V3", () => {

        it("should open Unit of Measurements page", async () => {
            await configurationGeneralPage.clickLeftLinkInfra(["Settings"])
            await getXPathAndClick(page, configurationGeneralPage.editIconI)
            const defaultUoM = await getInnerText(page, 
                reviewAndApprovePage.valueOfFieldWithDropDown.replace('{{0}}', '"Unit"'), 0)
            assert.equal(defaultUoM, "Imperial", "Default value for UoM is wrong or not displayed")
        })

        it("should display options in a correct order", async () => {
            await getXPathAndClick(page, reviewAndApprovePage.specificDropDownArrow.replace('{{0}}', '"Unit"'))
            const values = []
            await page.waitForXPath(configurationGeneralPage.valueFromDropDown.replace('{{0}}', '""'))
            const elements = await page.$x(configurationGeneralPage.valueFromDropDown.replace('{{0}}', '""'))
            let x
            for(x=0; x < elements.length; x++) {
                const innerValue = await elements[x].evaluate(e => e.innerText)
                values.push(innerValue)
            }
            const expected = ['Imperial', 'Imperial - Decimal Feet', 'Metric']
            assert.deepEqual(values, expected)
        })

        it("should set UoM to Metric", async () => {
            await getXPathAndClick(page, 
                configurationGeneralPage.valueFromDropDown.replace('{{0}}', '"Metric"'))
            await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", '"Save"'))
            const defaultUoM = await getInnerText(page, 
                reviewAndApprovePage.valueOfFieldWithDropDown.replace('{{0}}', '"Metric"'), 0)
            assert.equal(defaultUoM, "Metric", "Default value for UoM is wrong or not displayed")

        })

        it("should validate that Accuracy displayed in CM", async () => {
            
            await reviewAndApprovePage.clickProject(["V3 Specific Flows"])
            await page.waitForTimeout(1000)
            await reviewAndApprovePage.clickLeftLinkInfra(["Assets"])
            await getXPathAndClick(page, reviewAndApprovePage.entityTitle.replace("{{0}}", '"ASTM_Pipe"'))
            await page.waitForTimeout(1000)
            await scrollTop(page, '.card-content-data-container.full-height.has-tabs', 1000)
            const path = await reviewAndApprovePage.createPath(reviewAndApprovePage.infoIconForPopup, ["Accuracy"])
            await getXPathAndClick(page, path)
            const pathInnerPopup = await reviewAndApprovePage.createPath(reviewAndApprovePage.valueFromPopup, ["Point 1"])
            const valueA = await getInnerText(page, pathInnerPopup, 0)
            assert.include(valueA, "cm", "Accuracy value is not displayed in cm")  

        })

        it("should set UoM to Decimal Feet", async () => {
            await waitAndClick(page, reviewAndApprovePage.upperIconConfig)
            await configurationGeneralPage.clickLeftLinkInfra(["Settings"])
            await getXPathAndClick(page, configurationGeneralPage.editIconI)
            await getXPathAndClick(page, reviewAndApprovePage.specificDropDownArrow.replace('{{0}}', '"Unit"'))
            await getXPathAndClick(page, 
                configurationGeneralPage.valueFromDropDown.replace('{{0}}', '"Decimal Feet"'))
            await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", '"Save"'))
            const newUoM = await getInnerText(page, 
                reviewAndApprovePage.valueOfFieldWithDropDown.replace('{{0}}', '"Unit"'), 0)
            assert.equal(newUoM, "Imperial - Decimal Feet", "New value for UoM is wrong or not displayed")

        })

        it("should validate that Accuracy and Manual Depth displayed in Decimal Feet", async () => {
           
            await reviewAndApprovePage.clickProject(["Check Manual"])
            await reviewAndApprovePage.clickLeftLinkInfra(["Work Units"])
            await page.waitForTimeout(1000)
            await reviewAndApprovePage.clickLeftLinkInfra(["One Asset"])
            await page.waitForTimeout(500)
            await scrollTop(page, '.card-content-data-container.full-height.has-tabs', 300)
            //for Accuracy
            const path = await reviewAndApprovePage.createPath(reviewAndApprovePage.infoIconForPopup, ["Accuracy"])
            await getXPathAndClick(page, path)
            const pathInnerPopup = await reviewAndApprovePage.createPath(reviewAndApprovePage.valueFromPopup, ["Point 1 - A"])
            const valueA = await getInnerText(page, pathInnerPopup, 0)
            //for Manual Depth
            await reviewAndApprovePage.clickLeftLinkInfra(["One Asset"]) //this click closes the popup
            const path1 = await reviewAndApprovePage.createPath(reviewAndApprovePage.infoIconForPopup, ["Manual Depth"])
            await getXPathAndClick(page, path1)
            const pathInnerPopup1 = await reviewAndApprovePage.createPath(reviewAndApprovePage.valueFromPopup, ["Point 2"])
            const valueMD = await getInnerText(page, pathInnerPopup1, 0)

            assert.include(valueA, "53.8616 ft", "Accuracy value is not displayed in cm")  
            assert.include(valueMD, "1.8 ft", "Accuracy value is not displayed in cm") 
        })

        it("should set UoM to Imperial", async () => {
            await waitAndClick(page, reviewAndApprovePage.upperIconConfig)
            await configurationGeneralPage.clickLeftLinkInfra(["Settings"])
            await getXPathAndClick(page, configurationGeneralPage.editIconI)
            await getXPathAndClick(page, reviewAndApprovePage.specificDropDownArrow.replace('{{0}}', '"Unit"'))
            await getXPathAndClick(page, 
                configurationGeneralPage.valueFromDropDown.replace('{{0}}', '"Imperial"'))
            await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", '"Save"'))
            const newUoM = await getInnerText(page, 
                reviewAndApprovePage.valueOfFieldWithDropDown.replace('{{0}}', '"Unit"'), 0)
            assert.equal(newUoM, "Imperial", "New value for UoM is wrong or not displayed")
        })

        it("should validate that values displayed in inches", async () => {
            
            await reviewAndApprovePage.clickProject(["Check Manual"])
            await reviewAndApprovePage.clickLeftLinkInfra(["Work Units"])
            await reviewAndApprovePage.clickLeftLinkInfra(["One Asset"])
            await page.waitForTimeout(1000)
            await scrollTop(page, '.card-content-data-container.full-height.has-tabs', 300)
            const path = await reviewAndApprovePage.createPath(reviewAndApprovePage.infoIconForPopup, ["Accuracy"])
            await getXPathAndClick(page, path)
            const pathInnerPopup = await reviewAndApprovePage.createPath(reviewAndApprovePage.valueFromPopup, ["Point 1 - A"])
            const valueA = await getInnerText(page, pathInnerPopup, 0)
            await reviewAndApprovePage.clickLeftLinkInfra(["One Asset"]) //this click closes the popup
            const path1 = await reviewAndApprovePage.createPath(reviewAndApprovePage.infoIconForPopup, ["Manual Depth"])
            await getXPathAndClick(page, path1)
            const pathInnerPopup1 = await reviewAndApprovePage.createPath(reviewAndApprovePage.valueFromPopup, ["Point 2"])
            const valueMD = await getInnerText(page, pathInnerPopup1, 0)
            assert.include(valueA, "53' 10\"", "Accuracy value is not displayed in inches")  
            assert.include(valueMD, "1' 9\"", "Accuracy value is not displayed in inches") 
        })


    })
})
    


    
