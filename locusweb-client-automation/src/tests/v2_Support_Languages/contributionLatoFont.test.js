const puppeteer = require('puppeteer')
const forEach = require('mocha-each')
const builder = require('../../common/builder')
const LoginPage = require('../../pages/loginPage')
const ConfigurationGeneral = require('../../pages/configurationGeneralPage')
const UserManagement = require('../../pages/userManPage')

const chai = require('chai');
const assert = chai.assert;
//const ScreenshotTester = require('puppeteer-screenshot-tester')
const { baseURL } = require('../../config/configuration')
const { isElementExistsbyXPath } = require('../../common/assertHelpers')
const { getXPathAndClick, waitXpathNotExist, waitAndClick, getValue, getArrayInnerTexts, getText } = require('../../common/locateHelpers');
import Trans from '../../translation/language'

//const { all } = require('core-js/fn/promise');,

describe("#Localization-78 Languages Support", () => {
let page
let loginPage
let configPage
let userManPage

    before(async () => {
        page = await builder.build('LargeScreen');
        loginPage = new LoginPage(page)
        configPage = new ConfigurationGeneral(page)
        userManPage = new UserManagement(page)
        await loginPage.visit()

        //tester = await ScreenshotTester(0.9)

    })

    after(async () => {
        await builder.closeBrowser()
    })

    describe("#fullFlow LV-2236 Contribution to Lato Font: "+baseURL, () => {// should run this test on v2 and v3 environments
        
        const data = [["admin user", "test1", "12345678"], ["viewer user", "TestV", "nView123"]]        
        forEach(data).it("Verify Contribution with - %s", async (testTitle, userType, userPassword) => {
            await loginPage.login(userType, userPassword)
            await page.waitForNavigation(`${baseURL}/app/main/review/projects`)
            await isElementExistsbyXPath(page, loginPage.infoIcon)
            await getXPathAndClick(page, loginPage.infoIcon)
            await getXPathAndClick(page, loginPage.selectorByTextDiv.replace("{{0}}", `"${Trans.keys.GENERAL.ADDITIONAL_COPYRIGHT_INFO}"`))
            await isElementExistsbyXPath(page, configPage.infoDialog)
            const infoText = await getText(page, configPage.infoDialog)// include Trans.keys.GENERAL.ADDITIONAL_COPYRIGHT_INFO and include  "Locusview application is using LatoFont."
            await waitAndClick(page, loginPage.serchPpupCloseRnA)
            // verify popup is closed
            await waitXpathNotExist(page, configPage.infoDialog)
            const isDialog = await isElementExistsbyXPath(page, configPage.infoDialog)// false
            // logout
            await loginPage.logout()
            assert.include(page.url(),"app/login",`Incorrect page URL`)
            //await page.waitForNavigation(page.url(`${baseURL}/app/login#`))

            assert.include(infoText, Trans.keys.GENERAL.ADDITIONAL_COPYRIGHT_INFO, `info texts doesn't include required text`)
            assert.include(infoText, "Locusview application is using LatoFont.", `info texts doesn't include required text`)
            assert.isFalse(isDialog, `Dialog should be closed after close was clicked`)
        })
    })



})

