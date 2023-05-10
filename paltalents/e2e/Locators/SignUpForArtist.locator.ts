import * as protr from 'protractor';
export class ArtistSignUpLocators {

    //First Name
    public static get ArtistFirstName(): protr.ElementFinder {
        return protr.element(protr.by.css('#firstName'));
    }
    //LastName
    public static get ArtistLastName(): protr.ElementFinder {
        return protr.element(protr.by.css('#lastName'));
    }

    //Email Address
    public static get ArtistEmail(): protr.ElementFinder {
        return protr.element(protr.by.css('#email'));
    }

    //Password
    public static get ArtistPassword(): protr.ElementFinder {
        return protr.element(protr.by.css('#password'));
    }
    //ConfirmPassword
    public static get ArtistConfirmPassword(): protr.ElementFinder {
        return protr.element(protr.by.css('#ConfirmPassword'));
    }
    //phoneNumber
    public static get ArtistPhone(): protr.ElementFinder {
        return protr.element(protr.by.css('#phoneNumber'));
    }
    //City
    public static get ArtistCity(): protr.ElementFinder {
        return protr.element(protr.by.css('#City'));
    }
    //Main Talent
    public static get ArtistTalent(): protr.ElementFinder {
        return protr.element(protr.by.css('#talent'));
    }
    //Stage Name
    public static get ArtistStageName(): protr.ElementFinder {
        return protr.element(protr.by.css('#stageName'));
    }
    //SignUp Button
    public static get ArtistSignUpButton(): protr.ElementFinder {
        return protr.element(protr.by.css('#signUpButton'));
    }
    //City ListBox
    public static get ArtistListBox(): protr.ElementFinder {
        return protr.element(protr.by.css('.MuiList-root.MuiMenu-list.MuiList-padding'));
    }
    //Birzeit City
    public static get BirzCity(): protr.ElementFinder {
        return protr.element(protr.by.css('li[data-value="Birzeit"]'));
    }
    //Login Button in ArtistPage
    public static get Login(): protr.ElementFinder {
        return protr.element(protr.by.css('a[href="/#/login"]'));
    }
    //Dabka 
    public static get Dabka(): protr.ElementFinder {
        return protr.element(protr.by.css('[data-value="Dabka"]'));
    }
    //Stage
    public static get Stage(): protr.ElementFinder {
        return protr.element(protr.by.css('#stageName'));
    }
    //Locator for LoginTitle in LogInPage
    public static get LogInTitle(): protr.ElementFinder {
        return protr.element(protr.by.css('.MuiTypography-root.MuiTypography-h5'));
    }
    //SignUp with Google
    public static get GoogleSignUp(): protr.ElementFinder {
        return protr.element(protr.by.css('.MuiGrid-root.jss163'));
    }
}