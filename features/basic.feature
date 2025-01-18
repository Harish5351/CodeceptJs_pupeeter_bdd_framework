Feature: Orange HRM

  Scenario: Verify user is able to login with valid credentials
    Given User is on login page
    When User enters username "Admin" and password "admin123"
    When User clicks on login button
    Then User verifies "Dashboard" is displayed on page
