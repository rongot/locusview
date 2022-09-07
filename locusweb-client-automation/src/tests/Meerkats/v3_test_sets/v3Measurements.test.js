const builder = require('../../../common/builder')
const LoginPage = require('../../../pages/loginPage')
const PoliciesManPage = require('../../../pages/policiesManPage')
const V3ReviewAndApprovePage = require('../../../pages/v3ReviewAndApprovePage')
import Trans from '../../../translation/language'
const chai = require('chai');  
const assert = chai.assert;
const ScreenshotTester = require('puppeteer-screenshot-tester')
const fs = require('fs')

const { baseURL} = require('../../../config/configuration')
const { isElementExists, isElementExistsbyXPath, isXPathVisible } = require('../../../common/assertHelpers')
const { getXPathAndClick, getInnerText, getXPathAndType, waitAndClick,getText, getValue} = require('../../../common/locateHelpers');
const { is } = require('core-js/fn/object')
//const { all } = require('core-js/fn/promise');

describe("#reviewAndApprove Manual Measurement LV-3585", () => {
    let page
    let loginPage
    let policiesManPage
    let v3ReviewAndApprovePage
    let tester
    const listOfTexts = []

    before(async () => {
        page = await builder.build('LargeScreen'); 
        loginPage = new LoginPage(page) 
        policiesManPage = new PoliciesManPage(page)        
        v3ReviewAndApprovePage = new V3ReviewAndApprovePage(page)
        await loginPage.visit()
        await loginPage.login(v3ReviewAndApprovePage.adminUsername, v3ReviewAndApprovePage.adminPassword)
        await page.waitForNavigation(`${baseURL}/app/main/review/projects`)
        //tester = await ScreenshotTester(0.9)
    })

    beforeEach( async () => {
        await page.waitForTimeout(500)
        let currentURL = await page.url()
        if(!currentURL.includes("main/review/projects")){
            console.log(page.url())
            await loginPage.visit()
            await loginPage.login(v3ReviewAndApprovePage.adminUsername, v3ReviewAndApprovePage.adminPassword)
            await page.waitForNavigation(`${baseURL}/app/main/review/projects`)
        }     
    })

    /*afterEach( async () => {
        const elements = await page.$x('//*[not(self::style)][not(*)][string-length(text()) > 0]')
        //const elements = await page.$x('//*[not(self::style)][string-length(text()) > 0]')
        for(let x = 0; x < elements.length; x++){
            const text = await elements[x].evaluate(e => e.innerText)
            if(text && !listOfTexts.includes(text)) {
                listOfTexts.push(text)
            }
        }
    })*/

    after(async () => {
        await builder.closeBrowser()
    })

    describe("#newFullFlow Measurements on Cards", async () => { 
        
        it("should validate Measurements Empty State", async () => {
            await v3ReviewAndApprovePage.clickProject(["V3 Specific"])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])
            const emptyState = await isXPathVisible(page, v3ReviewAndApprovePage.measureEmptyState)
            assert.isTrue(emptyState, "Measurement Empty State is missed")
        })

        it("should open Measurements First Card", async () => {
            await v3ReviewAndApprovePage.clickProject(["Measure Project"])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])
            await page.waitForXPath(v3ReviewAndApprovePage.cardTitle)
            const header = await getInnerText(page, v3ReviewAndApprovePage.cardTitle, 0)
            assert.equal(header, "Measurements", "The First Card is not opened" )
        })

        it("should not allow editing Measurements First Card", async () => {
            await page.waitForXPath(v3ReviewAndApprovePage.hideCardIcon)
            const edit = await isElementExistsbyXPath(v3ReviewAndApprovePage.editIconI)
            assert.isFalse(edit, "The edit button is not hidden on First Card")
            
        })

        it("should display scroll on Measurements First Card", async () => {
            await page.waitForSelector('cdk-virtual-scroll-viewport')
            const button = await page.evaluate(() => {
            const btn = document.querySelector('cdk-virtual-scroll-viewport')
            return JSON.parse(JSON.stringify(window.getComputedStyle(btn)))
            }) 
            assert.equal('auto', button.overflowX, "x")  
            assert.equal('auto', button.overflowY, "y")  
        })

        it("should open Measurements Second Card", async () => {
            await v3ReviewAndApprovePage.clickProject(["Measure Project"])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])
            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", '"Reference point To"'))
            await page.waitForTimeout(1000)
            const secondCardTitle = await getInnerText(page, v3ReviewAndApprovePage.cardTitle, 1)
            assert.equal(secondCardTitle, "Reference point To Asset_Without_Support", "Second Card is not opened")
        })

        it("Should collapse second card measurement sections", async()=>{

            const isTitleDisplayed = await isXPathVisible(page,v3ReviewAndApprovePage.fieldTitle.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_TYPE}"`))
            await v3ReviewAndApprovePage.collapseSection(Trans.keys.MEASUREMENTS.BETWEEN_MEASUREMENTS)
            await v3ReviewAndApprovePage.collapseSection(Trans.keys.MEASUREMENTS.CALCULATED_MEASUREMENT)
            await v3ReviewAndApprovePage.collapseSection(Trans.keys.MORE_INFO.TITLE)

            const isTitleHidden = await isXPathVisible(page,v3ReviewAndApprovePage.fieldTitle.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_TYPE}"`))

            await getXPathAndClick(page, v3ReviewAndApprovePage.expandSectionIcon.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.BETWEEN_MEASUREMENTS}"`))
            await getXPathAndClick(page, v3ReviewAndApprovePage.expandSectionIcon.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.CALCULATED_MEASUREMENT}"`))
            await getXPathAndClick(page, v3ReviewAndApprovePage.expandSectionIcon.replace("{{0}}", `"${Trans.keys.MORE_INFO.TITLE}"`))
            const expectedResult ={isTitleDisplayed:true,isTitleHidden:false}
            const actualResult = {isTitleDisplayed:isTitleDisplayed,isTitleHidden:isTitleHidden}

            assert.deepEqual(actualResult,expectedResult,"Failed at collapse or check of titles.")

        })
      
        
        it("Should validate measurement values - Calculated - Between", async () => {

            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", `"Reference point To Asset_Without_Support"`))
            await page.waitForTimeout(1000)

            const betweenHorizontal = await getValue(page,v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_TYPE}"`))
            const horizontalDistance = await getValue(page,v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}"`))
            const horizontalAzimuth = await getValue(page,v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}"`))

            const expectedResult ={betweenHorizontal:Trans.keys.MEASUREMENTS.CALCULATED,horizontalDistance:`47' 6"`,horizontalAzimuth:"70.60°"}    
        
            const actualResult = {betweenHorizontal:betweenHorizontal,horizontalDistance:horizontalDistance,horizontalAzimuth:horizontalAzimuth}

            assert.deepEqual(actualResult,expectedResult,"Measurement values are not as expected. Calculated - Between.")
        })

        it("Should validate preview card - Calculated - Between - LV-3962", async ()=>{
            const previewCardText= await getText(page, v3ReviewAndApprovePage.entityContainerByName.replace("{{0}}", `"Reference point To Asset_Without_Support"`)+`[.${v3ReviewAndApprovePage.iconBetween}]`)
            const expectedText=new RegExp(`Reference point To Asset_Without_Support.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}.*47' 6".*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}.*70.60°.*`)
            assert.match(previewCardText,expectedText,`Preview card text is not as expected`)
        })
        
        it("Should validate measurement values - Calculated - Between Perpendicular", async () => {


            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", `"Mappable_Line To Asset_Without"`))
            await page.waitForTimeout(1000)

            const betweenPerpendicular = await getValue(page,v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_TYPE}"`))
            const horizontalDistancePerpendicular = await getValue(page,v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}"`))
            const horizontalAzimuthPerpendicular = await getValue(page,v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}"`))

            const expectedResult ={betweenPerpendicular:Trans.keys.MEASUREMENTS.CALCULATED,horizontalDistancePerpendicular:`37' 6"`,horizontalAzimuthPerpendicular:"32.77°"}
            const actualResult = {betweenPerpendicular:betweenPerpendicular,horizontalDistancePerpendicular:horizontalDistancePerpendicular,horizontalAzimuthPerpendicular:horizontalAzimuthPerpendicular}

            assert.deepEqual(actualResult,expectedResult,"Measurement values are not as expected. - Calculated - Between Perpendicular")
        })
        it("Should validate preview card - Calculated - Between Perpendicular - LV-3962", async ()=>{
            const previewCardText= await getText(page, v3ReviewAndApprovePage.entityContainerByName.replace("{{0}}", `"Mappable_Line To Asset_Without"`)+`[.${v3ReviewAndApprovePage.iconAlong}]`)
            const expectedText=new RegExp(`Mappable_Line To Asset_Without_Support.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}.*37' 6".*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}.*32.77°.*`)
            assert.match(previewCardText,expectedText,`Preview card text is not as expected`)
        })
        it("Should validate measurement values - Calculated - Along", async () => {
            
            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", '"Mappable_Line To Reference point"'))
            await page.waitForTimeout(1000)

            const along = await getValue(page,v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_TYPE}"`))
            const horizontalDistanceAlong = await getValue(page,v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}"`))
            const horizontalAzimuthAlong = await getValue(page,v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}"`))
            const alongDistance = await getValue(page,v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.ALONG_DISTANCE}"`))

            const expectedResult ={along:Trans.keys.MEASUREMENTS.CALCULATED,horizontalDistanceAlong:`63' 2"`,horizontalAzimuthAlong:"289.01°",alongDistance:`17' 11"`}
        
            const actualResult = {along:along,horizontalDistanceAlong:horizontalDistanceAlong,horizontalAzimuthAlong:horizontalAzimuthAlong,alongDistance:alongDistance} 

            assert.deepEqual(actualResult,expectedResult,"Measurement values are not as expected. Calculated - Along.")
        })
        it("Should validate preview card - Calculated - Calculated - Along - LV-3962", async ()=>{
            const previewCardText= await getText(page, v3ReviewAndApprovePage.entityContainerByName.replace("{{0}}", `"Mappable_Line To Reference point"`)+`[.${v3ReviewAndApprovePage.iconAlong}]`)
            const expectedText=new RegExp(`Mappable_Line To Reference point.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}.*63' 2".*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.ALONG_DISTANCE}.*17' 11".*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}.*289.01°`)
            assert.match(previewCardText,expectedText,`Preview card text is not as expected`)
        })
        it("should open More User Info popup by clicking info icon", async () => {
            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", `"Reference point To Asset_Without_Support"`))
            await page.waitForTimeout(1000)

            const path = await v3ReviewAndApprovePage.createPath(v3ReviewAndApprovePage.infoIconForPopup, ["Creation User"])
            await getXPathAndClick(page, path) 
            await page.waitForXPath(v3ReviewAndApprovePage.popupTemplate)
            const popup = await isXPathVisible(page, v3ReviewAndApprovePage.popupTemplate)
            await page.waitForSelector(v3ReviewAndApprovePage.popupTemplate2)
            const selector = await v3ReviewAndApprovePage.popupTemplate2
            const popupStyles = await page.evaluate((selector) => {
                const btn = document.querySelector(selector)
                return JSON.parse(JSON.stringify(window.getComputedStyle(btn))
                )
            }, selector) 
            let topMargin = parseInt((popupStyles.top).substring(0,3))
            assert.isTrue(popup)
            assert.equal(popupStyles.zIndex, 5, "The popup is probably not visible")
            assert.isAtMost(topMargin, 200, "The popup has wrong position")
        })
        
        it("should not change view by clicking Assets inside Measurements", async () => {
            const insideAsset = await page.$x(v3ReviewAndApprovePage.entityTitle.replace("{{0}}", '"Asset_Without"'))
            insideAsset[1].click()
            const secondCardTitle = await getInnerText(page, v3ReviewAndApprovePage.cardTitle, 1)
            assert.equal(secondCardTitle, "Reference point To Asset_Without_Support", "Second Card is not opened")
        })

        it("should not allow editing Measurements Second Card", async () => {
            await page.waitForXPath(v3ReviewAndApprovePage.hideCardIcon)
            const edit = await isElementExistsbyXPath(v3ReviewAndApprovePage.editIconI)
            assert.isFalse(edit, "The edit button is not hidden on Second Card")
        })

        it("should collapse Sections on Measurements Second Card", async () => {
            await v3ReviewAndApprovePage.clickProject(["Measure Project"])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])
            await page.waitForXPath(v3ReviewAndApprovePage.cardTitle)
            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", '"Reference point To"'))
            await v3ReviewAndApprovePage.collapseSection("Between Measurements")
            await v3ReviewAndApprovePage.collapseSection("More Info")
            const textarea = await isXPathVisible(page, v3ReviewAndApprovePage.inputField2)
            assert.isFalse(textarea, "Sections are not closed")
        })

        it("should provide Last Modified info popup in More Info Section", async () => {
            await getXPathAndClick(page, v3ReviewAndApprovePage.expandSectionIcon.replace("{{0}}", '"More Info"'))
            const path = await v3ReviewAndApprovePage.createPath(v3ReviewAndApprovePage.infoIconForPopup, ["Last Modified By"])
            await getXPathAndClick(page, path) 
            await page.waitForXPath(v3ReviewAndApprovePage.popupTemplate1)
            const popup = await isXPathVisible(page, v3ReviewAndApprovePage.popupTemplate1)
            await page.waitForSelector(v3ReviewAndApprovePage.popupTemplate2)
            const selector = await v3ReviewAndApprovePage.popupTemplate2
            const popupStyles = await page.evaluate((selector) => {
                const btn = document.querySelector(selector)
                return JSON.parse(JSON.stringify(window.getComputedStyle(btn))
                )
            }, selector) 
            let topMargin = parseInt((popupStyles.top).substring(0,3))
            assert.isTrue(popup)
            assert.equal(popupStyles.zIndex, 5, "The popup is probably not visible")
            assert.isAtMost(topMargin, 200, "The popup has wrong position")
        })

        it("should validate counter on Linked Entities Tab", async () => {
            await v3ReviewAndApprovePage.clickProject(["Measure Project"])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])
            await page.waitForXPath(v3ReviewAndApprovePage.cardTitle)
            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", '"Reference point To"'))
            await v3ReviewAndApprovePage.clickTab("Linked Entities")
            const counter = await getInnerText(page, v3ReviewAndApprovePage.tabCounter, 0)
            const entities = await page.$x(v3ReviewAndApprovePage.gotoButton)
            assert.equal(entities.length, counter, "Counter is wrong or not displayed")
        })

        it("should validate GoTo icon on Linked Entities Tab", async () => {
            const entities = await page.$x(v3ReviewAndApprovePage.gotoButton)
            entities[1].click() 
            await page.waitForTimeout(2000)
            const header1 = await getInnerText(page, v3ReviewAndApprovePage.cardTitle, 0)
            assert.equal(header1, "Assets", "The First Card is not opened" )
            const header2 = await getInnerText(page, v3ReviewAndApprovePage.cardTitle, 1)
            assert.equal(header2, "Asset_Without_Support", "The Second Card is not opened" )
        })
       
    })

    describe("#newFullFlow Measurements on Map", async () => {   

        it("should display green markers when Measurements link is clicked", async () => {
            await v3ReviewAndApprovePage.clickProject(["Measure Project"])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])
            await page.waitForSelector(v3ReviewAndApprovePage.measureGreen)
            const greenIcons = await page.$$(v3ReviewAndApprovePage.measureGreen)
            assert.equal(greenIcons.length, 6)
        })

        it("should display black small icons when the Second Card is opened", async () => {
            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", '"Reference point To"'))
            await page.waitForTimeout(1000)
            //black icons
            /*const options = await page.$$eval('img.icon-measurement', options => options.map(option => option.currentSrc))
            let x
            let count = 0
            for(x = 0; x < options.length; x++){
                if( options[x].includes("measurement_selected.svg")){
                    count = count + 1
                }
                
            }
            assert.equal(count, 2, "Measurement selected icons are not black")
            */
            const elementsCount = await page.evaluate(() => {
                let elementsCount = 0
                const icons = document.querySelectorAll('#small-circle') 
                icons.forEach(i => {
                    const style = window.getComputedStyle(i)
                    if(style.fill == 'rgb(18, 16, 50)') {
                        elementsCount++
                    }                    
                })
                return elementsCount
            })

            assert.equal(elementsCount, 2)
        })
        
        /*it("should display black pins when the Second Card is opened // bug is here waiting for Adi", async () => {
            const options2 = await page.$$eval('img.marker', options => options.map(option => option.currentSrc))
            let y
            let count1 = 0
            for(y = 0; y < options2.length; y++){
                if( options2[y].includes("pin_measurement_selected.svg")){
                    count1 = count1 + 1
                }
                
            }
            await page.waitForTimeout(10000)
            assert.equal(count1, 1, "Measurement selected pins are not black") 
        })*/

        it("should display black line when the Second Card is opened", async () => {
            const line = await page.$x('//div[contains(@class, "leaflet-selected-measurement-lines-pane")]')
            const black_measurements = await line[0].evaluate(e => e.innerHTML)
            assert.isTrue(black_measurements.includes('stroke="#121032"'))
        })
                        
        it("should display green markers when Measurements icon is clicked", async () => {
            await v3ReviewAndApprovePage.clickProject(["Measure Project"])
            await page.waitForTimeout(1000)
            await getXPathAndClick(page, v3ReviewAndApprovePage.toolBarMeasure)
            await page.waitForSelector(v3ReviewAndApprovePage.measureGreen)
            const greenIcons = await page.$$(v3ReviewAndApprovePage.measureGreen)
            assert.equal(greenIcons.length, 6)
            
        })

        it("should open Measurements popup when clicking a green marker", async () => {
            const greenIcons = await page.$$(v3ReviewAndApprovePage.measureGreen)
            greenIcons[1].click() 
            await page.waitForXPath(v3ReviewAndApprovePage.entityContainer)
            const numberOfEntities = await page.$x(v3ReviewAndApprovePage.entityContainer)
            assert.equal(numberOfEntities.length, 1)
            await page.waitForTimeout(3000)
        })

        it("should display yellow icon when Measurement is selected", async () => {
            
            const styles = await page.evaluate(() => {
                const styles = []
                const icons = document.querySelectorAll('#small-circle') 
                icons.forEach(i => {
                    const style = window.getComputedStyle(i)
                    if(style.fill == 'rgb(247, 199, 46)') {
                        styles.push(1)
                    }                    
                })
                return styles
            })

            assert.equal(styles.length, 1)
        })

        it("should close the popup by x icon", async () => {
            await getXPathAndClick(page, v3ReviewAndApprovePage.closeMapPopup)
            const popupDisplayed = await isXPathVisible(page, v3ReviewAndApprovePage.entityContainer)
            assert.isFalse(popupDisplayed, "Measuremet popup is not closed")
        })

        it("should close the popup by outside click", async () => {
            const greenIcons = await page.$$(v3ReviewAndApprovePage.measureGreen)
            greenIcons[1].click() 
            await getXPathAndClick(page, '//lv-map-pro')
            const popupDisplayed = await isXPathVisible(page, v3ReviewAndApprovePage.entityContainer)
            assert.isFalse(popupDisplayed, "Measuremet popup is not closed")
        })

        it("should open related Measurement Card when choosing from the popup", async () => {
            const greenIcons = await page.$$(v3ReviewAndApprovePage.measureGreen)
            greenIcons[1].click() 
            await getXPathAndClick(page, "//div[contains(@class, 'lv-scroll-item-container')]")
            await page.waitForTimeout(2000)
            const title = await getInnerText(page, '//div[contains(text(), "point To Asset")]', 0)
            assert.equal(title, "Reference point To Asset_Without_Support")
            const icon = await isXPathVisible(page, '//*[contains(@class, "icon-between")][not(contains(@class, "symbol"))]')
            assert.isTrue(icon, "Measurement card is not opened")
            const popupDisplayed = await isXPathVisible(page, v3ReviewAndApprovePage.entityContainer)
            assert.isFalse(popupDisplayed, "Measuremet popup is not closed")
        })

        it("should close Map visualisation by clicking toolbar button", async () => {
            await getXPathAndClick(page, v3ReviewAndApprovePage.toolBarMeasure)
            await page.waitForTimeout(1000)
            const greenIcons = await isElementExists(v3ReviewAndApprovePage.measureGreen)
            assert.isFalse(greenIcons, "Green icons are displayed")
        })

        it("should close Map visualisation when clicking Entities from the Left Menu", async () => {
            await v3ReviewAndApprovePage.clickProject(["Measure Project"])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])
            const greenIcons = await page.$$(v3ReviewAndApprovePage.measureGreen)
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Forms"])
            const noGreenIcons = await isElementExists(page, v3ReviewAndApprovePage.measureGreen)
            assert.equal(greenIcons.length, 6, "Green icons not displayed")
            assert.isFalse(noGreenIcons, "Green icons are not hidden")
        })

        it("should close Map visualisation when clicking Entities from the Map", async () => {
            await v3ReviewAndApprovePage.clickProject(["Measure Project"])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])
            const greenIcons = await page.$$(v3ReviewAndApprovePage.measureGreen)
            const line = await page.$$(v3ReviewAndApprovePage.lineOnMap)
            await line[3].click()
            await page.waitForTimeout(1000)
            const noGreenIcons = await isElementExists(page, v3ReviewAndApprovePage.measureGreen)
            assert.equal(greenIcons.length, 6, "Green icons not displayed")
            assert.isFalse(noGreenIcons, "Green icons are not hidden")
        })

        /*it("innerTexts", async () => {
            await page.waitForTimeout(5000)
            const listOfTexts = []
            const elements = await page.$x('//*[not(self::style)][not(*)][string-length(text()) > 0]')
            //const elements = await page.$x('//*[not(self::style)][string-length(text()) > 0]')
            for(let x = 0; x < elements.length; x++){
                const text = await elements[x].evaluate(e => e.innerText)
                if(text && !listOfTexts.includes(text)) {
                    listOfTexts.push(text)
                }
            }

            console.log(listOfTexts)
        })*/

    })

})