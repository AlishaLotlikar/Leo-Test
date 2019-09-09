import Page from './page';
//import { Logger } from 'log4js';
var log4js = require('log4js');
var Logger = log4js.getLogger();
Logger.level = 'info';
class TreeSelector extends Page {

    get dropDown() { return $('//div[@id="treeSelectorContainerDiv"]'); }
    get searchBox() { return $('//div[@id="treeSelectorSearchInput"]'); }

    // open () {
    //     super.open('m-thhotels')       
    //     browser.pause(2000);
    // }

    // waitForHotelPageToLoad () {
    //     if(!this.text.isDisplayed()){
    //       this.text.waitForDisplayed(3000);
    //     }
    //   }

    DisplayMultiTreeUser() {
        Logger.info('In Multi tree user function')
        return this.dropDown.isDisplayed();
    }

    ClickDropDown() {
        Logger.info('In Click Drop Down function');
        this.dropDown.click();
        browser.pause(2000);
    }

    ShowSearchBox() {
        Logger.info('In Show search box function');
        return this.searchBox.isDisplayed();
    }



    SingleTreeUser() {
        Logger.info('In Multi tree user function')
        return this.dropDown.isDisplayed();
    }

}
export default new TreeSelector()