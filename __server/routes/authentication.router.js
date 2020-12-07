const passport = require('passport');
const router = require('express').Router();
const Author = require('../mongoose/models/author.model');
const sendEmailWithPassword = require('../utils/sendEmailWithPassword');
const sendError = require('../utils/sendError');

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, authUser) => {
    if (err) sendError(err, res);
    if (!authUser) return res.status(401).send('Wrong username or password.');
    req.logIn(authUser, (logErr) => {
      if (logErr) sendError(logErr, res);
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

  Author.findOne({ privateEmail: email }, (err, userByPrivateEmail) => {
    if (err) sendError(err, res);
    if (userByPrivateEmail) {
      sendEmailWithPassword(userByPrivateEmail, email, res);
    } else {
      Author.findOne(
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
});

module.exports = router;
