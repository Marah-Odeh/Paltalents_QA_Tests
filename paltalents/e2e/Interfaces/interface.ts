import { ElementFinder } from "protractor";

export interface HelperInterface{
    click(element : ElementFinder):Promise<any>;
    sendkeys(element : ElementFinder,arg:any):Promise<any>;
    navigateTo(Link:string):Promise<any>;
    navigateBack():Promise<any>;
    navigateForward():Promise<any>;
    navigateRefresh():Promise<any>;
    hover(element : ElementFinder):Promise<any>;
    maximize():Promise<any>;
    IsPresent(elment: ElementFinder, time:number, iteration:number):Promise<any>;
    IsDisplayed(elment: ElementFinder, time:number, iteration:number):Promise<any>;

}
