const Notifications = require('../mongoose/models/notification.model');

module.exports = {
  findOne(req, res) {
    const { id } = req.params;
    Notifications.findById(id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  },
  findAll(req, res) {
    const { userId } = req.query;
    if (userId) {
      Notifications.find({ user_id: userId }, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(data);
        }
      });
    } else {
      Notifications.find({}, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(data);
        }
      });
    }
  },
  create(req, res) {
    const newCategory = new Notifications({
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
    Notifications.findByIdAndUpdate(id, updatedCategory, (err) => {
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
    Notifications.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(`A category with ID '${id}' has been deleted successfully.`);
      }
    });
  },
};
