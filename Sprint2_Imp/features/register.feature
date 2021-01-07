Feature: Register Functionality

Background:
	Given the application browser is launched
    And Open Table homepage is opened 



Scenario: Successful creation of an account
When user clicks "Sign up" button
And user enters the first name 
And user enters the last name 
And user enters the email-id
And user enters valid password
And user Re-enters the password
And user selects the primary dining location
And user clicks on create account button
Then the account should be successfully created

Scenario: Unsuccessful registration due to invalid first name
When user clicks "Sign up" button
And user enters invalid first name 
And user fills the last name field
And user fills the email field
And user fills the password field
And user Re-enters the password
And user selects the primary dining location
And user clicks on create account button
Then error message is displayed below the first name field

Scenario: Unsuccessful registration due to invalid last name
When user clicks "Sign up" button
And user enters the first name 
And user enters invalid last name 
And user fills the email field
And user fills the password field
And user Re-enters the password
And user selects the primary dining location
And user clicks on create account button
Then error message is displayed below the last name field

Scenario: Unsuccessful registration due to invalid email-id
When user clicks "Sign up" button
And user enters the first name 
And user enters the last name 
And user enters invalid email-id
And user fills the password field
And user Re-enters the password
And user selects the primary dining location
And user clicks on create account button
Then error message is displayed below the email field

Scenario: Unsuccessful registration due to invalid password
When user clicks "Sign up" button
And user enters the first name 
And user enters the last name 
And user enters email-id
And user enters invalid password
And user Re-enters the invalid password
And user selects the primary dining location
And user clicks on create account button
Then error message is displayed for the password field

Scenario: Unsuccessful registration due to blank field
When user clicks "Sign up" button
And user leaves the required fields empty
And user clicks on create account button
Then error message will be displayed under each field

