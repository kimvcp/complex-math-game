require('dotenv').config();
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();



//localhost:5000/api/posts/
router.get('/', async (req, res) => {
  const posts = await loadHighScore();
  res.send(await posts.find({}).toArray());
});


//localhost:5000/api/posts/end/:id/:hishscore
router.get('/end/:id/:highscore', async (req, res) => {
  const db = await loadHighScore();
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