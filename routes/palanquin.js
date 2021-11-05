var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('palanquin', { title: 'Search Results Palanquin' });
});

module.exports = router;
