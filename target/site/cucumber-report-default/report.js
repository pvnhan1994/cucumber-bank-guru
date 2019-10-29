$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registerAndLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Application",
  "description": "As a PO\nI want to login to application\nSo that verify login function work well",
  "id": "login-to-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Register and Login to application",
  "description": "",
  "id": "login-to-application;register-and-login-to-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I get Login page Url",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click to here link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I input to email textbox with data \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click to Submit button at Register page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I get UserID infor",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I get Password infor",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I open Login page again",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I input to Username textbox",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I input to Password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click to Login button at Login page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify Home page displayed with message \"Welcome To Manager\u0027s Page of Guru99 Bank\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "login-to-application;register-and-login-to-application;",
  "rows": [
    {
      "cells": [
        "Email"
      ],
      "line": 21,
      "id": "login-to-application;register-and-login-to-application;;1"
    },
    {
      "cells": [
        "randomemail"
      ],
      "line": 22,
      "id": "login-to-application;register-and-login-to-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Register and Login to application",
  "description": "",
  "id": "login-to-application;register-and-login-to-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I get Login page Url",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click to here link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I input to email textbox with data \"randomemail\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click to Submit button at Register page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I get UserID infor",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I get Password infor",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I open Login page again",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I input to Username textbox",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I input to Password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click to Login button at Login page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify Home page displayed with message \"Welcome To Manager\u0027s Page of Guru99 Bank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iGetLoginPageUrl()"
});
formatter.result({
  "duration": 9221034715,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickToHereLink()"
});
formatter.result({
  "duration": 3006488440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "randomemail",
      "offset": 36
    }
  ],
  "location": "RegisterPageSteps.iInputToEmailTextboxWithData(String)"
});
formatter.result({
  "duration": 1283967349,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickToSubmitButtonAtRegisterPage()"
});
formatter.result({
  "duration": 2756511032,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iGetUserIDInfor()"
});
formatter.result({
  "duration": 148311945,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iGetPasswordInfor()"
});
formatter.result({
  "duration": 72735112,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iOpenLoginPageAgain()"
});
formatter.result({
  "duration": 1679102084,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iInputToUsernameTextbox()"
});
formatter.result({
  "duration": 1191544295,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iInputToPasswordTextbox()"
});
formatter.result({
  "duration": 1525923147,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickToLoginButtonAtLoginPage()"
});
formatter.result({
  "duration": 3980540605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome To Manager\u0027s Page of Guru99 Bank",
      "offset": 41
    }
  ],
  "location": "HomePageSteps.verifyHomePageDisplayedWithMessage(String)"
});
formatter.result({
  "duration": 100714638,
  "status": "passed"
});
});