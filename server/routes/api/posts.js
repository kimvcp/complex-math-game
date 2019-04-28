require('dotenv').config();
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts

//refernce to ./routes/api/posts
router.get('/', async (req, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({}).toArray());
});

//Add Post

router.post('/',async (req , res) => {
    const posts = await loadPostCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete Post

router.delete('/:id', async (req , res) => {
    const posts = await loadPostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});

    res.status(200).send();
});

async function loadPostCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://jamp:1234@expresscluster-ndwly.mongodb.net/test?retryWrites=true',
    {
      useNewUrlParser: true
    }
  );

  return client.db('jamp').collection('expresscluster');
}

module.exports = router;