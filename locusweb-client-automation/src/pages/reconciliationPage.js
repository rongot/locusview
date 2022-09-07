const chai = require('chai');  
const assert = chai.assert;

const UserManPage = require('./userManPage')
const GroupManPage = require('./groupManPage')
const ConfigurationGeneral = require('./configurationGeneralPage')

const { waitAndClick, getXPathAndClick, getXPathAndType, getText, getElementFromArrayByIndex, getXPathAndDoubleClick} = require('../common/locateHelpers')
const { isElementExists, isElementExistsbyXPath } = require('../common/assertHelpers')

module.exports = class ReconciliationPage extends ConfigurationGeneral {

    constructor(page) {
        super(page)
    } 
    
    //icon-delta
    deleteIconReconActions= '//*[contains(@ng-reflect-value, {{0}})]//ancestor::*[contains(@class, "flex-base-center")]//*[contains(@class,"icon-delete")]'
    fieldsAtReconAditorByCard = '//lv-editor-card[contains(@ng-reflect-title, {{0}})]//*[contains(@class, "lv-checkbox-text")]'
    selectedFieldsAtActionsForm='//lv-editor-card[contains(@ng-reflect-title, "Actions Form")]//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[@data-automation-web="lv-checkbox-container"][contains(@class, "checkbox-container-checked")]'
    selectedFieldsAtAggregationSettings='//lv-editor-card[contains(@ng-reflect-title, "Aggregation")]//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[@data-automation-web="lv-checkbox-container"][contains(@class, "checkbox-container-checked")]'

    unselectedFieldsAtActionsForm='//lv-editor-card[contains(@ng-reflect-title, "Actions Form")]//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[@data-automation-web="lv-checkbox-container"]'
    unselectedFieldsAtAggregationSettings='//lv-editor-card[contains(@ng-reflect-title, "Aggregation")]//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[@data-automation-web="lv-checkbox-container"]'


    lockIconFieldsAtActionsForm='//lv-editor-card[contains(@ng-reflect-title, "Actions Form")]//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@class, "icon-lock")]'
 }