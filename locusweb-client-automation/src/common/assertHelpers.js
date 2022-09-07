
const chai = require('chai');
const assert = chai.assert;

module.exports = {

    //these are general element selectors available from every page
    upperIconRA: '.icon-symbol-review-and-approve',
    upperIconUsers: '.icon-users',
    upperIconConfig: '.icon-settings',

    isElementExists: async (page, selector, shouldToExist = 'positive') => {
        try {
            await page.waitForSelector(selector, { timeout: 5000 })
            return true
        }
        catch (exception) {
            if (shouldToExist !== 'negative') {
                //console.log(exception)
            }

            return false
        }
    },

    isElementExistsbyXPath: async (page, xpath, shouldToExist = 'positive') => {
        try {
            await page.waitForXPath(xpath, { timeout: 5000 })
            return true
        }
        catch (exception) {
            if (shouldToExist !== 'negative') {
                //console.log(exception)
            }

            return false
        }
    },

    isXPathVisible: async (page, xpath) => {
        try {
            await page.waitForTimeout(500)
            await page.waitForXPath(xpath, { visible: true, timeout: 5000 })
            return true
        }
        catch (exception) {
            //console.error(exception)
            return false
        }
    },

    countTableRows: async (page, selector) => {
        await page.waitForSelector(selector, { timeout: 5000 })
        const count = await page.$$eval(selector, items => items.length)
        return count
    },

    getTextFromArrayElement: async (page, selector, position) => {
        await page.waitForSelector(selector)
        const tableElements = await page.$$(selector)
        const el = tableElements[position]
        const actualText = await el.evaluate(option => option.textContent)
        return actualText
    },

    validateNotSelected: (attributes, pattern) => {
        let notSelected = true
        for (let x = 0; x < attributes.length; x++) {
            if (attributes[x] !== pattern) {
                notSelected = false
            }
        }
        return notSelected
    },

    validateSelected: (attributes, pattern) => {
        let selected = 0
        for (let x = 0; x < attributes.length; x++) {
            if (attributes[x] == pattern) {
                selected++
            }
        }
        return selected
    },

    getAllAttributesXpath: async (page, xpath, attribute) => {// function to get elemet style - returns value of specific Attribute (not an array)
        const elements = await page.waitForXPath(xpath)
        let data
        const keys = Object.keys(elements)
        data = await page.evaluate(element => JSON.parse(JSON.stringify(window.getComputedStyle(element))), elements)
        return eval("data." + attribute)
    },

    getAttributeByIndex: async (page, selector, attribute, index) => {
        const attributes = await module.exports.getAllAttributes(page, selector, attribute)
        return attributes[index]
    },

    getAllAttributes: async (page, selector, attribute) => {// function to get elemet style - returns array
        const result = await page.evaluate((selector, attribute) => {
            const elements = document.querySelectorAll(selector)
            const styles = []
            const keys = Object.keys(elements)
            keys.forEach(key => {
                styles.push(window.getComputedStyle(elements[key])[attribute])
            })
            return styles
        }, selector, attribute)

        return result
    },

    getElementStyle: async (page, selector, index) => {
        await page.waitForSelector(selector)
        const styles = await page.evaluate((selector, index) => {
            const i = index
            btn = document.querySelectorAll(selector)
            return JSON.parse(JSON.stringify(window.getComputedStyle(btn[i])))
        }, selector, index)
        return styles
    },


    getArrayOfElementsText: async (page, selector) => {
        let textArr = []

        try {
            page.waitForSelector(selector)

        } catch (error) {
            console.error(`${selector} wasnt found`)
        }
        try {
            let text1
            const elements = await page.$$(selector)
            const numElements = elements.length
            for (let i = 0; i < numElements; i++) {
                text1 = await elements[i].evaluate(e => e.textContent)
                textArr.push(text1.trim())
            }

            //console.log(textArr)
        } catch (error) {
            console.error(`array creation issue`)
        }
        return textArr
    },

    isSortedGeneric: (array = []) => {
        let array2

        for(let i = 0; i < array.length; i ++) {
            if(typeof array[i] == "string") {
                array[i] = array[i].toLocaleLowerCase()
            }
        }

        array2 = array.slice()
        array.sort()

        for (let i = 0; i < array.length; ++i) {
            if (array[i] !== array2[i]) return false 
        }

        return true
    }

}
