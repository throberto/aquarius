const express = require('express');

const UserController = require('./controllers/UserController');
const AquariumController = require('./controllers/AquariumController');
//const AquariumFishController = require('./controllers/AquariumFishController');
const FishController = require('./controllers/FishController');

const routes = express.Router();

routes.get('/user/:idUser', UserController.show);
routes.post('/user', UserController.store);
routes.put('/user/:idUser', UserController.update);

routes.get('/user/:idUser/aquarium', AquariumController.index);
routes.get('/user/:idUser/aquarium/:idAquarium', AquariumController.show);
routes.post('/user/:idUser/aquarium', AquariumController.store);
// routes.put('/user/:idUser/aquarium/:idAquarium', AquariumController.update);
// routes.delete('/user/:idUser/aquarium/:idAquarium', AquariumController.destroy);

// routes.get('/user/:idUser/aquarium/:idAquarium/fish', AquariumFishController.index);
// routes.get('/user/:idUser/aquarium/:idAquarium/fish/:idFish', AquariumFishController.show);
// routes.post('/user/:idUser/aquarium/:idAquarium/fish', AquariumFishController.store);
// routes.put('/user/:idUser/aquarium/:idAquarium/fish/:idFish', AquariumFishController.update);
// routes.delete('/user/:idUser/aquarium/:idAquarium/fish/:idFish', AquariumFishController.destroy);

routes.get('/fish', FishController.index);
routes.get('/fish/:idFish', FishController.show);

module.exports = routes;
