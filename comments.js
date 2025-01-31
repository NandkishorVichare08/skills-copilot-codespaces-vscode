// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
// Get all comments
router.get('/', commentController.comment_list);
// Get comment by id
router.get('/create', commentController.comment_create_get);
// Create a new comment
router.post('/create', commentController.comment_create_post);
// Update a comment
router.get('/:id/delete', commentController.comment_delete_get);
module.exports = router;

