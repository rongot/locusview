const builder = require('../../common/builder')
const LoginPage = require('../../pages/loginPage')
const SuperPage = require('../../pages/a_infra_superPage')
const V3ReviewAndApprovePage = require('../../pages/v3ReviewAndApprovePage')
const ConfigurationGeneralPage = require('../../pages/configurationGeneralPage')
const ResourcesPage = require('../../pages/resourcesPage')
const V3ProjectManagementPage = require('../../pages/v3projectManagementPage')
const chai = require('chai');  
const forEach = require('mocha-each');
const assert = chai.assert;
const ScreenshotTester = require('puppeteer-screenshot-tester')
const {collectColumnTexts} = require("../../common/tableHelpers");  

const { isElementExists, isElementExistsbyXPath, getElementStyle, isXPathVisible,countTableRows } = require('../../common/assertHelpers')
const { getXPathAndClick, waitAndClick, getAttribute, getXPathAndType, getInnerText,getXPathAndDoubleClickWithIndex, getText} = require('../../common/locateHelpers');

const { is } = require('core-js/fn/object');
import Trans from '../../translation/language'

const ApiRequests =require('../../apiRequests/newAPI_Requests')
const { baseURL } = require('../../config/configuration')
const{updateAsset,updateReconTypes,addMeasurement,updateReconAsset,updateForm,updateCatalogAsset,addReconMetrics,updateCompanyCatalog} =require('./fixture/decimal_separator')
import { StringHelper } from '../../common/stringHelper'
import { page } from '../../common/builder'

let assetId=9
let formId=1
let reconId=3
let catalogAssetId=85
let measurementId=1
let fieldsName=['first number','second number','calc button','index field','just a text']
let catalogNumField = [[75,"6543","52.3"], [76, "6542", "35.25"], [77, "6541", "35.25"],[78, "6540", "59.11"]] 
let token
let apiR
let superPage
let customFieldId1
let customFieldKey1
let customFieldId2
let customFieldKey2
let customFieldId3
let customFieldKey3
// let adminUsername='test1'
// let adminPassword='12345678'

describe.only('#newFullFlow update web throw api',()=>{
    before(async () => {
        apiR=new ApiRequests(baseURL)
        superPage = new SuperPage()
        
    })
    it('get token',async()=>{
        token=await apiR.authenticate (superPage.adminUsername, superPage.adminPassword)
        
    })
    it('update asset throw api',async()=>{
        await new Promise(r => setTimeout(() => r(), 4000));
        const response = await apiR.putGeneralRestCall(apiR.assetTypeURL, token, updateAsset, [assetId])
        //console.log(Object.keys(response.data.layout.sections[0].fields).length )
        customFieldId1=response.data.layout.sections[0].fields[7].id //first number field
        customFieldKey1=response.data.layout.sections[0].fields[7].key //first number field
        customFieldId2=response.data.layout.sections[0].fields[8].id //second number field
        customFieldKey2=response.data.layout.sections[0].fields[8].key//second number field
        console.log(customFieldKey2)
        customFieldId3=response.data.layout.sections[0].fields[9].id //second number field
        customFieldKey3=response.data.layout.sections[0].fields[9].key//second number field
        
        
        assert.equal(response.status, 200, "Asset has been created!!!")
        assert.equal(response.data.id,assetId,"the id is match")
      })
    it('update catalog assets throw api',async()=>{
        await new Promise(r => setTimeout(() => r(), 4000));
        const response = await apiR.putGeneralRestCall(apiR.catalogRowURL, token, updateCatalogAsset(customFieldKey2), [catalogAssetId])
        assert.equal(response.status, 200, "Asset has been created!!!")
        assert.equal(response.data.id,catalogAssetId,"the id is match")

    })
    it('add form throw api',async()=>{
        await new Promise(r => setTimeout(() => r(), 4000));
        const response = await apiR.putGeneralRestCall(apiR.formTypeURL, token, updateForm(fieldsName[0]), [formId])
        assert.equal(response.status, 200, "form has been added!!!")
        assert.equal(response.data.id,formId,"the id is match")
        
    })
    it('Update recon for asset Url_File throw api',async()=>{
        await new Promise(r => setTimeout(() => r(), 4000));
        const response = await apiR.putGeneralRestCall(apiR.reconType, token, updateReconTypes(customFieldId1,customFieldId2), [reconId]) 
        assert.equal(response.status, 200, "Asset has been created!!!")
        assert.equal(response.data.id,reconId,"the id is match")
    })

    forEach([1,2,3]).
    it('update in recon metrics throw api with action type number %s',async(actionId)=>{
        //receive =1 ,broken=2 ,lost =3
        await new Promise(r => setTimeout(() => r(), 4000));
        const response = await apiR.postGeneralRestCall(apiR.reconMetricsUrl, token, addReconMetrics(actionId,customFieldKey1)) 
        assert.equal(response.status, 200, "Asset has been created!!!")
    })
    forEach(catalogNumField).
        it('add values to numeric field in company catalog for id %s ',async(index,text,num)=>{
        await new Promise(r => setTimeout(() => r(), 4000));
        const response = await apiR.putGeneralRestCall(apiR.catalogRowURL, token, updateCompanyCatalog(index,text,num,customFieldKey2),[index]) 
        assert.equal(response.status, 200, "Asset has been created!!!")
    })
    
    it('Update measurement fields throw api',async()=>{
        await new Promise(r => setTimeout(() => r(), 4000));
        const response = await apiR.putGeneralRestCall(apiR.measureMentUrl, token, addMeasurement(measurementId),[measurementId]) 
        assert.equal(response.status, 200, "measurement fields has been created!!!")
    })
    it('add new asset for measurement fields',async()=>{
        await new Promise(r => setTimeout(() => r(), 4000));
        const response = await apiR.postGeneralRestCall(apiR.assetURL, token, updateReconAsset(customFieldKey1,customFieldKey2,customFieldKey3))
        assert.equal(response.status, 200, "measurement fields new asset has been created!!!")
        
    })
    
})
forEach([".",","]).
describe("#newFullFlow Localized Number Formatting for %s", (decimalSeparatorParam) => {

    let page
    let loginPage
    let v3ReviewAndApprovePage
    let configurationGeneralPage
    let resourcesPage
    let v3PMpage
    let tester
    let apiR
    let token
    let decimalSeparator = decimalSeparatorParam// "," or "."
    let projectFormName='Broken one'
    let formName='Form NON Attachable'
    let projectName='Mobile BOM'
    let assetType='URL_FILE_and_Co'
    let measurementAsset='ASTM_Pipe To Mappable_Line'
    let metricValues=["received","broken","lost"]
    let measurementFields=['Horizontal Distance','Vertical Distance','Along Distance','Azimuth','Grade','Slope Distance']
    let validateNumber='35.25'
    let resourceIndexValue='6540'
    let addButtonIndex="6567"
    let negativeValuesForValidation=['locusView','50,10']
    if(decimalSeparator ===','){
        negativeValuesForValidation=StringHelper.replaceDecimalSeparatorInArray(negativeValuesForValidation,decimalSeparator ,"." )
    }
    validateNumber=StringHelper.replaceDecimalSeparator(validateNumber, ".", decimalSeparator)
    

    let resourceFIelds={
        "index": addButtonIndex,
        "just a text" :"just a text",
        [fieldsName[1]]:`"${validateNumber}"`
    }

    /////LV-6508
    let changeFilterFields=['Status','In Progress']
    let fieldTagName='autoTag'
    let tagNameType='Number'
    let workOrderName='ALL_INCLUDED'
    let workOrderFieldAlias='autoNumbers'
    let addedColumnId='tagItemDictionary.3' //the new added column name
    let workOrderTypeColId ='typeId' //work order Type column name
        
    // SettingPageFieldsNegativeValues=StringHelper.replaceDecimalSeparatorInArray(SettingPageFieldsNegativeValues, ".", decimalSeparator)
    before(async () => {
        page = await builder.build('LargeScreen'); 
        loginPage = new LoginPage(page) 
        apiR=new ApiRequests(baseURL)   
        v3ReviewAndApprovePage = new V3ReviewAndApprovePage(page)
        configurationGeneralPage = new ConfigurationGeneralPage(page)
        resourcesPage = new ResourcesPage(page)
        v3PMpage = new V3ProjectManagementPage(page)

        await loginPage.visit()
        await loginPage.login(v3ReviewAndApprovePage.adminUsername, v3ReviewAndApprovePage.adminPassword)
        await page.waitForNavigation(`${baseURL}/app/main/review/projects`)
        await configurationGeneralPage.selectDecimalSeparator(decimalSeparator)
        

               
    })

    beforeEach( async () => {
        await page.waitForTimeout(1000)
        let currentURL = await page.url()
        if(!currentURL.includes("main/review/projects")){
            console.log(page.url())
            await loginPage.visit()
            await page.waitForNavigation(`${baseURL}/app/main/review/projects`)
        }     
    })

    after(async () => {
        await builder.closeBrowser()
    })
    describe('LV-5739 Decimal Separator in Dynamic layout Calculation Field',()=>{
           it('validate calculation field in assets',async()=>{
            let assetTypeValue=Trans.keys.CONFIGURATION.DELETE_TYPE.CONFIRM.TYPES.ASSET_TYPE
            const returnValue=await v3ReviewAndApprovePage.validateDecimalFields(projectFormName,assetTypeValue,assetType,fieldsName,validateNumber,'CalcField')
            assert.include(returnValue,decimalSeparator , "calculation field type using the company decimal")
        })
        
    })
    describe('LV-3431 Review & Approve Decimal Separator in Dynamic layout Number Field',()=>{
        it('View and edit number field type using the company decimal in Form',async()=>{

           let formTypeValue=Trans.keys.CONFIGURATION.DELETE_TYPE.CONFIRM.TYPES.FORM_TYPE
           const returnValue=await v3ReviewAndApprovePage.validateDecimalFields(projectFormName,formTypeValue,fieldsName[0],fieldsName,validateNumber,'NumberField')
           assert.include(returnValue,decimalSeparator , `calculation field type using the company ${decimalSeparator}`)
            
        })
        
    }) 
    describe('LV-5891 Decimal Separator in BOM Items',()=>{
        it('view BOM values using the decimal Separator declared',async()=>{
            const materials=Trans.keys.REVIEW.HEADERS.MATERIALS  //'Materials'
            const materialAction=Trans.keys.REVIEW.HEADERS.BOM //'BOM'
            const returnValue=await v3ReviewAndApprovePage.viewDecimalSeparatorFields(projectName,materials,materialAction,assetType,fieldsName)
            assert.include(returnValue,decimalSeparator , `Bom field type using the company ${decimalSeparator}`)
     })    
    })
    describe('LV-5741 Decimal Separator in Recon Metrics',()=>{
        it('recon metric rows user is able to view row value using the company decimal separator',async()=>{
            const materials=Trans.keys.REVIEW.HEADERS.MATERIALS  //'Materials'
            const materialAction=Trans.keys.REVIEW.HEADERS.RECONCILIATION //'Reconciliation'
            const tab=Trans.keys.REVIEW.TABS.ANALYTICS
            const returnValue=await v3ReviewAndApprovePage.viewDecimalSeparatorFields(projectName,materials,materialAction,assetType,metricValues,tab)
            const isContainsSeparator=returnValue.every(e => e.includes(decimalSeparator))
            assert.isTrue(isContainsSeparator,`${returnValue} using the company decimal separator ${decimalSeparator}` )
            
     })    
    })
    describe('LV-5744 Review & Approve Decimal Separator in Reverse Lookup calculations',()=>{
        it('reference NUMBER field type values is evaluating correctly',async()=>{
            let assetTypeValue=Trans.keys.CONFIGURATION.DELETE_TYPE.CONFIRM.TYPES.ASSET_TYPE                                                     
            const returnValue=await v3ReviewAndApprovePage.validateDecimalFields(projectFormName,assetTypeValue,assetType,fieldsName,validateNumber,'reverseLookup',0)
            assert.isTrue(returnValue,`NUMBER field type values ${returnValue} is evaluating correctly`)
            
        })
    })
    describe('LV-5892 Decimal Separator in measurements',()=>{
        before(async () => {
        await configurationGeneralPage.changeUnitOfMeasure(Trans.keys.CONFIGURATION.SYSTEM.METRIC)
        let currentURL = await page.url()
        if(!currentURL.includes("main/review/projects")){
            await waitAndClick(page,configurationGeneralPage.upperIconRA)
                  }
        })

        it('user can view In All measurement fields ',async()=>{
        const materials=Trans.keys.REVIEW.HEADERS.MEASUREMENTS 
        const materialAction=Trans.keys.REVIEW.TABS.DETAILS
        const returnValues=await v3ReviewAndApprovePage.viewDecimalSeparatorFields(projectFormName,materials,materials,measurementAsset,measurementFields)
        const isContainsSeparator=returnValues.every(e => e.includes(decimalSeparator))
        assert.isTrue(isContainsSeparator,'All measurement fields using the company decimal separator')

        })

    })    
    describe('LV-6064 Resources Decimal Separator in Company Catalog',()=>{
        it('In the catalog list User Can View  NUMBER field type',async ()=>{
            let customField= resourcesPage.resourceAddedCol.replace("{{0}}", `${customFieldKey2}`)
            const returnValue=await resourcesPage.viewTablesFields(assetType,customField,resourceIndexValue)
            assert.include(returnValue,decimalSeparator , `Resources Decimal Separator in Company Catalog ${decimalSeparator}`)
            

        });
        it('In the catalog list User Can Edit NUMBER field type',async ()=>{
           let editResourceField={
                [fieldsName[1]]:`"${validateNumber}"`
            }
            let customField= resourcesPage.resourceAddedCol.replace("{{0}}", `${customFieldKey2}`)
            await resourcesPage.editTablesFields("clickCell",assetType,editResourceField,customField,resourceIndexValue)
            const returnValue=await resourcesPage.viewTablesFields(assetType,customField,resourceIndexValue)
            assert.include(returnValue,decimalSeparator , `Resources Decimal Separator in Company Catalog ${decimalSeparator}`)
        })
        // it('In the catalog editor User Can create NUMBER field type',async ()=>{
        //     const returnValue=await resourcesPage.editTablesFields("addButton",assetType,resourceFIelds,resourcesPage.resourceAddedCol,addButtonIndex)
        //    assert.include(returnValue,decimalSeparator , `Resources Decimal Separator in Company Catalog ${decimalSeparator}`)
        //  })

    })
    describe('LV-6508 Work Management Decimal Separator in Project Management Grid',()=>{
        it('In the project management grid list-User Can View NUMBER field type',async function(){
            this.timeout(100000);
            await configurationGeneralPage.addTagToWorkManagement(fieldTagName,tagNameType,workOrderName,workOrderFieldAlias)
            await v3PMpage.filterFields(changeFilterFields[0],changeFilterFields[1])
            await v3PMpage.searchProject(projectName)
            await v3PMpage.addColumnToPmTable(fieldTagName)
            const returnValues=await v3PMpage.clickOnRow(workOrderTypeColId,addedColumnId,workOrderFieldAlias,validateNumber,workOrderName)
            const isContainsSeparator=returnValues.every(e => e.includes(decimalSeparator))
            assert.isTrue(isContainsSeparator,'Work Management Number fields using the company decimal separator')
            
        })
       
    })
   describe('LV-5738 Project Management Decimal Separator in Preview Cards display',()=>{
    it('User should be able to view asset Title value',async()=>{
        let returnValues
        await configurationGeneralPage.navigateToEntity(Trans.keys.CONFIGURATION.MENU.ASSETS,assetType)
        await configurationGeneralPage.createCardLayout("title",fieldsName[1])
        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"]});
        await v3ReviewAndApprovePage.navigateToEntity(projectName,"Assets")
        returnValues=await v3ReviewAndApprovePage.getPreviewCardsDisplay("assetTitleValue",assetType,1)
        returnValues=StringHelper.splitString(returnValues,' ',2)
        assert.include(returnValues,decimalSeparator , `Resources Decimal Separator in asset Title view card =${decimalSeparator}`)
       
       })
       it('User should be able to view asset subTitle value',async()=>{
        await configurationGeneralPage.navigateToEntity(Trans.keys.CONFIGURATION.MENU.ASSETS,assetType)
        await configurationGeneralPage.createCardLayout("subTitle",fieldsName[1])
        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"]});
        await v3ReviewAndApprovePage.navigateToEntity(projectName,"Assets")
        const returnValues=await v3ReviewAndApprovePage.getPreviewCardsDisplay("assetSubTitleValue",assetType,2)
        assert.include(returnValues,decimalSeparator , `Resources Decimal Separator in asset subTitle view card=${decimalSeparator}`)
        
       
       })   
       it('User should be able to view the field value work order',async()=>{
        
        let returnValues
        await configurationGeneralPage.navigateToEntity(Trans.keys.CONFIGURATION.MENU.WORK_ORDERS,workOrderName)
        await configurationGeneralPage.createCardLayout("title",workOrderFieldAlias)
        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"]});
        returnValues= await v3ReviewAndApprovePage.getPreviewCardsDisplay("woTitleValue",projectName,0)
        returnValues=StringHelper.splitString(returnValues,' ',3)
        assert.include(returnValues,decimalSeparator , `Resources Decimal Separator in  work order title view card =${decimalSeparator}`)

    })
     it('User should be able to view the field value in Reconciliation',async()=>{
        let returnValues
        const materials=Trans.keys.REVIEW.HEADERS.MATERIALS  //'Materials'
        const materialAction=Trans.keys.REVIEW.HEADERS.RECONCILIATION //'Reconciliation'
        await configurationGeneralPage.navigateToMaterialReconciliation(assetType)
        await configurationGeneralPage.createCardLayout("title",fieldsName[0])
        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"]});
        await v3ReviewAndApprovePage.navigateToEntity(projectName,materials,materialAction)
        returnValues=await v3ReviewAndApprovePage.getPreviewCardsDisplay("assetTitleValue",assetType,1)
        returnValues=StringHelper.splitString(returnValues,' ',2)
        assert.include(returnValues,decimalSeparator , `Resources Decimal Separator in Reconciliation view card =${decimalSeparator}`)

    })

   })       
 })

