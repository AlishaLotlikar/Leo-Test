import Page from './page';
class Settings extends Page {

    get clickLogout() { return $('//li[contains(text(),"Logout")]'); }
    get clickEdit() { return $('//li[contains(text(),"Edit Profile")]'); }
    get currentPassword() { return $('//div[@role="dialog"]').$$('//label[contains(text(),"Current Password")]'); }
    get newPassword() { return $('//div[@role="dialog"]').$$('//label[contains(text(),"New Password")]'); }
    get confirmNewPassword() { return $('//div[@role="dialog"]').$$('//label[contains(text(),"Confirm New Password")]') }
    get clickDone() { return $('//button/span[contains(text(),"Done")]'); }
    get openChangePasswordDialog() { return $('//li[contains(text(),"Change Password")]'); }
    get changePasswordTitle() { return $('//div[@role="dialog"]/div[@class="MuiDialogTitle-root"]/h2[contains(text(),"Change Password")]');}

    // openPage() {
        //     this.openSettings.click();
        // }

    logout() {
        this.clickLogout.click();
    }

    edit() {
        this.clickEdit.click();
    }

    changePasswordInfoTitle() {
        this.openChangePasswordDialog.click();
        this.changePasswordTitle.getText();

    }

    getCurrentField(){
        return this.currentPassword.getText();
    }
        
    getNewField(){
        return this.newPassword.getText();
    }
    
    getConfirmField(){
        return this.confirmNewPassword.getText();
    }
      open(){
        return this.openChangePasswordDialog.click();
      }
    changePassword(currentPassword, newPassword, confirmNewPassword) {
      
        browser.pause(2000);
        this.currentPassword.setValue(currentPassword);
        this.newPassword.addValue(newPassword);
        this.confirmNewPassword.addValue(confirmNewPassword);
        this.clickDone.click();
    }
}
export default new Settings();