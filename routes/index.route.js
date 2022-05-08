const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const authorsRoute = require('./authors.route');
const booksRoute = require('./books.route');

const authController = require('../controllers/auth.controller');

// Homepage Routing
router.get('/', (req, res) => {
    res.render('index');
});

// Route for Authors
router.use('/authors', authorsRoute);

// Route for Books
router.use('/books', booksRoute);

// Authentication Resource
router.get('/whoami', authController.authorize, authController.whoAmI)

// Login Route
router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', (req, res) => {
    authController.login(req, res);
})

// Register Route
router.get('/register', (req, res) => {
    res.render('register');
})

router.post('/register', (req, res) => {
    authController.register(req, res);
})

module.exports = router;