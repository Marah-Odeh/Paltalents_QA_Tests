import M = require('minimatch');
import { browser, ElementFinder } from 'protractor';
import { Helper } from '../../Util/Helper';
import { HomePageTestData } from '../../TestData/HomePageTestData';
import { HomePageLocators } from '../../Locators/HomePage.locator';
let HelperObject = new Helper();


describe('Home Page', () => {
  beforeAll(async () => {
    HelperObject.maximize();
    browser.waitForAngularEnabled(false);
  })

  it('should navigate to Home Page ', async () => {
    //Navigate Home Page
    await HelperObject.navigateTo(HomePageTestData.HomePageURL);
    //Check if poster is Displayed, so we are in Home Page
    let Poster: ElementFinder = await HomePageLocators.PosterCard;
    expect(await HelperObject.IsDisplayed(Poster, 2000, 2)).toBe(true);

  });

});





