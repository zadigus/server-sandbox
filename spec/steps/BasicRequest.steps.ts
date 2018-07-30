import container from "../../src/config/TestConfig";
import Requester, { T_ResponseContent } from '../../src/Requester';

import { loadFeature, defineFeature } from "jest-cucumber";
import { ParsedFeature } from "jest-cucumber/dist/src/models";

const feature: ParsedFeature = loadFeature("./spec/features/BasicRequest.feature");

const requester: Requester = container.get<Requester>(Requester);

defineFeature(feature, test => {
  test("I can test the status value of an HTTP request", ({ given, when, then, pending }) => {

    given("a server application", () => {
      console.log("The server application is ready!");
    });

    when("a user hits the '/user' endpoint", () => {
      requester.get("/user");
    });

    then("the server returns a success response", () => {
      return requester.lastResponse.then((res: T_ResponseContent) => expect(res.status).toBe(200));
    });
  })
});