var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, {}); // enable customisation of search settings on first page hit

    var initialColumnSettings = undefined; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        }

    }


    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results = [
    {
        "description": "7.1 should change box color|shoult automate phone ",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 27724,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://www.att.com/ecms/resources/att/common/attcore/clientlib.min.js 2984 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1543520028293,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.att.com/globalnav/tesla/2.0/tesla.scaffold.js 176:2 Uncaught ReferenceError: globalNavDefaultSelections is not defined",
                "timestamp": 1543520028688,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://www.att.com/scripts/adobe/prod/edmDataManager.js 11:11937 \"DEDM: 13:33:50.442 -> $setVar: data type for user.login.id does not match configuration.\"",
                "timestamp": 1543520030441,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://www.att.com/ecms/resources/att/common/attcore/clientlib.min.js 2984 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
                "timestamp": 1543520030921,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.att.com/globalnav/tesla/2.0/tesla.scaffold.js 176:2 Uncaught ReferenceError: globalNavDefaultSelections is not defined",
                "timestamp": 1543520031200,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.att.com/ui/global_all_cms_common/libs/requirejs/2.1.9/require.js 5:4466 \"Override for: Mismatched anonymous define() module\"",
                "timestamp": 1543520031509,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://www.att.com/scripts/adobe/prod/edmDataManager.js 11:11937 \"DEDM: 13:33:52.988 -> $setVar: data type for user.login.id does not match configuration.\"",
                "timestamp": 1543520035561,
                "type": ""
            }
        ],
        "screenShotFile": "images/00060057-0047-0063-007d-003100f70005.png",
        "timestamp": 1543520035554,
        "duration": 10054
    },
    {
        "description": "1.should get title|shoult automate phone ",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 27724,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00aa005a-0053-0060-00b0-00a200b500b9.png",
        "timestamp": 1543520046296,
        "duration": 0
    },
    {
        "description": "2.nav bar background color|shoult automate phone ",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 27724,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/005a00b6-0070-0014-00f0-00a700d70045.png",
        "timestamp": 1543520046304,
        "duration": 0
    },
    {
        "description": "3.should displayed logo|shoult automate phone ",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 27724,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00440023-0097-0095-00ac-004600830048.png",
        "timestamp": 1543520046317,
        "duration": 0
    },
    {
        "description": "4.should displayed shop and support|shoult automate phone ",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 27724,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/0058004d-0057-000c-0092-009c006600dc.png",
        "timestamp": 1543520046321,
        "duration": 0
    },
    {
        "description": "5.should displayed inputbox|shoult automate phone ",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 27724,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00ae008b-00cd-0007-0092-0068004900a7.png",
        "timestamp": 1543520046325,
        "duration": 0
    },
    {
        "description": "6.should searc apple|shoult automate phone ",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 27724,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/002d00b8-0067-00d2-0035-00cf00e40076.png",
        "timestamp": 1543520046331,
        "duration": 0
    },
    {
        "description": "7.should get text from options and click|shoult automate phone ",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 27724,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00c4000a-00e2-00ec-006f-00460081009b.png",
        "timestamp": 1543520046334,
        "duration": 0
    },
    {
        "description": "8.should displayed basket|shoult automate phone ",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 27724,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00f1005c-00cd-009d-0072-00f30096008d.png",
        "timestamp": 1543520046339,
        "duration": 0
    },
    {
        "description": "9.should displayed signin|shoult automate phone ",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 27724,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00610056-008e-00c5-008e-0054009e0087.png",
        "timestamp": 1543520046343,
        "duration": 0
    },
    {
        "description": "10.should displayed business|shoult automate phone ",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 27724,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/0074006e-00ce-0043-00dd-0009000000ae.png",
        "timestamp": 1543520046348,
        "duration": 0
    },
    {
        "description": "11.should displayed navigate to bar|shoult automate phone ",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 27724,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.110"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/009f009e-002a-00c9-0095-006700f4007a.png",
        "timestamp": 1543520046352,
        "duration": 0
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};
