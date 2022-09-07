const chai = require('chai');
const puppeteer = require('puppeteer')
const assert = chai.assert;
const Mailosaur = require("mailosaur");

//API Mail
const apiKey = "iqi3LcM09zNKol2u";
const serverId = "oteqqrqo";
const testEmail = "user@oteqqrqo.mailosaur.net";

module.exports = class mailHelpers {
    constructor(key = apiKey) {
        this.server = new Mailosaur(key)
    }

    async getMailServer() {
        return this.server
    }

    async deleteAllMails(mailServer) {
        await mailServer.messages.deleteAll(serverId)
    }

    async verifyMailSubject(mailServer, subject) {
        const email = await mailServer.messages.get(serverId, {
            sentTo: testEmail
        },
            {
                timeout: 20000
            }
        )
        assert.equal(email.subject, subject);
    }

    async getMailLink(mailServer, linkIndex) {
        const email = await mailServer.messages.get(serverId, {
            sentTo: testEmail,
        });
        return email.html.links[linkIndex]
    }

}
