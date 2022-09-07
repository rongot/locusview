const builder = require('../../../common/builder')
const LoginPage = require('../../../pages/loginPage')
const SuperPage = require('../../../pages/a_infra_superPage')
const UserManPage = require('../../../pages/userManPage')
const ResourcesPage = require('../../../pages/resourcesPage')
const ConfigurationPage = require('../../../pages/configurationGeneralPage')
const V3ReviewAndApprovePage = require('../../../pages/v3ReviewAndApprovePage')
const V3ProjectManagementPage = require('../../../pages/v3projectManagementPage')
const NewApiRequests = require('../../../apiRequests/newAPI_Requests')
const NewApiRequestsMapping = require('../../../apiRequests/newAPI_RequestsMapping')
const GroupManPage = require('../../../pages/groupManPage')
const { apiCreateMobilePolicy, bodyForCreateAsset, createProjectWitAssetAndRequiredResetFieldBody, createAssetWithIndexFieldBody } = require('../../../apiRequests/bodyForBlankEnvRequests')
const { userWithPolicyBody, apiCreateProjectType, createAssetBody, createProjectWitAssetBody, createAlertWithAssetBody, bodyForCreateProject } = require('../../../apiRequests/requests')

const chai = require('chai');
const assert = chai.assert;
//const ScreenshotTester = require('puppeteer-screenshot-tester')

let { baseURL, baseURL2 } = require('../../../config/configuration')
const { isElementExistsbyXPath, isElementExists } = require('../../../common/assertHelpers')
const { mouseHoverSelector, getXPathAndClick, getInnerText, getXPathAndType, waitAndClick, getInnerHTML,
    getCountByXPath, waitSelectorNotExist, waitXpathNotExist, clearValueBackspaceXPath } = require('../../../common/locateHelpers');
import Trans from '../../../translation/language'
import TransEN from '../../../translation/en'
const { StringHelper } = require('../../../common/stringHelper')

const forEach = require('mocha-each');


//const { all } = require('core-js/fn/promise');,

describe("#newFullFlow #fastSmoke Smoke tests for Continuous Integration", () => {
    let page
    let v3PMpage
    let loginPage
    let userManPage
    let resourcesPage
    let v3ReviewAndApprovePage
    let configurationGeneralPage
    let groupManPage
    let apiR
    let apiRMap
    let superPage
    let token
    let tokenMobile
    let body
    let projectsTitles = ["A Test1 project ", "A Mobile project ", "A Draft project "]
    let response
    let newPolicyID
    let policyID
    let newUserID, userName, password = "nElena!123"
    let newUser2ID, userName2
    let projectTypeID
    let projectTypeName = "Project1"
    let assetTypeID
    let assetName = "AssetTyp1_"
    let assetCustomFieldID
    let projectID
    let projectIDs = []
    let assetID
    let projectTypeRequiredID
    let projectTypeRequiredName = "ProjectWithRequired1"
    let groupName = "Group A"


    //let tester

    before(async () => {
        //baseURL=baseURL2
        apiR = new NewApiRequests()
        apiRMap = new NewApiRequestsMapping()
        superPage = new SuperPage()
        token = await apiR.authenticate(superPage.adminUsername, superPage.adminPassword)



        //tester = await ScreenshotTester(0.9)
    })

    after(async () => {
        await builder.closeBrowser()
    })
    describe("Create tests preconditions via API", () => {
        // 1. Create 2 new users 1 Initial 1 mobile
        // 2. Create Mobile policy
        it("Create Mobile policy", async () => {

            //create policy
            let policyName = await StringHelper.addTimestampToText("Mobile")
            let policyBody = apiCreateMobilePolicy(policyName)
            response = await apiR.postGeneralRestCall(apiR.policyURL, token, policyBody)
            newPolicyID = response.data.id

            assert.equal(response.status, 200, "Policy has NOT been created")
            assert.isNotNull(newPolicyID, `new policy id does not exist`)
        })
        it("Create new user with mobile policy", async () => {
            //assign policy to a new User
            userName = await StringHelper.addTimestampToText("mobileUser")
            body = userWithPolicyBody(userName, [newPolicyID])
            response = await apiR.postGeneralRestCall(apiR.userURL, token, body)
            newUserID = response.data.id

            assert.equal(response.status, 200, "Policy has NOT been created")
            assert.isNotNull(newUserID, `new user id does not exist`)

        })

        // get existing policy id Initial
        //create new user with existing policy
        it("Create new user with existing policy Initial", async () => {
            // policyID= await apiR.getIdByNameFromArray(apiR.policyURL+"/preview",token,"Initial")
            // console.log("Initial ID:", policyID)
            response = await apiR.getGeneralRestCall(apiR.policyURL + "/preview", token)
            for (const policy of response.data) {
                if (policy.name == "Initial") {
                    policyID = policy.id
                    break;
                }
            }
            // console.log("Initial policy ID:", policyID)
            //assign policy to a new User
            let userName = await StringHelper.addTimestampToText("initialUser")
            body = userWithPolicyBody(userName, [policyID])
            response = await apiR.postGeneralRestCall(apiR.userURL, token, body)
            newUser2ID = response.data.id
            assert.equal(response.status, 200, "User has NOT been created")
            assert.isNotNull(newUser2ID, `new user id does not exist`)

        })
        // 3. Create asset type - empty catalog
        it("create new Asset type - empty catalog", async () => {
            let assetName = await StringHelper.addTimestampToText("EmptyCatalogAassetTyp_")
            response = await apiR.postGeneralRestCall(apiR.assetTypeURL, token, createAssetWithIndexFieldBody(assetName, true))
            assetTypeID = response.data.id
            assetCustomFieldID = response.data.layout.sections[0].fields[0].key
            //console.log("custom field ID: " + assetCustomFieldID)
            assert.equal(response.status, 200, 'Asset type has NOT been created')
        })

        // 4. Create asset type
        it("create new Asset type", async () => {
            assetName = await StringHelper.addTimestampToText(assetName)
            response = await apiR.postGeneralRestCall(apiR.assetTypeURL, token, createAssetWithIndexFieldBody(assetName, true))
            assetTypeID = response.data.id
            assetCustomFieldID = response.data.layout.sections[0].fields[0].key
            //console.log("custom field ID: " + assetCustomFieldID)
            assert.equal(response.status, 200, 'Asset type has NOT been created')
        })
        // 5. Create project type
        it("create new Project type with Asset for Options", async () => {
            projectTypeName = await StringHelper.addTimestampToText(projectTypeName)

            body = createProjectWitAssetBody(assetTypeID, projectTypeName)
            response = await apiR.postGeneralRestCall(apiR.projectTypeURL, token, body)
            projectTypeID = response.data.id
            assert.equal(response.status, 200, 'Project type has NOT been created')
        })
        // 6. Add alert
        it("create new Alert Type based on new Project", async () => {
            let alertName = await StringHelper.addTimestampToText("alert1")
            let body = createAlertWithAssetBody(projectTypeID, assetTypeID, assetCustomFieldID, alertName)
            response = await apiR.postGeneralRestCall(apiR.alertTypeURL, token, body)
            let alertID = response.data.id
            //console.log("Alert id:" + alertID)
            assert.equal(response.status, 200, 'Alert Type has NOT been created')
        })
        // 7. Create 2 projects with new user + create project with test1 user

        it("Create project with test1 user", async () => {
            let projectNameTest1 = await StringHelper.addTimestampToText(projectsTitles[0])
            projectsTitles[0] = projectNameTest1
            let body = bodyForCreateProject(projectTypeID, "IN_PROGRESS", projectNameTest1)

            response = await apiR.postGeneralRestCall(apiR.projectURL, token, body)
            projectID = response.data.id
            projectIDs.push(projectID)
            assert.equal(response.status, 200, `Project1 has NOT been created: ${response.data} `)
            assert.isNotNull(projectID, `Project id does not exist`)

        })
        it("Create project with mobile user", async () => {
            tokenMobile = await apiR.authenticate(userName, password)
            let projectNameMobile = await StringHelper.addTimestampToText(projectsTitles[1])
            projectsTitles[1] = projectNameMobile
            let body = bodyForCreateProject(projectTypeID, "IN_PROGRESS", projectNameMobile)

            response = await apiR.postGeneralRestCall(apiR.projectURL, tokenMobile, body)
            projectID = response.data.id
            projectIDs.push(projectID)
            assert.equal(response.status, 200, `Project1 has NOT been created: ${response.data} `)
            assert.isNotNull(projectID, `Project id does not exist`)

        })
        // 8. Create Asset in mobile project

        it("Add assets to mobile project", async () => {
            let body = bodyForCreateAsset(assetTypeID, projectIDs[1], projectIDs[1])

            response = await apiR.postGeneralRestCall(apiR.assetURL, tokenMobile, body)
            assetID = response.data.id

            assert.equal(response.status, 200, `Asset has NOT been created: ${response.data} `)
            assert.isNotNull(assetID, `Asset id does not exist`)
        })

        it("Map added asset in mobile project", async () => {
            //Map Asset - 2 points
            let startLatitude1 = 32.1592049011
            let startLongitude1 = 34.8089523418
            const result = await apiRMap.mapPoints(tokenMobile, assetID, projectIDs[1], "ASSET", startLatitude1, startLongitude1, 2)
            //console.log(result)
            assert.equal(result.links.length, 2)
        })
        // 9. Cause alert to appear in project
        // 10. Map asset in small distance to have cluster
        forEach([[32.1593049011, 34.8088523418], [32.1593549011, 34.8089023418]]).
            it("Add assets to test1 project - asset with alert and map asset location: %s, %s ", async (startLatitude1, startLongitude1) => {
                let body = bodyForCreateAsset(assetTypeID, projectIDs[0], projectIDs[0])
                let customFields = JSON.parse(`{"customFields":{"${assetCustomFieldID}":"L1"}}`)

                //console.log(customFields)
                body = { ...body, ...customFields }
                //console.log(body)
                response = await apiR.postGeneralRestCall(apiR.assetURL, token, body)
                assetID = response.data.id

                assert.equal(response.status, 200, `Asset has NOT been created: ${response.data} `)
                assert.isNotNull(assetID, `Asset id does not exist`)

                //Map Asset - 2 points

                const result = await apiRMap.mapPoints(token, assetID, projectIDs[0], "ASSET", startLatitude1, startLongitude1, 2)
                //console.log(result)
                assert.equal(result.links.length, 2)
            })



        // 11. Project users - Contributors, Permitted
        // 12. create project type with required field
        it("create new Project type with Asset for Options and required field", async () => {
            projectTypeRequiredName = await StringHelper.addTimestampToText(projectTypeRequiredName)

            body = createProjectWitAssetAndRequiredResetFieldBody(assetTypeID, projectTypeRequiredName, "Required Text Field")
            response = await apiR.postGeneralRestCall(apiR.projectTypeURL, token, body)
            projectTypeRequiredID = response.data.id
            assert.equal(response.status, 200, 'Project type has NOT been created')

        })
        //13. create draft project
        it("Create project in Draft status", async () => {

            let projectNameDraft = await StringHelper.addTimestampToText(projectsTitles[2])
            projectsTitles[2] = projectNameDraft
            let body = bodyForCreateProject(projectTypeRequiredID, "DRAFT", projectNameDraft)

            response = await apiR.postGeneralRestCall(apiR.projectURL, token, body)
            projectID = response.data.id
            projectIDs.push(projectID)
            assert.equal(response.status, 200, `Project1 has NOT been created: ${response.data} `)
            assert.isNotNull(projectID, `Project id does not exist`)

        })

        //14. add reconciliation

        it("Add recon actions", async () => {

            let reconName1 = await StringHelper.addTimestampToText("Received")
            let reconName2 = await StringHelper.addTimestampToText("Broken")
            let body = [{
                "id": -1,
                "actionName": reconName1,
                "actionType": "ADDITION"
            },
            {
                "id": -2,
                "actionName": reconName2,
                "actionType": "DEDUCTION"
            }]

            response = await apiR.putGeneralRestCall(apiR.reconURL + "/actions", token, body)
            assert.equal(response.status, 200, `Project1 has NOT been created: ${response.data} `)
        })

        //15. add shared live list
        it("Add shared live list", async () => {
            let listName = await StringHelper.addTimestampToText("SharedLiveList ")

            body = {
                "id": -1,
                "name": listName,
                "live": true,
                "type": "[configuration] Create live list"
            }

            response = await apiR.postGeneralRestCall(apiR.sharedListURL, token, body)
            assert.equal(response.status, 200, `Project1 has NOT been created: ${response.data} `)
        })


    })
    describe("Smoke tests for Continuous Integration", () => {
        after(async () => {
            Trans.keys = TransEN.keys
        })
        before(async () => {
            Trans.keys = TransEN.keys

            page = await builder.build('LargeScreen');
            loginPage = new LoginPage(page)
            userManPage = new UserManPage(page)
            resourcesPage = new ResourcesPage(page)
            v3PMpage = new V3ProjectManagementPage(page)
            configurationGeneralPage = new ConfigurationPage(page)
            v3ReviewAndApprovePage = new V3ReviewAndApprovePage(page)
            groupManPage = new GroupManPage(page)
            await loginPage.visit(baseURL)
            await loginPage.login(superPage.adminUsername, superPage.adminPassword)
            await page.waitForNavigation(`${baseURL}/app/main/review/projects`)
        })


        describe(" Scanning Review and Approve page", () => {

            it("tooltip text exists on R&A icon", async () => {
                const tooltip = await isElementExistsbyXPath(page, v3ReviewAndApprovePage.reviewTooltip)
                assert.isTrue(tooltip, `tooltip text not found on R&A icon, ${v3ReviewAndApprovePage.reviewTooltip}`)
            })

            it("'My Projects' section is displayed and opened", async () => {
                //looking for related collapse icon --> assume that the section is opened
                const myProjectsSection = await isElementExistsbyXPath(page, v3ReviewAndApprovePage.collapseMyProjects)
                assert.isTrue(myProjectsSection, `My Projects section expected to be displayed but not found: ${v3ReviewAndApprovePage.collapseMyProjects}`)
            })

            it("'All Projects' section is displayed and closed", async () => {
                //looking for related expand icon --> assume that the section is closed
                const myProjectsSection = await isElementExistsbyXPath(page, v3ReviewAndApprovePage.expandAllProjects)
                assert.isTrue(myProjectsSection,
                    `All Projects section expected to be displayed and closed but not found: ${v3ReviewAndApprovePage.expandAllProjects}`)
            })

            it("clusters displayed on map by default", async () => {
                for (let index = 0; index < 6; index++) {
                    await waitAndClick(page, v3ReviewAndApprovePage.toolBarIconMinus)
                }

                const doughnutPie = await isElementExistsbyXPath(page, v3ReviewAndApprovePage.cluster)
                assert.isTrue(doughnutPie,
                    `Clusters expected to be displayed by default but not found: ${v3ReviewAndApprovePage.cluster}`)
            })

            it("can open related preview on map", async () => {
                const pathPreview = `//*[contains(text(), "${projectsTitles[0]}")]//ancestor::lv-recent-list-item//*[contains(@class, "icon-go-to")]`
                await page.waitForXPath(`//*[contains(text(), "${projectsTitles[0]}")]`)
                const projectName = await page.$x(`//*[contains(text(), "${projectsTitles[0]}")]`)
                await projectName[0].hover()
                await page.waitForTimeout(500)
                await getXPathAndClick(page, pathPreview)
                const reviewPopup = await isElementExistsbyXPath(page, v3ReviewAndApprovePage.mapSummaryPopup)
                assert.isTrue(reviewPopup, `Summary Popup is not displayed, ${v3ReviewAndApprovePage.mapSummaryPopup} not found`)
            })

            it("toolbar displayed on map", async () => {
                await v3ReviewAndApprovePage.clickLeftLinkDiv([projectsTitles[0]])
                const searchGeoButton = await isElementExists(page, v3ReviewAndApprovePage.searchGeoButton)
                const toolBarMeasure = await isElementExistsbyXPath(page, v3ReviewAndApprovePage.toolBarMeasure)
                assert.isTrue(searchGeoButton, `Search button is not found on toolbar, ${v3ReviewAndApprovePage.searchGeoButton}`)
                assert.isTrue(toolBarMeasure, `Measurement button is not found on toolbar, ${v3ReviewAndApprovePage.toolBarMeasure}`)
            })

            it("can open Project-> validate Left Menu links", async () => {
                await v3ReviewAndApprovePage.clickLeftLinkInfra([Trans.keys.REVIEW.HEADERS.LIFECYCLE_REVIEW]) //"Lifecycle Review"
                const cardTitleLifecycle = await getInnerText(page, v3ReviewAndApprovePage.cardTitle, 0)
                await v3ReviewAndApprovePage.clickLeftLinkInfra([Trans.keys.REVIEW.HEADERS.ALERTS_OVERVIEW])//"Alerts Overview"
                const cardTitleAlerts = await getInnerText(page, v3ReviewAndApprovePage.cardTitle, 0)
                await v3ReviewAndApprovePage.clickLeftLinkInfra([Trans.keys.REVIEW.HEADERS.MATERIALS])//"Materials"
                await v3ReviewAndApprovePage.clickLeftLinkInfra([Trans.keys.REVIEW.HEADERS.BOM])//"BOM"
                const cardTitleBOM = await getInnerText(page, v3ReviewAndApprovePage.cardTitle, 0)
                assert.equal(cardTitleLifecycle, Trans.keys.REVIEW.HEADERS.LIFECYCLE_REVIEW, "Lifecycle Review details card is not opened")//"Lifecycle Review"
                assert.equal(cardTitleAlerts, Trans.keys.REVIEW.HEADERS.ALERTS_OVERVIEW, "Alerts Overview details card is not opened")//"Alerts Overview"
                assert.equal(cardTitleBOM, Trans.keys.REVIEW.HEADERS.BOM, "BOM details card is not opened")
            })

            it("can open Project-> validate Alerts tab", async () => {
                await v3ReviewAndApprovePage.clickLeftLinkInfra([Trans.keys.REVIEW.HEADERS.WORK_OVERVIEW])//"Work Order Overview"
                await v3ReviewAndApprovePage.clickTab(Trans.keys.REVIEW.TABS.ALERTS)//"Alerts"
                const emptyAlertsState = await isElementExistsbyXPath(page, v3ReviewAndApprovePage.warningEmptyIcon)
                assert.isTrue(emptyAlertsState, `Empty state for Alerts expected to be displayed, 
                ${v3ReviewAndApprovePage.warningEmptyIcon} not found`)
            })

            it("can open Project-> validate Users tab", async () => {
                await v3ReviewAndApprovePage.clickTab(Trans.keys.USERS.USERS)//"Users"
                const pathUsersTitleC = v3PMpage.pathUsersTitle.replace('{{0}}', Trans.keys.USERS.CONTRIBUTORS)//"Contributors"
                const pathUsersTitleP = v3PMpage.pathUsersTitle.replace('{{0}}', Trans.keys.USERS.PERMITTED)// "Permitted"
                const contributorsSection = await isElementExistsbyXPath(page, pathUsersTitleC)
                const permittedSection = await isElementExistsbyXPath(page, pathUsersTitleP)
                assert.isTrue(contributorsSection, `User Section not found, ${pathUsersTitleC}`)
                assert.isTrue(permittedSection, `User Section not found, ${pathUsersTitleP}`)
            })

            it("can open Project-> edit Project details --> save", async () => {
                await v3ReviewAndApprovePage.clickTab(Trans.keys.REVIEW.TABS.DETAILS)// "Details"
                await getXPathAndClick(page, v3ReviewAndApprovePage.editIconI)
                let projectNameFieldXP = await v3ReviewAndApprovePage.inputByFieldName.replace("{{0}}", `"${projectTypeName}"`)
                await getXPathAndClick(page, projectNameFieldXP)
                await clearValueBackspaceXPath(page,projectNameFieldXP, 0)
                await getXPathAndType(page, projectNameFieldXP, `${projectsTitles[0]}_1`)//"Project Name" ${Trans.keys.PROJECT_MANAGEMENT.PROJECT_NAME}
                await getXPathAndClick(page, v3ReviewAndApprovePage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))//"Save"
                await page.waitForTimeout(1000)

                const path = `//*[contains(@class, "main-header-step")]//*[contains(text(), "${projectsTitles[0]}_1")]`
                const nameUpdated = await isElementExistsbyXPath(page, path)
                assert.isTrue(nameUpdated, `Project name expected to be updated, selector not found: ${path}`)
                projectsTitles[0] = `${projectsTitles[0]}_1`
            })

            it("can open Assets-> Second Card displayed", async () => {
                await v3ReviewAndApprovePage.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.ASSETS])//"Assets"
                await getXPathAndClick(page, v3ReviewAndApprovePage.scrollListItemByLabel.replace("{{0}}", `"${assetName}"`))
                await page.waitForTimeout(500)
                const cardTitle = await page.$x(v3ReviewAndApprovePage.cardTitle)
                assert.equal(cardTitle.length, 2, "Expected that 2 cards are opened")

            })
        })

        describe(" Scanning Project Management page", () => {
            before(async () => {
                await page.reload()
                await page.waitForNavigation(`${baseURL}/app/main/review/projects`)
            })
            it("tooltip text exists on PM icon", async () => {
                await mouseHoverSelector(page, v3PMpage.upperIconProject) //pagev3PMpage.upperIcon - mouse hover
                await page.waitForTimeout(1000)
                const tooltipText = await isElementExistsbyXPath(page, v3PMpage.upperIconProjectTooltip)
                assert.isTrue(tooltipText, "Tooltip text is not visible")
            })

            it('can open PM page --> title is correct', async () => {
                await waitAndClick(page, v3PMpage.upperIconProject)//click on upper icon project
                await page.waitForXPath(v3PMpage.projectsContainerTitle)// wait for projects list
                const titleText = await getInnerText(page, v3PMpage.projectsContainerTitle, 0) // get for verification projects table title     
                assert.include(titleText, Trans.keys.PROJECT_MANAGEMENT.PROJECT_MANAGEMENT_TITLE, `the title is: ${titleText}, expected: Work Order Management`)//'Project Management'
            })

            it('project status displayed as a text and a color - draft', async () => {

                const statusDraftXPath = `//*[@role="row" and contains(., "${projectsTitles[2]}")]//*[contains(@class, "status-wrapper")]`
                const textPresented = await getInnerText(page, statusDraftXPath, 0)
                const draftColor = await getInnerHTML(page, statusDraftXPath, 0)


                assert.equal(textPresented.trim(), TransEN.keys.PROJECT_MANAGEMENT.DRAFT)//"Draft" - Limitation -  	LV-3107
                assert.include(draftColor, "background-color: rgb(42, 41, 119)")

            })


            it('columns displayed by default are correct', async () => {
                const elements = await page.$x(v3PMpage.columnName.replace('{{0}}', '""'))
                const titles = []
                for (let x = 0; x < elements.length; x++) {
                    const text = await elements[x].evaluate(e => e.innerText)
                    titles.push(text)
                }
                assert.deepEqual(titles, [Trans.keys.PROJECT_MANAGEMENT.STATUS, Trans.keys.PROJECT_MANAGEMENT.PROJECT_NAME, Trans.keys.PROJECT_MANAGEMENT.PROJECT_TYPE, Trans.keys.PROJECT_MANAGEMENT.CREATION_DATE, Trans.keys.PROJECT_MANAGEMENT.LAST_MODIFICATION_DATE])//['Status', 'Project Name', 'Project Type', 'Creation Date', 'Last Modification Date']
            })


            let projectName = "AA1_"
            it("can create a draft project", async () => {
                projectName = await StringHelper.addTimestampToText(projectName)
                await v3PMpage.createNewProjectDraft(projectName, projectTypeRequiredName, projectTypeRequiredName)
                const statusText = await getInnerText(page, v3PMpage.leftEditStatusXpath, 0)// project status on the left of edit winndow   
                await v3PMpage.backToProjectsList()
                const projectAdded = await isElementExistsbyXPath(page, v3PMpage.tableRowName.replace('{{0}}', `"${projectName}"`))
                assert.include(statusText, Trans.keys.PROJECT_MANAGEMENT.DRAFT, `The status is: ${statusText}, expected "Draft"`)//"Draft"
                assert.isTrue(projectAdded, "New created Project is not displayed in the table")
            })
            it("search option works correctly", async () => {
                const searchString = "AA1"
                await v3PMpage.search(searchString)
                const projectAvailableAtList = await isElementExistsbyXPath(page, v3PMpage.tableRowName.replace("{{0}}", `"${projectName}"`))
                const count = await getCountByXPath(page, v3PMpage.tableRowName.replace("{{0}}", `"${projectName}"`))
                await waitAndClick(page, v3PMpage.clearSearch)
                await waitAndClick(page, v3PMpage.searchButton)// close search
                assert.equal(count, 1, `Number of results items expected:1 but actual:${count}`)
                assert.isTrue(projectAvailableAtList, "Project not available at the results list")
            })
            it("publish button disabled when required fields empty --> publish disabled", async () => {
                //await page.waitForTimeout(1000)
                await v3PMpage.clickRowInTable(projectName)
                const isDisabled = await isElementExistsbyXPath(page,
                    v3PMpage.primaryDisabledButtonByText.replace('{{0}}', `"${Trans.keys.PROJECT_MANAGEMENT.PUBLISH}"`))//"Publish"
                await v3PMpage.backToProjectsList()
                assert.isTrue(isDisabled, "The Publish button is not disabled")
            })

            it("can fill it required fields and publish a project --> revert button displayed", async () => {
                //await page.waitForTimeout(1000)
                await v3PMpage.clickRowInTable(projectName)
                await getXPathAndClick(page, v3PMpage.editIconI)
                await getXPathAndClick(page, v3PMpage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CONTINUE_ANYWAY}"`))//'"Continue Anyway"'
                await v3PMpage.typeFieldText("Required Text Field", "some text")
                await getXPathAndClick(page, v3PMpage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))//'"Save"' click save
                await page.waitForTimeout(1000)
                await getXPathAndClick(page, v3PMpage.primaryButtonByText.replace('{{0}}', `"${Trans.keys.PROJECT_MANAGEMENT.PUBLISH}"`))//'"Publish"'
                await page.waitForTimeout(1000)
                await getXPathAndClick(page, v3PMpage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CHANGE}"`))//'"Change"' publish in publish popup
                await page.waitForTimeout(1000)
                const isRevert = await isElementExists(page, v3PMpage.revertBtnSelector)// revert button is displayed
                await v3PMpage.backToProjectsList()
                assert.isTrue(isRevert, `The revert button doesn't exist ${v3PMpage.revertBtnSelector}`)
            })

            it('project status displayed as a text and a color - new', async () => {
                const statusNewXPath = `//*[@role="row" and contains(.,"${projectName}")]//*[contains(@class, "status-wrapper")]`

                await v3PMpage.search(projectName)
                await isElementExistsbyXPath(page, statusNewXPath)
                await isElementExistsbyXPath(page, statusNewXPath)
                const textPresented2 = await getInnerText(page, statusNewXPath, 0)

                const newColor = await getInnerHTML(page, statusNewXPath, 0)
                await waitAndClick(page, v3PMpage.clearSearch)
                await waitAndClick(page, v3PMpage.searchButton)// close search
                await waitSelectorNotExist(page, v3PMpage.clearSearch, 5)
                assert.equal(textPresented2.trim(), TransEN.keys.PROJECT_MANAGEMENT.NEW)//"New" - Limitation - LV-3107
                assert.include(newColor, "background-color: rgb(116, 179, 206)")
            })

        })

        describe(" Scanning User Management page", () => {

            it("can enter Users page", async () => {
                await waitAndClick(page, v3ReviewAndApprovePage.userButton)
                const userPageLoaded = await isElementExistsbyXPath(page, v3PMpage.tableTitle.replace("{{0}}", `"${Trans.keys.USERS.USERS_LIST}"`))//'"Users List"'
                if (!userPageLoaded) {
                    await page.reload()
                    await waitAndClick(page, v3ReviewAndApprovePage.userButton)
                }
                await page.waitForTimeout(2000)
                assert.equal(page.url(), `${baseURL}/app/main/users/users`)
            })

            it("validates Users page title and default columns", async () => {
                const title = await getInnerText(page, userManPage.tableTitle.replace("{{0}}", '""'), 0)
                await page.waitForXPath(userManPage.columnName2.replace('{{0}}', '""'))
                const elements = await page.$x(userManPage.columnName2.replace('{{0}}', '""'))
                const titles = []
                for (let x = 0; x < elements.length; x++) {
                    const text = await elements[x].evaluate(e => e.innerText)
                    titles.push(text)
                }
                assert.equal(title, `${Trans.keys.USERS.USERS_LIST}`)//"Users List"
                assert.includeMembers(titles, [Trans.keys.USERS.USERNAME, Trans.keys.USERS.FIRST_NAME, Trans.keys.USERS.LAST_NAME,
                    Trans.keys.USERS.EMAIL, Trans.keys.USERS.LAST_ACTIVITY, Trans.keys.USERS.STATUS])
                // assert.deepEqual(titles, [Trans.keys.USERS.USERNAME, Trans.keys.USERS.FIRST_NAME, Trans.keys.USERS.LAST_NAME,
                // Trans.keys.USERS.EMAIL, Trans.keys.USERS.EMAIL_NOTIFICATIONS, Trans.keys.USERS.EMAIL_VERIFICATION, Trans.keys.USERS.LAST_ACTIVITY, Trans.keys.USERS.STATUS])//['Username', 'First Name', 'Last Name', 'Additional Info', 'Last Activity', 'Status']
            })

            it("search icon is displayed", async () => {
                const searchIcon = await isElementExists(page, userManPage.searchButton)
                assert.isTrue(searchIcon, `search icon is not found: ${userManPage.searchButton}`)
            })
            it("can add a new user", async () => {
                let username = await StringHelper.addTimestampToText("smokeUser")
                await userManPage.addUserAndCreate(username, "nElena!123", "smoke", "info", "Initial")
                await userManPage.waitUntilVisible(userManPage.tableTitle.replace('{{0}}', `"${Trans.keys.USERS.USERS_LIST}"`))
                await isElementExistsbyXPath(page, userManPage.tableTitle.replace('{{0}}', `"${Trans.keys.USERS.USERS_LIST}"`))//'"Users List"'
                await isElementExistsbyXPath(page, userManPage.tableTitle.replace('{{0}}', `"${Trans.keys.USERS.USERS_LIST}"`))//'"Users List"'
                const userXpath = await userManPage.tableRowName.replace("{{0}}", `"${username}"`)
                await isElementExistsbyXPath(page, userXpath)
                const userAdded = await isElementExistsbyXPath(page, userXpath)
                assert.isTrue(userAdded, `New created user not found in the table : ${userXpath}`)
            })
            it("can open existing user details --> reset password displayed", async () => {
                await userManPage.clickRowInTable("initial")
                const resetPassword = await isElementExistsbyXPath(page, userManPage.resetPassword)
                assert.isTrue(resetPassword, `Reset password link is missed: ${userManPage.resetPassword} `)
            })

            it("can open existing user details --> Active / Inactive toggle displayed", async () => {
                const toggleDisplayed = await isElementExistsbyXPath(page,
                    userManPage.toggleByText.replace("{{0}}", `"${Trans.keys.USERS.INACTIVE}"`))//'"Inactive"'
                assert.isTrue(toggleDisplayed, "Inactive toggle is missed")
            })

            it("displays User's Permissions", async () => {
                await getXPathAndClick(page, userManPage.viewPermissions)
                const title = await isElementExistsbyXPath(page, userManPage.pageTitle.replace("{{0}}", `"${Trans.keys.POLICIES.USERS_PERMISSIONS}"`))//'"User\'s Permissions"'
                const viewMode = await isElementExistsbyXPath(page, `//div[contains(@class, "lv-read-only-title")][contains(text(),"${Trans.keys.GENERAL.VIEW_MODE}")]`) //"View Mode"
                const editLocked = await page.$x(userManPage.lockIconSimple)
                assert.isTrue(viewMode, "View Mode notification is not displayed")
                assert.equal(editLocked.length, 2, "Lock Icons are not displayed")
                assert.isTrue(title, "User's Permissions page is not opened")
            })

            it("can close existing user details", async () => {
                await getXPathAndClick(page, userManPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))//'"Close"'
                await userManPage.waitUntilVisible(userManPage.tableTitle.replace('{{0}}', `"${Trans.keys.USERS.USERS_LIST}"`))
                const tableDisplayed = await isElementExistsbyXPath(page, userManPage.tableTitle.replace('{{0}}', `"${Trans.keys.USERS.USERS_LIST}"`))//'"Users List"'
                assert.isTrue(tableDisplayed, "Clicking Close does not return a client to Users List")
            })

            it("can open Groups page", async () => {
                await page.reload()
                await userManPage.clickLeftLinkInfra([`${Trans.keys.USERS.GROUPS}`])//"Groups"
                const groupLink = await page.$x(userManPage.infraLeftMenu.replace("{{0}}", `"${Trans.keys.USERS.GROUPS}"`))//'"Groups"'
                groupLink[1].click()
                await page.waitForTimeout(1000)
                assert.equal(page.url(), `${baseURL}/app/main/users/groups/groups`)
            })
            xit("should validate Empty State for Groups page", async () => {
                const emptyState = await isElementExistsbyXPath(page, groupManPage.emptyStateIcon)
                assert.isTrue(emptyState, "The icon is missed")
                const text = await getInnerText(page, groupManPage.emptyStateOnTables, 0)
                assert.equal(text, "Create Groups", "The text is missed")
            })

            it("should create a new group", async () => {
                groupName = await StringHelper.addTimestampToText(groupName)
                await groupManPage.createGroup(groupName, groupManPage.groupADescript)

            })
            it("validates Groups page title and default columns", async () => {
                const title = await getInnerText(page, userManPage.tableTitle.replace("{{0}}", '""'), 0)
                await page.waitForXPath(userManPage.columnName2.replace('{{0}}', '""'))
                const elements = await page.$x(userManPage.columnName2.replace('{{0}}', '""'))
                const titles = []
                for (let x = 0; x < elements.length; x++) {
                    const text = await elements[x].evaluate(e => e.innerText)
                    titles.push(text)
                }
                assert.equal(title, Trans.keys.USERS.GROUPS) //"Groups"
                assert.deepEqual(titles, [Trans.keys.GROUPS.GROUP_NAME, Trans.keys.GROUPS.GROUP_DESCRIPTION, Trans.keys.USERS.USERS, Trans.keys.GROUPS.CONTAINED_GROUPS, Trans.keys.USERS.POLICIES])//['Group Name', 'Group Description', 'Users', 'Contained Groups', 'Policies']
            })

            xit("can delete Group", async () => {
                await userManPage.clickRowInTable(groupName)
                await waitAndClick(page, userManPage.iconDeleteConfig)
                await getXPathAndClick(page, userManPage.secondaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.DELETE}"`))
                const emptyState = await isElementExistsbyXPath(page, groupManPage.emptyStateIcon)
                assert.isTrue(emptyState, "The icon of empty state is missed")
            })


            it("can open Policies page --> validate title and default columns", async () => {
                await userManPage.clickLeftLinkInfra([Trans.keys.USERS.POLICIES])//"Policies"
                await page.waitForTimeout(1000)
                const title = await getInnerText(page, userManPage.tableTitle.replace("{{0}}", '""'), 0)
                await page.waitForXPath(userManPage.columnName3.replace('{{0}}', '""'))
                const elements = await page.$x(userManPage.columnName3.replace('{{0}}', '""'))
                const titles = []
                for (let x = 0; x < elements.length; x++) {
                    const text = await elements[x].evaluate(e => e.innerText)
                    titles.push(text)
                }
                assert.equal(title, Trans.keys.USERS.POLICIES)// "Policies"
                assert.deepEqual(titles, [Trans.keys.POLICIES.POLICY_NAME])//'Policy Name
                assert.equal(page.url(), `${baseURL}/app/main/users/policies`)
            })

        })



        describe(" Scanning Configuration page", () => {

            it("can enter Configuration page --> Assets table displayed by default", async () => {
                await waitAndClick(page, v3ReviewAndApprovePage.upperIconConfig)
                await page.waitForTimeout(1000)
                const assetsTableDisplayed = await isElementExistsbyXPath(page,
                    configurationGeneralPage.tableTitle.replace("{{0}}", `"${Trans.keys.ASSETS_FORMS.ASSET_TYPES}"`))//'"Asset Types"'
                assert.isTrue(assetsTableDisplayed,
                    `Expected that table displayed with title: ${configurationGeneralPage.tableTitle.replace("{{0}}", `"${Trans.keys.ASSETS_FORMS.ASSET_TYPES}"`)}`)//'"Asset Types"'
            })

            it("should Check existing tabs at Left Menu", async () => {
                //['Entity Types', 'Assets', 'Forms', 'Material Reconciliation', 'Work Units', 'Work Orders', 'Global Content', 'External Map Data', 'Shared Content', 'Business Logic', 'Alerts', 'Workflow Builder', 'Settings']
                const expected = [
                    Trans.keys.CONFIGURATION.MENU.ENTITY_TYPES,
                    Trans.keys.CONFIGURATION.MENU.ASSETS,
                    Trans.keys.CONFIGURATION.MENU.FORMS,
                    Trans.keys.CONFIGURATION.MENU.RECONCILIATION,
                    Trans.keys.CONFIGURATION.MENU.WORK_UNITS,
                    Trans.keys.CONFIGURATION.MENU.WORK_ORDERS,
                    Trans.keys.CONFIGURATION.MENU.GLOBAL_CONTENT,
                    Trans.keys.CONFIGURATION.MENU.EXTERNAL_MAP_DATA,
                    Trans.keys.CONFIGURATION.MENU.SHARED_CONTENT,
                    Trans.keys.CONFIGURATION.MENU.BUSINESS_LOGIC,
                    Trans.keys.CONFIGURATION.MENU.ALERTS,
                    //Trans.keys.CONFIGURATION.MENU.EMAILS,
                    Trans.keys.CONFIGURATION.MENU['WORKFLOW BUILDER'],
                    //Trans.keys.CONFIGURATION.MENU.DASHBOARDS,
                    Trans.keys.CONFIGURATION.MENU.SETTINGS
                ]

                await page.waitForXPath(configurationGeneralPage.infraLeftMenu.replace("{{0}}", '""'))

                const userNameDisplayed = await page.$x(configurationGeneralPage.infraLeftMenu.replace("{{0}}", '""'))

                let x
                let names = []
                for (x = 0; x < userNameDisplayed.length; x++) {
                    let value = await userNameDisplayed[x].evaluate(option => option.innerText)
                    names.push(value)
                }

                assert.includeMembers(names, expected, " Not all mandatory elements exist at the list or incorrect order ")

            })
            let assetName = "Asset Smoke"
            it("can add a new Asset and Save", async () => {
                assetName = await StringHelper.addTimestampToText(assetName)
                await configurationGeneralPage.createAssetType(assetName)
                await page.reload()
                await page.waitForSelector(configurationGeneralPage.addButton)
                const assetsListNewAsset = await isElementExistsbyXPath(page,
                    configurationGeneralPage.tableRowName.replace("{{0}}", `"${assetName}"`))
                assert.isTrue(assetsListNewAsset,
                    `No new Asset at Asset Types list: ${configurationGeneralPage.tableRowName.replace("{{0}}", assetName)}`)
            })

            it("can add additional fields to the Asset and Save", async () => {
                await configurationGeneralPage.clickRowInTable(assetName)
                await getXPathAndClick(page, configurationGeneralPage.assetContentTab)
                await isElementExistsbyXPath(page, configurationGeneralPage.activeTabHighlited.replace("{{0}}", `"${Trans.keys.FORMS.EDITOR_FORM_FIELDS.CONTENT}"`))//'"Content"'
                await configurationGeneralPage.dragAndDropAndNameFieldAlias([Trans.keys.FORMS.FIELD_TYPES_TEXT.FREE_TEXT], "Smoke Field")//"Free Text"
                await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`)) // '"Save"'
                await waitXpathNotExist(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))// '"Save"'
                await isElementExistsbyXPath(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))//'"Close"'
                await isElementExistsbyXPath(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))//'"Close"'
                const reviewFieldText = await isElementExistsbyXPath(page, configurationGeneralPage.fieldNameOfContent.replace("{{0}}", '"Smoke Field"'))
                const lockIconFieldType = await isElementExistsbyXPath(page, configurationGeneralPage.lockIcon.replace("{{0}}", `"${Trans.keys.FORMS.EDITOR_FORM_FIELDS.PROP_EDITOR.FIELD_TYPE}"`))// '"Field Type"'
                const fieldTypeValue = await isElementExistsbyXPath(page, configurationGeneralPage.specificFieldNaming.replace("{{0}}", `"${Trans.keys.FORMS.FIELD_TYPES_TEXT.TEXT}"`)) //'"Text"' check "Part of Catalog" field exist
                //const partOfCatalogIcon = await isElementExistsbyXPath(page, configurationGeneralPage.genericDropDownArrow.replace("{{0}}", `"${Trans.keys.CONFIGURATION.CATALOG.PART_OT_CATALOG}" `)) //'"Part of Catalog"' check "Part of Catalog" field exist
                const partOfCatalogField = await isElementExistsbyXPath(page, configurationGeneralPage.fieldTitle.replace("{{0}}", `"${TransEN.keys.CONFIGURATION.CATALOG.PART_OF_CATALOG}" `)) //'"Part of Catalog"' check "Part of Catalog" field exist
                await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))//'"Close"'

                const expectedResults = { reviewFieldText: true, lockIconFieldType: true, fieldTypeValue: true, partOfCatalogField: true }
                const actualResults = {
                    reviewFieldText: reviewFieldText, lockIconFieldType: lockIconFieldType,
                    fieldTypeValue: fieldTypeValue, partOfCatalogField: partOfCatalogField

                }
                assert.deepEqual(actualResults, expectedResults, `adding additional field results are not as expected`)
            })

            it("can add the new Asset Type to a Project and Save", async () => {
                await configurationGeneralPage.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.WORK_ORDERS])//"Work Orders"
                await isElementExistsbyXPath(page, configurationGeneralPage.infraLeftMenuActive.replace("{{0}}", `"${Trans.keys.CONFIGURATION.MENU.WORK_ORDERS}"`))//'"Work Orders"'
                await configurationGeneralPage.clickRowInTable(projectTypeName)
                await getXPathAndClick(page, configurationGeneralPage.tabTitleCommon.replace("{{0}}", `"${Trans.keys.CONFIGURATION.MENU.ASSETS}"`))//'"Assets"'
                await getXPathAndClick(page, configurationGeneralPage.checkBoxByText2.replace("{{0}}", '"Smoke"'))
                await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))//'"Save"'
                const closeDisplayed = await isElementExistsbyXPath(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))// '"Close"'            
                assert.isTrue(closeDisplayed, `Close button is not displayed ${configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`)}`)// '"Close"'
            })
            it("Close Edit asset after save", async () => {
                await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))// '"Close"'
                await page.waitForTimeout(2000)
                const closeDisplayed = await isElementExistsbyXPath(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))// '"Close"'
                assert.isFalse(closeDisplayed, `Close button is not displayed ${configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`)}`)// '"Close"'
            })

            it("can open Reconciliation Page --> Action tab opened by default", async () => {
                await configurationGeneralPage.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.RECONCILIATION])//"Material Reconciliation"
                const actionsCard = await isElementExistsbyXPath(page,
                    configurationGeneralPage.cardName.replace("{{0}}", `"${Trans.keys.RECONCILIATION.ACTION_CARD_TITLE}"`))//'"Reconciliation Actions"'
                assert.isTrue(actionsCard, "Actions Card expected to be displayed")
            })

            it("can delete Reconciliation Action --> cancel without save", async () => {
                await getXPathAndClick(page, configurationGeneralPage.editIconI)
                const saveDisabled = await isElementExistsbyXPath(page, configurationGeneralPage.primaryDisabledButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))//'"Save"'
                await waitAndClick(page, configurationGeneralPage.iconDeleteConfig)
                await page.waitForTimeout(500)
                const saveDisabledAfterEdit = await isElementExistsbyXPath(page, configurationGeneralPage.primaryDisabledButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))// '"Save"'
                await getXPathAndClick(page, configurationGeneralPage.secondaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CANCEL}"`))// '"Cancel"'
                const verificationPopup = await getInnerText(page,
                    configurationGeneralPage.baseMessageTitle.replace("{{0}}", '""'), 0)
                await getXPathAndClick(page, configurationGeneralPage.secondaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.DISCARD}"`))//'"Discard"'
                assert.isTrue(saveDisabled, "Save button expected to be disabled if no edit")
                assert.isFalse(saveDisabledAfterEdit, "Save button expected to be enabled after edit")
                assert.equal(verificationPopup, Trans.keys.MESSAGE.CHANGES_WILL_BE_LOST)//"All changes will be lost. Continue?"
            })

            it("can open Alerts page --> validate default columns", async () => {
                await page.reload()
                await page.waitForXPath(configurationGeneralPage.editIconI)
                await configurationGeneralPage.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.BUSINESS_LOGIC])//"Business Logic"
                await configurationGeneralPage.clickLeftLinkInfra([Trans.keys.CONFIGURATION.MENU.ALERTS])//"Alerts"
                await page.waitForSelector(configurationGeneralPage.addButton)
                const elements = await page.$x(configurationGeneralPage.columnName2.replace('{{0}}', '""'))
                const titles = []
                for (let x = 0; x < elements.length; x++) {
                    const text = await elements[x].evaluate(e => e.innerText)
                    titles.push(text)
                }
                assert.deepEqual(titles, [Trans.keys.ALERTS.DISPLAY_LABEL, Trans.keys.ALERTS.BEHAVIORS, Trans.keys.ALERTS.SEVERITY_LEVEL])//['Display Label', 'Behaviors', 'Severity Level']
            })

            it("can not save new Alert with required fields empty --> error display flow", async () => {
                await waitAndClick(page, configurationGeneralPage.addButton)
                await configurationGeneralPage.selectValueFromDD(`"${Trans.keys.ALERTS.ON_PROJECT_TYPES_OR_WORK_UNIT}"`, '"Project1"')//'"On Project"'
                await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))//'"Save"' close dropdown
                await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))//'"Save"'
                const upperErrorDisplayed = await isElementExistsbyXPath(page, configurationGeneralPage.checkErrors)
                const severityErrorDisplayed = await isElementExistsbyXPath(page,
                    configurationGeneralPage.errorIconByName.replace("{{0}}", `"${Trans.keys.ALERTS.SEVERITY_LEVEL}"`))//'"Severity Level"'
                const appliesOnErrorDisplayed = await isElementExistsbyXPath(page,
                    configurationGeneralPage.errorIconByName.replace("{{0}}", `"${Trans.keys.ALERTS.CARD.ALERT_APPLIES_ON}"`))//'"Alert applies on"'
                const displayLabelErrorDisplayed = await isElementExistsbyXPath(page,
                    configurationGeneralPage.errorIconByName.replace("{{0}}", `"${Trans.keys.ALERTS.CARD.LONG_STORY_SHORT_LABEL}"`))//'"Display label"'
                await getXPathAndClick(page, configurationGeneralPage.cancelUpperXButton)
                assert.isTrue(upperErrorDisplayed,
                    `expected to be displayed but not found: ${configurationGeneralPage.checkErrors}`)
                assert.isTrue(severityErrorDisplayed,
                    "Error icon expected to be displayed next to 'Severiry Level' but not found")
                assert.isTrue(appliesOnErrorDisplayed,
                    "Error icon expected to be displayed next to 'Alert applies on' but not found")
                assert.isTrue(displayLabelErrorDisplayed,
                    "Error icon expected to be displayed next to 'Display label' but not found: " + configurationGeneralPage.errorIconByName.replace("{{0}}", `"${Trans.keys.ALERTS.CARD.LONG_STORY_SHORT_LABEL}"`))

            })

            it("can create a new Alert type --> can Save ", async () => {// LV-1750
                let alertTitle = "Alert For Smoke"
                alertTitle = await StringHelper.addTimestampToText(alertTitle)
                await page.waitForXPath(configurationGeneralPage.tableTitle.replace('{{0}}', `"${Trans.keys.CONFIGURATION.MENU.ALERTS}"`))//'"Alerts"'
                await waitAndClick(page, configurationGeneralPage.addButton)
                await configurationGeneralPage.selectValueFromDD(`"${Trans.keys.ALERTS.SEVERITY_LEVEL}"`, `"${Trans.keys.ALERTS.LOW}"`)//'"Severity"', '"Low"'

                await configurationGeneralPage.selectValueFromDD(`"${Trans.keys.ALERTS.ON_PROJECT_TYPES_OR_WORK_UNIT}"`, '"Project1"')//'"On Project"', '"ALL_INCLUDED"'
                //close drop down
                await getXPathAndClick(page, configurationGeneralPage.fieldName.replace("{{0}}", `"${Trans.keys.ALERTS.ALERT_WILL}"`))//'"Alert will"'
                await configurationGeneralPage.selectValueFromDD(`"${Trans.keys.ALERTS.CARD.ALERT_APPLIES_ON}"`, `"${Trans.keys.SELECT.ASSET_TYPE}"`)//'"Alert applies on"', '"Asset Type"'
                await configurationGeneralPage.selectValueFromDD(`"${Trans.keys.ALERTS.CARD.WHICH_ASSET_TYPE}"`, '"Asset"')//'"Which"', '"Asset"'
                //close drop down
                await getXPathAndClick(page, configurationGeneralPage.fieldName.replace("{{0}}", `"${Trans.keys.ALERTS.ALERT_WILL}"`))//'"Alert will"'
                // set value at 'Alert will prompt if'
                await configurationGeneralPage.selectValueFromDD(`"${Trans.keys.ALERTS.CARD.ALERT_WILL_PROMPT_IF}"`, `"${Trans.keys.ALERTS.CARD.FIELD_WAS_FIELD_OUT}"`) //"Alert will prompt if"','"Field was filled out"

                await getXPathAndType(page,
                    configurationGeneralPage.inputByFieldName.replace('{{0}}', `"${Trans.keys.ALERTS.CARD.LONG_STORY_SHORT_LABEL}"`), alertTitle)//'"Display label"'

                await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))// '"Save"
                await getXPathAndClick(page, configurationGeneralPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))// '"Close"'
                const path = configurationGeneralPage.tableRowName.replace("{{0}}", `"${alertTitle}"`)
                const alertCreated = await isElementExistsbyXPath(page, path)
                assert.isTrue(alertCreated, `New Alert is not displayed in the table ${path}`)
            })

        })
        describe(" Scanning Resources page", () => {

            it("can enter Resources page", async () => {
                await waitAndClick(page, resourcesPage.resourceButton)

                await page.waitForTimeout(1000)

                assert.include(page.url(), `${baseURL}/app/main/resources/catalog?typeId=`)
            })
            it("should check Company Catalog empty state", async () => {
                // empty state of catalog
                await getXPathAndClick(page, resourcesPage.genericDropDownArrow.replace("{{0}}", `"${Trans.keys.RESOURCES.COMPANY_CATALOG}"`))//'"Company Catalog"'
                const assetTypeDDXP = await resourcesPage.valueFromDropDown.replace("{{0}}", '"EmptyCatalogAassetTyp_"')
                if (await isElementExistsbyXPath(page, assetTypeDDXP) == false) {
                    await getXPathAndType(page, resourcesPage.searchFieldOpen, "EmptyCatalogAassetTyp_")
                }
                await getXPathAndClick(page, assetTypeDDXP)//
                const emptyCompanyCatalog = await isElementExistsbyXPath(page, resourcesPage.emptyStateIcon)
                assert.isTrue(emptyCompanyCatalog, "No empty state icon at Company catalog ")
            })
            let resourceName = "AAAA"
            it("should add a new item into Company Catalog --> index field locked after Save ", async () => {
                await getXPathAndClick(page, resourcesPage.genericDropDownArrow.replace("{{0}}", `"${Trans.keys.RESOURCES.COMPANY_CATALOG}"`))//'"Company Catalog"'
                await getXPathAndClick(page, resourcesPage.valueFromDropDown.replace("{{0}}", assetName))//
                await page.waitForTimeout(500)
                await waitAndClick(page, resourcesPage.addButton)
                await page.waitForTimeout(500)
                resourceName = await StringHelper.addTimestampToText(resourceName)
                await getXPathAndType(page, resourcesPage.inputByFieldName.replace("{{0}}", '"index"'), resourceName)
                await getXPathAndClick(page, resourcesPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))// '"Save"'
                await page.waitForTimeout(500)
                //check lock icon
                const lockIcon = await isElementExistsbyXPath(page, resourcesPage.lockIcon.replace("{{0}}", '"index"'))
                const inactiveIcon = await isElementExists(page, resourcesPage.inactiveIconS)
                await getXPathAndClick(page, resourcesPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))//'"Close"'
                assert.isTrue(lockIcon, "No lock icon next to index value")
                //inactive icon
                assert.isTrue(inactiveIcon, "No inactive icon at the Company catalog item at new catalog item")
            })

            it("should inactivate a Catalog recording", async () => {
                await page.waitForSelector(resourcesPage.addButton)
                await waitAndClick(page, resourcesPage.clickNextPage)
                await resourcesPage.clickEdit(resourceName)
                await waitAndClick(page, resourcesPage.inactiveButtonCreateNewCatalogItem)
                await getXPathAndClick(page, resourcesPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.ACTION.INACTIVATE}"`))//'"Inactivate"'
                await getXPathAndClick(page, resourcesPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.SAVE}"`))//'"Save"'
                await getXPathAndClick(page, resourcesPage.primaryButtonByText.replace("{{0}}", `"${Trans.keys.GENERAL.CLOSE}"`))//'"Close"'
                const inactiveContent2 = await isElementExistsbyXPath(page,
                    resourcesPage.inactiveTableRowName.replace("{{0}}", `"${resourceName}"`))
                assert.isTrue(inactiveContent2, "No inactive icon at the Company Catalog")
            })



            it("can open Shared Live Lists --> Empty State and Plus button disabled", async () => {
                await resourcesPage.clickLeftLinkInfra([Trans.keys.RESOURCES.SHARED_LIVE_LISTS])//"Shared Live Lists"
                await getXPathAndClick(page, resourcesPage.genericDropDownArrow.replace("{{0}}", `"${Trans.keys.RESOURCES.SHARED_LIVE_LISTS}"`))//'"Shared Live Lists"'
                await getXPathAndClick(page, resourcesPage.valueFromDropDown.replace("{{0}}", '"SharedLiveList "'))//
                await page.waitForSelector(resourcesPage.addButton)
                const fieldsWithDropdown = await getInnerText(page,
                    resourcesPage.specificValueOfFieldWithDropDown.replace("{{0}}", `"${Trans.keys.RESOURCES.SHARED_LIVE_LISTS}"`), 0)//'"Shared Live Lists"'
                const emptyText = await getInnerText(page, resourcesPage.emptyStateOnTables, 0)
                assert.include(fieldsWithDropdown.trim(), "SharedLiveList ")
                assert.equal(emptyText.trim(), Trans.keys.RESOURCES.NO_LIVE_LIST_VALUES)//"No Live Lists Values"
            })

        })
    })


})
