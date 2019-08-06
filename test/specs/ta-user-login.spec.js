
import LoginPage from '../pageobjects/ta-login.page';
import assert from 'assert';
import Allure from 'allure-js-commons'
import utl from '../../utilities/common-utilities';

/*
	This is a BDD test using Jasmine JavaScript framework
*/



describe('phptravels.net login page', function() {

  it('should get title',function (){
    LoginPage.open();  
    console.log(LoginPage.getPageTitle());
    expect(LoginPage.getPageTitle()).toContain('LOGINS')
  })

  it('should allow user to login ', function () {
    LoginPage.open();     // navigating to login page
    browser.pause(2000);
    LoginPage.login(utl.getUsername(), utl.getPassword());    
    browser.pause(2000);
    console.log(LoginPage.getUserName());
    var loggedInname=LoginPage.getUserName();
    expect(LoginPage.getUserName()).toContain(loggedInname);
  });
});
