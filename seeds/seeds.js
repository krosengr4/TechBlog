//! This file contains code to import the seeds from userData.json and blogPostData.json

const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = require('./userData.json');
const blogPostData = require('./blogPostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for ( const post of blogPostData) {
        await BlogPost.create({
            ...post, 
            user_id: users[Math.floor(Math.random()* users.length)].id,
        });
    }

    for ( const comment of commentData) {
        await Comment.create({
            ...comment,
            user_id: 1,
            blogPost_id: 3,
        });
    }
    process.exit(0);
};

seedDatabase();
