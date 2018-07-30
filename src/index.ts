import supertest = require("supertest");

import app from './App';

supertest(app).get("/user").end((err, res) => {
  console.log("res = " + JSON.stringify(res));
});