const express = require('express');
const router = require('./routes/index.route');

const app = express();
const port = 5000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
