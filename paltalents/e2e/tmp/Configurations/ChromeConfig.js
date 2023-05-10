"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
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
    specs: [
        '../../tmp/Suites/Home/ClickRightButtonInTrendingTalentsSlider.spec.js',
        '../../tmp/Suites/Home/ClickLeftButtonInTrendingTalentsSlider.spec.js'
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
    beforeLaunch: () => __awaiter(void 0, void 0, void 0, function* () {
    }),
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 100000,
        isVerbose: true
    },
    // Assign the test reporter to each running instance
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
    }),
    // Close the report after all tests finish
    afterLaunch: (exitCode) => {
    }
};
