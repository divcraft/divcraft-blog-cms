const router = require('express').Router()
const categoriesController = require('../controllers/categories.controller');

const { findOne, findAll, create, update, remove } = categoriesController

router.get('/:id', findOne);
router.get('/', findAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove)

module.exports = router