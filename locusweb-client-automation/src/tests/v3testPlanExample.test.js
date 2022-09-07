
const builder = require('../../common/builder')
const LoginPage = require('../../pages/loginPage')
const ReviewAndApprovePage = require('../../pages/reviewAndApprovePage')

const chai = require('chai');  
const assert = chai.assert;

const { baseURL } = require('../../config/configuration')
const { isElementExists} = require('../../common/assertHelpers')
const { upperIconUsers} = require('../../common/locateHelpers')

describe("Users Management tests", ()=>{

    let page
    let loginPage
    let reviewAndApprovePage

    before(async () => {
        page = await builder.build('LargeScreen'); 
        loginPage = new LoginPage(page) 
        reviewAndApprovePage = new ReviewAndApprovePage(page)
    })

    beforeEach( async () => {
        
    })

    after(async () => {
        
    })

    describe ("  ", async () => {

        it("  ", async () => {
            precondition   
            condition                       
            asserttion      
        }) 

        it("   ", async () => {
            
        })

        it("   ", async () => {
            
        })
    })

   
})

