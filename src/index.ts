import {Request, Response} from "express";

import App from "App/App";

App.get("/trouduc", (req: Request, res: Response) => {
  res.status(200).json({name:"john"});
});