const Authors = require('../mongoose/models/author.model');

module.exports = {
   findOne(req, res) {
      const { id } = req.params;
      Authors.findById(id, (err, data) => {
         if (err) {
            throw err
         } else {
            res.json(data)
         }
      });
   },
   findAll(req, res) {
      Authors.find({}, (err, data) => {
         if (err) {
            throw err
         } else {
            res.json(data)
         }
      });
   },
   create(req, res) {
      const newAuthor = new Authors({
         // ...
      })
      const validateErrors = newAuthor.validateSync();
      newAuthor.save(err => {
         if (err) {
            res.json(validateErrors)
            throw err
         } else {
            res.json('updated correctly')
         }
      })
   },
   update(req, res) {
      const { id, updatedAuthor } = req.body
      Authors.findByIdAndUpdate(id, updatedAuthor, (err) => {
         if (err) {
            throw err
         } else {
            res.json('added correctly')
         }
      })
   },
   remove(req, res) {
      const { id } = req.params;
      Authors.findByIdAndDelete(id, (err) => {
         if (err) {
            throw err
         } else {
            res.json(`object with ID ${id} has been deleted successfully`)
         }
      })
   },
}