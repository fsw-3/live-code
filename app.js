const express = require('express');
// const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});