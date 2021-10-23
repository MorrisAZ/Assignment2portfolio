/*Express Portfolio
morris Zuniga
Student ID: 822704615*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/*get home page*/
router.get('/', indexController.displayHomePage);

/*get home page*/
router.get('/home', indexController.displayHomePage);

/*get services page*/
router.get('/services', indexController.displayServicesPage);

/*get projects page*/
router.get('/projects', indexController.displayProjectsPage);

/*get about page*/
router.get('/about', indexController.displayAboutPage);

/*get contact page*/
router.get('/contact', indexController.displayContactPage);

/*get route for displaying the login*/
router.get('/login', indexController.displayLoginPage);

/*POST route for processing the login page*/
router.post('/login', indexController.processLoginPage);

/*get route for processing register*/
router.get('/register', indexController.displayRegisterPage);

/*POST route for processing the register page*/
router.post('/register', indexController.processRegisterPage);

/*GET to perform user logout*/
router.get('/logout', indexController.performLogout)

module.exports = router;
