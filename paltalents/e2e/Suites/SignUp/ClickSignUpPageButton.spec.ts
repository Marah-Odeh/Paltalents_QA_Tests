import M = require('minimatch');
import { browser, ElementFinder } from 'protractor';
import { Helper } from '../../Util/Helper';
import { SignUpTestData } from '../../TestData/SignUpTestData';
import { SignUpLocators } from '../../Locators/SignUp.locators';
let HelperObject = new Helper();

describe(' SignUp Page', () => {
  beforeAll(async () => {
    HelperObject.maximize();
    browser.waitForAngularEnabled(false);
  })

  beforeEach(async () => {
    await HelperObject.navigateTo(SignUpTestData.SignUpPageURL);
    let SignUpCaption: ElementFinder = SignUpLocators.Caption.get(0);
    await HelperObject.IsDisplayed(SignUpCaption, 3000, 2);
  });

  it('should ckick SignUp button ', async () => {
    //Check if SignUp Button is Displayed
    let button: ElementFinder = SignUpLocators.SignUpPageButton;
    HelperObject.IsDisplayed(button, 3000, 2);
    //Click SignUp Button
    HelperObject.click(button);
    //Check if SignUpCaption is Displayed
    let SignUpCaption: ElementFinder = SignUpLocators.Caption.get(0);
    HelperObject.IsDisplayed(SignUpCaption, 3000, 2);
    expect(await SignUpCaption.getText()).toEqual('Join as Artist if you have a talent that you would like to present or as Customer if you are looking for Artists and advertisement for your Event.');
  });
});