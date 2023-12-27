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
        // console.log(newComment);
        console.log('new comment = ', newComment);
        res.redirect(`/`);
        // res.redirect(`/blogPost/${req.params.id}`);
    } catch (err) {
        res.status(400).json(err);
        console.log('Could not make a new comment');
    }
});

// delete a comment
// router.delete("/:id", withAuth, async (req, res) => {
//     try {
//       const commentData = await Comment.destroy({
//         where: {
//           id: req.params.id,
//           user_id: req.session.user_id,
//         },
//       });
  
//       if(!commentData) {
//         res.status(400).json({ message: "no comments found with this id" });
//         return;
//       }

//       res.status(200).json(commentData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

  module.exports = router;