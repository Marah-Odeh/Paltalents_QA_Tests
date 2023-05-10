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

    it('should go to Artist SignUp Page ', async () => {
        //Check if ChoiceBox is Displayed
        let ChoiceBoxbutton: ElementFinder = SignUpLocators.ChoiceBox;
        // await browser.sleep(1000);
        await HelperObject.IsDisplayed(ChoiceBoxbutton, 1000, 3);
        //Click ChoiceBox 
        await HelperObject.click(ChoiceBoxbutton);
        //Check if Artist option is Displayed
        let Artistbutt: ElementFinder = SignUpLocators.ArtistOption;
        await HelperObject.IsDisplayed(Artistbutt, 2000, 3);
        //Click Artist Option 
        await HelperObject.click(Artistbutt);
        //Check if Next Button is Displayed
        let NextButton: ElementFinder = SignUpLocators.NextButton;
        await HelperObject.IsDisplayed(NextButton, 2000, 3);
        //Click Next Button 
        await HelperObject.click(NextButton);
        //Check if Artist SignUp Page is Displayed
        let TalentSignupPage: ElementFinder = ArtistSignUpLocators.ArtistTalent;
        await HelperObject.IsDisplayed(TalentSignupPage, 2000, 3);
        //Check if first name feild is displayed
        let FirstName: ElementFinder = ArtistSignUpLocators.ArtistFirstName;
        await HelperObject.IsDisplayed(FirstName, 2000, 3);
        //Send first name
        await HelperObject.sendkeys(FirstName, 'Noor');
        //Check if last name feild is displayed
        let LastName: ElementFinder = ArtistSignUpLocators.ArtistLastName;
        await HelperObject.IsDisplayed(LastName, 2000, 3);
        //Send last name
        await HelperObject.sendkeys(LastName, 'Odeh');
        //Check if email feild is displayed
        let Email: ElementFinder = ArtistSignUpLocators.ArtistEmail;
        await HelperObject.IsDisplayed(Email, 2000, 3);
        //Send Email
        await HelperObject.sendkeys(Email, 'Noor@Odeh');
        //Check if Pass feild is displayed
        let Pass: ElementFinder = ArtistSignUpLocators.ArtistPassword;
        await HelperObject.IsDisplayed(Pass, 2000, 3);
        //Send Password
        await HelperObject.sendkeys(Pass, '123');
        //Check if ConfPass feild is displayed
        let ConfPass: ElementFinder = ArtistSignUpLocators.ArtistConfirmPassword;
        await HelperObject.IsDisplayed(ConfPass, 2000, 3);
        //Send Conf Password
        await HelperObject.sendkeys(ConfPass, '123');
        //Check if City feild is displayed
        let City: ElementFinder = ArtistSignUpLocators.ArtistCity;
        await HelperObject.IsDisplayed(City, 2000, 3);
        //Click City Button
        await HelperObject.click(City);
        //Click BZ City
        let BZCity: ElementFinder = ArtistSignUpLocators.BirzCity;
        await HelperObject.click(BZCity);
        //Check if Pjone number feild is displayed
        let PhoneNumber: ElementFinder = ArtistSignUpLocators.ArtistPhone;
        await HelperObject.IsDisplayed(PhoneNumber, 2000, 3);
        //Send Phone number
        await HelperObject.sendkeys(PhoneNumber, '059');
        //Check if MainTalent feild is displayed
        let MTalent: ElementFinder = ArtistSignUpLocators.ArtistTalent;
        await HelperObject.IsDisplayed(MTalent, 2000, 3);
        //Click Main Talents
        await HelperObject.click(MTalent);
        //Click Dabka
        let Dabka: ElementFinder = ArtistSignUpLocators.Dabka;
        await HelperObject.click(Dabka);
        //Check if StageName feild is displayed
        let Stage: ElementFinder = ArtistSignUpLocators.Stage;
        await HelperObject.IsDisplayed(Stage, 2000, 3);
        //Send Stage
        await HelperObject.sendkeys(Stage, 'BZU');
        //Check if SignUP  Button is displayed
        let SUButt: ElementFinder = ArtistSignUpLocators.ArtistSignUpButton;
        await HelperObject.IsDisplayed(SUButt, 2000, 3);
        //Click SignUp Button
        await HelperObject.click(SUButt);
        //SignUp main Page is Displayed
        let SignUpCaption: ElementFinder = SignUpLocators.Caption.get(0);
        await HelperObject.IsDisplayed(SignUpCaption, 3000, 2);
        expect(await SignUpCaption.getText()).toEqual('Join as Artist if you have a talent that you would like to present or as Customer if you are looking for Artists and advertisement for your Event.');
    });
});