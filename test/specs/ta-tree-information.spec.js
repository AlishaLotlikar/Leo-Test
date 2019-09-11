import LoginPage from '../pageobjects/ta-login.page';
import TreeInformationPage from '../pageobjects/ta-tree-information.page'
import assert from 'assert';
import utl from '../../utilities/common-utilities'
import Reporter from '../../utilities/reporter';
var log4js = require('log4js');
var logger = log4js.getLogger();

describe('Tree Information Display', function () {

    beforeAll(() => {
        LoginPage.open();
        let userData = utl.readPasswordCSVFile();
        LoginPage.getLogin(userData[0].username, userData[0].password);
        Logger.info('Read username and password from CSV file')
        browser.pause(2000);
    })

    it('Should Display Tree Tilte', function () {
        logger.info('========================Selected Tree Title Display=======================')
        var name =  TreeInformationPage.getTreeTitle();
        assert.equal( TreeInformationPage.getTreeTitle(),name );
        logger.info('Name of the tree is displayed');
        browser.pause(2000);
    });

    it('Should Display Tree Description', function () {
        logger.info('========================Display tree description=======================')
        expect(TreeInformationPage.displayDescrptionBlock()).toBe(true);
        logger.info('tree description block is displayed');
        browser.pause(2000);
    });

    it('Should Display Property Marketing Text', function () {
        logger.info('========================Display Property Marketing Text=======================')
        expect(TreeInformationPage.displayPropMarkText()).toBe(true);
        logger.info('Property marketing text is displayed');
        browser.pause(2000);
    });

    // it('Should Display Upload Button', function () {
    //     logger.info('========================Display Upload Button=======================')
    //     assert.equal( TreeInformationPage.displayUploadButton(),"Upload" );
    //     logger.info('Property marketing text is displayed');
    //     browser.pause(2000);
    // });

    it('Should Be able to edit tree Information', function(){
        logger.info('========================Edit tree Information=======================')
        TreeInformationPage.getEditDesc();
        browser.pause(2000);
        TreeInformationPage.saveDescButton();
    })


    afterAll(() => {
        browser.pause(5000);
        LoginPage.getSettings();
        Logger.info('open gear settings to click on logout');
        browser.pause();
        GearSettings.logout();
        Logger.info('User logged out sucessfully');
        browser.pause(1000);
    })

})