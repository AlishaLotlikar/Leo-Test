import Page from './page';
import LoginPage from './ta-login.page';

class SideBar extends Page {

    /**
    * define elements
    */

   get sidebarTree() { return $('//*[@title="Acme Hotels ONE"]/span[text(),"Acme Hotels ONE"]'); }
   get sidebarRenders() { return $('//div[@class="MuiPaper-root MuiPaper-elevation0 MuiDrawer-paper withRouter(SideBar)-drawerPaper-939 MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft"]');}


    /**
     * define or overwrite page methods
     */
    open () {
       // super.open('home')       //this will append `contact-us` to the baseUrl to form complete URL
       LoginPage.open();     // navigating to login page
       browser.pause(2000);
       let userData = utl.readCSVFile();
       console.log(userData);
       LoginPage.login(userData.username, userData.password);
       browser.pause(2000);
       this.sidebarRenders.isDisplayed();
    }

    getPageTitle(){
      return this.sidebarTree.getText();
    }
}

export default new SideBar()
