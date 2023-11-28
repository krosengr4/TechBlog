const router = require('express').Router();
const { BlogPost, User } = require('../models');
const withAuth = require('../utils/withAuth');

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
    const blogPosts = blogPostData.map((post) => post.get({ plain:true }));

        // Pass serialized data and session flag into template
    res.render('homepage', { 
        projects, 
        logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status.json(err);
    }
    });

    router.get('/blogPost/:id', async (req, res) => {
        try {
          const blogPostData = await BlogPost.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: ['name'],
              },
            ],
          });
      
          const blogpost = blogPostData.get({ plain: true });
      
          res.render('blogpost', {
            ...blogpost,
            logged_in: req.session.logged_in
          });
        } catch (err) {
          res.status(500).json(err);
        }
      });

