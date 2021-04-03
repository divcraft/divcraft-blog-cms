const Articles = require('../mongoose/models/article.model');
const manageImages = require('../utils/manageImages');

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
    const { query } = req;
    const queryConfig = {
      ...query,
    };
    Articles.find(queryConfig, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  },
  async create(req, res) {
    const article = req.body;
    const imagedArticle = await manageImages(article);
    res.send(imagedArticle);
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
