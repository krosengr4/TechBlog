const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/withAuth');

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

// Delete a post
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
  router.put('/:id', withAuth, async (req, res) => {
    BlogPost.update(req.body, {
      where: { product_id: req.params.id }
    })
  })

  module.exports = router;