const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    id: 1,
    header: 'MERN App Boilerplate',
    describe:
      'Create a brand-new fullstack application with composition of MongoDB, Express, React & Node.js.',
    author: 'Created by Tomasz Ogonowski',
    link: 'www.div-craft.com',
  });
});

module.exports = router;
