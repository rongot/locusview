//const args = process.argv
//console.log('printing args', args)

//const dynamicPart = 'webautomationci'
//const dynamicPartV3 = 'webv3automationci'

const dynamicPart = process.env.BASE_URL || 'webautomationci'
const isLocalRun = process.env.LOCAL_RUN
const dynamicPart2 = process.env.BASE_URL2 || 'elenac'


//const dynamicPart = process.env.BASE_URL || 'custom2'
//console.log('BASE_URL', dynamicPart)

module.exports = {
    baseURL: isLocalRun ? 'http://localhost:4000' : `https://${dynamicPart}.nortecview.com`,
    baseURLForApi: `https://${dynamicPart}.nortecview.com`,
    baseURL2: isLocalRun ? 'http://localhost:4000' : `https://${dynamicPart2}.nortecview.com`,
    baseURLForApi2: `https://${dynamicPart2}.nortecview.com`
}
