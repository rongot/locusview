const chai = require('chai');  
const assert = chai.assert;

const UserManPage = require('./userManPage')
//const SuperPage = require('./a_superPage')
const { getElementByTextFromList, waitAndClick, getXPathAndClick, getXPathAndType, getText, getElementFromArrayByIndex, getXPathAndDoubleClick} = require('../common/locateHelpers')
const { isElementExists, getTextFromArrayElement, isElementExistsbyXPath } = require('../common/assertHelpers')
import Trans from '../translation/language'
module.exports = class GroupManagement extends UserManPage {

    constructor(page) {
        super(page)
    }  

    //these are element selectors
    //main view
    groupNameTitle = '.grid-item-title'
    groupBname = '//div[@class="main-group-item-title"][contains(text(), "Group B")]'
    groupNameSubTitle = '.grid-item-description-2.ng-star-inserted'
    membersCount = '//div[contains(@class, "grid-item-description-1")]'
    threeDotsIcon = '//div[contains(@class, "icon-more")]'
    
    //group settings create
    
    descriptionFormField = '//div[contains(text(), "Group Description")]//ancestor::node()[2]//following-sibling::div//textarea'
    policiesFormField = '.mat-select-arrow'
    
    
    //group settings edit
    groupSettingsTitle = '.lv-buttons-actions-bar-title'
    modalDependency = '//*[contains(@class, "group-name-with-icon")][contains(text(), {{0}})]'
    
    //these are variables used on this page
    groupA = "Group A"
    groupB = "Group B"
    groupADescript = "This is a description"
    groupBDescript = "Just a text"
    editValue = "_edited"
    groupComma= "Group,Comma"
   
    async createGroup(groupName, groupDescript) {
        //await this.page.waitForTimeout(1000)
        await waitAndClick(this.page, this.addButton)
        await this.page.waitForTimeout(1000)
        await getXPathAndClick(this.page, this.inputByFieldName.replace("{{0}}",`"${Trans.keys.GROUPS.GROUP_NAME}"`))// '"Name"'
        await getXPathAndType(this.page, 
            this.inputByFieldName.replace("{{0}}", `"${Trans.keys.GROUPS.GROUP_NAME}"`), groupName)//'"Name"'
        await getXPathAndType(this.page, 
            this.inputByFieldName.replace("{{0}}",`"${Trans.keys.GROUPS.GROUP_DESCRIPTION}"` ), groupDescript)//'"Description"'
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
    }
   
    async closeIfError() {

        await getXPathAndClick(this.page, this.cancelUpperXButton)
        //await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
        await getXPathAndClick(this.page, this.secondaryButtonByText.replace("{{0}}", '"Discard"'))
    }

    async closeIfErrorPopup() {
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", '"Got"'))
        //await getXPathAndClick(this.page, this.cancelUpperXButton)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
        //await getXPathAndClick(this.page, this.secondaryButtonByText.replace("{{0}}", '"Discard"'))
    }

    async closeWithoutSave(field, newValue, name) {
        await this.clickEdit(name)
        await this.placeNewValueToAField(field, newValue)
        await getXPathAndClick(this.page, this.secondaryButtonByText.replace("{{0}}", '"Cancel"'))
        await getXPathAndClick(this.page, this.secondaryButtonByText.replace("{{0}}", '"Discard"'))
        await this.page.waitForTimeout(500)
        //await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
    }

    async saveAndClose() {
        await this.page.waitForTimeout(1000)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await this.page.waitForTimeout(1000)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
    }

    async duplicateName(groupName) {
        //await this.page.waitForTimeout(500)
        await waitAndClick(this.page, this.addButton)
        await getXPathAndType(this.page, this.groupNameFormField, groupName)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        //await this.page.waitForTimeout(1000)
        const errorIcon = await isElementExistsbyXPath(this.page, this.errorIconOnField)
        assert.isTrue(errorIcon)
        await this.closeIfError()
    }

    async createWithoutName(){
        await this.createGroup(' ', this.groupADescript)
        await this.page.waitForXPath(this.errorIconOnField)
        await this.page.waitForTimeout(1000)
        const errorIcon = await isElementExistsbyXPath(this.page, this.errorIconOnField)
        assert.isTrue(errorIcon)
        await this.closeIfError()
    }

    async clickTreeDots(index) {
        await this.page.waitForXPath(this.threeDotsIcon)
        const threeDots = await getElementFromArrayByIndex(this.page, this.threeDotsIcon, index)
        await threeDots.click()
        await this.page.waitForTimeout(500)
    }
    

    async placeNewValueToAField(fieldName, newValue) {
        await waitAndClick(this.page, this.editIcon)
        await getXPathAndType(this.page, this.inputByFieldName.replace("{{0}}", `"${fieldName}"`), newValue)
    }

    async editFormField(field, initialValue, newValue, checkArea, name) {
        await this.clickEdit(name)
        await this.placeNewValueToAField(field, newValue, index)
        await this.saveAndClose()
        await this.page.waitForSelector(checkArea)
        const actual = await getTextFromArrayElement(this.page, checkArea, 0)
        assert.equal(actual.trim(), initialValue + "_edited") 
    }
    async checkBoxMember (tabName, memberName) {
        const element = await getElementByTextFromList(this.page, tabName, [memberName])
        await element.click()
        await this.saveAndClose()
    }
    
    async circulateGroups (name) {
        await this.clickEdit(name)
        await getXPathAndClick(this.page, this.groupsTab)
        const editMemebers = await this.page.$$(this.editIcon)
        editMemebers[1].click()
        await this.checkByIndex(1)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
    }

}