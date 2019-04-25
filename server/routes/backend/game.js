var express = require('express');
var router = express.Router();

var player = require('./player.js');
var play = require('./play.js');


router.get('/', function(req, res, next) {
  var body = req.body;

  console.log(body)

  var pl = new player(body.name, body.score);
  console.log(pl)
  var game = new play(body.status, body.number, pl);
  res.send(game.sent());
});

module.exports = router;
