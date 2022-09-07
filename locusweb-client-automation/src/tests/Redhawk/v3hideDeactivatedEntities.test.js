const builder = require('../../common/builder')
const LoginPage = require('../../pages/loginPage')
const SuperPage = require('../../pages/a_infra_superPage')
const ConfigurationGeneralPage = require('../../pages/configurationGeneralPage')
const chai = require('chai');  
const forEach = require('mocha-each');
const assert = chai.assert;
const ScreenshotTester = require('puppeteer-screenshot-tester')
const {collectColumnTexts} = require("../../common/tableHelpers"); 
const { isElementExists,isElementExistsbyXPath, isXPathVisible,countTableRows } = require('../../common/assertHelpers')
const { getXPathAndClick, waitAndClick, getAttribute, getXPathAndType, getValue,getXPathAndDoubleClickWithIndex, getClass, getText} = require('../../common/locateHelpers');

const { is } = require('core-js/fn/object');
import Trans from '../../translation/language'

const ApiRequests =require('../../apiRequests/newAPI_Requests')
const { baseURL } = require('../../config/configuration')
import { page } from '../../common/builder'

describe("#newFullFlow Show/Hide Deactivated Entities & Custom Fields", () => {
    let page
    let loginPage
    let configurationGeneralPage
    let apiR
    let assetToHide='Asset_Without_Support'//AssetCalculation
    let formToHide='Form to Delete'
    let workUnitToHide='Mapable All fields'//'Not_Mappable'
    let workOrderToHide='ALL_INCLUDED'//LifecycleProject
    let entityToHide=[[Trans.keys.CONFIGURATION.MENU.ASSETS,assetToHide],
                      [Trans.keys.CONFIGURATION.MENU.FORMS,formToHide],
                      [Trans.keys.CONFIGURATION.MENU.WORK_UNITS,workUnitToHide],
                      [Trans.keys.CONFIGURATION.MENU.WORK_ORDERS,workOrderToHide]]

    let assetElementToHide= 'mobile small number'
    let formElementToHide='Town'
    let workUnitElementToHide='text field'
    let workOrderElementToHide='url'
    let elementToHide=[[Trans.keys.CONFIGURATION.MENU.ASSETS,assetToHide,assetElementToHide],
                       [Trans.keys.CONFIGURATION.MENU.FORMS,formToHide,formElementToHide],
                       [Trans.keys.CONFIGURATION.MENU.WORK_UNITS,workUnitToHide,workUnitElementToHide],
                       [Trans.keys.CONFIGURATION.MENU.WORK_ORDERS,workOrderToHide,workOrderElementToHide]]                    
                      

    before(async () => {
        page = await builder.build('LargeScreen'); 
        loginPage = new LoginPage(page) 
        apiR=new ApiRequests(baseURL)   
        configurationGeneralPage = new ConfigurationGeneralPage(page)
        
        await loginPage.visit()
        await loginPage.login(configurationGeneralPage.adminUsername, configurationGeneralPage.adminPassword)
        await page.waitForNavigation(`${baseURL}/app/main/review/projects`)
    })
    beforeEach( async () => {
        await page.waitForTimeout(1000)
        let currentURL = await page.url()
        if(!currentURL.includes("main/review/projects")){
            await loginPage.visit()
            await waitAndClick(page,configurationGeneralPage.upperIconRA)
            // await loginPage.login(configurationGeneralPage.adminUsername, configurationGeneralPage.adminPassword)
            // await page.waitForNavigation(`${baseURL}/app/main/review/projects`)
        }     
    })

    after(async () => {
        await builder.closeBrowser()
    })
  describe('LV-4555 Config Tool - Show/Hide Deactivated Entities',()=>{
    forEach(entityToHide).
    it('user should be able to Show and hide inactive %s',async(entity,entityType)=>{
        const checkErrorPopUpNotExist= await isElementExistsbyXPath(page, configurationGeneralPage.messageInstruction.replace("{{0}}", '""'), 'Something went wrong') 
        if(checkErrorPopUpNotExist){
            await getXPathAndClick(page,configurationGeneralPage.primaryButtonByText.replace("{{0}}", '"Got It"')) 
        }
        await configurationGeneralPage.navigateToEntity(entity,entityType)
        await configurationGeneralPage.activeInactivateButtonState(Trans.keys.ACTION.INACTIVATE)
        if(await isElementExistsbyXPath(page,configurationGeneralPage.showBtn)){
           await getXPathAndClick(page,configurationGeneralPage.showBtn)
        }
        const isEntityShown= await isElementExists(page,configurationGeneralPage.cuAggregationByName.replace("{{0}}", `"${entityType}"`))
        assert.isFalse(isEntityShown,`"${assetToHide}" is not on asset table`)
        await page.waitForXPath(configurationGeneralPage.showHideCounter)
        const entityCounter=await getText(page,configurationGeneralPage.showHideCounter)
        assert.isAbove(Number(entityCounter),0,`"the amount of hidden element is ${entityCounter}"`)
        await getXPathAndClick(page,configurationGeneralPage.showBtn)
        // await waitAndClick(page,configurationGeneralPage.upperIconRA)

    })
  })

  describe('LV-4556 Config Tool - Show/Hide Deactivated Custom Fields',()=>{
    forEach(elementToHide).
    it('user should be able to show and hide inactive fields in the configuration %s editor',async (entity,entityType,elementName)=>{
       
        const checkErrorPopUpNotExist= await isElementExistsbyXPath(page, configurationGeneralPage.messageInstruction.replace("{{0}}", '""'), 'Something went wrong') 
        if(checkErrorPopUpNotExist){
            await getXPathAndClick(page,configurationGeneralPage.primaryButtonByText.replace("{{0}}", '"Got It"')) 
        }
        const xpath=configurationGeneralPage.showBtn+configurationGeneralPage.showHideCounter
         await configurationGeneralPage.navigateToEntity(entity,entityType,"Content")
         if(await isElementExistsbyXPath(page,xpath)){
            await getXPathAndClick(page,configurationGeneralPage.showBtn,1)
           
        }
        if(!await isElementExistsbyXPath(page,configurationGeneralPage.inactiveSymbol.replace("{{0}}", `"${elementName}"`))){
            await getXPathAndClick(page,configurationGeneralPage.contentField.replace("{{0}}", `"${elementName}"`))
            await getXPathAndClick(page, configurationGeneralPage.toggleByText.replace("{{0}}", `"${Trans.keys.USERS.INACTIVE}"`))
            await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`)) 
        }
        if(!await isElementExistsbyXPath(page,xpath)){
            await getXPathAndClick(page,configurationGeneralPage.showBtn,1)
           
        }
        await page.waitForTimeout(2000)
        const isEntityShown=await isElementExistsbyXPath(page,configurationGeneralPage.contentField.replace("{{0}}", `"${elementName}"`))
        assert.isFalse(isEntityShown,`"${elementName}" Field Alias is not on ${entityType} ${entity} types`)
        const elementCounter=await getText(page,configurationGeneralPage.showHideCounter)
        assert.isAbove(Number(elementCounter),0,`"the amount of hidden element is ${elementCounter}"`)
        await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`)) 
        await waitAndClick(page,configurationGeneralPage.upperIconRA)
     })
  })

  })