const passport = require('passport');
const router = require('express').Router();
const Author = require('../mongoose/models/author.model');
const sendEmailWithPassword = require('../config/sendEmailWithPassword');

router.get('/', (req, res) => {
  const { user } = req.cookies;
  console.log('check cookie:', user);
  if (user) {
    Author.findOne({ _id: user }, (err, data) => {
      if (err) throw err;
      if (data) {
        console.log('Cookie works fine');
        res.status(200).send(data);
      } else {
        console.log('Cannot find user by cookie. Log in again.');
        res.status(401).send('Cannot find user by cookie. Log in again.');
      }
    });
  } else {
    console.log('User is not logged.');
    res.status(401).send('User is not logged.');
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, authUser) => {
    if (err) throw err;
    if (!authUser) return res.status(401).send('Wrong username or password.');
    req.logIn(authUser, (logErr) => {
      if (logErr) throw logErr;
      const { user } = req.cookies;
      if (user) {
        res.status(200).send(req.user);
      } else {
        console.log(req.user);
        res.status(200).cookie('user', req.user._id).send(req.user);
      }
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
