const PlayersController = require("../controllers/players.controller");

module.exports = app => {
    app.get("/api/players/", PlayersController.findAllPlayers);
    app.put("/api/players/update/:id", PlayersController.updateExistingPlayers);
    app.get("/api/players/:id", PlayersController.findOneSinglePlayers);
    app.post("/api/players/",PlayersController.createNewPlayers);
    app.delete("/api/players/delete/:id", PlayersController.deleteAnExistingPlayers);
};