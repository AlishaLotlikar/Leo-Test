import HotelPage from '../pageobjects/ta-hotel.page';

describe('navigating to hotels page', function () {

    // beforeAll(() => {
    //     LoginPage.open();
    //     LoginPage.login('user@phptravels.com', 'demouser');
    // })

    it('should allow user to navigating hotel page', function () {
        HotelPage.openPage();
        //HotelPage.waitForHotelPageToLoad();
    });
});