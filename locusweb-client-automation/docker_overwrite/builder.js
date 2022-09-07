const puppeteer = require('puppeteer')
const { baseURL } = require('../config/configuration')

module.exports = class Builder {

    static async buildForRedirect(viewport) {
        const launchOptions = {
            headless: true,
            slowMo: 100,
            ignoreHTTPSErrors: true,
            acceptInsecureCerts: true,
            args: [
                "--proxy-bypass-list=*",
                "--no-first-run",
                '--disable-dev-shm-usage',
                '--disable-setuid-sandbox',
                '--no-first-run', '--no-zygote',
                '--single-process',
                '--ignore-certificate-errors',
                '--ignore-certificate-errors-spki-list',
                '--enable-features=NetworkService',
                "--disable-gpu",
                "--disable-dev-shm-usage",
                "--disable-setuid-sandbox",
                '--disable-web-security',
                "--no-sandbox"
            ]
        };
        const browser = await puppeteer.launch(launchOptions)
        const page = await browser.newPage()
        await page.setExtraHTTPHeaders({ 'upgrade-insecure-requests': '0' })

        switch (viewport) {
            case "Tablet":
                const tableViewport = puppeteer.devices['iPad landscape'];
                await page.emulate(tableViewport);
                break;
            case "SmallScreen":
                await page.setViewport({ width: 800, height: 600 });
                break;
            case "LargeScreen":
                await page.setViewport({ width: 1800, height: 950 });
                break;

            default: throw new Error("unsupported screen resolution")
        }

        return { browser, page }
    }

    static async build(viewport) {
        const launchOptions = {
            headless: true,
            slowMo: 100,
            ignoreHTTPSErrors: true,
            acceptInsecureCerts: true,
            args: [
                "--proxy-bypass-list=*",
                "--no-first-run",
                '--disable-dev-shm-usage',
                '--disable-setuid-sandbox',
                '--no-first-run', '--no-zygote',
                '--single-process',
                '--ignore-certificate-errors',
                '--ignore-certificate-errors-spki-list',
                '--enable-features=NetworkService',
                "--disable-gpu",
                "--disable-dev-shm-usage",
                "--disable-setuid-sandbox",
                '--disable-web-security',
                "--no-sandbox"
            ]
            //executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
        };

        const browser = await puppeteer.launch(launchOptions);
        const context = browser.defaultBrowserContext();
        //const context = browser.createIncognitoBrowserContext();
        context.overridePermissions(baseURL, ['clipboard-read']);
        context.overridePermissions(baseURL, ['clipboard-write']);
        const page = await browser.newPage();
        //const extandPage = new Builder(page);
        await page.setDefaultTimeout(360000)
        await page.setExtraHTTPHeaders({ 'upgrade-insecure-requests': '0' })

        switch (viewport) {
            case "Tablet":
                const tableViewport = puppeteer.devices['iPad landscape'];
                await page.emulate(tableViewport);
                break;
            case "SmallScreen":
                await page.setViewport({ width: 800, height: 600 });
                break;
            case "LargeScreen":
                await page.setViewport({ width: 1800, height: 950 });
                break;

            default: throw new Error("unsupported screen resolution")
        }
        /*page
            // .on('request', request => {
            //     if (request.isNavigationRequest()) {
            //         console.log(JSON.stringify(request.headers()), `${request.url()}`);
            //     }
            // })
            // .on('console', message => console.log(`${message.type().substr(0, 3).toUpperCase()} ${message.text()}`))
            //.on('pageerror', ({ message }) => console.log(message))
            //.on('response', response => console.log(`${response.status()} ${response.url()}`))
            .on('requestfailed', async request => {
                    if(!request.failure().errorText.includes('ERR_ABORTED')) {
                        console.log(`request failed ${request.failure().errorText} ${request.url()} headers: ${JSON.stringify(request.headers())}`)
                        const cookies = await page.cookies()
                        console.log(`cookies: ${JSON.stringify(cookies, null, 2)}`)
                        const cookiesPerUrl = await page.cookies(request.url())
                        console.log(`cookiesPerUrl: ${JSON.stringify(cookiesPerUrl, null, 2)}`)
                    }


                    
                }
            )*/

        // return new Proxy(extandPage, {
        //     get: function (_target, property) {
        //         return extandPage[property] || browser[property] || page[property]
        //     }
        // });
        this.page=page;
        this.browser=browser;
        return page;
    }

    static async closeBrowser(){
        this.browser.close()
    }

    constructor(page) {
        this.page = page;
    }
}