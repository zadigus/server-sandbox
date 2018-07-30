import supertest = require("supertest");
import {Express} from "express";
import {injectable, inject} from "inversify";

import SERVICE_IDENTIFIER from "./constants/Identifiers";

type T_Status = number;
type T_Headers = any;
type T_Body = any;
type T_Url = string;

export type T_ResponseContent = {
  status: T_Status,
  headers: T_Headers,
  body: T_Body
}

export type T_Response = Promise<void | T_ResponseContent>;

// TODO: probably get rid of supertest!
@injectable()
export default class Requester {
  /*
   *  Public methods
   */
  public constructor(
    @inject(SERVICE_IDENTIFIER.SERVER_APP) private readonly m_App: Express
  ) 
  {}

  public get lastResponse(): T_Response {
    return this.m_LastResponse;
  }

  public get(url: T_Url): T_Response {
    this.m_LastResponse = new Promise((resolve, reject) => {
      supertest(this.m_App).get(url).end((err, res) => {
        if(err) {
          reject("Error: ${err}");
        } else {
          let result: T_ResponseContent = {
            status: res.status,
            body: res.text,
            headers: res.header
          }
          resolve(result);
        }
      });
    });
    return this.m_LastResponse;
  }

  /*
   * Private members
   */
  private m_LastResponse: T_Response;
}