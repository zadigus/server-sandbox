import express = require("express");
import { Express, Request, Response } from "express";
import Test from "../Test";

const app: Express = express();
const myTest: Test = new Test();

app.get("/user", (req: Request, res: Response) => {
  myTest.test();
  res.status(200).json({ name: "john" });
});

export default app;
