Feature: To validate the Login functionality

Background: 
  Given User has to be there in the FB login page

  Scenario: To verify the user can able login with incorrect credentials
  
    When User has to fill the username and password
      
      |username|password|firstname|
      |Rajesh|1321313|Syed|
      |Suresh|qwrqeqr|Farith|
    And User clicks the login button
    Then Verify user is naviagting the login page
    
    
    Scenario: To verify the user can create an account
    
    When User has to fill firstname.lastname,mobileno,dob and clicks the signup button
    Then user can able to create an account successfully

    
 