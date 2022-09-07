const { waitAndClick, getXPathAndClick, getXPathAndDoubleClick, getXPathAndType, getElementFromArrayByIndex, waitXpathNotExist} = require('../common/locateHelpers')
const InfraPage = require('./a_infra_superPage')
import Trans from '../translation/language'
module.exports =  class UserManagement extends InfraPage{

    constructor(page) {
        super(page)       
    }

    //these are element selectors
    
    usersCell = '//*[contains(@class, "ag-cell")]'
    userNameLink = 'div.user-name'
    //signOut = 'button.mat-menu-item' // replaced by signOutBtn xpath
    userMenu = 'lv-user-menu'
    //user settings edit 
    resetPassword = `//*[contains(text(),"${Trans.keys.USERS.RESET_PASSWORD}")]`//"Reset password for user"

    infoIconPolicies = '//*[contains(text(), {{0}})]//ancestor::cdk-virtual-scroll-viewport//*[contains(@class, "icon-info")]'
    infoIconSCC = '.clickable-icon.icon-info'
    viewSummaryLink = '//*[contains(@class, "view-summary-text")][contains(text(), {{0}})]'
    viewPermissions = `//*[contains(@class, "view-permissions-text")][contains(text(),"${Trans.keys.USERS.VIEW_USERS_PERMISSIONS}")]`//"Permissions"
    members_policies_tabs = '//div[contains(@class, "mat-tab-label-content")][contains(text(), {{0}})]'
    noGroupsPicture = '//div[contains(@class, "icon-no-groups")]'
    userSettinsBlockXpath=`//*[@class='body'][contains(.,"${Trans.keys.USERS.USERNAME}")]`//'Username'
    counterOnSecondCardTab = '//*[contains(@class, "mat-tab-label-content")][contains(text(), {{0}})]/*'

    generatePassword = '//*[contains(@class, "lv-password-generate")]'
    previewPassword = '//span[contains(@class, "lv-password-field-preview")]'
    emailStatus = '//lv-email//*[contains(@class, "lv-email-validation")]'
    verifyEmailLink = '//*[contains(@class, "icon-email-verification")]'
    sendEmailSCC = ".lv-base-message-icon.icon-email-verification"
    sendEmailInstruction = '//*[contains(@class, "lv-base-message-instructions")]'
    sendVerificationBtn = "//button[normalize-space()='Send']"
    
    //popup buttons
       
    //user settings create 
    userNameFormField =`//*[contains(text(),"${Trans.keys.USERS.USERNAME}")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//input`// "Username"
    //passwordFormField = '//lv-password-field//input'
    //passwordFormField = '//*[contains(text(), "Password")]//ancestor::*[contains(@class,"dynamic-field-wrapper")]//*[contains(@class, "mat-input-element")]'
    passwordFormField =`//*[contains(text(),"${Trans.keys.USERS.PASSWORD}")]//ancestor::*[contains(@class,"dynamic-field-wrapper")]//*[contains(@class, "pass-input")]` //"Password"
    firstNameFormField = `//*[contains(text(),"${Trans.keys.USERS.FIRST_NAME}")]//ancestor::*[not(contains(@ng-reflect-required,"true"))]/*[@data-automation-web="dynamic-field-wrapper"]//input`//"First Name"
    lastNameFormField = `//*[contains(text(),"${Trans.keys.USERS.LAST_NAME}")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//input`// "Last Name"
    emailFormField = `//*[contains(text(),"${Trans.keys.USERS.EMAIL}")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//input`//"Email"
    phoneFormField = `//*[contains(text(),"${Trans.keys.USERS.PHONE_NUMBER}")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//input`//"Phone"
    additionalFormField = `//*[contains(text(),"${Trans.keys.USERS.ADDITIONAL_INFO}")]//ancestor::*[@data-automation-web="dynamic-field-wrapper"]//textarea`//"Additional"
    
    //these are variables used on this page

    newUsername = 'newUser'
    newPassword = 'nElena!123'
    resetedPassword = 'nNew!456'
    newFirstName = 'newFirstName'
    newAddInfo = 'additional_info'
    newAddInfo2 = 'just info'
    userToDeleteFields = 'TestC'
    userNameWithComma = 'User,Comma'
    questionMark = '//*[contains(@class, "lv-password-field-info")]'
    
    viewMembership = `//*[contains(@class, "view-summary-text")][contains(text(),"${Trans.keys.GROUPS.VIEW_GROUPS_MEMBERSHIP}")]`//"View Group Membership"

    //these are methods used on this page

    async waitUntilVisible (xpath) {
        await this.page.waitForXPath(xpath, { visible: true})
    }
    
    async checkPolicyOrGroupByName(fieldName) {        
        let handledPath = this.checkBoxByText2        
        handledPath = await handledPath.replace('{{0}}', `"${fieldName}"`)        
        const el = await this.page.waitForXPath(handledPath)
        await el.click()
    }
    async addUserDontCreate(newUsername, newPassword, newFirstName, newAddInfo, policyName) {
        await waitAndClick(this.page, this.addButton)        
        await this.page.waitForXPath(this.pageTitle.replace("{{0}}",`"${Trans.keys.USERS.USER_SETTINGS}"`))//'"User Settings"'
        await getXPathAndClick(this.page, this.members_policies_tabs.replace("{{0}}", `"${Trans.keys.USERS.POLICIES}"`))//'"Policies"'
        await getXPathAndType(this.page, this.userNameFormField, newUsername)      
        await getXPathAndType(this.page, this.passwordFormField, newPassword)
        await getXPathAndType(this.page, this.firstNameFormField, newFirstName)
        await getXPathAndType(this.page, this.additionalFormField, newAddInfo)
        await this.checkPolicyOrGroupByName(policyName)
    }

    async addUserAndCreate(newUsername, newPassword, newFirstName, newAddInfo, policyName) {        
        await this.addUserDontCreate(newUsername, newPassword, newFirstName, newAddInfo, policyName)        
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}",`"${Trans.keys.ACTION.SAVE}"`))//'"Save"'
        await waitXpathNotExist(this.page,this.primaryButtonByText.replace("{{0}}",`"${Trans.keys.ACTION.SAVE}"`))
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}",`"${Trans.keys.GENERAL.CLOSE}"`))
        await waitXpathNotExist(this.page,this.primaryButtonByText.replace("{{0}}",`"${Trans.keys.GENERAL.CLOSE}"`))
    }

    async editUserFieldAndSave(field, value) {
        //first user
        await getXPathAndClick(this.page, this.tableArrayXPathInfra)
        await getXPathAndDoubleClick(this.page, this.tableArrayXPathInfra)
        await waitAndClick(this.page, this.editIcon)
        await getXPathAndType(this.page, field, value)
        //await this.page.waitForTimeout(1000)
        await this.saveAndCloseUserEditBlock()// replase the following 2 lines
        
        
    }
    async editUserFieldDontSave(field, value) {
        await getXPathAndClick(this.page, this.tableArrayXPathInfra)
        await getXPathAndDoubleClick(this.page, this.tableArrayXPathInfra)
        //await this.page.waitForTimeout(1000)
        await waitAndClick(this.page, this.editIcon)
        await getXPathAndType(this.page, field, value)
        //await this.page.waitForTimeout(1000)
    }

    async dontSave() {
        await getXPathAndClick(this.page, this.secondaryButtonByText.replace("{{0}}",`"${Trans.keys.GENERAL.CANCEL}"`)) //'"Cancel"'
        await getXPathAndClick(this.page, this.secondaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.DISCARD}"`))//'"Discard"'
        await this.page.waitForTimeout(1000)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
    }


    async inactivate() {
        await getXPathAndClick(this.page, this.tableArrayXPathInfra)
        await getXPathAndDoubleClick(this.page, this.tableArrayXPathInfra)
        await getXPathAndClick(this.page, this.toggleByText.replace('{{0}}',`"${Trans.keys.USERS.INACTIVE}"`))//'"Inactive"'
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.ACTION.INACTIVATE}"`))//'"Inactivate"'
        await this.page.waitForTimeout(500)
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
    }

    async activate() {
        await getXPathAndClick(this.page, this.tableArrayXPathInfra)
        await getXPathAndDoubleClick(this.page, this.tableArrayXPathInfra)
        await getXPathAndClick(this.page, this.toggleByText.replace('{{0}}',`"${Trans.keys.USERS.ACTIVE}"`))// '"Active"'
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}",`"${Trans.keys.ACTION.ACTIVATE}"` ))//'"Activate"'
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))
    }

    async saveAndCloseUserEditBlock()
    {
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))//click on save         
        await getXPathAndClick(this.page, this.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))//close the popup
    }

   

}