const mongoose = require("mongoose");

const AquariumFish = mongoose.model("AquariumFish");

module.exports = {
  async store(req, res) {
    //
  },
  async update(req, res) {
    const { idFish } = req.params;
    const aquariumFish = await AquariumFish.findOneAndUpdate(idFish, req.body, {
      new: true
    });

    return res.json(aquariumFish);
  },
  async destroy(req, res) {
    const { idFish } = req.params;
    await AquariumFish.findByIdAndRemove(idFish);

    return res.send();
  }
};
