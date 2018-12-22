let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
   
    directConnect : true,
      //address of our selenium server    
      // seleniumAddress: 'http://localhost:4444/wd/hub',

      specs: ['../tests/phone.spec.js'], 
      //  suites:{
      //      smoke:["../Tests/BankManagerSimple.spec.js","../Tests/Demo.spec.js"],
      //  regression:['../Tests/*.spec.js']
       
      //     },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--start-fullscreen'
            ]
        }
    },
  
onPrepare: function () {
        //Implicitly wait 
         browser.manage().timeouts().implicitlyWait(10000)

        // Maximize for windows computer
        //browser.manage().window().maximize();
            jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
            showstack: false
        }));
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '../report/screenshots',
            preserveDirectory: false,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            docName: 'lego-Report.html'
        }).getJasmine2Reporter());

},

    jasmineNodeOpts: {
        showColors: true, 
        defaultTimeoutInterval: 90000,    
        print: function() {}
        
}
};