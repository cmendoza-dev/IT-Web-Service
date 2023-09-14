const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('it_data_recovery');
});

module.exports = router;
