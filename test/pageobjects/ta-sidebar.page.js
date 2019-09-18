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

  get dropDownValue() { return $('//li[@data-value=' + index + ']'); }
  get confirmDelete() { return $('//span[contains(text(),"Delete Folder")]')}
  get ul() { return $('//ul[@role="listbox"]'); }
  get propertyList() { return $('div[role="rowgroup" ]'); }
  /**
   * define or overwrite page methods
   */
  getPropertyList() {
    console.log('In Propert List');
    var folder=[];
    
    this.propertyList.$$('div.rstcustom__node div.rstcustom__nodeContent').map((elmt, i) => {
      browser.pause(3000);
      console.log('property - ' + i, elmt.getText());
      folder.push(elmt.getText());
    });
    console.log('folder name',folder);
    

    // folder[1]
    
  }

  getDeleteFolder() {
    var deleteID=[];
    browser.pause(2000);
    this.propertyList.$$('div.rstcustom__node div.rstcustom__nodeContent div div.rstcustom__rowWrapper.rstcustom__rowWrapperDragDisabled div.rstcustom__row div.rstcustom__rowContents.undefined div.rstcustom__rowToolbar div.rstcustom__toolbarButton img').map((elem,id)=>{  
      browser.pause(3000);
      console.log('property' , id );
      deleteID.push(elem.getText());
      elem.getText();
      browser.pause(6000);
    })
    console.log('folder ids', deleteID);
     deleteID[1].click();
    // this.confirmDelete.click();

  }

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
