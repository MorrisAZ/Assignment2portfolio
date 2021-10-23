/*Express Portfolio
morris Zuniga
Student ID: 822704615*/

var express = require('express');
var router = express.Router();


/* GET services page. */
router.get('/', function(req, res, next) {
    res.render('services', { title: 'Services' });
  });

  module.exports = router;