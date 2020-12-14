const router = require('express').Router();
const passport = require('passport');
const authenticationController = require('../controllers/auth.controller');

const { logInUser, recoverPassword } = authenticationController;

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  logInUser
);
router.post('/recover-password', recoverPassword);

module.exports = router;
