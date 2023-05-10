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
exports.Helper = void 0;
const protr = require("protractor");
class Helper {
    //Click on elementFinder
    click(element) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                element.click();
                return Promise.resolve(true);
            }
            catch (err) {
                return Promise.reject('Failed to click the element');
            }
        });
    }
    //Send keys to input
    sendkeys(element) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield element.sendKeys();
                return Promise.resolve(true);
            }
            catch (err) {
                return Promise.reject('Failed to sendkeys');
            }
        });
    }
    //navigate to url 
    navigateTo(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protr.browser.get(url);
                return Promise.resolve(true);
            }
            catch (err) {
                return Promise.reject('Failed to navigate To');
            }
        });
    }
    // navigate back method
    navigateBack() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protr.browser.navigate().back();
                return Promise.resolve(true);
            }
            catch (err) {
                return Promise.reject('Failed to navigate back');
            }
        });
    }
    // navigate forword method
    navigateForward() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protr.browser.navigate().forward();
                return Promise.resolve(true);
            }
            catch (err) {
                return Promise.reject('Failed to navigate foroward');
            }
        });
    }
    // navigate refresh method
    navigateRefresh() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protr.browser.navigate().refresh();
                return Promise.resolve(true);
            }
            catch (err) {
                return Promise.reject('Failed to sendkeys');
            }
        });
    }
    //hover on elementFinder
    hover(element) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protr.browser.actions().mouseMove((element)).perform();
                return Promise.resolve(true);
            }
            catch (err) {
                return Promise.reject('Failed to hover the element');
            }
        });
    }
    //maximize the screen
    maximize() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protr.browser.manage().window().maximize();
                return Promise.resolve(true);
            }
            catch (err) {
                return Promise.reject('failed to maximize');
            }
        });
    }
    // IsDisplayed function
    IsDisplay(element, time, iiteration) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //base case
                if (iiteration = 0) {
                    if (element.isDisplayed())
                        return true;
                }
                // check if the element isDisplay when iteration>0
                else {
                    if (iiteration > 0) {
                        if (element.isDisplayed()) {
                            return true;
                        }
                        else if (!element.isDisplayed()) {
                            yield protr.browser.sleep(time);
                            return this.IsDisplay(element, time, iiteration--);
                        }
                    }
                }
            }
            catch (err) {
                return Promise.reject('Failed to locate the element');
            }
        });
    }
}
exports.Helper = Helper;
