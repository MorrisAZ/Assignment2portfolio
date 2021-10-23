/*Express Portfolio
morris Zuniga
Student ID: 822704615*/

var express = require('express');
var router = express.Router();


/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
  });

  module.exports = router;