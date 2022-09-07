const { performPost } = require('./restHelper')
const authData = require('./data/auth')
const userData = require('./data/users')
const formData = require('./data/form_types')
const assetData = require('./data/asset_types')
const projectData = require('./data/project_types')


async function loopPostRequest({ data = [], url }, headers) {    
    for(let i = 0; i < data.length; i++) {
        await performPost({url, body: data[i], headers })
    }
}

async function setupEnv() {
    try {
        // auth
        const { token } = await performPost(authData)
        const authHeader = { Authorization: `Token ${token}` }
        // create users
        await loopPostRequest(userData, {...authHeader})
        //create form types
        await loopPostRequest(formData, {...authHeader})
        //create asset types
        await loopPostRequest(assetData, {...authHeader})
        //create project types
        await loopPostRequest(projectData, {...authHeader})
        //report config create success
        console.log('runServerConfiguration is done')
    } catch (err) {
        console.log('setupEnv failure aborting', err)
        process.exit(1)
    }
}

setupEnv()
