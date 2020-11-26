const passport = require('passport');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(req.user);
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) throw err;
    if (!user) return res.status(204).send('User is not found');
    return req.logIn(user, (logErr) => {
      if (logErr) throw logErr;
      res.status(200).send(req.user);
    });
  })(req, res, next);
});

module.exports = router;
