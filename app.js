const express = require('express');
const app = express();

const port = process.env.port || 3500;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`server ada di ${port}`);
})