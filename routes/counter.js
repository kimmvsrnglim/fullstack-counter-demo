var express = require('express');
var router = express.Router();
var counter = 0;

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ counter: counter });
});

/* POST ADD home page. */
router.post('/add', (req, res, next) => {
  counter++
  res.json({ counter: counter });
});

/* POST SUBTRACT home page. */
router.post('/subtract', (req, res, next) => {
  counter--
  res.json({ counter: counter });
});



module.exports = router;
