require("dotenv").config();
var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();

var player = require("../backend/player.js");
var play = require("../backend/play.js");

//Get all highscores.
// /api/game/highscores/
router.get('/highscores/', async (req, res) => {
  const posts = await loadScore();
  res.send(await posts.find({}).toArray());
});

//Get the multiplication.
// /api/game/play/<multiplication-number>
router.get("/play/:number/", function(req, res, next) {
  var body = req.body;
  var pl = new player("user", 0);
  var game = new play(req.params.number, pl);
  res.send(game.sent());
});

//Get highscore.
// /api/game/highscore/<multiplication-number>
router.get("/highscore/:number/", async (req, res) => {
  const db = await loadScore();
  var data = await db.find({ number: parseInt(req.params.number) }).toArray();
  res.send(data);
});

//Update highscore.
// /api/game/highscore/<multiplication-number>
router.post("/highscore/:number/:highscore/", async (req, res) => {
  const db = await loadScore();
  res.send(
    await db.updateOne(
      { number: parseInt(req.params.number) },
      {
        $set: { highscore: parseInt(req.params.highscore) }
      }
    )
  );
});

//Open connection with the database, function returns client for further interaction.
async function loadScore() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://" +
      process.env.DB_USER +
      ":" +
      process.env.DB_PASS +
      process.env.DB_URL,
    {
      useNewUrlParser: true
    }
  );

  return client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);
}

module.exports = router;
