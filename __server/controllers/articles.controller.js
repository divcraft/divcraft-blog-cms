const Articles = require('../mongoose/models/article.model');
const manageImages = require('../utils/manageImages');

module.exports = {
  findOne(req, res) {
    const { id } = req.params;
    Articles.findById(id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        // eslint-disable-next-line camelcase
        const { user_id, category_id, article } = data;
        res.send({
          user_id,
          category_id,
          article,
        });
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
    const articleData = req.body;
    try {
      const imagedArticle = await manageImages(articleData.article);
      const updatedArticleData = {
        ...articleData,
        article: imagedArticle,
      };
      const newArticle = new Articles(updatedArticleData);
      newArticle.save((err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(data._id);
        }
      });
    } catch (err) {
      res.send(err);
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const { toUpdate } = req.query;
    let updateConfig;
    try {
      if (toUpdate === 'article') {
        const { deletedPhotos } = req.body;
        let { article } = req.body;
        article = await manageImages(article, deletedPhotos);
        updateConfig = { article };
      } else {
        updateConfig = req.body;
      }
      Articles.findByIdAndUpdate(
        id,
        updateConfig,
        { new: true },
        (err, data) => {
          if (err) {
            res.status(500).send(err);
          } else if (toUpdate === 'article') {
              res.send(data.article);
            } else {
              res.send(data._id);
            }
        }
      );
    } catch (err) {
      res.send(err);
    }
  },
  remove(req, res) {
    const { id } = req.params;
    Articles.findByIdAndDelete(id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data._id);
      }
    });
  },
};
