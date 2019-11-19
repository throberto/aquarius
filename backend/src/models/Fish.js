const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const FishSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    alias: {
      type: String,
      required: true
    },
    kingdom: {
      type: String,
      required: true
    },
    phylum: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: true
    },
    order: {
      type: String,
      required: true
    },
    family: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

FishSchema.virtual("photo_url").get(function() {
  return `http://localhost:3333/files/${this.photo}`;
});

FishSchema.plugin(mongoosePaginate);

mongoose.model("Fish", FishSchema);
