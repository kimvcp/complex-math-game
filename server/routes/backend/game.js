require("dotenv").config();
var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();

var player = require("./player.js");
var play = require("./play.js");

//Get the multiplication.
// /api/game/play/<multiplication-number>
router.get("/play/:number/", function(req, res, next) {
  var body = req.body;
  var pl = new player("user", 0);
  var game = new play("playing", req.params.number, pl);
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
// /api/game/new/highscore/<multiplication-number>
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
