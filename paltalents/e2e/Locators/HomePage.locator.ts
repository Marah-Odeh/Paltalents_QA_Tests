import * as protr from 'protractor';
export class HomePageLocators {
    //Home Page Button
    public static get HomePageButton(): protr.ElementFinder {
        return protr.element(protr.by.css('#home-button'));
    }

    //get Poster Card
    public static get PosterCard(): protr.ElementFinder {
        return protr.element(protr.by.css('#Image-Poster-home'));
    }
    //get right radio button in poster
    public static get RightRadioButton(): protr.ElementFinder {
        return protr.element(protr.by.css('li.slick-active'));
    }

    //get Trending Event Text
    public static get TrendingEventsTitle(): protr.ElementFinder {
        return protr.element(protr.by.css('#Trending-Events-home .slider_title'));
    }
    //get Trending Talents Slider
    public static get TrendingTalentsSlider(): protr.ElementFinder {
        return protr.element(protr.by.css('#Trending-Talents'));
    }

    //get Trending Talents Text
    public static get TrendingTalentsText(): protr.ElementFinder {
        return protr.element(protr.by.css('#Trending-Talents-home .slider_title'));
    }
    //get Footer
    public static get Footer(): protr.ElementFinder {
        return protr.element(protr.by.css('#Footer-home'));
    }
    //Hover image
    public static get MarahImage(): protr.ElementArrayFinder {
        return protr.element.all(protr.by.css('#Trending-Talents-home [alt="Marah"]'));
    }

    //right button in Trending event slider
    public static get RightButtonInTrendingEvent(): protr.ElementFinder {
        return protr.element(protr.by.css('#Trending-Events-home .slick-arrow.slick-next'));
    }
    //right button in Trending Talents slider
    public static get RightButtonInTrendingTalents(): protr.ElementFinder {
        return protr.element(protr.by.css('#Trending-Talents-home .slick-arrow.slick-next'));
    }
    //left button in Trending Talents slider
    public static get LeftButtonInTrendingTalents(): protr.ElementFinder {
        return protr.element(protr.by.css('#Trending-Talents-home .slick-arrow.slick-prev'));

    }
    //left button in Trending Events slider
    public static get LeftButtonInTrendingEvents(): protr.ElementFinder {
        return protr.element(protr.by.css('#Trending-Events-home .slick-arrow.slick-prev'));

    }
    //slick-dots
    public static get slickDots(): protr.ElementArrayFinder {
        return protr.element.all(protr.by.css('.slick-dots li'));
    }
    //Avatar Button
    public static get AvatarButton(): protr.ElementFinder {
        return protr.element(protr.by.css('.Avatar-Button.sb-avatar__image'));
    }
    //Avatar menu
    public static get AvatarMenu(): protr.ElementFinder {
        return protr.element(protr.by.css('ul[role="menu"]'));
    }
    //MonaImage
    public static get MonaImage(): protr.ElementFinder {
        return protr.element(protr.by.css('#Trending-Events [alt="Mona Khammash"]'));
    }
    //Birzeit Event ImagePoster
    public static get BirzeitEventPosterImage(): protr.ElementFinder {
        return protr.element(protr.by.css('.card-image [alt="Birzeit Event"]'));
    }

    //Hover MarahImage Title
    public static get HoverTitle(): protr.ElementArrayFinder {
        return protr.element.all(protr.by.css('#Trending-Talents-home .MuiGridListTileBar-title'));
    }
    //AreenImage
    public static get AreenImage(): protr.ElementArrayFinder {
        return protr.element.all(protr.by.css('#Trending-Talents-home [alt="Areen"]'));
    }
    //Tulkarem Events
    public static get TulkaremEventImage(): protr.ElementArrayFinder {
        return protr.element.all(protr.by.css('#Trending-Events-home [alt="Tulkarm Event"]'));
    }
    //Profile Talent Name
    public static get TalentName(): protr.ElementFinder {
        return protr.element(protr.by.css('.talent-name'));
    }
    //Marah card Image
    public static get MarahCardImage(): protr.ElementArrayFinder {
        return protr.element.all(protr.by.css('#Trending-Talents-home .card-wrapper'));
    }
    //Ramallah Event in Poster
    public static get RamallahEventPosterImage(): protr.ElementFinder {
        return protr.element(protr.by.css('.card-image [alt="Rozana Event"]'));
    }

    //Rawabi Event In Poster
    public static get RawabihEventPosterImage(): protr.ElementFinder {
        return protr.element(protr.by.css('.card-image [alt="Rawabi Event"]'));
    }
    //Trending Events Cards
    public static get EventsCards(): protr.ElementArrayFinder {
        return protr.element.all(protr.by.css('#Trending-Events-home .card-wrapper'));
    }
    //EventTitleID
    public static get EventTitleID(): protr.ElementFinder {
        return protr.element(protr.by.css('#Birzeit-Event-Title'));
    }

}