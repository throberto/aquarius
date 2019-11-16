const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const AquariumSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    environment: {
      type: String,
      required: true
    },
    identifier: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    length: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    collection: "aquariums"
  }
);

AquariumSchema.plugin(mongoosePaginate);

mongoose.model("Aquarium", AquariumSchema);
