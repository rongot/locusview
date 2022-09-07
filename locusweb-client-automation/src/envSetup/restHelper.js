const axios = require('axios')
const { baseURL } = require('../config/configuration')

const defaultHeader = {
    'Content-Type': 'application/json'
}

async function performPost({ url, body, headers = {} }) {
    const fullHeaders = {...headers, ...defaultHeader}
    const fullUrl = `${baseURL}${url}`
    const res = await axios.post(fullUrl, body, { headers: fullHeaders })
    
    return res.data
}

module.exports = {
    performPost
}
