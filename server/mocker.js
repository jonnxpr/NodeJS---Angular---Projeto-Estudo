import { faker } from "@faker-js/faker";
import moment from "moment";

export function generateGames(amount) {
  let games = [];

  for (let i = 0; i < amount; i++) {
    games.push({
      id: i,
      name: faker.person.fullName(),
      genre: faker.animal.type(),
      createdAt: moment().format("DD-MM-YYYY HH:mm:ss"),
      updatedAt: moment().format("DD-MM-YYYY HH:mm:ss"),
    });
  }

  return games;
}
