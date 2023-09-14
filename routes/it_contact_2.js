const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('it_contact_2');
});

module.exports = router;
