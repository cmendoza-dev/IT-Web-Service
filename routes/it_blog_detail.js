const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('it_blog_detail');
});

module.exports = router;
