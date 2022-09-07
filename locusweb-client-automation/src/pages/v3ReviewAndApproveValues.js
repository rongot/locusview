const chai = require('chai');  
const assert = chai.assert;

const ReviewAndApprove = require('./reviewAndApprovePage')
const { getElementByTextFromList, waitAndClick, getXPathAndClick, getXPathAndType, getText, getElementFromArrayByIndex,getValue} = require('../common/locateHelpers')
const { isElementExists, isElementExistsbyXPath, isXPathVisible } = require('../common/assertHelpers');
const { includes } = require('lodash');
import { expect } from 'chai';
import Trans from '../translation/language'
module.exports = class V3ReviewAndApproveValues extends ReviewAndApprove {

    constructor(page) {
        super(page)
    }
    
    async checkValuesInSecondCardBetween(sectionToNavigate,expectedResult){
        //navigates to the desired section.
        await getXPathAndClick(this.page, this.entityTitle.replace("{{0}}", `"${sectionToNavigate}"`))
        await this.page.waitForTimeout(1000)

        //gets the heading of each section
        let betweenCardXP = await this.propertiesList.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.BETWEEN_MEASUREMENTS}"`)
        let calculatedCardXP = await this.propertiesList.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.CALCULATED_MEASUREMENT}"`)
        let manualCardXP = await this.propertiesList.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MANUAL_MEASUREMENT}"`)

        //gets the value of each field in the specified section
        const betweenHorizontal = await getValue(this.page, betweenCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_TYPE}"`))
        const horizontalDistance = await getValue(this.page, calculatedCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}"`))
        const horizontalAzimuth = await getValue(this.page, calculatedCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}"`))
        let manualHorizontalDistance = null;
        try{
            //field is not optional and may not exist in some sections.
            manualHorizontalDistance = await getValue(this.page, manualCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.MANUAL_HORIZONTAL_DISTANCE}"`))
        }
        catch(error){

        }
            
        const actualResult = { betweenHorizontal: betweenHorizontal, horizontalDistance: horizontalDistance, horizontalAzimuth: horizontalAzimuth, manualHorizontalDistance: manualHorizontalDistance }
            
        assert.deepEqual(actualResult, expectedResult, "Measurement values are not as expected. Manual - Between.")

    }

    async checkValuesInSecondCardPerpendicular(sectionToNavigate,expectedResult){
        //navigates to the desired section.
        await getXPathAndClick(this.page, this.entityTitle.replace("{{0}}", `"${sectionToNavigate}"`))
        await this.page.waitForTimeout(1000)

        //gets the value of each field in the specified section
        let betweenCardXP = await this.propertiesList.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.BETWEEN_MEASUREMENTS}"`)
        let calculatedCardXP = await this.propertiesList.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.CALCULATED_MEASUREMENT}"`)
        let manualCardXP = await this.propertiesList.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MANUAL_MEASUREMENT}"`)
        

        const betweenPerpendicular = await getValue(this.page, betweenCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_TYPE}"`))
        const horizontalDistancePerpendicular = await getValue(this.page, calculatedCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}"`))
        const horizontalAzimuthPerpendicular = await getValue(this.page, calculatedCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}"`))

        const manualHorizontalDistance = await getValue(this.page, manualCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.MANUAL_HORIZONTAL_DISTANCE}"`))
            
        const actualResult = {
            betweenPerpendicular: betweenPerpendicular, horizontalDistancePerpendicular: horizontalDistancePerpendicular,
            horizontalAzimuthPerpendicular: horizontalAzimuthPerpendicular, manualHorizontalDistance: manualHorizontalDistance
        }

        assert.deepEqual(actualResult, expectedResult, "Measurement values are not as expected. - Manual - Between Perpendicular")
    }

    async checkValuesInSecondCardAlong(sectionToNavigate,expectedResult){
        
        //navigates to the desired section.
        await getXPathAndClick(this.page, this.entityTitle.replace("{{0}}", `"${sectionToNavigate}"`))
        await this.page.waitForTimeout(1000)
        
        //gets the value of each field in the specified section
        let alongCardXP = await this.propertiesList.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.ALONG_MEASUREMENT}"`)
        let manualCardXP = await this.propertiesList.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MANUAL_MEASUREMENT}"`)
        let calculatedCardXP = await this.propertiesList.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.CALCULATED_MEASUREMENT}"`)

        let manualHorizontalDistance= null
        const along = await getValue(this.page, alongCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_TYPE}"`))
        
        try{//field is not optional and may not exist in some sections.
            manualHorizontalDistance = await getValue(this.page, manualCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.MANUAL_HORIZONTAL_DISTANCE}"`))
        }
        catch(error){
            
        }
        let manualAlongDistance =null;
        let  alongDistance = null;

        try{//field is not optional and may not exist in some sections.
            manualAlongDistance = await getValue(this.page, manualCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.MANUAL_ALONG_DISTANCE}"`))
        }
        catch(error){//field is not optional and may not exist in some sections.
            console.log("Along Distance not found /n"+error)
        }

        const horizontalDistanceAlong = await getValue(this.page, calculatedCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.HORIZONTAL_DISTANCE}"`))

        try{//field is not optional and may not exist in some sections.
            alongDistance = await getValue(this.page, calculatedCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.ALONG_DISTANCE}"`))
        }
        catch(error){
            console.log("Along Distance not found /n"+error)
        }

        const horizontalAzimuthAlong = await getValue(this.page, calculatedCardXP + this.inputByFieldName.replace("{{0}}", `"${Trans.keys.MEASUREMENTS.MEASUREMENT_HEADINGS.AZIMUTH}"`))

        const actualResult = {
                along: along, horizontalDistanceAlong: horizontalDistanceAlong, horizontalAzimuthAlong: horizontalAzimuthAlong,
                alongDistance: alongDistance, manualAlongDistance: manualAlongDistance, manualHorizontalDistance: manualHorizontalDistance
            }
        
            assert.deepEqual(actualResult, expectedResult, `Measurement values are not as expected. - Manual - Along.`)
    }
    
}