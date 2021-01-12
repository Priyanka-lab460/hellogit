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
  "duration": 12844354200,
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
  "duration": 4391340400,
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
  "duration": 3330520600,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_password_field()"
});
formatter.result({
  "duration": 1221681600,
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
  "duration": 1272095500,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_sign_in1()"
});
formatter.result({
  "duration": 3243583300,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_verify_the_error_message_1()"
});
formatter.result({
  "duration": 144909700,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_email_field()"
});
formatter.result({
  "duration": 3266473100,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_enter_invalid_email()"
});
formatter.result({
  "duration": 1223249600,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_password_field()"
});
formatter.result({
  "duration": 1216516000,
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
  "duration": 1203001200,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_sign_in1()"
});
formatter.result({
  "duration": 3194446600,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_verify_the_error_message_2()"
});
formatter.result({
  "duration": 96159500,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_email_field()"
});
formatter.result({
  "duration": 3261129600,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_enter_valid_but_not_registered_email()"
});
formatter.result({
  "duration": 1246384200,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_password_field()"
});
formatter.result({
  "duration": 1238656800,
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
  "duration": 1230566900,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_sign_in1()"
});
formatter.result({
  "duration": 3209073600,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_verify_the_error_message_2()"
});
formatter.result({
  "duration": 93833900,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_email_field()"
});
formatter.result({
  "duration": 3262856100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yut@gmail.com",
      "offset": 32
    }
  ],
  "location": "Sprint2_stepdefination1.user_enter_valid_and_registered(String)"
});
formatter.result({
  "duration": 1267104800,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_password_field()"
});
formatter.result({
  "duration": 1181918500,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_sign_in1()"
});
formatter.result({
  "duration": 3178264200,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_verify_the_error_message_3()"
});
formatter.result({
  "duration": 97322200,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_email_field()"
});
formatter.result({
  "duration": 3257823000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yut@gmail.com",
      "offset": 32
    }
  ],
  "location": "Sprint2_stepdefination1.user_enter_valid_and_registered(String)"
});
formatter.result({
  "duration": 1246966000,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_password_field()"
});
formatter.result({
  "duration": 1230671500,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_enters_password_greater_than_40_characters()"
});
formatter.result({
  "duration": 839066700,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_sign_in1()"
});
formatter.result({
  "duration": 3191715000,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_verify_the_error_message_2()"
});
formatter.result({
  "duration": 92878000,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_email_field()"
});
formatter.result({
  "duration": 3318907400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yut@gmail.com",
      "offset": 32
    }
  ],
  "location": "Sprint2_stepdefination1.user_enter_valid_and_registered(String)"
});
formatter.result({
  "duration": 1280890600,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_password_field()"
});
formatter.result({
  "duration": 1204354700,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_enters_invalid_password()"
});
formatter.result({
  "duration": 1170079800,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_sign_in1()"
});
formatter.result({
  "duration": 3189027700,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_verify_the_error_message_2()"
});
formatter.result({
  "duration": 119066600,
  "status": "passed"
});
formatter.after({
  "duration": 390053200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Validating Account for login with valid credentials",
  "description": "",
  "id": "sign-in-validation;validating-account-for-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "User Enter valid and registered \u003cEmail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enter valid \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to Account page",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "sign-in-validation;validating-account-for-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Email",
        "password"
      ],
      "line": 59,
      "id": "sign-in-validation;validating-account-for-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "mnc@gmail.com",
        "lkjhgfds"
      ],
      "line": 60,
      "id": "sign-in-validation;validating-account-for-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40542341100,
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
  "duration": 3780926200,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Validating Account for login with valid credentials",
  "description": "",
  "id": "sign-in-validation;validating-account-for-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 48,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "User click on Email field",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "User Enter valid and registered mnc@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User Click on Password field",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enter valid lkjhgfds",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User click on Sign In1",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_email_field()"
});
formatter.result({
  "duration": 3397234400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mnc@gmail.com",
      "offset": 32
    }
  ],
  "location": "Sprint2_stepdefination1.user_enter_valid_and_registered(String)"
});
formatter.result({
  "duration": 1274975300,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_password_field()"
});
formatter.result({
  "duration": 1230157300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lkjhgfds",
      "offset": 17
    }
  ],
  "location": "Sprint2_stepdefination1.user_enter_valid(String)"
});
formatter.result({
  "duration": 1193519400,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_sign_in1()"
});
formatter.result({
  "duration": 3211974400,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_navigates_to_account_page()"
});
formatter.result({
  "duration": 6614385900,
  "status": "passed"
});
formatter.after({
  "duration": 519451200,
  "status": "passed"
});
formatter.before({
  "duration": 39291643200,
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
  "duration": 3829482800,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Validating Forgot Password button",
  "description": "",
  "id": "sign-in-validation;validating-forgot-password-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 61,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "User click on Forgot password",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "User navigates to retrieve password page",
  "keyword": "Then "
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_forgot_password()"
});
formatter.result({
  "duration": 3418573600,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_navigates_to_retrieve_password_page()"
});
formatter.result({
  "duration": 1713794700,
  "status": "passed"
});
formatter.after({
  "duration": 414075300,
  "status": "passed"
});
formatter.before({
  "duration": 31415270700,
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
  "duration": 4081715700,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Validating Continue functionalities",
  "description": "",
  "id": "sign-in-validation;validating-continue-functionalities",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 66,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "User click on Continue with booking",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User navigates to booking webpage",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "User click on Continue with facebook",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "User navigates to facebook webpage",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "User click on Continue with Google",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "User navigates to Google webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_continue_with_booking()"
});
formatter.result({
  "duration": 3640562800,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_navigates_to_booking_webpage()"
});
formatter.result({
  "duration": 6411166100,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_continue_with_facebook()"
});
formatter.result({
  "duration": 3415775000,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_navigates_to_facebook_webpage()"
});
formatter.result({
  "duration": 6339622900,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_continue_with_google()"
});
formatter.result({
  "duration": 3559550700,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_navigates_to_google_webpage()"
});
formatter.result({
  "duration": 6400836400,
  "status": "passed"
});
formatter.after({
  "duration": 434065100,
  "status": "passed"
});
formatter.before({
  "duration": 41711542500,
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
  "duration": 3807426900,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Validating terms of services",
  "description": "",
  "id": "sign-in-validation;validating-terms-of-services",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "User click on Terms of Service",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User navigates to Terms of Service webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_terms_of_service()"
});
formatter.result({
  "duration": 6449657800,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_navigates_to_terms_of_service_webpage()"
});
formatter.result({
  "duration": 1108860300,
  "status": "passed"
});
formatter.after({
  "duration": 328271300,
  "status": "passed"
});
formatter.before({
  "duration": 32990189100,
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
  "duration": 3822626900,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Validating Create New Account",
  "description": "",
  "id": "sign-in-validation;validating-create-new-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "User click on Create New Account",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "User navigates to Sign Up page",
  "keyword": "Then "
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_click_on_create_new_account()"
});
formatter.result({
  "duration": 3496819400,
  "status": "passed"
});
formatter.match({
  "location": "Sprint2_stepdefination1.user_navigates_to_sign_up_page()"
});
formatter.result({
  "duration": 1208664500,
  "status": "passed"
});
formatter.after({
  "duration": 416487400,
  "status": "passed"
});
});