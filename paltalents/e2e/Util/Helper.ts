import * as protr from 'protractor';
import { HelperInterface } from '../Interfaces/interface';

export class Helper implements HelperInterface {

  //Click on elementFinder
  public async click(element: protr.WebElement): Promise<any> {
    try {
      await element.click();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject('Failed to click the element : ' + err);
    }
  }

  //Send keys to input
  public async sendkeys(element: protr.ElementFinder, arg: any): Promise<any> {

    try {
      await element.sendKeys(arg);
      return Promise.resolve(true);
    }
    catch (err) {
      return Promise.reject('Failed to sendkeys' + err);
    }
  }

  //navigate to url 
  public async navigateTo(url: string): Promise<any> {

    try {
      await protr.browser.get(url);

      return Promise.resolve(true);
    }
    catch (err) {
      return Promise.reject('Failed to navigate To' + err);
    }
  }

  // navigate back method
  public async navigateBack(): Promise<any> {
    try {
      await protr.browser.navigate().back();
      return Promise.resolve(true);
    }
    catch (err) {
      return Promise.reject('Failed to navigate back' + err);
    }

  }

  // navigate forword method
  public async navigateForward(): Promise<any> {

    try {
      await protr.browser.navigate().forward();
      return Promise.resolve(true);
    }
    catch (err) {
      return Promise.reject('Failed to navigate foroward' + err);
    }

  }

  // navigate refresh method
  public async navigateRefresh(): Promise<any> {

    try {
      await protr.browser.navigate().refresh();
      return Promise.resolve(true);
    }
    catch (err) {
      return Promise.reject('Failed to sendkeys' + err);
    }

  }

  //hover on elementFinder
  public async hover(element: protr.ElementFinder): Promise<any> {
    try {
      await protr.browser.actions().mouseMove((element)).perform();

      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject('Failed to hover the element' + err);
    }

  }

  //maximize the screen
  public async maximize(): Promise<any> {
    try {
      await protr.browser.manage().window().maximize();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject('failed to maximize' + err);
    }
  }

  // IsPresent function
  public async IsPresent(element: protr.ElementFinder, time: number, iiteration: number): Promise<any> {
    try {
      await protr.browser.sleep(1000);
      while (iiteration >= 0) {
        if (await element.isPresent()) {
          return true;
        }
        else {
          await protr.browser.sleep(time);
          return await this.IsPresent(element, time, iiteration--);
        }
      }
      if (iiteration < 0)
        throw new Error('element failed to be presented after : ' + iiteration);
    } catch (err) {
      return Promise.reject('Failed to locate the element' + err);
    }

  }

  // IsPresent function
  public async IsDisplayed(element: protr.ElementFinder, time: number, iiteration: number): Promise<any> {
    try {
      while (iiteration >= 0) {
        await protr.browser.sleep(2000);
        if (await element.isDisplayed()) {
          return true;
        }
        else {
          await protr.browser.sleep(time);
          return await this.IsDisplayed(element, time, iiteration--);
        }
      }
      if (iiteration < 0)
        throw new Error('element failed to be displayed after : ' + iiteration);
    } catch (err) {
      return Promise.reject('Failed to locate the element' + err);
    }

  }

}
