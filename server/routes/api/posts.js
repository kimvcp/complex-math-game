require('dotenv').config();
const express = require('express');
const mongodb = require('mongodb');

const play = require('../backend/play.js')
const router = express.Router();


var data, ant;

//Get Posts

//refernce to ./routes/api/posts
router.get('/', async (req, res) => {
  const posts = await loadHighScore();
  res.send(await posts.find({}).toArray());
});

//refernce to ./routes/api/posts
router.get('/end/:id/:highscore', async (req, res) => {
  const db = await loadHighScore();
  data = (await db.find({"number": parseInt(req.params.id)}).toArray());
  console.log(data);
  console.log(req.params.highscore);
  console.log(data[0]['highscore']);

  if(parseInt(req.params.highscore) > data[0]['highscore']){
    res.send("updated");
    await db.updateOne(
      { number: parseInt(req.params.id) },
      { 
         $set: {highscore: parseInt(req.params.highscore)}
      }
    )
  } else res.send("nothing");

});




async function loadHighScore() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://jamp:1234@expresscluster-ndwly.mongodb.net/test?retryWrites=true',
    {
      useNewUrlParser: true
    }
  );

  return client.db('express').collection('highscore');
}

module.exports = router;