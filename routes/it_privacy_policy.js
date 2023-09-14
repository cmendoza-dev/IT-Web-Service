const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('it_privacy_policy');
});

module.exports = router;
