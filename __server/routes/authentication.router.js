const passport = require('passport');
const router = require('express').Router();
const Author = require('../mongoose/models/author.model');

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

  const sendEmailWithPassword = () => {
    res.status(200).send(`Email has been sent to ${email}.`);
  };
  Author.findOne({ privateEmail: email }, (err, privateEmail) => {
    if (err) throw err;
    if (!privateEmail) {
      Author.findOne({ divcraftEmail: email }, (secErr, divcraftEmail) => {
        if (secErr) throw err;
        if (!divcraftEmail) {
          res.status(204).send('Email is not found.');
        } else {
          sendEmailWithPassword();
        }
      });
    } else {
      sendEmailWithPassword();
    }
  });
});

module.exports = router;
