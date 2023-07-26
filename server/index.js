import { faker } from "@faker-js/faker";
import pkg from "body-parser";
import express from "express";
import helmet from "helmet";
import moment from "moment";
import http from "node:http";

//instantiating express, http, body-parser and helmet
//setting up the port

const { json, urlencoded } = pkg;
const app = express().use(express.json());
const server = http.createServer(app);
const port = 3000;
//setting up the middlewares
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: true }));

//setting up the headers
app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "Content-Type, Authorization, X-Requested-With, Accept");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

//setting up the server
server.listen(port, (err) => {
  if (err) {
    console.error(err);
  }

  console.log(`Server started on port ${port}`);
});

//exporting the server
export default server;

//setting up the routes
app.options("*", (_req, res) => {
  res.send(200);
});

app.get("/listar-usuarios", (_req, res) => {
  res.send(generateUsers(10));
});

app.post("/incluir", (req, res) => {
  res.send({ ...req.body });
});

app.put("/atualizar", (req, res) => {
  res.send({ ...req.body });
});

app.delete("/excluir", (req, res) => {
  res.send({ ...req.body });
});

function generateUsers(amount) {
  let users = [];

  for (let i = 0; i < amount; i++) {
    users.push({
      id: i,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    });
  }

  return users;
}
