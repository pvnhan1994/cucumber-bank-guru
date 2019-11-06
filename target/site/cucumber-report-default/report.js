$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("paymentFollow.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Application",
  "description": "As a PO\nI want to login to application\nSo that verify login function work well",
  "id": "login-to-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@payment"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Register and Login to application",
  "description": "",
  "id": "login-to-application;register-and-login-to-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I get Login page Url",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click to here link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I input to email textbox with data \"binvnese\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click to Submit button at Register page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I get UserID infor",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I get Password infor",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I open Login page again",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.iGetLoginPageUrl()"
});
formatter.result({
  "duration": 8847461040,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickToHereLink()"
});
formatter.result({
  "duration": 3817394245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "binvnese",
      "offset": 36
    }
  ],
  "location": "RegisterPageSteps.iInputToEmailTextboxWithData(String)"
});
formatter.result({
  "duration": 1209696796,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickToSubmitButtonAtRegisterPage()"
});
formatter.result({
  "duration": 2350000792,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iGetUserIDInfor()"
});
formatter.result({
  "duration": 111305957,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iGetPasswordInfor()"
});
formatter.result({
  "duration": 84856618,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iOpenLoginPageAgain()"
});
formatter.result({
  "duration": 1347508016,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login to application",
  "description": "",
  "id": "login-to-application;login-to-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I input to Username textbox",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I input to Password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click to Login button at Login page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify Home page displayed with message \"Welcome To Manager\u0027s Page of Guru99 Bank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iInputToUsernameTextbox()"
});
formatter.result({
  "duration": 835322151,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iInputToPasswordTextbox()"
});
formatter.result({
  "duration": 746967791,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickToLoginButtonAtLoginPage()"
});
formatter.result({
  "duration": 2813708683,
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
  "duration": 85298325,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Create New Customer",
  "description": "",
  "id": "login-to-application;create-new-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@new_customer"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I open \"New Customer\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I input to \"name\" textbox with data \"\u003cName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select \"m\" radio button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I input to \"dob\" textbox with data \"\u003cDateOfBirth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I input to \"addr\" textarea with data \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I input to \"city\" textbox with data \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I input to \"state\" textbox with data \"\u003cState\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I input to \"pinno\" textbox with data \"\u003cPin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I input to \"telephoneno\" textbox with data \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I input to \"emailid\" textbox with data \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input to \"password\" textbox with data \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click to \"Submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify message \"Customer Registered Successfully!!!\" displays success",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify information \"Customer Name\" is \"\u003cName\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify information \"Address\" is \"\u003cAddress\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify information \"City\" is \"\u003cCity\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Verify information \"State\" is \"\u003cState\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify information \"Pin\" is \"\u003cPin\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Verify information \"Mobile No.\" is \"\u003cPhone\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Verify information \"Email\" is \"\u003cEmail\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I get CustomerID",
  "keyword": "And "
});
formatter.examples({
  "line": 50,
  "name": "New Customer Info",
  "description": "",
  "id": "login-to-application;create-new-customer;new-customer-info",
  "rows": [
    {
      "cells": [
        "Name",
        "DateOfBirth",
        "Address",
        "City",
        "State",
        "Pin",
        "Phone",
        "Email",
        "Password",
        "Message"
      ],
      "line": 51,
      "id": "login-to-application;create-new-customer;new-customer-info;1"
    },
    {
      "cells": [
        "Tony Teo",
        "09-09-1972",
        "96 Libezrty abcs",
        "Chelsea",
        "Kbiet",
        "112233",
        "5457121921",
        "ema321453ccxzungduoc@gmail.com",
        "123123",
        "Customer Registered Successfully!!!"
      ],
      "line": 52,
      "id": "login-to-application;create-new-customer;new-customer-info;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 52,
  "name": "Create New Customer",
  "description": "",
  "id": "login-to-application;create-new-customer;new-customer-info;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@payment"
    },
    {
      "line": 25,
      "name": "@new_customer"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I open \"New Customer\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I input to \"name\" textbox with data \"Tony Teo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select \"m\" radio button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I input to \"dob\" textbox with data \"09-09-1972\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I input to \"addr\" textarea with data \"96 Libezrty abcs\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I input to \"city\" textbox with data \"Chelsea\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I input to \"state\" textbox with data \"Kbiet\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I input to \"pinno\" textbox with data \"112233\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I input to \"telephoneno\" textbox with data \"5457121921\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I input to \"emailid\" textbox with data \"ema321453ccxzungduoc@gmail.com\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I input to \"password\" textbox with data \"123123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click to \"Submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify message \"Customer Registered Successfully!!!\" displays success",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify information \"Customer Name\" is \"Tony Teo\" displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify information \"Address\" is \"96 Libezrty abcs\" displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify information \"City\" is \"Chelsea\" displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Verify information \"State\" is \"Kbiet\" displayed",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify information \"Pin\" is \"112233\" displayed",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Verify information \"Mobile No.\" is \"5457121921\" displayed",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Verify information \"Email\" is \"ema321453ccxzungduoc@gmail.com\" displayed",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I get CustomerID",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "New Customer",
      "offset": 8
    }
  ],
  "location": "DynamicPageSteps.iOpenPage(String)"
});
formatter.result({
  "duration": 1741976171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 12
    },
    {
      "val": "Tony Teo",
      "offset": 37
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 1000555309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "m",
      "offset": 10
    }
  ],
  "location": "DynamicPageSteps.iSelectRadioButton(String)"
});
formatter.result({
  "duration": 867188533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dob",
      "offset": 12
    },
    {
      "val": "09-09-1972",
      "offset": 36
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 1515934506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addr",
      "offset": 12
    },
    {
      "val": "96 Libezrty abcs",
      "offset": 38
    }
  ],
  "location": "DynamicPageSteps.iInputToTextareaWithData(String,String)"
});
formatter.result({
  "duration": 2314505950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 12
    },
    {
      "val": "Chelsea",
      "offset": 37
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 837909994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "state",
      "offset": 12
    },
    {
      "val": "Kbiet",
      "offset": 38
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 822792656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pinno",
      "offset": 12
    },
    {
      "val": "112233",
      "offset": 38
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 784725050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "telephoneno",
      "offset": 12
    },
    {
      "val": "5457121921",
      "offset": 44
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 819447834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "emailid",
      "offset": 12
    },
    {
      "val": "ema321453ccxzungduoc@gmail.com",
      "offset": 40
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 1130710530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 41
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 793256224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 12
    }
  ],
  "location": "DynamicPageSteps.iClickToButton(String)"
});
formatter.result({
  "duration": 2474133494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Registered Successfully!!!",
      "offset": 16
    }
  ],
  "location": "DynamicPageSteps.verifyMessageDisplaysSuccess(String)"
});
formatter.result({
  "duration": 690812511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Name",
      "offset": 20
    },
    {
      "val": "Tony Teo",
      "offset": 39
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 99074342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address",
      "offset": 20
    },
    {
      "val": "96 Libezrty abcs",
      "offset": 33
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 72586071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 20
    },
    {
      "val": "Chelsea",
      "offset": 30
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 182383763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "State",
      "offset": 20
    },
    {
      "val": "Kbiet",
      "offset": 31
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 119082562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pin",
      "offset": 20
    },
    {
      "val": "112233",
      "offset": 29
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 76101448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile No.",
      "offset": 20
    },
    {
      "val": "5457121921",
      "offset": 36
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 78495244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 20
    },
    {
      "val": "ema321453ccxzungduoc@gmail.com",
      "offset": 31
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 92184501,
  "status": "passed"
});
formatter.match({
  "location": "NewCustomerPageSteps.iGetCustomerID()"
});
formatter.result({
  "duration": 89938359,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "Edit Customer",
  "description": "",
  "id": "login-to-application;edit-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@edit_customer"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I open \"Edit Customer\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "Verify message \"Edit Customer Form\" displays success",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I input CustomerID",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I click to \"Submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I input to \"addr\" textarea with data \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I input to \"city\" textbox with data \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I input to \"state\" textbox with data \"\u003cState\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I input to \"pinno\" textbox with data \"\u003cPin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I input to \"telephoneno\" textbox with data \"\u003cMobile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I input to \"emailid\" textbox with data \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click to \"Submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Verify message \"Customer details updated Successfully!!!\" displays success",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Verify information \"Address\" is \"\u003cAddress\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Verify information \"City\" is \"\u003cCity\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Verify information \"State\" is \"\u003cState\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Verify information \"Pin\" is \"\u003cPin\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Verify information \"Mobile No.\" is \"\u003cMobile\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Verify information \"Email\" is \"\u003cEmail\u003e\" displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 75,
  "name": "Edit Customer Info",
  "description": "",
  "id": "login-to-application;edit-customer;edit-customer-info",
  "rows": [
    {
      "cells": [
        "Address",
        "City",
        "State",
        "Pin",
        "Mobile",
        "Email"
      ],
      "line": 76,
      "id": "login-to-application;edit-customer;edit-customer-info;1"
    },
    {
      "cells": [
        "564 Local",
        "Las Vegas",
        "Unknow",
        "765563",
        "0935602450",
        "helloxchehe@gmail.com"
      ],
      "line": 77,
      "id": "login-to-application;edit-customer;edit-customer-info;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 77,
  "name": "Edit Customer",
  "description": "",
  "id": "login-to-application;edit-customer;edit-customer-info;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 54,
      "name": "@edit_customer"
    },
    {
      "line": 1,
      "name": "@payment"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I open \"Edit Customer\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "Verify message \"Edit Customer Form\" displays success",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I input CustomerID",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I click to \"Submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I input to \"addr\" textarea with data \"564 Local\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I input to \"city\" textbox with data \"Las Vegas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I input to \"state\" textbox with data \"Unknow\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I input to \"pinno\" textbox with data \"765563\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I input to \"telephoneno\" textbox with data \"0935602450\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I input to \"emailid\" textbox with data \"helloxchehe@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click to \"Submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Verify message \"Customer details updated Successfully!!!\" displays success",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Verify information \"Address\" is \"564 Local\" displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Verify information \"City\" is \"Las Vegas\" displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Verify information \"State\" is \"Unknow\" displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Verify information \"Pin\" is \"765563\" displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Verify information \"Mobile No.\" is \"0935602450\" displayed",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Verify information \"Email\" is \"helloxchehe@gmail.com\" displayed",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Edit Customer",
      "offset": 8
    }
  ],
  "location": "DynamicPageSteps.iOpenPage(String)"
});
formatter.result({
  "duration": 1962769542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edit Customer Form",
      "offset": 16
    }
  ],
  "location": "DynamicPageSteps.verifyMessageDisplaysSuccess(String)"
});
formatter.result({
  "duration": 740872474,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountPageSteps.i_input_customerid()"
});
formatter.result({
  "duration": 1335154958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 12
    }
  ],
  "location": "DynamicPageSteps.iClickToButton(String)"
});
formatter.result({
  "duration": 2807162507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addr",
      "offset": 12
    },
    {
      "val": "564 Local",
      "offset": 38
    }
  ],
  "location": "DynamicPageSteps.iInputToTextareaWithData(String,String)"
});
formatter.result({
  "duration": 847690700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 12
    },
    {
      "val": "Las Vegas",
      "offset": 37
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 813945334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "state",
      "offset": 12
    },
    {
      "val": "Unknow",
      "offset": 38
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 1015247721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pinno",
      "offset": 12
    },
    {
      "val": "765563",
      "offset": 38
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 940070310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "telephoneno",
      "offset": 12
    },
    {
      "val": "0935602450",
      "offset": 44
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 1008866239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "emailid",
      "offset": 12
    },
    {
      "val": "helloxchehe@gmail.com",
      "offset": 40
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "duration": 1008256460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 12
    }
  ],
  "location": "DynamicPageSteps.iClickToButton(String)"
});
formatter.result({
  "duration": 2289655130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer details updated Successfully!!!",
      "offset": 16
    }
  ],
  "location": "DynamicPageSteps.verifyMessageDisplaysSuccess(String)"
});
formatter.result({
  "duration": 767093047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address",
      "offset": 20
    },
    {
      "val": "564 Local",
      "offset": 33
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 87381358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 20
    },
    {
      "val": "Las Vegas",
      "offset": 30
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 102068920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "State",
      "offset": 20
    },
    {
      "val": "Unknow",
      "offset": 31
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 65359629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pin",
      "offset": 20
    },
    {
      "val": "765563",
      "offset": 29
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 104552578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile No.",
      "offset": 20
    },
    {
      "val": "0935602450",
      "offset": 36
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 80214917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 20
    },
    {
      "val": "helloxchehe@gmail.com",
      "offset": 31
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "duration": 84994985,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 81,
  "name": "Add New Account",
  "description": "",
  "id": "login-to-application;add-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@add_newAccount"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 82,
      "value": "#-------------- Create first Account ----------#"
    }
  ],
  "line": 83,
  "name": "I open \"New Account\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "Verify message \"Add new account form\" displays success",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "I input CustomerID",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I click to \"Submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I sleep with \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I select item in \"selaccount\" dropdown with data \"Saving\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I input to \"inideposit\" textbox with data \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I click to \"submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Verify message \"Account Generated Successfully!!!\" displays success",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 92,
      "value": "#    And Verify information \"\u003cstring\u003e\" is \"\u003cstring\u003e\" displayed"
    }
  ],
  "line": 93,
  "name": "Verify information \"Customer Name\" is \"\u003cName\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Verify information \"Email\" is \"\u003cEmail\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Verify information \"Account Type\" is \"\u003cAccount Type\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 96,
      "value": "#    And Verify information \"\u003cstring\u003e\" is \"\u003cstring\u003e\" displayed"
    }
  ],
  "line": 97,
  "name": "Verify information \"Current Amount\" is \"\u003cCurrent Amount\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 98,
      "value": "#    When I get FirstAccountID"
    },
    {
      "line": 99,
      "value": "#-------------- Create first Account ----------#"
    }
  ],
  "line": 100,
  "name": "I open \"New Account\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "Verify message \"Add new account form\" displays success",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I input CustomerID",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I sleep with \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I select item in \"selaccount\" dropdown with data \"Current\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I input to \"inideposit\" textbox with data \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I click to \"submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Verify message \"Account Generated Successfully!!!\" displays success",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 108,
      "value": "#    And Verify information \"\u003cstring\u003e\" is \"\u003cstring\u003e\" displayed"
    }
  ],
  "line": 109,
  "name": "Verify information \"Customer Name\" is \"\u003cName\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Verify information \"Email\" is \"\u003cEmail\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Verify information \"Account Type\" is \"\u003cAccount Type\u003e\" displayed",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 112,
      "value": "#    And Verify information \"\u003cstring\u003e\" is \"\u003cstring\u003e\" displayed"
    }
  ],
  "line": 113,
  "name": "Verify information \"Current Amount\" is \"\u003cCurrent Amount\u003e\" displayed",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 114,
      "value": "#    When I get SecondAccountID"
    }
  ],
  "line": 116,
  "name": "",
  "description": "",
  "id": "login-to-application;add-new-account;",
  "rows": [
    {
      "cells": [
        "Name",
        "Email",
        "Account Type",
        "Current Amount"
      ],
      "line": 117,
      "id": "login-to-application;add-new-account;;1"
    },
    {
      "cells": [
        "Vietnhan",
        "helloxchehe@gmail.com",
        "Saving",
        "50000"
      ],
      "line": 118,
      "id": "login-to-application;add-new-account;;2"
    },
    {
      "cells": [
        "Vietnhan",
        "helloxchehe@gmail.com",
        "Curent",
        "10000"
      ],
      "line": 119,
      "id": "login-to-application;add-new-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 118,
  "name": "Add New Account",
  "description": "",
  "id": "login-to-application;add-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@add_newAccount"
    },
    {
      "line": 1,
      "name": "@payment"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 82,
      "value": "#-------------- Create first Account ----------#"
    }
  ],
  "line": 83,
  "name": "I open \"New Account\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "Verify message \"Add new account form\" displays success",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "I input CustomerID",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I click to \"Submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I sleep with \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I select item in \"selaccount\" dropdown with data \"Saving\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I input to \"inideposit\" textbox with data \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I click to \"submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Verify message \"Account Generated Successfully!!!\" displays success",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 92,
      "value": "#    And Verify information \"\u003cstring\u003e\" is \"\u003cstring\u003e\" displayed"
    }
  ],
  "line": 93,
  "name": "Verify information \"Customer Name\" is \"Vietnhan\" displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Verify information \"Email\" is \"helloxchehe@gmail.com\" displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Verify information \"Account Type\" is \"Saving\" displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 96,
      "value": "#    And Verify information \"\u003cstring\u003e\" is \"\u003cstring\u003e\" displayed"
    }
  ],
  "line": 97,
  "name": "Verify information \"Current Amount\" is \"50000\" displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 98,
      "value": "#    When I get FirstAccountID"
    },
    {
      "line": 99,
      "value": "#-------------- Create first Account ----------#"
    }
  ],
  "line": 100,
  "name": "I open \"New Account\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "Verify message \"Add new account form\" displays success",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I input CustomerID",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I sleep with \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I select item in \"selaccount\" dropdown with data \"Current\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I input to \"inideposit\" textbox with data \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I click to \"submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Verify message \"Account Generated Successfully!!!\" displays success",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 108,
      "value": "#    And Verify information \"\u003cstring\u003e\" is \"\u003cstring\u003e\" displayed"
    }
  ],
  "line": 109,
  "name": "Verify information \"Customer Name\" is \"Vietnhan\" displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Verify information \"Email\" is \"helloxchehe@gmail.com\" displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Verify information \"Account Type\" is \"Saving\" displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 112,
      "value": "#    And Verify information \"\u003cstring\u003e\" is \"\u003cstring\u003e\" displayed"
    }
  ],
  "line": 113,
  "name": "Verify information \"Current Amount\" is \"50000\" displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "New Account",
      "offset": 8
    }
  ],
  "location": "DynamicPageSteps.iOpenPage(String)"
});
formatter.result({
  "duration": 1736143973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add new account form",
      "offset": 16
    }
  ],
  "location": "DynamicPageSteps.verifyMessageDisplaysSuccess(String)"
});
formatter.result({
  "duration": 734454639,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountPageSteps.i_input_customerid()"
});
formatter.result({
  "duration": 1297449217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 12
    }
  ],
  "location": "DynamicPageSteps.iClickToButton(String)"
});
formatter.result({
  "duration": 30645566032,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of all elements located by By.xpath: //input[@value\u003d\u0027Submit\u0027] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027NhanPVs-MacBook-Pro.local\u0027, ip: \u00272001:ee0:4b76:2060:6093:536b:c87e:ec83%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.87, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: /var/folders/h_/v27c412j0sq...}, goog:chromeOptions: {debuggerAddress: localhost:65477}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a9f479b2b3da52f02d296153878a89fc\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat commons.AbstractPage.waitForElementVisible(AbstractPage.java:382)\n\tat pageObjects.DynamicPageObject.clickToDynamicButton(DynamicPageObject.java:37)\n\tat bank.stepDefinitions.DynamicPageSteps.iClickToButton(DynamicPageSteps.java:63)\n\tat ✽.And I click to \"Submit\" button(paymentFollow.feature:86)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "DynamicPageSteps.iSleepWithSeconds(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "selaccount",
      "offset": 18
    },
    {
      "val": "Saving",
      "offset": 50
    }
  ],
  "location": "DynamicPageSteps.iSelectItemInDropdownWithData(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "inideposit",
      "offset": 12
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 43
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 12
    }
  ],
  "location": "DynamicPageSteps.iClickToButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Generated Successfully!!!",
      "offset": 16
    }
  ],
  "location": "DynamicPageSteps.verifyMessageDisplaysSuccess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Name",
      "offset": 20
    },
    {
      "val": "Vietnhan",
      "offset": 39
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 20
    },
    {
      "val": "helloxchehe@gmail.com",
      "offset": 31
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Type",
      "offset": 20
    },
    {
      "val": "Saving",
      "offset": 38
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Current Amount",
      "offset": 20
    },
    {
      "val": "50000",
      "offset": 40
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "New Account",
      "offset": 8
    }
  ],
  "location": "DynamicPageSteps.iOpenPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add new account form",
      "offset": 16
    }
  ],
  "location": "DynamicPageSteps.verifyMessageDisplaysSuccess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAccountPageSteps.i_input_customerid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "DynamicPageSteps.iSleepWithSeconds(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "selaccount",
      "offset": 18
    },
    {
      "val": "Current",
      "offset": 50
    }
  ],
  "location": "DynamicPageSteps.iSelectItemInDropdownWithData(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "inideposit",
      "offset": 12
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 43
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 12
    }
  ],
  "location": "DynamicPageSteps.iClickToButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Generated Successfully!!!",
      "offset": 16
    }
  ],
  "location": "DynamicPageSteps.verifyMessageDisplaysSuccess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Name",
      "offset": 20
    },
    {
      "val": "Vietnhan",
      "offset": 39
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 20
    },
    {
      "val": "helloxchehe@gmail.com",
      "offset": 31
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Type",
      "offset": 20
    },
    {
      "val": "Saving",
      "offset": 38
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Current Amount",
      "offset": 20
    },
    {
      "val": "50000",
      "offset": 40
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 119,
  "name": "Add New Account",
  "description": "",
  "id": "login-to-application;add-new-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@add_newAccount"
    },
    {
      "line": 1,
      "name": "@payment"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 82,
      "value": "#-------------- Create first Account ----------#"
    }
  ],
  "line": 83,
  "name": "I open \"New Account\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "Verify message \"Add new account form\" displays success",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "I input CustomerID",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I click to \"Submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I sleep with \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I select item in \"selaccount\" dropdown with data \"Saving\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I input to \"inideposit\" textbox with data \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I click to \"submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Verify message \"Account Generated Successfully!!!\" displays success",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 92,
      "value": "#    And Verify information \"\u003cstring\u003e\" is \"\u003cstring\u003e\" displayed"
    }
  ],
  "line": 93,
  "name": "Verify information \"Customer Name\" is \"Vietnhan\" displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Verify information \"Email\" is \"helloxchehe@gmail.com\" displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Verify information \"Account Type\" is \"Curent\" displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 96,
      "value": "#    And Verify information \"\u003cstring\u003e\" is \"\u003cstring\u003e\" displayed"
    }
  ],
  "line": 97,
  "name": "Verify information \"Current Amount\" is \"10000\" displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 98,
      "value": "#    When I get FirstAccountID"
    },
    {
      "line": 99,
      "value": "#-------------- Create first Account ----------#"
    }
  ],
  "line": 100,
  "name": "I open \"New Account\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "Verify message \"Add new account form\" displays success",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I input CustomerID",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I sleep with \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I select item in \"selaccount\" dropdown with data \"Current\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I input to \"inideposit\" textbox with data \"\u003cstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I click to \"submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Verify message \"Account Generated Successfully!!!\" displays success",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 108,
      "value": "#    And Verify information \"\u003cstring\u003e\" is \"\u003cstring\u003e\" displayed"
    }
  ],
  "line": 109,
  "name": "Verify information \"Customer Name\" is \"Vietnhan\" displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Verify information \"Email\" is \"helloxchehe@gmail.com\" displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Verify information \"Account Type\" is \"Curent\" displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 112,
      "value": "#    And Verify information \"\u003cstring\u003e\" is \"\u003cstring\u003e\" displayed"
    }
  ],
  "line": 113,
  "name": "Verify information \"Current Amount\" is \"10000\" displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "New Account",
      "offset": 8
    }
  ],
  "location": "DynamicPageSteps.iOpenPage(String)"
});
formatter.result({
  "duration": 1514030883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add new account form",
      "offset": 16
    }
  ],
  "location": "DynamicPageSteps.verifyMessageDisplaysSuccess(String)"
});
formatter.result({
  "duration": 740788437,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountPageSteps.i_input_customerid()"
});
formatter.result({
  "duration": 802790233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 12
    }
  ],
  "location": "DynamicPageSteps.iClickToButton(String)"
});
formatter.result({
  "duration": 13688465709,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:6606\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027NhanPVs-MacBook-Pro.local\u0027, ip: \u00272001:ee0:4b76:2060:6093:536b:c87e:ec83%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$8.apply(ExpectedConditions.java:231)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$8.apply(ExpectedConditions.java:228)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat commons.AbstractPage.waitForElementVisible(AbstractPage.java:382)\n\tat pageObjects.DynamicPageObject.clickToDynamicButton(DynamicPageObject.java:37)\n\tat bank.stepDefinitions.DynamicPageSteps.iClickToButton(DynamicPageSteps.java:63)\n\tat ✽.And I click to \"Submit\" button(paymentFollow.feature:86)\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:6606\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$8.apply(ExpectedConditions.java:231)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$8.apply(ExpectedConditions.java:228)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat commons.AbstractPage.waitForElementVisible(AbstractPage.java:382)\n\tat pageObjects.DynamicPageObject.clickToDynamicButton(DynamicPageObject.java:37)\n\tat bank.stepDefinitions.DynamicPageSteps.iClickToButton(DynamicPageSteps.java:63)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.net.ConnectException: Connection refused (Connection refused)\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 86 more\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "DynamicPageSteps.iSleepWithSeconds(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "selaccount",
      "offset": 18
    },
    {
      "val": "Saving",
      "offset": 50
    }
  ],
  "location": "DynamicPageSteps.iSelectItemInDropdownWithData(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "inideposit",
      "offset": 12
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 43
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 12
    }
  ],
  "location": "DynamicPageSteps.iClickToButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Generated Successfully!!!",
      "offset": 16
    }
  ],
  "location": "DynamicPageSteps.verifyMessageDisplaysSuccess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Name",
      "offset": 20
    },
    {
      "val": "Vietnhan",
      "offset": 39
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 20
    },
    {
      "val": "helloxchehe@gmail.com",
      "offset": 31
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Type",
      "offset": 20
    },
    {
      "val": "Curent",
      "offset": 38
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Current Amount",
      "offset": 20
    },
    {
      "val": "10000",
      "offset": 40
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "New Account",
      "offset": 8
    }
  ],
  "location": "DynamicPageSteps.iOpenPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add new account form",
      "offset": 16
    }
  ],
  "location": "DynamicPageSteps.verifyMessageDisplaysSuccess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewAccountPageSteps.i_input_customerid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "DynamicPageSteps.iSleepWithSeconds(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "selaccount",
      "offset": 18
    },
    {
      "val": "Current",
      "offset": 50
    }
  ],
  "location": "DynamicPageSteps.iSelectItemInDropdownWithData(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "inideposit",
      "offset": 12
    },
    {
      "val": "\u003cstring\u003e",
      "offset": 43
    }
  ],
  "location": "DynamicPageSteps.iInputToTextboxWithData(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 12
    }
  ],
  "location": "DynamicPageSteps.iClickToButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Generated Successfully!!!",
      "offset": 16
    }
  ],
  "location": "DynamicPageSteps.verifyMessageDisplaysSuccess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Name",
      "offset": 20
    },
    {
      "val": "Vietnhan",
      "offset": 39
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 20
    },
    {
      "val": "helloxchehe@gmail.com",
      "offset": 31
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Type",
      "offset": 20
    },
    {
      "val": "Curent",
      "offset": 38
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Current Amount",
      "offset": 20
    },
    {
      "val": "10000",
      "offset": 40
    }
  ],
  "location": "DynamicPageSteps.verify_information_something_is_something_displayed(String,String)"
});
formatter.result({
  "status": "skipped"
});
});