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
      await HelperObject.IsPresent(Poster, 2000, 2);
   });
   it('should click right button in Trending Event slider ', async () => {
      //Check if the right button in Trending Events Slider is displayed
      let rightbutt: ElementFinder = await HomePageLocators.RightButtonInTrendingEvent;
      await HelperObject.IsDisplayed(rightbutt, 2000, 3);
      HelperObject.click(rightbutt);
      //Check if the right image in Slider is Displayed
      let RightImage: ElementFinder = await HomePageLocators.TulkaremEventImage.get(1);
      expect(await HelperObject.IsDisplayed(RightImage, 2000, 3)).toBe(true);

   });
});