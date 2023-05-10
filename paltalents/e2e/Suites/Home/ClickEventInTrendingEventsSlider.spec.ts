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
        let Poster: ElementFinder = await HomePageLocators.PosterCard;
        await HelperObject.IsPresent(Poster,2000,2);
    });

    it('Should Click event in Trending Events Slider', async () => {
        let event: ElementFinder = HomePageLocators.EventsCards.get(7);
        await HelperObject.IsDisplayed(event, 2000, 2);
        await HelperObject.click(event);
        let EventTitle: ElementFinder = await HomePageLocators.EventTitleID;
        await HelperObject.IsDisplayed(EventTitle, 3000, 2);
        expect(await EventTitle.getText()).toEqual('BIRZEIT EVENT');
    });
});