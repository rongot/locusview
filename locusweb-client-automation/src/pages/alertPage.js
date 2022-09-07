const chai = require('chai');  
const assert = chai.assert;

const UserManPage = require('./userManPage')
const GroupManPage = require('./groupManPage')
const ConfigurationGeneral = require('./configurationGeneralPage')

const { waitAndClick, getXPathAndClick, getXPathAndType, getText, getElementFromArrayByIndex, getXPathAndDoubleClick} = require('../common/locateHelpers')
const { isElementExists, isElementExistsbyXPath } = require('../common/assertHelpers')

module.exports = class AlertConfiguration extends ConfigurationGeneral {

    constructor(page) {
        super(page)
    } 
    
    
    alertIconLeftMenuActive='//*[contains(@class, "lv-step-content active")]//*[contains(@class, "icon-flag")]'
    longsStoryText='//div[@class="long-story-text"][contains(text(), {{0}})]'


    yellowAlertIconDivAlert = 'lv-alert-type-editor-card .icon-alert-low'
    orangeAlertIconDivAlert = 'lv-alert-type-editor-card .icon-alert-medium'
    redAlertIconDivAlert = 'lv-alert-type-editor-card .icon-alert-high'
    
    //sectionName='//lv-alert-type-editor//*[contains(text(), {{0}})]'

    iconDeleteAlerts='.icon.icon-delete' // array of delete buttons! // recheck clear icon from  infra// this one click at delete button
    //'//*[contains(text(), "When Entity")]//ancestor::lv-alert-type-editor-card//*[contains(@class,"icon icon-delete")]'
    // buttonText = '//*[contains(@class, "button-text")][contains(text(), {{0}})]'    

    valueFromFieldMinRange='//*[contains(text(), "Min")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@ng-reflect-value, {{0}})]'
    valueFromFieldMaxRange='//*[contains(text(), "Max")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@ng-reflect-value, {{0}})]'
    valueFromFieldDisplayLabel='//*[contains(text(), "Display label")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@ng-reflect-value, {{0}})]'
    valueFromField='//*[contains(text(), "Larger Than")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@ng-reflect-value, {{0}})]'
    sectionAtDropDown='//*[@data-automation-web="option-title"][contains(text(), {{0}})]//ancestor::mat-expansion-panel-header[contains(@class, "mat-expansion-panel-header")]'
    arrowCollapseSectionAtDropDown='//*[@data-automation-web="option-title"][contains(text(), {{0}})]//ancestor::*[contains(@class, "header")]//*[contains(@class, "icon-collapse")]'
    arrowExpandSectionAtDropDown='//*[@data-automation-web="option-title"][contains(text(), {{0}})]//ancestor::*[contains(@class, "header")]//*[contains(@class, "icon-expand")]'
    subSectionHidden='//*[@data-automation-web="option-title"][contains(text(), {{0}})]//ancestor::*[contains(@class, "header")]//*[contains(@class, "mat-expansion-panel-conten")][contains(@style, "hidden")]'
    subSectionVisible='//*[@data-automation-web="option-title"][contains(text(), {{0}})]//ancestor::*[contains(@class, "header")]//*[contains(@class, "mat-expansion-panel-conten")][contains(@style, "visible")]'

    async severityLevelSelector (severityLevel){
        await this.page.waitForXPath(this.genericDropDownArrow.replace("{{0}}", '"Severity Level"'))
        await this.page.waitForTimeout(500)
        await getXPathAndClick( this.page, this.fieldNameAlertSpecial)
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", severityLevel))
    }

    async alertWillSelector (AlertWill){
        await this.page.waitForXPath(this.genericDropDownArrow.replace("{{0}}", '"Alert will"'))
        await this.page.waitForTimeout(500)
        await getXPathAndClick( this.page, this.genericDropDownArrow.replace("{{0}}", '"Alert will"'))
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", AlertWill))
    }
    async projectOrWUSelector (ProjectorWU){
        await this.page.waitForXPath(this.genericDropDownArrow.replace("{{0}}", '"On Project or Work Unit Types"'))
        await this.page.waitForTimeout(500)
        await getXPathAndClick( this.page, this.genericDropDownArrow.replace("{{0}}", '"On Project or Work Unit Types"'))
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", ProjectorWU))
    }
    // async selectValueFromDD (DropDownListSelector,ProjectorWU){
    //     await this.page.waitForXPath(this.genericDropDownArrow.replace("{{0}}", DropDownListSelector))
    //     await getXPathAndClick( this.page, this.genericDropDownArrow.replace("{{0}}", DropDownListSelector))
    //     await this.page.waitForTimeout(1000)
    //     await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", ProjectorWU))
    // }
 }