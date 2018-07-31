type T_Status = number;
type T_Headers = any;
type T_Body = any;

export type T_Url = string;

export type T_ResponseContent = {
  status: T_Status,
  headers: T_Headers,
  body: T_Body
}

export type T_Response = Promise<void | T_ResponseContent>;