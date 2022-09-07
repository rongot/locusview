const builder = require('../../../common/builder')
const LoginPage = require('../../../pages/loginPage')
const PoliciesManPage = require('../../../pages/policiesManPage')
const V3ReviewAndApprovePage = require('../../../pages/v3ReviewAndApprovePage')
const V3ReviewAndApproveValues = require('../../../pages/v3ReviewAndApproveValues')
const ConfigurationGeneralPage = require('../../../pages/configurationGeneralPage')
import Trans from '../../../translation/language'
const chai = require('chai');
const assert = chai.assert;
const ScreenshotTester = require('puppeteer-screenshot-tester')
const fs = require('fs')

const { baseURL } = require('../../../config/configuration')
const { isElementExists, isElementExistsbyXPath, isXPathVisible } = require('../../../common/assertHelpers')
const { getXPathAndClick, getInnerText, getXPathAndType, waitAndClick, getValue, getText } = require('../../../common/locateHelpers');
const { is } = require('core-js/fn/object')
const ApiRequestsMeasurement = require('../../../apiRequests/requestsMeasurement')
const forEach = require('mocha-each')
//const { all } = require('core-js/fn/promise');

describe("#newFullFlow Manual Measurement LV-3585", () => {
    let page
    let loginPage
    let policiesManPage
    let v3ReviewAndApprovePage
    let v3ReviewAndApproveValues
    let configurationGeneralPage
    let tester
    const listOfTexts = []
    let apiR
    let token
    const projectName = "Mobile measure"
    const projectId = 55
    let measurementBody
    let lastMeasurementID

    before(async () => {
        page = await builder.build('LargeScreen');
        loginPage = new LoginPage(page)
        policiesManPage = new PoliciesManPage(page)
        v3ReviewAndApprovePage = new V3ReviewAndApprovePage(page)
        v3ReviewAndApproveValues = new V3ReviewAndApproveValues(page)
        configurationGeneralPage = new ConfigurationGeneralPage(page)
        await loginPage.visit()
        await loginPage.login(v3ReviewAndApprovePage.adminUsername, v3ReviewAndApprovePage.adminPassword)
        await page.waitForNavigation(`${baseURL}/app/main/review/projects`)
        tester = await ScreenshotTester(0.9)
        apiR = new ApiRequestsMeasurement()

        const body = `{"username": "${loginPage.adminUsername}","password": "${loginPage.adminPassword}","deviceIdentifier": "puppeteer","acceptedTerms": true} `
        token = await apiR.authenticate(loginPage.adminUsername, loginPage.adminPassword)
    })

    after(async () => {
        await builder.closeBrowser()
        
    })

    const dataM = [["apiR.bodyBetween", 158.5, null], ["apiR.bodyBetweenPerpendicular", 40.12, null], ["apiR.bodyAlong", 40.1, 165.7]]
    forEach(dataM).describe("Create and update measurement via API - LV-3809 - %s", (body, horizontalDistance, alongDistance) => {

        it("Create between measurement to specific Project", async () => {//project "Mobile measure", id=55
            const result = await apiR.createNewMeasurement(token, eval(body))
            measurementBody = result.data

            assert.equal(result.status, 200)
        })

        it("Update measurement to Manual", async () => {
            //"calculationMethod": "CALCULATED",=>  "calculationMethod": "MANUAL",
            //"manualHorizontalDistanceInFeet": null,=>  "manualHorizontalDistanceInFeet": 158.5,
            measurementBody.calculationMethod = "MANUAL"
            measurementBody.manualHeadings.manualHorizontalDistanceInFeet = horizontalDistance
            measurementBody.manualHeadings.manualAlongDistanceInFeet = alongDistance

            lastMeasurementID = measurementBody.id
            const result = await apiR.updateMeasurement(token, measurementBody, [measurementBody.id])

            assert.equal(result.status, 200)
        })

    })

    describe("Measurements on Cards - LV-3864", async () => {
        it("should open Measurements First Card", async () => {
            await v3ReviewAndApprovePage.clickProject([projectName])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])
            await page.waitForXPath(v3ReviewAndApprovePage.cardTitle)
            const header = await getInnerText(page, v3ReviewAndApprovePage.cardTitle, 0)
            assert.equal(header, "Measurements", "The First Card is not opened")
        })

        it("Should open Measurements Second Card", async () => {
            await v3ReviewAndApprovePage.clickProject([projectName])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])
            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", '"Mappable_Point To Mappable_Line"'))
            await page.waitForTimeout(1000)
            const secondCardTitle = await getInnerText(page, v3ReviewAndApprovePage.cardTitle, 1)
            assert.equal(secondCardTitle, "Mappable_Point To Mappable_Line", "Second Card is not opened")
        })

        it("Should collapse second card measurement sections", async () => {

            const isTitleDisplayed = await isXPathVisible(page, v3ReviewAndApprovePage.fieldTitle.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_TYPE}"`))
            await v3ReviewAndApprovePage.collapseSection(Trans.keys.MEASUREMENTS.BETWEEN_MEASUREMENTS)
            await v3ReviewAndApprovePage.collapseSection(Trans.keys.MEASUREMENTS.MANUAL_MEASUREMENT)
            await v3ReviewAndApprovePage.collapseSection(Trans.keys.MEASUREMENTS.CALCULATED_MEASUREMENT)
            await v3ReviewAndApprovePage.collapseSection(Trans.keys.MORE_INFO.TITLE)

            const isTitleHidden = await isXPathVisible(page, v3ReviewAndApprovePage.fieldTitle.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_TYPE}"`))

            await getXPathAndClick(page, v3ReviewAndApprovePage.expandSectionIcon.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.BETWEEN_MEASUREMENTS}"`))
            await getXPathAndClick(page, v3ReviewAndApprovePage.expandSectionIcon.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MANUAL_MEASUREMENT}"`))
            await getXPathAndClick(page, v3ReviewAndApprovePage.expandSectionIcon.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.CALCULATED_MEASUREMENT}"`))
            await getXPathAndClick(page, v3ReviewAndApprovePage.expandSectionIcon.replace("{{0}}", `"${Trans.keys.MORE_INFO.TITLE}"`))

            const expectedResult = { isTitleDisplayed: true, isTitleHidden: false }
            const actualResult = { isTitleDisplayed: isTitleDisplayed, isTitleHidden: isTitleHidden }

            assert.deepEqual(actualResult, expectedResult, "Failed at collapse or check of titles.")

        })
        it("Should validate measurement values - Manual - Between", async () => {
            const expectedResult = { betweenHorizontal: Trans.keys.MEASUREMENTS.MANUAL, horizontalDistance: `157' 7"`, horizontalAzimuth: "66.61°", manualHorizontalDistance: `158' 6"` }
            await v3ReviewAndApproveValues.checkValuesInSecondCardBetween(`Mappable_Point To Mappable_Line`,expectedResult)
        })
        it("Should validate preview card - Manual - Between - LV-3962", async () => {
            const previewCardText = await getText(page, v3ReviewAndApprovePage.entityContainerByName.replace("{{0}}", `"Mappable_Point To Mappable_Line"`) + `[.${v3ReviewAndApprovePage.iconBetween}]`)
            const expectedText = new RegExp(`Mappable_Point To Mappable_Line.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.MANUAL_HORIZONTAL_DISTANCE}.*158' 6".*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}.*66.61°.*`)
            assert.match(previewCardText, expectedText, `Preview card text is not as expected ${previewCardText}`)
        })
        it("Should validate measurement values - Manual - Between Perpendicular", async () => {
            
            const expectedResult = {
                betweenPerpendicular: Trans.keys.MEASUREMENTS.MANUAL, horizontalDistancePerpendicular: `39' 2"`,
                horizontalAzimuthPerpendicular: "206.93°", manualHorizontalDistance: `40' 1"`
            }
            await v3ReviewAndApproveValues.checkValuesInSecondCardPerpendicular(`Asset_Without_Support To Mappable_Line`,expectedResult)
            
        })
        it("Should validate preview card - Manual - Between Perpendicular - LV-3962", async () => {
            const previewCardText = await getText(page, v3ReviewAndApprovePage.entityContainerByName.replace("{{0}}", `"Asset_Without_Support To Mappable_Line"`) + `[.${v3ReviewAndApprovePage.iconAlong}]`)
            const expectedText = new RegExp(`Asset_Without_Support To Mappable_Line.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.MANUAL_HORIZONTAL_DISTANCE}.*40' 1".*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}.*39' 2".*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}.*206.93°`)
            assert.match(previewCardText, expectedText, `Preview card text is not as expected ${previewCardText}`)
        })
        it("Should validate measurement values - Manual - Along", async () => {

            const expectedResult = {
                along: Trans.keys.MEASUREMENTS.MANUAL, horizontalDistanceAlong: `39' 2"`, horizontalAzimuthAlong: "26.93°",
                alongDistance: `164' 5"`, manualAlongDistance: `165' 8"`, manualHorizontalDistance: `40' 1"`
            }

            await v3ReviewAndApproveValues.checkValuesInSecondCardAlong('Mappable_Line To Asset_Without_Support',expectedResult)
        })
        it("Should validate preview card - Manual - Along - LV-3962", async () => {
            const previewCardText = await getText(page, v3ReviewAndApprovePage.entityContainerByName.replace("{{0}}", `"Mappable_Line To Asset_Without"`) + `[.${v3ReviewAndApprovePage.iconAlong}]`)
            const expectedText = new RegExp(`Mappable_Line To Asset_Without_Support.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.MANUAL_HORIZONTAL_DISTANCE}.*40' 1".*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.MANUAL_ALONG_DISTANCE}.*165' 8".*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}.*39' 2".*.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.ALONG_DISTANCE}.*164' 5".*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}.*26.93°.*`)
            assert.match(previewCardText, expectedText, `Preview card text is not as expected ${previewCardText}`)
        })

    })
    describe("R&A - measurement - preview in different Units", () => {
        it("imperial - decimal values", async () => {
            await configurationGeneralPage.changeUnitOfMeasure(Trans.keys.CONFIGURATION.SYSTEM.IMPERIAL_DECIMAL)

            await v3ReviewAndApprovePage.clickProject([projectName])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])

            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", '" Mappable_Line To Asset_Without_Support "'))
            await page.waitForTimeout(1000)
            let calculatedCardXP = await v3ReviewAndApprovePage.propertiesList.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.CALCULATED_MEASUREMENT}"`)
            const actualHorizontalDistanceInDecimal = await getValue(page, calculatedCardXP + v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}"`))

            const expectedInDecimal = '39.1339 ft'

            assert.equal(actualHorizontalDistanceInDecimal, expectedInDecimal, 'Value is NOT in Imperial Decimal units.')

        })

        it("Should validate preview card in imperial - decimal - Manual - Along - LV-3962", async () => {
            const previewCardText = await getText(page, v3ReviewAndApprovePage.entityContainerByName.replace("{{0}}", `"Mappable_Line To Asset_Without"`) + `[.${v3ReviewAndApprovePage.iconAlong}]`)
            const expectedText = new RegExp(`Mappable_Line To Asset_Without_Support.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.MANUAL_HORIZONTAL_DISTANCE}.*40.1 ft.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.MANUAL_ALONG_DISTANCE}.*65.7 ft.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}.*39.1339 ft.*.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.ALONG_DISTANCE}.*164.4259 ft.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}.*26.93°.*`)
            assert.match(previewCardText, expectedText, `Preview card text is not as expected ${previewCardText}`)
        })
        it("Metric values", async () => {
            await configurationGeneralPage.changeUnitOfMeasure(Trans.keys.CONFIGURATION.SYSTEM.METRIC)

            await v3ReviewAndApprovePage.clickProject([projectName])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])

            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", '" Mappable_Line To Asset_Without_Support "'))
            await page.waitForTimeout(1000)
            let calculatedCardXP = await v3ReviewAndApprovePage.propertiesList.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.CALCULATED_MEASUREMENT}"`)
            const actualHorizontalDistanceInDecimal = await getValue(page, calculatedCardXP + v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}"`))

            const expectedInDecimal = '11.93 m'

            assert.equal(actualHorizontalDistanceInDecimal, expectedInDecimal, 'Value is NOT in Metric units.')

        })
        it("Should validate preview card in metrics - Manual - Along - LV-3962", async () => {
            const previewCardText = await getText(page, v3ReviewAndApprovePage.entityContainerByName.replace("{{0}}", `"Mappable_Line To Asset_Without"`) + `[.${v3ReviewAndApprovePage.iconAlong}]`)
            const expectedText = new RegExp(`Mappable_Line To Asset_Without_Support.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.MANUAL_HORIZONTAL_DISTANCE}.*12.22 m.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.MANUAL_ALONG_DISTANCE}.*50.51 m.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}.*11.93 m.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.ALONG_DISTANCE}.*50.12 m.*${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}.*26.93°.*`)
            assert.match(previewCardText, expectedText, `Preview card text is not as expected ${previewCardText}`)
        })
        it("Back to imperial", async () => {
            await configurationGeneralPage.changeUnitOfMeasure(Trans.keys.CONFIGURATION.SYSTEM.IMPERIAL)

            await v3ReviewAndApprovePage.clickProject([projectName])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])

            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", '" Mappable_Line To Asset_Without_Support "'))
            await page.waitForTimeout(1000)
            let calculatedCardXP = await v3ReviewAndApprovePage.propertiesList.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.CALCULATED_MEASUREMENT}"`)
            const actualHorizontalDistanceInDecimal = await getValue(page, calculatedCardXP + v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}"`))

            const expectedInDecimal = `39' 2"`

            assert.equal(actualHorizontalDistanceInDecimal, expectedInDecimal, 'Value is NOT in Imperial units.')
        })
    })
    describe("R&A - measurement - manual reverted to calculated", () => {
        let measurementIDs = []
        let lastMeasurementID
        it("Get all measurements via API - LV-3809", async () => {
            const result = await apiR.getMeasurements(token, projectId)
            const measurements = result.data

            measurements.forEach(element => {

                measurementIDs.push(element.id)
                lastMeasurementID = element.id
            });


            assert.isAtLeast(measurementIDs.length, 1, `number of measurements should be at least 1`)
        })
        it("Get measurement via API - LV-3809", async () => {
            const result = await apiR.getMeasurementById(token, [lastMeasurementID])
            measurementBody = result.data
            const measurementID = measurementBody.id

            assert.equal(measurementID, lastMeasurementID, `measurement ID is not as expected`)
        })

        it("Update manual to calculate", async () => {
            measurementBody.calculationMethod = "CALCULATED"
            measurementBody.manualHeadings.manualHorizontalDistanceInFeet = null
            measurementBody.manualHeadings.manualAlongDistanceInFeet = null

            lastMeasurementID = measurementBody.id
            const result = await apiR.updateMeasurement(token, measurementBody, [measurementBody.id])

            assert.equal(result.status, 200)
        })

        it("Verify Along Measurement Updated", async () => {
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Assets"])
            await page.waitForTimeout(500)
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])
            await page.waitForTimeout(500)
            await getXPathAndClick(page, v3ReviewAndApprovePage.entityTitle.replace("{{0}}", '" Mappable_Line To Asset_Without_Support "'))
            await page.waitForTimeout(1000)

            const along = await getValue(page, v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_TYPE}"`))
            const horizontalDistanceAlong = await getValue(page, v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}"`))
            const horizontalAzimuthAlong = await getValue(page, v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}"`))
            const alongDistance = await getValue(page, v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.ALONG_DISTANCE}"`))

            const expectedResult = { along: Trans.keys.MEASUREMENTS.CALCULATED, horizontalDistanceAlong: `39' 2"`, horizontalAzimuthAlong: "26.93°", alongDistance: `164' 5"` }

            const actualResult = { along: along, horizontalDistanceAlong: horizontalDistanceAlong, horizontalAzimuthAlong: horizontalAzimuthAlong, alongDistance: alongDistance }

            assert.deepEqual(actualResult, expectedResult, "Measurement values are not as expected. Calculated - Along.")
        })
    })

    describe("Get and Delete measurement via API - LV-3809", () => {
        let measurementIDs = []
        it("Get all measurements", async () => {
            const result = await apiR.getMeasurements(token, [projectId])
            const measurements = result.data

            measurements.forEach(element => {

                measurementIDs.push(element.id)

            });


            assert.isAtLeast(measurementIDs.length, 1, `number of measurements should be at least 1`)
        })
        it("Delete all measurements", async () => {
            for (let index = 0; index < measurementIDs.length; index++) {
                const id = measurementIDs[index]
                const result = await apiR.deleteMeasurements(token, [id])
                const resStatus = result.resStatus// 204 for success
                assert.equal(result.status, 204, `measurement with id: ${id} was not deleted`)
            }

        }).timeout(240000)

        it("Should validate Measurements Empty State after deletion", async () => {
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Assets"])
            await v3ReviewAndApprovePage.clickLeftLinkInfra(["Measurements"])
            const emptyState = await isXPathVisible(page, v3ReviewAndApprovePage.measureEmptyState)
            assert.isTrue(emptyState, `Measurement Empty State is missed ${v3ReviewAndApprovePage.measureEmptyState}`)
        })


    })
})