
import LoginPage from '../pageobjects/ta-login.page';
import assert from 'assert';
import utl from '../../utilities/common-utilities'
import Reporter from '../../utilities/reporter';
var log4js = require('log4js');
var logger = log4js.getLogger();
//logger.debug("Some debug messages");
/*
	This is a BDD test using Jasmine JavaScript framework
*/


describe('Leonardo login page', function () {

  it('Should Show Leonardo Login Page Details', function () {
    logger.info('========================Login Display=======================')
    LoginPage.open();
    Reporter.getLoginPageReport();
    // expect(LoginPage.getPageTitle()).toContain('Login')
    expect(LoginPage.getPageLogo()).toBe(true);
    logger.info('Logo is displayed');
    assert.equal(LoginPage.getPageTitle(), 'Login');
    logger.info('Title of login page matches');
    assert.equal(LoginPage.getEmailLabel(), 'Email Address');
    logger.info('email address label field matches');
    assert.equal(LoginPage.getPasswordLabel(), 'Password');
    logger.info('password label field matches');
    assert.equal(LoginPage.getLoginButtonText(), 'LOGIN');
    logger.info('login button is triggered');
    expect(LoginPage.getCheckbox()).toBe(true);
    logger.info('checkbox component exists');
    assert.equal(LoginPage.getRememberMeText(), 'Remember Me');
    logger.info('Remember Me Label matches');
  });

  it('should display error message if credentials are wrong', function () {
    logger.info("=======================Wrong Credentials======================");
    Reporter.wrongCredentialsReport();
    LoginPage.open();     // navigating to login page
    browser.pause(2000);
    let userData = utl.readPasswordCSVFile();
    LoginPage.getLogin(userData[3].username, userData[3].password);
    browser.pause(2000);
  });

  it('should allow user to login with correct credentials ', function () {
    logger.info('==================User Login=================================')
    Reporter.getLoginReport();
    LoginPage.open();     // navigating to login page
    browser.pause(2000);
    let userData = utl.readPasswordCSVFile();
    logger.info("Reading Password from CSV file")
    LoginPage.getLogin(userData[0].username, userData[0].password);
    logger.info("Logged in successfully");
    browser.pause(2000);
    expect(LoginPage.getLogo()).toBe(true);
    LoginPage.getSettings();
    logger.info('Clicked on setting successfully');
    browser.pause(2000);
    var loggedInName = LoginPage.getUserName();
    var loggedInEmail = LoginPage.getUserEmail();
    assert.equal(LoginPage.getUserName(), loggedInName);
    logger.info('Logged in username is correct');
    assert.equal(LoginPage.getUserEmail(), loggedInEmail);
    logger.info('logged in email address is correct');
  });
});
