import TreeSelectorPage from '../pageobjects/ta-tree-selector.page';
import LoginPage from '../pageobjects/ta-login.page';
import GearSettings from '../pageobjects/ta-gear-settings.page';
import utl from '../../utilities/common-utilities';
//import { Logger } from 'log4js';
var log4js = require('log4js');
var Logger = log4js.getLogger();
Logger.level = 'info';
Logger.info("In Tree Selector Page");
describe('navigating to Home Page', function () {

    // it('should show dropdown for user with access to multiple trees', function () {
    //     Logger.info('==================Mutliple tree User=================')
    //     LoginPage.open();
    //     let userData = utl.readPasswordCSVFile();
    //     Logger.info('Read CSV File');
    //     LoginPage.getLogin(userData[0].username, userData[0].password);
    //     Logger.info('User Logged in Successfully');
    //     browser.pause(2000);
    //     expect(TreeSelectorPage.DisplayMultiTreeUser()).toBe(true);
    //     Logger.info('Tree selector box is displayed on the screen as the user can select different trees from the displayed list')
    //     browser.pause(2000);
    //     TreeSelectorPage.ClickDropDown();
    //     expect(TreeSelectorPage.ShowSearchBox()).toBe(true);
    //     Logger.info('User is able to see the search box component on the click of the dropdown button')
    //     browser.pause(2000);
    // });

    // it('should show only the single tree name for user with access to one tree', function () {
    //     Logger.info('======================Single Tree User===============================')
    //     LoginPage.open();
    //     let userData = utl.readPasswordCSVFile();
    //     LoginPage.getLogin(userData[4].username, userData[4].password);
    //     Logger.info('Read username and password from CSV file for single user')
    //     browser.pause(2000);
    //     expect(TreeSelectorPage.SingleTreeUser()).toBe(false);
    //     Logger.info('On Login the tree selector box is not displayed on the screen for the user as he does not have permission to seect different tree')
    //     browser.pause(2000);
    // })

    it('should be able to get dropdown', function () {
        Logger.info('==================Get Trees=================')
        LoginPage.open();
        let userData = utl.readPasswordCSVFile();
        Logger.info('Read CSV File');
        LoginPage.getLogin(userData[1].username, userData[1].password);
        browser.pause();
        TreeSelectorPage.getDropdownValues();
        browser.pause(1000);
    })

    it('should be able to search a tree', function () {
        Logger.info('==================Search Value=================')
        LoginPage.open();
        let userData = utl.readPasswordCSVFile();
        Logger.info('Read CSV File');
        LoginPage.getLogin(userData[1].username, userData[1].password);
        browser.pause(1000);
        TreeSelectorPage.setSearchValue('Acme');
        browser.pause(1000);

    })

    afterEach(() => {
        LoginPage.getSettings();
        Logger.info('open gear settings to click on logout');
        browser.pause();
        GearSettings.logout();
        Logger.info('User logged out sucessfully');
        browser.pause(1000);
    })
});