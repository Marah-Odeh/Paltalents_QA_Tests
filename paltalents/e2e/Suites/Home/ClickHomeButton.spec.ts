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

  it('should click Home button in Home Page ', async () => {
    //Check if HomeButton is Displayed
    let HomeButt: ElementFinder = await HomePageLocators.HomePageButton;
    await HelperObject.IsDisplayed(HomeButt, 2000, 3);
    //Click Home Button
    await HelperObject.click(HomeButt);
    //Check if the Poster is Displayed, so we are in HomePage 
    let Poster: ElementFinder = await HomePageLocators.PosterCard;
    expect(await HelperObject.IsDisplayed(Poster, 2000, 3)).toBe(true);
  });

});

