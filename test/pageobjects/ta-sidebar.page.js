import Page from './page';
const index = 9;
class SideBar extends Page {

  /**
  * define elements
  */
  get sideBarStar() { return $('//img[@src="asserts/icons/star.svg"]'); }
  get addSidebarFolder() { return $('//li[contains(text(),"Add Folder")]'); }
  get addSidebarMediaContainer() { return $('//li[contains(text(),"Add Media Container")]'); }
  get sidebarRenders() { return $('//div[@class="MuiDrawer-root MuiDrawer-docked withRouter(SideBar)-drawer-1750"]'); }
  get treeName() { return $('//span[@class="MuiTypography-root MuiListItemText-primary MuiTypography-body1"]'); }
  get moreIcon() { return $('//img[@src="asserts/icons/more-horizontal.svg"]'); }
  get writeFolderName() { return $('//input[@placeholder="Name"]'); }
  get clickAddFolder() { return $('//span[contains(text(),"Add Folder")]'); }
  get clickCancel() { return $('//span[contains(text(),"Cancel")]'); }
  get clickAddMediaContainer() { return $('//span[contains(text(),"Add Media Container")]'); }
  get writeMediaContainerName() { return $('//input[@placeholder="Name"]'); }
  get country() { return $('//div[@id="select-age"]'); }

  get dropDownValue() { return $('//li[@data-value='+ index +']'); }

  get ul() { return $('//ul[@role="listbox"]'); }

<<<<<<< HEAD
  // Delete
  get deleteFolder() { return $('img[src="asserts/icons/delete.svg"]');}

=======
>>>>>>> 44ca20bee1a334ed76ee4f19dd77b773f0749c89
  /**
   * define or overwrite page methods
   */

<<<<<<< HEAD
  getDeleteFolder() {
    return this.deleteFolder.click();
  }
=======
>>>>>>> 44ca20bee1a334ed76ee4f19dd77b773f0749c89

  getDropDown() {
    return this.country.click();

  }

  getCountry() {
    return this.dropDownValue.getText();
  }

  getDropDownClick() {
    this.dropDownValue.click();
  }

  getAddMediaContainer() {
    return this.addSidebarMediaContainer.click();
  }

  setName(name) {
    return this.writeMediaContainerName.setValue(name);
  }
  // setCountry(country) {
  //   return this.country.setValue(country);
  // }

  getClickAddMediaContainer() {
    this.clickAddMediaContainer.click();
  }

  getClickCancel(name) {
    this.addSidebarFolder.click();
    this.writeFolderName.setValue(name);
    return this.clickCancel.click();
  }
  getSideBarFolder(name) {
    this.addSidebarFolder.click();
    this.writeFolderName.setValue(name);
    this.clickAddFolder.click();
  }
  getHorizontalIcon() {
    return this.moreIcon.isDisplayed();
  }

  getClickMoreIcon() {
    return this.moreIcon.click();
  }

  getSidebarIcon() {
    return this.sideBarStar.isDisplayed();
  }
  getSideBar() {
    return this.sidebarRenders.isDisplayed();
  }

  getTreeName() {
    return this.treeName.getText();
  }

  

}

export default new SideBar()
