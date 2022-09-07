const chai = require('chai');
const assert = chai.assert;

const UserManPage = require('./userManPage')
const GroupManPage = require('./groupManPage')
const ConfigurationGeneral = require('./configurationGeneralPage')
const AlertConfiguration = require('./alertPage')


const { waitAndClick, getXPathAndClick, getXPathAndType, getText, getElementFromArrayByIndex, getXPathAndDoubleClick } = require('../common/locateHelpers')
const { isElementExists, isElementExistsbyXPath } = require('../common/assertHelpers')

module.exports = class MetricsConfiguration extends AlertConfiguration {

    constructor(page) {
        super(page)
    }

    addButtonAtMetricEditorScreen = '//*[contains(@class, "editor-card-title")][contains(text(), "Calculation")]//ancestor::lv-editor-expansion-repeater//*[contains(@class, "add-button")]//*[contains(text(),  "Add Calculation")]'
    sectionNameCalculation = '//*[contains(@class, "editor-card-title")][contains(text(), {{0}})]'
    calcSections = '//*[contains(@class, "editor-card-title")][contains(text(), {{0}})]'
    deleteButtonAtMetricEditorScreen = '//*[contains(@class, "editor-card-title")][contains(text(), {{0}})]//ancestor::*[contains(@class, "calculations_field")]//*[contains(@class, "icon-delete")]'
    addCalculatePerCalcSection = '//*[contains(@class, "editor-card-title")][contains(text(), {{0}})]//ancestor::*[contains(@class, "calculations_field")]//*[contains(@class, "add-button")]//*[contains(text(),  "Add calculate by")]'

    //specificFieldWithDropDownMetric = '//*[contains(@class, "lv-label-text empty-Blur-label")][contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[@data-automation-web="lv-select-option-value"]'
    inputByFieldNameMetric = '//*[contains(@class, "editor-card-title")][contains(text(), {{0}})]//ancestor::*[contains(@class, "calculations_field")]//*[contains(@class, "lv-label-text empty-Blur-label")][contains(text(), "Label")]'

    //Formula buttons
    formulaAddFormula = '//*[contains(text (), "Add Formula")]'
    formulaAddCount = '//*[contains(text(), "Formula #{{0}}")]//ancestor::mat-expansion-panel//*[contains(text(), "Add Count")]'
    formulaAddConstValue = '//*[contains(text(), "Formula #{{0}}")]//ancestor::mat-expansion-panel//*[contains(text(), "Add Constant Value")]'
    formulaAddAction = '//*[contains(text(), "Formula #{{0}}")]//ancestor::mat-expansion-panel//*[contains(text(), "Add Action")]'
    formulaLabel = '//mat-expansion-panel[contains(., "Formula #{{0}}")]//*[contains(text(), "Label")]'
    formulaAlertIcon = '//mat-expansion-panel[contains(., "Formula #{{0}}")]//*[contains(@class, "icon-alert")]'
    formulaDeleteIcon = '//*[contains(@class, "editor-card-title")][contains(text(), "Formula #{{0}}")]//ancestor::*[contains(@class, "formulas_field")]//*[contains(@class, "icon-delete")]'
    formulaContainer = '//*[contains(text(), "Formula #{{0}}")]//ancestor::mat-expansion-panel//*[contains(@class, "formula-container")]'
    formulaVisibleByLebel = '//*[contains(@ng-reflect-max-length-current-value, "{{0}}")]//ancestor::*[contains(@class, "grid-row") and contains(@class, "ng-star-inserted")]//*[contains(text(), "Visible")]'
    formulaInvisibleByLebel = '//*[contains(@ng-reflect-max-length-current-value, "{{0}}")]//ancestor::*[contains(@class, "grid-row") and contains(@class, "ng-star-inserted")]//*[contains(text(), "Invisible")]'

    //Calculation buttons
    calcEntityType = '//*[contains(text(), "Calculation #{{0}}")]//ancestor::mat-expansion-panel//*[contains(text(), "Entity type")]'
    addCalcCalcBy = '//*[contains(text(), "Calculation #{{0}}")]//ancestor::mat-expansion-panel//*[contains(text(), "Add calculate by")]'
    calcCalcBy = '//*[contains(text(), "Calculation #{{0}}")]//ancestor::mat-expansion-panel//*[contains(text(), "Calculate by")]'
    calcLabel = '//*[contains(text(), "Calculation #{{0}}")]//ancestor::mat-expansion-panel//*[contains(text(), "Label")]'
    calcVisible = '//*[contains(text(), "Calculation #{{0}}")]//ancestor::mat-expansion-panel//*[contains(text(), "Visible")]'
    calcInvisible = '//*[contains(text(), "Calculation #{{0}}")]//ancestor::mat-expansion-panel//*[contains(text(), "Invisible")]'
    calcTypeName = '//*[contains(text(), {{0}})]//ancestor::mat-expansion-panel//*[contains(@class, "lv-label-text") and normalize-space(text()) = {{1}}]'
    calcDeleteCountByLabel = '//*[contains(@ng-reflect-max-length-current-value, "{{0}}")]//ancestor::*[contains(@class, "repeat-inner-row") and contains(@class, "fieldCalculations_field")]//*[contains(@class, "icon-delete")]'
    calcVisibleByLabel = '//*[contains(@ng-reflect-max-length-current-value, "{{0}}")]//ancestor::*[contains(@class, "repeat-inner-row") and contains(@class, "fieldCalculations_field")]//*[contains(text(), "Visible")]'
    calcInvisibleByLabel = '//*[contains(@ng-reflect-max-length-current-value, "{{0}}")]//ancestor::*[contains(@class, "repeat-inner-row") and contains(@class, "fieldCalculations_field")]//*[contains(text(), "Invisible")]'
    calcAlertByCalcNum = '//*[contains(text(), "Calculation #{{0}}")]//ancestor::mat-expansion-panel//*[contains(@class, "icon-alert")]'

    //Data Visualization
    dataAlertIcon = '//mat-expansion-panel[contains(., "Data Visualization")]//*[contains(@class, "icon-alert")]'
    dataGroupBy = '//mat-expansion-panel[contains(., "Data Visualization")]//*[contains(text(), "Group by")]'
}