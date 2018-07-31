import buildRequester from "./ServerRequest/config/ConfigurationBuilder";
import Requester from "./ServerRequest/Requester/Requester";
import { T_ResponseContent } from "./ServerRequest/Requester/ResponseData";
import App from "../../src/App";

import { loadFeature, defineFeature } from "jest-cucumber";
import { ParsedFeature } from "jest-cucumber/dist/src/models";

const feature: ParsedFeature = loadFeature("./spec/features/BasicRequest.feature");

const requester: Requester = buildRequester(App);

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