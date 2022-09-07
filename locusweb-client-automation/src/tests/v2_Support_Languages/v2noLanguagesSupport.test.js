const puppeteer = require('puppeteer')
const forEach = require('mocha-each')
const builder = require('../../common/builder')
const LoginPage = require('../../pages/loginPage')
const ConfigurationGeneral = require('../../pages/configurationGeneralPage')

const chai = require('chai');
const assert = chai.assert;
//const ScreenshotTester = require('puppeteer-screenshot-tester')
const { baseURL } = require('../../config/configuration')
const { isElementExistsbyXPath, isElementExists } = require('../../common/assertHelpers')
const { getXPathAndClick, waitXpathNotExist, waitAndClick, getValue, getArrayInnerTexts, getText } = require('../../common/locateHelpers');
import Trans from '../../translation/language'

//const { all } = require('core-js/fn/promise');,

describe("#Localization-78 Languages Support", () => {
    let page
    let loginPage
    let configPage


    before(async () => {
        page = await builder.build('LargeScreen');
        loginPage = new LoginPage(page)
        configPage = new ConfigurationGeneral(page)
        await loginPage.visit()

        //tester = await ScreenshotTester(0.9)

    })

    after(async () => {
        await builder.closeBrowser()
    })

    describe("#fullFlow #LV-150 #v2lang no option to define a default language per company", () => {// should run this test on v2 and v3 environments
        before(async () => {
            await loginPage.login(loginPage.adminUsername, loginPage.adminPassword)
            await page.waitForNavigation(`${baseURL}/app/main/review/projects`)

        })

        it("no option to define a default language per company in v2", async () => {
            await waitAndClick(page, configPage.upperIconConfig)
            await configPage.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.SETTINGS])
            const isSettings = await isElementExists(page, configPage.iconParametersSelector)
            await waitAndClick(page, configPage.editIcon)
            await getXPathAndClick(page, configPage.collapseSectionIcon.replace("{{0}}", `"${Trans.keys.CONFIGURATION.SYSTEM.GPS_QUALITY.TITLE}"`))// collapse GPS
            await getXPathAndClick(page, configPage.collapseSectionIcon.replace("{{0}}", `"${Trans.keys.CONFIGURATION.SYSTEM.ADDITION_MAPPING_SETTINGS.TITLE}"`))// collapse Additional Mapping

            // under general settings additional language is English
            const languageText = await isElementExistsbyXPath(page, configPage.existingValue.replace("{{0}}", `"${Trans.keys.CONFIGURATION.SYSTEM.GENERAL_SETTINGS.DEFAULT_LANGUAGE}"`))
            // cancel
            await getXPathAndClick(page, configPage.secondaryButtonByText.replace("{{0}}", Trans.keys.ACTION.CANCEL))
            await isElementExists(page, configPage.editIcon)
            await getXPathAndClick(page, configPage.expandSectionIcon.replace("{{0}}", `"${Trans.keys.CONFIGURATION.SYSTEM.GPS_QUALITY.TITLE}"`))// expand GPS
            // existingValue
            // genericDropDownArrow
            // collapseSectionIcon
            // expandSectionIcon
            assert.isFalse(languageText, `Language text should not exist`)
            assert.isTrue(isSettings, `Settings icon should be displayed ${configPage.iconParametersSelector}`)
        })
        forEach([["notification on", true], ["notification off", false]]).
            it(`Set in web Poor Quality GPS Data Confirmation - %s`, async (describeName, doNotify) => {
                // set in web  Poor Quality GPS Data Confirmation  - on
                await configPage.setPoorQualityGPSConfirmation(doNotify)
            })

    })




})

