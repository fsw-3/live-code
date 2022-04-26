const express = require('express');
const routes = require('./routes/index.route');

const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//call router
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})