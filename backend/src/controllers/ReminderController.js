const mongoose = require("mongoose");

const Reminder = mongoose.model("Reminder");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const reminders = await Reminder.paginate({}, { page, limit: 10 });

    return res.json(reminders);
  },
  async show(req, res) {
    const { idReminder } = req.params;
    const reminder = await Reminder.findById(idReminder);

    if (!reminder) {
      return res.status(404).json({
        message: "Reminder does not exists."
      });
    }

    return res.json(reminder);
  },
  async store(req, res) {
    if (!req.body) {
      return res.status(400).json({
        message: "Reminder content can not be empty."
      });
    }

    const reminder = await Reminder.create(req.body);

    return res.json(reminder);
  },
  async update(req, res) {
    const reminder = await Reminder.findOneAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(reminder);
  },
  async destroy(req, res) {
    await Reminder.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
