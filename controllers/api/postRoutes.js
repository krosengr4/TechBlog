//! This file contains routes to delete, update, and create a blog post

const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/withAuth');

// post route to create a new post
router.post('/', withAuth, async (req,res) => {
    try {
        const newBlogPost = await BlogPost.create({
        ...req.body,
        user_id: req.session.user_id,
    });

        res.status(200).json(newBlogPost);
    } catch (err) {
        res.status(400).json(err);
        console.log('Could not make a new post')
    }   
});

// Delete route to delete blog post
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const postData = await BlogPost.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No Blog Post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
  }
});

// Update a post
router.put('/post/:id', withAuth, async (req, res) => {
  try {
    const blogPostData = await BlogPost.update(
      {
        // id: req.params.id,
        // user_id: req.session.user_id,
        title: req.body.title,
        description: req.body.description,
      },
      { 
        where: {
        id: req.params.id ,
        user_id: req.session.user_id
      }
    });
    
    if (!blogPostData) {
      res.status(404).json({ message: 'No Blog Post found with this id!' });
      return;
    };

    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err)
  }
});

  module.exports = router;


/*{ Was on line 59 
  //   if (postData) {
    //     res.status(201).json({ id: req.params.id });
    // } else {
    //     res.status(500).json({ message: "There was an error while updating the post" });
    // }
} */



