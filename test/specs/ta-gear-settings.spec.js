import SettingsPage from '../pageobjects/ta-gear-settings.page';
import LoginPage from '../pageobjects/ta-login.page';
import utl from '../../utilities/common-utilities';
import Reporter from '../../utilities/reporter';
import assert from 'assert';
import { Logger } from 'log4js';
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';
logger.info("In Settings Page");

const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits')
const EC = ExpectedConditions;

describe('navigating to settings', function () {

    beforeEach(() => {
        LoginPage.open();
        browser.pause(2000);
        let userData = utl.readPasswordCSVFile();
        LoginPage.getLogin(userData[0].username, userData[0].password);
        browser.pause(2000);
        LoginPage.getSettings();
        browser.pause();

    })

    it('should render the change password tab', function () {
        logger.info('=================Change Password======================')
        Reporter.changePasswordTab();
        SettingsPage.open();
       // waitFor(EC.visibilityOf(() => $('//div[@role="dialog"]/div[@class="MuiDialogTitle-root"]/h2[contains(text(),"Change Password")]')), 5000);
        //SettingsPage.changePasswordInfoTitle();
        //assert.equal(SettingsPage.changePasswordInfoTitle(), 'Change Password');
        logger.info('should have the title "Change Password" on the dialog box');
        SettingsPage.changePassword('Admin1234','Alisha123','Alisha123');
        // assert.equal(SettingsPage.getCurrentField(), 'Current Password');
        // logger.info('should have the title "Current Password" on the dialog box');
        // assert.equal(SettingsPage.getNewField(), 'New Password');
        // logger.info('should have the title "New Password" on the dialog box');
        // assert.equal(SettingsPage.getConfirmField(), 'Confirm Password');
        logger.info('should have the title "Confirm Password" on the dialog box');
        browser.pause(2000);
    })

    // it('should allow user to edit profile', function () {
    //     Logger.info('======================Edit Profile========================');
    //     SettingsPage.edit();
    //     browser.pause(2000);
    // });

    // it('should fail if the passwords do not match',function(){
    //     Logger.info('===========Change Password Fail=============');
    //     SettingsPage.openChangePasswordDialog();
    //     var pass = utl.readChangePasswordCSVFile();
    //     SettingsPage.changePassword(pass[2].current,pass[2].new,pass[2].confirm);
    //     browser.pause(2000);
    // })

    // afterEach(() => {
    //     LoginPage.getSettings();
    //     Logger.info('open gear settings to click on logout');
    //     browser.pause();
    //     SettingsPage.logout();
    //     Logger.info('User logged out sucessfully');
    //     browser.pause(1000);
    // })
});