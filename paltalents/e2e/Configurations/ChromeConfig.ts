import { Config } from "protractor";

export let config: Config= {
  framework: 'jasmine',
  // You can pass more browsers
  multiCapabilities: [
    {
      browserName: 'chrome',
      seleniumAddress: 'http://localhost:4444/wd/hub',
      // seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.9.0.jar',
      maxInstances: 1,
      shardTestFiles: false
    }
  ],
  allScriptsTimeout: 90000,
  getPageTimeout: 90000,
  specs:

    [
      
      '../../tmp/Suites/*/*.spec.js'
    
    ],

  params: {
    config: 'RDConfig'
  },
  restartBrowserBetweenTests: false,
  //specs: ['e2e/Signup/GoogleLogin.test.js'],
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  // Setup the report before any tests start
  beforeLaunch: async () => {
  },
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
    isVerbose: true
  },
  // Assign the test reporter to each running instance
  onPrepare: async () => {
  
  },

  // Close the report after all tests finish
  afterLaunch: (exitCode) => {
  
  }

};
