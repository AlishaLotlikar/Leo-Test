//to use debug option run `DEBUG=true followed by your .conf.js`
const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;
const logger = require('log4js');
//const logger = require('@wdio/logger');
const env = process.env;
//import env from '../../test-data/test-env';
exports.config = {
  runner: 'local',
  framework: 'jasmine',
  specs: [
    './test/specs/**/*.js'
  ],
  // Patterns to exclude.
  exclude: [
    './test/specs/ta-sidebar.spec.js',
    './test/specs/ta-gear-settings.spec.js',
    './test/specs/ta-tree-selector.spec.js',
    './test/specs/ta-user-login.spec.js',
    // './test/specs/ta-card-view.spec.js',
    './test/specs/ta-edit-media-details-drawer.spec.js',
    './test/specs/ta-tree-information.spec.js',
    './test/specs/ta-sort-filter.spec.js'

  ],

  maxInstances: 15,

  capabilities: [
    {

      maxInstances: 5,

      // browserName: 'chrome',
      // 'goog:chromeOptions': {
      //   args: ['no-sandbox', 'start-maximized', "--window-size=1366,768"]
      // }

       browserName: 'firefox',
       'moz:firefoxOptions': {
        args: ["--window-size=1366,768"]
     
       }

    },
  ],

  services: ['selenium-standalone','firefox-profile'],
  // firefoxProfile: {
  //   extensions: ['C:\\Users\\Zapcom\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles\\n8wdghqe.default-release\\extensions\\cors-everywhere@spenibus.xpi'],
  //   //'browser.startup.homepage': 'http://localhost:3000/'
  firefoxProfile: {
    // 'xpinstall.signatures.required': true,
    extensions: [
      'C:\\Users\\Zapcom\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles\\n8wdghqe.default-release\\extensions\\cors-everywhere@spenibus.xpi', // path to .xpi file
      // '/path/to/extensionB' // or path to unpacked Firefox extension
    ],
   // 'browser.startup.homepage': 'http://localhost:3000/',
  },
  logLevel: 'silent',     // Level of logging verbosity: silent | verbose | command | data | result | error

  deprecationWarnings: true,

  bail: 0,

  baseUrl: 'http://localhost:3000/Login',
  waitforTimeout: 10000,            // Default timeout for all waitFor* commands.
  connectionRetryTimeout: 90000,    // Default timeout in milliseconds for request  // if Selenium Grid doesn't send response
  connectionRetryCount: 3,          // Default request retries count

  jasmineNodeOpts: {
    // Jasmine default timeout
    defaultTimeoutInterval: 1000000,

    expectationResultHandler: function (passed, assertion) {
      // do something
    }
  },

  reporters: [
    'spec',
    ['junit', {
      outputDir: './test/reports/junit-results/',
      disableWebdriverScreenshotsReporting: false,
      outputFileFormat: function (opts) { // optional
        return `results-${opts.cid}.${opts.capabilities}.xml`
      },
      attachments: true
    }
    ],

    ['allure', {
      resultsDir: './test/reports/allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }
    ],
  ],
  onPrepare: function () {

    // var AllureReporter = require('jasmine-allure-reporter');
    // const AllureEnvPropsAdder = require('allure-env-properties-adder').AllureEnvPropsAdder;
    // // allure report
    // jasmine.getEnv().addReporter(new AllureReporter({
    //   resultsDir: 'allure-results',
    //   debug: false,              
    //   override: true,            
    //   props: {                    // mandatory {K-V pairs}
    //       BASE_URL: 'http://localhost:3000/',
    //       ENVIRONMENT: 'STAG',
    //   }
    // }));
    //   jasmine.getEnv().addReporter(new AllureEnvPropsAdder({
    //     outputDir: 'allure-results',       // optional [default: '.']
    //     //fileName: 'C:\\Users\\Zapcom\\Desktop\\Leonardo\\allure-results\\environment.properties',      // optional [default: 'environment.properties']
    //     debug: false,              
    //     override: true,            
    //     props: {                    // mandatory {K-V pairs}
    //         BASE_URL: 'http://localhost:3000/',
    //         ENVIRONMENT: 'STAG',
    //     }
    // }));
    /* 
     * It will take screenshot after each Jasmine function 'it'
     */
    // jasmine.getEnv().afterEach(function (done) {
    //   browser.takeScreenshot().then(function (png) {
    //     allure.createAttachment('Screenshot', function () {
    //       return new Buffer(png, 'base64')
    //     }, 'image/png')();
    //     //allure.addEnvironment('Browser', 'http://localhost:3000/');
    //     done();
    //   })

    // });

  },

  beforeSession: function (config, capabilities, specs) {
    require('@babel/register');
  },

  before: function (capabilities, specs) {
    browser.deleteAllCookies();
    logger.configure({
      appenders: {
        fileLog: { type: "file", filename: "./Logs/ExecutionLog.log", flags: 'w' },
        //console: { type: 'stdout' }
      },
      categories: {
        file: { appenders: ['fileLog'], level: 'error' },
        default: { appenders: ['fileLog'], level: 'info' }
      }
    })

  },

  // screenshots: {
  //   UseScreenshotComparison: false,
  //   TakeScreenshotAtTheEndOfTest: true
  // },

  // beforeLaunch: function () {

  // },
  afterTest: function (test) {
    if (test.error !== undefined) {
      browser.takeScreenshot();
    }
    //   onComplete: function() {
    //     var nodemailer=require('nodemailer');
    //         return new Promise(function (fulfill, reject){
    //           var transporter = nodemailer.createTransport({
    //               host: 'smtp.gmail.com',
    //               port: 465,
    //               secure: true, // use SSL
    //               auth: {
    //                   user: 'alishalotlikar@gmail.com',
    //                   pass: '@lisha95'
    //               }
    //           });
    //           var mailOptions = {
    //               from: 'alishalotlikar@gmail.com', // sender address (who sends)
    //               to: 'alisha.lotlekar@zapcg.com', // list of receivers (who receives)
    //               subject: 'Hello through conf', // Subject line
    //               text: 'Hello world ', // plaintext body
    //               html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js', // html body
    //       };
    //           transporter.sendMail(mailOptions, function(error, info){
    //               if(error){
    //                   return console.log(error)
    //               }
    //               fulfill(info);
    //           });
    //       });
    // }
  }

}
