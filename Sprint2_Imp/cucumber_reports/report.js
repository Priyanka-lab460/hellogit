$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/sample2.feature");
formatter.feature({
  "line": 2,
  "name": "Sign In Validation",
  "description": "I want to use this template for my feature file",
  "id": "sign-in-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Validating Account for login with invalid credentials",
  "description": "",
  "id": "sign-in-validation;validating-account-for-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter valid \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User verify the error message 1",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User Enter invalid Email",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter valid \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User verify the error message 2",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User Enter valid but not registered Email",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enter valid \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User verify the error message 2",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User Enter valid and registered \u003cEmail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User verify the error message 3",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User Enter valid and registered \u003cEmail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enters password greater than 40 characters",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User verify the error message 2",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User Enter valid and registered \u003cEmail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enters invalid password",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User verify the error message 2",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "sign-in-validation;validating-account-for-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "password",
        "Email"
      ],
      "line": 46,
      "id": "sign-in-validation;validating-account-for-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "xcvbnm,.",
        "yut@gmail.com"
      ],
      "line": 47,
      "id": "sign-in-validation;validating-account-for-login-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12283414700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Open the web browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User click on Sign In button",
  "keyword": "Given "
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_sign_in_button()"
});
formatter.result({
  "duration": 4493555200,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Validating Account for login with invalid credentials",
  "description": "",
  "id": "sign-in-validation;validating-account-for-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 9,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter valid xcvbnm,.",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User verify the error message 1",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User Enter invalid Email",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter valid xcvbnm,.",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User verify the error message 2",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User Enter valid but not registered Email",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enter valid xcvbnm,.",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User verify the error message 2",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User Enter valid and registered yut@gmail.com",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User verify the error message 3",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User Enter valid and registered yut@gmail.com",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enters password greater than 40 characters",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User verify the error message 2",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User Enter valid and registered yut@gmail.com",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enters invalid password",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User verify the error message 2",
  "keyword": "Then "
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_email_field()"
});
formatter.result({
  "duration": 3549485100,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_password_field()"
});
formatter.result({
  "duration": 1261629400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xcvbnm,.",
      "offset": 17
    }
  ],
  "location": "Sprint2_stepdefination1.user_enter_valid(String)"
});
formatter.result({
  "duration": 1279394100,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_sign_in1()"
});
formatter.result({
  "duration": 3266781400,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_verify_the_error_message_1()"
});
formatter.result({
  "duration": 132003500,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_email_field()"
});
formatter.result({
  "duration": 3339362100,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_enter_invalid_email()"
});
formatter.result({
  "duration": 1199143800,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_password_field()"
});
formatter.result({
  "duration": 1217402500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xcvbnm,.",
      "offset": 17
    }
  ],
  "location": "Sprint2_stepdefination1.user_enter_valid(String)"
});
formatter.result({
  "duration": 1246156500,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_sign_in1()"
});
formatter.result({
  "duration": 3212981500,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_verify_the_error_message_2()"
});
formatter.result({
  "duration": 105827000,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_email_field()"
});
formatter.result({
  "duration": 3287021000,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_enter_valid_but_not_registered_email()"
});
formatter.result({
  "duration": 1327304100,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_password_field()"
});
