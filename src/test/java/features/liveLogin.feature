Feature: Login Page steps

  @live
  Scenario Outline: Demo for Scenario Outline
    Given I click to My Account
    And I input to Username "<EmailAddress>"
    And I input to Password "<Password>"
    And I click to Login button

    Examples:
      | EmailAddress          | Password | Message                   |
      |                       |          | This is a required field. |
      |                       | abc123   | This is a required field. |
      | vietnhan123@gmail.com |          | This is a required field. |