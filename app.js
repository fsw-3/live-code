const express = require('express');
const routes = require('./routes/index.route');

const app = express();
const port = 3600;
const path = require('path');
const session = require('express-session');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('trust proxy', 1);
app.use(session({
    secret: process.env.COOKIE_SECRET || 'Rahasia',
    resave: false,
    saveUninitialized: false
}));

app.use(routes);

app.listen(port, () => {
    console.log(`server ada di port ${port}!`);
});