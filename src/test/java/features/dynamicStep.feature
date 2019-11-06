Feature: Title of your feature
  I want to user this template for my feature file

  @dynamic
  Scenario:  Common dynamic step
    #------------ACTION------------#
    # Textbox
    And I input to "name" textbox with data "Vietnhan"
    And I input to "city" textbox with data "Da Nang"
    And I input to "state" textbox with data "Ngu Hanh Son"
    And I input to "emailid" textbox with random data "binvnese"
    # 0 = fix data | 1 = random data have space | 2 = random data no space
    And I input to "city" textbox with "0" data "Da Nang"
    # Ha Noi
    And I input to "city" textbox with "1" data "Da Nang"
    # Ha Noi 123324
    And I input to "email" textbox with "2" data "autotest"

    # binvnese123324@gmail.com
    And I input to "cusid" textbox with data "CustomerID"
    # Text Area
    And I input to "addr" textarea with data "123 Ho Xuan Huong"

    # Dropdown
    And I select item in "selaccount" dropdown with data "Current"
    And I select item in "selaccount" dropdown with data "Saving"

    # Radio button
    And I select "m" radio button
    And I select "f" radio button

    # Button
    And I click to "" button

    # Link
    And I open "New Customer" page
    And I open "Edit Customer" page

    # Regex
    And I input first Account ID
    And I input second Account ID

    And I transfer to "<Amount>" USD
    And I withdraw to "<Amount>" USD


    #-------------VERIFY------------#
    And Verify message "Customer Register Successfully!!!" displays success
    And Verify message "Customer details updated Successfully!!!" displays success
    And Verify message "Account Generated Successfully!!!" displays success
    And Verify message "Add New Customer" displays success
    And Verify message "Edit Customer Form" displays success
    And Verify information "Customer Name" is "Name" displayed
    And Verify alert message "You are not authorize to edit this customer!!" displayed and accept

    #------------WAIT-------------#
    And I sleep with "5" seconds
    And I sleep with "10" seconds
    And I sleep with "15" seconds
