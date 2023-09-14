const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('it_about');
});

module.exports = router;
