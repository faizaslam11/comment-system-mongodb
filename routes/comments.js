const router = require('express').Router();
let comment = require('../models/comment.model');

router.route('/').get((req, res) => {
  comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const commentname = req.body.commentname;

  const newcomment = new comment({commentname});

  newcomment.save()
    .then(() => res.json('Comment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  comment.findById(req.params.id)
    .then(comment => res.json(comment))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  comment.findByIdAndDelete(req.params.id)
    .then(() => res.json('comment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;