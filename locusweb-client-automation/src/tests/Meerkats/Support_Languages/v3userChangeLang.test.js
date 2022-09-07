const puppeteer = require('puppeteer')
const forEach = require('mocha-each')
const builder = require('../../../common/builder')
const LoginPage = require('../../../pages/loginPage')
const SuperPage = require('../../../pages/a_infra_superPage')
const NewApiRequests = require('../../../apiRequests/newAPI_Requests')

const ConfigurationGeneral = require('../../../pages/configurationGeneralPage')
const ReviewAndApprovePage = require('../../../pages/reviewAndApprovePage')

const chai = require('chai');
const assert = chai.assert;
//const ScreenshotTester = require('puppeteer-screenshot-tester')
let { baseURL, baseURLForApi, baseURL2 } = require('../../../config/configuration')
const { isElementExistsbyXPath, isElementExists,getAllAttributesXpath } = require('../../../common/assertHelpers')
const { getXPathAndClick, waitXpathNotExist, waitAndClick, getValue, getArrayInnerTexts, getText, getTextSelector,getAttribute,mouseHoverXpath } = require('../../../common/locateHelpers');
import Trans from '../../../translation/language'
import TransEN from '../../../translation/en'
import TransEL from '../../../translation/el'

//const { all } = require('core-js/fn/promise');,

describe("#newFullFlow #Localization-78 Languages Support", () => {
    let page
    let superPage
    let browser
    let loginPage
    let configPage
    let reviewAndApprovePage
    let apiR
    let token
    //baseURL=baseURL2

    before(async () => {
        page = await builder.build('LargeScreen')

        //page = await builder.build('LargeScreen'); 
        
        loginPage = await new LoginPage(page)
        apiR = await new NewApiRequests(baseURL)
        configPage = await new ConfigurationGeneral(page)
        reviewAndApprovePage = await new ReviewAndApprovePage(page)
        superPage = new SuperPage()

        await loginPage.visit(baseURL)
        await isElementExists(page, loginPage.usernameField)
        // generate token and check defaule language
        token = await apiR.authenticate(superPage.adminUsername, superPage.adminPassword)
        const defaultLanguageSetting = await apiR.getGeneralRestCall(apiR.settingsURL, token)
        assert.equal(defaultLanguageSetting.data.defaultLanguage, "en", `default language should be English`)

        await loginPage.login(loginPage.adminUsername, loginPage.adminPassword)
        await isElementExists(page, configPage.topIconUser)
    })

    after(async () => {
        await builder.closeBrowser()
        
    })

    describe("LV-151 Web - Ability to change Application interface language", () => {
        after(async()=>{
            Trans.keys = TransEN.keys
        })
        it("Check user menu", async () => {
            // click on user menu
            await waitAndClick(page, configPage.topIconUser) 
            await page.waitForTimeout(500)
            await isElementExistsbyXPath(page,configPage.signOutBtn)// true
            const isSignOut=await isElementExistsbyXPath(page,configPage.signOutBtn)// true
            // check buttons design  
            const colorGeneralPreferences = await getAllAttributesXpath(page,configPage.generalPreferencesBtn,'color')//rgb(102, 102, 102)
            const colorSignOut = await getAllAttributesXpath(page,configPage.signOutBtn,'color')//rgb(102, 102, 102)
            
            await mouseHoverXpath(page,configPage.signOutBtn)
            await page.waitForTimeout(500)
            const colorSignOutHover = await getAllAttributesXpath(page,configPage.signOutBtn,'color')//rgb(196, 83, 44)
            // click on user menu to close it
            await waitAndClick(page, configPage.topIconUser)
            const isSignOutAfterCloseMenu=await isElementExistsbyXPath(page,configPage.signOutBtn)// false

            const expectedResults={ 
                isSignOut:true,
                colorGeneralPreferences:"rgb(102, 102, 102)",colorSignOut: "rgb(102, 102, 102)",colorSignOutHover:"rgb(196, 83, 44)",
                isSignOutAfterCloseMenu:false
            }
            const actualResults={ 
                isSignOut:isSignOut,
                colorGeneralPreferences:colorGeneralPreferences,colorSignOut: colorSignOut,colorSignOutHover:colorSignOutHover,
                isSignOutAfterCloseMenu:isSignOutAfterCloseMenu
            }

            assert.deepEqual(actualResults,expectedResults, `User menu is not as expected`)

        })
        it("User change language from English to Greek", async () => {
            const selectedLang = await configPage.changeLang("Ελληνικά (Greek)")
            loginPage = new LoginPage(page)
            reviewAndApprovePage = new ReviewAndApprovePage(page)
            configPage = new ConfigurationGeneral(page)
            const isSearchField = await isElementExistsbyXPath(page, reviewAndApprovePage.searchFieldLM)
            assert.equal(selectedLang, "Ελληνικά (Greek)", `selected language is not Greek`)
            assert.isTrue(isSearchField, `search field in greek was not found ${reviewAndApprovePage.searchFieldLM}`)
        })
        it("logout - the language is Greek", async () => {
            await configPage.logout()
            const usernameText = await getTextSelector(page, loginPage.usernameFieldTitle)
            assert.equal(usernameText, Trans.keys.LOGIN.USER_NAME, `Username text is incorrect found ${loginPage.usernameField}`)
        })
        it("login as approver an change language to English", async () => {
            await loginPage.login(loginPage.usernameAppriver, loginPage.password)
            const selectedLang = await configPage.changeLang("English")
            loginPage = new LoginPage(page)
            reviewAndApprovePage = new ReviewAndApprovePage(page)
            configPage = new ConfigurationGeneral(page)
            const isSearchField = await isElementExistsbyXPath(page, reviewAndApprovePage.searchFieldLM)
            assert.isTrue(isSearchField, `search field in English was not found ${reviewAndApprovePage.searchFieldLM}`)
            assert.equal(selectedLang, "English", `selected language is not English`)
        })
        it("Verify cancelling language change", async () => {
            // click on user menu
            await waitAndClick(page, configPage.topIconUser)
            // click on settings
            await getXPathAndClick(page, configPage.generalPreferencesBtn)
            await page.waitForTimeout(1000)

            // General Preferences Popup
            await configPage.selectValueFromDD(`"${TransEN.keys.GENERAL_PREFERENCES.INTERFACE_LANGUAGE}"`, `"Ελληνικά (Greek)"`)

            // verify greek selected
            let selectedLang = await getText(page, configPage.valueOfFieldWithDropDown.replace("{{0}}", `"${Trans.keys.GENERAL_PREFERENCES.INTERFACE_LANGUAGE}"`))//"Language Ελληνικά (Greek)"
            selectedLang = await selectedLang.replace(/\s+/g, ' ').trim()//Remove Extra Spaces From a String

            //cancel
            await getXPathAndClick(page, configPage.secondaryButtonByText.replace("{{0}}", Trans.keys.ACTION.CANCEL))
            const isSearchField = await isElementExistsbyXPath(page, reviewAndApprovePage.searchFieldLM)
            assert.isTrue(isSearchField, `search field in English was not found ${reviewAndApprovePage.searchFieldLM}`)
            assert.equal(selectedLang, "Ελληνικά (Greek)", `selected language is not Ελληνικά (Greek)`)
        })
        it("logout - the language is English", async () => {
            await configPage.logout()
            const usernameText = await getTextSelector(page, loginPage.usernameFieldTitle)
            assert.equal(usernameText, Trans.keys.LOGIN.USER_NAME, `Username text is incorrect found ${loginPage.usernameField}`)
        })
        it("Default Language changed to Greek - Verify stored language is preserved - English", async () => {
            // change default language to Greek via API    
            const setGreekAsDefault = await apiR.setEnvironmentDefaultLanguage(apiR.settingsURL, token, "el")
            assert.equal(setGreekAsDefault.data.defaultLanguage, "el", `default language should be Greek`)

            // login back with admin - language should be English
            await loginPage.login(loginPage.adminUsername, loginPage.adminPassword)

            const isSearchField = await isElementExistsbyXPath(page, reviewAndApprovePage.searchFieldLM)
            assert.isTrue(isSearchField, `search field in English was not found ${reviewAndApprovePage.searchFieldLM}`)
        })
        it("Default Language - login page always in English in new session - web v3", async () => {
            await builder.closeBrowser()
            
            page = await builder.build('LargeScreen')

            //page = await builder.build('LargeScreen'); 
            
            
            loginPage = await new LoginPage(page)
            apiR = await new NewApiRequests(baseURL)
            configPage = await new ConfigurationGeneral(page)
            reviewAndApprovePage = await new ReviewAndApprovePage(page)

            await loginPage.visit(baseURL)
            await isElementExists(page, loginPage.usernameField)
            const usernameText = await getTextSelector(page, loginPage.usernameFieldTitle)
            assert.equal(usernameText, Trans.keys.LOGIN.USER_NAME, `Username text is incorrect found ${loginPage.usernameField}`)
        })
        it("Default Language changed to Greek - v3 Web User - new session", async () => {
            // login back with admin - language should be Greek
            await loginPage.login(loginPage.adminUsername, loginPage.adminPassword)
            Trans.keys = TransEL.keys
            loginPage = await new LoginPage(page)
            apiR = await new NewApiRequests(baseURL)
            configPage = await new ConfigurationGeneral(page)
            reviewAndApprovePage = await new ReviewAndApprovePage(page)
            const isSearchField = await isElementExistsbyXPath(page, reviewAndApprovePage.searchFieldLM)
            assert.isTrue(isSearchField, `search field in English was not found ${reviewAndApprovePage.searchFieldLM}`)
        })
        it("Default Language - default language changed from Greek to English", async () => {
            // change default language to English via API    
            const setEnglishAsDefault = await apiR.setEnvironmentDefaultLanguage(apiR.settingsURL, token, "en")
            assert.equal(setEnglishAsDefault.data.defaultLanguage, "en", `default language should be English`)
        })
        it("logout - the language is Greek", async () => {
            await configPage.logout()
            const usernameText = await getTextSelector(page, loginPage.usernameFieldTitle)
            assert.equal(usernameText, Trans.keys.LOGIN.USER_NAME, `Username text is incorrect found ${loginPage.usernameField}`)
        })
        it("Default Language - default language changed from Greek to English - user didn't change his application language - web", async () => {
            // login back with admin - language should be Greek
            await loginPage.login(loginPage.adminUsername, loginPage.adminPassword)
            Trans.keys = TransEN.keys
            loginPage = await new LoginPage(page)
            apiR = await new NewApiRequests(baseURL)
            configPage = await new ConfigurationGeneral(page)
            reviewAndApprovePage = await new ReviewAndApprovePage(page)
            const isSearchField = await isElementExistsbyXPath(page, reviewAndApprovePage.searchFieldLM)
            assert.isTrue(isSearchField, `search field in English was not found ${reviewAndApprovePage.searchFieldLM}`)

        })
    })
})

