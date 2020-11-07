const router = require('express').Router()
const authorsController = require('../controllers/authors.controller');

const { findOne, findAll, create, update, remove } = authorsController

router.get('/:id', findOne);
router.get('/', findAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove)

module.exports = router