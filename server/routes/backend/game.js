var express = require('express');
var router = express.Router();

var player = require('./player.js');
var play = require('./play.js');


router.get('/playing/:id/:highscore/', function(req, res, next) {
  var body = req.body;

  console.log(body)

  var pl = new player("user", req.params.highscore);
  console.log(pl)
  var game = new play("playing", req.params.id, pl);
  res.send(game.sent());
});


module.exports = router;
