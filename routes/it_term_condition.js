const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('it_term_condition');
});

module.exports = router;