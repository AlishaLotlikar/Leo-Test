//to use debug option run `DEBUG=true followed by your .conf.js`
const defaultTimeoutInterval  = process.env.DEBUG ? (60 * 60 * 500) : 90000;

exports.config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // './test/specs/file-to-exclude.js'
        //'./test/specs/ta-contact-us.spec.js',
        //'./test/specs/ta-hotel.spec.js',
       // './test/specs/ta-user-login.spec.js'

    ],

    maxInstances: 15,
  
    capabilities: [
      {
        
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['no-sandbox', 'start-maximized', "--window-size=1366,768"]
        }
      },
  ],
    logLevel: 'silent',     // Level of logging verbosity: silent | verbose | command | data | result | error
 
    deprecationWarnings: true,
   
    bail: 0,
   
    baseUrl: 'http://www.phptravels.net',
    waitforTimeout: 10000,            // Default timeout for all waitFor* commands.
    connectionRetryTimeout: 90000,    // Default timeout in milliseconds for request  // if Selenium Grid doesn't send response
    connectionRetryCount: 3,          // Default request retries count

    

    services: ['selenium-standalone'],
    
    framework: 'jasmine',
   
    jasmineNodeOpts: {
        // Jasmine default timeout
        defaultTimeoutInterval: 60000,
       
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    },

    reporters: [
        'spec',
        ['junit', {
            outputDir: './test/reports/junit-results/',
            outputFileFormat: function(opts) { // optional
                return `results-${opts.cid}.${opts.capabilities}.xml`
            }
          }
        ],

        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
          }
        ],
    ],

   
    beforeSession: function (config, capabilities, specs) {
      require('@babel/register');
    },
   
    before: function (capabilities, specs) {
    },
   
    afterTest: function (test) {
      if (test.error !== undefined) {
        browser.takeScreenshot();
      }
    },
   
}
