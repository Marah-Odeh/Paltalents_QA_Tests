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

  it('should hover image in Trending-Talents ', async () => {
    //Check if the image is Displayed
    let Aimage: ElementArrayFinder = HomePageLocators.MarahImage;
    let image: ElementFinder = Aimage.get(1);
    await HelperObject.IsDisplayed(image, 2000, 2);
    //Hover Image
    HelperObject.hover(image);
    //Check if the Title of image  is equal'Marah' 
    let ImageTitle: ElementFinder = HomePageLocators.HoverTitle.get(8);
    let Title: ElementFinder = await ImageTitle;
    await HelperObject.IsDisplayed(image, 2000, 2);
    expect(await Title.getText()).toEqual('Marah');

  });
});