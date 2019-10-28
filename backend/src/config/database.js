const mongoose = require('mongoose');

const dbPath = 'mongodb+srv://'
  + process.env.MONGODB_USER + ':'
  + process.env.MONGODB_PASS
  + '@cluster0-hjwkl.mongodb.net/' + process.env.MONGODB_NAME;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}

mongoose.connect(dbPath, options);

module.exports = mongoose;

