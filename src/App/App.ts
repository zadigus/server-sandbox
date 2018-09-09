import express = require("express");
import { Express, Request, Response } from "express";
import Test from "../Test";

const app: Express = express();
const myTest: Test = new Test();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("OK");
});

app.get("/user", (req: Request, res: Response) => {
  myTest.test();
  res.status(200).json({ name: "john" });
});

export default app;
