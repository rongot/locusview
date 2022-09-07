
const puppeteer = require('puppeteer')
const chai = require('chai');
const assert = chai.assert;

module.exports = {

    //these are general element selectors available from every page
    upperIconRA: '.icon-symbol-review-and-approve',
    upperIconUsers: '.icon-users',
    upperIconConfig: '.lv-top-menu-button-icon .icon-settings',

    // these are general methods users on every page

    waitAndClick: async (page, selector) => {
        try {
            await page.waitForSelector(selector, { timeout: 10000 })
        } catch (error) {
            console.error('selector not found', selector)
            assert.isTrue(false, `selector not found:${selector}`)
            return false
        }
        await page.click(selector);
    },

    waitAndType: async (page, selector, text) => {
        try {
            await page.waitForSelector(selector, { timeout: 4000 })
        } catch (error) {
            console.error('selector not found', selector)
            return false
        }
        await page.type(selector, text);

    },

    getText: async (page, xpath,index=0) => {
        try {
            await page.waitForXPath(xpath)
        } catch (error) {
            console.error('xpath not found', xpath)
            return false
        }
        const elements = await page.$x(xpath)
        const text = await elements[index].evaluate(e => e.textContent)
        return text
    },

    getTextSelector: async (page, selector) => {
        try {
            await page.waitForSelector(selector)
        } catch (error) {
            console.error('selector not found', selector)
            return false
        }
        const text = await page.$eval(selector, el => el.textContent)

        return text
    },

    getValue: async (page, xpath, position=0) => {
        try {
            await page.waitForXPath(xpath)
            const elements = await page.$x(xpath)
            const text = await elements[position].evaluate(e => e.value)
            return text
        } catch (error) {
            console.error('xpath not found', xpath)
            return false
        }

    },

    getTextContent: async (page, xpath, position) => {
        try {
            await page.waitForXPath(xpath)
        } catch (error) {
            console.error('xpath not found', xpath)
            return false
        }
        const elements = await page.$x(xpath)
        const text = await elements[position].evaluate(e => e.textContent)
        return text
    },

    getInnerText: async (page, xpath, position) => {
        try {
            await page.waitForXPath(xpath)
        } catch (error) {
            console.error('xpath not found', xpath)
            return false
        }
        const elements = await page.$x(xpath)
        if (elements.length > 1) {
            //console.warn("more than one element")
        }
        const text = await elements[position].evaluate(e => e.innerText)
        return text
    },

    getInnerHTML: async (page, xpath, position) => {
        try {
            await page.waitForXPath(xpath)
        } catch (error) {
            console.error('xpath not found', xpath)
            return false
        }
        const elements = await page.$x(xpath)
        if (elements.length > 1) {
            //console.warn("more than one element")
        }
        const text = await elements[position].evaluate(e => e.innerHTML)
        return text
    },

    getArrayInnerTexts: async (page, xpath) => {
        try {
            await page.waitForXPath(xpath)
        } catch (error) {
            console.error('xpath not found', xpath)
            return false
        }
        const elements = await page.$x(xpath)
        const texts = []
        for (let x = 0; x < elements.length; x++) {
            const text = await elements[x].evaluate(e => e.innerText)
            texts.push(text)
        }
        return texts
    },

    getClass: async (page, xpath, index=0) => {
        try {
            await page.waitForXPath(xpath)
        } catch (error) {
            console.error('xpath not found', xpath)
            return false
        }
        const elements = await page.$x(xpath)
        if (elements.length > 1) {
            //console.warn("more than one element")
        }
        const text = await elements[index].evaluate(e => e.classList)

        return text
    },

    getAttribute: async (page, xpath, attribute) => {
        try {
            await page.waitForXPath(xpath)
        } catch (error) {
            console.error('xpath not found', xpath)
            return false
        }
        const elements = await page.$x(xpath)

        if (elements.length > 1) {
            //console.warn("more than one element")
        }
        const text = await elements[0].evaluate(e => e['outerHTML'])

        return text
    },

    getCount: async (page, selector) => {
        try {
            await page.waitForSelector(selector)
            const count = await page.$$eval(selector, items => items.length)
            return count
        } catch (error) {
            console.error(`${selector} not found`)
            return 0
        }

    },

    getCountByXPath: async (page, xpath) => {
        try {
            await page.waitForXPath(xpath)
            const elements = await page.$x(xpath)
            const count = await elements.length
            return count
        } catch (error) {
            console.error(`${xpath} not found`)
            return 0
        }

    },

    getXPathAndClick: async (page, xpath, index = 0) => {
        try {
            await page.waitForXPath(xpath, { timeout: 7000 })
        } catch (error) {
            //console.error('xpath not found', xpath)
            assert.isTrue(false, `xpath not found:${xpath}`)
            return false
        }

        const elements = await page.$x(xpath)
        await elements[index].click();
        return true
    },

    getXPathAndDoubleClick: async (page, xpath, numClicks = 2) => {
        try {
            await page.waitForXPath(xpath)
        } catch (error) {
            console.error('xpath not found', xpath)
            assert.isTrue(false, `xpath not found:${xpath}`)
            return false
        }
        const elements = await page.$x(xpath)
        //console.log(elements[0])
        if (elements.length > 1) {
            //console.warn("more than one element")
        }
        await elements[0].click({ clickCount: numClicks });
        return true
    },

    getXPathAndType: async (page, xpath, text) => {
        try {
            await page.waitForXPath(xpath)
        } catch (error) {
            console.error('xpath not found', xpath)
            return false
        }
        const elements = await page.$x(xpath)
        if (elements.length > 1) {
            //console.warn("more than one element")
        }
        await elements[0].type(text);
    },

    getXPathAndTypebyIndex: async (page, xpath, text, index) => {
        try {
            await page.waitForXPath(xpath)
        } catch (error) {
            console.error('xpath not found', xpath)
            return false
        }
        const elements = await page.$x(xpath)
        if (elements.length > 1) {
            //console.warn("more than one element")
        }
        await elements[index].type(text);
    },

    clickElementMultipleTimes: async (page, xpath, numOfClicks) => {
        for (let i = 0; i < numOfClicks; i++) {
            await module.exports.getXPathAndClick(page, xpath)
            await page.waitForTimeout(500)
        }
    },

    getElementByTextFromList: async (page, xpath, params = []) => {
        let handledPath = xpath
        params.forEach((text, index) => {
            handledPath = handledPath.replace(`{{${index}}}`, `"${text}"`)
        })
        await page.waitForXPath(handledPath)
        const elements = await page.$x(handledPath)
        return elements[0]
    },

    getElementFromArrayByIndex: async (page, xpath, index) => {
        try {
            await page.waitForXPath(xpath)
        } catch (error) {
            console.error('xpath not found', xpath)
            return false
        }
        const elements = await page.$x(xpath)
        return elements[index]
    },

    mouseHoverSelector: async (page, selector) => {
        await page.waitForSelector(selector)
        await page.hover(selector)
        await page.waitForTimeout(500)
    },

    mouseHoverXpath: async (page, xpath, index = 0) => {
        await page.waitForXPath(xpath)
        const elements = await page.$x(xpath)
        await elements[index].hover()
        await page.waitForTimeout(500)
    },

    scrollTop: async (page, selector, scrollDepth) => {
        await page.evaluate((selector, scrollDepth) => {
            const scrollableSection = document.querySelector(selector)
            scrollableSection.scrollTop += scrollDepth
        }, selector, scrollDepth)
    },


    waitSelectorNotExist: async (page, selector, waitTimeSec = 60) => {
        let i = 0
        let selectorNotExist = false
        for (i = 0; i < waitTimeSec; i++) {
            try {
                await page.waitForSelector(selector, { timeout: 1000 })// wait for selector for 1 sec
                await page.waitForTimeout(1000)
            }
            catch (error) {// loader wasn't found
                selectorNotExist = true
                break
            }
        }
        //console.log(`loader dissapeared after ${i} secounds`)
    },

    waitXpathNotExist: async (page, xpath, waitTimeSec = 60) => {
        let i = 0
        let selectorNotExist = false
        for (i = 0; i < waitTimeSec; i++) {
            try {
                await page.waitForXPath(xpath, { timeout: 1000 })// wait for xpath for 1 sec
                await page.waitForTimeout(1000)
            }
            catch (error) {// loader wasn't found
                selectorNotExist = true
                break
            }
        }
        //console.log(`loader dissapeared after ${i} secounds`)
    },

    //moved from super page to locate helpers
    clearValueBackspaceXPath: async (page, xpath, index=0) => {
        try {
            await page.waitForXPath(xpath)
        } catch (error) {
            console.error('xpath not found', xpath)
            assert.isTrue(false, `xpath not found:${xpath}`)
            return false
        }
        const elements = await page.$x(xpath)
        const element = elements[index]
        await element.click()
        await element.click({ clickCount: 3 });        
        await page.keyboard.press('Backspace');
        const inputValue = await element.evaluate(el => el.value)
        for (let i = 0; i <= inputValue.length+1; i++) {
            await page.keyboard.press('Backspace');
        }
        return element
    },
    getXPathAndDoubleClickWithIndex: async (page, xpath, index = 0,numClicks=2) => {
        try {
            await page.waitForXPath(xpath, { timeout: 7000 })
        } catch (error) {
            //console.error('xpath not found', xpath)
            assert.isTrue(false, `xpath not found:${xpath}`)
            return false
        }

        const elements = await page.$x(xpath)
        await elements[index].click({clickCount: numClicks});
        return true
    }



}
