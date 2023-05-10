import * as protr from 'protractor';
export class SignUpLocators {

    //SignUp Page Button Page Button
    public static get SignUpPageButton(): protr.ElementFinder {
        return protr.element(protr.by.css('#signup-button'));
    }

    //SignUp Page Title
    public static get SignUpPageTitle(): protr.ElementFinder {
        return protr.element(protr.by.css('.MuiTypography-root.MuiTypography-h5'));
    }

    //choiceBox
    public static get ChoiceBox(): protr.ElementFinder {
        return protr.element(protr.by.css('#outlined-user-native-simple'));
    }
    //Option Artist
    public static get ArtistOption(): protr.ElementFinder {
        return protr.element(protr.by.css('#outlined-user-native-simple option[value="Artist"]'));
    }
    //Customer Option
    public static get CustomerOption(): protr.ElementFinder {
        return protr.element(protr.by.css('#outlined-user-native-simple option[value="Customer"]'));
    }
    //Next Button
    public static get NextButton(): protr.ElementFinder {
        return protr.element(protr.by.css('#nextButton'));
    }
    //SignUp Caption
    public static get Caption(): protr.ElementArrayFinder {
        return protr.element.all(protr.by.css('.MuiGrid-root span.MuiTypography-caption'));
    }
    //Warning Caption
    public static get WarningCaption(): protr.ElementFinder {
        return protr.element(protr.by.css('.MuiTypography-root.jss368.MuiTypography-caption'));
    }

}