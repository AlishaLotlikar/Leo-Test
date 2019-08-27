
import SideBar from '../pageobjects/ta-sidebar.page';

/*
	This is a BDD test using Jasmine JavaScript framework
*/

describe('show side bar', function() {
  it('should have the tree name ', function () {
    SideBar.open();     // navigating to login page
    browser.pause(1000);
    console.log(SideBar.getPageTitle());
    expect(SideBar.getPageTitle()).toContain('Acme Hotels ONE');
  });
});
