const passport = require('passport');
const router = require('express').Router();
const Author = require('../mongoose/models/author.model');
const sendEmailWithPassword = require('../config/sendEmailWithPassword');

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, authUser) => {
    if (err) throw err;
    if (!authUser) return res.status(204).send('Wrong username or password.');
    req.logIn(authUser, (logErr) => {
      if (logErr) throw logErr;
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
          .send(req.user);
      }
    });
  })(req, res, next);
});

router.post('/recover-password', (req, res) => {
  const { email } = req.body;

  const recoverEmail = (user, foundEmail) => {
    sendEmailWithPassword(user, foundEmail);
    res.status(200).send(`Email has been sent to ${email}.`);
  };

  Author.findOne({ privateEmail: email }, (err, userByPrivateEmail) => {
    if (err) throw err;
    if (userByPrivateEmail) {
      recoverEmail(userByPrivateEmail, email);
    } else {
      Author.findOne(
        { divcraftEmail: email },
        (secErr, userByDivcraftEmail) => {
          if (secErr) throw err;
          if (userByDivcraftEmail) {
            recoverEmail(userByDivcraftEmail, email);
          } else {
            res.status(204).send('Email is not found.');
          }
        }
      );
    }
  });
});

module.exports = router;
