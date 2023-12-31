//! This file contains routes to create and delete a comment

const router =require("express").Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/withAuth');

// route to create a comment
router.post("/:id", withAuth, async (req, res) => {
    console.log('req. params. id: ', req.params.id );
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            // content: req.body,
            blogPost_id: req.params.id,
        });
        // console.log('USER DATA ', user_id);

        console.log('new comment = ', newComment);
        res.redirect(`/blogPost/${req.params.id}`);
        // res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
        console.log('Could not make a new comment', err);
    }
});

  module.exports = router;