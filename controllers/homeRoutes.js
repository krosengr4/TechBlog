//! This file contains get routes for landing, new post, update post, blogpost:id, profile, and login pages

const router = require('express').Router();
const { Comment, BlogPost, User } = require('../models');
const withAuth = require('../utils/withAuth');

// get route for the home page / landing page
router.get('/', async (req, res) => {
    try {
    // Get all blogpost's and Join them w user data
    const blogPostData = await BlogPost.findAll({
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
    })
    const blogPost = blogPostData.map((blogPost) => blogPost.get({ plain:true }));

        // Pass serialized data and session flag into template
    res.render('homepage', { 
        blogPost, 
        logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// route to get profile page
router.get('/profile', withAuth, async (req, res) => {
try {
  const userData = await User.findByPk(req.session.user_id, {
    attributes: {exclude: ['password']},
    include: [{ model: BlogPost }],
  });

  const blogPostData = await BlogPost.findAll({
    where: { user_id: req.session.user_id },
    attributes: ["id", "name", "description", "date_created"],
});

const user = userData.get({ plain: true });
const blogPost = blogPostData.map((post) => post.get({ plain:true }));

res.render('profile', {
  ...user,
  blogPost,
  logged_in: true
});
} catch (err) {
res.status(500).json(err);
}
});

// get route for page to make new post
router.get('/newPost', (req, res) => {
  res.render('newPost', {
    logged_in: req.session.logged_in
  })
});

// Get comments route
router.get('/comments', async (req, res) => {
  try {
      // Get ALL Blogs and join with User data
      const commentData = await Comment.findAll();

      // console.log("comment data:", commentData);

      res.json(commentData);
  } catch (err) {
      res.status(500).json(err);
  };
});

// get route to show specific blogpost and comments
router.get('/blogPost/:id', async (req, res) => {
    try {
      const blogPostData = await BlogPost.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name']
          },
          {
            model: Comment, 
            include: {
              model: User,
              attributes: ['name']
            }
          },
        ],
      });

      const commentData = await Comment.findAll({
        where: { blogPost_id: req.params.id },
        attributes: ["id", "content", "date_created", "user_id", "blogPost_id"],
      })

      console.log(blogPostData.comments);
      console.log("logged in: ", req.session.logged_in);

      if(blogPostData) {
        const blogPost = blogPostData.get({ plain: true });
        const comment = commentData.map((post) => post.get({ plain:true })); 
        res.render("blogpost", {
          blogPost,
          comment,
          logged_in: req.session.logged_in
        });
      } else {
        res.status(400).json({ message: "No posts found with this id" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// route to get login page
router.get('/login', (req, res) => {

  console.log('login page logged_in', req.session.logged_in);

  if (req.session.logged_in) {
    res.redirect('/profile');
    return; 
  }
  console.log('You clicked the login page');

  res.render('login');
});

module.exports = router;
