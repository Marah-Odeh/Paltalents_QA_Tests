
import M = require('minimatch');
import { browser, ElementFinder, } from 'protractor';
import { Helper } from '../../Util/Helper';
import { HomePageTestData } from '../../TestData/HomePageTestData';
import { HomePageLocators } from '../../Locators/HomePage.locator'
let HelperObject = new Helper();


describe('Home Page', () => {
  beforeAll(async () => {
    await HelperObject.maximize();
    browser.waitForAngularEnabled(false);
  })

  beforeEach(async () => {
    await HelperObject.navigateTo(HomePageTestData.HomePageURL);
    let Poster: ElementFinder = await HomePageLocators.PosterCard;
    await HelperObject.IsPresent(Poster,2000,2);
  });

  it('should click right button in Trending Talents slider ', async () => {
    //Check if the right button in Trending Talents Slider is Displayed
    let Trightbutt: ElementFinder = await HomePageLocators.RightButtonInTrendingTalents;
    await HelperObject.IsDisplayed(Trightbutt, 2000, 2);
    //Click the button
    HelperObject.click(Trightbutt);
    //Check if the right image in Slider is Displayed
    let RightImage: ElementFinder = await HomePageLocators.AreenImage.get(1);
    expect(await HelperObject.IsDisplayed(RightImage, 2000, 2)).toBe(true);

  });
});