var mongoose = require("mongoose");

var GlobalWordsSchema = new mongoose.Schema({

  word: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('GlobalWords', GlobalWordsSchema);
