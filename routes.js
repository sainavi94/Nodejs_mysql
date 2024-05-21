const express = require('express');
const router = express.Router();

const UserModel = require('./models/user_model');
const PostModel = require('./models/post_model');
const InfoModel = require('./models/info_model');

const userRouter = require('./routes/user_routes');
const postRouter = require('./routes/post_routes');
const infoRouter = require('./routes/info_routes');

userRouter(router);
postRouter(router);
infoRouter(router);

PostModel.associations();
InfoModel.associations();
UserModel.associations();

module.exports = router