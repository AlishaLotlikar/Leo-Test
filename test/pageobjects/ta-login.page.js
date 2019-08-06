import Page from './page';

class LoginPage extends Page {

    /**
    * define elements
    */
    get loginText() { return $('//*[@class="panel-heading go-text-right"]');}
    get usernameInput()   { return $('//*[@name="username"]'); }
    get passwordInput()   { return $('//*[@name="password"]'); }
    get rememberMe ()     { return $('//*[@id="remember-me"]'); }
    get loginButton()     { return $('//button[text()="Login"]'); }
    get text() { return $('//*[@class="RTL"]');}
    // get footerImage()     { return $('//*[@id="footer"]/div[1]/div/div/div/div[1]/div/div[2]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('login')       //this will append `login` to the baseUrl to form complete URL
        //browser.pause(3000);
    }
    /**
     * your page specific methods
     */

    // waitForloginPageToLoad () {
    //   if(!this.footerImage.isDisplayed()){
    //     this.footerImage.waitForDisplayed(5000);
    //   }
    // }

    
    getPageTitle(){
      return this.loginText.getText();
    }

    login (username, password) {
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.rememberMe.click();
      this.loginButton.click();
    }

    getUserName(){
      return this.text.getText();
    }
}

export default new LoginPage()
