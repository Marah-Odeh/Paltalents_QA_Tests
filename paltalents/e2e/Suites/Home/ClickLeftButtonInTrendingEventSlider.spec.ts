import M = require('minimatch');
import { browser, ElementFinder } from 'protractor';
import { Helper } from '../../Util/Helper';
import { HomePageTestData } from '../../TestData/HomePageTestData';
import { HomePageLocators } from '../../Locators/HomePage.locator'
let HelperObject = new Helper();

describe('Home Page ', () => {
  beforeAll(async () => {
    HelperObject.maximize();
    browser.waitForAngularEnabled(false);
  })

  beforeEach(async () => {
    await HelperObject.navigateTo(HomePageTestData.HomePageURL);
    let Poster: ElementFinder = await HomePageLocators.PosterCard;
    await HelperObject.IsPresent(Poster,2000,2);
  });

  it('should click Left button in Trending Events slider ', async () => {
    //Check if left button in Trending Events Slider is displayed
    let ELeftbutt: ElementFinder = await HomePageLocators.LeftButtonInTrendingEvents;
    await HelperObject.IsDisplayed(ELeftbutt, 3000, 2);
    //Click the button
    await HelperObject.click(ELeftbutt);
    //Check if the left image in Slider is displayed 
    let LeftImage: ElementFinder = await HomePageLocators.TulkaremEventImage.get(1);
    expect(await HelperObject.IsDisplayed(LeftImage, 3000, 2)).toBe(true);
  });
});
