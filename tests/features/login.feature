Feature: Complete register
    As a user
    I want to login

    Scenario: I login with correct username and password
        Given I go to page "homePage"
        When I input "vuongle" as username
        When I input "ledaivuong" as password
        When I click login
        Then I should be on page "flightPage"