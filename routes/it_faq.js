const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('it_faq');
});

module.exports = router;
