const Articles = require('../mongoose/models/article.model');

module.exports = {
  findOne(req, res) {
    const { id } = req.params;
    Articles.findById(id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  },
  findAll(req, res) {
    const { userId, isFinished } = req.query;
    if (userId && isFinished) {
      Articles.find({ author_id: userId, isFinished: true }, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(data);
        }
      });
    } else {
      Articles.find({}, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(data);
        }
      });
    }
  },
  create(req, res) {
    const newArticle = new Articles({
      // ...
    });
    newArticle.save((err) => {
      if (err) {
        res.status(500).send(err);
        throw err;
      } else {
        res.send('An article has been updated correctly.', newArticle);
      }
    });
  },
  update(req, res) {
    const { id, updatedArticle } = req.body;
    Articles.findByIdAndUpdate(id, updatedArticle, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json('An article has been added correctly.', updatedArticle);
      }
    });
  },
  remove(req, res) {
    const { id } = req.params;
    Articles.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(`An article with ID '${id}' has been deleted successfully.`);
      }
    });
  },
};
