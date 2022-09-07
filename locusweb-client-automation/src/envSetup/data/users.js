const url = '/api/v1/users/'

const data = [
    {
        "username": "TestV",
        "firstName": "Bob ",
        "lastName": "Marley",
        "email": "justanemail@some.com",
        "phoneNumber": null,
        "additionalInfo": "no woman no cry",
        "role": "VIEWER",
        "password": "nView123",
        "status": "ACTIVE"
    },
    {
        "username": "TestC",
        "firstName": "John ",
        "lastName": "Lennon",
        "email": "anothermail@some.com",
        "phoneNumber": "+972541234567",
        "additionalInfo": "we are living in a yellow submarine",
        "role": "CONFIGURATOR",
        "password": "nView123",
        "status": "ACTIVE"
    },
    {
        "username":"TestM",
        "firstName":"Ray",
        "lastName":"Charles",
        "email":"nomailbox@some.com",
        "phoneNumber": null,
        "additionalInfo":"Hit the road Jack and don't you come back no more, no more, no more, no more",
        "role":"MOBILE",
        "password":"nView123",
        "status":"ACTIVE"
    },
    {
        "username":"TestA",
        "firstName":"Leonard",
        "lastName":"Cohen",
        "email":null,
        "phoneNumber":"+972537654321",
        "additionalInfo":"A million candles burning for the help that never came\nYou want it darker",
        "role":"APPROVER",
        "password":"nView123",
        "status":"ACTIVE"
    },
    {
        "username":"TestE",
        "firstName":"Nick",
        "lastName":"Cave",
        "email":null,
        "phoneNumber":null,
        "additionalInfo":"She says, where can my loverman be? Well, I'm down here, babe, with the Eskimos, with the polar bears and the Arctic snow, with a party of penguins who do not know how I can get back to thee",
        "role":"EDITOR",
        "password":"nView123",
        "status":"ACTIVE"
    }   
]

module.exports = {data, url}
