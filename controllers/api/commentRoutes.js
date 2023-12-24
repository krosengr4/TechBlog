//! This file contains routes to create and delete a comment

const router =require("express").Router();
const { Comment } = require('../../models');
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

// delete a comment
router.delete("/:id",isAuth, async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if(!commentData) {
        res.status(400).json({ message: "no comments found with this id" });
        return;
      }

      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;