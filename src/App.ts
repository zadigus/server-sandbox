import express = require("express");
import {Express, Request, Response} from "express";

const app: Express = express();

app.get("/user", (req: Request, res: Response) => {
  res.status(500).json({name:"john"});
});

export default app;