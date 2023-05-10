import M = require('minimatch');
import { browser, ElementFinder, ElementArrayFinder } from 'protractor';
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


  it('should click First Radio button ', async () => {
    //Get First radio button
    let RdioButtons: ElementArrayFinder = HomePageLocators.slickDots;
    let butt1: ElementFinder = RdioButtons.get(0);
    //Check if the radioButton is Displayed
    await HelperObject.IsDisplayed(butt1, 1000, 4);
    HelperObject.click(butt1);
    //Check if FirstPoster image is Displayed
    let FirstPosterImage: ElementFinder = HomePageLocators.RamallahEventPosterImage;
    expect(await HelperObject.IsDisplayed(FirstPosterImage, 1000, 3)).toBe(true);
  });

});
