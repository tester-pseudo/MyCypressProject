Feature: Login to Magento

  Background:
    Given Load magento website

  Scenario Outline: User logs into the website
    When Click on sign in button
    When Enter username "<username>" and password "<password>"
    And user click on the login button
    Then user should be logged in successfully

    Examples:
      | username        | password  |
      | 123test@mag.com | Test@1234 |

  Scenario Outline: User logs with invalid credntial
    When Click on sign in button
    When Enter username "<username>" and password "<password>"
    And user click on the login button
    Then validate invalid credential error message

    Examples:
      | username         | password  |
      | 1323test@mag.com | Test@1234 |

  Scenario Outline: User logs with invalid email
    When Click on sign in button
    When Enter username "<username>" and password "<password>"
    And user click on the login button
    Then validate invalid email error message

    Examples:
      | username | password  |
      | 1323test | Test@1234 |

  Scenario Outline: User click on logs without userid and password
    When Click on sign in button
    And user click on the login button
    Then validate blank email error message