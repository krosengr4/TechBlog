//! This file contains routes to create and delete a comment

const router =require("express").Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/withAuth');

// route to create a comment
router.post("/", async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            blogPost_id: req.params.id
        });

        res.status(200).json(newComment);
        // console.log('new comment = ', newComment);
    } catch (err) {
        res.status(400).json(err);
        console.log('Could not make a new comment');
    }
});

  module.exports = router;