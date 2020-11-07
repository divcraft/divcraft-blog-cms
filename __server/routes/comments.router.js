const router = require('express').Router()
const commentsController = require('../controllers/comments.controller');

const { findOne, findAll, create, update, remove } = commentsController

router.get('/:id', findOne);
router.get('/', findAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove)

module.exports = router