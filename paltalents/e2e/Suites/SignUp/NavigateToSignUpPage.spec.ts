import M = require('minimatch');
import { browser, ElementFinder } from 'protractor';
import { Helper } from '../../Util/Helper';
import { SignUpTestData } from '../../TestData/SignUpTestData';
import { SignUpLocators } from '../../Locators/SignUp.locators';
let HelperObject = new Helper();

describe(' SignUp', () => {
  beforeAll(async () => {
    HelperObject.maximize();
    browser.waitForAngularEnabled(false);
  })


  it('should navigate to Home Page ', async () => {
    await HelperObject.navigateTo(SignUpTestData.SignUpPageURL);
    let SignUpCaption: ElementFinder = await SignUpLocators.Caption.get(0);
    await HelperObject.IsDisplayed(SignUpCaption,2000,2);
    expect(await SignUpCaption.getText()).toEqual('Join as Artist if you have a talent that you would like to present or as Customer if you are looking for Artists and advertisement for your Event.');
  });

});