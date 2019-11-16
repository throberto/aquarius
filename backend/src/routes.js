const express = require("express");

const UserController = require("./controllers/UserController");
const AquariumController = require("./controllers/AquariumController");
// const AquariumFishController = require("./controllers/AquariumFishController");
const ReminderController = require("./controllers/ReminderController");
const FishController = require("./controllers/FishController");

const routes = express.Router();

routes.post("/user", UserController.store);

// proteger as rotas a partir daqui.

routes.get("/users", UserController.index);
routes.get("/user/:idUser", UserController.show);
routes.put("/user/:idUser", UserController.update);

routes.get("/aquariums", AquariumController.index);
routes.get("/aquarium/:idAquarium", AquariumController.show);
// routes.post("/aquarium", AquariumController.store);
routes.put("/aquarium/:idAquarium", AquariumController.update);
routes.delete("/aquarium/:idAquarium", AquariumController.destroy);

routes.get("/reminders", ReminderController.index);
routes.get("/reminder/:idReminder", ReminderController.show);
routes.post("/reminder", ReminderController.store);
routes.put("/reminder/:idReminder", ReminderController.update);
routes.delete("/reminder/:idReminder", ReminderController.destroy);

routes.get("/fish", FishController.index);
routes.get("/fish/:idFish", FishController.show);

// routes.get('/user/:idUser/aquarium/:idAquarium/fish', AquariumFishController.index);
// routes.get('/user/:idUser/aquarium/:idAquarium/fish/:idFish', AquariumFishController.show);
// routes.post('/user/:idUser/aquarium/:idAquarium/fish', AquariumFishController.store);
// routes.put('/user/:idUser/aquarium/:idAquarium/fish/:idFish', AquariumFishController.update);
// routes.delete('/user/:idUser/aquarium/:idAquarium/fish/:idFish', AquariumFishController.destroy);

module.exports = routes;
