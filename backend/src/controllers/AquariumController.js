const mongoose = require("mongoose");

const User = mongoose.model("User");
const Aquarium = mongoose.model("Aquarium");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const aquariums = await Aquarium.paginate({}, { page, limit: 10 });

    return res.json(aquariums);
  },
  async show(req, res) {
    const { idAquarium } = req.params;

    const aquarium = await Aquarium.findById(idAquarium);

    if (!aquarium) {
      return res.status(404).json({
        message: "Aquarium does not exists."
      });
    }

    return res.json(aquarium);
  },
  async store(req, res) {
    const idUser = req.headers.user_id;
    const user = await User.findById(idUser);

    if (!user) {
      return res.status(404).json({
        message: "User does not exists."
      });
    }

    if (!req.body) {
      return res.status(400).json({
        message: "Aquarium content can not be empty."
      });
    }

    const { identifier } = req.body;

    if (await Aquarium.findOne({ identifier })) {
      return res.status(400).json({
        message: "Identifier already being used."
      });
    }

    let content = req.body;
    content.user_id = idUser;

    const aquarium = await Aquarium.create(content);
    return res.json(aquarium);
  },
  async update(req, res) {
    const { idAquarium } = req.params;
    const aquarium = await Aquarium.findOneAndUpdate(idAquarium, req.body, {
      new: true
    });

    return res.json(aquarium);
  },
  async destroy(req, res) {
    const { idAquarium } = req.params;
    await Aquarium.findByIdAndRemove(idAquarium);

    return res.send();
  }
};
