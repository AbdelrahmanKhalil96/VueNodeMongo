const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async(req,res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
    //res.send('hello');
});

 /* eslint-disable */
router.post('/', async(req, res) =>{
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        CreatedAt: new Date()
    });
    res.status(201).send()
});

router.delete('/:id', async(req, res) =>{
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send()
});

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect(
        'mongodb://localhost:27017/vue_express',{
            useNewUrlParser:true
        });
    return client.db('vue_express').collection('posts');
}

module.exports = router;
