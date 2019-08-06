import Page from './page';
import LoginPage from './ta-login.page'

class HotelPage extends Page {

    get hotelTab() { return $('//li[@data-title="thhotels"]/a[@href="https://www.phptravels.net/m-thhotels"]'); }
    get text() { return $('//*[text()=" Featured Tours"]'); }

    // open () {
    //     super.open('m-thhotels')       
    //     browser.pause(2000);
    // }

    // waitForHotelPageToLoad () {
    //     if(!this.text.isDisplayed()){
    //       this.text.waitForDisplayed(3000);
    //     }
    //   }

    openPage() {
        LoginPage.open();
        this.hotelTab.click();

    }

}
export default new HotelPage()