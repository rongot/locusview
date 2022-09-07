const chai = require('chai');
const assert = chai.assert;

const UserManPage = require('./userManPage')
const GroupManPage = require('./groupManPage')
const RevieAndApprove = require('./reviewAndApprovePage')// same selectors
const { waitAndClick, getXPathAndClick, getXPathAndType, waitAndType, scrollTop, getValue, getXPathAndDoubleClick,clearValueBackspaceXPath } = require('../common/locateHelpers')
const { isElementExists, isElementExistsbyXPath, isXPathVisible,countTableRows } = require('../common/assertHelpers');
// const { Date } = require('core-js');
const dateFormat = require('dateformat')
const {collectColumnTexts,getTableRow} = require("../common/tableHelpers");

import { page } from '../common/builder';
import Trans from '../translation/language'

module.exports = class V3ProjectManagementPage extends GroupManPage {

    constructor(page) {
        super(page)
    }

    //these are element selectors =)
    upperIconProject = ".icon-project-management"
    upperIconProjectTooltip = `//div[contains(text(), '${Trans.keys.WORLDS.PROJECT_MANAGEMENT}')]` // same as in resources     
    projectsContainerTitle = '//*[contains(@class, "strip-header-text")]'

    filtersStripSelector = ".main-button-container.open-strip"
    filtersStripClosedSelector = ".main-button-container.close-strip"
    filterItemXpath = "//div[contains(@class,'selected-item')]"// array of items - filters

    //button Project Management screen
    iconMultiple = '//*[contains(@class, "icon-multiple")]'
    iconClearMultiple = '//*[contains(@class, "icon-clear-multiple")]'
    iconUpload = '//*[contains(@class, "icon-upload")]'
    iconAssignment = '//*[contains(@class, "icon-assignment")]'
    iconAssignmentDisabled = '//*[contains(@class, "icon-assignment")][contains(@class, "disabled")]'
    iconWorkflow = '//*[contains(@class, "icon-workflow")]'
    iconWorkflowDisabled = '//*[contains(@class, "icon-workflow")][contains(@class, "disabled")]'
    iconFromPublishPopUp = '.lv-base-message-icon.icon-launch'
    iconFromRevertPopUp = '.lv-base-message-icon.icon-draft'


    //pop-up elements
    itemsList = '//*[@data-automation-web="checkbox-item-text"]//*[contains(@class, "text-ellipsis")][contains(text(), {{0}})]'
    typeInputAtSearchField = '//lv-search-list//input[contains(@placeholder, {{0}})]'
    iconUserNearNamePM = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="checkbox-item-wrapper"]//*[contains(@class,"icon-users")]'
    iconNearSearchResultPM = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="checkbox-item-wrapper"]'
    selectedItemAtPopUpList = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="checkbox-item-wrapper"]//*[contains(@class,"mat-checkbox-checked")]'
    clearSelectionButtonPM = `//*[contains(@class, "clear-selection-text")][contains(text(),"${Trans.keys.GENERAL.CLEAR_SELECTION}")]`//"Clear Selection"

    //change filter popup
    userOrGroup = `//mat-form-field[contains(.,'${Trans.keys.FILTERS.USER_OR_GROUP}')]`
    userFilter = "mat-option"
    semiSelectedPM = '.grid-header-has-striped-color'

    //create project     
    projectTypeDDItemByNameXpath = this.valueFromDropDown//'//*[@data-automation-web="lv-select-option-container" and contains(.,{{0}})]'

    //create and edit project screen
    //buttons
    revertBtnSelector = ".revert-button"
    iconProjectMiddleSelector = ".icon.icon-symbol-fire-safety"
    iconProjectLeftSelector = ".icon-symbol-fire-safety"
    projectTypeMiddleSelector = ".title-container"
    projectTypeLeftSelector = ".lv-step-name-additional"
    projectHeaderLeftSelector = ".main-header-step"
    fieldPhotoLockIcon = ".photos-icon-lock"
    fieldPhotoLocked = ".no-pic-edit-mode"
    signatureLocked = ".lv-signature-content .icon-lock-signature"
    signatureField = ".dynamic-layout-field-SIGNATURE"

    inputFileSelector = "input[type=file]"

    messagePopUP = '[data-automation-web="message-dialog-wrapper"]'

    deletePopupDelBtn = this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.DELETE}"`)
    deletePopupCancelBtn = this.secondaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CANCEL}"`)

    rightDeleteIcon = ".button.icon-delete"
    rightEditIcon = ".button.icon-edit"

    searchUserGroup = ".search-list"
    userStrip = "//*[contains(@class,'entity-container') and contains(.,{{0}})]"

    //edit popup
    popupContinueButton = this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CONTINUE_ANYWAY}"`)//Continue Anyway

    historyRow = ".history-template"
    leftEditStatusXpath = "//button[contains(@class,'button-steps')]"

    //Users card selectors
    pathUsersTitle = '//*[contains(@class, "users-title")][contains(text(), {{0}})]'
    noRestrictionsDescription = '//*[contains(@class, "checkbox-item-text-description")]'
    verifyAll = '//*[contains(@class, "verify-all")]'
    checkBoxUsersCard = '//*[contains(text(), {{0}})]//ancestor::cdk-virtual-scroll-viewport//mat-checkbox'
    checkBoxUsersCardSelected = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="checkbox-item-wrapper"]//mat-checkbox[contains(@class, "mat-checkbox-checked")]'
    dropDownAssigned = '//*[contains(@class, "mat-select-arrow")]'
    dropDownAssignedWrapper = '//*[contains(@class, "mat-select-arrow-wrapper")]'
    valuePermitted_Assigned = '//*[@class="mat-option-text"]/div/div[contains(text(), "& Assigned")]'
    valueAssignedOnly = '//*[@class="mat-option-text"]/div/div[contains(text(), "Assigned")][not(contains(text(), "Permitted"))]'
    valuePermittedOnly = '//*[@class="mat-option-text"]/div/div[contains(text(), "Permitted")][not(contains(text(), "& Assigned"))]'
    valueRemoveAssignment = '//*[@class="mat-option-text"]/div/div[contains(text(), " Remove Assignment ")][not(contains(text(), "& Assigned"))]'
    valueRemovePermission = '//*[@class="mat-option-text"]/div/div[contains(text(), " Remove Permission ")][not(contains(text(), " Remove Permission & Assignment "))]'
    valueRemovePermission_Assignment = '//*[@class="mat-option-text"]/div/div[contains(text(), " Remove Permission & Assignment ")]'


    //these are variables used on this page
    projectTypes = ["Project_WUs_Only", "ProjForms_WUAssets", "ProjAssets_WUForms", "ALL_INCLUDED", "Create From Web", "Project Inactive", "LifecycleProject"]
    projectNamePrefixs = ["WUsOnly", "WUAssets", "WUForms", "AllIncluded", "CreateFromWeb", "Inactive", "AProject1", "AProject2", "AProject3", "AProject27166", "PM check three Alerts", "PM check one Alert"]
    userToAssign = "TestV"
    createdProjectsNames = []
    draftColorRGB = "rgb(42, 41, 119)" //#2a2977 in hexa
    publishColorRGB = "rgb(116, 179, 206)"//#74b3ce in hexa
    backgroundImage = "checkbox-indeterminate.svg"

    statusInnerText = '//*[contains(@class, "status-wrapper")]'

    filterButtonXp = '//*[contains(@class,"main-icon icon-filter")]'
    statusField='//*[contains(text(), {{0}}))]//ancestor::mat-expansion-panel-header[contains(@class, "mat-expansion-panel-header")]'

    //these are methods used on this page

    async getTableReady() {
        const exists = await isElementExistsbyXPath(this.page, this.projectsContainerTitle)

        if (!exists) {
            const popupOpened = await isElementExistsbyXPath(this.page, this.secondaryButtonByText.replace("{{0}}", '""'))
            if (popupOpened) {
                await getXPathAndClick(this.page, this.secondaryButtonByText.replace("{{0}}", '""'))
            }
            await getXPathAndClick(this.page, this.backToMainIcon)
            try { await getXPathAndClick(this.page, this.secondaryButtonByText.replace("{{0}}", '"Discard"')) }
            catch (error) { }
        }
        await this.page.waitForTimeout(2000)
    }

    async clickOnFilterIconOpenFilters() {
        await getXPathAndClick(this.page, this.filterIcon)//click on filter icon
        try {
            await this.page.waitForSelector(this.filtersStripSelector)//wait for buttons to appear
        }
        catch (error) {
            console.error(`${this.filtersStripSelector} wasn't found`)
        }

    }

    async clickOnFilterIconCloseFilters() {
        await getXPathAndClick(this.page, this.filterIcon)//click on filter icon
        try {
            await this.page.waitForSelector(this.filtersStripClosedSelector)//wait for buttons to appear
        }
        catch (error) {
            console.error(`${this.filtersStripClosedSelector} wasn't found`)
        }

    }

    async clickOnAddProjectByType(projectType) {
        const projectDDXpath = await this.projectTypeDDItemByNameXpath.replace("{{0}}", `'${projectType}'`)
        await waitAndClick(this.page, this.addButton)
        if(await isXPathVisible(this.page,this.searchFieldOpen)){
            await getXPathAndClick(this.page,this.searchFieldOpen)
            await getXPathAndType(page, this.searchFieldOpen, projectType)
        }
       
        await getXPathAndClick(this.page, projectDDXpath)

    }

    async typeFieldText(field, text) {
        const fieldXpath = await this.inputByFieldName.replace('{{0}}', `'${field}'`)
        await getXPathAndClick(this.page, fieldXpath)
        await getXPathAndType(this.page, fieldXpath, text)
    }

    async typeFieldTextArea(field, text) {
        const fieldXpath = await this.textareaByFieldName.replace('{{0}}', `'${field}'`)
        await getXPathAndClick(this.page, fieldXpath)
        await getXPathAndType(this.page, fieldXpath, text)
    }

    async getFieldValue(field) {
        const fieldXpath = await this.inputByFieldName.replace('{{0}}', `'${field}'`)
        const fieldValue = await getValue(this.page, fieldXpath, 0)
        return fieldValue
    }

    async getFieldValueTextArea(field) {
        const fieldXpath = await this.textareaByFieldName.replace('{{0}}', `'${field}'`)
        const fieldValue = await getValue(this.page, fieldXpath, 0)
        return fieldValue
    }


    async searchProject(projectName) {
        //search
        await waitAndClick(this.page, this.searchButton)
        await getXPathAndType(this.page, this.searchField, projectName)//type in search field
        await this.page.waitForTimeout(1000)
    }

    async clickOnEditProject() {
        await waitAndClick(this.page, this.rightEditIcon)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", '"Continue Anyway"'))
        const isSave = await isElementExistsbyXPath(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        assert.isTrue(isSave, `Save buttons should be displayed ${this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`)}`)
    }

    async createNewProjectDraft(projectName, projectType,projectNameField="Name") {
        await this.clickOnAddProjectByType(projectType)// click on Create from web option
        await this.typeFieldText(projectNameField, projectName)// type project name
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))// click save
        await this.page.waitForSelector('.icon-edit')
    }

    async createNewPM(projectName, projectType,projectNameField="Name") {
        const projectName1 = projectName//index of 4 is for Create From Web projet prefix + timestamp
        await this.clickOnAddProjectByType(projectType)// click on Create from web option
        await this.typeFieldText(projectNameField, projectName1)// type project name
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))// click save
        await isElementExistsbyXPath(this.page, this.editIcon)
        const isSaveBtnExist = await isElementExistsbyXPath(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))// save button should not exist
        assert.isFalse(isSaveBtnExist, `Save button should not exist ${this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`)}`)
        this.createdProjectsNames.push(projectName1)// save project name

        return projectName1
    }

    async clearAllFilters() {
        try {
            await getXPathAndClick(this.page, this.filterIcon)//click on filter icon            
            const clearAll = await this.page.waitForXPath(this.clearAll, { timeout: 1500 })
            if (clearAll != null) {
                await getXPathAndClick(this.page, this.clearAll)// clear all filters    
            }

        } catch (error) {
            //do nothing, filter was not set
        }
    }

    async backToProjectsList() {
        const isInfoPopupX = await isElementExistsbyXPath(this.page, this.infoPopupXIcon)
        if (isInfoPopupX) {
            await getXPathAndClick(this.page, this.infoPopupXIcon)
        }

        await waitAndClick(this.page, this.upperIconProject)//click on upper icon project
        try {
            const discardBtn = await this.page.waitForXPath(this.secondaryButtonByText.replace("{{0}}", '"Discard"'), { timeout: 1000 })//discard popup
            await discardBtn.click()
        } catch (error) {
            // do nothing, discard popup wasn't shown
        }
        await this.page.waitForXPath(this.projectsContainerTitle)// wait for projects list
    }

    async appendTextToProjectFields(text, field) {

        // get project field value
        let fieldText = await this.getFieldValue(field)
        fieldText += text

        const fieldXpath = await this.inputByFieldName.replace('{{0}}', `'${field}'`)
        await getXPathAndClick(this.page, fieldXpath)
        await this.page.waitForTimeout(500)
        const deleteIcon = await this.deleteIcon.replace("{{0}}", `'${field}'`)
        await getXPathAndClick(this.page, deleteIcon)
        await getXPathAndType(this.page, fieldXpath, fieldText)

        return fieldText
    }

    async deleteProjectFieldValue(field) {

        const fieldXpath = await this.inputByFieldName.replace('{{0}}', `'${field}'`)
        //console.log(fieldXpath)
        await getXPathAndClick(this.page, fieldXpath)
        await this.page.waitForTimeout(500)
        const deleteIcon = await this.deleteIcon.replace("{{0}}", `'${field}'`)
        await getXPathAndClick(this.page, deleteIcon)
    }

    async replaceTextInProjectField(text, field) {

        const fieldXpath = await this.inputByFieldName.replace('{{0}}', `'${field}'`)
        //console.log(fieldXpath)
        await this.deleteProjectFieldValue(field)
        await getXPathAndClick(this.page, fieldXpath)
        await getXPathAndType(this.page, fieldXpath, text)
    }

    async typeTextInProjectField(text, field) {

        const fieldXpath = await this.inputByFieldName.replace('{{0}}', `'${field}'`)
        await getXPathAndClick(this.page, fieldXpath)
        await getXPathAndType(this.page, fieldXpath, text)
    }

    async editUserPermissions(projectName) {
        await this.clickRowInTable([projectName])
        await this.clickLeftLinkInfra([Trans.keys.USERS.USERS])//"Users"
        await getXPathAndClick(this.page, this.editIconI)
    }


    async scrollToFindProjectInTheList(projectRow) {
        for (let i = 0; i < 3; i++) {
            let rowFound = await isElementExistsbyXPath(this.page, projectRow)
            if (!rowFound) {
                await scrollTop(this.page, this.areaToScrollTableInfra, 100);// scroll down
                rowFound = await isElementExistsbyXPath(this.page, projectRow)
            }
            else {
                break
            }
        }
    }

    async findProjectInTable(projectName) {


        const projectRow = await this.tableRowName.replace("{{0}}", `'${projectName}'`)
        // click on project

        let rowFound = await isElementExistsbyXPath(this.page, projectRow)
        for (let i = 0; i < 1000; i++) {
            if (rowFound) {
                break
            }
            else {
                await scrollTop(this.page, this.areaToScrollTableInfra, 100);// scroll down
                rowFound = await isElementExistsbyXPath(this.page, projectRow)
            }
        }

        // scroll to the top of the page
        await scrollTop(this.page, this.areaToScrollTableInfra, -100000000);// scroll up

        return rowFound
    }

    async deleteProjectFromPM(projectName) {
        await this.page.waitForSelector(this.addButton)
        await this.clickRowInTable(projectName)
        await this.page.waitForTimeout(1000)
        await waitAndClick(this.page, this.iconDeleteConfig)
        await getXPathAndClick(this.page, this.secondaryButtonByText.replace('{{0}}', '"Delete"'))
        await this.page.waitForTimeout(500)
    }
    async filterFields(selectionField,selectionFieldValue){
            await waitAndClick(this.page, this.upperIconProject)
            await getXPathAndClick(this.page, this.filterButtonXp)
            await getXPathAndClick(this.page, this.change)
            await getXPathAndClick(this.page, this.specificDropDownArrow.replace("{{0}}", `"${selectionField}"`))
            await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", `"${selectionFieldValue}"`))
            await getXPathAndDoubleClick(this.page,this.collapseSectionIcon.replace("{{0}}", `"Status"`))
            await getXPathAndClick(this.page,this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.APPLY}"`))
            
    }   
    async addColumnToPmTable(columnName){
            await getXPathAndClick(this.page, this.tableSettingIcon)
                if(!await isElementExistsbyXPath(this.page,this.checkBoxSelected2.replace("{{0}}", `"${columnName}"`))){
                await getXPathAndClick(this.page, this.checkBoxByText.replace("{{0}}", `"${columnName}"`))
            }
            await getXPathAndClick(this.page, this.tableSettingIcon)
    }
    async editDetailsFields(fieldName,validateNumber){
            const fieldXpath='//ancestor::dynamic-field-wrapper//lv-number//input'
            //await getXPathAndDoubleClick(this.page, tableRow.replace("{{0}}", `${x}`).replace("{{1}}", `${colId}`))
            await getXPathAndClick(this.page,this.editIconI)
            await getXPathAndClick(this.page,this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CONTINUE_ANYWAY}"`))
            await getXPathAndClick(this.page,this.fieldTitle.replace("{{0}}", `"${fieldName}"`))
            await clearValueBackspaceXPath(page,this.fieldTitle.replace("{{0}}", `"${fieldName}"`)+fieldXpath)
            await getXPathAndType(this.page,this.fieldTitle.replace("{{0}}", `"${fieldName}"`),validateNumber)
            await getXPathAndClick(this.page,this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
            await getXPathAndClick(this.page,this.backToMainIcon)
    }
    async clickOnRow(workOrderTypeId,addedColumnId,fieldName,validateNumber,workOrderName){
        // const colId ='typeId'
        // const autoTag='tagItemDictionary.3'
        const tableLength = await countTableRows(this.page, this.tableArraySelectorInfra)
        const tablerow=await getTableRow()
        if(tableLength === 1){
             await getXPathAndDoubleClick(this.page, tablerow.replace("{{0}}", `${0}`).replace("{{1}}", `${workOrderTypeId}`))
             await this.editDetailsFields(fieldName,validateNumber)
        }
        else{
            for (let x = 0; x < tableLength; x++) {
                 const innerText = await getInnerText(page, tableRow.replace("{{0}}", `${x}`).replace("{{1}}", `${workOrderTypeId}`), 0)
                    if(innerText ===workOrderName){
                        await getXPathAndDoubleClick(page, tableRow.replace("{{0}}", `${x}`).replace("{{1}}", `${workOrderTypeId}`))
                        await this.editDetailsFields(fieldName,validateNumber)
                        break;
                    }
                    else{
                        throw new Error("column doesn't exists")
                    }
                                                   }
        }
         let valueToValidate = await collectColumnTexts(tableLength, page, addedColumnId,"")
         valueToValidate = valueToValidate.filter(Number);
         await waitAndClick(this.page,this.upperIconRA)
         return valueToValidate
           
    }
}