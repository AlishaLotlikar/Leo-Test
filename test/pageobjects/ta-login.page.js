import Page from './page';
import { Logger } from 'log4js';
var log4js = require('log4js');
var logger = log4js.getLogger();
class LoginPage extends Page {

  /**
  * define elements
  */
  //get loginText() { return $('//*[@class="panel-heading go-text-right"]');}
  
  get logo() { return $('//img[@src="asserts/leonardo-logo.svg"]'); }
  get loginText() { return $('//h1[contains(text(),"Login")]'); }
  get loginLogo() { return $('//img[@src="asserts/leonardo-logo-black-text.svg"]'); }
  get emailLabel() { return $('//label[@for="email"]'); }
  get passwordLabel() { return $('//label[@for="password"]'); }
  get loginButtonText() { return $('//button/span[@class="MuiButton-label"]'); }
  get RememberMeText() { return $('//label[@for="rememberMe"]/span[contains(text(),"Remember Me")]');}
  get usernameInput() { return $('//input[@id="email"]'); }
  get passwordInput() { return $('//*[@id="password"]'); }
  get rememberMe() { return $('//*[@id="rememberMe"]'); }
  get loginButton() { return $('//button[@type="submit"]'); }
  get clickSettings() { return $('//img[@src="asserts/icons/settings_white.svg"]'); }
  get username() { return $('//div/p[@class="MuiTypography-root MuiTypography-body1"]');}
  get useremail() { return $('//div[@class="subtext"]');}
  /**
   * define or overwrite page methods
   */
  open() {
    super.open('login')       //this will append `login` to the baseUrl to form complete URL
    //browser.pause(3000);
  }

  getPageLogo() {
    logger.info('In Get Page Logo function')
    return this.loginLogo.isDisplayed();
  }

  getEmailLabel() {
    logger.info('In Get Email Label function');
    return this.emailLabel.getText();
  }

  getPasswordLabel() {
    logger.info('In Get Password function');
    return this.passwordLabel.getText();
  }

  getLoginButtonText() {
    logger.info('in get login button text');
    return this.loginButtonText.getText();
  }

  getPageTitle() {
    logger.info('In get page title function');
    return this.loginText.getText();
  }

  getRememberMeText(){
    logger.info('In get remember me text function');
    return this.RememberMeText.getText();
  }

  getCheckbox(){
    logger.info('In get Checkbox function');
    return this.rememberMe.isDisplayed();
  }

  getLogin(username, password) {
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.rememberMe.click();
    logger.info('Before login');
    this.loginButton.click();
    logger.info('After login');

  }
  getLogo() {
    logger.info('In Get Logo function');
    return this.logo.isDisplayed();
  }

  getSettings() {
    logger.info('In get settings function');
    return this.clickSettings.click();
  }
  getUserName() {
    logger.info('In get username function');
    return this.username.getText();
  }

  getUserEmail() {
    logger.info('In get User Email function');
    return this.useremail.getText();
  }
}

export default new LoginPage()
