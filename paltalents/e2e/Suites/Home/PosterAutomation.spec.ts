import M = require('minimatch');
import { browser, ElementFinder } from 'protractor';
import { Helper } from '../../Util/Helper';
import { HomePageTestData } from '../../TestData/HomePageTestData';
import { HomePageLocators } from '../../Locators/HomePage.locator'
let HelperObject = new Helper();

describe('Home Page', () => {
    beforeAll(async () => {
        HelperObject.maximize();
        browser.waitForAngularEnabled(false);
    })

    beforeEach(async () => {
        await HelperObject.navigateTo(HomePageTestData.HomePageURL);
        await browser.sleep(2000);
    });

    it('Check Automation Dislay if it is Display ', async () => {
        //Check if the First Poster imsge is displayed
        let First: ElementFinder = await HomePageLocators.RamallahEventPosterImage;
        await HelperObject.IsDisplayed(First, 1000, 3);
        //Check if the Second image is displayed after 3 secs
        let Second: ElementFinder = await HomePageLocators.RawabihEventPosterImage;
        await HelperObject.IsDisplayed(Second, 1000, 3);
        //Check if the Third image is displayed after 3 secs
        let Third: ElementFinder = await HomePageLocators.BirzeitEventPosterImage;
        expect(await HelperObject.IsDisplayed(Third, 1000, 3)).toBe(true);

    });
});