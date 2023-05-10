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

  it('should click image in Trending-Talents ', async () => {
    //Get Talent card
    let MarahCrdImg: ElementArrayFinder = HomePageLocators.MarahCardImage;
    let image: ElementFinder = MarahCrdImg.get(8);
    //Check if Marah card is displayed
    await HelperObject.IsDisplayed(image, 2000, 3);
    //Click the card
    HelperObject.click(image);
    //Check if Marah Odeh Profile is Displayed
    let TalName: ElementFinder = await HomePageLocators.TalentName;
    await HelperObject.IsDisplayed(TalName, 2000, 3);
    expect(await TalName.getText()).toEqual(' Marah Odeh');

  });
});