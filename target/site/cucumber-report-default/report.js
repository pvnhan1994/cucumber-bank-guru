$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registerAndLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Application",
  "description": "As a PO\nI want to login to application\nSo that verify login function work well",
  "id": "login-to-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Register and Login to application",
  "description": "",
  "id": "login-to-application;register-and-login-to-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open application",
  "keyword": "Given "
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
  "name": "I input to email textbox with data \"autorandom\"",
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
  "location": "RegisterAndLoginSteps.iOpenApplication()"
});
formatter.result({
  "duration": 20345780632,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iGetLoginPageUrl()"
});
formatter.result({
  "duration": 13876283,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToHereLink()"
});
formatter.result({
  "duration": 27303255473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "autorandom",
      "offset": 36
    }
  ],
  "location": "RegisterAndLoginSteps.iInputToEmailTextboxWithData(String)"
});
formatter.result({
  "duration": 360925569,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToSubmitButtonAtRegisterPage()"
});
formatter.result({
  "duration": 4802592736,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iGetUserIDInfor()"
});
formatter.result({
  "duration": 40536519,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iGetPasswordInfor()"
});
formatter.result({
  "duration": 37652919,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iOpenLoginPageAgain()"
});
formatter.result({
  "duration": 4956380944,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iInputToUsernameTextbox()"
});
formatter.result({
  "duration": 164762864,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iInputToPasswordTextbox()"
});
formatter.result({
  "duration": 139314904,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToLoginButtonAtLoginPage()"
});
formatter.result({
  "duration": 13703232221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome To Manager\u0027s Page of Guru99 Bank",
      "offset": 41
    }
  ],
  "location": "RegisterAndLoginSteps.verifyHomePageDisplayedWithMessage(String)"
});
formatter.result({
  "duration": 45536362,
  "status": "passed"
});
});