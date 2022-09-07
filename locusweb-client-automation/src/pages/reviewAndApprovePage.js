import Trans from '../translation/language'
const { getElementByTextFromList, getXPathAndClick, getInnerText} = require('../common/locateHelpers')
const { baseURL } = require('../config/configuration')
const chai = require('chai');
const assert = chai.assert;
const InfraPage = require('./a_infra_superPage')
const { isElementExistsbyXPath } = require('../common/assertHelpers');


module.exports = class ReviewAndApprovePage extends InfraPage {

    constructor(page) {
        super(page)
    }

    //these are page element selectors
    dumpDivLocator = '//div[@class={{0}}][contains(text(), {{1}})]'
    dumpSpanLocator = '//span[@class={{0}}][contains(text(), {{1}})]'

    upperIconRA = '.icon-symbol-review-and-approve'
    upperIconUsers = '.icon-users'
    userNameLink = '.user-name'
    //signOut = '.mat-menu-item.ng-star-inserted' // replaced by signOutBtn xpath
    userButton = '.icon-users'
    layersContainer = '.layers-container'
    scrollableSectionFC1 = 'lv-card-list-content > div > div'
    warningToolTip = '//*[contains(@class, "tooltip-item-text")][contains(text(), {{0}})]'
    datePicker = '.date-icon-wrapper > span'
    dateAndTimePicker = '.date-icon-wrapper'
    datePickerXPath = '//span[contains(@class, "icon-calendar")]'
    setButtonForDateAndTime = "//span[contains(@class, 'owl-dt-control-button-content' )][contains(text(), 'Set')]"

    // map-tool-bar selectors
    toolBarIconLayers = '.icon-layers'
    toolBarIconMinus = '.icon-minus'
    toolBarIconPlus = '.icon-plus'
    toolBarIconPan = '.icon-pan'
    searchGeoButton = '.toolbar-icon.icon-search'
    designButtonToolBar = '.toolbar-icon.icon-design'
    searchGeoTypeArea = '.clearable-input'
    searchGeoTypeText = 'boston'
    date = '//span[contains(@class, "owl-dt-calendar-cell-content")][contains(text(), "1")][not(contains(text(), "3"))]'
    dateTo = '//span[contains(@class, "owl-dt-calendar-cell-content")][contains(text(), "2")][not(contains(@class, "owl-dt-calendar-cell-out"))]'
    
    //these are left-side selectors
    listItems = 'lv-recent-list-item'
    //searchFieldLM = '//*[contains(text(), "Search")]'
    searchFieldLM = `//input[contains(@placeholder,"${Trans.keys.REVIEW.HEADERS.SEARCH}")]`// "Search"
    collapseMyProjects = `//*[contains(text(),"${Trans.keys.OVERVIEW.PROJECTS.MY_WORK_ORDERS}")]//ancestor::mat-expansion-panel-header//*[contains(@class, "icon-collapse")]`// "My Work Orders"
    expandMyProjects = `//*[contains(text(),"${Trans.keys.OVERVIEW.PROJECTS.MY_WORK_ORDERS}")]//ancestor::mat-expansion-panel-header//*[contains(@class, "icon-expand")]`// "My Work Orders"
    myProjectsSection = `//*[contains(text(),"${Trans.keys.OVERVIEW.PROJECTS.MY_WORK_ORDERS}")]`// "My Work Orders"
    allProjectsSection = `//*[contains(text(),"${Trans.keys.OVERVIEW.PROJECTS.ALL_WORK_ORDERS}")]`//"All Work Orders"
    expandAllProjects = `//*[contains(text(),"${Trans.keys.OVERVIEW.PROJECTS.ALL_WORK_ORDERS}")]//ancestor::mat-expansion-panel-header//*[contains(@class, "icon-expand")]`//"Work Orders"
    collapseAllProjects = `//*[contains(text(),"${Trans.keys.OVERVIEW.PROJECTS.ALL_WORK_ORDERS}" )]//ancestor::mat-expansion-panel-header//*[contains(@class, "icon-collapse")]`//"Work Orders"
    iconColorLeftMenu = '//div[contains(text(), {{0}})]//parent::div//preceding-sibling::div/div[@style={{1}}]'
    projectIconConstructionLM = '//div[contains(text(), {{0}})]//parent::div//preceding-sibling::div/div[@class="icon-symbol-construction-site"]'
    projectIconLeakReportLM = '//div[contains(text(), {{0}})]//parent::div//preceding-sibling::div/div[@class="icon-symbol-leak-report"]'

    warningFlagLM = 'span.icon-flag.warning.ng-star-inserted'
    violationFlag = 'span.icon-flag.error'

    //these are first card selectors
    //headerIcon = "//i"
    headerIcon = "//em"
    cardTabs = '.mat-tab-labels'
    assetsEmptyIcon = '//*[contains(@class, "icon-no-assets")]'
    jointsEmptyIcon = '//*[contains(@class, "icon-no-joints")]'
    formsEmptyIcon = '//*[contains(@class, "icon-no-forms")]'
    warningEmptyIcon = '//*[contains(@class, "icon-no-wv")]'
    alertsEmptyIcon = `//*[contains(@class, "no-data-text")][contains(text(), "${Trans.keys.EMPTY_CARD.NO_ALERTS}")]`
    noDataIcon = '//*[contains(@class, "no-data-icon")]'
    hideCardIcon = '//*[contains(@class, "icon-hide")][not(contains(@class, "rotateOpen"))]'
    wuEmptyIcon = '//*[contains(@class, "icon-no-work-units")]'

    scrollListItem = '//*[@data-automation-web="lv-scroll-list-item"]'
    scrollListItemByLabel = '//*[@data-automation-web="lv-scroll-list-item"]//label[contains(text(), {{0}})]'
    scrollListItemUsers = '//lv-scroll-list-item//*[contains(@class, "users-details")]'
    boreChildAsset = '//lv-entity-list-item//*[contains(text(), {{0}})]'
    warningTabCounter = '//div[@class="mat-tab-label-content"]/div[contains(text(), "Alerts")]//following-sibling::div' //don't delete, used!
    sectionContainer = '//div[@data-automation-web="entity-container"][contains(@class, "hasBorderTop")]'
    fieldsWithDropdown = '//div[@class="mat-select-value"]'
    lockIconSignature = '//mat-icon[contains(@class, "icon-lock-signature")]'
    deleteDate = '//span[@title="Delete"]'
    //colorsOnHistory = '//label[contains(text(), {{0}})]//ancestor::node()[5]//preceding-sibling::div/span'
    colorsOnHistory = '//div[contains(text(), {{0}})]//ancestor::*[@data-automation-web="entity-container"]//*[contains(@class, "icon-circle")]'
    closeBoreSection = '//label[contains(text(), {{0}})]//ancestor::*[@data-automation-web="lv-scroll-item-container"]//*[contains(@class, "icon-collapse")]'// this is array, take second element
    jointIconSecondCard = '//*[contains(@class, "icon-module-joint")][not(contains(@class, "item-icon"))]'
    iconSymbolDig = '//*[contains(@class, "icon-symbol-dig")]'

    //these are second card selectors
    pipesAndFittingsIcon = '//*[@data-automation-web="entity-container"]//*[contains(@class, "icon-symbol-pipe")]'
    teeIcon = '//*[@data-automation-web="entity-container"]//*[contains(@class, "icon-symbol-tee")]'
    tabTitles = '//*[contains(@class, "tabs-title")]'
    clearValue = '//mat-icon[contains(@class, "icon-clear-medium")]'
    noWarningsViolations = '//div[@class="no-data-text"]'
    noEntitiesAttached = '//div[@class="icon-no-attachments icon"]'
    valueFromPopup = '//div[contains(text(), {{0}})]//following-sibling::div//div[contains(@class, "popup-field-value")]'
    //this selector works only for fields with dropdown, not for inputs, not for textarea
    valueFromField = '//div[contains(text(), {{0}})]//ancestor::mat-form-field//span[contains(@class, "mat-select-value")]/span'

    //these are map selectors
    cluster = '//div[@class="leaflet-pane leaflet-marker-pane"]//canvas/following-sibling::div'
    //these are map selectors
    cluster_pie = '//lv-doughnut-pie//*[contains(@class,"doughnut-chart-counter")]'
    //projectMapIcon = '//lv-marker-icon'
    projectMapIcon = '//*[@id = "auto-project-pin"]'
    mapSummaryPopup = '//*[contains(@class, "lv-review-project-popup-container")]'
    //vertexPin = 'img.marker'
    anyVertex = '//*[contains(@class, "lv-map-svg-icon")]'
    vertexPin = '#auto-common-marker-pin > path'
    referencePin = '#lollipop'
    circleAttached = '#circle-attached'
    jointOnMap = '#hasAttachments > circle'
    //pinForTees = '#auto-pin-icon-template.icon-tee'
    pinForTees = '#auto-pin-icon-template.icon-symbol-tee'
    lineOnMap = 'path.leaflet-interactive'
    dimensionIcon = '//div[contains(@class, "icon-dimensioning")]'
    closeMapPopup = '//a[@class = "leaflet-popup-close-button"]'

    //these are filter selectors
    starIcon = '//span[@class="mat-button-wrapper"]/div[contains(@class, "icon-star")]'

    xPopup = '//div[@class="header-actions"]/mat-icon'
    locationIcon = '//*[contains(text(), "Map Bounds")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//div[contains(@class,"icon-location")]'
    
    expandArrows = '//span[contains(@class, "icon-collapse")]'
    filterName = '//input[contains(@class, "save-as-field-container")]'
    saveFilterName = '//button[contains(., "Save")]'
    editDots = '//*[contains(text(), {{0}})]//ancestor::lv-item-with-actions//*[contains(@class, "icon-more")]'
    construstionTab = '//div[contains(text(), "Construction")]//ancestor::div[contains(@role, "tab")][contains(@class, "mat-tab-label")]'

    unlockIcon = '//*[contains(@class, "icon-unlock-fields")]'

    statusButton = '//button[contains(@class, "button-steps")]'
    checkListApprovePageButton = '//div[contains(@class, "checklist-approve-button-container-in-review")]'
    boreAssetTitle = '//*[@class="title flex"][contains(text(), {{0}} )]'
    
    //steps
    stepButton = '//*[contains(@class, "button-steps-text")]'

    // measurement
    iconAlong='//*[contains(@class,"icon-along")]'
    iconBetween='//*[contains(@class,"icon-between")]'

    // Planned CU
    sortArrowIconUpForColumnName='//*[contains(@class, "ag-sort-ascending-icon")]'
    sortArrowIconDownForColumnName='//*[contains(@class, "ag-sort-descending-icon")]'
    sortArrowIconGreyForColumnName='//*[contains(@class, "ag-sort-none-icon")]'
    sortArrowIconUpForColumnNameByName='//*[contains(text(), {{0}})]//ancestor::div[contains(@ref, "eLabel")]//*[contains(@class, "ag-sort-ascending-icon")]'
    sortArrowIconDownForColumnNameByName='//*[contains(text(), {{0}})]//ancestor::div[contains(@ref, "eLabel")]//*[contains(@class, "ag-sort-descending-icon")]'
    
    // vertexes for CU
    squareBlue= '#square-blue'
    cuMapIconSelectorBySymbol ='//*[contains(@id, "square-blue")]//ancestor::*[contains(@class, "lv-map-svg-icon")]//*[contains(@class, {{0}})]'
    cuMapCounterBySymbol='//*[contains(@class, {{0}})]//ancestor::*[contains(@class, "lv-map-svg-icon")]//*[contains(@class, "gwd-counter")]'
    popUpContent = '//*[contains(@class, "leaflet-popup-content-wrapper")]'

    validateDate() {
        let newDate = new Date()
        let currentDate = newDate.getDate()
        return currentDate
    }

    async clickProject(projectName) {
        const url = await this.page.url()
        if(url !== `${baseURL}/app/main/review/projects`){
        await this.page.goto(`${baseURL}/app/main/review/projects`)
        await this.page.waitForNavigation(`${baseURL}/app/main/review/projects`)
        await this.page.waitForTimeout(1000)}
        await this.clickLeftLinkDiv([projectName])
    }

    async clickProjectEdit(projectName) {
        await this.page.goto(`${baseURL}/app/main/review/projects`)
        await this.page.waitForNavigation(`${baseURL}/app/main/review/projects`)
        await this.page.waitForTimeout(1000)
        await isElementExistsbyXPath(this.page,this.searchFieldLM)
        await this.clickLeftLinkDiv([projectName])
        await getXPathAndClick(this.page, this.editIconI)
    }

    async clickProjectFromAll(projectName) {
        await this.page.goto(`${baseURL}/app/main/review/projects`)
        await this.page.waitForNavigation(`${baseURL}/app/main/review/projects`)
        await getXPathAndClick(this.page, this.expandAllProjects)
        await this.clickLeftLinkDiv([projectName])
    }

    async checkInputsUntouched() {
        let allIntputs = []
        let count
        let className = []
        let x
        allIntputs = await this.page.$x(this.inputs)
        count = allIntputs.length
        for (x = 0; x < count; x++) {
            className[x] = await allIntputs[x].evaluate(e => e.className)
        }
        const resultArr = className.filter(c => !c.includes("text-ellipsis") && c.includes("mat-input-element") && !c.includes("ng-untouched"))

        return resultArr && resultArr.length === 0;
    }

    async getArrayValues() {
        let allIntputs = []
        let count
        let x
        let allValues = []
        allIntputs = await this.page.$x('//div[@class="ellipsis-container"]//input')
        count = allIntputs.length
        console.log("count***", count)
        for (x = 0; x < count; x++) {
            allValues[x] = await allIntputs[x].evaluate(e => e.value)
        }
        console.log("allValues***", allValues)
        return allValues.filter(e => e === '21')
    }

    async collapseSection(sectionName) {
        const element = await getElementByTextFromList(this.page, this.collapseSectionIcon, [sectionName])
        await element.click()
    }

    async collapseBore(boreTitle) {
        const path = await this.createPath(this.closeBoreSection, [boreTitle])
        const arrow = await this.page.$x(path)
        await arrow[0].click()
        //await getXPathAndClick(this.page, path)
    }

    async clickTab(tabName) {
        const path = await this.createPath(this.tabTitle, [tabName])
        await this.page.waitForXPath(path)
        const title = await this.page.$x(path)
        await title[0].click()
        await this.page.waitForTimeout(500)
    }

    async closeDontSave() {
        await getXPathAndClick(this.page, this.secondaryButtonByText.replace("{{0}}", '"Cancel"'))
        await getXPathAndClick(this.page, this.secondaryButtonByText.replace("{{0}}", '"Discard"'))
    }

    async openSecondCard(entityType, entityName, position) {
        await this.clickLeftLinkInfra([entityType])
        await getXPathAndClick(this.page, this.entityTitle.replace("{{0}}", `"${entityName}"`))
        await this.page.waitForTimeout(2000)
        const cardTitle1 = await getInnerText(this.page, this.cardTitle, position)
        assert.include(cardTitle1, entityName)
    }

    async openSecondCardByIndex(entityType, entityName, position, index) {
        await this.clickLeftLinkInfra([entityType])
        await getXPathAndClick(this.page, this.entityTitle.replace("{{0}}", `"${entityName}"`), index)
        await this.page.waitForTimeout(2000)
        const cardTitle1 = await getInnerText(this.page, this.cardTitle, position)
        assert.include(cardTitle1, entityName)
    }

    async clickEditIconSC() {
        await this.page.waitForXPath(this.editIconI)
        const clickIcon = await this.page.$x(this.editIconI)
        clickIcon[0].click()
    }

    async editSecondCard(projectName, entityType, entityName, position) {
        await this.clickProject([projectName])
        await this.openSecondCard(entityType, entityName, position)
        await this.clickEditIconSC()
        //await getXPathAndClick(this.page, this.editIconI)
    }

    async clickJointsTabSecondCard(projectName, entityType, entityName, position) {
        await this.clickProject([projectName])
        await this.openSecondCard(entityType, entityName, position)
        await getXPathAndClick(this.page, this.tabTitle.replace("{{0}}", '"Joints"'))
    }

    async clickFormsTabSecondCard(projectName, entityType, entityName, position) {
        await this.clickProject([projectName])
        await this.openSecondCard(entityType, entityName, position)
        await getXPathAndClick(this.page, this.tabTitle.replace("{{0}}", '"Forms"'))
    }

    async clickAssetsTabSecondCard(projectName, entityType, entityName, position) {
        await this.clickProject([projectName])
        await this.page.waitForTimeout(1000)
        await this.openSecondCard(entityType, entityName, position)
        await this.page.waitForTimeout(1000)
        await getXPathAndClick(this.page, this.tabTitle.replace("{{0}}", '"Assets"'))
    }

    async clickWarningsTabSecondCard(projectName, entityType, entityName, position) {
        await this.clickProject([projectName])
        await this.openSecondCard(entityType, entityName, position)
        await getXPathAndClick(this.page, this.tabTitle.replace("{{0}}", '"Alerts"'))
    }
    async clickOnSecondCard(projectName, entityType, entityName, position) {
        await this.clickProject([projectName])
        await this.page.waitForTimeout(1000)
        await this.openSecondCard(entityType, entityName, position)
        await this.page.waitForTimeout(1000)
        // await getXPathAndClick(this.page, '//div[contains(@class, "tabs-title")][contains(text(), "Assets")]')
    }

}

