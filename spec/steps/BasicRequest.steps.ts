import { loadFeature, defineFeature } from "jest-cucumber";
import { ParsedFeature } from "jest-cucumber/dist/src/models";
import supertest = require("supertest");
import app from "../../src/App";

const feature: ParsedFeature = loadFeature("./spec/features/BasicRequest.feature");

defineFeature(feature, test => {
  test("I can test the status value of an HTTP request", ({ given, when, then, pending }) => {

    given("a server application", () => {
      console.log("The server application is ready!");
    });

    when("a user hits the '/user' endpoint", () => {
      pending();
    });

    then("the server returns a success response", (arg) => {
      pending();
    });
  })
});