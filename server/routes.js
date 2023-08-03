// Importando o módulo Router do Express
import { Router } from "express";
import moment from "moment";
import { generateGames } from "./mocker.js";
import Game from "./models/game.js";

// Criando uma instância do roteador
const router = Router();

//Iniciando o CRUD
router.post("/create", (req, res) => {
  let game = {
    game_name: req.body.game_name,
    genre: req.body.genre,
    createdAt: new moment().format("DD/MM/YYYY HH:mm:ss"),
    updatedAt: new moment().format("DD/MM/YYYY HH:mm:ss"),
  };
  Game.create(game);
  res.json({ game: game, message: "Game criado com sucesso!" });
});

router.post("/generate-random-games/:quantity", (req, res) => {
  let games = [];
  games = generateGames(+req.params.quantity);
  games.forEach((game) => {
    Game.create({
      game_name: game.name,
      genre: game.genre,
      createdAt: game.createdAt,
      updatedAt: game.updatedAt,
    });
  });
  res.json({ games: games, message: "Games criados com sucesso!" });
});

router.get("/read-all", (req, res) => {
  Game.findAll().then((games) => {
    res.json(games);
  });
});

router.get("/read/:gamename", (req, res) => {
  Game.findAll({ where: { game_name: req.params.gamename } }).then((games) => {
    res.json(games);
  });
});

router.put("/update", (req, res) => {
  let game = {
    game_name: req.body.game_name,
    genre: req.body.genre,
    updatedAt: new moment().format("DD/MM/YYYY HH:mm:ss"),
  };

  Game.update(game, { where: { id: req.body.id } });
  res.json({ game: game, message: "Game atualizado com sucesso!" });
});

router.delete("/delete/:id", (req, res) => {
  let game = Game.findByPk(req.params.id);
  game = {
    game_name: game.game_name,
    genre: game.genre,
    createdAt: game.createdAt,
    updatedAt: new moment().format("DD/MM/YYYY HH:mm:ss"),
  };

  Game.destroy({ where: { id: req.params.id } });
  res.json({ game: game, message: "Game deletado com sucesso!" });
});

router.delete("/erase-database/", (req, res) => {
  Game.destroy({ where: {} });
  res.json({ message: "Banco de dados limpo com sucesso!" });
});

// Exporta o roteador para ser utilizado em outros módulos
export default router;
