import supertest = require("supertest");

import { T_ResponseContent } from "./ResponseData";

export function convert(from: supertest.Response): T_ResponseContent {
  return {
    status: from.status,
    body: from.text,
    headers: from.header
  }
}