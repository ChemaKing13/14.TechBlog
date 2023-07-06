const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
    });
    const posts = postData.map((post) => post.get({ plain: true}));

    res.render('homepage', { posts }); // Pass the posts variable to the template
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postId = req.params.id; 

    //fetch the post and its comments
    const postData = await Post.findByPk(postId, {
      include: [{ model: Comment, include: [{ model: User }] }],
    });
    //render the post.handlebars templete and pass the post and coments data
    res.render('post', {
      post: postData.toJSON(),
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  console.log(req.session);
  res.render('dashboard', { name: req.session.name, logged_in: req.session.logged_in });
});

router.get('/login', (req, res) => {
  res.render('login')
}); 

router.get('/signup', (req, res) => {
  res.render('signup')
});

module.exports = router;






