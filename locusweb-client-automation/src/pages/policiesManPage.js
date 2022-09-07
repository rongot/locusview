import Trans from '../translation/language'

const GroupManPage = require('./groupManPage')
const { waitAndClick, getXPathAndClick, getXPathAndType} = require('../common/locateHelpers')


module.exports = class PoliciesManagement extends GroupManPage {

    constructor(page) {
        super(page)
    }

    //these are element selectors
    //main view
    descriptionTitle = '//div[@class="description-title"]'
    policiesList = '//div[@class="grid-item-title"]'
    validateTitles = [
        'Admin',
        'Approver',
        'Configurator',
        'Editor',
        'Initial',
        'Mobile',
        'Viewer'
    ]
    //
    firstCardTitle = '//span[@class="text-ellipsis ng-star-inserted"]' // this is 2 elements array
    firstCardTitles = [
        'Properties',  //[0]
        'Projects Permissions', //[1]
        'Work Units Permissions', //[2]
        'Assets Permissions', //[3]
        'Forms Permissions' //[4]
    ]

    contentCards = '.item-card-actions'

    //policies settings create

    tabLists = '//div[@class="mat-tab-list"]' // we have 2 tab lists on Policy settings page
    errorTopMenuSign = 'lv-validation-tip > div.lv-validation-container > div.icon-alert'
    innerCheckBox = '//mat-pseudo-checkbox'

    secondCardTabs = '//div[contains(@class, "mat-tab-label-content")]'
    secondCardDetailsTab = `//div[contains(@class, "mat-tab-label-content")][contains(text(),"${Trans.keys.POLICIES.TABS.DETAILS}")]`//"Details"
    secondCardFields = '//mat-select'
    yesDropdownValue = `//span[@class="mat-option-text"]/div/div[contains(text(),"${Trans.keys.GENERAL.YES}")]`//"Yes"
    noDropdownValue = `//span[@class="mat-option-text"]/div/div[contains(text(),"${Trans.keys.GENERAL.NO}")]`// "No"
    inProgressValue = '//div[contains(text(), "in Progress")]//ancestor::div[contains(@class, "mat-form-field-infix")]//span[contains(@class, "mat-select-value-text")]/span'
    editIconPerCardEditorPage='//*[contains(text(), {{0}})]//ancestor::lv-editor-card//*[contains(@class,"icon-edit")]'
    
    //these are variables used on this page
    policyT = "Test Policy"
    reviewAndApprovePolicy = "R&A_Policy"

    //these are methods used on this page

    async collectTitles() {
        const allTitles = []
        await this.page.waitForXPath(this.tableTitle.replace('{{0}}',`"${Trans.keys.USERS.POLICIES}"`))// '"Policies"'
        const policiesList = await this.page.$x(this.tableRowName.replace('{{0}}', '""'))

        for (let i = 0; i < policiesList.length; i++) {
            const text = await policiesList[i].evaluate(option => option.innerText)
            //console.log(text)
            allTitles.push(text)
        }

        return allTitles
    }

    async clickUpperTab(xpath) {
        await getXPathAndClick(this.page, xpath)
    }

    async createPolicy(policyName) {
        await waitAndClick(this.page, this.addButton)
        await getXPathAndType(this.page, this.inputByFieldName.replace('{{0}}', '"Policy Name"'), policyName)
    }



    async savePolicy() {
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
        await this.page.waitForSelector(this.addButton)
    }

    async openProjectPermissions(policyName) {
        await this.clickRowInTable(policyName)
        await this.clickUpperTab(this.upperTabByName.replace('{{0}}', `"${Trans.keys.POLICIES.TABS.PROJECTS_PERMISSIONS}"`)) //Work Order Permissions
        await this.page.waitForXPath(this.toggleByText.replace('{{0}}', '"All Types"'))
    }

    async openAssetsPermissions(policyName) {
        await this.clickRowInTable(policyName)
        await this.clickUpperTab(this.upperTabByName.replace('{{0}}', `"${Trans.keys.POLICIES.TABS.ASSETS_PERMISSIONS}"`))
        await this.page.waitForXPath(this.toggleByText.replace('{{0}}', '"All Types"'))
    }

    async openFormsPermissions(policyName) {
        await this.clickRowInTable(policyName)
        await this.clickUpperTab(this.upperTabByName.replace('{{0}}', `"${Trans.keys.POLICIES.TABS.FORMS_PERMISSIONS}"`))
        await this.page.waitForXPath(this.toggleByText.replace('{{0}}', '"All Types"'))
    }

    async openJointsPermissions(policyName) {
        await this.clickRowInTable(policyName)
        await this.clickUpperTab(this.upperTabByName.replace('{{0}}', `"${Trans.keys.POLICIES.TABS.JOINTS_PERMISSIONS}"`))
        await this.page.waitForXPath(this.toggleByText.replace('{{0}}', '"All Types"'))
    }

    async openWUPermissions(policyName) {
        await this.clickRowInTable(policyName)
        await this.clickUpperTab(this.upperTabByName.replace('{{0}}', `"${Trans.keys.POLICIES.TABS.WORK_UNITS_PERMISSIONS}"`))
        await this.page.waitForXPath(this.toggleByText.replace('{{0}}', '"All Types"'))
    }

    async uncheckSelected(index, xpath, entityPosition) {
        await this.clickEdit(index)
        await this.clickUpperTab(xpath)
        await getXPathAndClick(this.page, this.toggleByText.replace('{{0}}', '"Specific Types"'))
        await this.checkByIndex(entityPosition)
        await getXPathAndClick(this.page, this.toggleByText.replace('{{0}}', '"All Types"'))
        await this.page.waitForTimeout(3000)

    }

}