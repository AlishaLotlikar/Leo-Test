
import SideBar from '../pageobjects/ta-sidebar.page';
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
  // it('should have the tree name ', function () {
  //   SideBar.getSideBar();
  //   // expect(SideBar.getSideBar()).toBe(true);   
  //   browser.pause(1000);
  //   expect(SideBar.getSidebarIcon()).toBe(true);
  //   browser.pause(2000);
  //   var treeName = SideBar.getTreeName();
  //   assert.equal(SideBar.getTreeName(), treeName);
  //   browser.pause(2000);
  //   expect(SideBar.getHorizontalIcon()).toBe(true);
  //   browser.pause(2000);
  // });

  // it('should allow user to add a folder', function () {
  //   SideBar.getClickMoreIcon();
  //   browser.pause(2000);
  //   SideBar.getSideBarFolder('Alisha');
  //   browser.pause(2000);
  // });

  // it('should render back to home page on cancel', function(){
  //   SideBar.getClickMoreIcon();
  //   browser.pause(2000);
  //   SideBar.getClickCancel('Alisha');
  //   browser.pause(2000);
  // });

  // it('should allow the user to add new media container', function () {
  //   SideBar.getClickMoreIcon();
  //   browser.pause(2000);
  //   SideBar.getAddMediaContainer();
  //   SideBar. setName('New Media Container');
  //   SideBar.getDropDown();
  //   SideBar.getDropDownClick();
  //   SideBar.getCountry();
  //   browser.pause(2000);
  //   // SideBar.setCountry(country);
  //   SideBar.getClickAddMediaContainer();
  //   browser.pause(4000);
  // });

  it('should be able to delete a folder', function () {
<<<<<<< HEAD
    SideBar.getDeleteFolder();
    browser.pause(2000);
=======

>>>>>>> 44ca20bee1a334ed76ee4f19dd77b773f0749c89
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
