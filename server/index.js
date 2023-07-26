import pkg from "body-parser";
import express from "express";
import helmet from "helmet";
import http from "node:http";
import { PORT } from "./config.js";
import { generateUsers } from "./utils/utils.js";

const { json, urlencoded } = pkg;
export const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "Content-Type, Authorization, X-Requested-With, Accept");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

server.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }

  console.log(`Server started on port ${PORT}`);
});

app.options("*", (_req, res) => {
  res.send(200);
});

app.get("/list", (_req, res) => {
  res.send(generateUsers(10));
});

app.post("/create", (req, res) => {
  res.send({ ...req.body });
});

app.put("/update", (req, res) => {
  res.send({ ...req.body });
});

app.delete("/delete", (req, res) => {
  res.send({ ...req.body });
});
