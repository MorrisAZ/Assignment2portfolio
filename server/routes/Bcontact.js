let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');
let bcontactController = require('../controllers/Bcontact');

//helper function for guard purposes
function requireAuth(req, res, next)
{

    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//connect to the Bcontact model

//let Bcontact = require('../models/Bcontact'); not needed

//let bcontactController = require('../controllers/Bcontact')

//creating a get route for business contact page -READ operation
router.get('/', bcontactController.displayBcontactList);

/*get route for displaying the ADD page - CREATE operation*/
router.get('/add', requireAuth, bcontactController.displayAddPage);

/*POST route for processing the ADD page - CREATE operation*/
router.post('/add', requireAuth, bcontactController.displayProcessAddPage);

/*GET route for displaying the EDIT page - UPDATE operation*/
router.get('/edit/:id', requireAuth, bcontactController.displayEditPage);

/*POST route for processing the EDiT page - UPDATE operation*/
router.post('/edit/:id', requireAuth, bcontactController.displayProcessEditPage);

/*GET to perform deletion - DELETE opreation*/
router.get('/delete/:id', requireAuth, bcontactController.displayProcessDeletePage);

module.exports = router;
