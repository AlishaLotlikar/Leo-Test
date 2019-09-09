import Page from './page';
const { wait, waitUntil, ExpectedConditions } = require('webdriverio-explicit-waits')
const EC = ExpectedConditions;
class Settings extends Page {

    get clickLogout() { return $('//li[contains(text(),"Logout")]'); }
    get clickEdit() { return $('//li[contains(text(),"Edit Profile")]'); }
    get currentPassword() { return $('input[id=currentPassword]'); }
    get newPassword() { return $('//div[@role="dialog"]').$$('//label[contains(text(),"New Password")]'); }
    get confirmNewPassword() { return $('//div[@role="dialog"]').$$('//label[contains(text(),"Confirm New Password")]') }
    get clickDone() { return $('//button/span[contains(text(),"Done")]'); }
    get openChangePasswordDialog() { return $('li[id=change]'); }
    get changePasswordTitle() { return $('//div[@role="dialog"]/div[@class="MuiDialogTitle-root"]/h2[contains(text(),"Change Password")]'); }
    get dialog() { return $('div[role=dialog]'); }
    // openPage() {
    //     this.openSettings.click();
    // }

    logout() {
        this.clickLogout.click();
    }

    edit() {
        this.clickEdit.click();
    }

    // changePasswordInfoTitle() {
    //     console.log('info title')
    //     this.openChangePasswordDialog.click();

    // }

    getCurrentField() {
        this.currentPassword.scrollIntoView(true);
        this.currentPassword.getText();
    }

    getNewField() {
        return this.newPassword.getText();
    }

    getConfirmField() {
        return this.confirmNewPassword.getText();
    }
    open() {
        return this.openChangePasswordDialog.click();
    }

    changePassword(currentPassword, newPassword, confirmNewPassword) {
        console.log('info title')
        // this.openChangePasswordDialog.waitForDisplayed();
        this.openChangePasswordDialog.click();
        // browser.switchTo.alert();
        // browser.navigate().refresh();
        // browser.waitUntil(EC.visibilityOf(() =>('//li[contains(.,"Change Password")]'))).click()
        // browser.frame(browser.element(this.currentPassword).setValue(currentPassword));
        //browser.switchToParentFrame();
        browser.waitUntil(() => browser.windowHandles().value.length > 1);
        const popupWindow = browser.windowHandles().value.filter((handle) => handle !== mainTab)[0];
        browser.switchTab(popupWindow);
        // browser.navigate().refresh();
        browser.pause(2000);

        var dialog = this.dialog.isFocused();
        browser.switchTo.alert();
        console.log('In change password');

        this.currentPassword.setValue(currentPassword);
        this.newPassword.addValue(newPassword);
        this.confirmNewPassword.addValue(confirmNewPassword);
        this.clickDone.click();
    }
}
export default new Settings();