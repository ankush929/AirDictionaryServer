var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({

  name : String,
  email : String,
  favWords : [],
  searchWords : []
});

mongoose.model('Users', UserSchema);
