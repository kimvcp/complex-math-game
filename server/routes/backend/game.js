var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

var player = require('./player.js');
var play = require('./play.js');



//localhost:5000/backend/:id/
router.get('/:id/', function(req, res, next) {
  var body = req.body;

  console.log(body)

  var pl = new player("user", 0);
  console.log(pl)
  var game = new play("playing", req.params.id, pl);
  res.send(game.sent());
});



//localhost:5000/backend/
router.get('/', async (req, res) => {
  const posts = await loadScore();
  res.send(await posts.find({}).toArray());
});



//localhost:5000/backend/:id/:hishscore
router.get('/:id/:highscore/', async (req, res) => {
  const db = await loadScore();
  var data = (await db.find({"number": parseInt(req.params.id)}).toArray());

  if(parseInt(req.params.highscore) > data[0]['highscore']){

    res.send(await db.updateOne(
      { number: parseInt(req.params.id) },
      { 
         $set: {highscore: parseInt(req.params.highscore)}
      }
    ))
  } else res.send(data);

});


async function loadScore() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://jamp:1234@expresscluster-ndwly.mongodb.net/test?retryWrites=true',
    {
      useNewUrlParser: true
    }
  );

  return client.db('express').collection('highscore');
}


module.exports = router;
