const GroupManPage = require('./groupManPage')
const { waitAndClick, getXPathAndClick, getXPathAndType, getElementFromArrayByIndex, getXPathAndDoubleClick, getText,waitXpathNotExist } = require('../common/locateHelpers')
const { isElementExistsbyXPath, isElementExists } = require('../common/assertHelpers')
const chai = require('chai')
const assert = chai.assert
import Trans from '../translation/language'

module.exports = class ConfigurationGeneral extends GroupManPage {

    constructor(page) {
        super(page)
    }
    //naming of entities
    assetNameRegular = "Asset_Test"
    assetNameDuplication = "1_Asset_Test"
    assetNameForPropertiesTest = "AssetProperties"
    assetNameForContentTest = "AssetContent"
    assetNameForContentTest2 = "GeneralTabTest"
    assetNameForUnique = "Asset_Unique"
    assetNameForContentTestValue = "AValueTabTest"
    assetNameFieldOptions = "AFieldOptions1"
    assetNameFieldOptPartCatalog = "AFieldOptionsPartCatalog"
    assetNameFieldOptionsForAlerts = "AFieldOptionsForAlerts"
    assetNameForContentTestNumber = "NumberValueTabTest"
    assetNameForSpecificStringProperties = "A_SpecificStringProperties"
    assetNameBarcodeSupport = "BarcodeSupport"
    formsNameRegularName = "FormsTest"
    formsNamePressure = "Pressure Test"
    projectName = "New_Project"
    projectNameMore = "New_Project1"
    projectNameMore2 = "New_Project2"
    projectNameForAlerts = "AProjectForAlerts"
    projectCheckList = "CheckList_Project"
    assetCalculation = "AssetCalculation"
    assetRecon = "assetRecon"
    assetNewRecon = "assetNewRecon"
    wuMappableRegular = "wuMappableRegular"
    astmPipe = "ASTM_Pipe"
    assetNameForContentTestVisibleWhen = "AVisibleWhenTabTest"
    extraTestAsset = "ExtraTestAsset"
    assetNameLockIcon = "Asset_LockIcon"
    // assetNameDuplication= "Asset_Test_duplication"
    assetNameJustCheck = "Test1"
    assetNameLine = "Asset_Line"
    assetNameLineReference = "Asset_LineReference"
    helperTitleName = "Helper Title"
    helperTextName = "Helper Text"
    fieldAliasInputText = "Free Text"
    entityTypeText = "Entity Type"
    inactivateText = "Inactivate"
    activateText = "Activate"
    multLineText = "MultiLineTextfield"
    longNameFieldAliasText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32"
    longNameFieldAlias = ["Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32"]

    // selectors
    fieldNameOfContent = '//lv-form-bank-field//*[contains(text(), {{0}})]' // don't remove
    specificFieldNaming = '//*[contains(@ng-reflect-max-length-current-value, {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]' // don't remove
    moreButtonForItemFromList = '//*[contains(text(), {{0}})]//ancestor::lv-item-with-actions//div[contains(@class, "icon-more")]' // don't remove
    editButtonForItemFromList = '//*[contains(text(), {{0}})]//ancestor::lv-item-with-actions//div[contains(@class, "icon-edit")]'// don't remove
    // starButtonForItemFromList='//*[contains(text(), {{0}})]//ancestor::lv-item-with-actions//div[contains(@class, "icon-star")]'// don't remove // changed
    errorIconByNameHeader1 = '//*[@data-automation-web = "test-editor-tab-title"][contains(text(), {{0}})]//parent::*[contains(@class, "mat-tab-label")]//*[contains(@class, "icon-alert")]'// don't remove
    errorIconByNameHeader = '//*[contains(@class, "mat-tab-label-content")][contains(text(), {{0}})]//parent::*[contains(@class, "mat-tab-label")]//*[contains(@class, "icon-alert")]'// don't remove

    inactiveIconByName = '//div[contains(text(), {{0}})]//ancestor::lv-grid-list-item//div[contains(@class, "icon-inactive")]'
    iconInactiveClarification = '[contains(@class, "icon-inactive")]'
    iconActiveClarification = '[contains(@class, "icon-active")]'
    iconDuplicateClarification = '[contains(@class, "icon-duplicate")]'
    textClarification = '[contains(text(), {{0}})]'
    reconciliationIconTop = '//*[contains(@class, "icon-delta top-icon")]'
    reconActionNameTypeField = '//*[contains(text(), "Action Name")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"][contains(@class, "underline-in-focus")]//input'
    reconActionNameDeleteIcon = '//*[contains(@ng-reflect-value, {{0}})]//ancestor::*[contains(@class,"flex-base-center")]//*[contains(@class,"icon-delete")]'
    assetRowByAssetName = '//lv-grid-list-item[contains(.,"")]'
    lockIconByName = '//div[contains(text(), {{0}})]//ancestor::lv-grid-list-item//div[contains(@class, "icon-lock")]'
    lockIconFieldListbyName = '//div[@class="text padding"][contains(text(), {{0}})]//ancestor::lv-form-bank-field//*[contains(@class,"icon-lock")]'
    lockIconFieldSelection = '//div[@class="text options-text padding"][contains(text(), {{0}})]//ancestor::lv-form-bank-field//*[contains(@class,"icon-lock")]'
    requiredIconAtField = '//div[@class="text padding"][contains(text(), {{0}})]//ancestor::lv-form-bank-field//*[contains(@class,"bank-field-always-required")]'
    requiredIconAtFieldSelection = '//div[@class="text options-text padding"][contains(text(), {{0}})]//ancestor::lv-form-bank-field//*[contains(@class,"bank-field-always-required")]'
    requiredInConfigCard = '//*[contains(@class,"lv-label-text")][contains(text(), {{0}})]//*[contains(@class, "icon-mandatory")]'
    addButtonDisabled = '//*[contains(@class, "icon-plus")][(contains(@class, "disabled"))]'

    //Card Layout
    editCardLayout = '//*[contains(@class, "card-layout-button-title")]'
    actionsBarTitle = '//*[contains(@class, "lv-actions-bar-titles")]'
    addFieldButton = '//*[contains(text(), {{0}})]//ancestor::lv-chips-editor//*[contains(@class,"mat-menu-trigger")]'
    addFieldButtonTitle = '//*[contains(@class, "layout-title-container")]//*[contains(@class,"mat-menu-trigger")]'
    addFieldButtonSubTitle = '//*[contains(@class, "layout-sub-title-container")]//*[contains(@class,"mat-menu-trigger")]'
    valueFromDropDownCardLayout = '//*[contains(@class, "action-menu-item")][contains(text(), {{0}})]'
    doneDisabled = '//button[@disabled][contains(text(), "Done")]'
    subtitleLabelValue = '//*[contains(@class, "sub-title")]//*[contains(@class, "label-value")]'
    clearButtonCardLayoutTitle = '//*[contains(@class, "layout-title-container")]//*[contains(@class, "chip-item-text")]//*[contains(text(),  {{0}})]//following-sibling::*[contains(@class, "icon-clear-medium")]'
    clearButtonCardLayoutSubTitle = '//*[contains(@class, "layout-sub-title-container")]//*[contains(@class, "chip-item-text")]//*[contains(text(),  {{0}})]//following-sibling::*[contains(@class, "icon-clear-medium")]'
    selectedItemCardLayoutTitle = '//*[contains(@class, "layout-title-container")]//*[contains(@class, "chip-item-text")]//*[contains(@class, "text-ellipsis")][contains(text(),  {{0}})]'
    selectedItemCardLayoutSubTitle = '//*[contains(@class, "layout-sub-title-container")]//*[contains(@class, "chip-item-text")]//*[contains(@class, "text-ellipsis")][contains(text(),  {{0}})]'
    selectedItemCardLayoutAdditionalInfo = '//*[contains(@class, "layout-additional-info-container")]//*[contains(@class, "chip-item-text")]//*[contains(@class, "text-ellipsis")][contains(text(),  {{0}})]'



    //infraLeftMenuActive='//*[contains(@class, "active-step")]//*[@data-automation-web="mat-tree-node"][contains(text(), {{0}})]'
    //infraLeftMenuActive = '//*[contains(@class, "item-title-selected")][contains(@class, "step-name")][contains(text(), {{0}})]'
    infraLeftMenuActive = '//*[contains(@class, "item-title-selected")][contains(@class, "step-name")][contains(., {{0}})]'
    //Drop form content here
    fieldAdded = '//*[contains(@class, "sections-drop-area")]//*[contains(text(), {{0}})]'

    //caculation
    calcIconDropedElem = '//div[@class="text padding"][contains(text(), {{0}})]//ancestor::*[contains(@class,"lv-form-bank-item-content-container")]//*[contains(@class,"icon-calc")]'
    calcAddedField = '//*[contains(@class,"formula-item")]'
    //calcDropDownMenuItemsAddField ='//*[contains(@class, "add-field-menu-item")][contains(text(), {{0}})]'
    calcAddedFieldSelected = '//*[contains(@class, "formula-item")][not(contains(@class, "icon-clear-medium"))]//*[contains(text(), {{0}})]'
    calcAddedFieldSelectedForInner = '//*[contains(@class, "formula-item")][not(contains(@class, "icon-clear-medium"))][contains(text(), {{0}})]'
    calcClearButton = '//div[contains(@class, "text-ellipsis")][contains(text(), {{0}})]//ancestor::div[contains(@class, "formula-item")]//div[contains(@class, "icon-clear-medium")]'
    calcEditButton = '//*[contains(text(), {{0}})]//ancestor::*[contains(@class, "formula-item")]//*[contains(@class, "icon-edit")]'
    calcDropDownMenuItemsAddAction = '//*[@data-automation-web="option-title"][contains(text(), {{0}})]'
    addConstantValue = '//input[@placeholder = "Type Constant Value"]'
    calcDropDownElements = '[data-automation-web="lv-select-option-container"]'
    constantValueContainer = '//*[contains(@class, "input-popup-container")]'
    addCase = '//*[contains(text(), "Add Case")]'

    errorIconOnPopUpFlexible = '//*[contains(@class, "lv-base-message-icon")]'
    errorPopUpContainer = '//*[contains(@class, "lv-base-message-content")]'
    dialogContainer = '//*[contains(@class,"dialog-container")]'
    errorList = '//*[contains(@class, "errors-list")]/li'
    listOfDependencies = '//*[contains(@class, "ng-star-inserted")]'
    tablePopUpContainer = '//*[contains(@class, "table-container")]'
    emptyTaggedFieldsText = '//*[contains(@class, "empty-dialog-text")]'
    dialogTitlePopUp = '//*[contains(@class, "mat-dialog-title")]'
    deleteIconForPopUp = '//*[contains(@class, "icon-deleting")]'
    alertIconForPopUp = '[contains(@class, "icon-alert")]'
    subTitleCardListItem = '//*[contains(@class, "list-item-view-state")][contains(text(), {{0}})]'
    arrowActionTypeReconAction = '//*[contains(@class, "dynamic-field-content empty-and-blur")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//div[contains(@class,"icon-dropdown")]'
    freeTextAreaActionNameReconAction = '//*[contains(@class, "dynamic-field-content empty-and-blur")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//input'

    activeTabHighlited = '//*[contains(text(), {{0}})]//ancestor::mat-tab-header//div[contains(@class,"mat-tab-label-active")]'
    activeTabFieldPropHighlited = '//*[contains(text(), {{0}})]//ancestor::div[contains(@class,"lv-prop-tab-selected")]'
    //!!!!!!!! itemsFromLocalListType='//div[@class="lv-item-with-actions-value text-ellipsis"][contains(text(), {{0}})]'//divLeftMenu
    pasteListText = '//*[contains(@class, "lv-paste-list-place-holder-text")]'
    optionValueSelectionSelectedBeDefault = '//lv-selection-buttons//*[contains(@class, "lv-selection-buttons-option")][contains(@class, "selected")]//*[contains(text(), {{0}})]'
    generalLinkForChildElement = '//*[contains(@class, "lv-label-text")][contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]'
    checkedItemsList = '//*[@data-automation-web="option-title"][contains(text(), {{0}})]//ancestor::*[@data-automation-web="lv-select-option-container"]//*[contains(@class, "selected")]'

    //Tags
    fieldTagsListTagElement = '//*[contains(text(), {{0}})]//ancestor::mat-row//*[contains(@class, "cdk-column-title")]'
    fieldTagsListFieldCategoryElement = '//*[contains(@class, "cell-data")]//ancestor::*[contains(@class, "cdk-column-category")][contains(text(), {{0}})]'
    fieldTagsListOfElements = '//*[contains(@class, "cell-data")]//ancestor::*[contains(@class, "cdk-column-id")][contains(text(), {{0}})]'
    listOfTaggedFields = '//*[contains(text(), {{0}})]//ancestor::*[contains(@class, "ag-row")][not(contains(@class, "viewport"))]//*[contains(@class, "icon-tagged-fields")]'
    selectCellFromRow='//*[contains(@class, "ag-cell-value")]//*[contains(text(), {{0}})]'

    //Project
    optionalDropDownSelector = '//*[contains(text(), {{0}})]//ancestor::*[contains(@class,"groups-splitter")]//*[contains(@class,"mat-select-arrow-wrapper")]'
    optionalRequiredDropDownArrow = '//*[@data-automation-web="checkbox-item-text"][contains(text(), {{0}})]//ancestor::*[contains(@class,"groups-splitter")]//*[contains(@class,"mat-select-arrow-wrapper")]'
    elementsFromComponentList = '//*[@data-automation-web="checkbox-item-text"]//*[contains(text(), {{0}})]'
    itemList = '//*[@data-automation-web="checkbox-item-text"]//*[contains(@class, "text-ellipsis")][contains(text(), {{0}})]'
    valueFromDropDownAtComponentsCard = '//*[@class="mat-option-text"]//*[contains(text(), {{0}})]'
    optionalLockIconAtComponentsCard = '//*[@data-automation-web="checkbox-item-text"][contains(text(), {{0}})]//ancestor::*[contains(@class,"groups-splitter")]//lv-select-simple[contains(@ng-reflect-locked, "true")]'


    //div[contains(@class, "mat-checkbox-layout")]'

    //old selectors
    actionTextAdd = '//*[contains(@class, "lv-item-with-actions-action")][contains(text(), "Add")]'
    plusElementList = "//lv-search-actions-bar//*[contains(@class,'icon-plus')]" // don't remove
    // uploadElementList= "//lv-search-actions-bar//*[contains(@class,'icon-upload-list')]" // don't remove
    dragedEntitiesAtListStatement = '//div[@class="text options-text padding"][contains(text(), {{0}})]'// don't remove
    optionStaredSelectionHighlited = '.lv-form-bank-item-option.default-option'// don't remove
    typeOptionNameAtSelection = '//lv-item-with-actions//input[contains(@placeholder, {{0}})]'// don't remove
    whenAtVisibleWhen = '//*[contains(@class, "lv-toggle-button-option-text")][contains(text(), "When")]'
    requireWhenIcon = '.bank-field-when-required'
    requireAlwaysIcon = '.bank-field-always-required'



    //wu
    checkedBoxCheckedselector = '.mat-checkbox-checked'
    unCheckedBoxCheckedselector = '.mat-checkbox'
    workOrderRowTable= '//*[@data-automation-web="table-title"][contains(.,{{0}}))]' //"Work Order Types"

    //Alert
    sectionName = '//lv-alert-type-editor//*[contains(text(), {{0}})]'
    buttonText = '//*[contains(@class, "button-text")][contains(text(), {{0}})]'

    iconCloseBtn = '.icon-close' // don't remove
    listOfOptionsValueSelection = '.lv-item-with-actions-value'// don't remove
    starIconSelection = '.icon-star.hand-cursor.ng-star-inserted'// don't remove
    starIconSelectionHighlited = '.icon-star.stared'// don't remove
    confirmTextChangInstructions = '.lv-base-message-instructions'  // don't remove // make global!
    pasteListIcon = '//div[contains(@class, "icon-module-forms")]'
    pasteDialogPopUp = '//*[contains(@class, "lv-paste-dialog")]'
    validationMessageText = '//*[contains(@class, "validation-message show")][contains(text(), {{0}})]'
    validationMessageInnerText = '//*[contains(@class, "validation-message show")]'

    iconV = '//div[contains(@class, "icon-v")]'
    iconVgrayedOut = '//div[contains(@class, "icon-v")][contains(@class, "invalid")]'
    disEnableIconStatus = '[contains(@class, "lv-color-disEnable")]'
    iconReorder = '//*[contains(@class, "icon-reorder")]'
    optionInactiveAtListSelection = '[role="grid"] [role="row"] [style*="opacity"]'// '.lv-item-with-actions-value.grayed-out'
    optionInactiveAtEntityList = '.lv-form-bank-item-option.inactive-option'
    solidIcon = '//*[contains(@class, "icon-solid")]'
    symbolAnodeIcon = '//*[contains(@class, "icon-symbol-anode")]'
    lollipopIcon = '//*[contains(@class, "icon-lollipop")]'
    dottedIcon = '//*[contains(@class, "icon-dotted")]'
    dashedIcon = '//*[contains(@class, "icon-dashed")]'

    inactiveIconatFieldsList = '.icon-hide-legacy'////// нужно переделать 

    previewEyeIcon = '.icon-preview'

    selectorByTextSpan = '//span[contains(text(), {{0}})]'
    listItemsSelectorDiv = '//*[contains(@class, "text-ellipsis")][contains(text(), {{0}})]'

    pageTitleName = '//*[contains(@class, "description-title-containe")]//*[contains(@class, "description-title")]'
    pageSubTitle = '//*[contains(@class, "description-title-containe")]//*[contains(@class, "description-text")]'

    // Content
    partOfCatalogIcon = "//lv-form-bank-field[contains(.,{{0}})]//*[contains(@class,'icon-catalog')]"
    visibleWhenDefaultText = '//div[@class="conditions-place-holder-text"][contains(text(), {{0}})]'
    typeNameAtLocalList = '//lv-item-with-actions//input[contains(@placeholder, "Type name")]'
    sectionFieldSelector = '//lv-form-bank-field//*[contains(@class, "text options-text padding")][contains(text(), "Selection")]'
    validateCheckBoxChecked = '//span[contains(text(), {{0}})]//ancestor::div[contains(@class, "checkbox-item-text")]//preceding-sibling::mat-checkbox[contains(@class,"mat-checkbox-checked")]//input'
    fieldsInsidePreviewPopup = '//*[contains(@class, "lv-form-fields-preview-block-text")][contains(text(), {{0}})]'
    messageInstruction = '//*[contains(@class, "lv-base-message-instructions")][contains(text(), {{0}})]'
    fieldPropertyLink = '//*[contains(@class, "field-property-link")]//*[contains(text(), {{0}})]'
    elementFromContentTab = '//*[contains(@class,"selected-fields-bank-items")]//*[contains(text(), {{0}})]'

    //gis layer selectors
    gisIcon = '//*[contains(@class, "lv-editor-card-icon")]/*[contains(@class, "icon-settings")]'
    addEndpoint = '//*[contains(@class, "add-database-button-text")]'
    itemContainer = '//*[@data-automation-web="lv-grid-list-item-container"]'
    //not in use anymore
    //completeConfigError = '//*[contains(@class, "lv-buttons-actions-bar-error-text")][contains(text(), "Complete Configuration")]'
    checkErrors = `//lv-action-bar-base//*[contains(@class, "lv-actions-bar-error-text")][contains(text(),"${Trans.keys.GENERAL.CHECK_ERRORS}")]`//"Check Errors"

    actionButton = '//*[contains(@class, "action-title")][contains(text(), {{0}})]'
    titleOnCard = '//*[contains(@class, "lv-editor-card")]//*[contains(text(), {{0}})]'
    iconHelper = '.icon-helper'
    selectorForHelperText = '//*[contains(@class, "lv-label-text")][contains(text(), "Helper Text")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//@ng-reflect-max-length-current-value'
    dragAndDropCardTitle = `//*[contains(text(),"${Trans.keys.FORMS.EDITOR_FORM_FIELDS.BANK_TITLE}")]`// "Drag & Drop Elements"
    dragAndDropElements = '//*[contains(@class,"bank-area-fields")]/lv-form-bank-field'
    fieldPropertiesLink = '//*[contains(@class, "field-properties-link")]//span[contains(text(), {{0}})]'
    selectExistingfField = "//lv-form-bank-field[contains(.,{{0}})]"



    //configuration new selectors
    messageAtValueTab = '//*[contains(@class, "ag-overlay-no-rows-center")]'
    //!!! need to verify
    //starButtonForItemFromList='//*[contains(@ng-reflect-max-length-current-value, {{0}})]//ancestor::*//div[contains(@class, "ag-row-level-0")]//div[contains(@class, "icon-star")]'
    //starButtonForItemFromList='//*[contains(@ng-reflect-value, {{0}})]//ancestor::*[contains(@class, "ag-row-position-absolute")]//div[contains(@class, "icon-star")]'

    itemsFromLocalListTypeRefactor = '//*[contains(@ng-reflect-value, {{0}})]//input'
    itemsFromLocalListTypeRefactorTemp = '//lv-text[contains(@ng-reflect-value, {{0}})]//input'
    enterValueRefactor = '//lv-text[contains(@ng-reflect-placeholder, "Enter a value")]//input'

    //modified selectors
    uploadElementList = "//list-options-editor//*[contains(@class,'icon-upload-list')]"
    itemsFromLocalListType = '//lv-grid-drag-and-drop//*[@data-automation-web="dynamic-field-wrapper"]//input' //!! need to modify all asserts
    itemInLocalListByName = '//*[contains(@class, "lv-text-container")]//ancestor::*[@ng-reflect-value={{0}}]'

    deleteRule = '.icon-delete-item'

    //Steps
    stepByName = '//*[contains(@class, "display-value-text")][contains(text(), {{0}})]'
    validationMessage = '//*[contains(@class, "validation-message")]'
    editStepGeneric = '//*[@row-index={{0}}]//*[contains(@class, "icon-edit")]'
    deleteStepGeneric = '//*[@row-index={{0}}]//*[contains(@class, "icon-delete")]'
    toStepByRowIndex = '//*[@row-index={{0}}]//*[contains(text(), {{1}})]'
    workflowTab = '//*[@data-automation-web="test-editor-tab-title"][contains(text(), "Workflow")]' //can't be generic, created differently

    importValues = '//*[contains(@class, "upload-title")][contains(text(), "Import Values")]'
    infoDialog = '//lv-dialog'

    //metrics
    maxLengthForField = '//web-dynamic-input[contains(@ng-reflect-title, {{0}})][contains(@ng-reflect-max-length, {{1}})]'
    specificDeleteButtonConfiguration = '//*[contains(@class, "icon-delete lv-shared-button-icon")]'
    specificInactivateButtonConfiguration = '//*[contains(@class, "icon-inactive lv-shared-button-icon")]'
    ////////assets1
    specificActivateButtonConfiguration='//*[contains(@class, "icon-active lv-shared-button-icon")]'
    activeInactiveBtn='//*[contains(@class, "lv-shared-button-container")]'
    showBtn='//*[contains(@class, "icon-hide-legacy ng-star-inserted")]'
    hideBtn='//*[contains(@class, "icon-preview ng-star-inserted")]'
    showHideCounter='//*[contains(@class,"counter-container")]'
    contentField='//*[contains(@class, "v-form-bank-item-content-container")][contains(., {{0}})]' 
    inactiveSymbol='//*[contains(@class, "v-form-bank-item-content-container")][contains(., {{0}})]//*[contains(@class, "icon-hide-legacy")]'  
    emptyMetricIcon = '//*[contains(@class,"icon-new-metric")]'


    //emails
    emptyEmailIcon = '//*[contains(@class,"icon-new-notifications")]'
    smallRrequiredIcon = '//*[contains(text(), {{0}})]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//*[contains(@class, "required-icon")][contains(@class, "icon-mandatory-small")]'
    filterButton = '//*[contains(@class,"icon-filter")]'
    filterButtonAtEmailNotificationEditorScreen = '//*[contains(@class, "editor-card-title")][contains(text(), {{0}})]//ancestor::mat-expansion-panel//*[contains(@class, "icon-filter")]'
    deleteButtonAtEmailNotificationEditorScreen = '//*[contains(@class, "editor-card-title")][contains(text(), {{0}})]//ancestor::mat-expansion-panel//*[contains(@class, "icon-delete")]'
    helperButtonAtEmailNotificationEditorScreen = '//*[contains(@class, "editor-card-title")][contains(text(), {{0}})]//ancestor::mat-expansion-panel//*[contains(@class, "icon-helper")]'

    //Distribution
    emptyDistributionIcon = '//*[contains(@class,"icon-new-distribution-list")]'
    distributionIconList = '//*[contains(@class,"icon-distribution-list")]'

    iconParametersSelector = '.icon-parameters.top-icon'

    async selectSymbol() {
        const path = await this.createPath(this.genericDropDownArrow, [Trans.keys.GENERAL.SYMBOL])//"Symbol"
        await getXPathAndClick(this.page, path)
        await this.page.waitForXPath(this.valueFromDropDown.replace("{{0}}", ["anode"]))
        //await this.page.waitForTimeout(500)
        const path2 = await this.createPath(this.valueFromDropDown, ["anode"])
        await getXPathAndClick(this.page, path2)

    }
    async selectSymbolReferenceLine() {
        const path = await this.createPath(this.genericDropDownArrow, [Trans.keys.GENERAL.SYMBOL])//"Symbol"
        await getXPathAndClick(this.page, path)
        await this.page.waitForXPath(this.valueFromDropDown.replace("{{0}}", ["anode"]))
        await getXPathAndType(this.page, this.searchFieldOnCards, "reference")
        //await this.page.waitForTimeout(500)
        const path2 = await this.createPath(this.valueFromDropDown, ["reference-line"])
        await getXPathAndClick(this.page, path2)

    }
    async selectPin() {
        const path = await this.createPath(this.genericDropDownArrow, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.PIN])//"Pin"
        await getXPathAndClick(this.page, path)
        const path2 = await this.createPath(this.valueFromDropDown, [Trans.keys.SYMBOL.TRIANGLE])//"Triangle"
        await isElementExistsbyXPath(this.page, path2)
        await getXPathAndClick(this.page, path2)
    }

    async selectGeometryPoint() {
        const path = await this.createPath(this.genericDropDownArrow, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.GEOMETRY])//"Geometry"
        await getXPathAndClick(this.page, path)
        await this.page.waitForXPath(this.valueFromDropDown.replace("{{0}}", `"${Trans.keys.FORMS.EDITOR_FORM_FIELDS.POINT}"`))//"Point"
        const path2 = await this.createPath(this.valueFromDropDown, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.POINT])//"Point"
        await getXPathAndClick(this.page, path2)
    }
    async selectGeometryLine() {
        const path = await this.createPath(this.genericDropDownArrow, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.GEOMETRY])//"Geometry"
        await getXPathAndClick(this.page, path)
        await this.page.waitForXPath(this.valueFromDropDown.replace("{{0}}", `"${Trans.keys.FORMS.EDITOR_FORM_FIELDS.LINE}"`))//"Line"
        const path2 = await this.createPath(this.valueFromDropDown, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.LINE])//"Line"
        await getXPathAndClick(this.page, path2)
    }
    async selectSubGeometryLine() {
        const path = await this.createPath(this.genericDropDownArrow, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.LINE])//"Line"
        const elementForLine = await this.page.$x(path)
        await elementForLine[1].click()
        await this.page.waitForXPath(this.valueFromDropDown.replace("{{0}}", `"${Trans.keys.SYMBOL.SOLID}"`))//"Solid"
        const path2 = await this.createPath(this.valueFromDropDown, [Trans.keys.SYMBOL.SOLID])//"Solid"
        await getXPathAndClick(this.page, path2)
    }
    async selectMappableMappability() {
        const path = await this.createPath(this.genericDropDownArrow, ["Mappability"])
        await getXPathAndClick(this.page, path)
        await this.page.waitForXPath(this.valueFromDropDown.replace("{{0}}", ["Mappable"]))
        const path2 = await this.createPath(this.valueFromDropDown, ["Mappable"])
        await getXPathAndClick(this.page, path2)
    }

    async selectPartOfCatalogYes() {
        const path = await this.createPath(this.genericDropDownArrow, ["Part of Catalog"])
        await getXPathAndClick(this.page, path)
        await this.page.waitForXPath(this.valueFromDropDown.replace("{{0}}", [Trans.keys.GENERAL.YES]))
        const path2 = await this.createPath(this.valueFromDropDown, [Trans.keys.GENERAL.YES])
        await getXPathAndClick(this.page, path2)
    }
    async selectPartOfCatalogNo() {
        const path = await this.createPath(this.genericDropDownArrow, ["Part of Catalog"])
        await getXPathAndClick(this.page, path)
        await this.page.waitForXPath(this.valueFromDropDown.replace("{{0}}", [Trans.keys.GENERAL.NO]))
        const path2 = await this.createPath(this.valueFromDropDown, [Trans.keys.GENERAL.NO])
        await getXPathAndClick(this.page, path2)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", '"OK"'))

    }
    async selectParsFromASTmNo() {
        const path = await this.createPath(this.genericDropDownArrow, ["Parse from ASTM"])
        await getXPathAndClick(this.page, path)
        await this.page.waitForXPath(this.valueFromDropDown.replace("{{0}}", [Trans.keys.GENERAL.NO]))
        const path2 = await this.createPath(this.valueFromDropDown, [Trans.keys.GENERAL.NO])
        await getXPathAndClick(this.page, path2)

    }
    async selectParsFromASTmYes() {
        const path = await this.createPath(this.genericDropDownArrow, ["Parse from ASTM"])
        await getXPathAndClick(this.page, path)
        await this.page.waitForXPath(this.valueFromDropDown.replace("{{0}}", [Trans.keys.GENERAL.YES]))
        const path2 = await this.createPath(this.valueFromDropDown, [Trans.keys.GENERAL.YES])
        await getXPathAndClick(this.page, path2)

    }
    async createAssetType(assetName) {
        await this.createAssetTypeWithoutSave(assetName)
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))//'"Save"'
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
        //await getXPathAndClick(this.page, this.cancelUpperXButton)
    }


    async createAssetTypeWithoutSave(assetName) {
        await this.page.reload()
        await this.page.waitForTimeout(500)
        await this.page.waitForXPath(this.duplicateIcon)
        const path = await this.createPath(this.inputByFieldName, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.ASSET_TYPE_NAME])//"Asset Name"
        await this.page.waitForSelector(this.addButton, { timeout: 15000 })
        await waitAndClick(this.page, this.addButton)
        await this.page.waitForTimeout(200)
        await getXPathAndType(this.page, path, assetName)
        await this.page.waitForTimeout(200)
        await this.selectSymbol()
        await this.page.waitForTimeout(200)
        await this.selectPin()
        await this.page.waitForTimeout(200)
        await this.selectGeometryPoint()
    }
    async createAssetTypeV2(assetName) {
        await this.page.reload()
        await this.page.waitForTimeout(1000)
        const path = await this.createPath(this.inputByFieldName, ["Asset Name"])
        await this.page.waitForSelector(this.addButton)
        await waitAndClick(this.page, this.addButton)
        await this.page.waitForTimeout(200)
        await getXPathAndType(this.page, path, assetName)
        await this.page.waitForTimeout(200)
        await this.selectSymbol()
        await this.page.waitForTimeout(200)
        await this.selectGeometryPoint()
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
    }

    async createProjectWithoutSave(projectName) {
        await this.page.reload()
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector(this.addButton)
        await waitAndClick(this.page, this.addButton)
        await this.page.waitForTimeout(200)
        const path = await this.createPath(this.inputByFieldName, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.WORK_ORDER_NAME])
        await getXPathAndType(this.page, path, projectName)
        await this.page.waitForTimeout(500)
        await this.selectSymbol()
    }

    async formAttachable1() {
        await this.page.waitForTimeout(500)
        //await getXPathAndClick(this.page, this.formAttachabilityDropDown)
        const path = await this.createPath(this.genericDropDownArrow, ["Form Attachability"])
        await getXPathAndClick(this.page, path)
        await this.page.waitForTimeout(1000)
        // await getXPathAndClick(this.page, this.attachableSelector1)
        await this.page.waitForXPath(this.valueFromDropDown.replace("{{0}}", ["Attachable"]))
        const path2 = await this.createPath(this.valueFromDropDown, ["Attachable"])
        const elementForLine = await this.page.$x(path2)
        await elementForLine[0].click()
        await this.page.waitForTimeout(500)

    }

    async formCaptureLocationSelector(fieldNameVeriable) { //elementName
        // await this.page.waitForXPath(this.valueFieldProperties)
        await this.page.waitForTimeout(500)
        //await getXPathAndClick(this.page, this.captureBackgrndLocationDropDown)
        const path = await this.createPath(this.genericDropDownArrow, ["Background Location"])
        await getXPathAndClick(this.page, path)
        await this.page.waitForXPath(this.valueFromDropDown.replace("{{0}}", ["Capture"]))
        const path2 = await this.createPath(this.valueFromDropDown, ["Capture"])
        const clickAttachability = await this.page.$x(path2)
        await this.page.waitForTimeout(500)
        clickAttachability[fieldNameVeriable].click()
        await this.page.waitForTimeout(500)

    }

    async createFormType(formName, captureBackgrndLocation) {
        //await this.page.waitForTimeout(1000)
        await this.page.reload()
        await this.page.waitForSelector(this.addButton)
        await waitAndClick(this.page, this.addButton)
        // await getXPathAndType(this.page, this.formTypeName, [formName])
        const path = await this.createPath(this.inputByFieldName, ["Form Name"])
        await this.page.waitForTimeout(200)
        await getXPathAndType(this.page, path, formName)
        await this.page.waitForTimeout(500)
        await this.selectSymbol()
        await this.page.waitForTimeout(500)
        await this.formAttachable1()
        await this.formCaptureLocationSelector([captureBackgrndLocation])
        //await this.formCaptureLocationSelectorCapture()
        await getXPathAndClick(this.page, this.assetPropertiesTab)
        await this.page.waitForTimeout(500)

    }
    async editFormType(formName, captureBackgrndLocation) {
        //await this.page.waitForTimeout(1000)
        //await getXPathAndType(this.page, this.formTypeName, [formName])
        const path = await this.createPath(this.inputByFieldName, ["Form Name"])
        await this.page.waitForTimeout(200)
        await getXPathAndType(this.page, path, formName)
        await this.page.waitForTimeout(500)
        await this.formCaptureLocationSelector([captureBackgrndLocation])
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.assetPropertiesTab)
        await this.page.waitForTimeout(500)

    }

    async createAssetTypeLine(assetName) {
        await this.page.reload()
        await this.page.waitForTimeout(500)
        const path = await this.createPath(this.inputByFieldName, ["Asset Name"])
        await this.page.waitForSelector(this.addButton)
        await waitAndClick(this.page, this.addButton)
        await this.page.waitForTimeout(200)
        await getXPathAndType(this.page, path, assetName)
        await this.page.waitForTimeout(200)
        await this.selectSymbol()
        await this.page.waitForTimeout(200)
        await this.selectPin()
        await this.page.waitForTimeout(200)
        await this.selectGeometryLine()
        await this.page.waitForTimeout(200)
        await this.selectSubGeometryLine()
        await this.page.waitForTimeout(200)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))//does not work temporary
        //await getXPathAndClick(this.page, this.cancelUpperXButton)
    }
    async createAssetTypeReferenceLine(assetName) {
        await this.page.reload()
        await this.page.waitForTimeout(500)
        const path = await this.createPath(this.inputByFieldName, ["Asset Name"])
        await this.page.waitForSelector(this.addButton)
        await waitAndClick(this.page, this.addButton)
        await this.page.waitForTimeout(200)
        await getXPathAndType(this.page, path, assetName)
        await this.page.waitForTimeout(200)
        await this.selectSymbolReferenceLine()
        await this.page.waitForTimeout(200)
        await this.selectPin()
        await this.page.waitForTimeout(200)
        await this.selectGeometryLine()
        await this.page.waitForTimeout(200)
        await this.selectSubGeometryLine()
        await this.page.waitForTimeout(200)

    }

    async createAssetTypeBarcodeRegEx(assetName, regExforBarcodeText) {
        await this.createAssetTypeWithoutSave(assetName)
        await this.page.waitForTimeout(200)
        const path1 = await this.createPath(this.genericDropDownArrow, ["Barcode Support"])
        await getXPathAndClick(this.page, path1)
        const path2 = await this.createPath(this.valueFromDropDown, ["Specific String"])
        await getXPathAndClick(this.page, path2)
        await getXPathAndType(this.page, this.inputByFieldName.replace("{{0}}", '"RegEx for"'), regExforBarcodeText)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))

    }

    async createAssetTypeBarcodeASTM(assetName, specificValue) {
        await this.createAssetTypeWithoutSave(assetName)
        await this.page.waitForTimeout(200)
        const path2 = await this.createPath(this.genericDropDownArrow, ["Barcode Support"])
        await getXPathAndClick(this.page, path2)
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", '"ASTM"'))
        const path3 = await this.createPath(this.genericDropDownArrow, ["Match"])
        await getXPathAndClick(this.page, path3)
        await getXPathAndClick(this.page, this.checkBoxByText.replace("{{0}}", `"${specificValue}"`))
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))//this click closes the dropdown
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))

    }

    //////////////////////////////////////////////////
    async createWuMappable(wuName) {
        //await this.page.waitForTimeout(1000)
        await this.page.reload()
        await this.page.waitForSelector(this.addButton)
        await this.page.waitForTimeout(1000)
        await waitAndClick(this.page, this.addButton)
        //await getXPathAndType(this.page, this.workUnitName, [assetName])
        const path = await this.createPath(this.inputByFieldName, ["Work Unit Name"])
        await this.page.waitForTimeout(200)
        await getXPathAndType(this.page, path, wuName)

        await this.selectSymbol()
        await this.selectMappableMappability()
        await this.selectPin()
        await this.page.waitForTimeout(200)
        await this.selectGeometryPoint()
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await this.page.waitForXPath(this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
        //await getXPathAndClick(this.page, this.cancelUpperXButton)
    }
    ////// createAssetTypeWithoutSave
    async createWuMappableWithoutSaving(wuName) {
        await waitAndClick(this.page, this.addButton)
        const path = await this.createPath(this.inputByFieldName, ["Work Unit Name"])
        await this.page.waitForTimeout(200)
        await getXPathAndType(this.page, path, wuName)

        await this.selectSymbol()
        await this.selectMappableMappability()
        await this.selectPin()
        await this.page.waitForTimeout(200)
        await this.selectGeometryPoint()
        await this.page.waitForTimeout(500)

    }


    async createWuMappableUnsavedWithoutGeometry(wuName) {
        //await this.page.waitForTimeout(1000)
        await this.page.reload()
        await this.page.waitForSelector(this.addButton)
        await this.page.waitForTimeout(1000)
        await waitAndClick(this.page, this.addButton)
        const path = await this.createPath(this.inputByFieldName, ["Work Unit Name"])
        await this.page.waitForTimeout(200)
        await getXPathAndType(this.page, path, wuName)
        await this.selectSymbol()
        await this.selectMappableMappability()
        await this.selectPin()
        await this.page.waitForTimeout(200)
        //await this.selectGeometryPoint()
        await this.page.waitForTimeout(500)

    }
    async editAssetTypeBarcodeASTM(specificValue) {
        await this.editAssetTypeBarcodeASTMWithoutSave(specificValue)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`)) //this click closes dropdown
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await this.page.waitForTimeout(500)
    }
    async editAssetTypeBarcodeASTMWithoutSave(specificValue) {
        const path3 = await this.createPath(this.genericDropDownArrow, ["Match"])
        await getXPathAndClick(this.page, path3)
        await getXPathAndClick(this.page, this.checkBoxByText.replace("{{0}}", `"${specificValue}"`))
    }

    async selectValueForBarcodeParsing(specificValue) {
        const path = await this.createPath(this.genericDropDownArrow, ["Values Table"])
        await getXPathAndClick(this.page, path)
        await this.page.waitForTimeout(1000)
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", specificValue))
        await this.page.waitForTimeout(500)
    }

    async clickTreeDots(index) {
        await this.page.waitForXPath(this.threeDotsIcon)
        const threeDots = await getElementFromArrayByIndex(this.page, this.threeDotsIcon, index)
        await threeDots.click()
        await this.page.waitForTimeout(500)
    }

    async clickDropDownArrow(index) {
        await this.page.waitForXPath(this.dropArrowXPath)
        const threeDots = await getElementFromArrayByIndex(this.page, this.dropArrowXPath, index)
        await threeDots.click()
        await this.page.waitForTimeout(500)
    }

    async renameAssetType(assetName) {
        await getXPathAndClick(this.page, this.inputByFieldName.replace("{{0}}", '"Asset Name"'))
        await getXPathAndClick(this.page, this.deleteIcon.replace("{{0}}", '"Asset Name"'))
        await getXPathAndType(this.page, this.inputByFieldName.replace("{{0}}", '"Asset Name"'), assetName)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
    }

    async createAssetTypeWithoutAssetName() {
        await waitAndClick(this.page, this.addButton)
        await this.page.waitForTimeout(500)
        await this.selectSymbol()
        await this.selectPin()
        await this.selectGeometryPoint()
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await this.page.waitForTimeout(500)

    }
    async createAssetTypeWithoutClosing(assetName) {
        await this.page.reload()
        await this.page.waitForTimeout(500)
        const path = await this.createPath(this.inputByFieldName, ["Asset Name"])
        await this.page.waitForSelector(this.addButton)
        await waitAndClick(this.page, this.addButton)
        await this.page.waitForTimeout(200)
        await getXPathAndType(this.page, path, assetName)
        await this.page.waitForTimeout(200)
        await this.selectSymbol()
        await this.page.waitForTimeout(200)
        await this.selectPin()
        await this.page.waitForTimeout(200)
        await this.selectGeometryPoint()
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))

    }

    async deleteIconToolTipIndex(index) {
        await this.page.waitForXPath(this.deleteIconXP)
        const deleteIconToolTiptemp = await getElementFromArrayByIndex(this.page, this.deleteIconXP, index)
        await deleteIconToolTiptemp.click()
        await this.page.waitForTimeout(1000)

    }

    // async lockedGeometryClassIndex(index) {
    //     await this.page.waitForXPath(this.lockedGeometryClass)
    //     const locked = await getElementFromArrayByIndex(this.page, this.lockedGeometryClass, index)
    //     await locked.click()
    //     await this.page.waitForTimeout(500)
    // }

    async dragAndDropAndNameField(fieldName, fieldAliasText) { //elementName
        const path = await this.createPath(this.selectorByTextAll, fieldName)
        await this.page.waitForTimeout(500)
        await getXPathAndDoubleClick(this.page, path)
        const path1 = await this.createPath(this.inputByFieldName, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.PROP_EDITOR.FIELD_ALIAS_SCHEMA])//"Field Alias"
        await getXPathAndType(this.page, path1, [fieldAliasText])
    }
    async dragAndDropAndNameFieldAlias(fieldName, fieldAliasText) { //elementName
        const path = await this.createPath(this.fieldNameOfContent, fieldName)
        await this.page.waitForTimeout(500)
        await getXPathAndDoubleClick(this.page, path)
        const path1 = await this.createPath(this.inputByFieldName, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.PROP_EDITOR.FIELD_ALIAS_SCHEMA])//"Field Alias"
        await getXPathAndType(this.page, path1, [fieldAliasText])
    }
    async dragAndDropAndNameFieldStatement(fieldName, fieldAliasText) { //elementName
        const path = await this.createPath(this.fieldNameOfContent, fieldName)
        await this.page.waitForTimeout(500)
        await getXPathAndDoubleClick(this.page, path)
        const path1 = await this.createPath(this.textareaByFieldName, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.PROP_EDITOR.STATEMENT_TEXT])//"Statement Text"
        await getXPathAndType(this.page, path1, [fieldAliasText])
    }
    async dragAndDropAndNameFieldSection(fieldAliasText) { //elementName
        await getXPathAndDoubleClick(this.page, '//div[@class="text"][contains(text(), "Section")]')
        const path1 = await this.createPath(this.inputByFieldName, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.PROP_EDITOR.SECTION_ALIAS_SCHEMA])//"Section Alias"
        await getXPathAndType(this.page, path1, [fieldAliasText])
    }

    async dragAndDropAndSelectionField(fieldAliasText) { //elementName
        const path = await this.createPath(this.sectionFieldSelector)
        await this.page.waitForTimeout(500)
        await getXPathAndDoubleClick(this.page, path)
        //await getXPathAndType(this.page, this.sectionAliasInputSelector, [fieldAliasText])
        const path1 = await this.createPath(this.inputByFieldName, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.PROP_EDITOR.FIELD_ALIAS_SCHEMA])//"Field Alias"
        await getXPathAndType(this.page, path1, fieldAliasText)
        //await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
    }


    async defaultValueField(fieldName1, defaultValueText) { //elementName
        await this.fieldPropertiesSelector(fieldName1)
        await this.page.waitForTimeout(500)
        const path1 = await this.createPath(this.textareaByFieldName, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.PROP_EDITOR.DEFAULT_VALUE])//"Default Value"
        //const path1 = await this.createPath(this.inputByFieldName, ["Default Value"])
        await getXPathAndType(this.page, path1, [defaultValueText])

    }
    async defaultValueFieldNumberField(fieldName1, defaultValueText) { //elementName
        await this.fieldPropertiesSelector(fieldName1)
        await this.page.waitForTimeout(500)
        //const path1 = await this.createPath(this.textareaByFieldName, ["Default Value"])
        const path1 = await this.createPath(this.inputByFieldName, [Trans.keys.FORMS.EDITOR_FORM_FIELDS.PROP_EDITOR.DEFAULT_VALUE])//"Default Value"
        await getXPathAndType(this.page, path1, [defaultValueText])

    }
    async fieldPropertiesSelector(fieldNameVeriable) { //elementName
        const field = await this.createPath(this.fieldPropertyLink, fieldNameVeriable)
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, field)
    }

    async whenDependencyVeriableValue(whenField, fieldOutValue) {
        await this.page.waitForXPath(this.toggleByText.replace("{{0}}", '"When"'))
        await getXPathAndClick(this.page, this.toggleByText.replace("{{0}}", '"When"'))
        await getXPathAndClick(this.page, this.specificDropDownArrow.replace("{{0}}", '"When Field"'))
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", whenField))
        await getXPathAndClick(this.page, this.specificDropDownArrow.replace("{{0}}", '"Was Filled Out With"'))
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", fieldOutValue))

    }
    async whenDependencySpecificVeriableValue(whenField, fieldOutValue, specificValue) {
        await this.page.waitForXPath(this.toggleByText.replace("{{0}}", '"When"'))
        await getXPathAndClick(this.page, this.toggleByText.replace("{{0}}", '"When"'))
        await getXPathAndClick(this.page, this.specificDropDownArrow.replace("{{0}}", '"When Field"'))
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", whenField))
        await getXPathAndClick(this.page, this.specificDropDownArrow.replace("{{0}}", '"Was Filled Out With"'))
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", fieldOutValue))
        await getXPathAndClick(this.page, this.specificDropDownArrow.replace("{{0}}", '"Specific Value"'))
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", specificValue))

    }
    async whenDependencyValueResetWhen(whenField) {
        await this.page.waitForXPath(this.toggleByText.replace("{{0}}", '"When"'))
        await getXPathAndClick(this.page, this.toggleByText.replace("{{0}}", '"When"'))
        await getXPathAndClick(this.page, this.genericDropDownArrow.replace("{{0}}", '"Any Change Was Made On Field"'))
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", whenField))


    }

    async deleteAssetType(EntityName) {
        await this.page.waitForXPath(this.duplicateIcon)
        await this.clickRowInTable(EntityName)
        await waitAndClick(this.page, this.iconDeleteConfig)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", '"Permanently Delete"'))
        await this.page.waitForTimeout(1000)

    }

    //delete field
    async deleteField() {
        await this.page.waitForSelector(this.iconDeleteConfig)
        await waitAndClick(this.page, this.iconDeleteConfig)
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.secondaryButtonByText.replace("{{0}}", '"Delete"'))
        await this.page.waitForTimeout(500)

    }
    async deleteProjectType(projectTypeName) {
        await waitAndClick(this.page, this.upperIconConfig)
        await this.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.WORK_ORDERS])//"Work Orders"
        await this.clickRowInTable(projectTypeName)
        await getXPathAndClick(this.page, `//*[contains(text(), '${Trans.keys.FORMS.EDITOR_FORM_FIELDS.DELETE_PROJECT}')]`)//"Delete Project Type"//Trans.keys.FORMS.EDITOR_FORM_FIELDS.DELETE_PROJECT
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", '"Delete"'))
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", '"OK"'))
    }

    async activeInactiveTogglSwtcher(toggleName) {
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.activeToggleValSelector.replace("{{0}}", toggleName))
        await this.page.waitForTimeout(500)
    }

    //this method clicks inside checkbox at Value tab for Time Field 
    // async timeFieldValueChecbox (checkboxName) {
    //     await getXPathAndClick(this.page, this.checkboxValuesTab.replace("{{0}}", `'${checkboxName}'`))
    //         await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
    //         await this.fieldPropertiesSelector(["General"])
    //         await this.fieldPropertiesSelector(["Value"])
    //         let path = await this.createPath(this.checkboxValuesTab, [checkboxName])
    //         const element = await this.page.$x(path)
    //         const isChecked = await element[0].evaluate(el => el['ariaChecked'])
    //     return isChecked
    // }

    //this method selects a field when several elements of the same class and inner Text in DOM (like URL field, Heat Number etc)
    async addFieldToContentAndNameIt(fieldType, fieldName, defaultValue, position) {
        await this.page.waitForTimeout(1000)
        const path = await this.createPath(this.selectorByTextAll, [fieldType])
        const element = await this.page.$x(path)
        element[position].click({ clickCount: 2 })
        //await getXPathAndType(this.page, this.fieldAliasInputSelector, fieldName)

        const path1 = await this.createPath(this.inputByFieldName, ["Field Alias"])
        await getXPathAndType(this.page, path1, [fieldName])

        await this.fieldPropertiesSelector(["Value"])
        await getXPathAndType(this.page, this.inputField2, defaultValue)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await this.fieldPropertiesSelector(["General"])
        await this.fieldPropertiesSelector(["Value"])
    }
    async insertEntityesToLocalList(EntityName) {
        await this.page.waitForXPath(this.plusElementList)
        await getXPathAndClick(this.page, this.plusElementList)
        await getXPathAndType(this.page, this.typeNameAtLocalList, EntityName)
        await getXPathAndClick(this.page, this.actionTextAdd)
    }

    async insertEntityesToLocalListNewVersion(EntityName) {
        const path1 = await this.createPath(this.inputByFieldName, [""])
        await getXPathAndType(this.page, path1, EntityName)
        await getXPathAndClick(this.page, this.iconV)
    }


    async clearDropDownValue(DropDownFieldName) {
        await this.page.waitForTimeout(2000)

        //await this.page.waitForXPath(this.genericDropDownArrow.replace("{{0}}", DropDownFieldName))
        await getXPathAndClick(this.page, this.genericDropDownArrow.replace("{{0}}", [DropDownFieldName]))
        await this.page.waitForTimeout(1000)
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", '"Clear Selection"'))
    }
    // reconciliation
    async createReconAction(fieldName1, defaultValueText) { //elementName
        await getXPathAndClick(this.page, this.arrowActionTypeReconAction)
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", [fieldName1]))
        await getXPathAndClick(this.page, this.freeTextAreaActionNameReconAction)
        await this.page.waitForTimeout(1000)
        await getXPathAndType(this.page, this.reconActionNameTypeField, defaultValueText)



        // const field = await this.createPath(this.valueFromDropDown, fieldName1)
        // await getXPathAndClick(this.page, field)


        //await this.page.waitForXPath(this.defaultValueFieldSelector)
        //await getXPathAndType(this.page, this.defaultValueFieldSelector, defaultValueText)

        // const path1 = await this.createPath(this.reconActionNameTypeField, ["Default Value"])
        // await getXPathAndType(this.page, path1, [defaultValueText])

    }

    //alert

    async editExistingByNameRecon(entityName) {
        await this.page.waitForTimeout(2000)
        await this.page.waitForSelector(this.addButton)
        const xpath = await this.createPath(this.threeDotsByName, [entityName])
        await getXPathAndClick(this.page, xpath)
        const xpath1 = await this.createPath(this.editByName, [entityName])
        await getXPathAndClick(this.page, xpath1)
    }

    async openFieldTagsScreen() {
        await this.page.reload()
        await waitAndClick(this.page, '.icon-settings')
        //await this.page.waitForTimeout(2000)
        await this.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.GLOBAL_CONTENT])
        await this.clickLeftLinkInfra(["Shared Content"])
        await getXPathAndClick(this.page, this.tabTitleCommon.replace("{{0}}", '"Field Tags"'))
        await this.page.waitForSelector(this.addButton)
        await this.page.waitForTimeout(1000)

    }
    async createFieldTag(tagName, fieldCategory) {
        await waitAndClick(this.page, this.addButton)
        const path1 = await this.createPath(this.inputByFieldName, ["Tag Name"])
        await getXPathAndType(this.page, path1, [tagName])
        await getXPathAndClick(this.page, this.genericDropDownArrow.replace("{{0}}", '"Field Category"'))
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", `"${fieldCategory}"`))
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        //before the editor saved automatically after save clicked
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
        await this.page.waitForSelector(this.addButton)
    }
    //function to open tab at shared content 
    async openSharedContentTab(tabName) {
        await this.page.reload()
        await waitAndClick(this.page, '.icon-settings')
        await this.page.waitForXPath(this.duplicateIcon)
        //await this.page.waitForTimeout(2000)
        await this.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.GLOBAL_CONTENT])
        await this.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.SHARED_CONTENT])
        await this.page.waitForXPath(this.activeTabHighlited.replace("{{0}}", `"${Trans.keys.SHARED_LIST.SHARED_LISTS}"`))
        await getXPathAndClick(this.page, this.tabTitleCommon.replace("{{0}}", tabName))
        await this.page.waitForSelector(this.addButton)
        await this.page.waitForTimeout(1000)
    }
    async openSharedContentTabInsideGlobalTab(tabName) {
        await this.page.reload()
        await this.page.waitForSelector(this.addButton)
        await this.page.waitForXPath(this.activeTabHighlited.replace("{{0}}", '"Shared Lists"'))
        await getXPathAndClick(this.page, this.tabTitleCommon.replace("{{0}}", tabName))
        await this.page.waitForSelector(this.addButton)
        await this.page.waitForTimeout(1000)
    }
    //function to open tab at Emails 
    async openEmailsContentTab() {
        await this.page.reload()
        await waitAndClick(this.page, '.icon-settings')
        await this.page.waitForXPath(this.duplicateIcon)
        //await this.page.waitForTimeout(2000)
        await this.clickLeftLinkInfra(["Business Logic"])
        await this.clickLeftLinkInfra(["Emails"])
        //await this.page.waitForTimeout(2000)
        await this.page.waitForXPath(this.infraLeftMenuActive.replace("{{0}}", '"Emails"'))

        await this.page.waitForSelector(this.addButton)
        await this.page.waitForTimeout(2000)
    }
    async openEmailsContentTabInsideBusinessTab() {
        await this.page.reload()
        await this.page.waitForSelector(this.addButton)
        await this.page.waitForTimeout(2000)
        //temporary workaround
        await this.page.waitForXPath(this.infraLeftMenuActive.replace("{{0}}", '"Emails"'))
        await this.page.waitForSelector(this.addButton)
        await this.page.waitForTimeout(2000)
    }
    //function to open tab at Entity Types 
    async openEntityContentTab(tabName) {
        await this.page.reload()
        await waitAndClick(this.page, '.icon-settings')
        await this.page.waitForXPath(this.duplicateIcon)
        await this.clickLeftLinkInfra(tabName)
        await this.page.waitForSelector(this.addButton)
        await this.page.waitForTimeout(2000)
    }
    async openMetricTypesScreen() {
        await this.page.reload()
        await waitAndClick(this.page, '.icon-settings')
        //await this.page.waitForTimeout(2000)
        await this.clickLeftLinkInfra(["Dashboards"])
        await this.page.waitForSelector(this.addButton)
        await this.page.waitForTimeout(1000)

    }



    // async setSelectVal(sel, val) {
    //     page.evaluate((data) => {
    //     return document.querySelector(data.sel).value = data.val
    //     }, {sel, val})
    //     }
    async inactiveTypeSimple() {
        await getXPathAndClick(this.page, this.specificInactivateButtonConfiguration)
        await this.page.waitForXPath(this.errorIconOnPopUpFlexible + this.iconInactiveClarification)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.ACTION.INACTIVATE}"`))//'"Inactivate"'
        await this.page.waitForTimeout(1000)
        await this.page.waitForSelector(this.activeIcon)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await this.page.waitForXPath(this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))

    }

    async setPoorQualityGPSConfirmation(enableNotification = true) {
        await waitAndClick(this.page, this.upperIconConfig)
        await this.clickLeftLinkInfra(["Settings"])
        // edit
        await waitAndClick(this.page, this.editIcon)
        const poorQDD = await this.genericDropDownArrow.replace("{{0}}", `"${Trans.keys.CONFIGURATION.SYSTEM.GPS_QUALITY.POOR_QUALITY_GPS_DATA_CONFIRM}"`)//Poor Quality GPS Data Confirmation

        let selectionText = `"${Trans.keys.CONFIGURATION.SYSTEM.ADDITION_MAPPING_SETTINGS.PROMPT_CONFIRMATION}"`

        if (enableNotification == false) {
            selectionText = `"${Trans.keys.CONFIGURATION.SYSTEM.ADDITION_MAPPING_SETTINGS.NONE}"`
        }
        const promptConfirm = await this.valueFromDropDown.replace("{{0}}", selectionText)
        const valuePoorQDD = await this.valueOfFieldWithDropDown.replace("{{0}}", selectionText)
        await getXPathAndClick(this.page, poorQDD)
        await this.page.waitForTimeout(1000)
        await getXPathAndClick(this.page, promptConfirm)
        //save
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}",`"${Trans.keys.ACTION.SAVE}"`))
        await isElementExists(this.page, this.editIcon)
        const savedText = await getText(this.page, this.existingValue.replace("{{0}}", `"${Trans.keys.CONFIGURATION.SYSTEM.GPS_QUALITY.POOR_QUALITY_GPS_DATA_CONFIRM}"`))//Poor Quality GPS Data Confirmation
        const isPoorQNotificationSet = await isElementExistsbyXPath(this.page, valuePoorQDD)
        assert.isTrue(isPoorQNotificationSet, `Poor Quality GPS Data Confirmation was not set correctly ${valuePoorQDD}`)
        assert.equal(savedText.trim(), selectionText.replace(/"/g, ''), `Saved text of "Poor Quality GPS Data Confirmation" is incorrect`)


    }
    
    async saveSettings(){//Save button function
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.ACTION.SAVE}"`))
        await isElementExistsbyXPath(this.page, this.editIconI)// extra waiting time
        const editIcon =await isElementExistsbyXPath(this.page, this.editIconI)
        assert.isTrue(editIcon,"Settings Not Saved -> Icon Displayed.")
    
    }

    async changeUnitOfMeasure(unitOfMeasureSelection){
            await waitAndClick(this.page,this.upperIconConfig)
            await this.clickLeftLinkInfra([Trans.keys.CONFIGURATION.SYSTEM.SETTINGS])
            await getXPathAndClick(this.page, this.editIconI)
            await this.selectValueFromDD(`"${Trans.keys.CONFIGURATION.SYSTEM.UNIT_OF_MEASURE}"`,`"${unitOfMeasureSelection}"`)//,unitOfMeasureSelection
            await this.saveSettings()
    }
    async selectDecimalSeparator(separator){
        await waitAndClick(this.page,this.upperIconConfig)
        await this.clickLeftLinkInfra([Trans.keys.CONFIGURATION.SYSTEM.SETTINGS])
        await waitAndClick(this.page, this.editIcon)
        await getXPathAndClick(this.page,this.genericDropDownArrow.replace("{{0}}", '"Decimal Separator"'))
        await getXPathAndClick(this.page,this.valueFromDropDown.replace("{{0}}", `"${separator}"`)) 
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await waitAndClick(this.page,this.upperIconRA)
    }
    async addTagToWorkManagement(tagName, fieldCategory,workOrderName,elementFieldName){
        await this.openSharedContentTab(['"Field Tags"'])
        if(await isElementExistsbyXPath(this.page,this.selectCellFromRow.replace("{{0}}", `"${tagName}"`))){
            await waitAndClick(this.page,this.upperIconRA)
        }else{
        await this.createFieldTag(tagName,fieldCategory)
        await waitAndClick(this.page,this.upperIconRA)
        await waitAndClick(this.page, this.upperIconConfig)
        await this.clickLeftLinkInfra(["Work Orders"])
        await this.page.waitForXPath(this.infraLeftMenuActive.replace("{{0}}", '"Work Orders"'))
        await this.page.waitForXPath(this.duplicateIcon)
        await this.clickRowInTable(workOrderName)
        await this.page.waitForXPath(this.activeTabHighlited.replace("{{0}}", '"Properties"'))
        await getXPathAndClick(this.page, this.assetContentTab)
        await this.page.waitForXPath(this.activeTabHighlited.replace("{{0}}", '"Content"'))
        await this.dragAndDropAndNameFieldAlias(["Numbers"],elementFieldName)
        await getXPathAndClick(this.page, this.genericDropDownArrow.replace("{{0}}", '"Field Tag"'))
        await getXPathAndClick(this.page, this.valueFromDropDown.replace("{{0}}", `"${tagName}"`))
        await this.page.waitForXPath(this.valueOfFieldWithDropDown.replace('{{0}}', `"${tagName}"`))
        await getXPathAndClick(this.page,this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await this.page.waitForTimeout(1000)
        await getXPathAndClick(this.page,this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
    } 
      
    }
    async createCardLayout(action,fieldName){
        await getXPathAndClick(this.page, this.editCardLayout)
            switch(action){
            case "title":
                await getXPathAndClick(this.page, this.addFieldButtonTitle)
                if(await isElementExistsbyXPath(this.page,this.valueFromDropDownCardLayout.replace("{{0}}", `"${fieldName}"`))){
                    await getXPathAndClick(this.page,this.valueFromDropDownCardLayout.replace("{{0}}", `"${fieldName}"`))
                  }
                  else{
                    await getXPathAndClick(this.page, this.addFieldButtonTitle)
                      }
                break;
            case "subTitle":
                await getXPathAndClick(this.page, this.addFieldButtonSubTitle)
                if(await isElementExistsbyXPath(this.page,this.valueFromDropDownCardLayout.replace("{{0}}", `"${fieldName}"`))){
                    await getXPathAndClick(this.page,this.valueFromDropDownCardLayout.replace("{{0}}", `"${fieldName}"`))
                }else{
                    await getXPathAndClick(this.page, this.addFieldButtonSubTitle)    
                }

                break;
            case "fullTitle":
                await getXPathAndClick(this.page, this.addFieldButtonTitle)
                await getXPathAndClick(this.page,this.valueFromDropDownCardLayout.replace("{{0}}", `"${fieldName}"`))
                await this.page.waitForXPath(this.addFieldButtonSubTitle)
                await getXPathAndClick(this.page, this.addFieldButtonSubTitle)
                await getXPathAndClick(this.page,this.valueFromDropDownCardLayout.replace("{{0}}", `"${fieldName}"`))
                break;
            default: throw new Error(`${action} field is not exists or not entered correctly`)    

        }
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.DONE}"`))//"Done"
        await this.page.waitForTimeout(1000)
        // await this.page.waitForXPath(this.primaryButtonByText.replace("{{0}}",  `"${Trans.keys.GENERAL.SAVE}"`))
        if(await isElementExistsbyXPath(this.page, this.primaryButtonByText.replace("{{0}}",  `"${Trans.keys.GENERAL.SAVE}"`))){
            await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}",  `"${Trans.keys.GENERAL.SAVE}"`))//'"Save"'
        }
       
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))//"Close"
        await waitAndClick(this.page,this.upperIconRA)
        
    }
   async navigateToEntity(entity,entityType,tab=null){
    await waitAndClick(this.page,this.upperIconConfig)
    await this.clickLeftLinkInfra([`${entity}`])//"Assets" "form"
    await getXPathAndDoubleClick(this.page,this.cuAggregationByName.replace("{{0}}", `"${entityType}"`))
    if(tab){
        await getXPathAndClick(this.page, this.tabTitleCommon.replace("{{0}}", `"${tab}"`))
    }
   }
   async navigateToWO(rowTable){
    await waitAndClick(this.page,this.upperIconConfig)
    await this.page.waitForTimeout(200)
    await this.clickLeftLinkInfra(["Work Orders"])
    //await this.page.waitForXPath('//*[@data-automation-web="table-title"][contains(., "Work Order Types")]', { timeout: 5000 })
    await this.page.waitForXPath(this.workOrderRowTable.replace("{{0}}", '"Work Order Types"'), { timeout: 5000 })
    await this.clickRowInTable(rowTable) 
   }
   async navigateToMaterialReconciliation(rowTable){
    await waitAndClick(this.page,this.upperIconConfig)
    await this.page.waitForTimeout(200)
    await this.clickLeftLinkInfra(["Material Reconciliation"])
    await getXPathAndClick(this.page, this.tabTitleCommon.replace("{{0}}", '"Asset Types"'))
    await this.clickRowInTable(rowTable)

   }
   // entityState value allowed "Activate" "Inactivate"
   async activeInactivateButtonState(entityState){ 
    const btnState=await getText(this.page,this.activeInactiveBtn)
     if(btnState !== entityState){
            await this.page.waitForXPath(this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`), { timeout: 5000 })
            await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))

        }
        if(btnState === entityState){
            switch(entityState){
                case "Activate":
                    await getXPathAndClick(this.page,this.specificActivateButtonConfiguration)    
                    break;
                case "Inactivate":
                    await getXPathAndClick(this.page,this.specificInactivateButtonConfiguration)
                    break    
            }
            if (await isElementExistsbyXPath(this.page, this.popupContainerByText.replace("{{0}}", `"You are about to"`))){
                await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${btnState}"`)) 
            }
            await this.page.waitForXPath(this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`), { timeout: 5000 })
            await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
            await this.page.waitForXPath(this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`), { timeout: 5000 })
            await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))   

        }
   }
} 