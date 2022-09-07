const chai = require('chai');  
const assert = chai.assert;

const SuperPage = require('../../../pages/a_infra_superPage')
const { getElementByTextFromList, waitAndClick, getXPathAndClick, getXPathAndType, getText, getElementFromArrayByIndex,getValue} = require('../../../common/locateHelpers')
const { isElementExists, isElementExistsbyXPath, isXPathVisible } = require('../../../common/assertHelpers');

module.exports = class v3ConfigToolPage extends SuperPage {

    constructor(page) {
        super(page)
    }
    async  CreateCondition(page,entityType,indexToSelect){

        // filling the fields with 
        await getXPathAndType(page,this.inputByFieldName.replace("{{0}}",'"Name"'),"Some "+entityType)
        await getXPathAndType(page,this.inputByFieldName.replace("{{0}}",'"Description"'),"Some "+entityType+' Desc',1)
        
        await page.waitForTimeout(1000)
        //Opens dropdown ,selects the first option in the dropdown X4
        await getXPathAndClick(page,this.genericDropDownArrow.replace("{{0}}",'""'))
        await getXPathAndClick(page,this.optionsTextContainer,indexToSelect)
          
        await getXPathAndClick(page,this.genericDropDownArrow.replace("{{0}}",'""'),1)
        await getXPathAndClick(page,this.optionsTextContainer,0)
          
        await getXPathAndClick(page,this.genericDropDownArrow.replace("{{0}}",'""'),2)
        await getXPathAndClick(page,this.optionsTextContainer,0)
                
        await getXPathAndClick(page,this.genericDropDownArrow.replace("{{0}}",'""'),3) 
        await getXPathAndClick(page,this.optionsTextContainer,0)
        
        await getXPathAndClick(page,this.primaryButtonByText.replace("{{0}}",'""'),1)
    }
    
}