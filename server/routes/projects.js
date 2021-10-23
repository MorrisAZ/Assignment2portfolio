/*Express Portfolio
morris Zuniga
Student ID: 822704615*/

var express = require('express');
var router = express.Router();


/* GET projects page. */
router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
  });

  module.exports = router;