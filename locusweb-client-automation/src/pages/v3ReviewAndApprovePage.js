const chai = require('chai');  
const assert = chai.assert;

const ReviewAndApprove = require('./reviewAndApprovePage')
const { getElementByTextFromList, getText, getXPathAndClick, getXPathAndType, getValue, clearValueBackspaceXPath,waitAndClick} = require('../common/locateHelpers')
const { isElementExists, isElementExistsbyXPath, isXPathVisible } = require('../common/assertHelpers');
const { includes } = require('lodash');
import Trans from '../translation/language'
module.exports = class V3ReviewAndApprive extends ReviewAndApprove {

    constructor(page) {
        super(page)
    } 
    
    //these are element selectors
    bomEmptyState = `//*[contains(@class, "icon-no-bom")]/following-sibling::div[contains(text(), "${Trans.keys.EMPTY_CARD.NO_BOM}")]`//No BOM
    transactionsEmptyState = `//*[contains(@class, "icon-no-transactions")]/following-sibling::div[contains(text(),"${Trans.keys.EMPTY_CARD.NO_TRANSACTION}")]` //"No transactions"
    analyticsEmptyState = `//*[contains(@class, "no-data-icon")]/following-sibling::div[contains(text(), "${Trans.keys.EMPTY_CARD.NO_ANALYTICS}")]`//"No Analytics"
    measureEmptyState = `//*[contains(@class, "icon-no-measurements")]/following-sibling::div[contains(text(),"${Trans.keys.EMPTY_CARD.NO_MEASUREMENTS}" )]`//"No Measurements"
    searchEmptyState = `//*[contains(@class, "no-data-icon")]/following-sibling::div[contains(text(),"${Trans.keys.GENERAL.NOT_FOUND}" )]`//"Not Found"

    approvedSection = `//label[@data-automation-web="label-value"][contains(text(),"${Trans.keys.MATERIAL.STATUS.APPROVED}")]`// "Approved"
    rejectedSection = `//label[@data-automation-web="label-value"][contains(text(),"${Trans.keys.MATERIAL.STATUS.REJECTED}")]`// "Rejected"
    pendingSection = `//label[@data-automation-web="label-value"][contains(text(),"${Trans.keys.MATERIAL.STATUS.UNPLANNED}")]`// "Unplanned"

    approveButton = `//button[contains(.,"${Trans.keys.MATERIAL.BUTTONS.APPROVE_MATERIAL}")]`// "Approve Material"
    rejectButton = `//button[contains(., "${Trans.keys.MATERIAL.BUTTONS.REJECT_MATERIAL}")]`// "Reject Material"
    setAsPendingButton = `//button[contains(.,"${Trans.keys.MATERIAL.BUTTONS.SET_AS_PENDING}")]`//"Set As Pending"
    
    emptyValueWarning = '//label[@data-automation-web="label-value"]'

    measureGreen = '#small-circle'
    toolBarMeasure = '//*[contains(@class, "icon-measurement")][contains(@class, "toolbar-icon")]'

    generateIndexIcon = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@class, "icon-generate-index")]'

    magnifierIconInCard = '//lv-card//div[contains(@class, "icon-search")]'
    
    //Entity names
    inactiveFormLabel = "//label[contains(text(), 'Inactive Fields Form')]"

    //gis layer
    gisIcon = '.icon-show-existing'
    existingAssetPin = '#auto-existing-asset-light-half-triangle-pin'
    clusters = '//lv-asset-cluster'
    previewContentButton='//*[contains(@class, "preview-button")]'

    //ESRI
    esriIcon = '.icon-esri-logo'
    esriLoginLink = '//label[contains(text(), "Sign In")]'
    esriLogin = '//input[@id="user_username"]'
    esriPassword = '//input[@id="user_password"]'
    esriSignInButton = '//button[@id="signIn"]'
    esriLVSignOutLink = '//label[contains(text(), "Sign Out")]'
    esriLVSubtitle = '//*[contains(@class, "esri-login-sub-title")]'
    credentialsName = "shlomi_locusview"
    credentialsPass = "pass2209"

    //mappable WU symbols
    symbolA = '//*[contains(@class, "icon-symbol-a")][contains(@class, "symbolLeft")]'
    symbolB = '//*[contains(@class, "icon-symbol-b")][contains(@class, "symbolLeft")]'
    mappedAsset = '//*[contains(@class, "icon-attribute")]'

    //these are V3 specific methods

    async approveMaterial(entityName) {
        await getXPathAndClick(this.page, '//span[@title="Materials"]')
        await getXPathAndClick(this.page, '//span[contains(text(), "BOM")]')
        await getXPathAndClick(this.page, `//label[contains(text(), "${entityName}")]`)
        await getXPathAndClick(this.page, this.approveButton)
        await getXPathAndClick(this.page, 
            '//button[@data-automation-web="lv-button-primary"][contains(., "Approve")][not(contains(., "Material"))]')
    }

    async rejectMaterial(entityName) {
        await getXPathAndClick(this.page, '//span[@title="Materials"]')
        await getXPathAndClick(this.page, '//span[contains(text(), "BOM")]')
        await getXPathAndClick(this.page, `//label[contains(text(), "${entityName}")]`)
        await getXPathAndClick(this.page, this.rejectButton)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", '"Reject"'))
    }

    async openEntityFromWU(projectName, wuName, entityType, entityName) {
        await this.clickProject([`${projectName}`])
        await this.page.waitForTimeout(1000)
        await this.clickLeftLinkInfra(["Work Units"])
        await this.clickLeftLinkInfra([`${wuName}`])
        await this.clickTab([`${entityType}`])
        await this.page.waitForTimeout(1000)
        await getXPathAndClick(this.page, this.entityTitle.replace("{{0}}", `"${entityName}"`))
        await this.page.waitForTimeout(1000)
    }
    async validateDecimalFields(projectName,entityType,entityName,fieldsName,validateNumber,testCase,index=0){
        let ValueToValidate
        const textXpath='//ancestor::dynamic-field-wrapper//lv-text//input'
        const fieldXpath='//ancestor::dynamic-field-wrapper//lv-number//input'
        const calcXpath='//ancestor::dynamic-field-wrapper//lv-calculation//input'
        const reverseLookupPositivePopup='Material is pending review'
        const reverseLookupNegativePopup='index field not found'
        await getXPathAndType(this.page, this.searchFieldOnCards, projectName)
        await this.page.waitForTimeout(2000)
        await getXPathAndClick(this.page, this.divLeftMenu.replace("{{0}}", `"${projectName}"`))
        await getXPathAndClick(this.page, this.infraLeftMenu.replace("{{0}}", `"${entityType}"`))
        await getXPathAndClick(this.page, this.scrollListItemByLabel.replace("{{0}}", `"${entityName}"`),index) 
        await getXPathAndClick(this.page,this.editIconI)
        switch (testCase) {
            case "CalcField":
            // await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", '"Continue Anyway"'))
            await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CONTINUE_ANYWAY}"`))
            await getXPathAndClick(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[0]}"`))
            await clearValueBackspaceXPath(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[0]}"`)+fieldXpath)
            await getXPathAndType(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[0]}"`),validateNumber)
            await getXPathAndClick(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[1]}"`))
            await clearValueBackspaceXPath(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[1]}"`)+fieldXpath)
            await getXPathAndType(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[1]}"`),validateNumber)
            await getXPathAndClick(this.page,this.calculateIcon)
            await getXPathAndClick(this.page,this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
            ValueToValidate=await getValue(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[2]}"`)+calcXpath)
            break
            case "NumberField":
                await getXPathAndClick(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[0]}"`))
                await clearValueBackspaceXPath(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[0]}"`)+fieldXpath)
                await getXPathAndType(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[0]}"`),validateNumber)
                await getXPathAndClick(this.page,this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
                ValueToValidate=await getValue(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[0]}"`)+fieldXpath) 
            break
            case "reverseLookup":
                await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CONTINUE_ANYWAY}"`))
                await getXPathAndClick(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[4]}"`))
                 await clearValueBackspaceXPath(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[4]}"`)+textXpath)
                await getXPathAndClick(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[1]}"`))
                await clearValueBackspaceXPath(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[1]}"`)+fieldXpath)
                await getXPathAndType(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[1]}"`),validateNumber)
                await getXPathAndClick(this.page,this.generateIndexIcon.replace("{{0}}", `"${fieldsName[3]}"`))

                if (await isElementExistsbyXPath(this.page, this.popupContainerByText.replace("{{0}}", `"${reverseLookupPositivePopup}"`)))
                {   
                    ValueToValidate=true
                    await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.OK}"`))
                }
                if (await isElementExistsbyXPath(this.page, this.popupContainerByText.replace("{{0}}", `"${reverseLookupNegativePopup}"`)))
                {
                    ValueToValidate=false
                    await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.OK}"`))
                }
                if(await isElementExistsbyXPath(this.page,this.tableTitle.replace("{{0}}", `"${Trans.keys. GENERAL.CHOSE_ITEM}"`))){
                    await getXPathAndClick(this.page,this.tableArrayXPathInfra)
                    await getXPathAndClick(this.page,this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SELECT}"`)) 
                    ValueToValidate=true
                   
                }
                    await getXPathAndClick(this.page,this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))     
                    break    
            default: throw new Error(`${testCase} field is not exists or not entered correctly`)  
        }     
        await getXPathAndClick(this.page,this.backToMainIcon)
        await getXPathAndClick(this.page,this.iconClearSearch)
        return ValueToValidate
    }
    async viewDecimalSeparatorFields(projectName,materials,materialAction,assetType,fieldsName,tab='Analytics'){
        let valueToValidate
        let receivedValues=[]
        const fieldXpath='//ancestor::dynamic-field-wrapper//lv-number//input'
        const materialXpath='//ancestor::*[@data-automation-web="lv-scroll-list-item"]//following-sibling::lv-scroll-list-item//*[contains(., {{0}})]'
        await getXPathAndType(this.page, this.searchFieldOnCards, projectName)
        await this.page.waitForTimeout(2000)
        await getXPathAndClick(this.page, this.divLeftMenu.replace("{{0}}", `"${projectName}"`))
        await getXPathAndClick(this.page, this.infraLeftMenu.replace("{{0}}", `"${materials}"`))
        // await getXPathAndClick(this.page, this.infraLeftMenu.replace("{{0}}", `"${materialAction}"`))
        switch (materialAction) {
            case "BOM":
                await getXPathAndClick(this.page, this.infraLeftMenu.replace("{{0}}", `"${materialAction}"`))
                await getXPathAndClick(this.page, this.scrollListItemByLabel.replace("{{0}}", `"${assetType}"`))
                valueToValidate=await getValue(this.page,this.fieldTitle.replace("{{0}}", `"${fieldsName[1]}"`)+fieldXpath)
                break
            case "Reconciliation":
                await getXPathAndClick(this.page, this.infraLeftMenu.replace("{{0}}", `"${materialAction}"`))
                await getXPathAndClick(this.page, this.tabTitleCommon.replace("{{0}}", `"${tab}"`))
                await getXPathAndClick(this.page, this.scrollListItemByLabel.replace("{{0}}", `"${assetType}"`))
                for(let i=0;i<fieldsName.length;i++){
                    let xpath=materialXpath.replace("{{0}}", `"${fieldsName[i]}"`)
                    let returnValues=await getText(this.page,this.scrollListItemByLabel.replace("{{0}}", `"${assetType}"`)+xpath)
                    returnValues=returnValues.split(' ')
                    receivedValues.push(returnValues[1])
                 }
                 valueToValidate=receivedValues
                break
            case "Measurements":
                await getXPathAndClick(this.page,this.entityContainerByName.replace("{{0}}", `"${assetType}"`))
                for(let i=0;i<fieldsName.length;i++){
                let returnValues=await getValue(this.page,this.inputByFieldName.replace("{{0}}", `"${fieldsName[i]}"`))
                
                let lastChar=returnValues.charAt(returnValues.length - 1); 
                
                if(lastChar ==='m'){    
                returnValues=returnValues.substring(0,returnValues.length - 2);
                }
                else{
                returnValues=returnValues.substring(0,returnValues.length - 2);    
                }
                receivedValues.push(returnValues)
              } 
                valueToValidate = receivedValues                                        
                break

            default: throw new Error(`${materialAction} field value is not exists`)         

        }
        await getXPathAndClick(this.page,this.backToMainIcon)
        await getXPathAndClick(this.page,this.iconClearSearch)
        return valueToValidate

    }
 async getPreviewCardsDisplay(action,entityType,index){
      const assetSubTitleXP='/ancestor::div[@class="title"]/following-sibling::div//span[@class="text value"]'
       let validateField
       let FieldInnerText
       let xpath  
        switch (action){
            case "assetTitleValue":
            FieldInnerText = await this.createPath(this.entityTitle.replace("{{0}}", `"${entityType}"`))    
            validateField=await getText(this.page, FieldInnerText,index)
            break
            case "assetSubTitleValue":
            FieldInnerText = await this.createPath(this.entityTitle.replace("{{0}}", `"${entityType}"`))     
            xpath=FieldInnerText+assetSubTitleXP 
            validateField=await getText(this.page, xpath, index)
            break
            case "woTitleValue":
             FieldInnerText = await this.createPath(this.divLeftMenu.replace("{{0}}", `"${entityType}"`)) 
             validateField=await getText(this.page, FieldInnerText,index)
             break 
             default: throw new Error(`${action} field value is not exists`)    
        }
        if(action !=="woTitleValue" ){
        await getXPathAndClick(this.page,this.backToMainIcon)
        await getXPathAndClick(this.page,this.iconClearSearch)
       }
       return validateField

        
 }
    async navigateToEntity(projectName,entityType,materialAction=null) {
    await getXPathAndType(this.page, this.searchFieldOnCards, projectName)
    await this.page.waitForTimeout(2000)
    await getXPathAndClick(this.page, this.divLeftMenu.replace("{{0}}", `"${projectName}"`))
    await getXPathAndClick(this.page, this.infraLeftMenu.replace("{{0}}", `"${entityType}"`))
    if(materialAction){
      await getXPathAndClick(this.page, this.infraLeftMenu.replace("{{0}}", `"${materialAction}"`))
    }    
      
 }
 
}