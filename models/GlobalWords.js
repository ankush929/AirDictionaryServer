var mongoose = require("mongoose");

var GlobalWordsSchema = new mongoose.Schema({

  word: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'}
}, {
  versionKey: false
});

mongoose.model('GlobalWords', GlobalWordsSchema);
