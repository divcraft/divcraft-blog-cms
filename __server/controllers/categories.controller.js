const Categories = require('../mongoose/models/category.model');

module.exports = {
  findOne(req, res) {
    const { id } = req.params;
    Categories.findById(id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  },
  findAll(req, res) {
    Categories.find({}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  },
  create(req, res) {
    const newCategory = new Categories({
      // ...
    });
    newCategory.save((err) => {
      if (err) {
        res.status(500).send(err);
        throw err;
      } else {
        res.send('A category has been added correctly.', newCategory);
      }
    });
  },
  update(req, res) {
    const { id, updatedCategory } = req.body;
    Categories.findByIdAndUpdate(id, updatedCategory, (err) => {
      if (err) {
        res.status(500).send(err);
        throw err;
      } else {
        res.send('A category has been updated correctly.', updatedCategory);
      }
    });
  },
  remove(req, res) {
    const { id } = req.params;
    Categories.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(`A category with ID '${id}' has been deleted successfully.`);
      }
    });
  },
};
