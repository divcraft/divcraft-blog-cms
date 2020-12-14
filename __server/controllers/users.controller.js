const User = require('../mongoose/models/user.model');

module.exports = {
  findOne(req, res) {
    const { id } = req.params;
    User.findById(id, (err, data) => {
      if (err) {
        throw err;
      } else {
        res.json(data);
      }
    });
  },
  findAll(req, res) {
    User.find({}, (err, data) => {
      if (err) {
        throw err;
      } else {
        res.json(data);
      }
    });
  },
  create(req, res) {
    const newUser = new User({
      // ...
    });
    const validateErrors = newUser.validateSync();
    newUser.save((err) => {
      if (err) {
        res.json(validateErrors);
        throw err;
      } else {
        res.json('updated correctly');
      }
    });
  },
  update(req, res) {
    const { id, updatedUser } = req.body;
    User.findByIdAndUpdate(id, updatedUser, (err) => {
      if (err) {
        throw err;
      } else {
        res.json('added correctly');
      }
    });
  },
  remove(req, res) {
    const { id } = req.params;
    User.findByIdAndDelete(id, (err) => {
      if (err) {
        throw err;
      } else {
        res.json(`object with ID ${id} has been deleted successfully`);
      }
    });
  },
};
