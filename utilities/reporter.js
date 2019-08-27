import reporter from '@wdio/allure-reporter';
module.exports = {

    // Functions For Login Page Reporter
    getLoginReport: function () {
        reporter.addEnvironment('LoginUrl', 'http://localhost:3000/Login');
        reporter.addEnvironment('Browser', 'Firefox');
        reporter.addFeature('Login Pass');
        //reporter.addStep('Login', [{content, name = 'attachment'}]);
        reporter.addArgument('LoginUrl', 'http://localhost:3000/Login')
        reporter.addDescription('This is the Login Page', 'text');
        reporter.addTestId(2);
        reporter.addStep('LOGIN', [{ content: 'login Page for automation', name: 'user logs in', type: 'text/plain' }], 'passed');
        reporter.addIssue('Element to display logged in user not found');
        reporter.addSeverity('high');
        reporter.addStory('On enetring correct credentials user should be able to login');
    },

    getLoginPageReport: function () {

        reporter.addEnvironment('LoginUrl', 'http://localhost:3000/Login');
        reporter.addEnvironment('Browser', 'Firefox');
        reporter.addFeature('Login Pass');
        //reporter.addStep('Login', [{content, name = 'attachment'}]);
        reporter.addArgument('LoginUrl', 'http://localhost:3000/Login')
        reporter.addDescription('This is the Login Page', 'text');
        reporter.addTestId(2);
        reporter.addStep('Login Page Details', [{ content: 'login Page for automation', name: 'page is loaded', type: 'text/plain' }], 'passed');
        // reporter.addIssue('Element to display logged in user not found');
        reporter.addSeverity('normal');
        reporter.addStory('On Loading of the page Page details should be displayed correctly');
    },

    wrongCredentialsReport: function () {
        reporter.addEnvironment('LoginUrl', 'http://localhost:3000/Login');
        reporter.addEnvironment('Browser', 'Firefox');
        reporter.addFeature('Login Fail');
        //reporter.addStep('Login', [{content, name = 'attachment'}]);
        reporter.addArgument('LoginUrl', 'http://localhost:3000/Login')
        reporter.addDescription('This is the Login Page with wrong credentials', 'text');
        reporter.addTestId(1);
        reporter.addStep('LOGIN', [{ content: 'login Page for automation', name: 'login should fail', type: 'text/plain' }], 'failed');
        reporter.addIssue('invalid username and password');
        reporter.addSeverity('bad');
        reporter.addStory('On enetring incorrect credentials user should get error');
    },

    // Functions For Gear Settings Reporter
    changePasswordTab: function () {
        reporter.addEnvironment('HomeUrl', 'http://localhost:3000/home');
        reporter.addEnvironment('Browser', 'Firefox');
        reporter.addFeature('Change Password Success');
        //reporter.addStep('Login', [{content, name = 'attachment'}]);
        reporter.addArgument('HomeUrl', 'http://localhost:3000/Home')
        reporter.addDescription('This is the Change Password Page', 'text');
        reporter.addTestId(2);
        reporter.addStep('Change Pasword Page Details', [{ content: 'Change password using automation', name: 'page is loaded', type: 'text/plain' }], 'passed');
        // reporter.addIssue('Element to display logged in user not found');
        reporter.addSeverity('normal');
        reporter.addStory('Change password should be successful');
    },

    editProfileTab: function () {
        reporter.addEnvironment('LoginUrl', 'http://localhost:3000/home');
        reporter.addEnvironment('Browser', 'Firefox');
        reporter.addFeature('Change Password Success');
        //reporter.addStep('Login', [{content, name = 'attachment'}]);
        reporter.addArgument('HomeUrl', 'http://localhost:3000/Home')
        reporter.addDescription('This is the Change Password Page', 'text');
        reporter.addTestId(2);
        reporter.addStep('Change Pasword Page Details', [{ content: 'Change password using automation', name: 'page is loaded', type: 'text/plain' }], 'passed');
        // reporter.addIssue('Element to display logged in user not found');
        reporter.addSeverity('normal');
        reporter.addStory('Change password should be successful');
    },

    changePasswordFail: function () {
        reporter.addEnvironment('LoginUrl', 'http://localhost:3000/home');
        reporter.addEnvironment('Browser', 'Firefox');
        reporter.addFeature('Change Password Success');
        //reporter.addStep('Login', [{content, name = 'attachment'}]);
        reporter.addArgument('HomeUrl', 'http://localhost:3000/Home')
        reporter.addDescription('This is the Change Password Page', 'text');
        reporter.addTestId(2);
        reporter.addStep('Change Pasword Page Details', [{ content: 'Change password using automation', name: 'page is loaded', type: 'text/plain' }], 'passed');
        //reporter.addIssue('Element to display logged in user not found');
        reporter.addSeverity('high');
        reporter.addStory('Change password should be successful');
    },

    //Functions For Tree Selector
    multipleTreeUser: function () {
        reporter.addEnvironment('HomeUrl', 'http://localhost:3000/home');
        reporter.addEnvironment('Browser', 'Firefox');
        reporter.addFeature('User With Mutiple tree selector option');
        //reporter.addStep('Login', [{content, name = 'attachment'}]);
        reporter.addArgument('HomeUrl', 'http://localhost:3000/Home')
        reporter.addDescription('This is the Tree Selector Page', 'text');
        reporter.addTestId(2);
        reporter.addStep('Tree Selector Page Details', [{ content: 'tree selector using automation', name: 'page is loaded', type: 'text/plain' }], 'passed');
        // reporter.addIssue('Element to display logged in user not found');
        reporter.addSeverity('normal');
        reporter.addStory('Can select tree from dropdown');
    },

    singleTreeSelector: function () {
        reporter.addEnvironment('LoginUrl', 'http://localhost:3000/home');
        reporter.addEnvironment('Browser', 'Firefox');
        reporter.addFeature('Change Password Success');
        //reporter.addStep('Login', [{content, name = 'attachment'}]);
        reporter.addArgument('HomeUrl', 'http://localhost:3000/Home')
        reporter.addDescription('This is the Change Password Page', 'text');
        reporter.addTestId(2);
        reporter.addStep('Change Pasword Page Details', [{ content: 'Change password using automation', name: 'page is loaded', type: 'text/plain' }], 'passed');
       // reporter.addIssue('Element to display logged in user not found');
        reporter.addSeverity('normal');
        reporter.addStory('Change password should be successful');
    }
}

