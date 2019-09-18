
import CardView from '../pageobjects/ta-card-view-page';
import LoginPage from '../pageobjects/ta-login.page';
import GearSettings from '../pageobjects/ta-gear-settings.page';
import utl from '../../utilities/common-utilities';
import assert from 'assert';
var log4js = require('log4js');
var Logger = log4js.getLogger();
Logger.level = 'info';
Logger.info("In Tree Selector Page");
/*
	This is a BDD test using Jasmine JavaScript framework
*/

describe('show side bar', function () {

  beforeAll(() => {
    LoginPage.open();
    let userData = utl.readPasswordCSVFile();
    LoginPage.getLogin(userData[0].username, userData[0].password);
    Logger.info('Read username and password from CSV file')
    browser.pause(2000);
  })

   it('Should be able to display all properties of the selected tree',function(){
    CardView.getPropertyList();
  })


  afterAll(() => {
    LoginPage.getSettings();
    Logger.info('open gear settings to click on logout');
    browser.pause();
    GearSettings.logout();
    Logger.info('User logged out sucessfully');
    browser.pause(1000);
  })
});
