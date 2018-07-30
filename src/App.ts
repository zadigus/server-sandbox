import express = require("express");
import {Express, Request, Response} from "express";

const app: Express = express();

app.get("/user", (req: Request, res: Response) => {
  res.status(200).json({name:"john"});
});

export default app;