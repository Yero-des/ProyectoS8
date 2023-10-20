var express = require('express');
var router = express.Router();

const postController = require('../controllers/postController')

/* GET home page. */
router.get('/list', (req, res) => {
  postController.showPost(req, res);
});

// Add new post
router.get('/create', (req, res) => {
  console.log(req.query.error);
  if (req.query.post) {
    console.log(req.query.error);
  }
  res.render('add_post');
});

router.post('/create', (req, res) => {
  postController.createPost(req, res);
});

// Update post
router.get('/show/:id', (req, res) => {
  postController.showPostById(req, res);
});

router.post('/update/:id',  (req, res) => {
  postController.updatePost(req, res);
});

// Delete a post
router.post('/delete/:id',  (req, res) => {
  postController.deletePost(req, res);
});

module.exports = router;
