const express = require('express');
const routes = require('./routes/index.route');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});