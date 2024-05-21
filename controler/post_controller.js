const Post = require('../models/post_model');

const createPost = async(req,res) => {
    const payload = req.body;
    const data = await Post.create(payload);
    res.status(200).send(data)
}

module.exports = {
    createPost
}