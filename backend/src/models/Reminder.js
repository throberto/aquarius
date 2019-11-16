const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

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
    datetime: {
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

ReminderSchema.plugin(mongoosePaginate);

mongoose.model("Reminder", ReminderSchema);
