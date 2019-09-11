import Page from './page';
import { Logger } from 'log4js';
var log4js = require('log4js');
var logger = log4js.getLogger();
class TreeInformationPage extends Page {

    get treeTitle() { return $(' h1[class="MuiTypography-root MuiTypography-h1"]'); }
    get descriptionBlock() { return $('div[id="treeInfo"]'); }
    get propertyMarketingText() { return $('div[id="propMarkText"]');}
    // get uploadButton() { return $('//span[contains(text(),"Upload")]');}
    get editButton() { return $('//p[contains(text(),"EDIT")]');}
    get popupTitle() { return $('//h2[contains(text(),"Edit Tree Description")]');}
    get saveDescButton() { return $('//button[@type="button"]//span[contains(text(),"Save")]');}
    get writeDesc() { return $('//label[contains(text(),"Description")]');}


    getTreeTitle() {
        return this.treeTitle.getText();
    }

    displayDescrptionBlock() {
        return this.descriptionBlock.isDisplayed();
    }

    displayPropMarkText() {
        return this.propertyMarketingText.isDisplayed();
    }

    // displayUploadButton() {
    //     return this.uploadButton.getText();
    // }

    getEditDesc(desc) {
        this.editButton.click();
      
        // this.writeDesc.setValue(desc);
      
    }
    saveDescription(){
        this.popupTitle.isDisplayed();
        browser.pause(2000);
        this.saveDescButton.click();
    }
}

export default new TreeInformationPage()