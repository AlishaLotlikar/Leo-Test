import Page from './page';
//import { Logger } from 'log4js';
var log4js = require('log4js');
var Logger = log4js.getLogger();
Logger.level = 'info';
class CardView extends Page {

    get propertyList() { return $('div[role="rowgroup" ]'); }

    getPropertyList() {
        console.log('In Propert List');
        var folder=[];
        
        this.propertyList.$$('div.rstcustom__node div.rstcustom__nodeContent').map((elmt, i) => {
          browser.pause(3000);
          console.log('property - ' + i, elmt.getText());
          elmt.scrollIntoView();
          folder.push(elmt.getText());
        });
        console.log('folder name',folder);
        console.log(folder.length);   
        browser.pause();  
        folder[20].doubleClick();  
      }
}
export default new CardView();