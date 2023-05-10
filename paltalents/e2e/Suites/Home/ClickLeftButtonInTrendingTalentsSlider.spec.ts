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

  it('should click Left button in Trending Talents slider ', async () => {
    //Check if left button in Trending Talent Slider is Displayed
    let TLeftbutt: ElementFinder = await HomePageLocators.LeftButtonInTrendingTalents;
    await HelperObject.IsDisplayed(TLeftbutt, 2000, 2);
    // Click the button
    await HelperObject.click(TLeftbutt);
    //Check if left image in Trending Talents Slider is Displayed 
    let LeftImage: ElementFinder = await HomePageLocators.AreenImage.get(1);
    expect(await HelperObject.IsDisplayed(LeftImage, 2000, 2)).toBe(true);

  });

});
