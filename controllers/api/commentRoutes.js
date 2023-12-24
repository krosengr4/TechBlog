//! This file contains routes to create and delete a comment

const router =require("express").Router();
const { Comment } = require('../../models/Comment');
const withAuth = require('../../utils/withAuth');

// create a comment
router.post("/", async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        console.log(newComment);
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});