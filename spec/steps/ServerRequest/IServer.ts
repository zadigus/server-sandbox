import { T_Url, T_Response } from "./Requester/ResponseData";

export default interface IServer {
  get(url: T_Url): T_Response;
}