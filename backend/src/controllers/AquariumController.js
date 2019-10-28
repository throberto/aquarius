const mongoose = require("mongoose");

const User = mongoose.model("User");
const Aquarium = mongoose.model("Aquarium");

module.exports = {
  async index(req, res) {
    const { idUser } = req.params;
    const user = await User.findById(idUser);

    if (!user) {
      return res.status(404).json({
        message: "User does not exists."
      });
    }

    const { page = 1 } = req.query;
    const aquariums = await Aquarium.paginate(
      { user_id: idUser },
      { page, limit: 10 }
    );

    if (!aquariums) {
      return res.status(404).json({
        message: "User has no registered aquariums."
      });
    }

    return res.json(aquariums);
  },
  async show(req, res) {
    const { idUser, idAquarium } = req.params;
    const user = await User.findById(idUser);

    if (!user) {
      return res.status(404).json({
        message: "User does not exists."
      });
    }

    const aquarium = Aquarium.findOne({ user_id: idUser });

    return res.json(aquarium);

    // if (!aquarium) {
    //   return res.status(404).json({
    //     message: 'Aquarium User does not exists.',
    //   })
    // }

    // return res.json(aquarium);
  },
  async store(req, res) {
    const { idUser } = req.params;
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
    //
  },
  async destroy(req, res) {
    //
  }
};
