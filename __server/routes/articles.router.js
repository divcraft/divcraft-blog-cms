const router = require('express').Router();
const articlesController = require('../controllers/articles.controller');

const {
  findOne,
  findAll,
  findAllByAuthorId,
  create,
  update,
  remove,
} = articlesController;

router.get('/:id', findOne);
router.get('/', findAll);
router.get('/', findAllByAuthorId);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
