const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AquariumSchema = mongoose.Schema({
  user_id: {
    type: Object,
    required: true,
    ref: 'User',
  },
  identifier: {
    type: String,
    required: true,
  },
  colorTheme: {
    type: String,
    required: false,
    default: '#1793F9',
  },
  description: {
    type: String,
    required: false,
  },
  length: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
},
{
  timestamps: true,
  collection: 'aquariums',
});

AquariumSchema.plugin(mongoosePaginate);

mongoose.model('Aquarium', AquariumSchema);
