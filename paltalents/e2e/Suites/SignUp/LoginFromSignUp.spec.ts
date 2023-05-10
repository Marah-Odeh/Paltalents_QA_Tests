import M = require('minimatch');
import { browser, ElementFinder } from 'protractor';
import { Helper } from '../../Util/Helper';
import { SignUpTestData } from '../../TestData/SignUpTestData';
import { SignUpLocators } from '../../Locators/SignUp.locators';
import { ArtistSignUpLocators } from '../../Locators/SignUpForArtist.locator';
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

  it('Should click Login  from Artist SignUp Page ', async () => {
    //Check if ChoiceBox is Displayed
    let button: ElementFinder = SignUpLocators.ChoiceBox;
    await HelperObject.IsDisplayed(button, 3000, 2);
    //Click ChoiceBox 
    await HelperObject.click(button);
    //Check if Artist option is Displayed
    let Artistbutt: ElementFinder = SignUpLocators.ArtistOption;
    await HelperObject.IsDisplayed(Artistbutt, 3000, 2);
    //Click Artist Option 
    await HelperObject.click(Artistbutt);
    //Check if Next Button is Displayed
    let NextButton: ElementFinder = SignUpLocators.NextButton;
    await HelperObject.IsDisplayed(NextButton, 3000, 2);
    //Click Next Button 
    await HelperObject.click(NextButton);
    //Check if Artist Talent feild is displayed, so we are in SignUp Page 
    let TalentSignupPage: ElementFinder = ArtistSignUpLocators.ArtistTalent;
    await HelperObject.IsDisplayed(TalentSignupPage, 3000, 2);
    //Check if login button is displayed
    let Login: ElementFinder = ArtistSignUpLocators.Login;
    await HelperObject.IsDisplayed(Login, 3000, 2);
    //Click Login Button
    HelperObject.click(Login);
    //Check if Login Page is Displayed
    let LoginTitle: ElementFinder = ArtistSignUpLocators.LogInTitle;
    await HelperObject.IsDisplayed(LoginTitle, 3000, 2);
    expect(await LoginTitle.getText()).toEqual('Login');

  });
});