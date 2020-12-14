const User = require('../mongoose/models/user.model');
const sendError = require('../utils/sendError');
const sendEmailWithPassword = require('../utils/sendEmailWithPassword');

module.exports = {
  logInUser: (req, res) => {
    const { user } = req.cookies;
    if (user) {
      res.status(200).send(req.user);
    } else {
      const expiryDate = new Date();
      expiryDate.setMonth(expiryDate.getMonth() + 1);
      const cookieProps = {
        secure: true,
        sameSite: 'strict',
        expires: expiryDate,
      };
      res
        .status(200)
        .cookie('user', req.user._id, cookieProps)
        .send('User has been logged in.');
    }
  },
  recoverPassword: (req, res) => {
    const { email } = req.body;
    User.findOne({ privateEmail: email }, (err, userByPrivateEmail) => {
      if (err) sendError(err, res);
      if (userByPrivateEmail) {
        sendEmailWithPassword(userByPrivateEmail, email, res);
      } else {
        User.findOne(
          { divcraftEmail: email },
          (secErr, userByDivcraftEmail) => {
            if (secErr) sendError(secErr, res);
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
