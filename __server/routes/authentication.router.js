const passport = require('passport');
const router = require('express').Router();
const Author = require('../mongoose/models/author.model');
const sendEmailWithPassword = require('../config/sendEmailWithPassword');

router.get('/', (req, res) => {
  res.send(req.user);
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) throw err;
    if (!user) return res.status(204).send('Wrong username or password.');
    return req.logIn(user, (logErr) => {
      if (logErr) throw logErr;
      res.status(200).send(req.user);
    });
  })(req, res, next);
});

router.post('/recover', (req, res) => {
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
