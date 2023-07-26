import { faker } from "@faker-js/faker";
import moment from "moment";

export function generateUsers(amount) {
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
