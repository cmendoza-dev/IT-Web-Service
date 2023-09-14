const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('it_checkout');
});

module.exports = router;
