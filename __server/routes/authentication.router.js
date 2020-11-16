const passport = require('passport');
const router = require('express').Router();

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) throw err;
    if (!user) return res.send('User is not found');
    return req.logIn(user, (logErr) => {
      if (logErr) throw logErr;
      res.send('User is logged in');
    });
  })(req, res, next);
});

module.exports = router;
