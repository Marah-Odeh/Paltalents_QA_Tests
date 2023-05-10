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
const protractor_1 = require("protractor");
const Helper_1 = require("../../Util/Helper");
const HomePageTestData_1 = require("../../TestData/HomePageTestData");
const HomePage_locator_1 = require("../../Locators/HomePage.locator");
let HelperObject = new Helper_1.Helper();
describe('Click Left button in Trending Talents', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        HelperObject.maximize();
        protractor_1.browser.waitForAngularEnabled(false);
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield HelperObject.navigateTo(HomePageTestData_1.HomePageTestData.HomePageURL);
        yield protractor_1.browser.sleep(2000);
    }));
    it('should click Left button in Trending Talents slider ', () => __awaiter(void 0, void 0, void 0, function* () {
        let TLeftbutt = yield HomePage_locator_1.HomePageLocators.LeftButtonInTrendingTalents;
        expect(yield TLeftbutt.isDisplayed()).toBe(true);
        HelperObject.click(TLeftbutt);
        yield protractor_1.browser.sleep(3000);
    }));
});
