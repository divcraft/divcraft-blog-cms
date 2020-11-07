const Categories = require('../mongoose/models/author.model');

module.exports = {
   findOne(req, res) {
      const { id } = req.params;
      Categories.findById(id, (err, data) => {
         if (err) {
            throw err
         } else {
            res.json(data)
         }
      });
   },
   findAll(req, res) {
      Categories.find({}, (err, data) => {
         if (err) {
            throw err
         } else {
            res.json(data)
         }
      });
   },
   create(req, res) {
      const newCategory = new Categories({
         // ...
      })
      const validateErrors = newCategory.validateSync();
      newCategory.save(err => {
         if (err) {
            res.json(validateErrors)
            throw err
         } else {
            res.json('updated correctly')
         }
      })
   },
   update(req, res) {
      const { id, updatedCategory } = req.body
      Categories.findByIdAndUpdate(id, updatedCategory, (err) => {
         if (err) {
            throw err
         } else {
            res.json('added correctly')
         }
      })
   },
   remove(req, res) {
      const { id } = req.params;
      Categories.findByIdAndDelete(id, (err) => {
         if (err) {
            throw err
         } else {
            res.json(`object with ID ${id} has been deleted successfully`)
         }
      })
   },
}