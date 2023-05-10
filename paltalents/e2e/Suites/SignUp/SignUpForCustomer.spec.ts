import M = require('minimatch');
import { browser,ElementFinder } from 'protractor';
import { Helper } from '../../Util/Helper';
import { SignUpTestData } from '../../TestData/SignUpTestData';
import { SignUpLocators } from '../../Locators/SignUp.locators';
import { CustomerSignUpLocators } from '../../Locators/SignUpForCustomer.locator';

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

    it('should  go to Customer SignUp Page ', async () => {
        //Check if ChoiceBox is Displayed
        let ChoiceBoxbutton: ElementFinder = SignUpLocators.ChoiceBox;
        await HelperObject.IsDisplayed(ChoiceBoxbutton,2000,2);
        //Click ChoiceBox
       await  HelperObject.click(ChoiceBoxbutton);
        //Check if Customer Option is Displayed
        let Cbutton: ElementFinder = SignUpLocators.CustomerOption;
        await HelperObject.IsDisplayed(Cbutton,2000,2);
        //Click Customer Option
        HelperObject.click(Cbutton);
        //Check if Next Button is Displayed
        let NextButton: ElementFinder = SignUpLocators.NextButton;
        await HelperObject.IsDisplayed(NextButton,2000,2);
        //Click next Button
        await HelperObject.click(NextButton);
        //Check if Customer SignUp Page is Displayed
        let CustOrganization: ElementFinder = CustomerSignUpLocators.CustOrgaName;
        await HelperObject.IsDisplayed(CustOrganization,2000,2);
        //Check if first name feild is displayed
        let FirstName: ElementFinder = CustomerSignUpLocators.CustFirstName;
        await HelperObject.IsDisplayed(FirstName,2000,2);
        //Send first name
        HelperObject.sendkeys(FirstName, 'Majed');
        //Check if last name feild is displayed
        let LastName: ElementFinder = CustomerSignUpLocators.CustLastName;
        await HelperObject.IsDisplayed(LastName,2000,2);
        //Send last name
        await HelperObject.sendkeys(LastName, 'Odeh');
        //Check if email feild is displayed
        let Email: ElementFinder = CustomerSignUpLocators.CustEmail;
        await HelperObject.IsDisplayed(Email,2000,2);
        //Send Email
        await HelperObject.sendkeys(Email, 'Majed@Odeh');
        //Check if Pass feild is displayed
        let Pass: ElementFinder = CustomerSignUpLocators.CustPassword;
        await HelperObject.IsDisplayed(Pass,2000,2);
        //Send Password
        await HelperObject.sendkeys(Pass, 'pass');
        //Check if ConfPass feild is displayed
        let ConfPass: ElementFinder = CustomerSignUpLocators.CustConfirmPassword;
        await HelperObject.IsDisplayed(ConfPass,2000,2);
        //Send Conf Password
        await HelperObject.sendkeys(ConfPass, 'pass');
        //Check if City feild is displayed
        let City: ElementFinder = CustomerSignUpLocators.CustCity;
        await HelperObject.IsDisplayed(City,2000,2);
        //Click City Button
        await HelperObject.click(City);
        //Click BZ City
        let BZCity: ElementFinder = CustomerSignUpLocators.BirzCity;
        await HelperObject.click(BZCity);
        //Check if Phone number feild is displayed
        let PhoneNumber: ElementFinder = CustomerSignUpLocators.CustPhone;
        await HelperObject.IsDisplayed(PhoneNumber,2000,2);
        //Send Phone number
        await HelperObject.sendkeys(PhoneNumber, '0599');
        await browser.sleep(1000);
        //Check if OrgaName number feild is displayed
        let OrgName: ElementFinder = CustomerSignUpLocators.CustOrgaName;
        await HelperObject.IsDisplayed(OrgName,2000,2);
        //Send Orga Name
        await HelperObject.sendkeys(OrgName, 'BZU');
        //Check if OrgaName Address feild is displayed
        let OrgAddr: ElementFinder = CustomerSignUpLocators.CustOrgaAddress;
        await HelperObject.IsDisplayed(OrgAddr,2000,2);
        //Send Orga Address
        await HelperObject.sendkeys(OrgAddr, 'Ramallah');
        //Check if SignUP  Button is displayed
        let SUButt: ElementFinder = CustomerSignUpLocators.CustSignUpButt;
        await HelperObject.IsDisplayed(SUButt,2000,2);
        //Click SignUp Button
        await HelperObject.click(SUButt);
        //SignUp main Page is Displayed
        let SignUpCaption: ElementFinder = SignUpLocators.Caption.get(0);
        await HelperObject.IsDisplayed(SignUpCaption, 3000, 2);
        expect(await SignUpCaption.getText()).toEqual('Join as Artist if you have a talent that you would like to present or as Customer if you are looking for Artists and advertisement for your Event.');
    });
});