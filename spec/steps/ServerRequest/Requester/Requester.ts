import {injectable, inject} from "inversify";

import SERVICE_IDENTIFIER from "../constants/Identifiers";

import IServer from "../IServer";
import { T_Url, T_Response } from "./ResponseData";

@injectable()
export default class Requester {
  /*
   *  Public methods
   */
  public constructor(
    @inject(SERVICE_IDENTIFIER.SERVER) private readonly m_Server: IServer
  ) 
  {}

  public get lastResponse(): T_Response {
    return this.m_LastResponse;
  }

  public get(url: T_Url): T_Response {
    this.m_LastResponse = this.m_Server.get(url);
    return this.m_LastResponse;
  }

  /*
   * Private members
   */
  private m_LastResponse: T_Response;
}