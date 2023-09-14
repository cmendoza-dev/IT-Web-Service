const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('it_computer_repair');
});

module.exports = router;
