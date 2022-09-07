const get = require('core-js/fn/reflect/get')
const { waitAndClick, waitAndType, getXPathAndClick } = require('../common/locateHelpers')
const V3ProjectManagementPage = require('./v3projectManagementPage')
const InfraPage = require('./a_infra_superPage')

module.exports = class ProgressTrackingPage extends V3ProjectManagementPage {

    constructor(page) {
        super(page)
    }

    progressTrackingPageTitle = "//*[@class='title-container']//*[normalize-space(text())='Progress Tracking']"

    // Progress tacking table.
    workOrderName = '//lv-grid-string-with-row-index'
    workOrderType = '//lv-grid-project-type'
    creationDate = '//lv-grid-date-format'
    pathStatus = `//project-status`
    pathDay = '//*[@class="lv-badge-text"]'

    async verifyProgressTrackingPage(page) {
        await waitAndClick(page, this.upperIconProgressTracking)
        await page.waitForXPath(this.progressTrackingPageTitle)
    }
}

