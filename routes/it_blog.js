const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('it_blog');
});

module.exports = router;
