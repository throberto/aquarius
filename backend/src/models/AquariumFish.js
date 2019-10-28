const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AquariumFishSchema = mongoose.Schema({
  aquarium_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Aquarium',
  },
  fish_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Fish',
  },
  identifier: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: false,
  },
},
{
  timestamps: true,
});

AquariumFishSchema.plugin(mongoosePaginate);

mongoose.model('AquariumFish', AquariumFishSchema);

