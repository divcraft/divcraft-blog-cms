const User = require('../mongoose/models/user.model');
const sendEmailWithPassword = require('../utils/sendEmailWithPassword');

module.exports = {
  logInUser: (req, res) => {
    const { user } = req.cookies;
    if (user) {
      res.send('User has been logged in.');
    } else {
      const expiryDate = new Date();
      expiryDate.setMonth(expiryDate.getMonth() + 1);
      const cookieProps = {
        secure: true,
        sameSite: 'strict',
        expires: expiryDate,
      };
      res
        .cookie('user', req.user._id, cookieProps)
        .send('User has been logged in.');
    }
  },
  recoverPassword: (req, res) => {
    const { email } = req.body;
    User.findOne({ privateEmail: email }, (err, userByPrivateEmail) => {
      if (err) res.status(500).send(err);
      if (userByPrivateEmail) {
        sendEmailWithPassword(userByPrivateEmail, email, res);
      } else {
        User.findOne(
          { divcraftEmail: email },
          (secErr, userByDivcraftEmail) => {
            if (secErr) res.status(500).send(err);
            if (userByDivcraftEmail) {
              sendEmailWithPassword(userByPrivateEmail, email, res);
            } else {
              res.status(401).send('Email is not found.');
            }
          }
        );
      }
    });
  },
};
