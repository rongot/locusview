const builder = require('../../../common/builder')
const LoginPage = require('../../../pages/loginPage')
const PoliciesManPage = require('../../../pages/policiesManPage')
const ConfigurationPage = require('../../../pages/configurationGeneralPage')
const A_infra_superPage = require('../../../pages/a_infra_superPage')
const V3ReviewAndApprovePage = require('../../../pages/v3ReviewAndApprovePage')
const V3ConfigToolPage = require('./v3ConfigToolPage')
import { table } from 'console'
import Trans from '../../../translation/language'
const chai = require('chai');  
const assert = chai.assert;
const ScreenshotTester = require('puppeteer-screenshot-tester')
const fs = require('fs')


const { baseURL} = require('../../../config/configuration')
const { countTableRows,isElementExists, isElementExistsbyXPath, isXPathVisible } = require('../../../common/assertHelpers')
const locateHelpers = require('../../../common/locateHelpers');
const tableHelpers = require('../../../common/tableHelpers');
const {getXPathAndDoubleClick,getXPathAndClick, waitAndClick,getText,waitAndType, getCountByXPath} = require('../../../common/locateHelpers');
const { is } = require('core-js/fn/object')
const tableRow = `//*[@role="row"][@row-index="{{0}}"]//div[@col-id="{{1}}"]`
const conditionCriteria = "//*[contains(@class,'action-button-icon')]"
//const { all } = require('core-js/fn/promise');


describe(" #newFullFlow Config Tool LV-5192", () => { //the test are ready but the environment is still not updated.
    let page
    let loginPage
    let policiesManPage
    let v3ReviewAndApprovePage
    let v3ConfigToolPage
    let configurationGeneralPage
    let a_infra_superPage
    let tester

    before(async () => {
        page = await builder.build('LargeScreen'); 
        loginPage = new LoginPage(page) 
        policiesManPage = new PoliciesManPage(page)     
        configurationGeneralPage = new ConfigurationPage(page)   
        v3ReviewAndApprovePage = new V3ReviewAndApprovePage(page)
        v3ConfigToolPage = new V3ConfigToolPage(page)
        a_infra_superPage = new A_infra_superPage(page)
        await loginPage.visit()
        await loginPage.login(v3ReviewAndApprovePage.adminUsername, v3ReviewAndApprovePage.adminPassword)

        await waitAndClick(page,locateHelpers.upperIconConfig) //clicks on upper settings icon

        await configurationGeneralPage.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.BUSINESS_LOGIC])

        tester = await ScreenshotTester(0.9)
    })

    after(async () => {
         await builder.closeBrowser()
    })


    it("Should Navigate to Conditions.", async () => {
        await configurationGeneralPage.clickLeftLinkInfra([`Conditions`])//didn't found Conditions in the keys...

        const ConditionTypesText = await getText(page, a_infra_superPage.emptyStateOnTables)//also checks for empty state

        assert.equal(ConditionTypesText," Create Conditions ","Conditions tab was not found.")
    })

    it("Should check for Create button existence.", async () => {
        await configurationGeneralPage.clickLeftLinkInfra([`Conditions`])//didn't found Conditions in the keys...

        const plusButton = await isElementExists(page,a_infra_superPage.addButton)
        
        assert.isTrue(plusButton,"Button is not in place.")
    })

    it("Should Create condition of Asset Type.", async () => {
        //First plus button.
        await waitAndClick(page,a_infra_superPage.addButton)
        
        await getXPathAndClick(page,conditionCriteria,1)//Opens the conditions Criteria window

        page.waitForTimeout(500)
        await v3ConfigToolPage.CreateCondition(page,'Asset Type'+' 1',0)
        page.waitForTimeout(500)
        await getXPathAndClick(page,a_infra_superPage.primaryButtonByText.replace("{{0}}",'"Save"'))
        
        //check for its existence in the table
        const createdValue = await getText(page,tableRow.replace("{{0}}", `0`).replace("{{1}}", `conditionName`))
        assert.equal(createdValue,"Some Asset Type 1","Failed to create Asset Type.")

    })
    it("Should Create condition Form Type.", async () => {
        await waitAndClick(page,a_infra_superPage.addButton)
        
        await getXPathAndClick(page,conditionCriteria,2)//Opens the conditions Criteria window

        page.waitForTimeout(500)
        await v3ConfigToolPage.CreateCondition(page,'Form Type'+' 2',1)
        page.waitForTimeout(500)
        await getXPathAndClick(page,a_infra_superPage.primaryButtonByText.replace("{{0}}",'"Save"'))
        
        //check for its existence in the table
        const createdValue = await getText(page,tableRow.replace("{{0}}", `1`).replace("{{1}}", `conditionName`))
        assert.equal(createdValue,"Some Form Type 2","Failed to create Form Type.")
    })
    it("Should Create condition Project Type", async () => {
        await waitAndClick(page,a_infra_superPage.addButton)
        
        await getXPathAndClick(page,conditionCriteria,2)//Opens the conditions Criteria window

        page.waitForTimeout(500)
        await v3ConfigToolPage.CreateCondition(page,'Project Type'+' 3',2)
        page.waitForTimeout(500)
        await getXPathAndClick(page,a_infra_superPage.primaryButtonByText.replace("{{0}}",'"Save"'))
        //check for its existence in the table
        const createdValue = await getText(page,tableRow.replace("{{0}}", `2`).replace("{{1}}", `conditionName`))
        assert.equal(createdValue,"Some Project Type 3","Failed to create Asset Type.")
    })
    it("Should Create condition Work unit type.", async () => {
        await waitAndClick(page,a_infra_superPage.addButton)
        
        await getXPathAndClick(page,conditionCriteria,2)//Opens the conditions Criteria window

        page.waitForTimeout(500)
        await v3ConfigToolPage.CreateCondition(page,'Work unit Type'+' 4',3)
        page.waitForTimeout(500)
        await getXPathAndClick(page,a_infra_superPage.primaryButtonByText.replace("{{0}}",'"Save"'))
        
        //check for its existence in the table
        const createdValue = await getText(page,tableRow.replace("{{0}}", `3`).replace("{{1}}", `conditionName`))
        assert.equal(createdValue,"Some Work unit Type 4","Failed to create Work unit type.")
    })
    
    it("Should test Existence of Condition Name & Description columns.", async () => {

        //check that Conditions Name  & Description columns exists.
        const conditionName = await getText(page,a_infra_superPage.columnName2.replace("{{0}}",`"${"Condition Name"}"`))
        const description = await getText(page,a_infra_superPage.columnName2.replace("{{0}}",`"${"Description"}"`))

        const expectedResult = { conditionName:"Condition Name",description:"Description" }
        const actualResult = {conditionName:conditionName,description:description }

        assert.deepEqual(actualResult, expectedResult, "Cant find Condition Name or Description in in columns.")
    })


    it("Should test Sorting Option Condition Name", async () => {
        const conditionsTab = await configurationGeneralPage.clickLeftLinkInfra([`Conditions`])//didn't found Conditions in the keys...

        //checking initial value of first cell in the table
        const initialValue = await getText(page,tableRow.replace("{{0}}", `0`).replace("{{1}}", `conditionName`))

        //Click on Sort by Description (Double click for making it descending).
        await getXPathAndClick(page,a_infra_superPage.columnName2.replace("{{0}}",'"Condition Name"'))
        await getXPathAndClick(page,a_infra_superPage.columnName2.replace("{{0}}",'"Condition Name"'))
        
        await page.waitForTimeout(1000)
        const sortedValue = await getText(page,tableRow.replace("{{0}}", `0`).replace("{{1}}", `conditionName`))
        

        const expectedResult = { initialValue:"Some Asset Type 1",sortedValue:"Some Work unit Type 4" }
        const actualResult = {initialValue:initialValue,sortedValue:sortedValue }

        assert.deepEqual(actualResult, expectedResult, "Sorting by Condition Name Failed.")
    })

    it("Should test Sorting Option Description", async () => {
        //reload the page by going to Emails tab
        await configurationGeneralPage.clickLeftLinkInfra([`Emails`])
        await configurationGeneralPage.clickLeftLinkInfra([`Conditions`])//didn't found Conditions in the keys...

        //checking initial value of first cell in the table
        const initialValue = await getText(page,tableRow.replace("{{0}}", `0`).replace("{{1}}", `description`),0)
        
        //Click on Sort by Description (Double click for making it descending).
        await getXPathAndClick(page,a_infra_superPage.columnName2.replace("{{0}}",'"Description"'))
        await getXPathAndClick(page,a_infra_superPage.columnName2.replace("{{0}}",'"Description"'))

        await page.waitForTimeout(1000)
        const sortedValue = await getText(page,tableRow.replace("{{0}}", `0`).replace("{{1}}", `description`))
        const expectedResult = { initialValue:"Some Asset Type 1 Desc ",sortedValue:"Some Work unit Type 4 Desc " }
        const actualResult = {initialValue:initialValue,sortedValue:sortedValue }

        assert.deepEqual(actualResult, expectedResult, "Sorting by Description Failed.")
    })
    
    it("Should test Positive Searching", async () => {
        await configurationGeneralPage.clickLeftLinkInfra([`Conditions`])//didn't found Conditions in the keys...
       
        //Search by Condition Name
        await waitAndClick(page,a_infra_superPage.searchButton)
        await waitAndType(page,a_infra_superPage.searchButton,"Some Form")
        const conditionNameSearchValue  = await getText(page,tableRow.replace("{{0}}", `0`).replace("{{1}}", `conditionName`))
        
        //reload the page by going to Emails tab
        await configurationGeneralPage.clickLeftLinkInfra([`Emails`])
        await configurationGeneralPage.clickLeftLinkInfra([`Conditions`])//didn't found Conditions in the keys...
        
        //Search By Description.
        await waitAndClick(page,a_infra_superPage.searchButton)
        await waitAndType(page,a_infra_superPage.searchButton,"Type 3 Desc")
        const descriptionNameSearchValue  = await getText(page,tableRow.replace("{{0}}", `0`).replace("{{1}}", `conditionName`))
        
        const expectedResult = { conditionNameSearchValue:"Some Form Type 2",descriptionNameSearchValue:"Some Project Type 3" }
        const actualResult = {conditionNameSearchValue:conditionNameSearchValue,descriptionNameSearchValue:descriptionNameSearchValue }
        
        assert.deepEqual(actualResult, expectedResult, "Sorting by Description Failed.")
    })
    
    it("Should test Negative Searching", async () => {

        //reload the page by going to Emails tab
        await configurationGeneralPage.clickLeftLinkInfra([`Emails`])
        await configurationGeneralPage.clickLeftLinkInfra([`Conditions`])//didn't found Conditions in the keys...
        
        //Search by Condition Name
        await waitAndClick(page,a_infra_superPage.searchButton)
        await waitAndType(page,a_infra_superPage.searchButton,"Pita")
        
        const res1  = await isElementExistsbyXPath(page,tableRow.replace("{{0}}", `0`).replace("{{1}}", `conditionName`))
        
        assert.isFalse(res1,"Negative Searching failed.")
        
    })
    it("Should delete conditions", async () => {
        
        await configurationGeneralPage.clickLeftLinkInfra([`Emails`])
        await configurationGeneralPage.clickLeftLinkInfra([`Conditions`])//didn't found Conditions in the keys...

        const initialValue = await getText(page,tableRow.replace("{{0}}", `0`).replace("{{1}}", `conditionName`))
        const valueAfterDelete =await getText(page,tableRow.replace("{{0}}", `0`).replace("{{1}}", `conditionName`))
        await page.waitForTimeout(500)
        
        for (let i = 0; i < 4; i++) {
            //selects the first row
            await getXPathAndDoubleClick(page,tableRow.replace("{{0}}", `0`).replace("{{1}}", `conditionName`))
            await page.waitForTimeout(150)
            await waitAndClick(page,a_infra_superPage.iconDeleteConfig);
            await page.waitForTimeout(150)
            await getXPathAndClick(page,a_infra_superPage.secondaryButtonByText.replace("{{0}}",'"Delete"'))
        }

        const createConditionText = await getText(page, a_infra_superPage.emptyStateOnTables)//also checks for empty state

        assert.equal(createConditionText," Create Conditions ","Delete function failed.")


        
    })
})
