const Comments = require('../mongoose/models/comment.model');

module.exports = {
  findOne(req, res) {
    const { id } = req.params;
    Comments.findById(id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  },
  findAll(req, res) {
    Comments.find({}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  },
  create(req, res) {
    const newComment = new Comments({
      // ...
    });
    newComment.save((err) => {
      if (err) {
        res.status(500).send(err);
        throw err;
      } else {
        res.send('A comment has been added correctly.', newComment);
      }
    });
  },
  update(req, res) {
    const { id, updatedComment } = req.body;
    Comments.findByIdAndUpdate(id, updatedComment, (err) => {
      if (err) {
        res.status(500).send(err);
        throw err;
      } else {
        res.send('A comment has been updated correctly.', updatedComment);
      }
    });
  },
  remove(req, res) {
    const { id } = req.params;
    Comments.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(`A comment with ID '${id}' has been deleted successfully.`);
      }
    });
  },
};
