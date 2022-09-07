const puppeteer = require('puppeteer')
const forEach = require('mocha-each')
const builder = require('../../../common/builder')
const LoginPage = require('../../../pages/loginPage')
const ConfigurationGeneral = require('../../../pages/configurationGeneralPage')
const UserManagement = require('../../../pages/userManPage')
const chai = require('chai');
const assert = chai.assert;
//const ScreenshotTester = require('puppeteer-screenshot-tester')
let { baseURL,baseURL2 } = require('../../../config/configuration')
const { isElementExistsbyXPath, isElementExists } = require('../../../common/assertHelpers')
const { getXPathAndClick, waitXpathNotExist, waitAndClick, getValue, getArrayInnerTexts, getText } = require('../../../common/locateHelpers');
import Trans from '../../../translation/language'
import TransEN from '../../../translation/en'

//const { all } = require('core-js/fn/promise');,

describe("#newFullFlow #Localization-78 Languages Support", () => {
let page
let loginPage
let configPage
let userManPage
//baseURL=baseURL2
    before(async () => {
        page = await builder.build('LargeScreen');
        loginPage = new LoginPage(page)
        configPage = new ConfigurationGeneral(page)
        userManPage = new UserManagement(page)
        await loginPage.visit(baseURL)
        
        //tester = await ScreenshotTester(0.9)

    })

    after(async () => {       
        await builder.closeBrowser()
    })

    describe("#LV-150 #v3lang define a default language per company - no settings access for Approver", () => {// should run this test on v2 and v3 environments
        before(async ()=>{
            await loginPage.login(loginPage.usernameAppriver,loginPage.password)
            await page.waitForNavigation(`${baseURL}/app/main/review/projects`)
            
        })
        after(async ()=>{             
             // logout           
            await loginPage.logout()
            assert.include(page.url(),"app/login",`Incorrect page URL`)
           // await page.waitForNavigation(page.url(`${baseURL}/app/login#`))
        })
        it("Default Language - Approver doesn't have access to company settings", async ()=>{
            
            const isConfigIcon=await isElementExists(page, configPage.upperIconConfig)// false
            const isReviewIcon=await isElementExists(page, configPage.upperIconRA)// true
            assert.isTrue(isReviewIcon, `review icon menu was not found ${configPage.upperIconRA}`)
            assert.isFalse(isConfigIcon, `config icon menu should not be displayed ${configPage.upperIconConfig}`) 
        })
    })

   
    describe("#LV-150 #v3lang define a default language per company", () => {// should run this test on v2 and v3 environments
        before(async ()=>{
            await loginPage.login(loginPage.adminUsername, loginPage.adminPassword)
            await page.waitForNavigation(`${baseURL}/app/main/review/projects`)
            
        })
        after(async()=>{
            Trans.keys = TransEN.keys
        })
                
        it("Default language is English", async () => {
            await waitAndClick(page, configPage.upperIconConfig)
            await configPage.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.SETTINGS])
            await isElementExists(page,configPage.iconParametersSelector)
            await isElementExists(page, configPage.editIcon)
            await getXPathAndClick(page, configPage.collapseSectionIcon.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.GPS_QUALITY.TITLE}"`))// collapse GPS
            await getXPathAndClick(page, configPage.collapseSectionIcon.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.ADDITION_MAPPING_SETTINGS.TITLE}"`))// collapse Additional Mapping
            
            // under general settings additional language is English
            const languageText=await getText(page, configPage.existingValue.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.GENERAL_SETTINGS.DEFAULT_LANGUAGE}"`))
            assert.equal(languageText.trim(),"English")
        })

        it("Default Language under General settings - cancel change", async ()=>{
            await waitAndClick(page, configPage.editIcon)
            // verify save disabled
            const saveDisabledXP=await configPage.primaryDisabledButtonByText.replace("{{0}}",`"${Trans.keys.GENERAL.SAVE}"`)
            const saveNotDisabledXP=await configPage.primaryButtonByTextNotDisabled.replace("{{0}}",`"${Trans.keys.GENERAL.SAVE}"`)
            const isSaveDisabled=await isElementExistsbyXPath(page, saveDisabledXP)// true
            // change language
            await getXPathAndClick(page, configPage.existingValue.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.GENERAL_SETTINGS.DEFAULT_LANGUAGE}"`))
            await getXPathAndClick(page, configPage.valueFromDropDown.replace("{{0}}",`"Ελληνικά (Greek)"`))
            const languageText=await getText(page, configPage.existingValue.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.GENERAL_SETTINGS.DEFAULT_LANGUAGE}"`))//`"Ελληνικά (Greek)"`
            const isSaveEnabled=await isElementExistsbyXPath(page, saveNotDisabledXP)// true
            // cancel
            await getXPathAndClick(page, configPage.secondaryButtonByText.replace("{{0}}",`"${Trans.keys.GENERAL.CANCEL}"`))
            // discard
            await getXPathAndClick(page, configPage.secondaryButtonByText.replace("{{0}}",`"${Trans.keys.GENERAL.DISCARD}"`))
            await isElementExists(page, configPage.editIcon)
             // under general settings additional language is English
            const languageTextAfterCancel=await getText(page, configPage.existingValue.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.GENERAL_SETTINGS.DEFAULT_LANGUAGE}"`))
            
            const expectedResults={isSaveDisabledBeforeChange:true, languageTextAfterSelection:"Ελληνικά (Greek)",
                isSaveEnabledAfterChange:true, languageTextAfterCancel:"English"}
            const actualResults={isSaveDisabledBeforeChange:isSaveDisabled, languageTextAfterSelection:languageText.trim(),
                    isSaveEnabledAfterChange:isSaveEnabled, languageTextAfterCancel:languageTextAfterCancel.trim()}

            assert.deepEqual(actualResults, expectedResults,`results of change language and cancel are incorrect`)
        })

        it("Default Language under General settings - change to Greek", async ()=>{
            await waitAndClick(page, configPage.editIcon)
            // verify save disabled
            const saveDisabledXP=await configPage.primaryDisabledButtonByText.replace("{{0}}",`"${Trans.keys.GENERAL.SAVE}"`)
            const saveNotDisabledXP=await configPage.primaryButtonByTextNotDisabled.replace("{{0}}",`"${Trans.keys.GENERAL.SAVE}"`)
            await isElementExistsbyXPath(page, saveDisabledXP)// true
            // change language
            await getXPathAndClick(page, configPage.existingValue.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.GENERAL_SETTINGS.DEFAULT_LANGUAGE}"`))
            await getXPathAndClick(page, configPage.valueFromDropDown.replace("{{0}}",`"Ελληνικά (Greek)"`))
            const languageText=await getText(page, configPage.existingValue.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.GENERAL_SETTINGS.DEFAULT_LANGUAGE}"`))//`"Ελληνικά (Greek)"`
            await isElementExistsbyXPath(page, saveNotDisabledXP)// true
            await getXPathAndClick(page, saveNotDisabledXP)
            
            await isElementExists(page, configPage.editIcon)
            //the GUI should be in Greek
            const languageTextAfterSave=await getText(page, configPage.existingValue.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.GENERAL_SETTINGS.DEFAULT_LANGUAGE}"`))//the GUI should be in Greek
            
            const expectedResults={languageTextAfterSelection:"Ελληνικά (Greek)",languageTextAfterSave:"Ελληνικά (Greek)"}
            const actualResults={languageTextAfterSelection:languageText.trim(),languageTextAfterSave:languageTextAfterSave.trim()}

            assert.deepEqual(actualResults, expectedResults,`results of change language after save are incorrect`)
        })

        it("Default Language under General settings - change from Greek back to English", async ()=>{// the GUI should be in Greek
            await waitAndClick(page, configPage.upperIconConfig)
            await configPage.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.SETTINGS])
            await isElementExists(page,configPage.iconParametersSelector)
            await isElementExists(page, configPage.editIcon)
            await getXPathAndClick(page, configPage.collapseSectionIcon.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.GPS_QUALITY.TITLE}"`))// collapse GPS
            await getXPathAndClick(page, configPage.collapseSectionIcon.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.ADDITION_MAPPING_SETTINGS.TITLE}"`))// collapse Additional Mapping
            await waitAndClick(page, configPage.editIcon)
            // verify save disabled
            const saveDisabledXP=await configPage.primaryDisabledButtonByText.replace("{{0}}",`"${Trans.keys.GENERAL.SAVE}"`)
            const saveNotDisabledXP=await configPage.primaryButtonByTextNotDisabled.replace("{{0}}",`"${Trans.keys.GENERAL.SAVE}"`)
            await isElementExistsbyXPath(page, saveDisabledXP)// true
            // change language
            await getXPathAndClick(page, configPage.existingValue.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.GENERAL_SETTINGS.DEFAULT_LANGUAGE}"`))
            await getXPathAndClick(page, configPage.valueFromDropDown.replace("{{0}}",`"English"`))
            const languageText=await getText(page, configPage.existingValue.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.GENERAL_SETTINGS.DEFAULT_LANGUAGE}"`))//`"Ελληνικά (Greek)"`
            await isElementExistsbyXPath(page, saveNotDisabledXP)// true
            await getXPathAndClick(page, saveNotDisabledXP)
            
            await isElementExists(page, configPage.editIcon)
            const languageTextAfterSave=await getText(page, configPage.existingValue.replace("{{0}}",`"${Trans.keys.CONFIGURATION.SYSTEM.GENERAL_SETTINGS.DEFAULT_LANGUAGE}"`))
            
            const expectedResults={languageTextAfterSelection:"English",languageTextAfterSave:"English"}
            const actualResults={languageTextAfterSelection:languageText.trim(),languageTextAfterSave:languageTextAfterSave.trim()}

            assert.deepEqual(actualResults, expectedResults,`results of change language after save are incorrect`)
        })
    })



})

