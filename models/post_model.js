const sequelize = require('../config/db');
const { DataTypes} = require('sequelize');
const User = require('./user_model');

const Post = sequelize.define('post',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING
    },
    user_Id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        allowNull: false
    }
});

Post.associations = function() {
    Post.belongsTo(User,{as:'User', foreignKey: 'user_Id' })
}
module.exports = Post;