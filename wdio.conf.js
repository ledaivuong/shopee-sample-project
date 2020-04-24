exports.config = {
    runner: 'local',
    specs: [
        './tests/features/*.feature'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--disable-gpu',
                '--disable-extensions',
                '--disable-popup-blocking',
                '--disable-infobars'
            ]
        }
    }],
    logLevel: 'error',
    baseUrl: 'http://newtours.demoaut.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    reporters: ['spec', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: './allure-report/',
            useCucumberStepReporter: false,
            disableMochaHooks: true
        }
    },
    framework: 'cucumber',
    cucumberOpts: {
        timeout: 200000,
        requireModule: ['@babel/register'],
        require: ['./tests/stepDefinitions/*.js']
    },
    before: function (capabilities, specs) {
        // =================
        // Assertion Library
        // =================
        const chai = require('chai')
        global.expect = chai.expect
        global.assert = chai.assert
        global.should = chai.should()
        // ======================
        // Global Variable
        // ======================
        global.baseUrl = "http://newtours.demoaut.com/"
        global.context = {}
        global.shortTimeout = 10000
        global.longTimeout = 30000
        // ===============
        // Custom Commands
        // ===============
    },
    afterTest: function (test) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }
    },
}
