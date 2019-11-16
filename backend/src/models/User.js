const mongoose = require("mongoose");
const mongooseBcrypt = require("mongoose-bcrypt");
const mongoosePaginate = require("mongoose-paginate");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      bcrypt: true
    }
  },
  {
    timestamps: true
  }
);

UserSchema.plugin(mongooseBcrypt);
UserSchema.plugin(mongoosePaginate);

mongoose.model("User", UserSchema);
