var express = require('express');
const commentController = require('../controllers/commentController');
var router = express.Router();

router.get('/create/:id', (req, res) => {
  commentController.showCreateCommentById(req, res);
})

router.post('/create',  (req, res) => {
  commentController.createComment(req, res);
});

router.get('/update/:id/:id_comment', (req, res) => {
  commentController.showUpdateComment(req, res);
})

router.post('/update', (req, res) => {
  commentController.updateComment(req, res);
})

module.exports = router;