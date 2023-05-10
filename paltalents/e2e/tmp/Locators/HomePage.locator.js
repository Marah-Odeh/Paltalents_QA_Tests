"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageLocators = void 0;
const protr = require("protractor");
class HomePageLocators {
    //Home Page Button
    static get HomePageButton() {
        return protr.element(protr.by.css('a#home-button-sm'));
    }
    //get Poster Card
    static get PosterCard() {
        return protr.element(protr.by.css('.card-image [alt="poster"]'));
    }
    //get right radio button in poster
    static get RightRadioButton() {
        return protr.element(protr.by.css('li.slick-active'));
    }
    //get Trending Event Text
    static get TrendingEventsText() {
        return protr.element(protr.by.css('#Trending-Events-home .slider_title'));
    }
    //get Trending Talents Slider
    static get TrendingTalentsSlider() {
        return protr.element(protr.by.css('#Trending-Talents'));
    }
    //get Trending Talents Text
    static get TrendingTalentsText() {
        return protr.element(protr.by.css('#Trending-Talents-home .slider_title'));
    }
    //get Footer
    static get Footer() {
        return protr.element(protr.by.css('#Footer'));
    }
    //Hover image
    static get AreinImage() {
        return protr.element(protr.by.css('#Trending-Talents [alt="Arein Daralnakhla"]'));
    }
    //right button in Trending event slider
    static get RightButtonInTrendingEvent() {
        return protr.element(protr.by.css('#Trending-Events .slick-arrow.slick-next'));
    }
    //right button in Trending Talents slider
    static get RightButtonInTrendingTalents() {
        return protr.element(protr.by.css('#Trending-Talents .slick-arrow.slick-next'));
    }
    //left button in Trending Talents slider
    static get LeftButtonInTrendingTalents() {
        return protr.element(protr.by.css('#Trending-Talents .slick-arrow.slick-prev'));
    }
    //left button in Trending Events slider
    static get LeftButtonInTrendingEvents() {
        return protr.element(protr.by.css('#Trending-Events .slick-arrow.slick-prev'));
    }
    //slick-dots
    static get slickDots() {
        return protr.element.all(protr.by.css('.slick-dots li'));
    }
    //Avatar Button
    static get AvatarButton() {
        return protr.element(protr.by.css('.Avatar-Button.sb-avatar__image'));
    }
}
exports.HomePageLocators = HomePageLocators;
