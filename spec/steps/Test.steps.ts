import { loadFeature, defineFeature } from "jest-cucumber";
import { ParsedFeature } from "jest-cucumber/dist/src/models";

import IRequester from "ServerRequest/Requester/IRequester";
import buildRequester from "ServerRequest/config/ConfigurationBuilder";

import app from "../../src/App/App";

import Test from "../../src/Test";
jest.mock("../../src/Test");

const feature: ParsedFeature = loadFeature("./spec/features/Test.feature");

const requester: IRequester = buildRequester(app);

defineFeature(feature, test => {
  test("Test scenario", ({ given, when, then, pending }) => {
    when("I access the resource", () => {
      return requester.get("/user");
    });
    then("the test method of the test class is called", () => {
      const mockInstance = (Test as jest.Mock<Test>).mock.instances[0];
      expect(mockInstance.test).toHaveBeenCalledTimes(1);
    });
  });
});
