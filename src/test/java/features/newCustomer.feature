@account
Feature: Login to Application
  As a PO
  I want to login to application
  So that verify login function work well

  @register
  Scenario: Register and Login to application
    When I get Login page Url
    And I click to here link
    And I input to email textbox with data "binvnese"
    And I click to Submit button at Register page
    Then I get UserID infor
    And I get Password infor
    When I open Login page again

  @login
  Scenario: Login to application
    Given I input to Username textbox
    And I input to Password textbox
    And I click to Login button at Login page
    Then Verify Home page displayed with message "Welcome To Manager's Page of Guru99 Bank"


  @new_customer
  Scenario Outline: Create New Customer
    Given I open "New Customer" page
    When I input to "name" textbox with data "<Name>"
    And I select "m" radio button
    And I input to "dob" textbox with data "<DateOfBirth>"
    And I input to "addr" textarea with data "<Address>"
    And I input to "city" textbox with data "<City>"
    And I input to "state" textbox with data "<State>"
    And I input to "pinno" textbox with data "<Pin>"
    And I input to "telephoneno" textbox with data "<Phone>"
    And I input to "emailid" textbox with data "<Email>"
#    And I input to "emailid" textbox with "2" data "<Email>"
    And I input to "password" textbox with data "<Password>"
    And I click to "Submit" button
    Then Verify message "Customer Registered Successfully!!!" displays success
#    When I open "Edit Customer" page
#    Then Verify message "Edit Customer Form" displays success
#    When I open "Delete Customer" page
#    Then Verify message "Delete Customer Form" displays success
#    When I open "Manager" page
#    Then Verify Home page displayed with message "Welcome To Manager's Page of Guru99 Bank"
    And Verify information "Customer Name" is "<Name>" displayed
    And Verify information "Address" is "<Address>" displayed
    And Verify information "City" is "<City>" displayed
    And Verify information "State" is "<State>" displayed
    And Verify information "Pin" is "<Pin>" displayed
    And Verify information "Mobile No." is "<Phone>" displayed
    And Verify information "Email" is "<Email>" displayed


    Examples: New Customer Info
      | Name      | DateOfBirth | Address           | City      | State     | Pin    | Phone      | Email                     | Password | Message                             |
      | JohnOsheaa | 01-01-1992  | 96 Liberty Paszse | Liverpool | Dontknow  | 223376 | 5117121921 | osheama1il@gmail.com       | 123123   | Customer Registered Successfully!!! |
      | Zakuuuraa  | 02-03-1990  | 1245 Arnold       | Alfield   | Los Vegas | 874432 | 8436111211 | zakuur2amotoyabe@gmail.com | 123123   | Customer Registered Successfully!!! |