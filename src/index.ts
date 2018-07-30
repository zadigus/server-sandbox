import supertest = require("supertest");
import express = require("express");
import {Express, Request, Response} from "express";

const app: Express = express();

app.get("/user", (req: Request, res: Response) => {
  res.status(200).json({name:"john"});
});

supertest(app).get("/user").expect("Content-Type", /json/).expect("Content-Length", "15").expect(202).end((err, res) => {
  if(err) { throw err; }
});