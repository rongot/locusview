

const body = {
    "username": "test1",
    "password": "12345678",
    "deviceIdentifier": "postman",
    "acceptedTerms": true
}
const url = '/api/v1/authenticate'

module.exports = {
    body,
    url
}