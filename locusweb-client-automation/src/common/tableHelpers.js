const chai = require('chai');
const assert = chai.assert;
//*[@role="row"][@row-index="{{0}}"]//div[@col-id="{{1}}"]
const { waitAndClick, waitAndType, getXPathAndClick, getXPathAndDoubleClick, scrollTop, getXPathAndType, waitXpathNotExist,
    getText, mouseHoverXpath, mouseHoverSelector, getInnerText, getTextContent } = require('../common/locateHelpers')

const tableRow = `//*[@role="row"][@row-index="{{0}}"]//div[@col-id="{{1}}"]`
const columnName = '//*[contains(@class, "customHeaderLabel")][contains(text(), {{0}})]'


module.exports = {
    
    collectColumnTexts: async (tableLength, page, colId, specificInCell) => {
        const texts = []
        for (let x = 0; x < tableLength; x++) {
            const innterText = await getInnerText(page, tableRow.replace("{{0}}", `${x}`).replace("{{1}}", `${colId}`) + specificInCell, 0)
            await texts.push(innterText)
        }
        return texts
    },

    isAllColTextsEqual: async (page, counter, colId, specificInCell, expected) => {
        for (let x = 0; x < counter; x++) {
            const innterText = await getInnerText(page, tableRow.replace("{{0}}", `${x}`).replace("{{1}}", `${colId}`) + specificInCell, 0)
            if (innterText !== expected) {
                return false
            }
        }
        return true
    },

    verifyTableHeaders: async (page, expectedTableHeaders, columnXpath=columnName) => {
        const elements = await page.$x(columnXpath.replace('{{0}}', '""'))
        const tableHeaders = []
        for (let x = 0; x < elements.length; x++) {
            const header = await elements[x].evaluate(e => e.innerText)
            tableHeaders.push(header)
        }
        assert.deepEqual(tableHeaders, expectedTableHeaders)
    },

    clickTableHeader: async (page, tableHeader) => {
        // Click table header by header name
        await getXPathAndClick(page, columnName.replace('{{0}}', `'${tableHeader}'`))
    },

    isListDatesSorted(dates, isDescending) {
        // After using collectColumnTexts to collect the dates, check by this function if dates are sorted
        for (let x = 0; x < dates.length - 1; x++) {
            const date1 = new Date(dates[x])
            const date2 = new Date(dates[x + 1])
            if ((isDescending && date1 < date2) || (!isDescending && date1 > date2)) {
                console.log('wrong dates order,', date1, date2, `index ${x}, isDescending=${isDescending}`)
                return false
            }
        }
        return true
    },

    isSortedArrAlphabetically(counter, arr) {
        // After using collectColumnTexts to collect the column texts, check by this function if text are sorted Alphabetically
        let sorted = true
        for (let x = 0; x < counter; x++) {
            const res = arr[x].localeCompare(arr[x + 1]) //compares with the next
            if (res > 0) {
                sorted = false
            }
        }
        return sorted
    },
    
    isArrayNumbersSorted(numList, isDescending) {
        for (let x = 0; x < numList.length - 1; x++) {
            const num1 = numList[x]
            const num2 = numList[x + 1]
            if ((isDescending && num1 < num2) || (!isDescending && num1 > num2)) {
                console.log('wrong dates order,', num1, num2, `index ${x}, isDescending=${isDescending}`)
                return false
            }
        }
        return true
    },

    getTableRow(){
        return tableRow
    }

}