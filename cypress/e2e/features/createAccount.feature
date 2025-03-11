Feature: Login to Magento

  Background:
    Given Load magento website

  Scenario: user successfully create a new customer account
    Given user click on create an account button in home page
    When user enter firstName "<firstName>" and lastName "<lastName>"
    When user enter valid email in the Email field
    When user enter password "<password>" and confirmPassword "<confirmPassword>"
    When user click on create an account button
    When validate account is created successfully message
    Then user should be logged in successfully

    Examples:
      | firstName | lastName | password  | confirmPassword |
      | test      | test     | Test@1234 | Test@1234       |


  Scenario: user try to create account with invalid email
    Given user click on create an account button in home page
    When user enter firstName "<firstName>" and lastName "<lastName>"
    When user enter invalid email in the Email field
    When user enter password "<password>" and confirmPassword "<confirmPassword>"
    When user click on create an account button
    When validate invalid Email Error Message

    Examples:
      | firstName | lastName | password  | confirmPassword |
      | test      | test     | Test@1234 | Test@1234       |

  Scenario: user try to create account with registred email
    Given user click on create an account button in home page
    When user enter firstName "<firstName>" and lastName "<lastName>"
    When user enter existing email in the Email field
    When user enter password "<password>" and confirmPassword "<confirmPassword>"
    When user click on create an account button
    When validate already email registred Error Message

    Examples:
      | firstName | lastName | password  | confirmPassword |
      | test      | test     | Test@1234 | Test@1234       |


  Scenario: user try to create account with password and confirm password as different value
    Given user click on create an account button in home page
    When user enter firstName "<firstName>" and lastName "<lastName>"
    When user enter existing email in the Email field
    When user enter password "<password>" and confirmPassword "<confirmPassword>"
    When user click on create an account button
    When validate password Mismatch Message 

    Examples:
      | firstName | lastName | password  | confirmPassword |
      | test      | test     | Test@1234 | Test@124       |


 Scenario: user try to create account with weak password
    Given user click on create an account button in home page
    When user enter firstName "<firstName>" and lastName "<lastName>"
    When user enter existing email in the Email field
    When user enter password "<password>" and confirmPassword "<confirmPassword>"
    When user click on create an account button
    When validate weak password Message 

    Examples:
      | firstName | lastName | password  | confirmPassword |
      | test      | test     | Test | Test      |     