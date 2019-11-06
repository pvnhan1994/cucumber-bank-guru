@payment
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
    And I input to "password" textbox with data "<Password>"
    And I click to "Submit" button
    Then Verify message "Customer Registered Successfully!!!" displays success
    And Verify information "Customer Name" is "<Name>" displayed
    And Verify information "Address" is "<Address>" displayed
    And Verify information "City" is "<City>" displayed
    And Verify information "State" is "<State>" displayed
    And Verify information "Pin" is "<Pin>" displayed
    And Verify information "Mobile No." is "<Phone>" displayed
    And Verify information "Email" is "<Email>" displayed
    And I get CustomerID


    Examples: New Customer Info
      | Name     | DateOfBirth | Address          | City    | State | Pin    | Phone      | Email                          | Password | Message                             |
      | Tony Teo | 09-09-1972  | 96 Libezrty abcs | Chelsea | Kbiet | 112233 | 5457121921 | ema321453ccxzungduoc@gmail.com | 123123   | Customer Registered Successfully!!! |

  @edit_customer
  Scenario Outline:  Edit Customer
    Given I open "Edit Customer" page
    Then Verify message "Edit Customer Form" displays success
    When I input CustomerID
    And I click to "Submit" button
    And I input to "addr" textarea with data "<Address>"
    And I input to "city" textbox with data "<City>"
    And I input to "state" textbox with data "<State>"
    And I input to "pinno" textbox with data "<Pin>"
    And I input to "telephoneno" textbox with data "<Mobile>"
    And I input to "emailid" textbox with data "<Email>"
    And I click to "Submit" button
    Then Verify message "Customer details updated Successfully!!!" displays success
    And Verify information "Address" is "<Address>" displayed
    And Verify information "City" is "<City>" displayed
    And Verify information "State" is "<State>" displayed
    And Verify information "Pin" is "<Pin>" displayed
    And Verify information "Mobile No." is "<Mobile>" displayed
    And Verify information "Email" is "<Email>" displayed

    Examples: Edit Customer Info
      | Address   | City      | State  | Pin    | Mobile     | Email                 |
      | 564 Local | Las Vegas | Unknow | 765563 | 0935602450 | helloxchehe@gmail.com |

  @new_account
  Scenario Outline:  Add New Account
    #-------------- Create first Account ----------#
    Given I open "New Account" page
    Then Verify message "Add new account form" displays success
    When I input CustomerID
    And I sleep with "5" seconds
    And I select item in "selaccount" dropdown with data "Saving"
    And I input to "inideposit" textbox with data "50000"
    And I click to "submit" button
    Then Verify message "Account Generated Successfully!!!" displays success
#    And Verify information "<string>" is "<string>" displayed // Verify Customer ID
    And Verify information "Customer Name" is "<Name>" displayed
    And Verify information "Email" is "<Email>" displayed
    And Verify information "Account Type" is "Saving" displayed
#    And Verify information "<string>" is "<string>" displayed // Verify Date
    And Verify information "Current Amount" is "50000" displayed
    When I get FirstAccountID
    #-------------- Create first Account ----------#
    Given I open "New Account" page
    Then Verify message "Add new account form" displays success
    When I input CustomerID
    And I sleep with "5" seconds
    And I select item in "selaccount" dropdown with data "Current"
    And I input to "inideposit" textbox with data "10000"
    And I click to "submit" button
    Then Verify message "Account Generated Successfully!!!" displays success
#    And Verify information "<string>" is "<string>" displayed // Verify Customer ID
    And Verify information "Customer Name" is "<Name>" displayed
    And Verify information "Email" is "<Email>" displayed
    And Verify information "Account Type" is "Current" displayed
#    And Verify information "<string>" is "<string>" displayed // Verify Date
    And Verify information "Current Amount" is "10000" displayed
    When I get SecondAccountID

    Examples:
      | Name     | Email                 |
      | Vietnhan | helloxchehe@gmail.com |
      | Vietnhan | helloxchehe@gmail.com |

  @edit_account
  Scenario Outline: Edit Account
    Given I open "Edit Account" page
    When I input firstAccountID
    And I click to "Submit" button
    And I select item in "a_type" dropdown with data "Current"
    And I click to "Submit" button
    Then Verify message "Account details updated Successfully!!!" displays success
    And Verify information "Customer Name" is "<Name>" displayed
    And Verify information "Email" is "<Email>" displayed
    And Verify information "Account Type" is "Current" displayed
    And Verify information "Current Amount" is "50000" displayed

    Examples:
      | Name     | Email                 |
      | Vietnhan | helloxchehe@gmail.com |
      | Vietnhan | helloxchehe@gmail.com |

    #Transfer money into current account and check account balance equal 50000
  @deposit
  Scenario: Transfer money into current account and check account balance equal 50000
    Given I open "Deposit" page
    Then Verify message "Amount Deposit Form" displays success
    When I input firstAccountID
    And I input to "ammount" textbox with data "5000"
    And I input to "desc" textbox with data "nop tien"
    And I click to "Submit" button
    Then Verify transaction details of Deposit for Account
    And Verify information "Account No" is "<string>" displayed
    And Verify information "Amount Credited" is "5000" displayed
    And Verify information "Type of Transaction" is "Deposit" displayed
    And Verify information "Description" is "nop tien" displayed
    And Verify information "Current Balance" is "55000" displayed

  @withdrawal
  Scenario: Withdraw money from current account and check account balance equal 40000
    Given I open "Withdrawal" page
    Then Verify message "Amount Withdrawal Form" displays success
    When I input firstAccountID
    And I input to "ammount" textbox with data "15000"
    And I input to "desc" textbox with data "rut tien"
    And I click to "Submit" button
    Then Verify transaction details of Withdrawal for Account
    And Verify information "Account No" is "<string>" displayed
    And Verify information "Amount Debited" is "15000" displayed
    And Verify information "Type of Transaction" is "Withdrawal" displayed
    And Verify information "Description" is "rut tien" displayed
    And Verify information "Current Balance" is "40000" displayed

  @fund_transfer
  Scenario: Transfer the money into other account and check amount Equal 10000
    Given I open "Fund Transfer" page
    Then Verify message ""Fund transfer"" displays success
    When I input firstAccountID
    And I input secondAccountID
    And I input to "ammount" textbox with data "10000"
    And I input to "desc" textbox with data "chuyen tien"
    And I click to "Submit" button
    Then Verify message "Fund Transfer Details" displays success
    And Verify information "From Account Number" is "<string>" displayed
    And Verify information "To Account Number" is "<string>" displayed
    And Verify information "Amount" is "10000" displayed
    And Verify information "Description" is "chuyen tien" displayed


