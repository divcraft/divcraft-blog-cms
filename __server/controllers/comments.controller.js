const Comments = require('../mongoose/models/comment.model');

module.exports = {
  findOne(req, res) {
    const { id } = req.params;
    Comments.findById(id, (err, data) => {
      if (err) {
        throw err;
      } else {
        res.json(data);
      }
    });
  },
  findAll(req, res) {
    Comments.find({}, (err, data) => {
      if (err) {
        throw err;
      } else {
        res.json(data);
      }
    });
  },
  create(req, res) {
    const newComment = new Comments({
      // ...
    });
    const validateErrors = newComment.validateSync();
    newComment.save((err) => {
      if (err) {
        res.json(validateErrors);
        throw err;
      } else {
        res.json('added correctly');
      }
    });
  },
  update(req, res) {
    const { id, updatedComment } = req.body;
    Comments.findByIdAndUpdate(id, updatedComment, (err) => {
      if (err) {
        throw err;
      } else {
        res.json('added correctly');
      }
    });
  },
  remove(req, res) {
    const { id } = req.params;
    Comments.findByIdAndDelete(id, (err) => {
      if (err) {
        throw err;
      } else {
        res.json(`object with ID ${id} has been deleted successfully`);
      }
    });
  },
};
