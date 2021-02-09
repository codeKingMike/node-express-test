const express = require('express');
const router = express.Router();
const Posts = require('../models/Post');

router.get('/', (req, res) => {
    res.send('We are posts');
});

router.post('/', async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }

});


module.exports = router;