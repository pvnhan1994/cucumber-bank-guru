$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("travelRegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Account",
  "description": "",
  "id": "register-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Title",
  "description": "",
  "id": "register-account;title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open Php Travel page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I input to Register form",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Phone",
        "Email",
        "Password"
      ],
      "line": 8
    },
    {
      "cells": [
        "PHan Viet",
        "Nhan",
        "0935602450",
        "vietnhan@gmail.com",
        "1231233"
      ],
      "line": 9
    },
    {
      "cells": [
        "Ho Tri",
        "Bao",
        "9876543432",
        "vietndsahan@gmail.com",
        "1231233"
      ],
      "line": 10
    },
    {
      "cells": [
        "Phan Van",
        "Ca",
        "0321542450",
        "hehehe@gmail.com",
        "1231233"
      ],
      "line": 11
    },
    {
      "cells": [
        "Hoang Viet",
        "Hoan",
        "0967865667",
        "conbo@gmail.com",
        "1231233"
      ],
      "line": 12
    },
    {
      "cells": [
        "Tuan Viet",
        "Truc",
        "5568768900",
        "aloalo@gmail.com",
        "1231233"
      ],
      "line": 13
    },
    {
      "cells": [
        "Ng Trung",
        "Lap",
        "1235435354",
        "helloxinh@gmail.com",
        "1231233"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TravelRegisterPageSteps.iOpenPhpTravelPage()"
});
formatter.result({
  "duration": 12066468459,
  "status": "passed"
});
formatter.match({
  "location": "TravelRegisterPageSteps.iInputToRegisterForm(DataTable)"
});
formatter.result({
  "duration": 5789052784,
  "status": "passed"
});
});