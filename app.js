const express = require('express');
const app = express();

const routes = require('./routes/index.route');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});