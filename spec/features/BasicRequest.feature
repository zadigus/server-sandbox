Feature: Basic request

  Scenario: I can test the status value of an HTTP request
    Given a server application
    When a user hits the '/user' endpoint
    Then the server returns a success response