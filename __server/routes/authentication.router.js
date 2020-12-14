const router = require('express').Router();
const authenticationController = require('../controllers/authentication.controller');

const { logInUser, recoverPassword } = authenticationController;

router.post('/login', logInUser);
router.post('/recover-password', recoverPassword);

module.exports = router;
