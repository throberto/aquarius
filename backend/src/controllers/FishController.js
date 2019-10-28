const mongoose = require("mongoose");

const Fish = mongoose.model("Fish");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const fish = await Fish.paginate({}, { page, limit: 10 });

    return res.json(fish);
  },
  async show(req, res) {
    const { idFish } = req.params;
    const fish = await Fish.findById(idFish);

    if (!fish) {
      return res.status(404).json({
        message: "Fish does not exists."
      });
    }

    return res.json(fish);
  }
};
