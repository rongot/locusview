const { waitAndClick, waitAndType, getXPathAndClick, getXPathAndDoubleClick, scrollTop, getXPathAndType, waitXpathNotExist,
    getText, mouseHoverXpath, mouseHoverSelector, getInnerText, getTextContent } = require('../common/locateHelpers')
const { isElementExistsbyXPath, isElementExists, isXPathVisible, getAllAttributes, getAllAttributesXpath } = require('../common/assertHelpers')
import { assert } from 'chai'
import Trans from '../translation/language'
import TransEN from '../translation/en'
import TransEL from '../translation/el'
module.exports = class InfraPage {

    constructor(page) {
        this.page = page
    }

    //users credentials
    adminUsername = 'test1'
    adminPassword = '12345678'
    usernameConfigurator = 'testC'
    usernameAppriver = 'testA'
    usernameMobile = 'testM'
    usernameEditor = 'TestE'
    usernameEditorV3 = 'editor'
    usernameViewer = 'TestV'
    usernameConfiguratorV3 = 'configurator'
    password = 'nView123'
    superAdmin = 'admin'

    selectorByTextDiv = '//div[contains(text(), {{0}})]'
    selectorByTextAll = '//*[contains(text(), {{0}})]'

    //login page selectors
    usernameField = '[data-automation-web="username-login"]'
    passwordField = '[data-automation-web="username-password"]'
    termsCheckBox = '[data-automation-web="automation-login-checkbox"]'
    usernameFieldTitle = '.login-input-label-email'
    logo = "//*[@class='login-card-top']//img[@class='LV_logo']";

    //top menu buttons
    upperIconConfig = '.lv-top-menu-button-icon .icon-settings'
    upperEnvSettings = '.icon-environment-settings'
    upperIconRA = '.icon-symbol-review-and-approve'
    upperIconUsers = '.icon-users'
    upperIconProgressTracking = '.icon-project-tracking'
    cancelUpperXButton = `//*[@data-automation-web="lv-actions-bar-button-text"][contains(text(),"${Trans.keys.ACTION.CANCEL}")]`// "Cancel"
    reviewTooltip = `//*[contains(@class, "lv-top-menu-button-text")][contains(text(),"${Trans.keys.WORLDS.REVIEW}")]`//"Review"
    progressTrackingTooltip = `//div[contains(text(), '${Trans.keys.ENVIRONMENT_SETTINGS.FEATURE_TOGGLE.PROGRESS_TRACKING}')]` // same as in resources     

    //infra buttons
    primaryButtonByText = '//button[@data-automation-web="lv-button-primary"][contains(., {{0}})]'
    primaryButtonByTextNotDisabled = '//button[@data-automation-web="lv-button-primary"][not(@disabled)][contains(., {{0}})]'
    primaryDisabledButtonByText = '//button[@disabled][@data-automation-web="lv-button-primary"][contains(., {{0}})]'
    secondaryButtonByText = '//button[@data-automation-web="lv-button-secondary"][contains(., {{0}})]'
    thirdButtonByText = '//button[@data-automation-web="lv-third-button"][contains(., {{0}})]'

    //popup selectors
    publishPopup = ".lv-base-message-container"
    popupHeader = '//*[@data-automation-web="header-title"]'
    errorPopup = 'div.lv-base-message-content'
    popupContainer = '//*[@data-automation-web="lv-base-message-dialog-wrapper"]'
    popupContainerByText='//*[@data-automation-web="lv-base-message-dialog-wrapper"][contains(., {{0}})]'
    xIconPopup = '//*[@title="Close"]'
    baseMessageTitle = '//*[contains(@class, "lv-base-message-title")][contains(text(), {{0}})]'
    baseMessageSubTitle = '//*[contains(@class, "lv-base-message-sub-title")][contains(text(), {{0}})]'
    leftButtonPopupClassSelector = '[data-automation-web="lv-button-secondary"]'
    messageContainer = '//*[data-automation-web="message-dialog-wrapper"]'
    dialogHeader = '.dialog-header'
    dialogContent = '.content-wrapper'


    iconDeleteConfig = '.icon-delete'
    assignmentRemoveIcon = '.icon-assignment-remove'

    //add icon, errors on fields, back to main and other specific icons
    addButton = '.icon-plus'
    addButtonHidden = '//*[contains(@class, "icon-plus")]//ancestor::*[contains(@class, "hide")]'
    orderButton = '.icon-order'
    errorIconOnField = '//span[contains(@class, "icon-alert")]'
    successIconField = '//span[contains(@class, "icon-success-small")]'
    errorIconOnFieldDiv = '//div[contains(@class, "icon-alert")]'
    backToMainIcon = '//*[@class="icon-back-to-main"]'
    inactiveIconS = '.icon-inactive'
    activeIcon = '.icon-active'
    sharedLiveListIcon = '.icon-live-lists'
    restorePasswordIcon = '//*[contains(@class, "icon-restore")]'

    //search icon and field
    searchButton = '.icon-search' //returns an array on R&A CAREFUL
    searchIconPM = '//*[contains(@class, "regular-button-container")]//*[contains(@class, "icon-search")]'
    searchField = '//*[@data-automation-web = "lv-data-grid-search-input-open"]'
    searchFieldOnCards = `//input[@placeholder = "${Trans.keys.GENERAL.SEARCH}"]`//"Search"
    // search field in dropdown lists
    searchFieldOpen = '//*[@data-automation-web = "search-list-input"]'
    iconClearSearch = '//*[contains(@class, "icon-clear-search")]'


    modalLine = "//*[contains(@class, 'group-name-with-icon')]"
    emptyStateSearchIcon = '//*[contains(@class, "icon-search-empty")]'
    calculateIcon = '//*[contains(@class, "icon-calc")]'
    autocalculateIcon = '//*[contains(@class, "icon-calc-auto")]'
    calcIconByName = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//div[contains(@class,"icon-calc")]'

    //edit icons on cards
    titleItem = '//*[contains(@class, "title-item")]'
    editIcon = 'lv-editor-card .icon-edit'// user management
    editIconI = '//*[contains(@class, "icon-edit")][not(contains(@class, "hide"))][not(contains(@class, "disabled"))]' //review and approve, user management, project management
    editIconDisabled = '//span[contains(@class, "icon-edit")][(contains(@class, "disabled"))]'
    deleteIconI = '//span[contains(@class, "icon-delete")]'
    deleteIconDisabledI = '//span[contains(@class, "icon-delete")][(contains(@class, "disabled"))]'
    electricityServicePointIcon = '//*[contains(@class, "icon-symbol-electricity-service-point")]'
    electricitySwitchIcon = '//*[contains(@class, "icon-symbol-electricity-switch")]'
    pipeIcon = '//*[contains(@class, "icon-symbol-pipe")]'
    triangleIcon = '//*[contains(@class, "icon-triangle")]'

    //input fields
    inputField1 = '//input'
    inputByFieldName = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//input'
    inputField2 = '//textarea'
    textareaByFieldName = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//textarea'
    lvNumberByName = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//lv-number'
    lvNumberFieldValue = '//lv-number[@ng-reflect-value={{0}}]'
    fieldTitle = '//*[contains(@class, "lv-label-text")][contains(text(), {{0}})]'


    // selected field values
    existingValue = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[@data-automation-web="lv-select-option-value"]'

    //clear value
    clearIcon = '.icon-clear-medium'
    clearSearch = '.clear-search-icon'

    //error next to field and tooltip
    errorIconByName = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//div[contains(@class,"icon-alert")]'
    errorIconGeneral = '//*[contains(@class, "icon-alert")]'
    //tooltipMessage = '//*[@ng-reflect-message = {{0}}]'
    tooltipMessage = '//*[contains(text(), {{0}})]//ancestor::*[contains(@data-automation-web,"tooltip")]'

    fieldName = '//*[@data-automation-web="dynamic-field-wrapper"]//div[contains(text(), {{0}})]'
    lockIconSimple = "//*[contains(@class, 'icon-lock')]"
    lockIcon = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@class, "icon-lock")]'
    lockIconUM = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="checkbox-item-wrapper"]//*[contains(@class, "icon-lock")]'
    gotoButton = '//*[contains(@class, "icon-go-to")][not(contains(@class, "hide"))]//parent::div'
    gotoByName = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="entity-container"]//*[contains(@class, "icon-go-to")]'
    // gotoTooltip = '//*[contains(@class, "icon-go-to")][contains(@ng-reflect-message, {{0}})]' --- not in use
    requiredIcon = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@class, "required-icon")][contains(@class, "empty-required-field")]'
    notEmptyRequiredIcon = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@class, "required-not-empty-field")]'
    inactiveIcon = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@class, "icon-hide-legacy")]'
    deleteIcon = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@class, "icon-clear-medium")]'
    deleteIcon2 = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@class, "reset-container")]'
    deleteIconNumValue = '//*[contains(@ng-reflect-value, {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@class, "icon-clear-medium")]'

    //drop down arrow and values
    emptyDropdown = '//*[contains(@class, "text-explanation-for-empty-dropdown")]'
    optionsTextContainer = '//*[@data-automation-web="lv-select-option-text"]'
    genericDropDownArrow = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//div[contains(@class,"icon-dropdown")]'
    genericDropDownArrow1 = '//*[contains(@class, "lv-label-text")][contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//div[contains(@class,"icon-dropdown")]'
    dropdownArrow = "//*[@class= 'icon-dropdown']"
    specificDropDownArrow = '//*[contains(@class, "lv-label-text")][contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//div[contains(@class,"icon-dropdown")]'
    valueFromDropDown = '//*[contains(@class, "option-title")][contains(text(), {{0}})]'
    clearDropDownSelection = '//*[@data-automation-web="option-title"][contains(text(), "Clear")]//ancestor::*[@data-automation-web="lv-select-option-container"]'
    selectAllDropDownValues = '//*[@data-automation-web="option-title"][contains(text(), "Select All")]//ancestor::*[@data-automation-web="lv-select-option-container"]'
    valueOfFieldWithDropDown = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[@data-automation-web="lv-select-option-value"]'
    specificValueOfFieldWithDropDown = '//*[contains(@class, "lv-label-text")][contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[@data-automation-web="lv-select-option-value"]'

    //this method selects value from any INFRA dropdown
    async selectValueFromDD(DropDownFieldName, DropDownValue) {
        await this.page.waitForXPath(this.genericDropDownArrow.replace("{{0}}", DropDownFieldName))
        await getXPathAndClick(this.page, this.genericDropDownArrow.replace("{{0}}", DropDownFieldName))
        await this.page.waitForTimeout(1000)
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", DropDownValue))
    }

    collapseSectionIcon = '//*[contains(text(), {{0}})]//ancestor::mat-expansion-panel-header//*[contains(@class, "icon-collapse")]'
    expandSectionIcon = '//*[contains(text(), {{0}})]//ancestor::mat-expansion-panel-header//*[contains(@class, "icon-expand")]'

    //checkbox related selectors
    checkBoxSelected2 = '//*[contains(@class, "option-title")][contains(text(), {{0}})]//ancestor::*[@data-automation-web="lv-select-option-container"]//*[contains(@class, "checkbox-container-checked")]'
    checkBoxSelected1 = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[@data-automation-web="lv-checkbox-container"][contains(@class, "checkbox-container-checked")]'
    checkBoxSelected = '//*[@data-automation-web="option-title"][contains(text(), {{0}})]//ancestor::*[@data-automation-web="lv-select-option-container"]//*[contains(@class, "checkbox-container-checked")]'
    checkBoxSelectAllChecked = '//*[contains(text(), "Select All")]//ancestor::*[@data-automation-web="mat-checkbox"][contains(@class, "mat-checkbox-checked")]//input'

    checkBox = '//mat-checkbox//input'
    checkBoxAttachment = '//*[contains(text(), {{0}})]//ancestor::*[contains(@data-automation-web,"entity-container")]//input'
    checkBoxByText = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="lv-select-option-container"]//*[@data-automation-web="lv-checkbox-container"]'
    checkBoxByTextDynamicField = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[@data-automation-web="lv-checkbox-container"]'
    checkBoxSelectAll = '//*[contains(text(), "Select All")]//ancestor::*[@data-automation-web="mat-checkbox"]//input'
    checkBoxByText2 = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="checkbox-item-wrapper"]//input'
    checkBoxOld = '//*[contains(text(), {{0}})]//ancestor::mat-option/mat-pseudo-checkbox'

    //entities, titles and subtitles
    cardTitle = '//lv-card-header//*[contains(@class, "title")][not(contains(@class, "container"))]' //used mainly for getInnerText method
    cardName = '//*[@data-automation-web="lv-editor-card-header"]//*[contains(@class, "name ")]//*[contains(text(), {{0}})]'
    pageTitle = '//*[@data-automation-web="lv-actions-bar-title"][contains(text(), {{0}})]'
    entityContainer = '//*[@data-automation-web="entity-container"]'
    entityContainerByName = '//label[contains(text(), {{0}})]//ancestor::*[@data-automation-web="entity-container"]'
    itemFromVirtualScroll = '//cdk-virtual-scroll-viewport//*[contains(@class, "view-list-item")]'
    entityLayoutDetails = '//*[@data-automation-web="label-value"]'
    entityTitle = '//label[@data-automation-web="label-value"][contains(text(), {{0}})]'
    subtitleKey = '//label[contains(text(), {{0}})]//ancestor::*[@data-automation-web="entity-container"]//*[contains(@class, "text key")]'
    subtitleValue = '//label[contains(text(), {{0}})]//ancestor::*[@data-automation-web="entity-container"]//*[contains(@class, "text value")]'
    secondCardEntityContainers = '//div[contains(@class, "has-tabs")]//*[@data-automation-web="entity-container"]'
    scrollContainer = '[data-automation-web="lv-scroll-item-container"]'
    scrollContainerXpath = '//*[@data-automation-web="lv-scroll-item-container"]'
    cdkVirtualScrollViewport = 'cdk-virtual-scroll-viewport'
    cdkVirtualScrollContentWrapper = '//*[contains(@class, "cdk-virtual-scroll-content-wrapper")]'


    //warnings by colors for R&A
    yellowWarningIconLM = '.icon-alert-low'
    redViolationIconLM = '.icon-alert-high'
    redViolationIconLMXPath = '//*[contains(@class, "icon-alert-high")]'
    yellowWarningIconOnCards = '[data-automation-web="entity-container"] .icon-alert-low'
    redViolationIconOnCards = '[data-automation-web="entity-container"] .icon-alert-high'
    redViolationIconOnCardsXPath = '//*[contains(@class, "card-summary-container")]//*[contains(@class, "icon-alert-high")]'
    //warnings by name for R&A
    yellowWarningByName = '//label[contains(text(), {{0}})]//ancestor::*[@data-automation-web="entity-container"]//*[contains(@class, "icon-alert-low")]'

    //datepicker
    datePicker = ".icon-calendar"
    datePickerXPath = '//*[contains(@class, "icon-calendar")]'
    datePickerByName = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@class,"icon-calendar")]'
    dateValue = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[@data-automation-web="date-value"]'
    dateWithTimeValue = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[@data-automation-web="date-value-with-time"]'

    //for Configuration, Groups, Policies
    threeDotsByName = '//*[contains(text(), {{0}})]//ancestor::lv-grid-list-item//div[contains(@class, "icon-more")]'
    editByName = '//*[contains(text(), {{0}})]//ancestor::lv-grid-list-item//div[contains(@class, "icon-edit")]'
    deleteByName = '//*[contains(text(), {{0}})]//ancestor::lv-grid-list-item//div[contains(@class, "icon-delete")]'
    duplicateIcon = '//*[contains(@class, "icon-duplicate")]'
    //duplicateByName = '//*[contains(text(), {{0}})]//ancestor::lv-grid-list-item//div[contains(@class, "icon-duplicate")]'
    duplicateByName = '//*[contains(text(), {{0}})]//ancestor::*[contains(@class, "ag-row-position-absolute")]//div[contains(@class, "icon-duplicate")]'

    cancelByName = '//*[contains(text(), {{0}})]//ancestor::lv-grid-list-item//div[contains(@class, "icon-close")]'
    entityTypeTitle = '//*[@class="grid-item-title"][contains(text(), {{0}})]'
    configurationEditorTitle = '//*[@data-automation-web="lv-actions-bar-title"][contains(text(), {{0}})]'
    checklistButton = '//*[@data-automation-web="lv-steps-action-button-checklist"]'


    //tab titles and counter
    ///!!!!! SWITCH TO ATTRIBUTES
    tabTitleCommon = '//*[contains(@class, "mat-tab-label-content")][contains(., {{0}})]'
    tabOnFilters = '//*[@data-automation-web="mat-tab-label-content"][contains(text(), {{0}})]'
    tabTitle = '//*[contains(@class, "tabs-title")][contains(text(), {{0}})]'

    groupsTab = '//*[contains(@class, "mat-tab-label-content")][contains(text(), "Contained")]'
    assetPropertiesTab = '//*[contains(@class, "mat-tab-label-content")][contains(text(), "Properties")]'
    //assetContentTab = '//*[@data-automation-web="mat-tab-label-content"][contains(text(), "Content")]'
    assetContentTab = `//*[contains(@class, "mat-tab-label-content")][contains(text(),"${Trans.keys.FORMS.EDITOR_FORM_FIELDS.CONTENT}")]`//"Content"
    checkListTab = '//*[contains(@class, "mat-tab-label-content")][contains(text(), "Checklist Form")]'
    matTabLink = '//*[contains(@class, "mat-tab-link")][contains(text(), {{0}})]'
    ///!!!!! SWITCH TO ATTRIBUTES

    //CU tab
    cuIcon = '//*[contains(@class, "icon-design")]'
    noCuIcon = '.icon-no-cu'
    allCUsAggregation = '//*[@col-id="title"]'
    cuAggregationByName = '//*[@col-id="title"][contains(text(), {{0}})]'

    tabCounter = '//*[@data-automation-web="tabs-counter"]'
    tabCounterByTabName = '//*[contains(text(), {{0}})]//following-sibling::div[@data-automation-web="tabs-counter"]'
    tabCounterByTabName1 = '//*[contains(text(), {{0}})]//*[contains(@class,"counter")]'//UM Goups and Policies card
    


    //used in Filters, v3ProjectManagement
    filterIcon = '//*[@class="mat-button-wrapper"]'
    filterCounter = '//*[@data-automation-web="tabs-counter"]'
    rejectButtonAtSearchField = '.grid-action-buttons-reject'
    viewModeToast = '//*[contains(@class, "lv-read-only-title")][contains(text(), "View Mode")]'
    change = '//button[@data-automation-web="change"]'
    clearAll = '//button[@data-automation-web="clear-all"]'
    clearAllFromModal = '//button[contains(@data-automation-web,"header-action-clear-all")]'


    //info icon for popups
    infoIcon = '//*[contains(@class, "icon-info")]'
    infoIconForPopup = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="lv-dynamic-input"]//*[contains(@class, "icon-info")]'
    infoIconForPopupOnUsersTab = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="lv-scroll-list-item"]//*[contains(@class, "icon-info")]'
    popupTemplate = '//div[contains(@class, "popup-field-header")]'
    popupTemplate1 = '//*[@data-automation-web="lv-review-card-popup-container"]'
    popupTemplate2 = '[data-automation-web="lv-review-card-popup-container"]'
    infoPopupXIcon = '//*[contains(@class, "icon-close")]'
    serchPpupCloseRnA = '.header-action-close.mat-icon'
    popupFieldValue = '//*[contains(@class,"popup-field-value")][contains(text(), {{0}})]'
    infraPopup = '//infra-validation-multiple-dialog'
    helperIconByName = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@class,"icon-helper")]'
    errorToolTip = '//*[contains(@id, "cdk-describedby-message")][contains(text(), {{0}})]'
    toolTipCSS = '[class*=cdk-describedby-message]'

    //left menu components
    //remove this selector after Automation weekly!!!
    spanLeftMenu = '//span[contains(text(), {{0}})]'
    //div is used to click Project name
    divLeftMenu = '//*[contains(@class, "recent-list-item-header")][contains(text(), {{0}})]'
    infraLeftMenu = '//*[@data-automation-web="mat-tree-node"][contains(., {{0}})]'
    statusText = '.button-steps'

    //select from a Table by Array index
    ascendingIcon = '//*[contains(@class, "ag-sort-ascending-icon")]' // should be displayed only one at a time!
    bannerContent = '//*[contains(@class, "banner-content-message")]'
    bannerByText = '//*[contains(@class, "banner-body")]//*[contains(text(), {{0}})]'
    bannerClose = '//*[contains(@class, "banner-close-button")]'
    toggleByText = '//*[@data-automation-web="lv-toggle-button-option-text"][contains(text(), {{0}})]'
    highlitedToggle = '//*[contains(@class, "lv-toggle-button-option")][contains(@class, "selected")]//*[@data-automation-web="lv-toggle-button-option-text"][contains(text(), {{0}})]'

    upperTabByName = '//*[@data-automation-web="test-editor-tab-title"][contains(text(), {{0}})]'

    //table infra components
    areaToScrollTableInfra = '.ag-body-viewport'
    tableTitle = '//*[contains(@class, "table-title")]/*[contains(text(), {{0}})]'
    tableSubTitle = '//*[contains(@class, "sub-title")][contains(text(), {{0}})]'
    tableArraySelectorInfra = '.ag-center-cols-container .ag-row'
    tableArrayXPathInfra = '//*[contains(@class, "ag-center-cols-container")]//*[contains(@class, "ag-row")]'
    tableArraySelectorCell = '.ag-center-cols-container .ag-row .ag-cell'
    selectFromTable = '//*[contains(@class, "ag-cell")][contains(text(), {{0}})]'//does not work on PM!!!
    columnName = '//*[contains(@class, "customHeaderLabel")][contains(text(), {{0}})]'
    columnName2 = '//*[contains(@class, "ag-header-cell-text")][contains(text(), {{0}})]'
    columnName3 = '//*[contains(@class, "ag-header-cell-sortable")]//*[contains(@class, "ag-header-cell-text")][contains(text(), {{0}})]'
    starSettings = '//ag-grid-angular//a[contains(@class, "icon-settings")]'
    cellData = '//*[contains(@class, "ag-cell")]'
    makeCellWider = '//*[contains(@class,"ag-header")]//*[contains(@class, "ag-header-cell-resize")]'
    tableRowName = '//*[contains(text(), {{0}})]//ancestor::*[contains(@class, "ag-row")][not(contains(@class, "viewport"))]'
    inactiveTableRowName = '//*[contains(text(), {{0}})]//ancestor::*[contains(@class, "ag-row")][not(contains(@class, "ag-body"))]//*[contains(@class, "icon-inactive")]'
    lockedTableRowName = '//*[contains(text(), {{0}})]//ancestor::*[contains(@class, "ag-row")][not(contains(@class, "ag-body"))]//*[contains(@class, "icon-lock")]'
    expandedTableRowName = '//*[contains(text(), {{0}})]//ancestor::*[contains(@class, "ag-row-group-expanded")][not(contains(@class, "viewport"))]'
    reducedTableRowName = '//*[contains(text(), {{0}})]//ancestor::*[contains(@class, "ag-row-group-contracted")][not(contains(@class, "viewport"))]'

    // config list items grid
    formItemFormListGrid = '//*[contains(@ng-reflect-max-length-current-value, {{0}})]//ancestor::*[@role="row"]'
    inactiveButtonForItemFromList = '//*[contains(@ng-reflect-max-length-current-value, {{0}})]//ancestor::*[@role="row"]//*[contains(@class, "active") and contains(@class, "icon")]'// don't remove
    starButtonForItemFromList = '//*[contains(@ng-reflect-max-length-current-value, {{0}})]//ancestor::*[@role="row"]//*[contains(@class, "star") and contains(@class, "icon")]'// don't remove
    deleteButtonForItemFromList = '//*[contains(@ng-reflect-max-length-current-value, {{0}})]//ancestor::*[@role="row"]//*[contains(@class, "delete") and contains(@class, "icon")]'// don't remove
    duplicateButtonForItemFromList = '//*[contains(text(), {{0}})]//ancestor::*[@role="row"]//*[contains(@class, "duplicate") and contains(@class, "icon")]'
    restoreButtonForItemFromList = '//*[contains(@ng-reflect-max-length-current-value, {{0}})]//ancestor::*[@role="row"]//*[contains(@class, "restore") and contains(@class, "icon")]'

    //empty states
    emptyStateOnTables = '//*[contains(@class,"empty-state-title")]'
    emptyStateTitleOnCards = '//*[contains(@class,"empty-tab-title")]'
    emptyStateOnTablesSubTitile = '//*[contains(@class,"empty-state-subtitle")]'
    emptyStateIcon = '//*[contains(@class,"empty-state-icon")]'
    emptyTagIcon = '//*[contains(@class,"icon-new-tag-field")]'

    checkBoxByNameTableInfra = '//*[contains(text(), {{0}})]//ancestor::*[contains(@class, "ag-row")][not(contains(@class, "ag-body-viewport"))]//*[contains(@class, "grid-header-un-selected")]'
    checkedBoxByProjectInfra = '//*[contains(text(), {{0}})]//ancestor::*[contains(@class, "ag-row")][not(contains(@class, "ag-body-viewport"))]//*[contains(@class, "grid-header-selected")]'
    checkBoxSelectAllHeader = '//*[contains(@class, "ag-header-row")]//*[contains(@class, "grid-header-selection")]'
    checkedBoxSelectAllHeader = '//*[contains(@class, "ag-header-row")]//*[contains(@class, "grid-header-selected")]'

    counterSelectedProjectsInfra = '//*[contains(@class, "project-parameters-selected-rows")]'
    dialogTitle = '//*[contains(@class, "dialog-header")]'
    dialogSubTitle = '//*[contains(@class, "dialog-subtitle")]'

    //top user menu
    topIconUser = 'lv-user-menu .icon-user'
    signOutBtn = `//*[contains(@class,"mat-menu-item") and contains(text(),"${Trans.keys.ACTION.SIGN_OUT}")]`
    generalPreferencesBtn = `//*[contains(@class,"mat-menu-item") and contains(text(),"${Trans.keys.ACTION.GENERAL_PREFERENCES}")]`


    // review and Approve properties list
    propertiesList = '//lv-properties-list[contains(., {{0}})]'

    // Table setting icon
    starIcon = '.icon-star'
    tableSettingIcon = '//*[contains(@class, "icon-settings show-icon-all-the-time")]'
    arrowBtn = '//*[contains(@class, "mat-tab-header-pagination-chevron")]'
    projectForFilter = '//*[@class="mat-tab-label-content"]//*[contains(text(), "{{0}}")]'
    filterNameInput = '//*[contains(@class,"lv-text-container")]'
    filterNameSelection = '//*[contains(@class, "lv-item-with-actions-value text-ellipsis")]'



    async logout() {
        await waitAndClick(this.page, this.topIconUser)
        await isElementExistsbyXPath(this.page, this.signOutBtn)
        await getXPathAndClick(this.page, this.signOutBtn) //'.mat-menu-item'
        await waitXpathNotExist(this.page, this.topIconUser)
        //await this.page.goto(`${baseURL}/app/login#`)    
        let isUsername = await isElementExists(this.page, this.usernameField)
        for (let index = 0; index < 6; index++) {// wait for username field - 30 sec                        
            isUsername = await isElementExists(this.page, this.usernameField)
            if (isUsername == true) {
                break
            }
            console.log("username field found:" + isUsername + " after:" + (index * 5).toString() + " sec")
        }

        //await this.page.waitForNavigation(this.page.url( `${baseURL}/app/login`))
    }

    async createPath(xpath, params = []) {
        let handledPath = xpath
        params.forEach((text, index) => {
            handledPath = handledPath.replace(`{{${index}}}`, `"${text}"`)
        })
        return handledPath
    }

    async clickLeftLinkInfra(linkNameLM) {
        const path = await this.createPath(this.infraLeftMenu, [linkNameLM])
        await this.page.waitForXPath(path)
        const title = await this.page.$x(path)
        await title[0].click()
        await this.page.waitForTimeout(500)
    }

    async clickLeftLinkDiv(linkNameLM) {
        const path = await this.createPath(this.divLeftMenu, [linkNameLM])
        await this.page.waitForXPath(path)
        const title = await this.page.$x(path)
        await title[0].click()
        await this.page.waitForTimeout(500)
    }

    async search(searchExample) {
        let searchClosed = '//*[@data-automation-web="lv-data-grid-search-input-close"]'
        const fieldClosed = await isElementExistsbyXPath(this.page, searchClosed)
        if (fieldClosed) {
            await waitAndClick(this.page, this.searchButton)
            await getXPathAndClick(this.page, this.searchField)
            await getXPathAndType(this.page, this.searchField, searchExample)
        }
        else {
            try {
                await waitAndClick(this.page, this.clearSearch)
            } catch (error) {
                console.error("search field is empty not closed")
            }
            await getXPathAndClick(this.page, this.searchField)
            await getXPathAndType(this.page, this.searchField, searchExample)
        }
        //await this.page.keyboard.press('Enter') 
    }

    async clickRowInTable(entityName) {
        const projectRow = this.tableRowName.replace("{{0}}", `"${entityName}"`)
        //console.log("prjectRow for debug" + projectRow)
        await this.page.waitForTimeout(500)
        await this.clickOrScroll(projectRow, 5);
    }

    async clickOrScroll(projectRow, counter) {

        try {
            const rowElement = await this.page.waitForXPath(projectRow, { timeout: 10000 });
            await rowElement.click();
            await rowElement.click({ clickCount: 2 });
        }
        catch (error) {
            await this.page.waitForSelector(this.areaToScrollTableInfra);
            await scrollTop(this.page, this.areaToScrollTableInfra, 300);// scroll down
            if (counter > 0) {
                await this.clickOrScroll(projectRow, counter - 1);
            }
            else {
                console.error(`Project row wasn't found:${projectRow}`)
            }
        }
    }

    async checkByIndex(index) {
        await this.page.waitForXPath(this.checkBox)
        const checkBox = await this.page.$x(this.checkBox)
        checkBox[index].click()
    }

    async checkByName(fieldName) {
        let handledPath = this.checkBoxByText
        handledPath = await handledPath.replace('{{0}}', `"${fieldName}"`)
        const el = await this.page.waitForXPath(handledPath)
        await el.click()
    }

    async checkBoxAttachments(attach) {
        await this.page.waitForXPath(this.checkBox)
        const checkbox = await this.page.$x(this.checkBox)
        let x
        for (x = 0; x < attach; x++) {
            await checkbox[x].click()
        }
    }

    async clickEdit(name) {
        const extraselector = '//*[contains(text(), {{0}})]//parent::*[contains(@class, "ag-cell")]'
        const found = await this.page.$x(this.selectFromTable.replace("{{0}}", `"${name}"`))
        if (found != false) {
            await getXPathAndDoubleClick(this.page, this.selectFromTable.replace("{{0}}", `"${name}"`))
        }
        else {
            await getXPathAndDoubleClick(this.page, extraselector.replace("{{0}}", `"${name}"`))
        }
    }

    async getAttributeValue(elemnt, attribute) {                            //current in use to get row index in Infra table

        let attributeValue = elemnt
        let startPossition = attributeValue.search(attribute)
        attributeValue = attributeValue.substring(startPossition)
        let endPossition = attributeValue.search(" ")
        attributeValue = attributeValue.substring(0, endPossition)
        startPossition = attributeValue.search('"')
        attributeValue = attributeValue.substring(startPossition + 1)
        endPossition = attributeValue.search('"')
        attributeValue = attributeValue.substring(0, endPossition)

        return attributeValue

    }

    async changeLang(toLangStr = "Ελληνικά (Greek)") {
        // click on user menu
        await waitAndClick(this.page, this.topIconUser)
        // click on settings
        await getXPathAndClick(this.page, this.generalPreferencesBtn)
        await this.page.waitForTimeout(1000)

        // General Preferences Popup
        await this.selectValueFromDD(`"${Trans.keys.GENERAL_PREFERENCES.INTERFACE_LANGUAGE}"`, `"${toLangStr}"`)

        // verify greek selected
        let selectedLang = await getText(this.page, this.valueOfFieldWithDropDown.replace("{{0}}", `"${Trans.keys.GENERAL_PREFERENCES.INTERFACE_LANGUAGE}"`))//"Language Ελληνικά (Greek)"
        selectedLang = await selectedLang.replace(/\s+/g, ' ').trim()//Remove Extra Spaces From a String

        //save
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.ACTION.SAVE}"`))
        await this.page.waitForTimeout(2000)
        switch (toLangStr) {
            case "Ελληνικά (Greek)":
                Trans.keys = TransEL.keys
                break;
            case "English":
                Trans.keys = TransEN.keys
                break;
            default:
                Trans.keys = TransEN.keys
                break;
        }
        return selectedLang
    }

    
    async hoverXpathToCheckTooltipTextAndColor(page, xpathToHover, index) {
        await mouseHoverXpath(page, xpathToHover, index)
        let tooltipXP = this.tooltipMessage.replace("{{0}}", `""`)
        let tooltipText = await getText(page, tooltipXP)
        let tooltipColor = await getAllAttributesXpath(page, tooltipXP, 'backgroundColor')
        return { tooltipText: tooltipText, tooltipColor: tooltipColor }
    }

    async hoverSelectorToCheckTooltipTextAndColor(page, selectorToHover) {
        await mouseHoverSelector(page, selectorToHover)
        let tooltipXP = this.tooltipMessage.replace("{{0}}", `""`)
        let tooltipText = await getText(page, tooltipXP)
        let tooltipColor = await getAllAttributesXpath(page, tooltipXP, 'backgroundColor')
        return { tooltipText: tooltipText, tooltipColor: tooltipColor }
    }

    async deleteInputText(page, fieldName) {
        await getXPathAndDoubleClick(page, this.inputByFieldName.replace("{{0}}", fieldName), 3)
        await page.keyboard.press('Backspace');
    }

    async deleteTextareaText(page, fieldName) {
        await getXPathAndClick(page, this.textareaByFieldName.replace("{{0}}", fieldName))
        await page.evaluate(() => document.querySelector("textarea.cdk-textarea-autosize").value = " ")
        await page.keyboard.press('Backspace');
    }

}