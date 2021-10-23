/*Express Portfolio
morris Zuniga
Student ID: 822704615*/

var express = require('express');
var router = express.Router();


/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About' });
  });

  module.exports = router;