const router = require('express').Router();
const usersController = require('../controllers/users.controller');

const { findOne, findAll, create, update, remove } = usersController;

router.get('/:id', findOne);
router.get('/', findAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
