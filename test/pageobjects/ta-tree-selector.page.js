import Page from './page';
//import { Logger } from 'log4js';
var log4js = require('log4js');
var Logger = log4js.getLogger();
Logger.level = 'info';
class TreeSelector extends Page {

    get dropDown() { return $('//div[@id="treeSelectorContainerDiv"]'); }
    get searchBox() { return $('//div[@id="treeSelectorSearchInput"]'); }
    get searchValue() {return $('input[id="react-select-single" ]')}
    get searchIcon() { return $('span[id="searchIcon"  ]')}
    get dropdownValues() {
        return $('div[class=" css-1ml51p6-MenuList"]')
    }

    setSearchValue(value) {
        console.log('In search Function')
        this.dropDown.click();
        browser.pause(2000);
        this.searchValue.setValue(value);
        this.dropdownValues.$$('div').map((elmt,i) => {
            browser.pause(2000);
            console.log('element - ' +i, elmt.getText());
            elmt.click();
            browser.pause(2000);
            this.dropDown.click();
        });
        // this.searchValue.clearValue();
    }
    getDropdownValues() {
        console.log('In tree selector Function')
        this.dropDown.click();
        browser.pause(2000);
        // var treeValues = browser.getElements(this.dropdownValues).map(option => option.getText());
        this.dropdownValues.$$('div').map((elmt,i) => {
            browser.pause(2000);
            console.log('element - ' +i, elmt.getText());
            elmt.click();
            browser.pause(2000);
            this.dropDown.click();
        });
    }
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