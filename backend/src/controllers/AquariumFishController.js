const mongoose = require("mongoose");

const AquariumFish = mongoose.model("AquariumFish");

module.exports = {
  async store(req, res) {
    //
  },
  async update(req, res) {
    const aquariumFish = await AquariumFish.findOneAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

    return res.json(aquariumFish);
  },
  async destroy(req, res) {
    await AquariumFish.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
