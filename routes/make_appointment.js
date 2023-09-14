const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('make_appointment');
});

module.exports = router;
