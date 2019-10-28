const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    finished: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

mongoose.model("Reminder", ReminderSchema);
