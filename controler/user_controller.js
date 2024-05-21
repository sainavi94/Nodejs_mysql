const User = require('../models/user_model');
const Info = require('../models/info_model');
const Post = require('../models/post_model');

const createUser = async(req, res) => {
    const payload = req.body;
    const data = await User.create(payload);
    res.status(200).send(data)
};



const getAllUsers = async(req,res) => {
    const data = await User.findAll({
        include: [{model: Info, as: 'Info'}, {model:Post, as: 'Post'}]
    });
    res.status(200).send(data)
}
module.exports = {
    createUser,
    getAllUsers,
    // createUserType,
    // getAllUserTypes
}