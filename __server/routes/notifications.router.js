const router = require('express').Router();
const notificationsController = require('../controllers/notifications.controller');

const { findOne, findAll, create, update, remove } = notificationsController;

router.get('/:id', findOne);
router.get('/', findAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
