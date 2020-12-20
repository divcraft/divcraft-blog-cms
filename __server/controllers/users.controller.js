const User = require('../mongoose/models/user.model');

module.exports = {
  findOne(req, res) {
    const { id } = req.params;
    User.findById(id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  },
  findAll(req, res) {
    User.find({}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  },
  create(req, res) {
    const newUser = new User({
      // ...
    });
    newUser.save((err) => {
      if (err) {
        res.status(500).send(err);
        throw err;
      } else {
        res.send('An user has been added correctly.', newUser);
      }
    });
  },
  update(req, res) {
    const { id, updatedUser } = req.body;
    User.findByIdAndUpdate(id, updatedUser, (err) => {
      if (err) {
        res.status(500).send(err);
        throw err;
      } else {
        res.send('An user has been updated correctly.', updatedUser);
      }
    });
  },
  remove(req, res) {
    const { id } = req.params;
    User.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(`An user with ID '${id}' has been deleted successfully.`);
      }
    });
  },
};
