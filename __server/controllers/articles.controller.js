const Articles = require('../mongoose/models/article.model');

module.exports = {
   findOne(req, res) {
      const { id } = req.params;
      Articles.findById(id, (err, data) => {
         if (err) {
            throw err
         } else {
            res.json(data)
         }
      });
   },
   findAll(req, res) {
      Articles.find({}, (err, data) => {
         if (err) {
            throw err
         } else {
            res.json(data)
         }
      });
   },
   create(req, res) {
      const newArticle = new Articles({
         // ...
      })
      const validateErrors = newArticle.validateSync();
      newArticle.save(err => {
         if (err) {
            res.json(validateErrors)
            throw err
         } else {
            res.json('updated correctly')
         }
      })
   },
   update(req, res) {
      const { id, updatedArticle } = req.body
      Articles.findByIdAndUpdate(id, updatedArticle, (err) => {
         if (err) {
            throw err
         } else {
            res.json('added correctly')
         }
      })
   },
   remove(req, res) {
      const { id } = req.params;
      Articles.findByIdAndDelete(id, (err) => {
         if (err) {
            throw err
         } else {
            res.json(`object with ID ${id} has been deleted successfully`)
         }
      })
   },
}