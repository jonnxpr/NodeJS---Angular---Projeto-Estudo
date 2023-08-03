import React, { useState } from "react";
import moment from "moment";

const FormCrud = () => {
  let [game, setGame] = useState([{ game_name: "", genre: "" }]);
  let [createdAt, setCreatedAt] = useState(
    moment().format("DD/MM/YYYY HH:mm:ss")
  );
  let [updatedAt, setUpdatedAt] = useState(
    moment().format("DD/MM/YYYY HH:mm:ss")
  );

  const handleInputChange = (e) => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("genre.name->", game.game_name);
    alert("game.genre->", game.genre);
    if (game.game_name && game.genre) {
    }
  };

  return (
    <div class="container mt-5">
        <div class="border border-primary rounded p-3">
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="game_name" className="form-label">
                  Nome do jogo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="game_name"
                  name="game_name"
                  value={game.game_name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="genre" className="form-label">
                  Gênero:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="genre"
                  name="genre"
                  value={game.genre}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="createdAt" className="form-label">
                  Criado em:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="createdAt"
                  name="createdAt"
                  value={createdAt}
                  disabled
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="updatedAt" className="form-label">
                  Atualizado em:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="updatedAt"
                  name="updatedAt"
                  value={updatedAt}
                  disabled
                ></input>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-sm-12">
              <button type="submit" className="btn btn-primary me-2">
                Adicionar Jogo
              </button>
            </div>
          </div>
        </form>
    </div>
    

        {/* <div className="mt-4">
          <h2>Users List</h2>
          <ul className="list-group">
            {users.map((user, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {user.name} - {user.email}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default FormCrud;