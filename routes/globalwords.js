var mongoose = require("mongoose");
var express = require("express");
var GlobalWords = mongoose.model("GlobalWords");

var router = express.Router();

router.get('/', function(req, res, next){

  GlobalWords.find(function(err, GlobalWords){

    if(err){return next(err); }

    res.json(GlobalWords);
  });
});

router.post('/', function(req, res, next){

  var globalWord = new GlobalWords(req.body);
  console.log("Request = ")
  console.log(req.body)

  globalWord.save(function(err, globalWord){
    if(err){ return next(err); }

    res.json(globalWord);
  });
});


module.exports = router;
