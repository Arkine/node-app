const express = require('express');
const router = express.Router();
const storeController = require("../controllers/storeController");
// Do work here
router.get('/', (req, res) => {
  res.render("hello.pug");
});

module.exports = router;
