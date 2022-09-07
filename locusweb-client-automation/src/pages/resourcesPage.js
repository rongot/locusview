
const { getElementByTextFromList, waitAndClick, getXPathAndClick, getInnerText, getXPathAndType, getText, getXPathAndDoubleClickWithIndex,clearValueBackspaceXPath } = require('../common/locateHelpers')
const { isXPathVisible, isElementExists, isElementExistsbyXPath,countTableRows } = require('../common/assertHelpers')
const { baseURL } = require('../config/configuration')
const ReviewAndApprovePage = require('../pages/reviewAndApprovePage')

const chai = require('chai');
const assert = chai.assert;

import Trans from '../translation/language'

module.exports = class ResoucesPage extends ReviewAndApprovePage {
    // page element selectors
    resourceButton = '.icon-database'
    //resourceButton= '//div[contains(@class, "lv-top-menu-button-text")][contains(text(), "Resources")]'
    resourceButtonText = '//div[contains(text(), "Resources")]'


    // left menu
    companyCatalog = '.icon-catalog'
    сompanyCatalogText = '//div[contains(text(), "Company Catalog")]'

    compatibleUnitsLibrary = '.icon-cu'


    // main page
    listOfCatalog = '.options-wrapper'
    inactiveContent = '.cell-content.inactive'
    companyCatalogList = '.mat-option'

    createNewCompanyCatalogHeader = '//div[contains(text(), "Company Catalog Item")]'
    createNewCompanyCatalogTabHeader = '//div[contains(text(), "Asset_Without_Support")]'
    createNewCompanyCatalogTabField1 = '//div[contains(text(), "index field #")]'
    createNewCompanyCatalogTabField2 = '//div[contains(text(), "free text")]'
    createNewCompanyCatalogTabField3 = '//div[contains(text(), "number field")]'
    createNEwCatalogItemTypeArea = '.lv-input-with-controls-container.inFocus'

    createNEwCatalogItemTypeText = 'new value1'
    createNEwCatalogItemTypeEmptyText = '   '

    errorPopUpText = '//div[contains(text(), "All changes will be lost. Continue?")]'
    inactivationItemAtCompanyCatalog = '//div[contains(text(), "new value")]'

    inactiveButtonCreateNewCatalogItem = '.inactive-title'

    activeTextNEwCatalogItem = '//div[contains(text(), "Activate")]'

    inacativeIconShareLiveList = '.cell-content.inactive'
    
    pagination = '//div[contains(text(), {{0}})]/parent::div/parent::div'
    paginationText = '//*[contains(@class, "ag-paging-description")]'
    pagination1 = '//*[contains(text(), "1 out of 2")]'
    pagination2 = '//*[contains(text(), "2 out of 2")]'
    clickNextPage = '.ag-icon-next'

    lastPageButton = '.ag-icon-last'
    //table Column id's
    resourceIndexCol='//div[@col-id="customFields.customField229"]'
    //resourceAddedCol='//div[@col-id="customFields.customField478"]'
    resourceAddedCol='//div[@col-id="customFields.{{0}}"]'
    
               
    


    //Distribution lists
    noDistributionIcon='//*[contains(@class, "icon-no-distribution-list")]'

    async fillResourcesForm(fieldsValues){
        
        for (const [key, value] of Object.entries(fieldsValues)) {
            await this.page.waitForTimeout(500)
            await getXPathAndClick(this.page, this.inputByFieldName.replace("{{0}}", `"${key}"`))
            await clearValueBackspaceXPath(this.page, this.inputByFieldName.replace("{{0}}", `"${key}"`))
            await getXPathAndType(this.page, this.inputByFieldName.replace("{{0}}", `"${key}"`),`${value}`)
            
       }
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
    }
    async viewTablesFields(assetType,columnToSearch,indexField){
        let validateField
        await waitAndClick(this.page, this.resourceButton)
        await getXPathAndClick(this.page, this.genericDropDownArrow.replace("{{0}}", `"${Trans.keys.RESOURCES.COMPANY_CATALOG}"`))
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", `"${assetType}"`))//
        await this.page.waitForTimeout(1000)
        const tableLength = await countTableRows(this.page, this.tableArraySelectorInfra)
         for (let x = 0; x < tableLength; x++) {
            await this.page.waitForTimeout(500)
            const innerText = await getInnerText(this.page,this.resourceIndexCol,x)
               if(innerText === indexField){
                  validateField=await getInnerText(this.page,columnToSearch,x)
                break;
             }
        }
        await waitAndClick(this.page,this.upperIconRA)
        return validateField
    }

    async editTablesFields(action,assetType,resourceFIelds,columnToSearch,indexField){
        let validateField
        await waitAndClick(this.page, this.resourceButton)
        await getXPathAndClick(this.page, this.genericDropDownArrow.replace("{{0}}", `"${Trans.keys.RESOURCES.COMPANY_CATALOG}"`))
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", `"${assetType}"`))//
        await this.page.waitForTimeout(2000)
        const tableLength = await countTableRows(this.page, this.tableArraySelectorInfra)
        switch(action){
            case "clickCell":
                    for (let x = 0; x < tableLength; x++) {
                    await this.page.waitForTimeout(500)
                    const innerText = await getInnerText(this.page,this.resourceIndexCol,x)
                    if(innerText === indexField){
                        await getXPathAndDoubleClickWithIndex(this.page,this.resourceIndexCol,x)
                        if(await isElementExistsbyXPath(this.page,this.cardName.replace("{{0}}", `"${assetType}"`))){
                        await this.fillResourcesForm(resourceFIelds)
                        validateField= await getInnerText(this.page,columnToSearch,x)
                    }
                        break;
                    }
                    
                }
            break;
            case "addButton":
                
                await waitAndClick(this.page, this.addButton)
                await this.page.waitForTimeout(500)
                await this.fillResourcesForm(resourceFIelds)
                for (let x = 0; x < tableLength; x++) {
                    await this.page.waitForTimeout(500)
                    const innerText = await getInnerText(this.page,this.resourceIndexCol,x)
                    if(innerText === resourceFIelds.index){
                     validateField= await getInnerText(this.page,columnToSearch,x)
                     break;
                     }
                }   
                
                break;        
            default:throw new Error(`something went wrong on ${action} action` )
                
        }
        await waitAndClick(this.page,this.upperIconRA)
        return validateField

        
    }




























}

